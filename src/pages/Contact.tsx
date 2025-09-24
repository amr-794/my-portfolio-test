import React, {useState} from 'react'

export default function Contact(){
  const [sent,setSent] = useState(false)
  return (
    <section id="contact" className="section">
      <h2>Contact</h2>
      <p className="lead">Want to work together? Send a message.</p>
      {!sent ? (
        <form className="contact-form" onSubmit={(e)=>{e.preventDefault(); setSent(true)}}>
          <input className="input" placeholder="Your name" required />
          <input className="input" placeholder="Your email" type="email" required />
          <textarea className="input" placeholder="Message" rows={5} required />
          <button className="btn" type="submit">Send message</button>
        </form>
      ) : (
        <div className="card">Thanks — I’ll get back to you soon.</div>
      )}
    </section>
  )
}
