import React from "react"
import { FaFacebook, FaRegEnvelope, FaWhatsapp } from "react-icons/fa"
import { Link } from "gatsby"
const Footer = () => {
  return (
    <footer className="main-footer">
      <div>
        <a
          href="google.com"
          className="main-footer--link"
          target="_blank"
          rel="noreferrer noopener"
        >
          Website developed by: Jaime Arriola
        </a>

        <p>Red de jóvenes del futuro 2020 &copy; </p>
      </div>

      <div className="main-footer--social">
        <div>
          <a
            href="https://www.facebook.com/Red-de-J%C3%B3venes-del-Futuro-101271765014839"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaFacebook size={28} className="main-footer--link" />
          </a>
        </div>
        <div>
          <Link to="/contactus/">
            <FaRegEnvelope size={28} className="main-footer--link" />
          </Link>
        </div>
        <div className="social__phone">
          <FaWhatsapp size={28} /> +503 74366164
        </div>
      </div>
    </footer>
  )
}

export default Footer
