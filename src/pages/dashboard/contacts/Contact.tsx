import React from 'react'
import contact from '../../../assets/contact.png'

const Contact = () => {
  return (
    <div>
      <img src={contact} alt="" className='w-full h-[860px] object-cover'/>
    </div>
  )
}

export default React.memo(Contact)