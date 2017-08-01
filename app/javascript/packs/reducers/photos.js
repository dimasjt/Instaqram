import {
  APOLLO_QUERY_RESULT,
  LOCATION_CHANGE,
} from "../constants"

const initializeState = {
  list: [],
  active: null,
}

function photos(state = initializeState, action) {
  if (action.type === LOCATION_CHANGE) {
    return initializeState
  }
  if (action.type === APOLLO_QUERY_RESULT) {
    switch (action.operationName) {
      case "photo":
        return {
          ...state,
          active: action.result.data.photo,
        }
      default:
        return state
    }
  }
  return state
}

export default photos
