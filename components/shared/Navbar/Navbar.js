import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { CgMenuRight } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import navbarData from "../../../data/navbarData";
import style from "./Navbar.module.scss";

const NavBar = () => {
  // State for menu expand and unexpand control
  const [expand, setExpand] = useState(true);
  const router = useRouter();
  // Navbar sticky state
  const [stickyState, setStickyState] = useState(false);
  // Navbar ref and extra div height
  const navbarRef = useRef();
  const [height, setHeight] = useState(102);

  // Track window scroll
  const stickyHandler = (e) => {
    const scrollTop = window.scrollY;
    scrollTop >= 100 ? setStickyState(true) : setStickyState(false);
  };
  // Track navbar height depend on window size
  const navbarHeightHandler = () => {
    setHeight(navbarRef?.current?.offsetHeight);
  };

  // Track window scroll
  useEffect(() => {
    window.addEventListener("scroll", stickyHandler);
    return () => {
      window.removeEventListener("scroll", stickyHandler);
    };
  });
  // Track window width
  useEffect(() => {
    // Add event listener
    window?.addEventListener("resize", navbarHeightHandler);
    // Remove event listener on cleanup
    return () => window?.removeEventListener("resize", navbarHeightHandler);
  }, []);

  return (
    <>
      {stickyState && <div style={{ height: height }} className="w-100"></div>}
      <Navbar
        ref={navbarRef}
        className={`${style.navbarStyle} ${
          stickyState && "navbarStickyStyle"
        } py-2 py-md-4`}
        collapseOnSelect
        expand="md"
      >
        <Container className="position-relative">
          {/* Navbar logo start */}
          <Navbar.Brand className="logo" href="#">
            <Image src={navbarData?.logo} alt="logo" />
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
              {navbarData?.menus?.map((data, index) => (
                <span
                  key={index}
                  className={router?.asPath === data?.link ? "active" : ""}
                >
                  <Nav.Link as={Link} href={data?.link}>
                    {data?.name}
                  </Nav.Link>
                </span>
              ))}
            </Nav>
          </Navbar.Collapse>
          {/* Navbar menu end */}
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
