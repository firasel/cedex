import Head from "next/head";
import React from "react";
import { Container } from "react-bootstrap";
import BlogLists from "../components/AllBlogs/BlogLists/BlogLists";
import Header from "../components/AllBlogs/Header/Header";
import SideBar from "../components/AllBlogs/SideBar/SideBar";
import Footer from "../components/shared/Footer/Footer";

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
        <Header />
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
