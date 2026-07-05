import type { Nemesis } from "../types";

export const nemeses: Record<number, Nemesis[]> = {
	1: [
		{
			name: "Rageborne",
			difficulty: 5,
			description: "Un titan de flammes et de fureur",
			tier: 1,
			hp: 70,
		},
		{
			name: "Haze Queen",
			difficulty: 6,
			description: "Maîtresse des brumes toxiques",
			tier: 1,
			hp: 80,
		},
		{
			name: "Crooked Mask",
			difficulty: 6,
			description: "Un être d'ombres et de tromperie",
			tier: 1,
			hp: 75,
		},
	],
	2: [
		{
			name: "Prince of Gluttons",
			difficulty: 7,
			description: "Une entité insatiable de destruction",
			tier: 2,
			hp: 85,
		},
		{
			name: "Umbra Titan",
			difficulty: 7,
			description: "Le seigneur des ténèbres éternelles",
			tier: 2,
			hp: 80,
		},
		{
			name: "Carapace Queen",
			difficulty: 8,
			description: "La reine des chitines corrompues",
			tier: 2,
			hp: 90,
		},
	],
	3: [
		{
			name: "Blight Lord",
			difficulty: 9,
			description: "L'incarnation de la corruption",
			tier: 3,
			hp: 95,
		},
		{
			name: "The Darkness",
			difficulty: 8,
			description: "L'ombre qui dévore la lumière",
			tier: 3,
			hp: 100,
		},
		{
			name: "Doom Vortex",
			difficulty: 9,
			description: "Le tourbillon de destruction ultime",
			tier: 3,
			hp: 95,
		},
	],
	4: [
		{
			name: "The Wailing",
			difficulty: 10,
			description: "Le hurlement de la fin des temps",
			tier: 4,
			hp: 110,
		},
		{
			name: "Hollow Crown",
			difficulty: 10,
			description: "Le monarque du néant absolu",
			tier: 4,
			hp: 105,
		},
		{
			name: "Maggoth",
			difficulty: 9,
			description: "Le fléau primordial dévoreur",
			tier: 4,
			hp: 100,
		},
	],
};
