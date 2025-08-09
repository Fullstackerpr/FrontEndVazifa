import React from 'react'
import wallet from '../../../assets/wallet.png'

const Wallet = () => {
  return (
    <div>
      <img src={wallet} alt="" className='w-full h-[860px] object-cover'/>
    </div>
  )
}

export default React.memo(Wallet)