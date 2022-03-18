import Image from "next/image";
import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import ProjectImg1 from "../../../assets/images/Projects/project1.jpg";
import ProjectImg2 from "../../../assets/images/Projects/project2.jpg";
import ProjectImg3 from "../../../assets/images/Projects/project3.jpg";
import ProjectImg4 from "../../../assets/images/Projects/project4.jpg";
import ProjectImg5 from "../../../assets/images/Projects/project5.jpg";
import ProjectImg6 from "../../../assets/images/Projects/project6.jpg";
import style from "./Project.module.scss";

const Project = () => {
  return (
    <div className={`${style.projectStyle} sectionStyle`}>
      <Container>
        <h2 className="title">My Recent Projects</h2>
        <Row className="g-3">
          <Col md={7} className="projectCard">
            <div>
              <div>
                <h5>Web Design</h5>
                <h3>Quo Web Design and Development</h3>
                <Button variant="none">
                  View Project <MdOutlineArrowForwardIos />
                </Button>
              </div>
              <Image layout="fill" src={ProjectImg1} alt="Project image" />
            </div>
          </Col>
          <Col md={5} className="projectCard">
            <div>
              <div>
                <h5>Logo Design</h5>
                <h3>Ted Logo Design</h3>
                <Button variant="none">
                  View Project <MdOutlineArrowForwardIos />
                </Button>
              </div>
              <Image layout="fill" src={ProjectImg2} alt="Project image" />
            </div>
          </Col>
          <Col md={5} className="projectCard">
            <div>
              <div>
                <h5>Mobile App Design</h5>
                <h3>LMS App Design and Development</h3>
                <Button variant="none">
                  View Project <MdOutlineArrowForwardIos />
                </Button>
              </div>
              <Image layout="fill" src={ProjectImg3} alt="Project image" />
            </div>
          </Col>
          <Col md={7} className="projectCard">
            <div>
              <div>
                <h5>Animation</h5>
                <h3>Ed-Tech Web Animation Design</h3>
                <Button variant="none">
                  View Project <MdOutlineArrowForwardIos />
                </Button>
              </div>
              <Image layout="fill" src={ProjectImg4} alt="Project image" />
            </div>
          </Col>
          <Col md={7} className="projectCard">
            <div>
              <div>
                <h5>Mobile Animation</h5>
                <h3>Ed-Tech Mobile App Animation</h3>
                <Button variant="none">
                  View Project <MdOutlineArrowForwardIos />
                </Button>
              </div>
              <Image layout="fill" src={ProjectImg5} alt="Project image" />
            </div>
          </Col>
          <Col md={5} className="projectCard">
            <div>
              <div>
                <h5>Web Animation</h5>
                <h3>Learn-Tech Web Animation Implement</h3>
                <Button variant="none">
                  View Project <MdOutlineArrowForwardIos />
                </Button>
              </div>
              <Image layout="fill" src={ProjectImg6} alt="Project image" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Project;
