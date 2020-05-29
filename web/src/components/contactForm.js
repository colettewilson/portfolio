import React from "react"

import styles from "./contactForm.module.scss"

const ContactForm = () => {
  return (
    <form className={styles.contactForm} method="post" data-netlify="true" netlify-honeypot="bot-field">
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
      <div className={styles.formButton}>
        <button type="submit">Send</button>
      </div>
    </form>
  )
}

export default ContactForm
