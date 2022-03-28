import Head from "next/head";
import React from "react";
import ContactForm from "../components/Contact/ContactForm/ContactForm";
import GetInTouch from "../components/Contact/GetInTouch/GetInTouch";
import Hero from "../components/Contact/Hero/Hero";
import Map from "../components/Contact/Map/Map";
import Footer from "../components/shared/Footer/Footer";
import HeaderWrapper from "../components/shared/HeaderWrapper/HeaderWrapper";
import Hero2 from "../components/shared/Hero2/Hero2";
import NavBar from "../components/shared/Navbar/Navbar";

const contact = () => {
  return (
    <div>
      <Head>
        <title>Cedex - Contact</title>
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
        <GetInTouch />
        <ContactForm />
        <Map />
        <Footer />
      </main>
    </div>
  );
};

export default contact;
