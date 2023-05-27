import React from 'react'
import Banner from './Banner'
import './Maincomp.css'
import Slide from './Slide'
const Maincomp = () => {
  return (
    <div className='home_section'>
        <div className='banner_part'>
            <Banner />
        </div>
        <div className='Slide_part'>
          <Slide title="Deal of the Day" />
        </div>
       <Slide title="Today's Deal"/>
    </div>  
  )
}

export default Maincomp