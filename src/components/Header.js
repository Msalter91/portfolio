import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { AiTwotoneMail } from 'react-icons/ai'

function Header () {
  return (
    <section className="header" id="header">
      <div className="flex-center-col half-width header-left">
        <div className='title'><h1>MIKE SALTER</h1></div>
        <div className='subtitles'><h2>developer</h2>
          <a href='https://github.com/Msalter91' target='_blank' rel='noreferrer' ><FaGithub className='header-icon' /></a>
          <a href='https://www.linkedin.com/in/michael-saltergb/' target='_blank' rel='noreferrer' ><FaLinkedin className='header-icon' /></a>
          <a href='mailto:michaelsaltergb@gmail.com'><AiTwotoneMail className='header-icon' /></a>
        </div>
      </div>
      <div className="flex-center-col half-width full-height mike-image">
        <div className="circle">

        </div>
      </div>
    </section>
  )
}

export default Header