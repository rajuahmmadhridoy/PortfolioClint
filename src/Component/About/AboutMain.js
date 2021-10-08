import React from "react";
import { Link } from "react-router-dom";
import { about } from "../../Data/About";
import personalImg from "../../Images/personalImg.JPG";
import style from "../../Styles/AboutMain.module.scss";
const AboutMain = () => {
  return (
    <div>
      <div className="container marginTop50">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className={style.aboutMainInner}>
              <div className={style.aboutMainImg}>
                <img style={{ height: "400px" }} src={personalImg} alt="" />
              </div>
              <div className={style.homeMainTitle}>
                <h2 className="marginTop30">
                  <sapn>I'm</sapn> Raju Ahmmad Hridoy
                </h2>
              </div>
              <p className={`${style.homeMainContentDescription} marginTop30`}>
                A self-motivated and enthusiastic web developer with a deep
                interest in JavaScript. To work in the Software industry with
                modern web technologies of different local & multinational
                Software/ IT agencies of Bangladesh and grow rapidly with
                increasing responsibilities.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 ">
            {about.map((data, index) => (
              <div className={style.aboutMainSkilles}>
                <h4 className={style.aboutMainSkillesTitle}>{data.title}</h4>
                <div className={style.aboutMainSkillesItems}>
                  {data.item.map((data) => (
                    <span>{data.skilles}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMain;
