import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import journeyData from "../../../data/journeyData";
import style from "./Journey.module.scss";

const Journey = () => {
  return (
    <div className={`${style.journeyStyle} sectionStyle`}>
      <Container>
        {/* Heading start */}
        <Row>
          <Col md={10} lg={6} xl={5}>
            <h2 className="sectionTitle">{journeyData?.section?.title}</h2>
            <p className="subTitle">{journeyData?.section?.details}</p>
          </Col>
        </Row>
        {/* Heading end */}
        {/* Cards start */}
        <Row className="justify-content-md-between">
          {journeyData?.jobs?.map((data, index) => (
            <Col key={index} md={6} lg={5} className="journeyCard">
              <div className="logo">{data?.icon}</div>
              <div className="content">
                <h4>{data?.position}</h4>
                <span>{data?.companyName}</span>
                <p>{data?.time}</p>
              </div>
            </Col>
          ))}
        </Row>
        {/* Cards end */}
      </Container>
    </div>
  );
};

export default Journey;
