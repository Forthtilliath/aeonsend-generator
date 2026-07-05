# Améliorations possibles — Aeon's End Expedition Generator

État au 2026-07-05. Liste issue de l'audit de code du projet. Les failles de sécurité identifiées (aucune critique) et le bug de rules-of-hooks dans `Modal.tsx` ont déjà été corrigés (commits `ed44b78`, `71a72f8`). Les points 1 à 5 ci-dessous ont également été traités.

## Fait

- ✅ **Validation numérique** — `clamp()` ajouté dans [src/utils/helpers.ts](src/utils/helpers.ts) et appliqué dans `PlayerConfig.tsx` et `MarketSelector.tsx` : les valeurs saisies sont désormais bornées en JS (plus seulement via les attributs `min`/`max` HTML).
- ✅ **Garde sur `getRandomItemFromArray`** — lève une erreur explicite sur tableau vide plutôt que de retourner `undefined` silencieusement.
- ✅ **Focus trap dans `Modal`** — le focus est déplacé vers la modale à l'ouverture, piégé (Tab/Shift+Tab) tant qu'elle est ouverte, et restauré sur l'élément précédent à la fermeture.
- ✅ **Tests unitaires** — [src/utils/helpers.test.ts](src/utils/helpers.test.ts) (24 tests, `bun test`) couvrant `clamp`, `matchesCondition`, `getCriteriaLabel`, `generateSupply`, `hasExcessCards`, `getRandomItemFromArray`, `shuffle`, `copyTuple`.
- ✅ **Extraction de `BattleCard`** — nouveau composant [src/components/expedition/BattleCard.tsx](src/components/expedition/BattleCard.tsx), retiré de `GenExpedition.tsx`.

## Restant

- **Biais modulo dans `generateRandomInteger`** — [src/utils/helpers.ts](src/utils/helpers.ts). `crypto.getRandomValues` sur un octet puis `% max` introduit une légère non-uniformité. Sans enjeu de sécurité, effort faible si on veut corriger (rejet des valeurs hors plage).
- **`numMages` non clampé** — [src/components/expedition/GenExpedition.tsx](src/components/expedition/GenExpedition.tsx). Conséquence indirecte résolue par le clamp de `PlayerConfig`, mais pas de garde explicite au niveau du calcul lui-même.

## Fonctionnalités en suspens (déjà notées dans CONTEXT.md)

- **Export PNG** : mentionné comme fonctionnel dans une version antérieure (via `html2canvas` chargé depuis un CDN) mais absent du code actuel — seul l'export `.txt` subsiste. À réintégrer si le besoin est confirmé, en évitant cette fois un chargement CDN dynamique (préférer une dépendance npm installée en dur).
- **Pas de persistance** : tout l'état est en mémoire, perdu au refresh (pas de `localStorage`). À évaluer selon l'usage réel (session unique vs reprise de campagne).

## En cours

- Migration Preact → React (Vite + `@vitejs/plugin-react`)
- PWA installable sur mobile (`vite-plugin-pwa`)
