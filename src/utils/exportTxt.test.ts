import { describe, expect, test } from "bun:test";
import type { Expedition } from "../types";
import { expeditionFileName } from "./exportTxt";

const withBattles = (count: number) =>
	({ battles: Array.from({ length: count }) }) as unknown as Expedition;

describe("expeditionFileName", () => {
	const date = new Date(2026, 10, 8, 9, 5);

	test("names a campaign, with a local timestamp", () => {
		expect(expeditionFileName(withBattles(4), date)).toBe(
			"aeons-end-campagne-20261108-0905.txt",
		);
	});

	test("names a single battle", () => {
		expect(expeditionFileName(withBattles(1), date)).toBe(
			"aeons-end-affrontement-20261108-0905.txt",
		);
	});
});
