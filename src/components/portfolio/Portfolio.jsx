import React from 'react'
import './Portfolio.css' 
import port1 from '../../assets/port1.PNG'
import port2 from '../../assets/port2.PNG'
import port3 from '../../assets/port3.PNG'
import port4 from '../../assets/port4.PNG'
import port5 from '../../assets/port5.PNG'
import port6 from '../../assets/port6.PNG'

const data=[
  {
  id:1,
  image:port1,
  title:'Crypto Currency Dashboard & Financial Visualization',
  github:'http://github.com',
  demo:'http://dribble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
},
{
  id:2,
  image:port2,
  title:'Crypto Currency Dashboard & Financial Visualization',
  github:'http://github.com',
  demo:'http://dribble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
},
{
  id:3,
  image:port3,
  title:'Crypto Currency Dashboard & Financial Visualization',
  github:'http://github.com',
  demo:'http://dribble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
},
{
  id:4,
  image:port4,
  title:'Crypto Currency Dashboard & Financial Visualization',
  github:'http://github.com',
  demo:'http://dribble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
},
{
  id:5,
  image:port5,
  title:'Crypto Currency Dashboard & Financial Visualization',
  github:'http://github.com',
  demo:'http://dribble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
},
{
  id:6,
  image:port6,
  title:'Crypto Currency Dashboard & Financial Visualization',
  github:'http://github.com',
  demo:'http://dribble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
}
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        {
          data.map(({id,image,title,github,demo})=>{
            return (
              <article key={id} className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={image} alt={title}/>

          </div>
          <h3>{title}</h3>
          <div className='portfolio__item-cta'>
          <a href={github} className='btn' target='_blank'>Github</a>
          <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        
        </article>
            )
          })
        }

    
      </div>
    </section>
  )
}

export default Portfolio
