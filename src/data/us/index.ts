import { cards as wave6Cards } from "./cards/wave6";
import { cards as wave7Cards } from "./cards/wave7";
import { cards as wave8Cards } from "./cards/wave8";
import { cards as wave9Cards } from "./cards/wave9";
import { mages as wave7Mages } from "./mages/wave7";
import { mages as wave8Mages } from "./mages/wave8";
import { mages as wave9Mages } from "./mages/wave9";

export { nemeses as usNemeses } from "./nemeses";

/** Fichiers de cartes des boîtes inédites en français, un par vague. */
export const US_CARD_FILES = {
	"us/cards/wave6.ts": wave6Cards,
	"us/cards/wave7.ts": wave7Cards,
	"us/cards/wave8.ts": wave8Cards,
	"us/cards/wave9.ts": wave9Cards,
};

export const usMages = [...wave7Mages, ...wave8Mages, ...wave9Mages];
