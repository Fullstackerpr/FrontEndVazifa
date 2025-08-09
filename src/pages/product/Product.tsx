import React from 'react'
import product from '../../assets/product.jpg'

const Product = () => {
  return (
    <div>
      <img src={product} alt="" className='w-full h-[860px] object-cover'/>
    </div>
  )
}

export default React.memo(Product)