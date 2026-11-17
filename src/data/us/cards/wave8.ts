import type { CardsByType } from "../../../types";

// Extensions de la vague 8 (The Caverns, The Abyss, Tales of Old Gravehold) :
// traduction maison d'après https://aeonsend.wiki.gg/.
export const cards: CardsByType = {
	gems: [
		{
			id: "TC11",
			name: "Électinium",
			nameEn: "Electinium",
			cost: 3,
			developCost: 2,
			description:
				"Lorsque vous acquérez cette carte, placez un jeton Électrisation sur un ennemi. Gagnez 2 Ether.",
			expansion: "The Caverns",
		},
		{
			id: "AB02",
			name: "Joyau spirituel",
			nameEn: "Spirit Jewel",
			cost: 4,
			description:
				"Gagnez 2 Ether. Vous pouvez faire subir 1 dégât à Gravehold. Si vous le faites, gagnez 1 Ether supplémentaire.",
			expansion: "The Abyss",
		},
		{
			id: "AB09",
			name: "Grenat pulsant",
			nameEn: "Pulsing Garnet",
			cost: 5,
			description:
				"Gagnez 3 Ether. Vous pouvez faire gagner 2 points de vie à un ennemi. Si vous le faites, un allié pioche une carte.",
			expansion: "The Abyss",
		},
		{
			id: "AB16",
			name: "Murmure d'améthyste",
			nameEn: "Whisper of Amethyst",
			cost: 6,
			description:
				"Gagnez 3 Ether. Vous pouvez défausser la première carte du paquet Némésis. Si vous le faites, un allié gagne 2 jetons Éther.",
			expansion: "The Abyss",
		},
	],
	relics: [
		{
			id: "TC23",
			name: "Conduit magnétique",
			nameEn: "Magnetic Conduit",
			cost: 6,
			developCost: 4,
			description:
				"Connectez cette relique à la brèche ouverte d'un joueur. Lorsqu'un sort est lancé depuis cette brèche, ne le défaussez pas. Ce sort ne peut plus être lancé durant cette phase d'incantation.",
			expansion: "The Caverns",
		},
		{
			id: "TC28",
			name: "Conduit élémentaire",
			nameEn: "Elemental Conduit",
			cost: 8,
			developCost: 5,
			description:
				"Connectez cette relique à la brèche d'un joueur. Lorsqu'un sort est lancé depuis cette brèche, placez un jeton Élémentaire sur un ennemi avant d'appliquer l'effet de ce sort.",
			expansion: "The Caverns",
		},
		{
			id: "AB23",
			name: "Démon en bouteille",
			nameEn: "Bottled Demon",
			cost: 2,
			description:
				"Gagnez 1 charge. Vous pouvez faire gagner 2 points de vie à un ennemi. Si vous le faites, gagnez 1 charge supplémentaire.",
			expansion: "The Abyss",
		},
		{
			id: "AB28",
			name: "Fil du destin",
			nameEn: "Fate's Edge",
			cost: 6,
			description:
				"Un joueur et Gravehold gagnent chacun 1 point de vie. OU Détruisez cette carte. Placez les deux dernières cartes du paquet Némésis sur le dessus de ce paquet. Puis mélangez la carte Ordre du tour d'un joueur dans le paquet d'ordre du tour.",
			expansion: "The Abyss",
		},
		{
			id: "TOG03",
			name: "Orbe noirci",
			nameEn: "Blackened Orb",
			cost: 4,
			description:
				"Lancez le sort préparé d'un joueur sans le défausser : ce sort inflige 2 dégâts de moins (minimum 0). OU Lancez le sort préparé d'un joueur et détruisez-le : ce sort inflige 1 dégât supplémentaire.",
			expansion: "Tales of Old Gravehold",
		},
	],
	spells: [
		{
			id: "TC18",
			name: "Purger l'essence",
			nameEn: "Expunge Essence",
			cost: 5,
			description:
				"Lancer : Retirez un jeton Élémentaire d'un ennemi. Si vous le faites, infligez-lui 6 dégâts. OU Lancer : Placez un jeton Immolation sur un ennemi et infligez-lui 2 dégâts.",
			expansion: "The Caverns",
		},
		{
			id: "TC33",
			name: "Légende incandescente",
			nameEn: "Combust Legend",
			cost: 4,
			description:
				"Lorsque préparé, après qu'un joueur a joué une relique, placez un jeton Éther sur cette carte. Lancer : Infligez 3 dégâts. Gagnez tous les jetons Éther présents sur cette carte.",
			expansion: "The Caverns",
		},
		{
			id: "TC38",
			name: "Décharge archaïque",
			nameEn: "Archaic Discharge",
			cost: 6,
			description:
				"Lorsque préparé, après que vous avez joué une relique, placez un jeton Charge sur cette carte. Lancer : Infligez 4 dégâts, plus 2 dégâts supplémentaires par jeton Charge sur cette carte. Puis défaussez tous les jetons placés sur cette carte.",
			expansion: "The Caverns",
		},
		{
			id: "TC43",
			name: "Allocateur de mémoire",
			nameEn: "Memory Allocator",
			cost: 8,
			description:
				"Lancer : Infligez 6 dégâts. Mettez de côté autant de cartes de votre main que vous le souhaitez. Après avoir pioché lors de votre phase de pioche, reprenez en main les cartes mises de côté.",
			expansion: "The Caverns",
		},
		{
			id: "AB33",
			name: "Barrage total",
			nameEn: "All-out Barrage",
			cost: 5,
			description:
				"Lancer : Infligez 4 dégâts. Vous pouvez placer la dernière carte du paquet Némésis sur le dessus de ce paquet. Si vous le faites, infligez 3 dégâts supplémentaires.",
			expansion: "The Abyss",
		},
		{
			id: "AB38",
			name: "Étreinte du Vide",
			nameEn: "Void Grasp",
			cost: 4,
			description:
				"Lorsque préparé, une fois par tour durant votre phase principale, vous pouvez donner un jeton Bouclier à un serviteur du paquet Némésis. Si vous le faites, gagnez 3 Ether. Lancer : Infligez 3 dégâts.",
			expansion: "The Abyss",
		},
		{
			id: "TOG08",
			name: "Infusion spirituelle",
			nameEn: "Spiritual Infusion",
			cost: 4,
			description:
				"Lancer : Infligez 3 dégâts. Si vous avez infligé 7 dégâts ou plus ce tour, Gravehold gagne 1 point de vie.",
			expansion: "Tales of Old Gravehold",
		},
	],
};
