import React from 'react'
import './navbar.css'


//Import Items
import menuItems from './menuitems'

 
function Navbar() {

  function progressBarScroll() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop,
        height = document.documentElement.scrollHeight - document.documentElement.clientHeight,
        scrolled = (winScroll / height) * 100;
    document.getElementById("progressBar").style.width = scrolled + "%";
  }
  
  window.onscroll = function () {
    progressBarScroll();
  };

  return (
    <div className='navbar'>
      <div className='navbar_wrapper'>
        <div className='logo-menuItems' style={{display:'flex'}}>
          <div class='logo-wrapper'>
            <a>
              <h1 className=' rainbow rainbow_text_animated logo code-text'>
                jgaspar 
              </h1>
            </a>
            <a style={{animationDuration:'30s'}} className='swing link' href='https://github.com/jgaspar98' target={'_blank'} >
                <span className=' rainbow rainbow_text_animated code code-text'>{`(-.-)'`}</span>
            </a>  
          </div>
            <ul className='nav_items'>
                  {
                      menuItems.map((items, key) => {
                          return (
                            <a className='link' href='#'>
                              <span className='code code-text'>{'<li>'}</span>  
                                <li class="font-text  hover-underline-animation"> {items.name} </li> 
                              <span className='code code-text'>{'</li>'}</span>  
                            </a>
                          )
                      })
                  }
        </ul>
        </div>
        <div class="progress-container">
          <div class="progress-bar" id="progressBar"></div>
        </div>
      </div>
    </div>
  )
}

export default Navbar