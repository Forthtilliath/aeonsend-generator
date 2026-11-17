# Aeon's End — Générateur de rencontres

Générateur d'expéditions et de marchés pour le jeu de société coopératif **Aeon's End**, en français, utilisable hors ligne.

**➜ [aeonsend-generator.vercel.app](https://aeonsend-generator.vercel.app)**

## Fonctionnalités

- **Campagne ou affrontement unique** : tirage d'une expédition en quatre paliers de Némésis, ou d'un seul combat.
- **Mages tirés pour chaque affrontement**, selon le nombre de joueurs, avec une fiche par mage (brèches, pouvoir, complexité).
- **Cartes du marché au visuel du jeu**, avec leur texte et l'emplacement qui les a tirées ; illustration de chaque Némésis et animations de tirage.
- **Marchés** : 9 modèles prédéfinis (Équilibré, Premium, Précision…) ou un marché personnalisé emplacement par emplacement (type de carte, coût). Chaque carte peut être retirée ou tirée à nouveau.
- **Histoire générée** entre les Némésis de la campagne.
- **Toutes les boîtes**, de la vague 1 à la vague 10, avec leur nom français et regroupées par vague : seules les cartes de vos boîtes sont tirées.
- **Réglages mémorisés** (boîtes possédées, marché choisi), sur l'appareil uniquement.
- **Export `.txt`** de l'expédition.
- **Application installable (PWA)** sur mobile, utilisable hors ligne une fois chargée.

## Développement

Le projet utilise [Bun](https://bun.sh).

```bash
bun install        # dépendances
bun run dev        # serveur de développement
bun test           # tests unitaires
bun run lint       # lint et format (Biome)
bun run build      # vérification des types + build de production (dist/)
```

### Images

- **Némésis** : `.\scripts\nemesis-art.ps1` (PowerShell, Windows) télécharge le plateau de chaque Némésis sur le wiki ([aeonsend.wiki.gg](https://aeonsend.wiki.gg), sinon fandom), en garde l'illustration et l'enregistre dans `src/assets/nemeses/<slug du nom>.jpg`. Pour une nouvelle Némésis, ajouter son nom anglais dans le tableau du script et le relancer.
- **Plateaux des mages** : déposer un scan dans `src/assets/mages/<slug du nom>.jpg` (ex. `moineau.jpg`, `qu-de-vieux-souvenirs.jpg`) ; il s'affiche dans la fiche du mage.

**Stack** : React 19, TypeScript, Vite, Tailwind CSS 4, zod, vite-plugin-pwa.

## Sécurité et vie privée

- Aucune donnée n'est envoyée nulle part : pas de compte, pas de traceur, tout reste dans le navigateur.
- Les données relues depuis le `localStorage` sont validées par un schéma zod avant d'être utilisées.
- Le site est servi avec une Content-Security-Policy stricte et les en-têtes de sécurité usuels (voir [`vercel.json`](vercel.json)).

## Licence

Le code est publié sous licence [MIT](LICENSE).

Projet de fan, non officiel, sans lien avec les éditeurs du jeu. _Aeon's End_, ainsi que les noms de cartes, de mages et de Némésis, sont la propriété de leurs ayants droit (Action Phase Games, Indie Boards & Cards). Les données du jeu servent uniquement à faciliter la préparation des parties. Les illustrations des Némésis proviennent des wikis communautaires du jeu et restent la propriété de leurs ayants droit.
