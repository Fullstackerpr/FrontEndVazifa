import React from 'react'
import save from '../../../assets/save.jpeg'

const Message = () => {
  return (
    <div>
      <img src={save} alt="" className='w-full h-[860px] object-cover'/>
    </div>
  )
}

export default React.memo(Message)