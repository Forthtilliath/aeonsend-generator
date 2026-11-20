import type { CardsByType } from "../../../types";

// Vague 9 (Beyond the Breach, The Surface, The Returned) : traduction maison
// d'après https://aeonsend.wiki.gg/. Les babioles (trinkets) et bannières ne
// sont pas des piles du marché.
export const cards: CardsByType = {
	gems: [
		{
			id: "BTB-1a-02",
			name: "Cendre atomisée",
			nameEn: "Atomized Ash",
			cost: 3,
			description:
				"Lorsque vous acquérez cette carte, gagnez 1 jeton Pulsation. Gagnez 2 éthers. Rappel : Perdez 1 jeton Pulsation pour infliger 1 dégât.",
			expansion: "Beyond the Breach",
		},
		{
			id: "BTB-2b-02",
			name: "Facette lumineuse",
			nameEn: "Luminous Facet",
			cost: 4,
			description: "Gagnez 3 éthers. Acquérez une babiole.",
			expansion: "Beyond the Breach",
		},
		{
			id: "BTB-3b-02",
			name: "Gravitite taillée",
			nameEn: "Hewn Gravitite",
			cost: 3,
			description:
				"Gagnez 2 éthers. Vous pouvez perdre 2 jetons Pulsation. Si vous le faites, lancez le sort préparé d'un joueur. Rappel : Gagnez 1 jeton Pulsation.",
			expansion: "Beyond the Breach",
		},
		{
			id: "BTB-1a-09",
			name: "Pépite de phosphore",
			nameEn: "Phosphor Nugget",
			cost: 4,
			description: "Gagnez 2 éthers. Rappel : Un allié gagne 1 jeton éther.",
			expansion: "Beyond the Breach",
		},
		{
			id: "BTB-1a-16",
			name: "Bloc d'irradiax",
			nameEn: "Irradiax Lump",
			cost: 6,
			description:
				"Gagnez 3 éthers. Acquérez deux babioles et prenez-en une en main.",
			expansion: "Beyond the Breach",
		},
		{
			id: "P233",
			name: "Débris de comète",
			nameEn: "Comet Scrap",
			cost: 4,
			description:
				"Gagnez 2 éthers.<br>Un allié peut placer une carte de sa main sur le dessus de votre pioche. S'il le fait, gagnez 1 éther supplémentaire.",
			expansion: "Beyond the Breach",
		},
		{
			id: "TS-014",
			name: "Fragment de nébuleuse",
			nameEn: "Nebulae Fragment",
			cost: 3,
			description:
				"Gagnez 2 éthers. Un allié peut défausser un Fragment de nébuleuse de sa main. S'il le fait, il gagne 1 jeton éther et peut conjurer sur une brèche ouverte ou fermée.",
			expansion: "The Surface",
		},
		{
			id: "TS-021",
			name: "Sphère de chromia",
			nameEn: "Chromia Sphere",
			cost: 5,
			developCost: 3,
			description:
				"Gagnez 2 éthers. S'il y a au moins deux exemplaires de cette carte dans la zone de développement, gagnez 2 éthers supplémentaires.",
			expansion: "The Surface",
		},
		{
			id: "TR-009",
			name: "Trillium enroulé",
			nameEn: "Coiled Trillium",
			cost: 3,
			description:
				"Gagnez 2 éthers. Un allié peut défausser un Trillium enroulé de sa main. S'il le fait, il gagne 2 jetons éther et 1 charge.",
			expansion: "The Returned",
		},
		{
			id: "TR-016",
			name: "Joyau givré",
			nameEn: "Ice-Dusted Jewel",
			cost: 3,
			description:
				"Gagnez 2 éthers et 1 jeton Pulsation.(ou)Vous pouvez perdre 5 jetons Pulsation pour lancer le sort préparé d'un joueur sans le défausser.",
			expansion: "The Returned",
		},
	],
	relics: [
		{
			id: "BTB-1d-02",
			name: "Boucle de présage",
			nameEn: "Omen Loop",
			cost: 3,
			developCost: 2,
			description:
				"Lorsque vous développez cette carte, gagnez 2 jetons Pulsation. Détruisez cette carte. Révélez le paquet d'ordre du tour et remettez-le dans l'ordre de votre choix. Vous pouvez perdre 1 jeton Pulsation. Si vous le faites, un allié pioche une carte.",
			expansion: "Beyond the Breach",
		},
		{
			id: "BTB-4b-02",
			name: "Amulette de pierre-larme",
			nameEn: "Tearstone Amulet",
			cost: 4,
			developCost: 3,
			description:
				"Lorsque vous développez cette carte, gagnez 1 charge. Connectez cette relique à la brèche d'un joueur. Lorsqu'un joueur lance un sort depuis cette brèche, un allié peut conjurer.",
			expansion: "Beyond the Breach",
		},
		{
			id: "BTB-3b-09",
			name: "Totem de pensée",
			nameEn: "Thought Totem",
			cost: 7,
			developCost: 4,
			description:
				"Lorsque vous développez cette carte, un allié gagne 2 jetons éther. Gagnez 2 charges. Révélez les trois premières cartes de votre pioche. Défaussez-en autant que vous le souhaitez et replacez les autres sur votre pioche dans l'ordre de votre choix.",
			expansion: "Beyond the Breach",
		},
		{
			id: "BTB-1d-23",
			name: "Anneau de faille",
			nameEn: "Rift Ring",
			cost: 3,
			description:
				"Gagnez 2 charges. Acquérez deux babioles et placez-les sur le dessus de votre pioche.(ou)Détruisez cette carte. Si vous le faites, gagnez 2 points de vie.",
			expansion: "Beyond the Breach",
		},
		{
			id: "BTB-1d-28",
			name: "Chronoïde",
			nameEn: "Chronoid",
			cost: 5,
			description:
				"Un allié gagne 3 jetons éther. Rappel : Regardez la première carte du paquet d'ordre du tour. Vous pouvez la replacer au-dessus ou en dessous de ce paquet.",
			expansion: "Beyond the Breach",
		},
		{
			id: "P241",
			name: "Cloche de Gravehold",
			nameEn: "Bell of Gravehold",
			cost: 6,
			description:
				"Un joueur détruit autant de cartes de sa main qu'il le souhaite et gagne un jeton éther par carte détruite ainsi.(hr)Rappel : Défaussez une carte de votre main. Si vous le faites, un allié gagne 1 charge.",
			expansion: "Beyond the Breach",
		},
		{
			id: "TS-028",
			name: "Couronne du rêveur",
			nameEn: "Dreamer's Crown",
			cost: 3,
			description:
				"Gagnez 1 charge et 2 jetons Pulsation.(ou)Vous pouvez perdre 4 jetons Pulsation pour infliger autant de dégâts que votre éther non dépensé. Puis perdez tout votre éther non dépensé.",
			expansion: "The Surface",
		},
		{
			id: "TS-033",
			name: "Baguette tisse-tempête",
			nameEn: "Stormspinner Wand",
			cost: 8,
			developCost: 5,
			description:
				"Lorsque vous développez cette carte, un allié peut détruire une carte de sa main ou de sa défausse. Vous et un allié gagnez chacun 1 charge par carte coûtant 2 éthers ou plus dans la main de cet allié.",
			expansion: "The Surface",
		},
		{
			id: "TR-023",
			name: "Prisme du pacte",
			nameEn: "Pact Prism",
			cost: 3,
			description:
				"Gagnez 2 jetons éther à la fin de votre tour. Un allié peut défausser un Prisme du pacte de sa main et piocher une carte. S'il le fait, vous gagnez 1 point de vie.",
			expansion: "The Returned",
		},
		{
			id: "TR-028",
			name: "Livre d'antan",
			nameEn: "Book of Before",
			cost: 6,
			description:
				"Connectez cette relique à la brèche d'un joueur. Lorsqu'un sort est lancé depuis cette brèche, Gravehold gagne 1 point de vie.",
			expansion: "The Returned",
		},
		{
			id: "TR-033",
			name: "Bâton du visionnaire",
			nameEn: "Visionary Staff",
			cost: 5,
			description:
				"Un allié pioche trois cartes puis défausse deux cartes de sa main.(ou)Appliquez jusqu'à deux fois un effet Rappel présent dans la défausse d'un joueur. Rappel : Gagnez 1 charge.",
			expansion: "The Returned",
		},
	],
	spells: [
		{
			id: "BTB-1d-07",
			name: "Vitrification",
			nameEn: "Vitrification",
			cost: 6,
			description:
				"Lancer : Infligez 8 dégâts. Acquérez trois babioles et placez-les sur le dessus de votre pioche.",
			expansion: "Beyond the Breach",
		},
		{
			id: "BTB-4b-07",
			name: "Maelström de feu glacé",
			nameEn: "Frostfire Maelstrom",
			cost: 4,
			description:
				"Lorsque préparé, une fois par tour durant votre phase principale, gagnez 1 jeton Pulsation.<br>Lancer : Infligez 2 dégâts répartis comme vous le souhaitez entre les ennemis. Perdez autant de jetons Pulsation que vous le souhaitez et infligez 1 dégât supplémentaire par jeton perdu ainsi.",
			expansion: "Beyond the Breach",
		},
		{
			id: "BTB-2b-09",
			name: "Éclats de joyaux",
			nameEn: "Jeweled Shrapnel",
			cost: 4,
			description:
				"Lancer : Infligez 4 dégâts. Acquérez deux babioles et placez-les sur le dessus de votre pioche. Vous pouvez détruire une carte de votre main.",
			expansion: "Beyond the Breach",
		},
		{
			id: "BTB-1d-12",
			name: "Écho de l'éternité",
			nameEn: "Eternity's Echo",
			cost: 7,
			description:
				"Lancer : Infligez 3 dégâts. Rappel : Vous pouvez lancer l'un de vos sorts préparés. Conjurez.",
			expansion: "Beyond the Breach",
		},
		{
			id: "BTB-4b-12",
			name: "Rafale de braises",
			nameEn: "Ember Gale",
			cost: 5,
			description:
				"Lancer : Infligez 4 dégâts. Chaque allié ayant six cartes ou plus dans sa défausse stabilise l'une de ses brèches.",
			expansion: "Beyond the Breach",
		},
		{
			id: "BTB-2b-14",
			name: "Bascule du monde",
			nameEn: "Worldshift",
			cost: 6,
			description:
				"Lorsque préparé, une fois par tour durant votre phase principale, vous pouvez gagner 1 jeton Pulsation.<br>Lancer : Infligez 5 dégâts. Vous pouvez perdre 2 jetons Pulsation. Si vous le faites, stabilisez la brèche d'un allié.",
			expansion: "Beyond the Breach",
		},
		{
			id: "BTB-3b-14",
			name: "Inondation",
			nameEn: "Inundate",
			cost: 8,
			description:
				"Lancer : Infligez 6 dégâts. Un allié peut défausser une carte de sa main coûtant 4 éthers ou plus et piocher une carte. S'il le fait, infligez 4 dégâts. (Les effets qui modifient les dégâts s'appliquent à chaque fois que ce sort inflige des dégâts.)",
			expansion: "Beyond the Breach",
		},
		{
			id: "BTB-1a-33",
			name: "Pacte mortel",
			nameEn: "Deadly Accord",
			cost: 3,
			developCost: 2,
			description:
				"Lancer : Infligez 2 dégâts. Un allié peut défausser un Pacte mortel de sa main et piocher une carte. S'il le fait, infligez 1 dégât supplémentaire et vous pouvez détruire une carte de votre main.",
			expansion: "Beyond the Breach",
		},
		{
			id: "BTB-1a-38",
			name: "Tranche mégaflux",
			nameEn: "Megaflux Slice",
			cost: 4,
			description:
				"Lancer : Infligez 2 dégâts. Gagnez 1 jeton Pulsation.(ou)Lancer : Vous pouvez perdre 3 jetons Pulsation. Si vous le faites, infligez 7 dégâts.",
			expansion: "Beyond the Breach",
		},
		{
			id: "BTB-1a-43",
			name: "Éruption furieuse",
			nameEn: "Stonefury Eruption",
			cost: 5,
			description:
				"Lancer : Infligez 4 dégâts. Chaque allié ayant une Éruption furieuse dans sa défausse gagne 1 charge.",
			expansion: "Beyond the Breach",
		},
		{
			id: "BTB-1a-48",
			name: "Descente destructrice",
			nameEn: "Descent of Destruction",
			cost: 8,
			description:
				"Lorsque préparé, une fois par tour durant votre phase principale, vous pouvez conjurer sur une brèche ouverte ou fermée.<br>Lancer : Infligez 4 dégâts. Les sorts coûtant 2 éthers ou moins que vous lancez ce tour infligent 2 dégâts supplémentaires.",
			expansion: "Beyond the Breach",
		},
		{
			id: "P247",
			name: "Obsolescence",
			nameEn: "Obsolescence",
			cost: 8,
			description:
				"Lorsque préparé, une fois par tour durant votre phase principale, vous pouvez acquérir une babiole.<br>Lancer : Infligez 1 dégât.<br>Détruisez chaque autre carte de votre défausse et de votre pioche. Infligez 2 dégâts supplémentaires par carte détruite ainsi.",
			expansion: "Beyond the Breach",
		},
		{
			id: "TS-038",
			name: "Feu sans limites",
			nameEn: "Boundless Fire",
			cost: 3,
			description:
				"Lancer : Infligez 2 dégâts. Rappel : Perdez 1 charge pour prendre cette carte en main.",
			expansion: "The Surface",
		},
		{
			id: "TS-043",
			name: "Onde cosmique",
			nameEn: "Cosmic Pulse",
			cost: 6,
			description:
				"Lorsque préparé, autant de sorts que vous le souhaitez peuvent être conjurés sur cette brèche. Lorsque préparé, une fois par tour durant votre phase principale, vous pouvez conjurer.<br>Lancer : Infligez 3 dégâts.",
			expansion: "The Surface",
		},
		{
			id: "TS-048",
			name: "Arc d'anéantissement",
			nameEn: "Obliterating Arc",
			cost: 7,
			description:
				"Lancer : Infligez 7 dégâts. Détruisez une carte de la pile Arc d'anéantissement de la réserve. Si vous ne le pouvez pas, subissez 2 dégâts.",
			expansion: "The Surface",
		},
		{
			id: "TR-038",
			name: "Pointe torrentielle",
			nameEn: "Torrential Spike",
			cost: 4,
			description:
				"Lancer : Infligez 3 dégâts. Un allié peut révéler la première carte de sa pioche. S'il révèle un sort, il le prend en main.",
			expansion: "The Returned",
		},
		{
			id: "TR-043",
			name: "Cascade infernale",
			nameEn: "Infernal Cascade",
			cost: 5,
			description:
				"Lancer : Infligez 2 dégâts. Vous pouvez lancer le sort préparé d'un joueur coûtant 2 éthers ou moins sans le défausser, puis le lancer à nouveau.",
			expansion: "The Returned",
		},
	],
};
