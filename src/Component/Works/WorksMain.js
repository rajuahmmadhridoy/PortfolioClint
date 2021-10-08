import React, { useState } from "react";
import { myProject } from "../../Data/MyProject";
import style from "../../Styles/WorksMain.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

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
const WorksMain = () => {
  const [active,setActive] = useState(2);
  return (
    <section>
      <div className="container marginTop50">
        <div className="row">
          <h3>My Works</h3>
          {myProject.map((data, index) => (
            <div className="col-md-4 col-sm-12">
              <div onMouseEnter={()=>setActive(index)} className={`${style.worksMainInner} ${active == index ? style.active : ''}`}>
                <div className={style.worksMainInnerImg}>
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
                    <SwiperSlide>
                      <img src={data.img} alt="" />
                    </SwiperSlide>
                  </Swiper>
                </div>
                <h5 className="marginTop20">{data.title}</h5>
                <p>{data.description}</p>
                <ul>
                  {data.items && data.items.map((data) => <li>{data.item}</li>)}
                </ul>
                <div className={style.myProjectLink}>
                  <Link>
                    <FontAwesomeIcon icon={data.gitIcon} />
                  </Link>
                  <Link>
                    <FontAwesomeIcon icon={data.linkIcon} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorksMain;
