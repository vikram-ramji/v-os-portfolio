import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { WindowsProvider } from "./context/WindowsContext.jsx";

createRoot(document.getElementById("root")).render(
  <WindowsProvider>
    <App />
  </WindowsProvider>,
);
