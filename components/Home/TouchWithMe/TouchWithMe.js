import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Ellipse from "../../../assets/images/common/Ellipse1.svg";
import ProfileImg from "../../../assets/images/TouchWithMe/profile02.jpg";
import style from "./TouchWithMe.module.scss";

const TouchWithMe = () => {
  return (
    <div className={style.touchWithMeStyle}>
      <div className="sectionStyle">
        <Container className="position-relative">
          <Row className="align-items-center justify-content-between">
            <Col className="contentStyle order-1 order-md-0" md={6} lg={6}>
              <h4 className="sectionTitle">Get Touch With Me</h4>
              <h5>Who Person Growth of Startup in USA</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum
                eget libero elementum amet ultricies ut hac ultrices
                ullamcorper. Enim nullam eu libero accumsan, nisl amet. Diam
                tristique nulla libero, massa malesuada neque.
              </p>
              <button>Let&apos;s Talk</button>
            </Col>
            <Col className="imageStyle order-0" md={6} lg={5}>
              <Image src={ProfileImg} layout="responsive" alt="image" />
              <div className="circle1">
                <Image src={Ellipse} alt="ellipse" />
              </div>
              <div className="circle2">
                <Image src={Ellipse} alt="ellipse" />
              </div>
            </Col>
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
