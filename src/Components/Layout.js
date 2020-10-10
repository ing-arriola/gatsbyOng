import React, { Fragment } from "react"
import Toolbar from "./Toolbar"
import Toolbar_articles from "./Toolbar_articles"
import Footer from "./Footer"
const Layout = ({ children, color }) => {
  console.log(color)
  return (
    <Fragment>
      {color === "black" ? <Toolbar_articles /> : <Toolbar />}
      <main>{children}</main>
      <Footer />
    </Fragment>
  )
}

export default Layout
