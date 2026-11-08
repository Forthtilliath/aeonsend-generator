import { shuffle } from "@forthtilliath/ts-kit";
import {
	ARRIVALS,
	DEFEATS,
	EPILOGUES,
	ESCALATIONS,
	INTROS,
	RESPITES,
} from "../data/story";
import type { Battle, Mage, Nemesis, Story } from "../types";
import { pickRandomItem, secureRandom } from "./helpers";

const capitalize = (text: string): string =>
	text.charAt(0).toUpperCase() + text.slice(1);

const lowerFirst = (text: string): string =>
	text.charAt(0).toLowerCase() + text.slice(1);

export const nemesisWithArticle = (nemesis: Nemesis): string =>
	nemesis.article ? `${nemesis.article} ${nemesis.name}` : nemesis.name;

const namesList = new Intl.ListFormat("fr", { type: "conjunction" });

/** Liste « A, B et C » à la française. */
export const joinNames = (names: string[]): string => namesList.format(names);

interface StoryContext {
	nemesis?: Nemesis;
	previous?: Nemesis;
	/** Équipe connue (aucun mage en trop au tirage), sinon `null`. */
	team: Mage[] | null;
}

export const fillTemplate = (template: string, ctx: StoryContext): string => {
	const values: Record<string, string> = {
		mages: ctx.team ? joinNames(ctx.team.map((m) => m.name)) : "vos mages",
		mage: ctx.team ? pickRandomItem(ctx.team).name : "l'un de vos mages",
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
			deck = shuffle(templates, secureRandom);
			decks.set(templates, deck);
		}
		return fillTemplate(deck.pop() ?? templates[0], ctx);
	};
};

/**
 * Génère une courte histoire : une introduction menant au premier affrontement,
 * une transition avant chacun des suivants, et un épilogue. Les mages étant
 * tirés à chaque affrontement, chaque phrase nomme l'équipe de celui qu'elle
 * évoque (la victoire passée ou le combat à venir).
 */
export const generateStory = (battles: Battle[], numPlayers: number): Story => {
	const pick = createPicker();
	const teamOf = (battle: Battle): Mage[] | null =>
		battle.mages.length === numPlayers ? battle.mages : null;
	const first = battles[0];
	const last = battles[battles.length - 1];

	const intro = [
		pick(INTROS, { team: teamOf(first) }),
		pick(ARRIVALS, { team: teamOf(first), nemesis: first.nemesis }),
	].join(" ");

	const transitions = battles.slice(1).map((battle, i) => {
		const previous = battles[i];
		const past = {
			team: teamOf(previous),
			nemesis: battle.nemesis,
			previous: previous.nemesis,
		};
		const coming = { ...past, team: teamOf(battle) };
		return [
			pick(DEFEATS, past),
			pick(RESPITES, past),
			pick(ESCALATIONS[battle.tier], coming),
			pick(ARRIVALS, coming),
		].join(" ");
	});

	const epilogue = pick(EPILOGUES, {
		team: teamOf(last),
		nemesis: last.nemesis,
	});

	return { intro, transitions, epilogue };
};
