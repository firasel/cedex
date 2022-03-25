import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import serviceData from "../../../data/serviceData";
import style from "./Services.module.scss";

const Services = () => {
  return (
    <div id="service" className={`${style.serviceStyle} sectionStyle`}>
      <Container>
        {/* Heading start */}
        <Row>
          <Col md={10} lg={7} xl={6} className="heading">
            <h2 className="sectionTitle">{serviceData?.section?.title}</h2>
            <p>{serviceData?.section?.details}</p>
          </Col>
        </Row>
        {/* Heading end */}
        {/* Cards start */}
        <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 g-2 g-md-4 g-lg-5 serviceCards">
          {serviceData?.services?.map((data, index) => (
            <Col key={index}>
              <div>
                <div>{data?.icon}</div>
                <h4>{data?.title}</h4>
                <p>{data?.details}</p>
              </div>
            </Col>
          ))}
        </Row>
        {/* Cards end */}
      </Container>
    </div>
  );
};

export default Services;
