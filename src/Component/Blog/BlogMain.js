import React, { useState } from "react";
import { Link } from "react-router-dom";
import { myArticle } from "../../Data/Article";
import style from "../../Styles/BlogMain.module.scss";
const BlogMain = () => {
  const [active, setActive] = useState(2);
  return (
    <section>
      <div className="container">
        <div className="row marginTop40 marginSmTop0">
          <h3 className="marginBottom20">My Blog</h3>
          {myArticle.map((data, index) => (
            <div onMouseEnter={() => setActive(index)} className={`col-md-4 marginTop10 ${
              active == index ? style.active : ""
            }`}>
              <a href={data.link} target="_blank">
                <div
                  
                  className={`${style.myArticleInner}`}
                >
                  <div className={style.myArticleInnerImg}>
                    <img src={data.img} alt="" />
                  </div>
                  <div className={style.myArticleContent}>
                    <h4>{data.title}</h4>
                    <p>{data.description}</p>
                  </div>
                  <div
                    className={`${style.myArticleFooter} d-flex justify-content-between`}
                  >
                    <div className={`d-flex ${style.myArticleFooterLeft}`}>
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogMain;
