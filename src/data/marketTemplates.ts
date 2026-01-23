import type { MarketTemplate } from '../types';

export const marketTemplates: Record<string, MarketTemplate> = {
  balanced: {
    name: "Marché #1 : Équilibré",
    config: [
      { type: 'gem', operator: '<=', cost: 4 },
      { type: 'gem', operator: '<=', cost: 4 },
      { type: 'gem', operator: 'any', cost: null },
      { type: 'relic', operator: 'any', cost: null },
      { type: 'relic', operator: 'any', cost: null },
      { type: 'spell', operator: '<=', cost: 6 },
      { type: 'spell', operator: '<=', cost: 5 },
      { type: 'spell', operator: '>=', cost: 5 },
      { type: 'spell', operator: '>=', cost: 6 }
    ]
  },
  pierced: {
    name: "Marché #2 : Porte-monnaie percé",
    config: [
      { type: 'gem', operator: '>=', cost: 3 },
      { type: 'gem', operator: '>=', cost: 3 },
      { type: 'gem', operator: '>=', cost: 3 },
      { type: 'relic', operator: '>=', cost: 4 },
      { type: 'relic', operator: 'any', cost: null },
      { type: 'spell', operator: '>=', cost: 6 },
      { type: 'spell', operator: '<=', cost: 6 },
      { type: 'spell', operator: '>=', cost: 6 },
      { type: 'spell', operator: '>=', cost: 6 }
    ]
  },
  master: {
    name: "Marché #3 : Maître de la magie",
    config: [
      { type: 'gem', operator: 'any', cost: null },
      { type: 'gem', operator: 'any', cost: null },
      { type: 'gem', operator: 'any', cost: null },
      { type: 'relic', operator: 'any', cost: null },
      { type: 'spell', operator: '=', cost: 3 },
      { type: 'spell', operator: '=', cost: 4 },
      { type: 'spell', operator: '<=', cost: 5 },
      { type: 'spell', operator: '>=', cost: 5 },
      { type: 'spell', operator: '>=', cost: 6 }
    ]
  }
};

export const defaultCustomMarket = [
  { type: 'gem' as const, operator: '<=' as const, cost: 4 },
  { type: 'gem' as const, operator: '<=' as const, cost: 4 },
  { type: 'gem' as const, operator: 'any' as const, cost: null },
  { type: 'relic' as const, operator: 'any' as const, cost: null },
  { type: 'relic' as const, operator: 'any' as const, cost: null },
  { type: 'spell' as const, operator: '<=' as const, cost: 5 },
  { type: 'spell' as const, operator: '<=' as const, cost: 6 },
  { type: 'spell' as const, operator: '>=' as const, cost: 5 },
  { type: 'spell' as const, operator: '>=' as const, cost: 6 }
];