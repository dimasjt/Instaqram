import {
  SET_USER_BY_TOKEN,
  USER_LOGOUT,
} from "../constants"

function user(state = null, action) {
  switch (action.type) {
    case SET_USER_BY_TOKEN:
      return action.user
    case USER_LOGOUT:
      return null
    default:
      return state
  }
}

export default user
