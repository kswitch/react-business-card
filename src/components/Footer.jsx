import React from 'react'
import githubIcon from './../images/icons/github-icon.png'
import instagramIcon from './../images/icons/instagram-icon.png'
import facebookIcon from './../images/icons/facebook-icon.png'
import twitterIcon from './../images/icons/twitter-icon.png'

export default function Footer() {
  return (
    <footer class="footer">
      <a href="https://twitter.com/k__switch" target='blank'><img class="icon" src={twitterIcon} /></a>
      <a href="https://facebook.com/kswitch" target='blank'><img class="icon" src={facebookIcon} /></a>
      <a href="https://instagram.com/k__switch" target='blank'><img class="icon" src={instagramIcon} /></a>
      <a href="https://github.com/kswitch" target='blank'><img class="icon" src={githubIcon} /></a>
    </footer>
  )
}