import React from "react";
import Blog from "../Blog/Blog";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Journey from "../Journey/Journey";
import Project from "../Project/Project";
import Services from "../Services/Services";
import Specialty from "../Specialty/Specialty";
import Testimonial from "../Testimonial/Testimonial";
import TouchWithMe from "../TouchWithMe/TouchWithMe";

const Home = () => {
  return (
    <>
      <Header />
      <Specialty />
      <Project />
      <Journey />
      <TouchWithMe />
      <Services />
      <Testimonial />
      <Blog />
      <Footer />
    </>
  );
};

export default Home;
