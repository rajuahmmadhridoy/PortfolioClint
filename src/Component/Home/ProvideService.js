import React, { useState } from "react";
import style from "../../Styles/ProvideService.module.scss";
import pstohtml from "../../Images/psdtohtml.jpg";
import { provideService } from "../../Data/ProvideService";

const ProvideService = () => {
  const [active,setActive] = useState(2);
  return (
    <section>
      <div className="container">
        <div className={`row ${style.provideServiceInner} marginTop100`}>
          <h2 className="text-center title">
            Those <span> I Provide</span>
          </h2>
          {provideService.map((data, index) => (
            <div className="col-md-4 col-sm-12">
            <div data-aos="fade-up">
              <div onMouseEnter={()=>setActive(index)} className={`${style.ProvideServiceInner} text-center ${active == index ? style.active : ''}`}>
                <img className="text-center" src={data.img} alt="" />
                <div className={style.provideServiceContent}>
                  <h4>{data.title}</h4>
                  <p>{data.description}</p>
                </div>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProvideService;
