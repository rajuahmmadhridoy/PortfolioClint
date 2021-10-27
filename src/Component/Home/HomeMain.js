import React, { useState } from "react";
import { Link } from "react-router-dom";
import SocialBar from "../../Share/SocialBar";
import style from "../../Styles/HomeMain.module.scss";
import personalImg from "../../Images/personalImg.JPG";
import Particles from "react-particles-js";
import Typical from "react-typical";
const HomeMain = () => {
  const [active, setActive] = useState(null);
  return (
    <section className={`${style.homeMain} marginTop40 marginSmTop0`}>
      <Particles
        className={style.particles}
        params={{
          particles: {
            number: {
              value: 160,
              density: {
                enable: false,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                speed: 4,
                size_min: 0.3,
              },
            },
            line_linked: {
              enable: false,
            },
            move: {
              random: true,
              speed: 1,
              direction: "top",
              out_mode: "out",
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "bubble",
              },
              onclick: {
                enable: true,
                mode: "repulse",
              },
            },
            modes: {
              bubble: {
                distance: 250,
                duration: 2,
                size: 0,
                opacity: 0,
              },
              repulse: {
                distance: 400,
                duration: 4,
              },
            },
          },
        }}
      />
      <div className="container">
        <div className={`row`}>
          <div className={`col-md-7 col-sm-12 ${style.order}`}>
            <div className={style.homeMainContent}>
              <div className={style.homeMainTitle}>
                <p>Hello , I'm</p>
                <h2>Raju Ahmmad Hridoy</h2>
                <Typical className={style.typical}
                  steps={["Front End Developer", 2000, "React Developer", 2000,"Programmer", 2000]}
                  loop={Infinity}
                  wrapper="p"
                />
              </div>
              <ul>
                <li>
                  <p>Web Developer</p>
                </li>
                <li>
                  <p>Programmer</p>
                </li>
              </ul>
              <p className={`${style.homeMainContentDescription} marginTop55`}>
                A self-motivated and enthusiastic web developer with a deep
                interest in JavaScript. To work in the Software industry with
                modern web technologies of different local & multinational
                Software/ IT agencies of Bangladesh and grow rapidly with
                increasing responsibilities.
              </p>
              <div className={`${style.homeMainBtn} marginTop40`}>
                <Link to="/about">About Me</Link>
                <Link to="/contact">Get touch in</Link>
              </div>
            </div>
          </div>
          <div className={`col-md-5 col-sm-12 d-flex justify-content-center`}>
            <div className={` ${style.order2}`}>
              <div className={style.homeMainImg}>
                <img
                  onMouseEnter={() => setActive(1)}
                  className={` ${active == 1 ? style.active : ""} `}
                  style={{ height: "400px" }}
                  src={personalImg}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeMain;
