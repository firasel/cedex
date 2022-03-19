import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FcCdLogo } from "react-icons/fc";
import style from "./Journey.module.scss";

const Journey = () => {
  return (
    <div className={`${style.journeyStyle} sectionStyle`}>
      <Container>
        <h2 className="sectionTitle">My Journey</h2>
        <Row>
          <Col md={6} lg={5}>
            <p className="subTitle">
              I am a person who is very excited to learn and is disciplined on
              the given task and always gives the best for the company.
            </p>
          </Col>
        </Row>
        <Row className="justify-content-md-between">
          <Col md={6} lg={5}>
            <div className="journeyCard">
              <div className="logo">
                <FcCdLogo version="1.0" />
              </div>
              <div className="content">
                <h4>Lead UI Designer</h4>
                <span>Ed-Tech</span>
                <p>2018 - 2019</p>
              </div>
            </div>
            <div className="journeyCard">
              <div className="logo">
                <FcCdLogo version="1.0" />
              </div>
              <div className="content">
                <h4>Lead UI Designer</h4>
                <span>Ed-Tech</span>
                <p>2018 - 2019</p>
              </div>
            </div>
            <div className="journeyCard">
              <div className="logo">
                <FcCdLogo version="1.0" />
              </div>
              <div className="content">
                <h4>Lead UI Designer</h4>
                <span>Ed-Tech</span>
                <p>2018 - 2019</p>
              </div>
            </div>
          </Col>
          <Col md={6} lg={5}>
            <div className="journeyCard">
              <div className="logo">
                <FcCdLogo version="1.0" />
              </div>
              <div className="content">
                <h4>Lead UI Designer</h4>
                <span>Ed-Tech</span>
                <p>2018 - 2019</p>
              </div>
            </div>
            <div className="journeyCard">
              <div className="logo">
                <FcCdLogo version="1.0" />
              </div>
              <div className="content">
                <h4>Lead UI Designer</h4>
                <span>Ed-Tech</span>
                <p>2018 - 2019</p>
              </div>
            </div>
            <div className="journeyCard">
              <div className="logo">
                <FcCdLogo version="1.0" />
              </div>
              <div className="content">
                <h4>Lead UI Designer</h4>
                <span>Ed-Tech</span>
                <p>2018 - 2019</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Journey;
