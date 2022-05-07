import { FaReact, FaHtml5, FaJs, FaCss3Alt, FaSass, FaNodeJs, FaPython, FaGit, FaGithub, FaNpm } from 'react-icons/fa'
import { SiDjango, SiHeroku, SiJquery, SiMagento, SiMariadb, SiMongodb, SiNetlify, SiPhp, SiPostgresql } from 'react-icons/si'
import { IconContext } from 'react-icons'


function Skills () {
  return (
    <IconContext.Provider value={{ color: 'black', size: '9em' }}>
      <div className='skills-wrapper flex-center-col black-background' id='skills'>
        <h3 className='gold'>Technologies I Work With</h3>
        <div className='icon-container flex-center'>
          <div className='icon-box hexagon flex-center-col'>
            <FaReact className='skill-icon' />
            <p>React</p>
          </div>
          <div className='icon-box hexagon flex-center-col'>
            <FaHtml5 className='skill-icon' />
            <p>HTML</p>
          </div>
          <div className='icon-box hexagon flex-center-col'>
            <FaJs className='skill-icon' />
            <p>JavaScript</p>
          </div>
          <div className='icon-box hexagon flex-center-col'>
            <FaCss3Alt className='skill-icon' />
            <p>CSS</p>
          </div>
          <div className='icon-box hexagon flex-center-col'>
            <FaSass className='skill-icon' />
            <p>Sass</p>
          </div>
          <div className='icon-box hexagon flex-center-col'>
            <FaNodeJs className='skill-icon' />
            <p>Node.js</p>
          </div>
          <div className='icon-box hexagon flex-center-col'>
            <SiMongodb className='skill-icon' />
            <p>MongoDB</p>
          </div>
          <div className='icon-box hexagon flex-center-col'>
            <FaPython className='skill-icon' />
            <p>Python</p>
          </div>
          <div className='icon-box hexagon flex-center-col'>
            <SiDjango className='skill-icon' />
            <p>Django</p>
          </div> 
          <div className='icon-box hexagon flex-center-col'>
            <SiPostgresql className='skill-icon' />
            <p>Postgres SQL</p>
          </div>
          <div className='icon-box hexagon flex-center-col'>
            <SiMariadb className='skill-icon' />
            <p>Maria DB</p>
          </div>
          <div className='icon-box hexagon flex-center-col'>
            <FaGit className='skill-icon' />
            <p>Git</p>
          </div>
          <div className='icon-box hexagon flex-center-col'>
            <FaGithub className='skill-icon' />
            <p>GitHub</p>
          </div>
          <div className='icon-box hexagon flex-center-col'>
            <FaNpm className='skill-icon' />
            <p>npm</p>
          </div>
          <div className='icon-box hexagon flex-center-col'>
            <SiHeroku className='skill-icon' />
            <p>Heroku</p>
          </div>
          <div className='icon-box hexagon flex-center-col'>
            <SiNetlify className='skill-icon' />
            <p>Netlify</p>
          </div>
          <div>
          </div>
        </div>
      </div>
      <div className='skills-wrapper flex-center-col black-background' id='skills'>
        <h3>Technologies I&apos;m learning</h3>
        <div className='icon-container flex-center'>
          <div className='icon-box hexagon flex-center-col'>
            <SiPhp className='skill-icon' />
            <p>PHP</p>
          </div>
          <div className='icon-box hexagon flex-center-col'>
            <SiMagento className='skill-icon' />
            <p>Magento</p>
          </div>
          <div className='icon-box hexagon flex-center-col'>
            <SiJquery className='skill-icon' />
            <p>jQuery</p>
          </div>
        </div>
      </div>
    </IconContext.Provider>
    
  )
}

export default Skills

