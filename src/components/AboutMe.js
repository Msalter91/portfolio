import React from 'react'


function AboutMe() {

  const [bioState, setBioState] = React.useState('3')

  function changeBioState (e) {
    setBioState(e.target.value)
  }
  
  return (
    <section id='bio'>
      <div className="flex-center-col">
        <h3 className='about-me-title'>How much would you like to know about me?</h3>
        <div className='about-me-button-wrapper'>
          <button className='bio-button' value={1} onClick={changeBioState}>Nothing</button>
          <button className='bio-button' value={2} onClick={changeBioState}>A little bit</button>
          <button className='bio-button' value={3} onClick={changeBioState}>The basics</button>
          <button className='bio-button' value={4} onClick={changeBioState}>Quite a bit</button>
          <button className='bio-button' value={5} onClick={changeBioState}>Life story, please</button>
        </div>
        <div className='bio-wrapper'>
          {/* 1 */}
          {bioState === '1' && <p>I&apos;m doing my best to make beautiful code.</p>}
          {/* 2 */}
          {bioState === '2' && <p>I&apos;m a recent graduate of the software engineering immersive course at General Assembly. Currently working with PHP and e-commerce.</p> }
          {/* 3 */}
          {bioState === '3' && <p>I&apos;m a recent graduate of the software engineering immersive course at General Assembly. I&apos;ve recently landed my first role working in e-commerse using PHP and Magento.</p> } 
          {/* 4 */}
          {bioState === '4' && <p>A love of problem solving led me to self-teaching basic code. As this grew, it spurred me into studying software engineering full time with General Assembly. I&apos;m a passionate advocate for life-long learning, adapting to new challenges and being able to work empathetically across cultures and experiences. I am a skilled communicator and have experience leading complex projects with multiple stakeholders. I&apos;ve just landed my first role working in e-commerse using PHP and Magento and I&apos;m looking forward to learning more and growing.</p> }
          {/* 5 */}
          {bioState === '5' && <p>
            I&apos;ve worked in international relations, helping to create and nurture programmes that fostered mutual understanding as well as elite sport. A love of problem solving led me to self-teaching basic code. As this grew, it spurred me into studying software engineering full time with General Assembly. I&apos;m a passionate advocate for life-long learning, adapting to new challenges and being able to work empathetically across cultures and experiences. I am a skilled communicator and have experience leading complex projects with multiple stakeholders.  I&apos;ve just landed my first role working in e-commerse using PHP and Magento and I&apos;m looking forward to learning more and growing.
          </p> }
        </div>
      </div>
    </section>
  )
}

export default AboutMe