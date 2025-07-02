import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // or wherever your root file is

import "./index.css"; // ✅ important

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
