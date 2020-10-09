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
          <label>NOMBRE</label>
          <input type="text" name="name" id="name" required></input>
          <label>EMAIL</label>
          <input type="email" name="email" id="email" required />
          <label>ASUNTO</label>
          <input type="text" name="subject" id="subject" required />
          <label>MENSAJE</label>
          <textarea
            name="message"
            id=""
            cols="30"
            rows="10"
            required
          ></textarea>
          <button>Enviar</button>
        </form>
      </div>
    </Layout>
  )
}

export default contactus
