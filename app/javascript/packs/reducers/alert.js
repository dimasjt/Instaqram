import {
  SHOW_ALERT,
  HIDE_ALERT,
} from "../constants"

const initializeState = {
  message: "",
  open: false,
  action: null,
}

function alert(state = initializeState, action) {
  switch (action.type) {
    case SHOW_ALERT:
      return {
        message: action.message,
        open: true,
        action: action.action,
      }
    case HIDE_ALERT:
      return {
        ...initializeState,
      }
    default:
      return state

  }
}

export default alert
