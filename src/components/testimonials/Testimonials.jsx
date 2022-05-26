import React from 'react'
import './Testimonials.css' 
import avatar1 from '../../assets/avatar1.PNG'
import avatar2 from '../../assets/avatar2.PNG'
import avatar3 from '../../assets/avatar3.PNG'
import avatar4 from '../../assets/avatar4.PNG'



const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <div className="container testimonials__container">
        <article className='testimonial'>
          <div className="client__avatar">
            <img src={avatar1} alt='Avatar one'/>
            <h5 className='client__name'>Ernest Achiver</h5>
            <small className='client__review'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea vero ducimus perferendis modi quaerat! Odio cupiditate dicta ea aspernatur molestiae?</small>

          </div>
        </article>
        <article className='testimonial'>
          <div className="client__avatar">
            <img src={avatar2} alt='Avatar one'/>
            <h5 className='client__name'>Ernest Achiver</h5>
            <small className='client__review'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea vero ducimus perferendis modi quaerat! Odio cupiditate dicta ea aspernatur molestiae?</small>

          </div>
        </article>
        <article className='testimonial'>
          <div className="client__avatar">
            <img src={avatar3} alt='Avatar one'/>
            <h5 className='client__name'>Ernest Achiver</h5>
            <small className='client__review'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea vero ducimus perferendis modi quaerat! Odio cupiditate dicta ea aspernatur molestiae?</small>
            
            <article className='testimonial'>
          <div className="client__avatar">
            <img src={avatar4} alt='Avatar one'/>
            <h5 className='client__name'>Ernest Achiver</h5>
            <small className='client__review'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea vero ducimus perferendis modi quaerat! Odio cupiditate dicta ea aspernatur molestiae?</small>

          </div>
        </article>    
          </div>
        </article>
      </div>
      </section >
  )
}

export default Testimonials
