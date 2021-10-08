import React from "react";
import { Link } from "react-router-dom";
import style from "../Styles/Footer.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar ,faShareAlt} from '@fortawesome/free-solid-svg-icons'
const Footer = () => {
  return (
    <footer>
      <div className={`text-center ${style.footerInner} marginTop50`}>
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
