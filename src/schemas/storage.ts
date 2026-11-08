import { z } from "zod";
import { ALL_EXPANSIONS } from "../data/expansions";
import type { Expansion, MarketTemplate, SetupConfig } from "../types";

// Tout ce qui est relu depuis le localStorage passe par ces schémas : une
// valeur invalide (modifiée à la main, ancienne version de l'app…) est rejetée
// en bloc et remplacée par la valeur par défaut, et les clés inconnues sont
// supprimées.

const cardType = z.enum(["gem", "relic", "spell", "any"]);
const cost = z.number().int().min(0).max(9);

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
		.refine((c) => c.cost <= c.costMax, "Coût minimum supérieur au maximum"),
]);

const marketConfigSchema = z.tuple([
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
			id: z.string().min(1).max(64),
			name: z.string().trim().min(1).max(40),
			config: marketConfigSchema,
		}),
	)
	.max(50) satisfies z.ZodType<MarketTemplate[]>;

export const ownedExpansionsSchema = z
	.array(z.enum(ALL_EXPANSIONS as [Expansion, ...Expansion[]]))
	.max(ALL_EXPANSIONS.length);

export const setupConfigSchema = z.object({
	numPlayers: z.number().int().min(1).max(4),
	extraMages: z.number().int().min(0).max(8),
	battleCount: z.union([z.literal(1), z.literal(4)]),
	tier: z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4)]),
	marketResets: z.number().int().min(0).max(10),
	cardRerolls: z.number().int().min(0).max(20),
	removeExcess: z.boolean(),
}) satisfies z.ZodType<SetupConfig>;

/** Bornes partagées avec les champs du formulaire. */
export const SETUP_LIMITS = {
	numPlayers: [1, 4],
	extraMages: [0, 8],
	marketResets: [0, 10],
	cardRerolls: [0, 20],
} as const;
