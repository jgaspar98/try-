import './App.css';
import './animations.css'
import ScrollAnimation from 'react-animate-on-scroll';


//Sections
import Bedroom from './components/bedroom/index'
import Navbar from './components/Navbar/index'
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ScrollAnimation animateIn="bounceInLeft">
        <div className='content-wrapper'>
          <About/>
          <Bedroom />
        </div>
      </ScrollAnimation>
     
      <div className='contents'>
        <ScrollAnimation  animateIn="fadeIn" animateOut='fadeOut'>
          <Education />
        </ScrollAnimation>
        <ScrollAnimation  animateIn="fadeIn" animateOut='fadeOut'>
          <Projects />
        </ScrollAnimation>
        </div>
    </div>
  );
}

export default App;
