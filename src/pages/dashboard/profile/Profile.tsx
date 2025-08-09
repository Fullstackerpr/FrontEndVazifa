import React from 'react'
import profile from '../../../assets/profile.png'

const Profile = () => {
  return (
    <div>
      <img src={profile} alt="" className='w-full h-[860px] object-cover'/>
    </div>
  )
}

export default React.memo(Profile)