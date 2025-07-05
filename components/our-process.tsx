"use client";

import { images } from "@/config/images";
import { BaseColors } from "@/lib/themeConfig";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

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
        <h2>Our Process</h2>
        <div className="stepWrapper">
          {steps?.map((item, idx) => {
            return (
              <div key={idx} className="step">
                <div className="frameWrapper">
                  <Image src={images?.ProcessFrame} alt="frame" fill />
                </div>
                <div className="textContainer">
                  <h4> {item?.title}</h4>
                  <p>{item?.desc}</p>
                </div>
              </div>
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
  padding-top: 180px;
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
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    .step {
      height: 280px;
      width: 340px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

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
`;
