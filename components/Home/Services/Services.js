import { motion } from "framer-motion";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import serviceData from "../../../data/serviceData";
import style from "./Services.module.scss";

const Services = () => {
  const variants = {
    hover: {
      rotate: [0, 4, -4, 4, -4, 0],
      scale: [1, 1.07, 1],
      transition: {
        duration: 0.8,
      },
    },
    rest: {
      scale: 1,
      rotate: 0,
    },
  };

  return (
    <div id="service" className={`${style.serviceStyle} sectionStyle`}>
      <Container>
        {/* Heading start */}
        <Row>
          <Col md={10} lg={7} xl={6} className="heading">
            <h2 className="sectionTitle">{serviceData?.section?.title}</h2>
            <p>{serviceData?.section?.details}</p>
          </Col>
        </Row>
        {/* Heading end */}
        {/* Cards start */}
        <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 g-2 g-md-4 g-lg-5 serviceCards">
          {serviceData?.services?.map((data, index) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.4, delay: index * 0.2 },
              }}
              viewport={{ once: true }}
              className="col"
              key={index}
              whileHover={{ children: "hover" }}
            >
              <motion.div initial="rest" whileHover="hover" animate="rest">
                <motion.div variants={variants}>{data?.icon}</motion.div>
                <h4>{data?.title}</h4>
                <p>{data?.details}</p>
              </motion.div>
            </motion.div>
          ))}
        </Row>
        {/* Cards end */}
      </Container>
    </div>
  );
};

export default Services;
