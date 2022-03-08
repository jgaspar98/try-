import React from 'react'
import './education.css'

//Import Data
import contentsEducation from './contentsEducation';

// Import Model
import Rengoku from '../rengoku';

function Education() {
  return (
    <div className='education_wrapper'>
        <div>
            <span className='code code-text'>{'<h2>'}</span>
                <h2 id='#grad1' className='header font-text'>SOME MORE ABOUT ME</h2>
            <span className='code code-text'>{'</h2>'}</span> 
      </div>
      
      
        <div className='contents_wrapper'>
          <div className='contents-text'>
          {
            contentsEducation.map((content, key) => {
              return (
                <>
                  <div>
                    <span className='code code-text'>{'<h2>'}</span>
                        <h2 id='#grad1' className='header font-text'>{content.h2}</h2>
                    <span className='code code-text'>{'</h2>'}</span> 
                  </div>
                  <div>
                    <span className='code code-text'>{'<h3>'}</span>
                        <h3 id='#grad1' className='header-3 font-text'>{content.h3}</h3>
                    <span className='code code-text'>{'</h3>'}</span> 
                </div>
                <div>
                    <span className='code code-text'>{'<h4>'}</span>
                        <h4 id='#grad1' className='header-4 font-text'>{content.duration}</h4>
                    <span className='code code-text'>{'</h4>'}</span> 
                </div>
                <div style={{display:'flex', alignItems:'flex-start'}}>
                  <img style={{width:'100px', height:'100px'}} src='/logo/ironhack-logo.png'/>
                  <p className='text font-text'>
                      <span className='code code-text'>{'<p>'}</span>  
                        Ironhack is an immersive Bootcamp with locations in Madrid, Barcelona, Miami and Lisbon offering.
                      <br />
                        9-week courses in Full Stack Web Development. (400+ hours):
                      <br />
                        In the Bootcamp students learn:
                      <span className='code code-text'>{'</p>'}</span>
                      <br /> 
                    <span className='code code-text'>{'<ul>'}</span>
                    <ul>
                      <span className='code code-text'>{'<li>'}</span>
                        <li className='contents-li'>{content.back}</li>
                        <li className='contents-li'>{content.front}</li>
                        <li className='contents-li'>{content.full}</li>
                        <li className='contents-li'>{content.tools}</li>
                        <li className='contents-li'>{content.deploy}</li>
                        <li className='contents-li'>{content.other}</li>
                      <span className='code code-text'>{'</li>'}</span>
                    </ul>
                    <span className='code code-text'>{'</ul>'}</span>
                  </p>
                </div>
                </>
              )
            })
          }
          </div>
        
          <div className='contents-text' >
          <div>
              <span className='code code-text'>{'<h2>'}</span>
                  <h2 id='#grad1' className='header font-text'>FREE TIME</h2>
              <span className='code code-text'>{'</h2>'}</span> 
            </div>
            <div>
              <span className='code code-text'>{'<h3>'}</span>
                  <h3 id='#grad1' className='header-3 font-text'>In my free time I like</h3>
              <span className='code code-text'>{'</h3>'}</span> 
            </div>
            <p className='text font-text'>
              <span className='code code-text'>{'<p>'}</span>
                In my free time I like to play the guitar, watch movies & series, watch anime, play games and also go outside and take some photographies. 
              <span className='code code-text'>{'</p>'}</span>
            </p>
          <Rengoku/>
          </div>
        </div>

    </div>
  )
}

export default Education;