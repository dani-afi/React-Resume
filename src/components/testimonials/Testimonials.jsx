import React from 'react'
import './Testimonials.css' 
import avatar1 from '../../assets/avatar1.PNG'
import avatar2 from '../../assets/avatar2.PNG'
import avatar3 from '../../assets/avatar3.PNG'
import avatar4 from '../../assets/avatar4.PNG'

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';




const data=[{avatar:avatar1,
  name:'Tina Snow',
  review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur sit modi nostrum fugit illum tempore tempora sed veritatis quidem perspiciatis provident dolorum ipsa id officia suscipit, reprehenderit dolores eius dicta!'
  },
  {avatar: avatar2,
    name:'Tina Snow',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur sit modi nostrum fugit illum tempore tempora sed veritatis quidem perspiciatis provident dolorum ipsa id officia suscipit, reprehenderit dolores eius dicta!'
    },
    {avatar:avatar3,
      name:'Tina Snow',
      review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur sit modi nostrum fugit illum tempore tempora sed veritatis quidem perspiciatis provident dolorum ipsa id officia suscipit, reprehenderit dolores eius dicta!'
      },
      {avatar:avatar4,
        name:'Tina Snow',
        review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur sit modi nostrum fugit illum tempore tempora sed veritatis quidem perspiciatis provident dolorum ipsa id officia suscipit, reprehenderit dolores eius dicta!'
        },
        {avatar:avatar1,
          name:'Tina Snow',
          review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur sit modi nostrum fugit illum tempore tempora sed veritatis quidem perspiciatis provident dolorum ipsa id officia suscipit, reprehenderit dolores eius dicta!'
          }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
         // install Swiper modules
         modules={[Pagination]}
         spaceBetween={40}
         slidesPerView={1}
         pagination={{ clickable: true }}
         >
         
         
         
        {
          data.map(({avatar,name,review},index)=>{
            return (
              <SwiperSlide key={index} className='testimonial'>
          <div className="client__avatar">
            <img src={avatar} />
        </div>
        <h5 className='client__name'>{name}</h5>
            <small className='client__review'>{review}</small>
        </SwiperSlide>
            )
          })
        }
      </Swiper>
      </section >
      
  )
}

export default Testimonials

        
            

        
