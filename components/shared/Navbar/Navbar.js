import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { CgMenuRight } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import LogoImg from "../../../assets/images/common/Logo.png";
import style from "./Navbar.module.scss";

const NavBar = () => {
  const [expand, setExpand] = useState(true);

  return (
    <>
      <Navbar className={style.navbarStyle} collapseOnSelect expand="md">
        <Container className="py-1 py-md-3 position-relative">
          <Navbar.Brand className="logo" href="#">
            <Image src={LogoImg} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle
            onClick={() => setExpand(!expand)}
            className="toggeBtn"
            aria-controls="responsive-navbar-nav"
          >
            {expand ? <CgMenuRight /> : <IoMdClose />}
          </Navbar.Toggle>
          <Navbar.Collapse
            className="menuItemContainer"
            id="responsive-navbar-nav"
          >
            <Nav className="ms-auto menuItems">
              <span className="active">
                <Nav.Link as={Link} href="/">
                  Home
                </Nav.Link>
              </span>
              <span>
                <Nav.Link as={Link} href="/portfolio">
                  Portfolio
                </Nav.Link>
              </span>
              <span>
                <Nav.Link as={Link} href="/blogs">
                  Blogs
                </Nav.Link>
              </span>
              <span>
                <Nav.Link as={Link} href="/contact">
                  Contact
                </Nav.Link>
              </span>
              <span>
                <Nav.Link as={Link} href="/about">
                  About us
                </Nav.Link>
              </span>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
