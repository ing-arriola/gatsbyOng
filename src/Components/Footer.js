import React from "react"
import { FaFacebook, FaRegEnvelope, FaWhatsapp } from "react-icons/fa"
const Footer = () => {
  return (
    <footer className="main-footer">
      <div>
        <p>Website builded by: Jaime Arriola</p>
        <p>Red de jóvenes del futuro &copy; </p>
      </div>

      <div>
        <FaFacebook size={40} />
        <FaRegEnvelope size={40} />
        <FaWhatsapp size={40} />
      </div>
    </footer>
  )
}

export default Footer
