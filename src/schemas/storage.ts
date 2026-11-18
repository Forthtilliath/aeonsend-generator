// zod/mini : mêmes contrôles que zod classique, mais seuls ceux utilisés
// finissent dans le bundle (~80 ko de moins).
import { z } from "zod/mini";
import {
	ALL_EXPANSIONS,
	HIDDEN_EXPANSIONS,
	RENAMED_EXPANSIONS,
} from "../data/expansions";
import type { Expansion, MarketTemplate, SetupConfig } from "../types";
import { ALL_CARDS, type CardBans } from "../utils/cardBans";

// Tout ce qui est relu depuis le localStorage passe par ces schémas : une
// valeur invalide (modifiée à la main, ancienne version de l'app…) est rejetée
// en bloc et remplacée par la valeur par défaut, et les clés inconnues sont
// supprimées.

const intBetween = (min: number, max: number) =>
	z.int().check(z.minimum(min), z.maximum(max));

const cardType = z.enum(["gem", "relic", "spell", "any"]);
const cost = intBetween(0, 9);

export const marketConditionSchema = z.discriminatedUnion("operator", [
	z.object({ type: cardType, operator: z.literal("any"), cost: z.null() }),
	z.object({
		type: cardType,
		operator: z.enum(["<=", ">=", "="]),
		cost,
	}),
	z
		.object({
			type: cardType,
			operator: z.literal("range"),
			cost,
			costMax: cost,
		})
		.check(
			z.refine((c) => c.cost <= c.costMax, "Coût minimum supérieur au maximum"),
		),
]);

export const marketConfigSchema = z.tuple([
	marketConditionSchema,
	marketConditionSchema,
	marketConditionSchema,
	marketConditionSchema,
	marketConditionSchema,
	marketConditionSchema,
	marketConditionSchema,
	marketConditionSchema,
	marketConditionSchema,
]);

export const userPresetsSchema = z
	.array(
		z.object({
			id: z.string().check(z.minLength(1), z.maxLength(64)),
			name: z.string().check(z.trim(), z.minLength(1), z.maxLength(40)),
			config: marketConfigSchema,
		}),
	)
	.check(z.maxLength(50)) satisfies z.ZodMiniType<MarketTemplate[]>;

/** Identifiant du marché choisi : modèle fourni, preset perso ou « custom ». */
export const selectedMarketSchema = z
	.string()
	.check(z.minLength(1), z.maxLength(64), z.regex(/^[\w-]+$/));

/**
 * Avant validation : retire les boîtes masquées et remplace les anciens noms.
 * Toute autre valeur est laissée telle quelle, donc rejetée si elle est inconnue.
 */
const normalizeExpansions = (value: unknown): unknown =>
	Array.isArray(value)
		? value
				.filter(
					(item) => !(typeof item === "string" && HIDDEN_EXPANSIONS.has(item)),
				)
				.map((item) =>
					typeof item === "string"
						? (RENAMED_EXPANSIONS.get(item) ?? item)
						: item,
				)
		: value;

export const ownedExpansionsSchema = z.pipe(
	z.transform(normalizeExpansions),
	z
		.array(z.enum(ALL_EXPANSIONS as [Expansion, ...Expansion[]]))
		.check(z.maxLength(ALL_EXPANSIONS.length)),
);

export const setupConfigSchema = z.object({
	numPlayers: intBetween(1, 4),
	extraMages: intBetween(0, 3),
	battleCount: z.union([z.literal(1), z.literal(4)]),
	tier: z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4)]),
	marketResets: intBetween(0, 2),
	cardRerolls: intBetween(0, 3),
	removeExcess: z.boolean(),
	// Absent des réglages enregistrés avant son ajout : Gravehold par défaut.
	xaxosOutcast: z._default(z.boolean(), false),
}) satisfies z.ZodMiniType<SetupConfig>;

const cardKeys = z
	.array(z.string().check(z.minLength(1), z.maxLength(80)))
	.check(z.maxLength(ALL_CARDS.length));
const knownCardIds = new Set(ALL_CARDS.map((card) => card.id));
/**
 * Bans enregistrés par nom avant le passage aux id (2026-11-18), y compris
 * sous un nom corrigé depuis.
 */
const idByLegacyName = new Map<string, string>([
	...ALL_CARDS.map((card): [string, string] => [card.name, card.id]),
	["Agréagat de diamants", "AE03"],
]);
/** Id connus, sans doublon : une carte retirée depuis est oubliée. */
const toKnownIds = (keys: string[]): string[] => [
	...new Set(
		keys
			.map((key) => (knownCardIds.has(key) ? key : idByLegacyName.get(key)))
			.filter((id): id is string => id !== undefined),
	),
];

export const cardBansSchema = z.pipe(
	z.object({ banned: cardKeys }),
	z.transform((bans): CardBans => ({ banned: toKnownIds(bans.banned) })),
);

/** Bornes partagées avec les champs du formulaire. */
export const SETUP_LIMITS = {
	numPlayers: [1, 4],
	extraMages: [0, 3],
	marketResets: [0, 2],
	cardRerolls: [0, 3],
} as const;
