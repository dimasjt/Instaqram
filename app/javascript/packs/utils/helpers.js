import React from "react"
import { Link } from "react-router-dom"

export const linkFor = (component, to, rest) => {
  return <Link {...rest} to={to}>{component}</Link>
}

export const isShow = (component, show) => {
  return show ? component : null
}
