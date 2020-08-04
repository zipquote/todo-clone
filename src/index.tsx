import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { initializeIcons } from "@fluentui/react/lib/Icons";
import { App } from "./app";

import "normalize.css";

initializeIcons(); //Initialize fluentui icons

render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
