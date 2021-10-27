import React, { useState } from "react";
import { Link } from "react-router-dom";
import { myProject } from "../../Data/MyProject";
import style from "../../Styles/MySomeProject.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// swiper js slider Code
// import Swiper core and required modules
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
// install Swiper components

import { Swiper, SwiperSlide } from "swiper/react";
// swiper bundle styles
import "swiper/swiper-bundle.css";

// swiper core styles
import "swiper/swiper.scss";
// modules styles
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);
const MySomeProject = () => {
  const [active, setActive] = useState(null);
  const myProjectSplit = myProject.slice(0, 2);
  return (
    <div className="container marginTop40">
      <div className={`row paddingBottom10`}>
        <div className={`col-md-7 ${style.col7}`}>
          <div className={`titleSection `}>
            <h3 className="title">
              <span>Some of</span> My Works
            </h3>
            <div className={`titleSectionBtn ${style.titleSectionBtn}`}>
              <Link to="/works">All Works</Link>
            </div>
          </div>
        </div>
      </div>
      <div className={`row d-flex ${style.row}`}>
        {myProjectSplit.map((data, index) => (
          <div className="col-md-12 marginTop30">
            <div className="row d-flex align-items-center">
              <div className="col-md-7 slider">
                <div className={style.slideBg}>
                  <Swiper
                    breakpoints={{
                      // when window width is >= 320px
                      320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                      },
                      // when window width is >= 480px
                      480: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                      },
                      // when window width is >= 640px
                      640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                      },
                    }}
                    loop={true}
                    autoplay={{
                      delay: 2000,
                      disableOnInteraction: false,
                    }}
                    pagination={{ clickable: true }}
                    // scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log("slide change")}
                  >
                    {data.images.map((imgData) => (
                      <SwiperSlide className={style.bgSlideImg}>
                        <img src={imgData.img} alt="" />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
              <div className="col-md-5 info">
                <div
                  onMouseEnter={() => setActive(index)}
                  className={`${style.mySomeProjectContent} ${
                    active == index ? style.active : ""
                  }`}
                >
                  <h5>{data.title}</h5>
                  <p>{data.description}</p>
                  <ul>
                    {data.items &&
                      data.items.map((data) => <li>{data.item}</li>)}
                  </ul>
                  <div className={style.myProjectLink}>
                    
                      <a href={data.gitLink} target="_blank"> <FontAwesomeIcon icon={data.gitIcon} /></a>
                      <a href={data.liveLink} target="_blank"><FontAwesomeIcon icon={data.linkIcon} /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MySomeProject;
