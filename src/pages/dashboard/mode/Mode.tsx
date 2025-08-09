import React from 'react'
import mode from '../../../assets/mode.png'

const Mode = () => {
  return (
    <div>
      <img src={mode} alt="" className='w-full h-[860px] object-cover'/>
    </div>
  )
}

export default React.memo(Mode)