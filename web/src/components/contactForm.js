import React from "react"

import styles from "./contactForm.module.scss"

const ContactForm = () => {
  const encode = (data) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
    .catch((error) => alert(error))
  }

  return (
    <form className={styles.contactForm} name="contact" method="post" data-netlify="true" netlify-honeypot="bot-field">
      <input type="hidden" name="form-name" value="contact" />
      <div className={styles.formField}>
        <label htmlFor="name">Name:</label>
        <input id="name" name="name" type="text" />
      </div>
      <div className={styles.formField}>
        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="email" />
      </div>
      <div className={styles.formField}>
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" cols="30" rows="10"></textarea>
      </div>
      <input name="bot-field" onChange={handleChange} hidden />
      <div className={styles.formButton}>
        <button type="submit">Send</button>
      </div>
    </form>
  )
}

export default ContactForm
