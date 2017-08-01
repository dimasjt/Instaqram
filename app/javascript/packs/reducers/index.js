import { combineReducers } from "redux"
import { routerReducer as routing } from "react-router-redux"
import { reducer as formReducer } from "redux-form"

import { apolloReducer } from "../apollo"
import alert from "./alert"
import user from "./user"
import photos from "./photos"

const combinedReducers = combineReducers({
  routing,
  form: formReducer,
  apollo: apolloReducer,
  photos,
  alert,
  currentUser: user,
})

export default combinedReducers
