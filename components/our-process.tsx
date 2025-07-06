"use client";

import { images } from "@/config/images";
import { BaseColors } from "@/lib/themeConfig";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Step 1",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.",
  },
  {
    title: "Step 2",
    desc: "Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh.",
  },
  {
    title: "Step 3",
    desc: "Maecenas malesuada. Praesent congue erat at massa. Sed cursus turpis vitae tortor.",
  },
];

const OurProcessSection = () => {
  return (
    <OurProcessSectionWrapper>
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="title"
        >
          Our Process
        </motion.h2>
        <div className="stepWrapper">
          {steps?.map((item, idx) => {
            return (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.4 }}
                viewport={{ once: true }}
                key={idx}
                className="step"
              >
                <div className="frameWrapper">
                  <Image src={images?.ProcessFrame} alt="frame" fill />
                </div>
                <div className="textContainer">
                  <h4> {item?.title}</h4>
                  <p>{item?.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      <div className="circleLayer" />
      <div className="circleLayer leftSide" />
    </OurProcessSectionWrapper>
  );
};

export default OurProcessSection;

const OurProcessSectionWrapper = styled.section`
  padding: 180px 20px 0;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: center; */
  position: relative;

  .container {
    width: 100%;
  }

  h2 {
    margin-bottom: 25px;
    font-size: 47px;
  }

  .stepWrapper {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
    gap: 1.5rem;

    .step {
      height: 280px;
      width: 340px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      margin: 0 auto;

      .textContainer {
        max-width: 90%;
        margin: 0 auto;
        text-align: center;

        h4 {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 20px;
        }

        p {
          font-size: 18px;
          font-weight: 400px;
          color: ${BaseColors?.textGrey};
        }
      }

      .frameWrapper {
        position: absolute;
        height: 100%;
        width: 100%;
      }
    }
  }

  .circleLayer {
    position: absolute;
    left: -40px;
    top: 100px;
    height: 500px;
    width: 500px;
    border: 1px solid #707070;
    border-radius: 50%;
    opacity: 0.3;

    &.leftSide {
      left: -250px;
    }
  }

  @media (max-width: 768px) {
    padding: 80px 20px 0;

    h2 {
      font-size: 24px;
      text-align: center;
    }

    .stepWrapper {
      grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));

      .step {
        height: 240px;
        width: 300px;

        h4 {
          font-size: 20px;
        }

        p {
          font-size: 16px;
        }
      }
    }

    .circleLayer {
      height: 350px;
      width: 350px;
    }
  }
`;
