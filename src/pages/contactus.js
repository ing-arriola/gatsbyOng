import React from "react"
import Layout from "../Components/Layout"
const contactus = () => {
  return (
    <Layout>
      <div className="form-container">
        <form className="contact-form">
          <div className="page-title">
            <p>CONTACTANOS</p>
          </div>
          <p className="contact-description">
            Sera un gusto atenderte, permitenos saber de ti escribiendonos a{" "}
            <span>prensa.redejovenesdelfuturo@gmail.com</span> o llenando el
            siguiente formulario:{" "}
          </p>
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
            placeholder="Escriben tu mensaje aqui, sera un gusto leerlo :)"
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
