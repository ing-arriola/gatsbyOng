import React, { Fragment } from "react"
import Toolbar from "./Toolbar"
import Footer from "./Footer"
const Layout = ({ children }) => {
  return (
    <Fragment>
      <Toolbar />
      <main>{children}</main>
      <Footer />
    </Fragment>
  )
}

export default Layout
