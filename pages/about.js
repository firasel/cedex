import Head from "next/head";
import React from "react";
import Skill from "../components/About/Skill/Skill";
import WhyMe from "../components/About/WhyMe/WhyMe";
import Header from "../components/Home/Header/Header";
import Footer from "../components/shared/Footer/Footer";
import Journey from "../components/shared/Journey/Journey";
import Services from "../components/shared/Services/Services";
import TouchWithMe from "../components/shared/TouchWithMe/TouchWithMe";
import aboutMeData from "../data/aboutMeData";

const about = () => {
  return (
    <div>
      <Head>
        <title>Cedex - About</title>
        <meta
          name="description"
          content="Cedex | Personal portfolio React Next.JS template"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header heroData={aboutMeData.heroSection} />
        <Skill />
        <WhyMe />
        <Journey />
        <TouchWithMe />
        <Services />
        <Footer />
      </main>
    </div>
  );
};

export default about;
