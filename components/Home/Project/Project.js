import Image from "next/image";
import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import projectData from "../../../data/projectData";
import style from "./Project.module.scss";

const Project = () => {
  return (
    <div className={`${style.projectStyle} sectionStyle`}>
      <Container>
        <h2 className="sectionTitle">{projectData?.section?.title}</h2>
        <Row className="g-3">
          {/* Project Cards start */}
          {projectData?.projects?.map((data, index) => (
            <Col
              key={index}
              md={index === 2 ? 5 : index === 3 ? 7 : index % 2 === 0 ? 7 : 5}
              className="projectCard"
            >
              <div>
                <div>
                  <h5>{data?.category}</h5>
                  <h3>{data?.title}</h3>
                  <Button variant="none">
                    View Project <MdOutlineArrowForwardIos />
                  </Button>
                </div>
                <Image layout="fill" src={data.image} alt="Project image" />
              </div>
            </Col>
          ))}
          {/* Project Cards end */}
        </Row>
      </Container>
    </div>
  );
};

export default Project;
