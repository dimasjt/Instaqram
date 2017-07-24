import React from "react"
import { Link } from "react-router-dom"

const styles = {
  container: {
    height: "60px",
    width: "100%",
    position: "fixed",
    backgroundColor: "rgb(0, 188, 212)",
    padding: "10px 30px",
  },
  title: {
    padding: 0,
    margin: 0,
    display: "inline",
  },
  containerTitle: {
    width: "30%",
    display: "inline-block",
  },
  containerMenus: {
    width: "70%",
    display: "inline-block",
  },
  menus: {
    listStyle: "none",
  },
}

const Header = () => {
  return (
    <div style={styles.container}>
      <div style={styles.containerTitle}>
        <h1 style={styles.title}>Instaqram</h1>
      </div>
      <div style={styles.containerMenus}>
        <ul style={styles.menus}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Header
