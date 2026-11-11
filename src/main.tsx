import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource/public-sans/latin-400.css";
import "@fontsource/public-sans/latin-500.css";
import "@fontsource/public-sans/latin-600.css";
import "@fontsource/league-spartan/latin-600.css";
import "@fontsource/league-spartan/latin-700.css";
import App from "./App";
import { localizedPageFiles, pageFiles } from "./corporate-content";
import type { PageId } from "./corporate-content";
import "./styles.css";

const root = document.getElementById("root")!;
const currentFile = window.location.pathname.split("/").filter(Boolean).at(-1);
const pages = Object.keys(pageFiles) as PageId[];
const language = pages.some((page) => localizedPageFiles.ms[page] === currentFile)
  ? "ms"
  : "en";
const currentPage =
  pages.find((page) => localizedPageFiles[language][page] === currentFile) ?? "home";
document.documentElement.lang = language;
const application = (
  <React.StrictMode>
    <App page={currentPage} language={language} />
  </React.StrictMode>
);

if (root.hasChildNodes()) {
  ReactDOM.hydrateRoot(root, application);
} else {
  ReactDOM.createRoot(root).render(application);
}
