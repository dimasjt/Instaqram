import {
  SET_USER,
} from "../constants"

function user(state = null, action) {
  switch (action.type) {
    case SET_USER:
      return action.user
    default:
      return state
  }
}

export default user
