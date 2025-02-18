import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

console.log("Main.jsx initialized");
const rootElement = document.getElementById("root");
console.log("Root element:", rootElement);

const root = createRoot(rootElement);
console.log("Root created");

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
console.log("Render called");
