import {
  SET_USER_BY_TOKEN,
} from "../constants"

function user(state = null, action) {
  switch (action.type) {
    case SET_USER_BY_TOKEN:
      return action.user
    default:
      return state
  }
}

export default user
