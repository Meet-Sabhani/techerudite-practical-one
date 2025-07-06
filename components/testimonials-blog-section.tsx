"use client";

import { images } from "@/config/images";
import { BaseColors } from "@/lib/themeConfig";
import Image from "next/image";
import Link from "next/link";
import React, { useMemo } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import styled from "styled-components";
import BlogsSection from "./blogs-section";
import useWindowSize from "@/lib/Hooks/useWindowSize";
import { motion } from "framer-motion";

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
  const { width } = useWindowSize();
  const isMobileView = useMemo(() => (width ?? 0) < 992, [width]);

  return (
    <TestimonialsBlogSectionWrapper>
      <section className="testimonialsSec container">
        <motion.h1
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="title"
        >
          Testimonials
        </motion.h1>

        <div className="cards">
          {testimonialsData?.map((item, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.4 }}
              viewport={{ once: true }}
              key={idx}
              className="card"
            >
              <Image
                src={images?.quote}
                height={isMobileView ? 30 : 40}
                width={isMobileView ? 20 : 30}
                alt="quoteRight"
                className="quote top"
              />

              <Image
                src={images?.quote}
                height={isMobileView ? 30 : 40}
                width={isMobileView ? 20 : 30}
                alt="quoteRight"
                className="bottomQuote"
              />
              <div className="top">
                <Image
                  src={images?.testimonialImg}
                  alt="testimonial"
                  height={isMobileView ? 40 : 56}
                  width={isMobileView ? 40 : 56}
                  className="img"
                />{" "}
                <h5>{item?.title}</h5>
              </div>
              <p>{item?.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="blogs container">
        <div className="topDiv">
          <motion.h1
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="title"
          >
            Blogs
          </motion.h1>

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
  padding: 0 20px;

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

  @media (max-width: 768px) {
    margin-top: 50px;

    .title {
      font-size: 24px;
      text-align: center;
    }

    .testimonialsSec {
      padding: 50px 0;

      .cards {
        flex-direction: column;

        .card {
          width: 100%;
          padding: 15px;

          .top {
            margin-bottom: 5px;

            h5 {
              font-size: 16px;
            }
          }
          p {
            font-size: 14px;
          }
        }
      }
    }
  }
`;
