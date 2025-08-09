import React from 'react'
import setting from '../../../assets/setting.png'

const Setting = () => {
  return (
    <div>
      <img src={setting} alt="" className='w-full h-[860px] object-cover'/>
    </div>
  )
}

export default React.memo(Setting)