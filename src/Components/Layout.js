import React, { Fragment } from "react"
import Toolbar from "./Toolbar"
import NavBurger from "./NavBurger"
import Toolbar_articles from "./Toolbar_articles"
import Footer from "./Footer"
const Layout = ({ children, color }) => {
  console.log(color)
  return (
    <div className="pages-container">
      {color === "black" ? <Toolbar_articles /> : <Toolbar />}
      <NavBurger />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
