# Améliorations possibles — Aeon's End Expedition Generator

État au 2026-07-05. Liste issue de l'audit de code du projet. Les failles de sécurité identifiées (aucune critique) et le bug de rules-of-hooks dans `Modal.tsx` ont déjà été corrigés (commits `ed44b78`, `71a72f8`). Tous les points listés ci-dessous sont désormais traités.

## Fait

- ✅ **Validation numérique** — `clamp()` ajouté dans [src/utils/helpers.ts](src/utils/helpers.ts) et appliqué dans `PlayerConfig.tsx` et `MarketSelector.tsx` : les valeurs saisies sont désormais bornées en JS (plus seulement via les attributs `min`/`max` HTML).
- ✅ **Garde sur `getRandomItemFromArray`** — lève une erreur explicite sur tableau vide plutôt que de retourner `undefined` silencieusement.
- ✅ **Focus trap dans `Modal`** — le focus est déplacé vers la modale à l'ouverture, piégé (Tab/Shift+Tab) tant qu'elle est ouverte, et restauré sur l'élément précédent à la fermeture.
- ✅ **Tests unitaires** — [src/utils/helpers.test.ts](src/utils/helpers.test.ts) (27 tests, `bun test`) couvrant `clamp`, `matchesCondition`, `getCriteriaLabel`, `generateSupply`, `hasExcessCards`, `generateRandomInteger`, `getRandomItemFromArray`, `shuffle`, `copyTuple`.
- ✅ **Extraction de `BattleCard`** — nouveau composant [src/components/expedition/BattleCard.tsx](src/components/expedition/BattleCard.tsx), retiré de `GenExpedition.tsx`.
- ✅ **Migration Preact → React** — Vite utilise désormais `@vitejs/plugin-react`, `lucide-react` remplace `lucide-preact`, `main.tsx` utilise `createRoot` de `react-dom/client`.
- ✅ **Lint/format avec Biome** — `@biomejs/biome` installé, `biome.jsonc` configuré (tabs, guillemets doubles, tri des imports), script `lint`. Aucune violation de règle trouvée sur le code existant.
- ✅ **PWA installable sur mobile** — `vite-plugin-pwa` (service worker autoUpdate + manifest), icônes générées à partir du symbole Aether existant (`public/icon-192.png`, `icon-512.png`, `apple-touch-icon.png`, `favicon-32.png`).
- ✅ **Biais modulo dans `generateRandomInteger`** — [src/utils/helpers.ts](src/utils/helpers.ts) tire désormais un `Uint32` et rejette les valeurs au-delà du dernier multiple entier de `max` avant le modulo, pour une distribution uniforme quel que soit `max`.
- ✅ **`numMages` clampé explicitement** — [src/components/expedition/GenExpedition.tsx](src/components/expedition/GenExpedition.tsx) borne désormais `numMages` à `[0, allMages.length]` au point d'usage, plutôt que de dépendre implicitement du clamp fait dans `PlayerConfig`.

## Fonctionnalités en suspens (déjà notées dans CONTEXT.md)

- **Export PNG** : mentionné comme fonctionnel dans une version antérieure (via `html2canvas` chargé depuis un CDN) mais absent du code actuel — seul l'export `.txt` subsiste. À réintégrer si le besoin est confirmé, en évitant cette fois un chargement CDN dynamique (préférer une dépendance npm installée en dur).
- **Pas de persistance** : tout l'état est en mémoire, perdu au refresh (pas de `localStorage`). À évaluer selon l'usage réel (session unique vs reprise de campagne).
