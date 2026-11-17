import { allCards } from "../data/catalog";
import type { Card } from "../types";

/**
 * Cartes que le joueur exclut du tirage (cartes qu'il n'a pas, qu'il n'aime
 * pas…), enregistrées par nom. Aucune carte n'est bannie par défaut.
 */
export interface CardBans {
	banned: string[];
}

export const NO_CARD_BANS: CardBans = { banned: [] };

export const ALL_CARDS: Card[] = Object.values(allCards).flat();

export const isCardBanned = (card: Card, bans: CardBans): boolean =>
	bans.banned.includes(card.name);

/** Noms des cartes exclues du tirage. */
export const getBannedNames = (bans: CardBans): Set<string> =>
	new Set(bans.banned);

/** Bannit ou réautorise une carte. */
export const toggleCardBan = (bans: CardBans, card: Card): CardBans => ({
	banned: isCardBanned(card, bans)
		? bans.banned.filter((name) => name !== card.name)
		: [...bans.banned, card.name],
});
