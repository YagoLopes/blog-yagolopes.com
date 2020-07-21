import React from "react"
import { Container } from "./styles"

export default class EmailForm extends React.Component {
 constructor(props) {
  super(props)
  this.submitForm = this.submitForm.bind(this)
  this.state = {
   status: "",
  }
 }

 render() {
  const { status } = this.state
  return (
   <Container>
    <form
     onSubmit={this.submitForm}
     action="https://formspree.io/xnqglngq"
     method="POST"
    >
     <h1>Me envie um e-mail</h1>
     <label>Seu melhor e-mail:</label>
     <input type="email" name="email" />
     <label>Mensagem:</label>
     <textarea type="text" name="message" rows="10" />
     {status === "SUCCESS" ? <span>Obrigado!</span> : <button>Enviar</button>}
     {status === "ERROR" && <p>Ooops! Alguma coisa deu errado.</p>}
    </form>
   </Container>
  )
 }

 submitForm(ev) {
  ev.preventDefault()
  const form = ev.target
  const data = new FormData(form)
  const xhr = new XMLHttpRequest()
  xhr.open(form.method, form.action)
  xhr.setRequestHeader("Accept", "application/json")
  xhr.onreadystatechange = () => {
   if (xhr.readyState !== XMLHttpRequest.DONE) return
   if (xhr.status === 200) {
    form.reset()
    this.setState({ status: "SUCCESS" })
   } else {
    this.setState({ status: "ERROR" })
   }
  }
  xhr.send(data)
 }
}
