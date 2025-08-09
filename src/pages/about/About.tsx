import React from 'react'
import about from '../../assets/about.jpg'

const About = () => {
  return (
    <div>
      <img src={about} alt="" className='w-full h-[860px] object-cover'/>
    </div>
  )
}

export default React.memo(About)