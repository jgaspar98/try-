import React , {useState} from 'react';
import projectsData from './projectsData.js';
import './projects.css';



function Projects() {

  const [open, setOpen] = useState(false)

  const handleHover = () => { 
   setOpen(!open)
  }

  return (
    <div className='projects_wrapper'>
      <div>
            <span className='code code-text'>{'<h2>'}</span>
                <h2 id='#grad1' className='header font-text'>Projects</h2>
            <span className='code code-text'>{'</h2>'}</span> 
      </div>
      <div className='projects_card_wrappers'>
        {
          projectsData.map((project, key) => {
            return (
              <div id={project.name} className='cards' key={key} onMouseEnter={()=>handleHover()} onMouseLeave={()=>handleHover()}>
                <div style={open ? {opacity:'0'} : {opacity:'1'}}  className='project-img'>
                  <img src={project.img}/>
                </div>
                <div style={open ? {opacity:'1'} : {opacity:'0'}}   className='project-content'>
                  <div className='header-cards'>
                    <h4 id='#grad1' className='header-4 font-text'>{project.name}</h4>
                  </div>
                  <p className='project-description text font-text'>
                    {project.description}
                  </p>
                  <p className='project-stack text font-text'>
                    {'>_'} Stack:  {project.stack}
                  </p>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Projects