import { sliderData } from '../assets/sliderData'
import React from 'react'

import { HiArrowCircleRight, HiArrowCircleLeft } from 'react-icons/hi'
function Projects () {

  const [currentSlide, setCurrentSlide] = React.useState(0)

  const slideLength = sliderData.length - 1

  const previousSlide = () => {
    currentSlide ? setCurrentSlide(currentSlide - 1) : setCurrentSlide(3)    
  }

  const nextSlide = () => {
    currentSlide !== slideLength ? setCurrentSlide(currentSlide + 1) : setCurrentSlide(0)    
  }

  const moveSlide = (e) => {
    setCurrentSlide(parseInt(e.target.value))
  }

  console.log(sliderData)
  return (
    <section className='slideShow flex-center-col' id='projects'>
      <h3>My Projects</h3>
      {sliderData.map((slide, index) => {
        return (
          <>
            <div className={index === currentSlide ? 'slide-active project-border' : 'slide'} key={slide.name}>
              {index === currentSlide && <a href={slide.url} target='_blank' rel="noreferrer"><img className='slider-image' src={slide.imageUrl}></img></a>}
            </div>
          </>
        )
      })}
      <div className='black-border slide-changer'>
        <HiArrowCircleLeft className='left-arrow' onClick={previousSlide} />
        <input className='input' type='radio' name='slide' value='0' checked={!currentSlide} onClick={moveSlide}></input>
        <input type='radio' name='slide' value='1' checked={currentSlide === 1}  onClick={moveSlide}></input>
        <input type='radio' name='slide' value='2' checked={currentSlide === 2} onClick={moveSlide}></input>
        <input type='radio' name='slide' value='3' checked={currentSlide === 3} onClick={moveSlide}></input>
        <HiArrowCircleRight className='right-arrow' onClick={nextSlide}/>
      </div>
      <div className='flex-center-col project-info'>
        <a href={sliderData[currentSlide].url} target='_blank' rel="noreferrer"><h5>{sliderData[currentSlide].name}</h5></a>
        <p>
          {sliderData[currentSlide].info}
        </p>
      </div>
    </section>
  )
}

export default Projects