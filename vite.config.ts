import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		tailwindcss(),
		react(),
		VitePWA({
			registerType: "autoUpdate",
			includeAssets: ["apple-touch-icon.png", "favicon-32.png"],
			// Polices du thème mises en cache pour l'usage hors ligne.
			workbox: { globPatterns: ["**/*.{js,css,html,woff2}"] },
			manifest: {
				name: "Aeon's End - Générateur de rencontres",
				short_name: "Aeon's End",
				description:
					"Générateur d'expéditions et de marchés pour le jeu de société Aeon's End.",
				id: "/",
				start_url: "/",
				scope: "/",
				lang: "fr",
				display: "standalone",
				background_color: "#06070b",
				theme_color: "#06070b",
				icons: [
					{
						src: "icon-192.png",
						sizes: "192x192",
						type: "image/png",
						purpose: "any maskable",
					},
					{
						src: "icon-512.png",
						sizes: "512x512",
						type: "image/png",
						purpose: "any maskable",
					},
				],
			},
		}),
	],
});
