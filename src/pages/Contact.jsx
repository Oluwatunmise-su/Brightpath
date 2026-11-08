import { useState } from 'react'

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="page">
      <p className="eyebrow">SAY HELLO</p>
      <h1>Contact Us</h1>
      <p className="page-lead">Have a question? Send us a message using the form below.</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Your name
          <input type="text" name="name" placeholder="Enter your name" required />
        </label>
        <label>
          Email address
          <input type="email" name="email" placeholder="you@example.com" required />
        </label>
        <label>
          Your message
          <textarea name="message" rows="5" placeholder="How can we help?" required />
        </label>
        <button className="button" type="submit">Send message</button>
        {submitted && <p className="success-message">Thank you! Your form has been submitted.</p>}
      </form>
      <p className="form-note">New Horizons Project.</p>
    </section>
  )
}

export default Contact