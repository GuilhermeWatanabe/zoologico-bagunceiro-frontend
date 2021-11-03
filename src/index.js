import axios from "axios";
import React from "react";
import { CookiesProvider } from "react-cookie";
import ReactDOM from "react-dom";
import App from "./App";

axios.get("http://localhost:8000/sanctum/csrf-cookie", {
  withCredentials: true,
});

ReactDOM.render(
  <CookiesProvider>
    <App />
  </CookiesProvider>,
  document.getElementById("root")
);
