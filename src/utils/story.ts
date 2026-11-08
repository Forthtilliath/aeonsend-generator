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
	const values = new Map<string, string>([
		["mages", ctx.team ? joinNames(ctx.team.map((m) => m.name)) : "vos mages"],
		["mage", ctx.team ? pickRandomItem(ctx.team).name : "l'un de vos mages"],
	]);
	if (ctx.nemesis) {
		const nemesis = nemesisWithArticle(ctx.nemesis);
		values.set("nemesis", nemesis);
		values.set("Nemesis", capitalize(nemesis));
		values.set("desc", lowerFirst(ctx.nemesis.description));
	}
	if (ctx.previous) {
		const previous = nemesisWithArticle(ctx.previous);
		values.set("previous", previous);
		values.set("Previous", capitalize(previous));
	}
	return template.replace(
		/\{(\w+)\}/g,
		(match, key: string) => values.get(key) ?? match,
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
		const template = deck.pop();
		if (template === undefined) {
			throw new Error("createPicker: cannot pick from an empty template group");
		}
		return fillTemplate(template, ctx);
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
	const [first, ...rest] = battles;
	if (!first) throw new Error("generateStory: no battle to tell");
	const last = rest.at(-1) ?? first;

	const intro = [
		pick(INTROS, { team: teamOf(first) }),
		pick(ARRIVALS, { team: teamOf(first), nemesis: first.nemesis }),
	].join(" ");

	const transitions: string[] = [];
	let previous = first;
	for (const battle of rest) {
		const past = {
			team: teamOf(previous),
			nemesis: battle.nemesis,
			previous: previous.nemesis,
		};
		const coming = { ...past, team: teamOf(battle) };
		transitions.push(
			[
				pick(DEFEATS, past),
				pick(RESPITES, past),
				pick(ESCALATIONS[battle.tier], coming),
				pick(ARRIVALS, coming),
			].join(" "),
		);
		previous = battle;
	}

	const epilogue = pick(EPILOGUES, {
		team: teamOf(last),
		nemesis: last.nemesis,
	});

	return { intro, transitions, epilogue };
};
