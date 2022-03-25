import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Ellipse from "../../../assets/images/common/Ellipse1.svg";
import tochWithMeData from "../../../data/tochWithMeData";
import style from "./TouchWithMe.module.scss";

const TouchWithMe = () => {
  return (
    <div className={style.touchWithMeStyle}>
      <div className="sectionStyle">
        <Container className="position-relative">
          <Row className="align-items-center justify-content-between">
            {/* Content start */}
            <Col className="contentStyle order-1 order-md-0" md={6} lg={6}>
              <h2 className="sectionTitle">{tochWithMeData?.title}</h2>
              <h5>{tochWithMeData?.secondTitle}</h5>
              <p>{tochWithMeData?.details}</p>
              <button>Let&apos;s Talk</button>
            </Col>
            {/* Content end */}
            {/* Image start */}
            <Col className="imageStyle order-0" md={6} lg={5}>
              <Image
                src={tochWithMeData?.image}
                layout="responsive"
                alt="image"
              />
              <div className="circle1">
                <Image src={Ellipse} alt="ellipse" />
              </div>
              <div className="circle2">
                <Image src={Ellipse} alt="ellipse" />
              </div>
            </Col>
            {/* Image end */}
          </Row>
          <div className="circle3">
            <Image src={Ellipse} alt="ellipse" />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default TouchWithMe;
