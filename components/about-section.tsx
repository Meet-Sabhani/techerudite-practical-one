"use client";

import { images } from "@/config/images";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import Button from "./ui/button";
import { BaseColors } from "@/lib/themeConfig";

const AboutSection = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="left">
          <h3>About us</h3>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor Lorem ipsum dolor sit amet consetetur
            sadipscing elitr
          </p>
          <Button>Contact us</Button>
        </div>
        <div className="rightImg">
          <Image
            src={images?.aboutBanner}
            alt="About Us"
            width={600}
            height={400}
            className="about-image"
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default AboutSection;

// Styled Wrapper with background only
const Wrapper = styled.section`
  height: 150dvh;
  width: 100%;
  background-image: url(${images?.aboutBg});
  background-repeat: no-repeat;
  background-size: cover; /* Changed from contain to cover */
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5%;
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
    display: flex;
    justify-content: center;
  }

  .about-image {
    object-fit: contain;
    border-radius: 12px;
  }

  @media (max-width: 768px) {
    .container {
      flex-direction: column;
      text-align: center;
    }

    .rightImg {
      margin-top: 2rem;
    }
  }
`;
