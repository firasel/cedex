import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FiFigma } from "react-icons/fi";
import { SiAdobeillustrator, SiAdobexd } from "react-icons/si";
import projectImage1 from "../../../assets/images/Projects/project2.jpg";
import style from "./ProjectDescription.module.scss";

const ProjectDescription = () => {
  return (
    <div className={`${style.projectDescriptionStyle} sectionStyle`}>
      <Container className="projectContent">
        <Row>
          <Col md={10} lg={8} xl={6}>
            <h2 className="sectionTitle">Project Description</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              libero odio, vulputate vel nisl mollis, rhoncus dignissim magna.
              Duis ipsum ante, placerat ut justo sed, porttitor lobortis augue.
              Curabitur quam nisi, vulputate et efficitur et, convallis eu ante.
              Nullam venenatis bibendum iaculis. Ut eros ligula, dictum nec
              metus eget, tristique finibus massa. Pellentesque ex mauris,
              ullamcorper in ornare at, maximus a turpis. Sed ultricies sit amet
              nisi vitae pretium. In hac habitasse platea dictumst.
            </p>
            <p><b>Duration:</b> 10 Days</p>
          </Col>
        </Row>
        <div className="tools">
          <div>
            <FiFigma />
          </div>
          <div>
            <SiAdobexd />
          </div>
          <div>
            <SiAdobeillustrator />
          </div>
        </div>
        <Row className="projectImage row-cols-1 row-cols-lg-3 gy-4 gy-lg-0">
          <Col>
            <div>
              <Image layout="responsive" src={projectImage1} alt="Project image" />
            </div>
          </Col>
          <Col>
            <div>
              <Image layout="responsive" src={projectImage1} alt="Project image" />
            </div>
          </Col>
          <Col>
            <div>
              <Image layout="responsive" src={projectImage1} alt="Project image" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProjectDescription;
