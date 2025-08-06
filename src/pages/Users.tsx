import React from 'react'
import User from '../components/user/User'

const Users = () => {
  return (
    <div>
        <User/>
    </div>
  )
}

export default React.memo(Users)