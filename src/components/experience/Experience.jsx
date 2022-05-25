import React from 'react'
import './Experience.css' 
import {BsPatchCheckFill} from 'react-icons/bs'




const Experience = () => {
  return (
    <section id='experience'>
      <h5>What skilla I have</h5>
      <h2>My experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill/>
              <h4>Html</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill/>
              <h4>Css</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill/>
              <h4>JavaScript</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill/>
              <h4>React</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            
          </div>
        </div>
        <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill/>
              <h4>Html</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill/>
              <h4>Css</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill/>
              <h4>JavaScript</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill/>
              <h4>React</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            
          </div>
        </div>
      </div>
      
      </section>
  )
}

export default Experience
