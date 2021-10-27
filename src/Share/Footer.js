import React from "react";
import { Link } from "react-router-dom";
import style from "../Styles/Footer.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar ,faShareAlt} from '@fortawesome/free-solid-svg-icons'
import { faFacebook,faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
  return (
    <footer>
      <div className={style.socialLinks}>
        <h3>Social Links</h3>
      <ul>
              <li><a href="https://www.facebook.com/rajuahmmadhrid0y" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a></li>
              <li><a href="https://github.com/rajuahmmadhridoy" target="_blank"><FontAwesomeIcon icon={faGithub} /></a></li>
              <li><a href="https://www.linkedin.com/in/rajuahmmadhridoy-429246203/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a></li>
              <li><a href="https://twitter.com/rajuahmmadhrido" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a></li>
              <li><a href="https://www.instagram.com/rajuahmmad0187/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a></li>
              </ul>
      </div>
      <div className={`text-center ${style.footerInner} marginTop30`}>
        <p className={style.footerTitle}>
          Designed & Built by <Link>Raju Ahmmad Hridoy</Link>
        </p>
        <div className={style.footerOthers}>
          <p>
            <span><FontAwesomeIcon icon={faStar} /> Star</span>
            <span> & </span>
            <span>Froks <FontAwesomeIcon icon={faShareAlt} /></span>
            <a href="https://github.com/rajuahmmadhridoy" target="_blank">By Me</a>
          </p>
          <p>Copyright © {new Date().getFullYear()} | rajuahmmadhridoy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
