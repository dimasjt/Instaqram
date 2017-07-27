import {
  SHOW_ALERT,
  HIDE_ALERT,
} from "../constants"

const initializeState = {
  message: "",
  open: false,
}

function alert(state = initializeState, action) {
  switch (action.type) {
    case SHOW_ALERT:
      return {
        message: action.message,
        open: true,
      }
    case HIDE_ALERT:
      return {
        message: "",
        open: false,
      }
    default:
      return state

  }
}

export default alert
