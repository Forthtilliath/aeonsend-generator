import type { Tier } from "../types";

// Fragments de l'histoire générée entre les affrontements.
// Marqueurs : {nemesis} / {Nemesis} (nom avec article, minuscule / majuscule),
// {desc} (description de la némésis), {previous} / {Previous} (némésis vaincue),
// {mages} et {mage} (jamais en début de phrase : valent « vos mages » /
// « l'un de vos mages » quand l'équipe n'est pas encore choisie).
// {nemesis} n'est jamais précédé de « de » ou « à » (pas de « de le »), et
// aucun mot ne s'accorde avec son genre.

export const INTROS = [
	"Les cloches de Gravehold sonnent l'alarme. Devant les brèches, {mages} se rassemblent : quelque chose remonte des profondeurs.",
	"Depuis des générations, Gravehold résiste aux Sans-Noms. Cette nuit, c'est au tour de {mages} de monter la garde aux portes de la cité.",
	"Un tremblement parcourt les galeries de Gravehold. Penché sur une brèche, {mage} sent l'éther s'agiter : la frontière est sur le point de céder.",
	"Les éclaireurs sont revenus blêmes. Une créature venue d'au-delà des brèches marche sur la cité, et il ne reste plus que {mages} pour lui barrer la route.",
];

export const ARRIVALS = [
	"C'est alors que {nemesis} surgit des ténèbres : {desc}.",
	"Face à eux se dresse {nemesis} — {desc}.",
	"Une silhouette se découpe dans la lueur des brèches : {nemesis}, {desc}.",
	"Les murs tremblent lorsque {nemesis} franchit la brèche : {desc}.",
];

export const DEFEATS = [
	"{Previous} s'effondre dans un fracas d'éther.",
	"{Previous} se dissipe dans les brèches, ne laissant qu'un silence pesant.",
	"{Previous} recule et disparaît dans l'abîme.",
	"Dans un dernier hurlement, {previous} disparaît au-delà des brèches.",
];

export const RESPITES = [
	"Les survivants pansent leurs blessures pendant que {mage} étudie les reliques récupérées sur le champ de bataille.",
	"Gravehold fête sa victoire le temps d'une nuit, mais {mage} ne dort pas : l'éther murmure qu'un danger plus grand approche.",
	"Dans les archives de la cité, {mage} découvre une prophétie inquiétante : la menace ne fait que commencer.",
	"Les étals du marché rouvrent, garnis de gemmes et de sorts inconnus. Les marchands savent que la trêve sera courte.",
];

export const ESCALATIONS: Record<Tier, string[]> = {
	1: ["Une nouvelle menace se profile déjà."],
	2: [
		"Le danger grandit : les brèches s'élargissent de jour en jour.",
		"Les Sans-Noms envoient désormais un adversaire plus redoutable.",
	],
	3: [
		"Ce qui approche est bien plus ancien, et bien plus puissant.",
		"Même les plus vieux mages de Gravehold n'avaient jamais ressenti une telle pression de l'éther.",
	],
	4: [
		"L'ultime épreuve commence : le sort de Gravehold se jouera ici.",
		"Les brèches hurlent toutes à la fois. Le maître des lieux en personne s'avance.",
	],
};

export const EPILOGUES = [
	"Si {nemesis} tombe, les cloches de Gravehold sonneront enfin pour célébrer la paix. Sinon, les brèches resteront à jamais ouvertes…",
	"Le destin de Gravehold repose désormais entre les mains de {mages}. Que l'éther guide leurs sorts.",
	"Quelle que soit l'issue, on chantera longtemps le courage de {mages} dans les galeries de Gravehold.",
];
