import React from 'react'
import call from '../../../assets/call.png'

const Call = () => {
  return (
    <div>
      <img src={call} alt="" className='w-full h-[860px] object-cover'/>
    </div>
  )
}

export default React.memo(Call)