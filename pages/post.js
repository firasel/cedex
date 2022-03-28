import Head from "next/head";
import React from "react";
import { Container } from "react-bootstrap";
import Hero from "../components/Post/Hero/Hero";
import PostContent from "../components/Post/PostContent/PostContent";
import Footer from "../components/shared/Footer/Footer";
import HeaderWrapper from "../components/shared/HeaderWrapper/HeaderWrapper";
import Hero2 from "../components/shared/Hero2/Hero2";
import NavBar from "../components/shared/Navbar/Navbar";
import SideBar from "../components/shared/SideBar/SideBar";

const post = () => {
  return (
    <div>
      <Head>
        <title>Cedex - Post</title>
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
        <Container>
          <div className="row sectionStyle d-md-flex overflow-hidden gy-4 gy-lg-0">
            <div className="col-lg-8">
              <PostContent />
            </div>
            <div className="col-lg-4">
              <SideBar />
            </div>
          </div>
        </Container>
        <Footer />
      </main>
    </div>
  );
};

export default post;
