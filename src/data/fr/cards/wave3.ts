import type { CardsByType } from "../../../types";

// Vague 3 : Legacy, Secrets Enfouis. Legacy : traduction maison, vérifiée sur
// le wiki.
export const cards: CardsByType = {
	gems: [
		{
			id: "Ia02",
			name: "Cyanolithe ancienne",
			nameEn: "Ancient Cyanolith",
			cost: 3,
			description: "Gagnez 2 éthers.",
			expansion: "Legacy",
		},
		{
			id: "Id02",
			name: "Composé friable",
			nameEn: "Crumbling Compound",
			cost: 5,
			description:
				"Gagnez 2 éthers.<br>Vous pouvez défausser une gemme de votre main. Si vous le faites, gagnez 2 éthers supplémentaires.",
			expansion: "Legacy",
		},
		{
			id: "II02",
			name: "Éclat enchevêtré",
			nameEn: "Entangled Shard",
			cost: 4,
			description:
				"Gagnez 2 éthers.<br>Si vous avez au moins 3 charges, gagnez 1 éther supplémentaire.",
			expansion: "Legacy",
		},
		{
			id: "VIII02",
			name: "Silicate arqué",
			nameEn: "Arcing Silicate",
			cost: 4,
			description:
				"Gagnez 2 éthers. Gagnez 1 jeton Pulsation. Vous pouvez perdre autant de jetons Pulsation que vous le souhaitez. Infligez autant de dégâts que de jetons Pulsation perdus de cette manière.",
			expansion: "Legacy",
		},
		{
			id: "Ia09",
			name: "Radite ramifiée",
			nameEn: "Branching Radite",
			cost: 4,
			description:
				"Gagnez 2 éthers.<br>Si vous avez au moins deux sorts préparés, gagnez 1 éther supplémentaire.",
			expansion: "Legacy",
		},
		{
			id: "IV12",
			name: "Portalite phasée",
			nameEn: "Phased Portalite",
			cost: 4,
			description:
				"Gagnez 2 éthers.<br>Si votre brèche III est ouverte, gagnez 1 éther supplémentaire.",
			expansion: "Legacy",
		},
		{
			id: "V12",
			name: "Gravier conducteur",
			nameEn: "Conductive Grit",
			cost: 3,
			description:
				"Gagnez 2 éthers. Gagnez 1 jeton Pulsation.(ou)Vous pouvez perdre 1 jeton Pulsation. Si vous le faites, gagnez 3 éthers.",
			expansion: "Legacy",
		},
		{
			id: "VI13",
			name: "Dalle de fulmite",
			nameEn: "Fulmite Slab",
			cost: 6,
			description:
				"Gagnez 1 éther. Gagnez 2 jetons Pulsation. Jusqu’à la fin du tour, vous pouvez perdre 1 jeton Pulsation pour gagnez 1 éther autant de fois que vous le souhaitez.",
			expansion: "Legacy",
		},
		{
			id: "Ia16",
			name: "Bille dorée",
			nameEn: "Gilded Marble",
			cost: 6,
			description: "Gagnez 3 éthers.",
			expansion: "Legacy",
		},
		{
			id: "IV19",
			name: "Luminium raffiné",
			nameEn: "Refined Lumenium",
			cost: 5,
			description: "Gagnez 2 éthers.<br>Un allié pioche une carte.",
			expansion: "Legacy",
		},
		{
			id: "III24",
			name: "Torporène apaisante",
			nameEn: "Soothing Torporene",
			cost: 3,
			description: "Gagnez 2 éthers.(ou)Réduisez un serviteur au silence.",
			expansion: "Legacy",
		},
		{
			id: "P42",
			name: "Pierre d'écho",
			nameEn: "Echo Stone",
			cost: 4,
			description:
				"Gagnez 2 éthers.<br>Si vous avez joué une autre Pierre d'Écho ce tour, gagnez 1 éther supplémentaire.",
			expansion: "Legacy",
		},
		{
			id: "SE133",
			name: "Voltécorce",
			nameEn: "Jolting Crust",
			cost: 3,
			description:
				"Gagnez 2 éthers. Gagnez 1 jeton Pulsation.(ou)Gagnez 2 éthers. Perdez 1 jeton Pulsation. Si vous le faites, gagnez 1 charge.",
			expansion: "Secrets Enfouis",
		},
		{
			id: "SE136",
			name: "Fragment de mentite",
			nameEn: "Mentite Chunk",
			cost: 5,
			description:
				"Gagnez 3 éthers.<br>Si sept cartes ou plus se trouve dans votre défausse, gagnez 1 éther supplémentaire.",
			expansion: "Secrets Enfouis",
		},
		{
			id: "SE137",
			name: "Lacosite muette",
			nameEn: "Muted Lacosite",
			cost: 5,
			description:
				"Lorsque vous acquérez cette carte, réduisez un serviteur au silence.<br>Gagnez 3 éthers.",
			expansion: "Secrets Enfouis",
		},
		{
			id: "SE139",
			name: "Résine d'oubli",
			nameEn: "Oblivium Resin",
			cost: 5,
			description:
				"Gagnez 2 éthers.<br>Si vous avez trois cartes ou plus coûtant 0 éther en main, gagnez 2 éthers supplémentaire.",
			expansion: "Secrets Enfouis",
		},
		{
			id: "SE143",
			name: "Tétrite lumineuse",
			nameEn: "Shining Tetrite",
			cost: 6,
			description:
				"Gagnez 4 éthers qui ne peuvent être utilisés que pour acquérir des cartes.",
			expansion: "Secrets Enfouis",
		},
		{
			id: "SE146",
			name: "Invoquine",
			nameEn: "Summonite",
			cost: 3,
			description:
				"Gagnez 2 éthers.(ou)Acquérez une Invoquine de la réserve et placez-la sur la défausse d'un allié.",
			expansion: "Secrets Enfouis",
		},
		{
			id: "SE147",
			name: "Noyaux de triplite",
			nameEn: "Triplite Core",
			cost: 4,
			description:
				"Gagnez 3 éthers qui ne peuvent être utilisés que pour acquérir des cartes.",
			expansion: "Secrets Enfouis",
		},
		{
			id: "SE148",
			name: "Pointe de vide",
			nameEn: "Voidium Spike",
			cost: 3,
			description:
				"Gagnez 2 éthers.<br>Chaque allié peut défausser une carte de samain pour gagner 1 charge.",
			expansion: "Secrets Enfouis",
		},
	],
	relics: [
		{
			id: "Id09",
			name: "Géophage",
			nameEn: "Geophage",
			cost: 3,
			description:
				"Gagnez 1 éther.<br>Vous pouvez détruire une gemme de votre main.",
			expansion: "Legacy",
		},
		{
			id: "VIII09",
			name: "Batteries adrénalines",
			nameEn: "Adrenal Batteries",
			cost: 7,
			description:
				"Gagnez 2 jetons Pulsation. Vous pouvez perdre 4 jetons Pulsation. Si vous le faites, ouvrez la brèche fermée d’un joueur. Ensuite, acquérez un sort de la réserve coûtant 5 éthers ou moins et préparez ce sort sur la brèche ouverte d’un joueur.",
			expansion: "Legacy",
		},
		{
			id: "II19",
			name: "Couteau de brane",
			nameEn: "Brane Knife",
			cost: 3,
			description:
				"Gagnez 1 charge.<br>Un allié stabilise sa brèche fermée ayant le coût de stabilisation le plus faible.",
			expansion: "Legacy",
		},
		{
			id: "V19",
			name: "Relais voltaïque",
			nameEn: "Voltaic Relay",
			cost: 4,
			description:
				"Un joueur gagne 3 jetons Pulsation. Ce joueur peut perdre 1 jeton Pulsation. S'il le fait, il détruit une carte de sa main.",
			expansion: "Legacy",
		},
		{
			id: "VI20",
			name: "Lentille prophétique",
			nameEn: "Prophetic Lens",
			cost: 4,
			description:
				"Gagnez 1 charge. Révélez la première carte de votre pioche. Vous pouvez la détruire. Si vous ne le faites pas, gagnez 1 éther.",
			expansion: "Legacy",
		},
		{
			id: "Ia23",
			name: "Couronne neurale",
			nameEn: "Neural Wreath",
			cost: 4,
			description:
				"Stabilisez la brèche d'un joueur. Un joueur peut préparer un sort de sa main.",
			expansion: "Legacy",
		},
		{
			id: "V24",
			name: "Miroir infernal",
			nameEn: "Infernal Mirror",
			cost: 5,
			description:
				"Un allié gagne 1 charge. Un joueur gagne 2 jetons Pulsation. Vous pouvez perdre 2 jetons Pulsation. Si vous le faites, lancez le sort préparé d'un joueur. Ce sort inflige 1 dégât supplémentaire.",
			expansion: "Legacy",
		},
		{
			id: "IV26",
			name: "Stabilisateur de réalité",
			nameEn: "Reality Stabilizer",
			cost: 6,
			description: "Gagnez 2 charges. Réduisez un serviteur au silence.",
			expansion: "Legacy",
		},
		{
			id: "Ia28",
			name: "Main éthérée",
			nameEn: "Ethereal Hand",
			cost: 6,
			description: "Un allié pioche deux cartes.",
			expansion: "Legacy",
		},
		{
			id: "III31",
			name: "Moulin du néant",
			nameEn: "Void Mill",
			cost: 5,
			description:
				"Stabilisez la brèche d'un joueur.<br>Deux joueurs différents peuvent détruire la carte du dessus de leur défausse.",
			expansion: "Legacy",
		},
		{
			id: "SE128",
			name: "Étoile miniature",
			nameEn: "Bottled Star",
			cost: 7,
			description: "Gagnez 3 charges",
			expansion: "Secrets Enfouis",
		},
		{
			id: "SE134",
			name: "Gantelet vivant",
			nameEn: "Living Gauntlet",
			cost: 4,
			description:
				"Révélez la première carte de votre pioche. Vous pouvez la détruire ou la défausser. Chaque allié peut piocher une carte. Dans ce cas, il défausse ensuite une carte de sa main.",
			expansion: "Secrets Enfouis",
		},
		{
			id: "SE135",
			name: "Cube sans fond",
			nameEn: "Manifold Container",
			cost: 4,
			description:
				"Gagnez 1 éther.<br>Ce tour, lors de votre prochaine acquisition de carte, vous pouvez acquérir gratuitement une seconde carte qui coûte moins cher que la première carte acquise.",
			expansion: "Secrets Enfouis",
		},
		{
			id: "SE142",
			name: "Œuvre de l'érudit",
			nameEn: "Scholar's Opus",
			cost: 3,
			description:
				"Gagnez 1 charge.<br>Si sept cartes ou plus se trouvent dans votre défausse, gagnez 1 charge supplémentaire.",
			expansion: "Secrets Enfouis",
		},
		{
			id: "SE144",
			name: "Filaments d'âme",
			nameEn: "Soul Cords",
			cost: 5,
			description:
				"Un joueur gagne un jeton Pulsation. Chaque joueur qui possède au moins 2 jetons Pulsations gagne 1 charge.",
			expansion: "Secrets Enfouis",
		},
	],
	spells: [
		{
			id: "II09",
			name: "Frénésie de feu stellaire",
			nameEn: "Starfire Frenzy",
			cost: 6,
			description:
				"Lancer\u00a0: Infligez 4 dégâts.<br>Vous pouvez défausser un sort de votre main. Si vous le faites, infligez 1 dégât supplémentaire et gagnez 1 charge.",
			expansion: "Legacy",
		},
		{
			id: "Id14",
			name: "Éruption de brèche",
			nameEn: "Breach Flare",
			cost: 3,
			description:
				"Lancer\u00a0: Infligez 2 dégâts.<br>Stabilisez la brèche III d'un joueur.",
			expansion: "Legacy",
		},
		{
			id: "II14",
			name: "Transfusion de force",
			nameEn: "Force Transfusion",
			cost: 4,
			description:
				"Lancer\u00a0: Infligez 3 dégâts.<br>Si vous avez au moins 3 charges, gagnez 1 charge.",
			expansion: "Legacy",
		},
		{
			id: "VIII14",
			name: "Conclusion ardente",
			nameEn: "Fiery Conclusion",
			cost: 5,
			description:
				"Lancer\u00a0: Infligez 4 dégâts.<br>Si au moins trois piles de la réserve sont vides, infligez 3 dégâts supplémentaires.",
			expansion: "Legacy",
		},
		{
			id: "Id19",
			name: "Rayon déviant",
			nameEn: "Bending Beam",
			cost: 5,
			description:
				"Lancer\u00a0: Infligez 2 dégâts.<br>Si ce sort a été lancé depuis une brèche III ouverte, infligez 3 dégâts supplémentaires.",
			expansion: "Legacy",
		},
		{
			id: "VIII19",
			name: "Sphère d'inversion",
			nameEn: "Sphere of Inversion",
			cost: 9,
			description:
				"Lancer\u00a0: Infligez 7 dégâts.<br>Un allié peut détruire une carte de sa main. S'il le fait, il gagne 2 points de vie.",
			expansion: "Legacy",
		},
		{
			id: "VI25",
			name: "Siphon étincelant",
			nameEn: "Sparking Siphon",
			cost: 3,
			description:
				"Lorsque vous acquérez cette carte, gagnez 2 jetons Pulsation.<br>Lancer\u00a0: Infligez 2 dégâts.<br>Vous pouvez perdre 1 jeton Pulsation. Si vous le faites, un joueur gagne 1 point de vie.",
			expansion: "Legacy",
		},
		{
			id: "V29",
			name: "Communion de brèche",
			nameEn: "Breach Communion",
			cost: 4,
			description:
				"Lorsque préparé, une fois par tour durant votre phase principale, vous pouvez gagner 1 jeton Pulsation.<br>Lancer\u00a0: Infligez 2 dégâts.<br>Vous pouvez perdre 2 jetons Pulsation. Si vous le faites, infligez 3 dégâts supplémentaires.",
			expansion: "Legacy",
		},
		{
			id: "P30",
			name: "Vision fugace",
			nameEn: "Fleeting Vision",
			cost: 3,
			description:
				"Lancer\u00a0: Infligez 2 dégâts.<br>Chaque joueur peut révéler les deux premières cartes de sa pioche et défausser autant de ces cartes qu'il le souhaite.",
			expansion: "Legacy",
		},
		{
			id: "VI30",
			name: "Serment tonitruant",
			nameEn: "Thunderous Oath",
			cost: 8,
			description:
				"Lancer\u00a0: Infligez 6 dégâts.<br>Gagnez 1 jeton Pulsation. Vous pouvez perdre autant de jetons Pulsation que vous le souhaitez. Si vous le faites, un allié pioche autant de cartes que de jetons Pulsation perdus de cette manière.",
			expansion: "Legacy",
		},
		{
			id: "IV31",
			name: "Pyro-esprit",
			nameEn: "Pyro Geist",
			cost: 6,
			description:
				"Lorsque vous préparez ce sort, infligez 1 dégât.<br>Lancer : Infligez 1 dégât. Infligez 2 dégâts.<br><small><i>(Les effets modifiant les dégâts concernent les deux sources de dégâts.)</i></small>",
			expansion: "Legacy",
		},
		{
			id: "Ia33",
			name: "Chakram de feu",
			nameEn: "Fire Chakram",
			cost: 2,
			description: "Lancer : Infligez 2 dégâts.",
			expansion: "Legacy",
		},
		{
			id: "III36",
			name: "Salve arcanique",
			nameEn: "Arcane Salvo",
			cost: 5,
			description:
				"Lorsque préparé, une fois par tour durant votre phase principale, vous pouvez placer sur votre pioche une relique jouée ce tour ou une relique de votre défausse.<br>Lancer : Infligez 4 dégâts.",
			expansion: "Legacy",
		},
		{
			id: "P36",
			name: "Projectile fragmenté",
			nameEn: "Splinter Missile",
			cost: 5,
			description:
				"Lancer\u00a0: Infligez 4 dégâts.<br>Un allié peut défausser une carte de sa main. S'il le fait, répartissez ces dégâts comme vous le souhaitez entre la némésis et autant de serviteurs que vous voulez.",
			expansion: "Legacy",
		},
		{
			id: "Ia38",
			name: "Brume distordante",
			nameEn: "Warping Haze",
			cost: 3,
			description:
				"Lancer\u00a0: Infligez 2 dégâts.<br>Si vous avez au moins deux autres sorts préparés, infligez 1 dégât supplémentaire.",
			expansion: "Legacy",
		},
		{
			id: "III41",
			name: "Collision de brèches",
			nameEn: "Breach Collision",
			cost: 7,
			description:
				"Lorsque vous acquérez cette carte, vous pouvez la placer sur la défausse de n'importe quel joueur.<br>Lancer\u00a0: Infligez 5 dégâts.<br>Gravehold gagne 1 point de vie.",
			expansion: "Legacy",
		},
		{
			id: "Ia43",
			name: "Poing incinérateur",
			nameEn: "Incinerating Fist",
			cost: 4,
			description: "Lancer : Infligez 3 dégâts.",
			expansion: "Legacy",
		},
		{
			id: "Ia48",
			name: "Nœud gravitationnel",
			nameEn: "Gravity Node",
			cost: 5,
			description:
				"Lancer : Un joueur défausse une carte de sa main. S'il le fait, infligez 4 dégâts.",
			expansion: "Legacy",
		},
		{
			id: "SE127",
			name: "Lame de sagesse",
			nameEn: "Blade of Wisdom",
			cost: 6,
			description:
				"Lorsque vous acquerez cette carte, si sept autres cartes ou plus se trouvent dans votre défausse, gagnez 2 points de vie.<br>Lancer : Infligez 5 dégâts.",
			expansion: "Secrets Enfouis",
		},
		{
			id: "SE129",
			name: "Courant flamboyant",
			nameEn: "Burning Current",
			cost: 3,
			description:
				"Lorsque préparé, lors de votre phase d'incantation, vous pouvez perdre 2 jetons Pulsation. Si vous le faites, les sorts que vous lancez ce tour infligent 1 dégât supplémentaire.<br>Lancer : Infligez 1 dégâts. Gagnez 1 jeton Pulsation.",
			expansion: "Secrets Enfouis",
		},
		{
			id: "SE130",
			name: "Coup double",
			nameEn: "Double Tap",
			cost: 3,
			description:
				"Lancer : Infligez 1 dégât. Infligez 1 dégât. (Les effets modifiant les dégâts concernent les deux sources de dégâts.)",
			expansion: "Secrets Enfouis",
		},
		{
			id: "SE131",
			name: "Toucher vampirique",
			nameEn: "Draining Touch",
			cost: 2,
			description: "Lancer : Infligez 1 dégât. Gagnez 1 charge.",
			expansion: "Secrets Enfouis",
		},
		{
			id: "SE132",
			name: "Éclair de génie",
			nameEn: "Flash of Intellect",
			cost: 4,
			description:
				"Lancer : Infligez 3 dégâts. Si six autres cartes ou plus se trouvent dans votre défausse, vous pouvez acquérir un Éclair de génie de la réserve et le placer sur votre pioche.",
			keyword: "link",
			expansion: "Secrets Enfouis",
		},
		{
			id: "SE138",
			name: "Frappe audacieuse",
			nameEn: "Nerve Jab",
			cost: 2,
			description:
				"Lancer : Infligez 1 dégât. Réduisez un serviteur au silence.",
			expansion: "Secrets Enfouis",
		},
		{
			id: "SE140",
			name: "Tir de précision",
			nameEn: "Precision Shot",
			cost: 3,
			description:
				"Lancer : Infligez 2 dégâts. Si six autres cartes ou plus se trouvent dans votre défausse, infligez 2 dégâts supplémentaires.",
			keyword: "link",
			expansion: "Secrets Enfouis",
		},
		{
			id: "SE141",
			name: "Éruption psychique",
			nameEn: "Psychic Eruption",
			cost: 8,
			description:
				"Lancer : Infligez autant de dégâts que le nombre de cartes présentes dans la défausse d'un joueur.",
			expansion: "Secrets Enfouis",
		},
		{
			id: "SE145",
			name: "Force colossale",
			nameEn: "Stunning Force",
			cost: 5,
			description:
				"Lancer : Infligez 4 dégâts à la némésis. Réduisez une serviteur au silence.",
			expansion: "Secrets Enfouis",
		},
	],
};
