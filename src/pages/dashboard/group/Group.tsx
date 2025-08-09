import React from 'react'
import group from '../../../assets/group.jpg'

const Group = () => {
  return (
    <div>
      <img src={group} alt="" className='w-full h-[860px] object-cover'/>
    </div>
  )
}

export default React.memo(Group)