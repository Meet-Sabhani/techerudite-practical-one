"use client";

import { images } from "@/config/images";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import Button from "./ui/button";
import { BaseColors } from "@/lib/themeConfig";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <Wrapper id="about">
      <div className="container">
        <motion.div
          className="left"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.6 }}
        >
          <h3>About us</h3>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor Lorem ipsum dolor sit amet consetetur
            sadipscing elitr
          </p>
          <Button>Contact us</Button>
        </motion.div>

        <motion.div
          className="rightImg"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.6 }}
        >
          <Image
            src={images?.aboutBanner}
            alt="About Us"
            fill
            className="about-image"
          />
        </motion.div>
      </div>
    </Wrapper>
  );
};

export default AboutSection;

// Styled Wrapper with background only
const Wrapper = styled.section`
  height: 150dvh;
  max-height: 1000px;
  width: 100%;
  background-image: url(${images?.aboutBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    width: 100%;
    gap: 2rem;
  }

  .left {
    flex: 1;
  }

  .left h3 {
    font-size: 47px;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  .left p {
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 1rem;
    color: ${BaseColors?.textGrey};
  }

  .rightImg {
    flex: 1;
    /* display: flex;
    justify-content: center; */
    position: relative;
    width: 600px;
    height: 400px;
  }

  .about-image {
    object-fit: contain;
    border-radius: 12px;
  }

  @media (max-width: 768px) {
    height: 100dvh;
    max-height: 700px;

    .left h3 {
      font-size: 24px;
    }

    .left p {
      font-size: 16px;
    }

    .container {
      display: block;
      text-align: center;
    }

    .rightImg {
      height: 300px;
      width: 100%;
      max-width: 500px;
      margin: 2rem auto 0;
    }
  }
`;
