import React from 'react'
import './Contact.css' 
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'




const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch </h5>
      <h2>Cotact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>daniel@gmail.com</h5>
            <a href='mailto:daniel.afilipoaie@gmail.com' target='_blank'>Send a message</a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>dani</h5>
            <a href='https://m.me/dani' target='_blank'>Send a message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+9999 999 999</h5>
            <a href='https://api=whatsapp.com/send?phone+40749339299' target='_blank'>Send a message</a>
          </article>

        </div>
        {/* End of contact option */}
        <form action=''>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message"  rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact