import AboutMe from './components/AboutMe'
import Header from './components/Header'
import Interests from './components/Interests'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Nav from './components/Nav'
import Contact from './components/Contact'

function App() {
  return (
    <div className='container'>
      <Nav />
      <Header />
      <AboutMe />
      <Skills />
      <Projects />
      <Interests />
      <Contact />
    </div>
  )
}

export default App
