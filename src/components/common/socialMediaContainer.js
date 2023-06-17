import React from 'react'
import {FiFacebook,FiTwitter, FiLinkedin,FiInstagram} from "react-icons/fi"
// import {BiLogoLinkedin} from "react-icons/bi"

const SocialMediaContainer = () => {
  return (
    <div className='social-container'>
    <span className='socialMediaBrandContainer'>
      <FiInstagram size={25} />
    </span>
    <span className='socialMediaBrandContainer'>
      <FiFacebook size={25} />
    </span>
    <span className='socialMediaBrandContainer'>
      <FiTwitter size={25} />
    </span>
    <span className='socialMediaBrandContainer'>
      <FiLinkedin size={25} />
    </span>
    </div>
  )

}

export default SocialMediaContainer
