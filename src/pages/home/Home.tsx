import React from 'react'
import home from '../../assets/home.jpg'

const Home = () => {
  return (
    <div>
      <img src={home} alt="" className='w-full h-[860px] object-cover'/>
    </div>
  )
}

export default React.memo(Home)