import { decode, encode } from "json-web-token"

import {
  SET_USER_BY_TOKEN,
  SHOW_ALERT,
  USER_LOGOUT,
  USER_UPDATED,
} from "../constants"


export function setUserByToken(token) {
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

export function logoutUser() {
  return (dispatch) => {
    window.localStorage.removeItem("auth_token")
    dispatch({
      type: USER_LOGOUT,
    })
  }
}

export function setUser(param) {
  return (dispatch) => {
    const user = param
    delete user.__typename
    encode("secrets", user, (err, token) => {
      if (err) {
        dispatch({
          type: SHOW_ALERT,
          message: "Can't encode token",
        })
      }

      if (token) {
        window.localStorage.setItem("auth_token", token)
        dispatch({
          type: USER_UPDATED,
          user,
        })
      }
    })
  }
}
