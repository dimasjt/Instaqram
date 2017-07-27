import { decode } from "json-web-token"

import {
  SET_USER_BY_TOKEN,
  SHOW_ALERT,
} from "../constants"

export function setUserByToken(token) {
  return (dispatch) => {
    decode("secrets", token, (error, payload) => {
      if (error) {
        dispatch({
          type: SHOW_ALERT,
          message: "Token invalid",
        })
      }

      if (payload) {
        window.localStorage.setItem("auth_token", token)

        dispatch({
          type: SET_USER_BY_TOKEN,
          payload,
        })
      }
    })
  }
}
