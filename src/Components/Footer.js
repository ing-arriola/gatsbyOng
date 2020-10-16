import React from "react"
import { FaFacebook, FaRegEnvelope, FaWhatsapp } from "react-icons/fa"
const Footer = () => {
  return (
    <footer className="main-footer">
      <div>
        <a href="google.com">Website builded by: Jaime Arriola</a>

        <p>Red de jóvenes del futuro &copy; </p>
      </div>

      <div className="main-footer--social">
        <a href="google.com">
          <FaFacebook size={40} />
        </a>
        <FaRegEnvelope size={40} />
        <a href="google.com">
          <FaWhatsapp size={40} className="social--whatsapp" />
        </a>
      </div>
    </footer>
  )
}

export default Footer
