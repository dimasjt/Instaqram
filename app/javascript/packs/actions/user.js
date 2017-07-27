import {
  SET_USER,
} from "../constants"

export function setUser(user) {
  return (dispatch) => {
    dispatch({
      type: SET_USER,
      user,
    })
  }
}
