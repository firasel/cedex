import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FcDecision, FcIdea, FcMultipleSmartphones } from "react-icons/fc";
import style from "./Specialty.module.scss";

const Specialty = () => {
  return (
    <div className={`${style.specialtyStyle} sectionStyle`}>
      <Container>
        <Row className="m-0 p-0 gy-4 gy-md-0 gx-2 gx-md-3 gx-lg-5 row-cols-1 row-cols-md-3">
          {/* Cards start */}
          <Col className="cardStyle">
            <div>
              <FcDecision />
            </div>
            <h3>Creative design</h3>
            <p>
              I am very passionate about my work, my goal when I start work is
              to complete this work with the best quality and uniqueness.
            </p>
          </Col>
          <Col className="cardStyle">
            <div>
              <FcMultipleSmartphones />
            </div>
            <h3>Best quality</h3>
            <p>
              I am very passionate about my work, my goal when I start work is
              to complete this work with the best quality and uniqueness.
            </p>
          </Col>
          <Col className="cardStyle">
            <div>
              <FcIdea />
            </div>
            <h3>Awesome Idea</h3>
            <p>
              I am very passionate about my work, my goal when I start work is
              to complete this work with the best quality and uniqueness.
            </p>
          </Col>
          {/* Cards end */}
        </Row>
      </Container>
    </div>
  );
};

export default Specialty;
