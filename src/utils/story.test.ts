import { describe, expect, test } from "bun:test";
import { mages } from "../data/mages";
import { nemeses } from "../data/nemeses";
import type { Battle } from "../types";
import {
	fillTemplate,
	generateStory,
	joinNames,
	nemesisWithArticle,
} from "./story";

const battles = [1, 2, 3, 4].map(
	(tier) =>
		({
			number: tier,
			tier,
			nemesis: nemeses[tier][0],
			supply: [],
			remainingResets: 0,
			remainingRerolls: 0,
		}) as Battle,
);

describe("joinNames", () => {
	test("joins names the French way", () => {
		expect(joinNames(["A"])).toBe("A");
		expect(joinNames(["A", "B"])).toBe("A et B");
		expect(joinNames(["A", "B", "C"])).toBe("A, B et C");
	});
});

describe("nemesisWithArticle", () => {
	test("adds the article only when there is one", () => {
		const nemesis = nemeses[1][0];
		expect(nemesisWithArticle({ ...nemesis, article: "le", name: "X" })).toBe(
			"le X",
		);
		expect(nemesisWithArticle({ ...nemesis, article: undefined })).toBe(
			nemesis.name,
		);
	});
});

describe("fillTemplate", () => {
	test("names the team when it is known", () => {
		const team = mages.slice(0, 2);
		expect(fillTemplate("{mages}", { team })).toBe(
			`${team[0].name} et ${team[1].name}`,
		);
	});

	test("falls back to a generic wording otherwise", () => {
		expect(fillTemplate("{mages} / {mage}", { team: null })).toBe(
			"vos mages / l'un de vos mages",
		);
	});

	test("capitalizes {Nemesis}", () => {
		const nemesis = { ...nemeses[1][0], article: "la" as const, name: "Reine" };
		expect(fillTemplate("{Nemesis}", { team: null, nemesis })).toBe("La Reine");
	});
});

describe("generateStory", () => {
	test("has a transition between each battle and no leftover marker", () => {
		const story = generateStory(battles, mages.slice(0, 4), 2);
		expect(story.transitions.length).toBe(3);
		for (const text of [story.intro, ...story.transitions, story.epilogue]) {
			expect(text).not.toMatch(/\{\w+\}/);
			expect(text.length).toBeGreaterThan(20);
		}
		expect(story.intro).toContain(nemesisWithArticle(battles[0].nemesis));
		expect(story.transitions[2]).toContain(
			nemesisWithArticle(battles[3].nemesis),
		);
	});

	test("never repeats a respite within one campaign", () => {
		const story = generateStory(battles, mages.slice(0, 2), 2);
		const openings = story.transitions.map((t) => t.split(". ")[1]);
		expect(new Set(openings).size).toBe(openings.length);
	});
});
