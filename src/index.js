import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/main.css";
import Layout from "./components/Layout/Layout";
import { BrowserRouter, HashRouter } from "react-router-dom";
import RefContext, { RefContextProvider } from "./contexts/RefContext";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <RefContextProvider>
        <Layout />
      </RefContextProvider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
