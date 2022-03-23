import React from "react";
import Header from "../Header/Header";
import Journey from "../Journey/Journey";
import Project from "../Project/Project";
import Services from "../Services/Services";
import Specialty from "../Specialty/Specialty";
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
    </>
  );
};

export default Home;
