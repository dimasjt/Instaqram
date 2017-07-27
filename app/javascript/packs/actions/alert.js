import {
  HIDE_ALERT,
  SHOW_ALERT,
} from "../constants"

export function hideAlert() {
  return (dispatch) => {
    dispatch({
      type: HIDE_ALERT,
    })
  }
}

export function showAlert(message) {
  return (dispatch) => {
    dispatch({
      type: SHOW_ALERT,
      message,
    })
  }
}
