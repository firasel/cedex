import { motion } from "framer-motion";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import contactData from "../../../data/contactData";
import style from "./ContactForm.module.scss";

const ContactForm = () => {
  return (
    <div className={`${style.contactFormSection} sectionStyle`}>
      <Container>
        <Row className="row-cols-1 row-cols-md-2 gy-5 gy-md-0 gx-5">
          <Col className="contactDetails">
            <motion.h2
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1, transition: { duration: 0.3 } }}
              viewport={{ once: true }}
              className="sectionTitle firstTitle"
            >
              {contactData?.contactForm?.title1}
            </motion.h2>
            <motion.h2
              initial={{ y: 50, opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: { duration: 0.3, delay: 0.1 },
              }}
              viewport={{ once: true }}
              className="sectionTitle"
            >
              {contactData?.contactForm?.title2}
            </motion.h2>
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: { duration: 0.3, delay: 0.15 },
              }}
              viewport={{ once: true }}
            >
              {contactData?.contactForm?.details1}
              <br />
              <br />
              {contactData?.contactForm?.details2}
              <br />
              <br />
              {contactData?.contactForm?.details3}
            </motion.p>
          </Col>
          <Col>
            <div className="contactForm">
              <div className="d-lg-flex gap-3">
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{
                    y: 0,
                    opacity: 1,
                    transition: { duration: 0.3 },
                  }}
                  viewport={{ once: true }}
                  className="inputStyle"
                >
                  <label>Full Name</label>
                  <input type="text" placeholder="Full name" />
                </motion.div>
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{
                    y: 0,
                    opacity: 1,
                    transition: { duration: 0.3, delay: 0.05 },
                  }}
                  viewport={{ once: true }}
                  className="inputStyle"
                >
                  <label>Email</label>
                  <input type="email" placeholder="Email" />
                </motion.div>
              </div>
              <div className="d-lg-flex gap-3">
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{
                    y: 0,
                    opacity: 1,
                    transition: { duration: 0.3, delay: 0.1 },
                  }}
                  viewport={{ once: true }}
                  className="inputStyle"
                >
                  <label>Phone</label>
                  <input type="text" placeholder="Phone" />
                </motion.div>
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{
                    y: 0,
                    opacity: 1,
                    transition: { duration: 0.3, delay: 0.15 },
                  }}
                  viewport={{ once: true }}
                  className="inputStyle"
                >
                  <label>Subject</label>
                  <input type="text" placeholder="Subject" />
                </motion.div>
              </div>
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.3, delay: 0.2 },
                }}
                viewport={{ once: true }}
                className="inputStyle"
              >
                <label>Message</label>
                <textarea rows={3} type="text" placeholder="Message" />
              </motion.div>
              <motion.button
                initial={{ y: 50, opacity: 0 }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.3, delay: 0.2 },
                }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                className="submitBtn"
              >
                Submit
              </motion.button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactForm;
