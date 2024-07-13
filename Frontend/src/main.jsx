import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// style files
import "./index.css";
import "./Style/gallery.scss";
import "./Style/Layout.scss";

import { GlobalProvider } from "./context/global";
import { GlobalStyle } from "./SuperAdmin/GlobalStyle";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>
);
