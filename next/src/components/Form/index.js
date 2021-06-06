import React, { useState, useRef } from "react"

import styles from "./form.module.scss"

const Form = () => {
  const [state, setState] = useState({})
  const contactForm = useRef(null)

  const encode = (data) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }

  const handleChange = (evt) => {
    setState({ ...state, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    const form = evt.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
    .then(() => {
      contactForm.current.setAttribute("submitted", true)
      contactForm.current.reset()
    })
    .catch((error) => alert(error))
  }

  return (
    <form className={styles.form} ref={contactForm} name="contact" method="post" action="/" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubmit}>
      <div className={styles.formFront}>
        <input type="hidden" name="form-name" value="contact" />
        <input name="bot-field" onChange={handleChange} hidden />
        <div className={styles.formField}>
          <label htmlFor="name">Name:</label>
          <input id="name" name="name" type="text" required onChange={handleChange} />
        </div>
        <div className={styles.formField}>
          <label htmlFor="email">Email:</label>
          <input id="email" name="email" type="email" required onChange={handleChange} />
        </div>
        <div className={styles.formField}>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" cols="30" rows="10" required onChange={handleChange}></textarea>
        </div>
        <div className={styles.formButton}>
          <button type="submit">Send</button>
        </div>
      </div>
      <div className={styles.formMessage}>
        <div className={styles.formSuccess}>
          <div className={styles.formSuccessIcon}>
            <svg><circle cx="35" cy="35" r="30" /></svg>
          </div>
          <p>Your message was sent.</p>
        </div>
        <p>Thank you for contacting me, I'll get back to you as soon as I can.</p>
      </div>
    </form>
  )
}

export default Form
