import type { Expedition } from "../types";
import { getTypeLabel } from "./helpers";

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
		`${numPlayers} joueur(s)`,
		"",
		story.intro,
	];

	battles.forEach((battle, idx) => {
		if (idx > 0) lines.push("", story.transitions[idx - 1]);
		lines.push(
			"",
			RULE,
			`  AFFRONTEMENT ${battle.number} (palier ${battle.tier}) : ${battle.nemesis.name.toUpperCase()}`,
			RULE,
			"",
			battle.nemesis.description,
			`Difficulté : ${battle.nemesis.difficulty} | Vie : ${battle.nemesis.hp}`,
			"",
			`MAGES (${battle.mages.length} tiré(s)) :`,
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

export const downloadText = (filename: string, content: string): void => {
	const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
	const url = URL.createObjectURL(blob);
	const link = document.createElement("a");
	link.href = url;
	link.download = filename;
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
	URL.revokeObjectURL(url);
};
