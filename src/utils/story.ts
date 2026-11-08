import {
	ARRIVALS,
	DEFEATS,
	EPILOGUES,
	ESCALATIONS,
	INTROS,
	RESPITES,
} from "../data/story";
import type { Battle, Mage, Nemesis, Story } from "../types";
import { getRandomItemFromArray, shuffle } from "./helpers";

const capitalize = (text: string): string =>
	text.charAt(0).toUpperCase() + text.slice(1);

const lowerFirst = (text: string): string =>
	text.charAt(0).toLowerCase() + text.slice(1);

export const nemesisWithArticle = (nemesis: Nemesis): string =>
	nemesis.article ? `${nemesis.article} ${nemesis.name}` : nemesis.name;

export const joinNames = (names: string[]): string =>
	names.length <= 1
		? (names[0] ?? "")
		: `${names.slice(0, -1).join(", ")} et ${names[names.length - 1]}`;

interface StoryContext {
	nemesis?: Nemesis;
	previous?: Nemesis;
	/** Équipe connue (aucun mage en trop au tirage), sinon `null`. */
	team: Mage[] | null;
}

export const fillTemplate = (template: string, ctx: StoryContext): string => {
	const values: Record<string, string> = {
		mages: ctx.team ? joinNames(ctx.team.map((m) => m.name)) : "vos mages",
		mage: ctx.team
			? getRandomItemFromArray(ctx.team).name
			: "l'un de vos mages",
	};
	if (ctx.nemesis) {
		values.nemesis = nemesisWithArticle(ctx.nemesis);
		values.Nemesis = capitalize(values.nemesis);
		values.desc = lowerFirst(ctx.nemesis.description);
	}
	if (ctx.previous) {
		values.previous = nemesisWithArticle(ctx.previous);
		values.Previous = capitalize(values.previous);
	}
	return template.replace(/\{(\w+)\}/g, (match, key: string) =>
		key in values ? values[key] : match,
	);
};

/**
 * Tirage sans remise : une même phrase ne revient pas deux fois dans une
 * histoire tant que son groupe n'est pas épuisé.
 */
const createPicker = () => {
	const decks = new Map<string[], string[]>();
	return (templates: string[], ctx: StoryContext): string => {
		let deck = decks.get(templates);
		if (!deck || deck.length === 0) {
			deck = shuffle(templates);
			decks.set(templates, deck);
		}
		return fillTemplate(deck.pop() ?? templates[0], ctx);
	};
};

/**
 * Génère une courte histoire : une introduction menant au premier affrontement,
 * une transition avant chacun des suivants, et un épilogue.
 */
export const generateStory = (
	battles: Battle[],
	mages: Mage[],
	numPlayers: number,
): Story => {
	const pick = createPicker();
	const team = mages.length === numPlayers ? mages : null;
	const first = battles[0];
	const last = battles[battles.length - 1];

	const intro = [
		pick(INTROS, { team }),
		pick(ARRIVALS, { team, nemesis: first.nemesis }),
	].join(" ");

	const transitions = battles.slice(1).map((battle, i) => {
		const ctx = { team, nemesis: battle.nemesis, previous: battles[i].nemesis };
		return [
			pick(DEFEATS, ctx),
			pick(RESPITES, ctx),
			pick(ESCALATIONS[battle.tier], ctx),
			pick(ARRIVALS, ctx),
		].join(" ");
	});

	const epilogue = pick(EPILOGUES, { team, nemesis: last.nemesis });

	return { intro, transitions, epilogue };
};
