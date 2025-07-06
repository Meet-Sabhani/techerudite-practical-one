"use client";

import { images } from "@/config/images";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import Button from "./ui/button";
import { BaseColors } from "@/lib/themeConfig";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <HeroSectionWrapper>
      <motion.div
        className="left"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="textWrapper">
          <h2>
            How much <br /> could you save?
          </h2>
          <p>
            Answer the questions below to get a fixed price quotation for us to
            take your accountancy hassles away from you.
          </p>
        </div>
        <div className="card">
          <h3>Is your turnover expected to be more than £85k?</h3>
          <div className="btnWrapper">
            <Button>Yes</Button>
            <Button>No</Button>
          </div>
        </div>
        <p className="takeS">Takes less than 30 seconds</p>
      </motion.div>

      <motion.div
        className="topLayer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
      >
        <Image src={images?.topLayer} alt="top" fill />
      </motion.div>

      <div className="heroImg">
        <Image src={images?.heroRight} alt="buttom" fill objectFit="contain" />
      </div>

      <motion.div
        className="bottomLayer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.6 }}
      >
        <Image src={images?.bottomLayer} alt="bottom" fill />
      </motion.div>
    </HeroSectionWrapper>
  );
};

export default HeroSection;

const HeroSectionWrapper = styled.section`
  height: 100dvh;
  max-height: 1000px;
  position: relative;

  .topLayer {
    height: 100%;
    width: 80%;
    position: absolute;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: 2;
  }

  .heroImg {
    position: absolute;
    height: 70%;
    width: 50%;
    right: 100px;
    z-index: 3;
    top: 50%;
    right: -25%;
    transform: translate(-50%, -50%);
  }

  .bottomLayer {
    height: 100%;
    width: 65%;
    position: absolute;
    right: 0;
  }

  .left {
    position: absolute;
    width: 50%;
    left: 30px;
    top: 20%;
    z-index: 4;

    .textWrapper {
      h2 {
        font-size: 47px;
        font-weight: 700;
        margin-bottom: 10px;
      }

      p {
        font-size: 18px;
        font-weight: 400;
      }
    }

    .takeS {
      margin-top: 10px;
    }

    .card {
      margin-top: 50px;
      box-shadow: 0px 7px 16px 0px #0000001a;
      background-color: ${BaseColors?.white};
      padding: 20px;
      border-radius: 12px;
      text-align: center;
      max-width: 500px;
      margin-left: 50px;

      h3 {
        font-size: 28px;
      }

      .btnWrapper {
        margin-top: 15px;
        display: flex;
        gap: 10px;
        align-items: center;
        justify-content: center;
      }
    }
  }

  @media (max-width: 768px) {
    .left {
      width: calc(100% - 40px);
      left: 20px;

      .textWrapper {
        h2 {
          font-size: 30px;
        }

        p {
          font-size: 16px;
        }
      }

      .card {
        margin-left: 0px;
        margin-top: 40px;

        h3 {
          font-size: 20px;
        }
      }
    }
  }
`;
