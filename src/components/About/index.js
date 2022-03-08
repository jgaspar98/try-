import React from 'react'

import './about.css'

function About() {
  return (
      <div className='about_section'>
        <span className='code code-text'>{'<h2>'}</span>
            <h2 id='#grad1' className='header font-text'>ABOUT ME</h2>
        <span className='code code-text'>{'</h2>'}</span>
        <p className='text font-text'>
        <span className='code code-text'>{'<p>'}</span>  
          Hello There! <br />
          My name is João Gaspar. I am a full-stack Web Developer with a background in tourism.
        <br /> Unfortunately graduated at the beginning of the Covid-19 pandemic, getting a job in the tourism area was hard. So in the lockdown, I found a new passion that was programming and decided to invest in a Bootcamp at Ironhack Lisbon.
        <span className='code code-text'>{'</p>'}</span>
        </p>
      
      </div>
  )
}

export default About