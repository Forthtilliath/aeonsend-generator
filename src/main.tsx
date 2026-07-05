import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./app.tsx";

const appElement = document.getElementById("app");
if (!appElement) {
	throw new Error("No app element found");
}

createRoot(appElement).render(<App />);
