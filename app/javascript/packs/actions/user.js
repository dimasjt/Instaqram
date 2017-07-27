import { decode } from "json-web-token"

import {
  SET_USER_BY_TOKEN,
  SHOW_ALERT,
} from "../constants"

const defaultToken = window.localStorage.getItem("auth_token")

export function setUserByToken(token = defaultToken) {
  return (dispatch) => {
    decode("secrets", token, (error, user) => {
      if (error) {
        dispatch({
          type: SHOW_ALERT,
          message: "Token invalid",
        })
      }

      if (user) {
        window.localStorage.setItem("auth_token", token)

        dispatch({
          type: SET_USER_BY_TOKEN,
          user,
        })
      }
    })
  }
}
