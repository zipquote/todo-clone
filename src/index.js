import React from "react";
import { render } from "react-dom";
import { initializeIcons } from "@fluentui/react/lib/Icons";
import { App } from "./app";

import "normalize.css";

initializeIcons(); //Initialize fluentui icons

render(<App />, document.getElementById("root"));
