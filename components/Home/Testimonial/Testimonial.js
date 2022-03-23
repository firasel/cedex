import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import testimonialData from "../../../data/testimonialData";
import style from "./Testimonial.module.scss";

const Testimonial = () => {
  const [active, setActive] = useState(1);
  const [sliderRef, slider] = useKeenSlider({
    mode: "free-snap",
    slides: {
      origin: 0,
      perView: 2.4,
      spacing: 25,
    },
    initial: 1,
    detailsChanged: (s) => {
      setActive(s?.track?.details?.abs);
    },
  });

  console.log(active);

  return (
    <div className={`${style.testimonialStyle} sectionStyle`}>
      <Container>
        <h2 className="sectionTitle">Testimonial from My Clients</h2>
        {/* Testimonial slider start */}
        <div ref={sliderRef} className="keen-slider">
          {testimonialData?.map((data, index) => (
            <div
              key={index}
              className={`keen-slider__slide testimonialCard ${
                active === index && "activeStyle"
              } `}
            >
              <p>{data?.message}</p>
              <div className="d-flex gap-2 align-items-center">
                <div className="clientImage">
                  <Image
                    layout="responsive"
                    src={data?.image}
                    alt="client image"
                  />
                </div>
                <div>
                  <h5>{data?.name}</h5>
                  <span>{data?.position}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Testimonial slider end */}
      </Container>
    </div>
  );
};

export default Testimonial;
