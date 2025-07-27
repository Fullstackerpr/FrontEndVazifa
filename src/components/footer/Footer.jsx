import React from 'react';
import logoo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <footer>
        <div className="container h-[275px] mt-[120px] flex justify-between">
            <div className=''>
                <img src={logoo} alt="" />
                <p>Powered by <span className='underline'>Webflow.</span></p>
            </div>
            <div>
                <h5>Password</h5>
                <p>404</p>
            </div>
            <div>
                <p>Licenses</p>
                <p>Style Guide</p>
                <p>Changelog</p>
            </div>
            <div>
                <p>Twitter</p>
                <p>Instagram</p>
            </div>
        </div>
        
    </footer>
  )
}

export default Footer;