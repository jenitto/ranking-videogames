import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";
import "./index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "fontsource-roboto";
import messages from "../src/i18n";

ReactDOM.render(
  <React.StrictMode>
    <IntlProvider messages={messages["es"]} locale="es" defaultLocale="es">
      <App />
    </IntlProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
