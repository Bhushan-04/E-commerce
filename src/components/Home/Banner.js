import React from 'react'
import Carousel from 'react-material-ui-carousel'
import './Banner.css';
const Banner = () => {
    const arr = ["./1defb861e409319b.jpg",
    "./1defb861e409319b.jpg" ,
    "./1defb861e409319b.jpg"   ,
    "./1defb861e409319b.jpg"   ,
    "./1defb861e409319b.jpg"      
]
  return (
    <Carousel 
    className='carasousel'
    autoPlay={true}
    animation='slide'
    indicators={false}
    navButtonsAlwaysVisible = {true} 
    cycleNavigation={true}
    navButtonsProps={{style:{
        backgroundColor:"white",
        color :'#494949',
        borderRadius: 0,
        marginTop: -22,
        height:'104px'
    }}}   
    >
        {
            arr.map((image,key)=>{
                return (
                    <>
                    <img src={image} alt='' className='banner_img'
                    />
                    </>
                )
            })
        }
    </Carousel>
  )
}

export default Banner