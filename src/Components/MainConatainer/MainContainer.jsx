import React from 'react'
import Intro from './Intro'
import Backers from './Backers'
import About from "./About/About"
const MainContainer = () => {
  return (
      <section id='Main Container' className='Main_Container'>
          <Intro />
          <Backers />
          <About/>
      </section>
  )
}

export default MainContainer