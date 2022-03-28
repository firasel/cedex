import Head from "next/head";
import React from "react";
import { Container } from "react-bootstrap";
import BlogLists from "../components/AllBlogs/BlogLists/BlogLists";
import Hero from "../components/AllBlogs/Hero/Hero";
import SideBar from "../components/AllBlogs/SideBar/SideBar";
import Footer from "../components/shared/Footer/Footer";
import HeaderWrapper from "../components/shared/HeaderWrapper/HeaderWrapper";
import Hero2 from "../components/shared/Hero2/Hero2";
import NavBar from "../components/shared/Navbar/Navbar";

const blogs = () => {
  return (
    <div>
      <Head>
        <title>Cedex - Blogs</title>
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
          <div className="sectionStyle d-md-flex gap-5">
            <BlogLists />
            <SideBar />
          </div>
        </Container>
        <Footer />
      </main>
    </div>
  );
};

export default blogs;
