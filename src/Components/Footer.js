import React from "react"
import { FaFacebook, FaRegEnvelope, FaWhatsapp } from "react-icons/fa"
import { Link } from "gatsby"
import Logo from "../images/LogRJF.png"
const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-logo">
        <img src={Logo} alt="Red de JF" />
      </div>

      <div className="main-footer--text">
        <p>Red de jóvenes del futuro 2020 &copy; </p>
        <a
          href="https://jaime-arriola.netlify.app/"
          className="main-footer--link"
          target="_blank"
          rel="noreferrer noopener"
        >
          Website developed by: Jaime Arriola
        </a>
      </div>

      <div className="main-footer--social">
        <div>
          <a
            href="https://www.facebook.com/Red-de-J%C3%B3venes-del-Futuro-101271765014839"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaFacebook className="main-footer--link logo-size" />
          </a>
        </div>
        <div>
          <Link to="/contactus/">
            <FaRegEnvelope className="main-footer--link logo-size " />
          </Link>
        </div>
        <div className="social__phone">
          <FaWhatsapp className="logo-size" /> +503 74366164
        </div>
      </div>
    </footer>
  )
}

export default Footer
