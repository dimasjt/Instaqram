import React from "react"
import { render } from "react-dom"
import injectTapEventPlugin from "react-tap-event-plugin"
import "babel-polyfill"

import Main from "./Main"

injectTapEventPlugin()

render(
  <Main />,
  document.getElementById("root"),
)
