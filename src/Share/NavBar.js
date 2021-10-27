import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import SocialBar from "./SocialBar";
import style from "../Styles/NavBar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import mouseclick1 from "../Audio/mouseclick1.wav";
import mouseclick2 from "../Audio/mouseclick2.mp3";
const NavBar = () => {
  const [active, setActive] = useState(false);

  const handleOpen = () => {
    setActive(!active);
    let audio = document.getElementById("audio");
    audio.play();
  };

  // active menu
  const [nav, setNab] = useState(false);

  const changeNavBackground = () => {
    if (window.scrollY >= 80) {
      setNab(true);
    } else {
      setNab(false);
    }
    console.log(window.scrollY);
  };
  window.addEventListener("scroll", changeNavBackground);
  return (
    <div class={`${style.container}  ${nav ? style.activeNav : style.navbarContainer}`}>
      {/* <nav className="d-flex align-items-center justify-content-between"> */}
      <div className="row d-flex align-items-center">
        <div className="col-md-2">
          <div className={style.navLogo}>
            <Link>
              <h3>Raju</h3>
            </Link>
          </div>
        </div>
        <audio id="audio" style={{ display: "none" }} controls autoplay>
          <source src={mouseclick1} type="audio/ogg" />
        </audio>
        <div className="col-md-10">
          <div className={`${style.menu} d-flex justify-content-end`}>
            {/* <button onClick={()=> setActive(true)} className={active ? style.active : ''}><FontAwesomeIcon icon={faBars} /></button> */}
            {
              active ? (
                <button onClick={handleOpen} className={style.nabBarBtnClose}>
                  Close{" "}
                  <span>
                    {" "}
                    <FontAwesomeIcon icon={faTimes} />
                  </span>
                </button>
              ) : (
                <button onClick={handleOpen} className={style.nabBarBtnOpen}>
                  <FontAwesomeIcon icon={faBars} />
                </button>
              ) //
            }
            <ul className={active ? style.active : ""}>
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
                  href="https://drive.google.com/file/d/1c1o7KAjKJy42q-cGBOq7BH6aAXglu8xe/view?usp=sharing"
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
