import Head from "next/head";
import React from "react";
import Hero from "../components/ProjectDetails/Hero/Hero";
import ProjectDescription from "../components/ProjectDetails/ProjectDescription/ProjectDescription";
import Footer from "../components/shared/Footer/Footer";
import HeaderWrapper from "../components/shared/HeaderWrapper/HeaderWrapper";
import Hero2 from "../components/shared/Hero2/Hero2";
import NavBar from "../components/shared/Navbar/Navbar";

const projectdetails = () => {
  return (
    <div>
      <Head>
        <title>Cedex - Project Details</title>
        <meta
          name="description"
          content="Cedex | Personal portfolio React Next.JS template"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HeaderWrapper>
          <NavBar />
          <Hero2>
            <Hero />
          </Hero2>
        </HeaderWrapper>
        <ProjectDescription />
        <Footer />
      </main>
    </div>
  );
};

export default projectdetails;
