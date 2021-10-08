import React from "react";
import {useState} from"react"
import { Link } from "react-router-dom";
import SocialBar from "./SocialBar";
import style from "../Styles/NavBar.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars} from '@fortawesome/free-solid-svg-icons'
const NavBar = () => {
  const [active, setActive] = useState(0);
  console.log(active,1)
  return (
    <div class={style.container}>
      {/* <nav className="d-flex align-items-center justify-content-between"> */}
      <div className="row d-flex align-items-center">
        <div className="col-md-2">
          <div className={`navLogo `}>
            <Link>
              <h3>Raju</h3>
            </Link>
          </div>
        </div>
        <div className="col-md-10">
          <div className={`${style.menu} d-flex justify-content-end`}>
           <span onClick={()=> setActive(22)}><FontAwesomeIcon icon={faBars} /></span>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/works">Works</Link>
              </li>
              <li>
                <Link to="/blog">Blogs</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <a
                  href="https://docs.google.com/document/d/1G-LtTd5i1fJcTP6Kd43LobkmqikNu5b8Cgo2Kh6282E/edit"
                  target="_blank"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* </nav> */}
    </div>
  );
};

export default NavBar;
