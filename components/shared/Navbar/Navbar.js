import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import LogoImg from "../../../assets/images/Logo.png";
import style from "./Navbar.module.scss";

const NavBar = () => {
  return (
    <>
      <Navbar
        className={style.navbarStyle}
        collapseOnSelect
        expand="lg"
      >
        <Container>
          <Navbar.Brand className="logo" href="#">
            <Image src={LogoImg} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto menuItems">
              <Nav.Link as={Link} href="/">Home</Nav.Link>
              <Nav.Link as={Link} href="/portfolio">Portfolio</Nav.Link>
              <Nav.Link as={Link} href="/blogs">Blogs</Nav.Link>
              <Nav.Link as={Link} href="/contact">Contact</Nav.Link>
              <Nav.Link as={Link} href="/about">About us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
