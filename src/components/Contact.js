import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { AiTwotoneMail } from 'react-icons/ai'
function Contact () {

  return (
    <footer>
      <div>
        <h5>Contact</h5>
        <p>Feel free to get in touch through any of the ways listed here!</p>
      </div>
      <div className='footer-icon-wrapper'>
        <div className='flex-center'>
          <FaLinkedin className='footer-icon' />
          <a href='https://www.linkedin.com/in/michael-saltergb/' target='_blank' rel='noreferrer' ><p>LinkedIn</p></a>
        </div>
        <div className='flex-center'>
          <FaGithub className='footer-icon' />
          <a href='https://github.com/Msalter91' target='_blank' rel='noreferrer' ><p>Github</p></a>
        </div>
        <div className='flex-center'>
          <AiTwotoneMail className='footer-icon' />
          <a href='mailto:michaelsaltergb@gmail.com' target='_blank' rel='noreferrer' ><p>Email</p></a>
          
        </div>
      </div>
    </footer>
  )
}

export default Contact