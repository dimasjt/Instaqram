import { combineReducers } from "redux"
import { routerReducer as routing } from "react-router-redux"
import { reducer as formReducer } from "redux-form"

import { apolloReducer } from "../apollo"

const combinedReducers = combineReducers({
  routing,
  form: formReducer,
  apollo: apolloReducer,
})

export default combinedReducers
