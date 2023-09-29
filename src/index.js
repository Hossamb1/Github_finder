import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { GithubProvider } from "./components/context/github/githubContext";
import { AlertProvider } from "./components/context/alert/alertContext";

const domNode = document.getElementById("root");
const root = createRoot(domNode);
root.render(
  <React.StrictMode>
    <GithubProvider>
      <AlertProvider>
        <App />
      </AlertProvider>
    </GithubProvider>
  </React.StrictMode>
);
