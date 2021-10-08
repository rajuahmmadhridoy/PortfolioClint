import React from 'react';
import { Link } from 'react-router-dom';
import style from '../Styles/SocialBar.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
const SocialBar = () => {
    return (
        <div className={style.SocialBar}>
              <ul>
              <li><a href="https://www.facebook.com/rajuahmmadhrid0y" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a></li>
              <li><a href="https://github.com/rajuahmmadhridoy" target="_blank"><FontAwesomeIcon icon={faGithub} /></a></li>
              <li><a href="https://www.linkedin.com/in/rajuahmmadhridoy-429246203/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a></li>
              <li><a href="https://twitter.com/rajuahmmadhrido" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a></li>
              <li><a href="https://www.instagram.com/rajuahmmad0187/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a></li>
              </ul>
        </div>
    );
};

export default SocialBar;