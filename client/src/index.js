import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import TimeAgo from 'javascript-time-ago'

import en from 'javascript-time-ago/locale/en.json'

TimeAgo.addDefaultLocale(en)

ReactDOM.render(<App />, document.getElementById("root"));
