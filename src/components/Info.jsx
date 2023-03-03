import React from 'react'
import emailIcon from './../images/icons/email-icon.png'
import linkedinIcon from './../images/icons/linkedin-icon.png'
import profilePicture from './../images/photos/profile-photo.jpg'

export default function Info() {
  return (
    <>
      <img class="photo" src={profilePicture} alt="Profile Photo"/>
      <h2 class="name">Kingsley Osuagwu-Chidiadi</h2>
      <p class="occupation">Frontend Developer</p>
      <a href="https://www.github.com/kswitch" class="website"><p>github.com/kswitch</p></a>
      <div className='btns'>
        <a href="mailto: chidiadi.kingsley@gmail.com" target='blank'><button className="email-btn"><img className="email-icon" src={emailIcon} />Email</button></a>
        <a href="https://www.linkedin.com/in/kswitch/" target='blank'><button className="linkedin-btn"><img className="linkedin-icon" src={linkedinIcon} />LinkedIn</button></a>
      </div>
    </>
  )
}