import React from 'react'
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <div className='footer' id = 'footer'>
    <div className='footer-content'>
      <div className='footer-content-left'>
        <img src={assets.logo} alt=''/>
        <p>Indulge in culinary delights delivered to your door. From local favorites to exotic dishes, enjoy fast, fresh, and convenient meals with just a tap. Satisfy your cravings effortlessly anytime, anywhere.
        </p>
        <div className='footer-social-icons'>
          <img src={assets.facebook_icon} alt=''/>
          <img src={assets.twitter_icon}alt=''/>
          <img src={assets.linkedin_icon}alt=''/>
        </div>
      </div>
      <div className='footer-content-center'>
         <h2>company</h2>
         <ul>
          <li>home</li>
          <li>about us</li>
          <li>delivery</li>
          <li>privacy policy</li>
         </ul>
      </div>
      <div className='footer-content-right'>
      <h2>get in touch</h2>
      <ul>
        <li>+1-342-5255</li>
        <li>contact@tomato.com</li>
      </ul>

      </div>
    </div>
      <hr/>
    <p className='footer-copyright'>Copyright 2024 @tomoto.com - all right reserved</p>
    </div>
  )
}

export default Footer
