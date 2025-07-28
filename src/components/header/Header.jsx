import React from 'react';
import logoo from '../../assets/logoo.png'

const Header = () => {
  return (
    <header>
      <div className="container flex items-center justify-between h-[100px]">
        <img src={logoo} alt="" className='w-[170px] h-[50px] border-none'/>
        <ul className='flex gap-15'>
          <li>
            <span><a href="#"></a>Home</span>
          </li>
           <li>
            <span><a href="#"></a>Products</span>
          </li>
           <li>
            <span><a href="#"></a>About</span>
          </li>
        </ul>
        <button className='w-[130px] h-[45px] bg-[#215c63] text-white rounded-[10px] hover:bg-blue-600 cursor-pointer'>Get Started</button>
      </div>
    </header>
  )
}

export default Header;