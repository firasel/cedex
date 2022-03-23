import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AiOutlineMobile } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import { FaElementor, FaWordpressSimple } from "react-icons/fa";
import { GiVoodooDoll } from "react-icons/gi";
import { MdOutlineWeb } from "react-icons/md";
import style from "./Services.module.scss";

const Services = () => {
  return (
    <div className={`${style.serviceStyle} sectionStyle`}>
      <Container>
        {/* Heading start */}
        <Row>
          <Col md={10} lg={7} xl={6} className="heading">
            <h2 className="sectionTitle">What Service I Do</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              placerat leo in mauris tempor rutrum. Curabitur fringilla interdum
              viverra.
            </p>
          </Col>
        </Row>
        {/* Heading end */}
        {/* Cards start */}
        <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 g-2 g-md-4 g-lg-5 serviceCards">
          <Col>
            <div>
              <div>
                <AiOutlineMobile color="#6154f2" />
              </div>
              <h4>Mobile App Design</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas placerat leo in mauris tempor rutrum. Curabitur
                fringilla interdum viverra.
              </p>
            </div>
          </Col>
          <Col>
            <div>
              <div>
                <CgWebsite color="#6154f2" />
              </div>
              <h4>Web Design and Development</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas placerat leo in mauris tempor rutrum. Curabitur
                fringilla interdum viverra.
              </p>
            </div>
          </Col>
          <Col>
            <div>
              <div>
                <MdOutlineWeb color="#6154f2" />
              </div>
              <h4>UI/UX Design</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas placerat leo in mauris tempor rutrum. Curabitur
                fringilla interdum viverra.
              </p>
            </div>
          </Col>
          <Col>
            <div>
              <div>
                <GiVoodooDoll color="#6154f2" />
              </div>
              <h4>Illustration</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas placerat leo in mauris tempor rutrum. Curabitur
                fringilla interdum viverra.
              </p>
            </div>
          </Col>
          <Col>
            <div>
              <div>
                <FaElementor color="#6154f2" />
              </div>
              <h4>Elementor Developemnt</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas placerat leo in mauris tempor rutrum. Curabitur
                fringilla interdum viverra.
              </p>
            </div>
          </Col>
          <Col>
            <div>
              <div>
                <FaWordpressSimple color="#6154f2" />
              </div>
              <h4>Wordpress Developemnt</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas placerat leo in mauris tempor rutrum. Curabitur
                fringilla interdum viverra.
              </p>
            </div>
          </Col>
        </Row>
        {/* Cards end */}
      </Container>
    </div>
  );
};

export default Services;
