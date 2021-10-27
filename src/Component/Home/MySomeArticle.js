import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { myArticle } from "../../Data/Article";
import style from "../../Styles/MySomeArticle.module.scss";
const MySomeBlog = () => {
  const [active, setActive] = useState(2);
  const sliceMyArticle = myArticle.slice(0, 3);
  return (
    <section>
      <div className="container marginTop50">
        <div className={`row paddingBottom50 ${style.row}`}>
          <div className={`col-md-7 ${style.col7}`}>
            <div className={`titleSection`}>
              <h3 className="title">
                <span>Some of</span> My Article
              </h3>
              <div className={`titleSectionBtn ${style.titleSectionBtn}`}>
                <Link to="/blog">All Article</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          {sliceMyArticle.map((data, index) => (
            <div className="col-md-4 col-sm-12 marginBottom30">
              <div data-aos="fade-up">
                <a href={data.link} target="_blank">
                  <div
                    onMouseEnter={() => setActive(index)}
                    className={`${style.mySomeArticleInner} ${
                      active == index ? style.active : ""
                    }`}
                  >
                    <div className={style.mySomeArticleInnerImg}>
                      <img src={data.img} alt="" />
                    </div>
                    <div className={style.mySomeArticleContent}>
                      <h4>{data.title}</h4>
                      <p>{data.description}</p>
                    </div>
                    <div
                      className={`${style.mySomeArticleFooter} d-flex justify-content-between`}
                    >
                      <div
                        className={`d-flex ${style.mySomeArticleFooterLeft}`}
                      >
                        <p>{data.tec1}</p>
                        {data.tec2 && <p>{data.tec2}</p>}
                      </div>
                      <div>
                        <p>{data.date}</p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MySomeBlog;
