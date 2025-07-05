"use client";

import { images } from "@/config/images";
import { BaseColors } from "@/lib/themeConfig";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import styled from "styled-components";
import BlogsSection from "./blogs-section";

const testimonialsData = [
  {
    title: "Josh brollins",
    desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua",
  },
  {
    title: "Josh brollins",
    desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua",
  },
];

const TestimonialsBlogSection = () => {
  return (
    <TestimonialsBlogSectionWrapper>
      <section className="testimonialsSec container">
        <h1 className="title">Testimonials</h1>
        <div className="cards">
          {testimonialsData?.map((item, idx) => (
            <div key={idx} className="card">
              <Image
                src={images?.quote}
                height={40}
                width={30}
                alt="quoteRight"
                className="quote top"
              />

              <Image
                src={images?.quote}
                height={40}
                width={30}
                alt="quoteRight"
                className="bottomQuote"
              />
              <div className="top">
                <Image
                  src={images?.testimonialImg}
                  alt="testimonial"
                  height={56}
                  width={56}
                  className="img"
                />{" "}
                <h5>{item?.title}</h5>
              </div>
              <p>{item?.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="blogs container">
        <div className="topDiv">
          <h1>Blogs</h1>
          <Link href="/blogs" className="btn">
            View All
            <IoIosArrowRoundForward className="icon" />
          </Link>
        </div>
        <BlogsSection />
      </section>
    </TestimonialsBlogSectionWrapper>
  );
};

export default TestimonialsBlogSection;

const TestimonialsBlogSectionWrapper = styled.div`
  height: 160dvh;
  max-height: 1300px;
  overflow: hidden;
  width: 100%;
  background-image: url(${images?.testimonialsBlogBg});
  background-repeat: no-repeat;
  background-size: cover;
  /* background-position: center; */
  left: 0;
  margin-top: 100px;

  .title {
    font-size: 47px;
    font-weight: 700;
    margin-bottom: 60px;
  }

  .testimonialsSec {
    padding: 100px 0;

    .cards {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 50px;

      .card {
        box-shadow: 0px 3px 20px 0px #0000001a;
        width: calc(50% - 25px);
        padding: 30px;
        border-radius: 12px;
        background-color: ${BaseColors?.white};
        position: relative;

        .quote {
          position: absolute;
          top: -20px;
          left: 20px;
        }

        .bottomQuote {
          position: absolute;
          bottom: -20px;
          right: 20px;
          rotate: 180deg;
        }

        .top {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 10px;

          .img {
            border-radius: 50%;
          }

          h5 {
            font-size: 18px;
            font-weight: 700;
            color: #000;
          }
        }
        p {
          font-size: 16px;
          font-weight: 400;
          color: #5e5e5e;
        }
      }
    }
  }

  .blogs {
    .topDiv {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px 0;

      .btn {
        color: ${BaseColors?.blueColor};
        text-decoration: none;
        display: flex;
        align-items: center;
        grid-template-columns: 6px;

        .icon {
          font-size: 25px;
        }
      }
    }
  }
`;
