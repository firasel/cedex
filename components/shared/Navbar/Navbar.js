import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { CgMenuRight } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import LogoImg from "../../../assets/images/common/Logo.png";
import style from "./Navbar.module.scss";

const NavBar = () => {
  // State for menu expand and unexpand control
  const [expand, setExpand] = useState(true);
  // Navbar sticky state
  const [stickyState, setStickyState] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", stickyHandler);
    return () => {
      window.removeEventListener("scroll", stickyHandler);
    };
  });
  // Track window scroll
  const stickyHandler = (e) => {
    const scrollTop = window.scrollY;
    scrollTop >= 100 ? setStickyState(true) : setStickyState(false);
  };

  return (
    <>
      <Navbar
        className={`${style.navbarStyle} ${
          stickyState && "navbarStickyStyle"
        } py-2 py-md-4`}
        collapseOnSelect
        expand="md"
      >
        <Container className="position-relative">
          {/* Navbar logo start */}
          <Navbar.Brand className="logo" href="#">
            <Image src={LogoImg} alt="logo" />
          </Navbar.Brand>
          {/* Navbar logo end */}
          <Navbar.Toggle
            onClick={() => setExpand(!expand)}
            className="toggleBtn"
            aria-controls="responsive-navbar-nav"
          >
            {expand ? <CgMenuRight /> : <IoMdClose />}
          </Navbar.Toggle>
          {/* Navbar menu start */}
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
          {/* Navbar menu end */}
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
