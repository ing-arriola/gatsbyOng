import React from "react"
import Layout from "../Components/Layout"
const contactus = () => {
  return (
    <Layout>
      <div>
        <form>
          <label>Nombre</label>
          <input type="text" name="name" id="name" required></input>
          <label>Email</label>
          <input type="email" name="email" id="email" required />
          <label>Asunto</label>
          <input type="text" name="subject" id="subject" required />
          <label>Mensaje</label>
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
