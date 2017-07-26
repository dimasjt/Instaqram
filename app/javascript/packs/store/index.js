import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { createBrowserHistory } from "history"
import { routerMiddleware } from "react-router-redux"

import rootReducers from "../reducers"
import { apolloMiddleware } from "../apollo"

const enhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const history = createBrowserHistory()
const routeMiddleware = routerMiddleware(history)
const middleware = applyMiddleware(thunk, routeMiddleware, apolloMiddleware)

const store = createStore(rootReducers, enhancers, middleware)

export {
  store,
  history,
}
