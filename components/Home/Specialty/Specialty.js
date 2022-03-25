import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import specialData from "../../../data/specialData";
import style from "./Specialty.module.scss";

const Specialty = () => {
  return (
    <div className={`${style.specialtyStyle} sectionStyle`}>
      <Container>
        <Row className="m-0 p-0 gy-4 gy-md-0 gx-2 gx-md-3 gx-lg-5 row-cols-1 row-cols-md-3">
          {/* Cards start */}
          {specialData?.map((data, index) => (
            <Col key={index} className="cardStyle">
              <div>{data?.icon}</div>
              <h3>{data?.title}</h3>
              <p>{data?.details}</p>
            </Col>
          ))}
          {/* Cards end */}
        </Row>
      </Container>
    </div>
  );
};

export default Specialty;
