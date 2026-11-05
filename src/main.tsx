import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource/dm-sans/latin-400.css";
import "@fontsource/dm-sans/latin-500.css";
import "@fontsource/dm-sans/latin-600.css";
import "@fontsource/manrope/latin-500.css";
import "@fontsource/manrope/latin-600.css";
import "@fontsource/manrope/latin-700.css";
import App from "./App";
import { pageFiles } from "./corporate-content";
import "./styles.css";

const root = document.getElementById("root")!;
const currentFile = window.location.pathname.split("/").filter(Boolean).at(-1);
const currentPage =
  (Object.keys(pageFiles) as (keyof typeof pageFiles)[]).find(
    (page) => pageFiles[page] === currentFile,
  ) ?? "home";
const application = (
  <React.StrictMode>
    <App page={currentPage} />
  </React.StrictMode>
);

if (root.hasChildNodes()) {
  ReactDOM.hydrateRoot(root, application);
} else {
  ReactDOM.createRoot(root).render(application);
}
