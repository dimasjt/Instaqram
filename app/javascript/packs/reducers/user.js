import {
  SET_USER_BY_TOKEN,
  USER_LOGOUT,
  USER_UPDATED,
} from "../constants"

function user(state = null, action) {
  switch (action.type) {
    case SET_USER_BY_TOKEN:
    case USER_UPDATED:
      return action.user
    case USER_LOGOUT:
      return null
    default:
      return state
  }
}

export default user
