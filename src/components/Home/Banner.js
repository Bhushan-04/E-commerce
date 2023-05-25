import React from 'react'
import Carousel from 'react-material-ui-carousel'
import './Banner.css';
const Banner = () => {
    const arr = ["./domino-164_6wVEHfI-unsplash.jpg",
    "./paul-volkmer-updW-QUccFE-unsplash.jpg",
    "./martin-katler-Y4fKN-RlMV4-unsplash.jpg",
    "./paul-gaudriault-a-QH9MAAVNI-unsplash.jpg",
    "./last.jpg"    
]
  return (
    <Carousel>
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