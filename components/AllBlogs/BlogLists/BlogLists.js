import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { Row } from "react-bootstrap";
import {
  FaComments,
  FaLongArrowAltRight,
  FaRegUserCircle
} from "react-icons/fa";
import style from "./BlogLists.module.scss";

const BlogLists = ({ blogsData }) => {
  const router = useRouter();

  return (
    <div className={style.blogListStyle}>
      <Row className="row-cols-1 row-cols-md-1 row-cols-lg-2">
        {/* Blog cards start */}
        {blogsData?.map((data, index) => (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, delay: index % 2 !== 0 ? 0.2 : 0 },
            }}
            viewport={{ once: true }}
            key={index}
            className="col"
          >
            <motion.div
              whileHover={{ y: -10, transition: { duration: 0.4 } }}
              className="blogCard"
            >
              <div onClick={() => router.push("/post")} className="image">
                <Image layout="fill" src={data?.image} alt="blog image" />
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
                <h4 onClick={() => router.push("/post")}>{data.title}</h4>
                <button onClick={() => router.push("/post")}>
                  Read More <FaLongArrowAltRight />
                </button>
              </div>
            </motion.div>
          </motion.div>
        ))}
        {/* Blog cards end */}
      </Row>
    </div>
  );
};

export default BlogLists;
