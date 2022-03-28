import { motion } from "framer-motion";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import testimonialData from "../../../data/testimonialData";
import style from "./Testimonial.module.scss";

const Testimonial = () => {
  // State for control active slide style
  const [active, setActive] = useState(1);

  const [sliderRef] = useKeenSlider({
    mode: "free-snap",
    breakpoints: {
      "(max-width:991px)": {
        slides: {
          origin: 0,
          perView: 1.6,
          spacing: 25,
        },
      },
      "(max-width:767px)": {
        slides: {
          origin: 0,
          perView: 1.3,
          spacing: 10,
        },
      },
      "(max-width:450px)": {
        slides: {
          origin: 0,
          perView: 1,
          spacing: 0,
        },
      },
    },
    slides: {
      origin: 0,
      perView: 2.4,
      spacing: 25,
    },
    detailsChanged: (s) => {
      setActive(s?.track?.details?.abs);
    },
  });

  return (
    <div className={`${style.testimonialStyle} sectionStyle`}>
      <Container>
        <h2 className="sectionTitle">{testimonialData?.section?.title}</h2>
        {/* Testimonial slider start */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.8 },
          }}
          viewport={{ once: true }}
        >
          <div ref={sliderRef} className="keen-slider">
            {testimonialData?.testimonials?.map((data, index) => (
              <div
                key={index}
                className={`keen-slider__slide testimonialCard ${
                  active === index && "activeStyle"
                } `}
              >
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
                <p>{data?.message}</p>
              </div>
            ))}
          </div>
        </motion.div>
        {/* Testimonial slider end */}
      </Container>
    </div>
  );
};

export default Testimonial;
