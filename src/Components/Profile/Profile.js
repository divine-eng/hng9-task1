import React from 'react'
import './Profile.css'
import Image from '../../Images/myProfile.jpg';
import Share from '../../Images/share.png';
import Mobile from '../../Images/mobileShare.png';

 function Profile() {
  return (
    <div className='pro'>
        <img className='share' src={Share} />
        <img className='mobile-share' src={Mobile} />
        <img id='profile_img' src={Image} />
        <h2 id='twitter'>@divineInyang1</h2>
        {/* <h2 id='slack'>DivineInyang-web</h2> */}
    </div>
  )
}

export default Profile