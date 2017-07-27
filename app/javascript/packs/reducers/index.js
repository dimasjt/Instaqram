import { combineReducers } from "redux"
import { routerReducer as routing } from "react-router-redux"
import { reducer as formReducer } from "redux-form"

import { apolloReducer } from "../apollo"
import alert from "./alert"

const combinedReducers = combineReducers({
  routing,
  form: formReducer,
  apollo: apolloReducer,
  alert,
})

export default combinedReducers
