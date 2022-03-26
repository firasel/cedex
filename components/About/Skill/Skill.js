import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CountUp from "react-countup";
import { Waypoint } from "react-waypoint";
import skillData from "../../../data/skillData";
import style from "./skill.module.scss";

const Skill = () => {
  const [viewPortEntered, setViewPortEntered] = useState(false);

  return (
    <div className={`${style.skillStyle} sectionStyle`}>
      <Container>
        <Row className="m-0 p-0 gy-4 gy-md-0 gx-2 gx-md-3 gx-lg-5 row-cols-1 row-cols-md-3">
          {/* Cards start */}
          {skillData?.map((data, index) => (
            <Col key={index} className="cardStyle">
              <div>
                <Waypoint onEnter={() => setViewPortEntered(true)}>
                  <span>
                    {viewPortEntered && (
                      <CountUp
                        duration={3}
                        end={data.scroe}
                        suffix="%"
                        start={0}
                      />
                    )}
                  </span>
                </Waypoint>
              </div>
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

export default Skill;
