import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  BsGithub,
  BsPinterest,
  BsReddit,
  BsSlack,
  BsSnapchat,
  BsTwitter
} from "react-icons/bs";
import style from "./Journey.module.scss";

const Journey = () => {
  return (
    <div className={`${style.journeyStyle} sectionStyle`}>
      <Container>
        <h2 className="sectionTitle">My Journey</h2>
        <Row>
          <Col md={10} lg={6} xl={5}>
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
                <BsSlack color="#6154f2" />
              </div>
              <div className="content">
                <h4>Lead UI Designer</h4>
                <span>Slack</span>
                <p>2021 - Present</p>
              </div>
            </div>
            <div className="journeyCard">
              <div className="logo">
                <BsGithub color="#455A64" />
              </div>
              <div className="content">
                <h4>UI Designer</h4>
                <span>Github</span>
                <p>2021 - 2021</p>
              </div>
            </div>
            <div className="journeyCard">
              <div className="logo">
                <BsTwitter color="#03A9F4" />
              </div>
              <div className="content">
                <h4>Senior UI Designer</h4>
                <span>Twitter</span>
                <p>2020 - 2021</p>
              </div>
            </div>
          </Col>
          <Col md={6} lg={5}>
            <div className="journeyCard">
              <div className="logo">
                <BsSnapchat color="#e854f2" />
              </div>
              <div className="content">
                <h4>UI/UX Designer</h4>
                <span>Snapchat</span>
                <p>2019 - 2020</p>
              </div>
            </div>
            <div className="journeyCard">
              <div className="logo">
                <BsReddit color="#F26322" />
              </div>
              <div className="content">
                <h4>UX Designer</h4>
                <span>Reddit</span>
                <p>2018 - 2019</p>
              </div>
            </div>
            <div className="journeyCard">
              <div className="logo">
                <BsPinterest color="#E60023" />
              </div>
              <div className="content">
                <h4>Web Designer</h4>
                <span>Pinterest</span>
                <p>2018 - 2018</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Journey;
