import React from 'react'
import channel from '../../../assets/channel.jpg'

const Channel = () => {
  return (
    <div>
      <img src={channel} alt="" className='w-full h-[860px] object-cover'/>
    </div>
  )
}

export default React.memo(Channel)