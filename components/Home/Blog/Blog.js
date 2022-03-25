import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { Container, Row } from "react-bootstrap";
import {
  FaComments,
  FaLongArrowAltRight,
  FaRegUserCircle
} from "react-icons/fa";
import blogData from "../../../data/blogData";
import style from "./Blog.module.scss";

const Blog = () => {
  return (
    <div className={`${style.blogStyle} sectionStyle`}>
      <Container>
        <h2 className="sectionTitle">{blogData?.section?.title}</h2>
        <Row className="row-cols-1 row-cols-md-3 gy-4 gy-md-0">
          {blogData?.blogs?.map((data, index) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, delay: index * 0.3 },
              }}
              viewport={{ once: true }}
              key={index}
              className="blogCard col"
            >
              <div className="image">
                <Image layout="responsive" src={data?.image} alt="blog image" />
              </div>
              <div className="blogContent">
                <div>
                  {data?.posted && (
                    <span>
                      <FaRegUserCircle fontSize={25} /> {data?.posted}
                    </span>
                  )}
                  {data?.posted && data?.comments && <span> / </span>}
                  {data?.comments && (
                    <span>
                      <FaComments fontSize={25} /> {data?.comments} Comments
                    </span>
                  )}
                </div>
                <h4>{data.title}</h4>
                <button>
                  Read More <FaLongArrowAltRight />
                </button>
              </div>
            </motion.div>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Blog;
