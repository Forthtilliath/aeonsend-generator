import { formatFileTimestamp } from "@forthtilliath/ts-kit";
import type { Expedition } from "../types";
import { getTypeLabel, plural } from "./helpers";

const RULE = "=".repeat(63);

export const buildExpeditionText = (expedition: Expedition): string => {
	const { battles, numPlayers, story } = expedition;
	const title =
		battles.length > 1
			? `CAMPAGNE DE ${battles.length} AFFRONTEMENTS`
			: "AFFRONTEMENT UNIQUE";

	const lines = [
		`AEON'S END - ${title}`,
		RULE,
		"",
		`${numPlayers} ${plural(numPlayers, "joueur")}`,
		"",
		story.intro,
	];

	battles.forEach((battle, idx) => {
		const transition = idx > 0 ? story.transitions[idx - 1] : undefined;
		if (transition) lines.push("", transition);
		lines.push(
			"",
			RULE,
			`  AFFRONTEMENT ${battle.number} (palier ${battle.tier}) : ${battle.nemesis.name.toUpperCase()}`,
			RULE,
			"",
			battle.nemesis.description,
			`Difficulté : ${battle.nemesis.difficulty} | Vie : ${battle.nemesis.hp}`,
			"",
			`MAGES (${battle.mages.length} ${plural(battle.mages.length, "tiré")}) :`,
			...battle.mages.map((m) => `  - ${m.name} (${m.title})`),
			"",
			"MARCHÉ :",
			...battle.supply.map(
				(c) => `  - ${c.name} - ${c.cost} Éther (${getTypeLabel(c.type)})`,
			),
		);
	});

	lines.push("", RULE, "", story.epilogue, "");
	return lines.join("\n");
};

/** Nom du fichier exporté, horodaté pour ne pas écraser un export précédent. */
export const expeditionFileName = (
	expedition: Expedition,
	date = new Date(),
): string =>
	`aeons-end-${expedition.battles.length > 1 ? "campagne" : "affrontement"}-${formatFileTimestamp(date)}.txt`;
