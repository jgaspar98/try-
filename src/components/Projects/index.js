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
              <div id={project.name} className='cards flip-card' key={key} onMouseEnter={()=>handleHover()} onMouseLeave={()=>handleHover()}>
                <div className='flip-card-inner'>
                  <div className='project-img flip-card-front'>
                    <img style={{width:'100%', height:'fit-content'}} src={project.img}/>
                  </div>
                  <div className='project-content flip-card-back'>
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
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Projects