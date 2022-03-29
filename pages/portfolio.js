import Head from "next/head";
import React from "react";
import Hero from "../components/Portfolio/Hero/Hero";
import Footer from "../components/shared/Footer/Footer";
import HeaderWrapper from "../components/shared/HeaderWrapper/HeaderWrapper";
import Hero2 from "../components/shared/Hero2/Hero2";
import NavBar from "../components/shared/Navbar/Navbar";
import Project from "../components/shared/Project/Project";

const portfolio = () => {
  return (
    <div>
      <Head>
        <title>Cedex - Portfolio</title>
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
        <Project />
        <Footer />
      </main>
    </div>
  );
};

export default portfolio;
