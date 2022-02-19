import react from 'react'
import { FaHamburger } from 'react-icons/fa'

function Nav () {

  const [isShowingHamburger, setIsShowingHamburger] = react.useState(false)

  const handleClick = () => {
    setIsShowingHamburger(!isShowingHamburger)
  }

  return (
    <>
      <nav className="nav">
        <div>
          <a href='#'>Mike Salter </a>
        </div>
        <div className='full-nav'>
          <a href="#bio">Bio </a>
          <a href="#skills">Skills </a>
          <a href="#projects">Projects </a>
          <a href="#interests">Non-tech stuff </a>
        </div>
        <FaHamburger className='mobile-nav' onClick={handleClick} />
      </nav>
      { isShowingHamburger &&      
       <div className='mobile-nav-list'>
         <a onClick={handleClick} href="#bio">Bio </a>
         <a onClick={handleClick} href="#skills">Skills </a>
         <a onClick={handleClick} href="#projects">Projects </a>
         <a onClick={handleClick} href="#interests">Non-tech stuff </a>
       </div>

      }

    </>

  )
}

export default Nav