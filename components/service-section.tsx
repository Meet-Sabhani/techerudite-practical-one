"use client";

import { images } from "@/config/images";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

const serviceData = [
  {
    img: images?.serviceAccount,
    title: "Audit & Account",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  },
  {
    img: images?.serviceBudget,
    title: "Budget & Projections",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  },
  {
    img: images?.servicePayroll,
    title: "Payroll & Bookkeeping",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  },
  {
    img: images?.serviceIT,
    title: "Software Training & IT",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim",
  },
  {
    img: images?.serviceTax,
    title: "Tax planning & Returns",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  },
  {
    img: images?.serviceManagement,
    title: "Management Information",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magn. Ut enim ad minim veniam",
  },
];

const ServiceSection = () => {
  return (
    <ServicesWrapper id="services">
      <h2 className="title">Services</h2>
      <div className="grid">
        {serviceData.map((item, index) => (
          <div className="card" key={index}>
            {item.img && (
              <img src={item.img} alt={item.title} className="image" />
            )}
            <h3 className="card-title">{item.title}</h3>
            <p className="card-desc">{item.desc}</p>
          </div>
        ))}
      </div>
      <div className="rightImg">
        <Image
          src={images?.serviceBgRight}
          alt="img-right"
          fill
          objectFit="contain"
        />
      </div>
    </ServicesWrapper>
  );
};

export default ServiceSection;

const ServicesWrapper = styled.section`
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;

  .title {
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 2rem;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
  }

  .rightImg {
    position: absolute;
    right: -200px;
    top: 100px;
    height: 600px;
    width: 600px;
  }

  .card {
    background-color: #fff;
    padding: 1.5rem;
    border-radius: 16px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.06);
    max-width: 340px;
    margin: 0 auto;
    text-align: center;
    z-index: 1;
  }

  .image {
    width: 60px;
    height: 60px;
    object-fit: contain;
    margin-bottom: 1rem;
  }

  .card-title {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.75rem;
  }

  .card-desc {
    font-size: 0.95rem;
    color: #666;
  }

  @media (max-width: 768px) {
    .title {
      font-size: 24px;
    }

    .rightImg {
      /* display: none; */
    }
  }
`;
