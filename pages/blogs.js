import Head from "next/head";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import BlogLists from "../components/AllBlogs/BlogLists/BlogLists";
import Hero from "../components/AllBlogs/Hero/Hero";
import Footer from "../components/shared/Footer/Footer";
import HeaderWrapper from "../components/shared/HeaderWrapper/HeaderWrapper";
import Hero2 from "../components/shared/Hero2/Hero2";
import NavBar from "../components/shared/Navbar/Navbar";
import SideBar from "../components/shared/SideBar/SideBar";
import blogData from "../data/blogData";

const Blogs = () => {
  // State for search functionality implement
  const [blogsData, setBlogsData] = useState(blogData?.blogs);

  // Search handler function
  const searcHandler = (e) => {
    // Search input value
    let searchValue = e?.target?.value?.trim()?.toLowerCase();
    // Check value and filter the data
    if (searchValue) {
      setBlogsData(
        blogData?.blogs?.filter((data) => {
          if (data?.title?.toLowerCase()?.indexOf(searchValue) !== -1) {
            return data;
          }
        })
      );
    } else {
      setBlogsData(blogData?.blogs);
    }
  };

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
            <Hero searcHandler={searcHandler} />
          </Hero2>
        </HeaderWrapper>
        <Container>
          <Row className="sectionStyle row">
            <Col md={7} lg={8}>
              <BlogLists blogsData={blogsData} />
            </Col>
            <Col md={5} lg={4}>
              <SideBar />
            </Col>
          </Row>
        </Container>
        <Footer />
      </main>
    </div>
  );
};

export default Blogs;
