import type { CardsByType } from "../../../types";

// Vague 6 (Legacy of Gravehold, The Ruins) : traduction maison, vérifiée sur
// https://aeonsend.wiki.gg/.
// Warding Stone, carte de départ de Taqren, n'est pas une pile du marché.
// Legacy of Gravehold : « renforcer » (boost) coche une case de la carte,
// « surchauffe » (overheat) aussi ; les jetons Incendie sont ceux de la carte
// du monde de la campagne.
export const cards: CardsByType = {
	gems: [
		{
			id: "Az-1a-02",
			name: "Éclat de nébuleuse",
			nameEn: "Nebula Shard",
			cost: 3,
			description:
				"Gagnez 2 Ether.(ou)Gagnez 1 Ether pour chaque sort que vous avez lancé pendant votre phase d'incantation ce tour.",
			expansion: "Legacy of Gravehold",
		},
		{
			id: "GH-1a-02",
			name: "Sugilite divinatoire",
			nameEn: "Scrying Sugilite",
			cost: 3,
			description:
				"Gagnez 2 Ether.\nVous pouvez révéler la première carte de votre pioche. Si c'est un sort, gagnez 1 Ether supplémentaire.",
			expansion: "Legacy of Gravehold",
		},
		{
			id: "GH-R-06",
			name: "Éclat scintillant",
			nameEn: "Glint Splinter",
			cost: 4,
			description:
				"Gagnez 2 Ether.(hr)Rappel : Vous pouvez défausser un sort préparé. Si vous le faites, gagnez 1 Ether et vous pouvez placer sur votre pioche la prochaine carte que vous acquérez ce tour.",
			expansion: "Legacy of Gravehold",
		},
		{
			id: "GH-SO-06",
			name: "Cache de galactum",
			nameEn: "Galactum Cache",
			cost: 4,
			description:
				"Gagnez 2 Ether.\nUn allié pioche autant de cartes que de marques de renfort sur cette carte, puis défausse autant de cartes.\nLa prochaine fois que vous acquérez une carte coûtant 6 Ether ou plus ce tour, renforcez cette carte.",
			expansion: "Legacy of Gravehold",
		},
		{
			id: "Az-FA-07",
			name: "Verre stellaire",
			nameEn: "Starglass",
			cost: 3,
			description: "Gagnez 2 Ether.(ou)Conjurez.",
			expansion: "Legacy of Gravehold",
		},
		{
			id: "AZ-1a-09",
			name: "Joyau irradié",
			nameEn: "Irradiated Jewel",
			cost: 4,
			description:
				"Gagnez 2 Ether.\nVous pouvez révéler la première carte du paquet d'ordre du tour pour gagner 1 Ether supplémentaire. Si c'est une carte joueur, faites surchauffer cette carte.\nSi cette carte est entièrement en surchauffe, détruisez-la et Gravehold subit 3 dégâts.",
			expansion: "Legacy of Gravehold",
		},
		{
			id: "Az-1c-10",
			name: "Lumière gelée",
			nameEn: "Frozen Light",
			cost: 5,
			description:
				"Gagnez 3 Ether.(hr)Vous pouvez défausser cette carte durant le tour d'un allié. Si vous le faites, cet allié gagne 1 charge et vous gagnez 1 charge.",
			expansion: "Legacy of Gravehold",
		},
		{
			id: "GH-1a-10",
			name: "Bloc de cobalt",
			nameEn: "Cobalt Clump",
			cost: 4,
			description:
				"Gagnez 2 Ether.\nLa prochaine fois que vous acquérez une carte coûtant 5 Ether ou plus ce tour, réduisez un serviteur au silence.",
			expansion: "Legacy of Gravehold",
		},
		{
			id: "GH-1c-11",
			name: "Onyx immergé",
			nameEn: "Sunken Onyx",
			cost: 3,
			description:
				"Gagnez 2 Ether.(hr)Vous pouvez défausser cette carte après qu'un allié a stabilisé une brèche. Si vous le faites, il stabilise de nouveau cette brèche.",
			expansion: "Legacy of Gravehold",
		},
		{
			id: "AZ-1a-16",
			name: "Coquille de léviathan",
			nameEn: "Leviathan Shell",
			cost: 5,
			description:
				"Gagnez 2 Ether.\nSi vous avez joué ce tour au moins deux autres gemmes ou reliques coûtant 3 Ether ou plus, renforcez cette carte. Gagnez 1 Ether supplémentaire par marque de renfort sur cette carte.",
			expansion: "Legacy of Gravehold",
		},
		{
			id: "GH-1a-16",
			name: "Poussière d'éther",
			nameEn: "Aether Dust",
			cost: 5,
			description: "Gagnez 2 Ether.\nChaque allié gagne un jeton Ether.",
			expansion: "Legacy of Gravehold",
		},
		{
			id: "Az-1c-22",
			name: "Veine d'acier du vide",
			nameEn: "Voidsteel Vein",
			cost: 4,
			description:
				"Gagnez 2 Ether.(hr)Vous pouvez défausser cette carte lorsqu'un allié lance un sort coûtant 1 Ether ou plus. Si vous le faites, ce sort inflige 2 dégâts supplémentaires.",
			expansion: "Legacy of Gravehold",
		},
		{
			id: "GH-R-23",
			name: "Échantillon de darklite",
			nameEn: "Darklite Sample",
			cost: 3,
			description:
				"Gagnez 2 Ether.\nVous pouvez placer votre pioche sur votre défausse sans changer l'ordre des cartes.",
			expansion: "Legacy of Gravehold",
		},
		{
			id: "GH-SO-23",
			name: "Rupix brisée",
			nameEn: "Shattered Rupix",
			cost: 5,
			description:
				"Gagnez 3 Ether.(hr)Lorsqu'une autre carte ou un effet devrait vous faire défausser ou détruire cette carte, vous pouvez la reprendre en main. (Ignorez cet effet tant que cette carte est dans la réserve.)",
			expansion: "Legacy of Gravehold",
		},
		{
			id: "RU001",
			name: "Verre de sorcière",
			nameEn: "Witchglass",
			cost: 2,
			description:
				"Gagnez 1 Ether. Un allié gagne un jeton Ether.(hr)Vous pouvez défausser cette carte durant la phase principale d'un allié. Si vous le faites, ce joueur peut Conjurer.",
			expansion: "The Ruins",
		},
		{
			id: "RU008",
			name: "Perle chatoyante",
			nameEn: "Shimmerbead",
			cost: 3,
			description:
				"Gagnez 2 Ether.(hr)Rappel : Si vous avez activé votre capacité ce tour, gagnez 1 point de vie.",
			expansion: "The Ruins",
		},
		{
			id: "RU015",
			name: "Coquille apaisante",
			nameEn: "Allaying Shell",
			cost: 5,
			description: "Gagnez 2 Ether.\nRéduisez un serviteur au silence.",
			expansion: "The Ruins",
		},
		{
			id: "RU022",
			name: "Globe de pulsyrium",
			nameEn: "Pulsyrium Globe",
			cost: 5,
			description:
				"Gagnez 3 Ether.(hr)Rappel : Défaussez une carte de votre main. Si vous le faites, un joueur gagne un jeton Ether.",
			expansion: "The Ruins",
		},
		{
			id: "RU029",
			name: "Fluorite arc-en-ciel",
			nameEn: "Rainbow Fluorite",
			cost: 6,
			description: "Gagnez 3 Ether.(ou)Gagnez 2 charges.",
			expansion: "The Ruins",
		},
	],
	relics: [
		{
			id: "Az-SO-07",
			name: "Cor de l'invocateur",
			nameEn: "Summoner's Horn",
			cost: 5,
			description:
				"Un joueur peut préparer un sort de sa défausse sur l'une de ses brèches ouvertes ou fermées.(hr)Rappel : Défaussez une carte pour gagner 1 charge.",
			expansion: "Legacy of Gravehold",
		},
		{
			id: "AZ-1c-17",
			name: "Batterie de soufre",
			nameEn: "Brimstone Battery",
			cost: 4,
			description:
				"Un joueur détruit une carte de sa main ou de sa défausse. Si cette carte coûte 3 Ether ou plus, renforcez cette carte.(ou)Connectez cette carte à la brèche d'un joueur. Lorsqu'un sort est lancé depuis cette brèche, si cette carte est entièrement renforcée, Gravehold gagne 1 point de vie.",
			expansion: "Legacy of Gravehold",
		},
		{
			id: "Az-FA-18",
			name: "Os du martyr",
			nameEn: "Martyr's Bone",
			cost: 3,
			description:
				"Stabilisez l'une de vos brèches ou Conjurez.\nVous pouvez perdre 1 charge pour faire les deux.",
			expansion: "Legacy of Gravehold",
		},
		{
			id: "GH-R-18",
			name: "Ancre du néant",
			nameEn: "Void Anchor",
			cost: 5,
			description:
				"Réduisez un serviteur au silence. Un allié gagne 2 jetons Ether.(hr)Rappel : Gravehold gagne 1 point de vie.",
			expansion: "Legacy of Gravehold",
		},
		{
			id: "Az-SO-19",
			name: "Plume de phénix",
			nameEn: "Phoenix Quill",
			cost: 6,
			description:
				"Deux joueurs différents gagnent chacun 1 point de vie.(hr)Rappel : Perdez 1 charge pour reprendre en main une carte coûtant 3 Ether ou moins de votre défausse.",
			expansion: "Legacy of Gravehold",
		},
		{
			id: "GH-1c-22",
			name: "Rune écho",
			nameEn: "Echo Rune",
			cost: 2,
			description:
				"Un joueur gagne 1 charge.(hr)Vous pouvez défausser cette carte durant la phase principale d'un allié. Si vous le faites, il gagne 1 Ether.",
			expansion: "Legacy of Gravehold",
		},
		{
			id: "AZ-1a-23",
			name: "Cape du métamorphe",
			nameEn: "Shifter's Cloak",
			cost: 3,
			description:
				"Stabilisez la brèche d'un joueur. Si cette brèche est ouverte de cette manière, renforcez cette carte.\nSi cette carte est entièrement renforcée, lancez le sort préparé d'un joueur. Il inflige 1 dégât supplémentaire.",
			expansion: "Legacy of Gravehold",
		},
		{
			id: "GH-1a-23",
			name: "Bâton d'électrum",
			nameEn: "Electrum Rod",
			cost: 3,
			description:
				"Un joueur peut stabiliser l'une de ses brèches.\nSi ce joueur a un sort préparé coûtant 5 Ether ou plus, gagnez 1 charge.",
			expansion: "Legacy of Gravehold",
		},
		{
			id: "Az-1a-28",
			name: "Bâton porte-lumière",
			nameEn: "Lightbringer Staff",
			cost: 6,
			description:
				"Les joueurs détruisent collectivement jusqu'à deux cartes de leur main.(ou)Réduisez au silence jusqu'à deux serviteurs.(ou)Détruisez cette carte. Retirez un jeton Incendie de votre position sur la carte du monde.",
			expansion: "Legacy of Gravehold",
		},
		{
			id: "GH-1a-29",
			name: "Charme du chaos",
			nameEn: "Chaos Charm",
			cost: 5,
			description:
				"Deux joueurs différents peuvent détruire une carte de leur main.\nVous pouvez détruire cette carte. Si vous le faites, retirez un jeton Incendie de votre position sur la carte du monde.",
			expansion: "Legacy of Gravehold",
		},
		{
			id: "RU036",
			name: "Gadget d'éther",
			nameEn: "Aether Widget",
			cost: 2,
			description:
				"Un allié peut préparer un sort de sa main sur l'une de ses brèches ouvertes ou fermées.(hr)Vous pouvez défausser cette carte durant la phase principale d'un allié. Si vous le faites, cet allié peut lancer l'un de ses sorts préparés.",
			expansion: "The Ruins",
		},
		{
			id: "RU041",
			name: "Infuseur de vigueur",
			nameEn: "Vim Infusor",
			cost: 3,
			description:
				"Gagnez 1 charge.\nSi vous avez 2 points de vie ou moins, répétez cet effet.",
			expansion: "The Ruins",
		},
		{
			id: "RU046",
			name: "Kit de contingence",
			nameEn: "Contingency Kit",
			cost: 4,
			description:
				"Un allié pioche deux cartes puis défausse une carte.(ou)Stabilisez la brèche d'un joueur.\nSi vous avez 2 points de vie ou moins, faites les deux.",
			expansion: "The Ruins",
		},
		{
			id: "RU051",
			name: "Harnais fantôme",
			nameEn: "Ghost Harness",
			cost: 6,
			description:
				"Chaque joueur stabilise sa brèche fermée ayant le coût de stabilisation le plus bas.(ou)Chaque joueur peut Conjurer.",
			expansion: "The Ruins",
		},
		{
			id: "RU056",
			name: "Convertisseur d'éléments",
			nameEn: "Element Convertor",
			cost: 6,
			description:
				"Les joueurs détruisent collectivement jusqu'à deux gemmes de leur main ou de leur défausse.\nRévélez la première carte du paquet d'ordre du tour. Si c'est une carte joueur, ce joueur gagne un jeton Ether.",
			expansion: "The Ruins",
		},
	],
	spells: [
		{
			id: "GH-SO-13",
			name: "Carapace de cristal",
			nameEn: "Crystal Carapace",
			cost: 6,
			description:
				"Lancer : Infligez 4 dégâts.(hr)Lorsqu'une autre carte ou un effet devrait vous faire défausser ou détruire cette carte, vous pouvez la reprendre en main. Si elle était préparée, vous pouvez la préparer. (Ignorez cet effet tant que cette carte est dans la réserve.)",
			expansion: "Legacy of Gravehold",
		},
		{
			id: "Az-SO-15",
			name: "Double parallèle",
			nameEn: "Parallel Self",
			cost: 6,
			description:
				"Lancer : Infligez 5 dégâts.(hr)Rappel : Dépensez 2 Ether pour infliger 2 dégâts.",
			expansion: "Legacy of Gravehold",
		},
		{
			id: "GH-R-15",
			name: "Séisme ardent",
			nameEn: "Flamequake",
			cost: 6,
			description:
				"Lancer : Infligez 5 dégâts.(hr)Rappel : Perdez 2 charges pour retirer un jeton Incendie de votre position sur la carte du monde.",
			expansion: "Legacy of Gravehold",
		},
		{
			id: "Az-FA-17",
			name: "Galvaniser",
			nameEn: "Galvanize",
			cost: 4,
			description:
				"Lorsque préparé, une fois durant votre phase principale, vous pouvez Conjurer.\nLancer : Infligez 2 dégâts.",
			expansion: "Legacy of Gravehold",
		},
		{
			id: "GH-1c-17",
			name: "Trait de vif-argent",
			nameEn: "Quicksilver Bolt",
			cost: 5,
			description:
				"Vous pouvez préparer ce sort sur l'une de vos brèches ouvertes durant la phase principale d'un allié.\nLorsque vous préparez ce sort durant votre phase principale, renforcez cette carte.\nLancer : Infligez 3 dégâts. Si cette carte est entièrement renforcée, elle inflige 1 dégât supplémentaire.",
			expansion: "Legacy of Gravehold",
		},
		{
			id: "GH-SO-18",
			name: "Rayon évaporant",
			nameEn: "Evaporating Ray",
			cost: 4,
			description:
				"Lancer : Infligez 3 dégâts. Un allié peut défausser une carte de sa main coûtant 2 Ether ou plus. S'il le fait, ce sort inflige 2 dégâts supplémentaires.",
			expansion: "Legacy of Gravehold",
		},
		{
			id: "Az-SO-21",
			name: "Explosion magnétique",
			nameEn: "Magnetic Burst",
			cost: 4,
			description:
				"Lancer : Infligez 3 dégâts. Vous pouvez révéler les deux premières cartes de votre pioche et placer autant de ces cartes que vous le souhaitez sur votre défausse.",
			expansion: "Legacy of Gravehold",
		},
		{
			id: "Az-FA-23",
			name: "Frappe temporelle",
			nameEn: "Temporal Strike",
			cost: 6,
			description:
				"Lorsque préparé, lorsque vous lancez un sort coûtant 2 Ether ou moins, il inflige 1 dégât supplémentaire et vous pouvez le reprendre en main.\nLancer : Infligez 4 dégâts.",
			expansion: "Legacy of Gravehold",
		},
		{
			id: "GH-1c-27",
			name: "Éclats volcaniques",
			nameEn: "Volcanic Shrapnel",
			cost: 8,
			description:
				"Lancer : Infligez 1 dégât. Infligez 1 dégât. Infligez 1 dégât. Vous pouvez reprendre en main jusqu'à deux cartes coûtant 0 Ether de votre défausse. (Les effets modifiant les dégâts concernent chaque source de dégâts de ce sort.)",
			expansion: "Legacy of Gravehold",
		},
		{
			id: "Az-1c-29",
			name: "Secousse entrelacée",
			nameEn: "Entwined Tremor",
			cost: 8,
			description:
				"Lancer : Infligez 6 dégâts. Si un sort coûtant 5 Ether ou plus est préparé sur une brèche adjacente, ce sort inflige 2 dégâts supplémentaires. Si un sort coûtant 4 Ether ou moins est préparé sur une brèche adjacente, gagnez 1 charge.",
			expansion: "Legacy of Gravehold",
		},
		{
			id: "GH-1a-33",
			name: "Lame d'herbe",
			nameEn: "Grassblade",
			cost: 2,
			description:
				"Vous pouvez détruire cette carte depuis votre main durant la phase principale d'un allié. Si vous le faites, piochez une carte.\nLancer : Infligez 2 dégâts.",
			expansion: "Legacy of Gravehold",
		},
		{
			id: "Az-1a-37",
			name: "Onde d'éther",
			nameEn: "Aether Ripple",
			cost: 3,
			description:
				"Lancer : Infligez 2 dégâts. Chaque allié gagne un jeton Ether.",
			expansion: "Legacy of Gravehold",
		},
		{
			id: "AZ-1a-38",
			name: "Étouffement",
			nameEn: "Douse",
			cost: 4,
			description:
				"Lancer : Infligez 3 dégâts.\nVous pouvez détruire cette carte. Si vous le faites, retirez un jeton Incendie de votre position sur la carte du monde.",
			expansion: "Legacy of Gravehold",
		},
		{
			id: "GH-1a-38",
			name: "Éclair fracturé",
			nameEn: "Fractured Lightning",
			cost: 4,
			description:
				"Lancer : Infligez 5 dégâts.\nRévélez la première carte de la pioche de la némésis. S'il s'agit d'une attaque ou d'un pouvoir, faites surchauffer cette carte.\nSi cette carte est entièrement en surchauffe, détruisez-la et la némésis se déchaîne.",
			expansion: "Legacy of Gravehold",
		},
		{
			id: "GH-1a-43",
			name: "Cascade",
			nameEn: "Cascade",
			cost: 5,
			description:
				"Lancer : Infligez 3 dégâts. Vous pouvez reprendre en main une carte coûtant 4 Ether ou moins de votre défausse.",
			expansion: "Legacy of Gravehold",
		},
		{
			id: "Az-1a-44",
			name: "Retour de flamme",
			nameEn: "Backfire",
			cost: 5,
			description:
				"Lancer : Infligez 4 dégâts. Vous pouvez perdre 1 charge pour reprendre cette carte en main.",
			expansion: "Legacy of Gravehold",
		},
		{
			id: "GH-1a-48",
			name: "Déferlante arc-en-ciel",
			nameEn: "Rainbow Surge",
			cost: 7,
			description:
				"Lancer : Infligez 5 dégâts. Si cela fait défausser un serviteur, renforcez cette carte. Gagnez 1 point de vie par marque de renfort sur cette carte.",
			expansion: "Legacy of Gravehold",
		},
		{
			id: "Az-1a-49",
			name: "Flux paradigmatique",
			nameEn: "Paradigm Flux",
			cost: 7,
			description:
				"Lancer : Retirez jusqu'à 2 jetons Bouclier des serviteurs. Infligez 5 dégâts.",
			expansion: "Legacy of Gravehold",
		},
		{
			id: "RU061",
			name: "Amplifier",
			nameEn: "Magnify",
			cost: 2,
			description:
				"Lorsque préparé, un sort supplémentaire coûtant 2 Ether ou moins peut être préparé sur cette brèche.\nLancer : Infligez 1 dégât.",
			expansion: "The Ruins",
		},
		{
			id: "RU066",
			name: "Barrage de l'aube",
			nameEn: "Dawn Barrage",
			cost: 3,
			description:
				"Lancer : Infligez 1 dégât.\nLes autres sorts que vous lancez pendant votre phase d'incantation ce tour infligent 1 dégât supplémentaire.",
			expansion: "The Ruins",
		},
		{
			id: "RU071",
			name: "Hébétement",
			nameEn: "Stupefy",
			cost: 3,
			description:
				"Lancer : Infligez 2 dégâts.(hr)Rappel : Vous pouvez défausser une carte pour réduire un serviteur au silence.",
			expansion: "The Ruins",
		},
		{
			id: "RU077",
			name: "Bulle de force",
			nameEn: "Force Bubble",
			cost: 4,
			description:
				"Lancer : Infligez 2 dégâts.(ou)Lancer : Reprenez cette carte en main. Vous pouvez préparer un sort de votre main autre que Bulle de force.",
			expansion: "The Ruins",
		},
		{
			id: "RU081",
			name: "Champ accélérateur",
			nameEn: "Accelerating Field",
			cost: 5,
			description:
				"Lancer : Infligez 3 dégâts.\nSi c'est la première fois que vous lancez un Champ accélérateur ce tour, vous pouvez révéler les quatre premières cartes de votre pioche. Vous pouvez prendre en main les Champs accélérateurs ainsi révélés.",
			expansion: "The Ruins",
		},
		{
			id: "RU086",
			name: "Harmonisation",
			nameEn: "Harmonize",
			cost: 5,
			description:
				"Vous pouvez défausser cette carte de votre main lorsqu'un allié lance un sort pour que ce sort inflige 2 dégâts supplémentaires.(hr)Lancer : Infligez 4 dégâts.",
			expansion: "The Ruins",
		},
		{
			id: "RU091",
			name: "Fantasmagorie",
			nameEn: "Phantasmagoria",
			cost: 5,
			description: "Lancer : Infligez 3 dégâts.(hr)Rappel : Conjurez.",
			expansion: "The Ruins",
		},
		{
			id: "RU096",
			name: "Précepteur runique",
			nameEn: "Rune Tutor",
			cost: 5,
			description:
				"Lancer : Acquérez une carte coûtant 6 Ether ou moins dans la réserve et placez-la sur votre pioche.(ou)Lancer : Infligez 4 dégâts.",
			expansion: "The Ruins",
		},
		{
			id: "RU101",
			name: "Lumière bienfaitrice",
			nameEn: "Bestowing Light",
			cost: 6,
			description:
				"Lancer : Infligez 5 dégâts.\nUn allié gagne un jeton Ether pour chaque sort préparé sur une brèche adjacente.",
			expansion: "The Ruins",
		},
		{
			id: "RU106",
			name: "Gravité inversée",
			nameEn: "Reverse Gravity",
			cost: 7,
			description:
				"Lancer : Infligez 6 dégâts.(hr)Lorsque cette carte est placée dans votre défausse, vous pouvez la placer sous votre défausse.",
			expansion: "The Ruins",
		},
	],
};
