import React from 'react';
import logoo from '../../assets/logo.svg';
import hero from '../../assets/hero.png'

const Header = () => {
  return (
    <header className=''>
        <div className="container">
            <div className='h-[25px] mt-[40px] flex justify-between'>
                <img src={logoo} alt="" className='w-[65px] h-[26px]'/>
                <ul className='flex size-[17px]'>
                    <li>
                        <span><a href="#">PROJECTS</a></span>
                    </li>
                    <li className='pl-[20px]'>
                        <span><a href="#">INFO</a></span>
                    </li>
                </ul>
            </div>
            <div className='mt-[40px]'>
                <img src={hero} alt="" className='w-[1320px] h-[806px]'/>
            </div>
        </div>
    </header>
  )
}

export default Header