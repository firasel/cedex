import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BsBehance, BsDribbble, BsFacebook, BsGithub } from "react-icons/bs";
import { RiMailFill, RiMapPinUserFill, RiPhoneFill } from "react-icons/ri";
import Ellipse from "../../../assets/images/common/Ellipse1.svg";
import LogoImg from "../../../assets/images/common/Logo.png";
import style from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={style.footerStyle}>
      <div className="sectionStyle">
        <Container>
          <div className="circle1">
            <Image src={Ellipse} alt="ellipse" />
          </div>
          <Row className="gy-4 gy-md-0 justify-content-between">
            <Col md={4} lg={3} className="newsLetter">
              <div className="circle2">
                <Image src={Ellipse} alt="ellipse" />
              </div>
              <Image src={LogoImg} alt="logo" />
              <br />
              <label>Join a Newsletter</label>
              <br />
              <input type="email" placeholder="Input your email here" />
              <button>Subscribe</button>
            </Col>
            <Col md={4} lg={3} className="servicesLink">
              <div>
                <span>Services</span>
                <ul>
                  <li>
                    <a>UI/UX Design</a>
                  </li>
                  <li>
                    <a>Developemnt</a>
                  </li>
                  <li>
                    <a>Mobile and Web Design</a>
                  </li>
                  <li>
                    <a>Illustration</a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={4} lg={3} className="information">
              <div>
                <RiMapPinUserFill fontSize={25} />
                <p>3485 Plainfield Avenue Syracuse, NY</p>
              </div>
              <div>
                <RiPhoneFill fontSize={25} />
                <p>(+1)123-456-7896</p>
              </div>
              <div>
                <RiMailFill fontSize={25} />
                <p>contact@johndoe.com</p>
              </div>
              <div className="d-flex gap-2 socialLink">
                <div>
                  <a>
                    <BsFacebook />
                  </a>
                </div>
                <div>
                  <a>
                    <BsGithub />
                  </a>
                </div>
                <div>
                  <a>
                    <BsDribbble />
                  </a>
                </div>
                <div>
                  <a>
                    <BsBehance />
                  </a>
                </div>
              </div>
              <div className="circle3">
                <Image src={Ellipse} alt="ellipse" />
              </div>
            </Col>
          </Row>
          <p className="mt-3 mb-0">
            &copy; Jhone Doe 2022 all rights reserved.
          </p>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
