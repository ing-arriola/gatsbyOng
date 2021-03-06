import React from "react"
import Layout from "../Components/Layout"
import contactImage from "../images/contact.svg"

const contactus = () => {
  return (
    <Layout>
      <div className="form-container">
        <div className="page-title">
          <p>CONTACTANOS</p>
          <img src={contactImage} className="contact-image"></img>
        </div>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          netlify
          className="contact-form"
        >
          <input type="hidden" name="form-name" value="contact" />

          <div className="contact-form__description">
            <p className="contact-description">
              Sera un gusto atenderte, permitenos saber de ti llenando el
              siguiente formulario:{" "}
            </p>
          </div>

          <label for="name">Nombre</label>
          <input
            type="text"
            placeholder="Nombre"
            name="name"
            id="name"
            required
          ></input>
          <label for="email">Email</label>
          <input
            type="email"
            placeholder="Email"
            name="email"
            id="email"
            required
          />
          <label for="subject">Asunto</label>
          <input
            type="text"
            placeholder="Asunto de tu mensaje"
            name="subject"
            id="subject"
            required
          />
          <label for="message">Mensaje</label>
          <textarea
            name="message"
            id="message"
            placeholder="Escriben tu mensaje aqui, sera un gusto saber de ti :)"
            cols="30"
            rows="10"
            required
          ></textarea>
          <button className="form-button">Enviar</button>
        </form>
      </div>
    </Layout>
  )
}

export default contactus
