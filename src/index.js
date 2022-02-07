import { StrictMode } from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./components/store/auth-context";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>,
  rootElement
);
