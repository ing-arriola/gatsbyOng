import React from "react"
import { FaFacebook, FaRegEnvelope, FaWhatsapp } from "react-icons/fa"
const Footer = () => {
  return (
    <footer className="main-footer">
      <div>
        <a href="google.com" className="main-footer--link">
          Website builded by: Jaime Arriola
        </a>

        <p>Red de jóvenes del futuro 2020 &copy; </p>
      </div>

      <div className="main-footer--social">
        <a href="https://www.facebook.com/Red-de-J%C3%B3venes-del-Futuro-101271765014839">
          <FaFacebook size={40} className="main-footer--link" />
        </a>
        <FaRegEnvelope size={40} className="main-footer--link" />
        <a href="google.com">
          <FaWhatsapp size={40} className="main-footer--link" />
        </a>
      </div>
    </footer>
  )
}

export default Footer
