"use client";

import { images } from "@/config/images";
import { pagesLinks } from "@/config/StaticData";
import { BaseColors } from "@/lib/themeConfig";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="container">
        <section className="top">
          <div className="left">
            <h3 className="title">
              Tagline will go here. Lorem ipsum d oler sit amet…
            </h3>
            <p className="emil">user@email.com</p>
          </div>
          <div className="right">
            <div className="part">
              <h3>Address</h3>
              <p>
                101 Office No, <br />
                Road name,
                <br />
                India
              </p>
            </div>
            <div className="part">
              <h3>Contact</h3>
              <p>user@email.com </p>
              <p>(276) 341-7690</p>
            </div>
          </div>
        </section>
        <div className="bottom">
          <Link href="/">
            <Image
              src={images?.logo}
              height={50}
              width={100}
              alt="logo"
              objectFit="contain"
            />
          </Link>

          <ul className="links">
            {pagesLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
          <p>© 2022. All rights reserved</p>
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.footer`
  background: #e7f1f2;
  padding: 100px 100px 20px;

  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 100px;

    .left {
      width: 50%;
      border-right: 1px solid #000;

      .title {
        font-size: 28px;
        font-weight: 700;
        color: ${BaseColors?.texBlack};
        margin-bottom: 20px;
        line-height: 32px;
      }

      p {
        color: ${BaseColors?.skyBlue};
        font-weight: 700;
        font-size: 22px;
      }
    }

    .right {
      flex: 1;
      padding: 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .part {
        width: 50%;

        h3 {
          color: ${BaseColors?.texBlack};
          margin-bottom: 15px;
        }

        p {
          color: ${BaseColors?.textGrey};
          line-height: 30px;
        }
      }
    }
  }

  .bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;

    .links {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      justify-content: center;
      gap: 10px;

      li {
        list-style: none;
        font-weight: 500;

        a {
          text-decoration: none;
          color: #333;
        }
      }
    }
  }

  @media (max-width: 992px) {
    padding: 70px 20px 20px;
    .top {
      padding-bottom: 30px;
    }
  }

  @media (max-width: 768px) {
    padding: 50px 20px 20px;

    .top {
      flex-direction: column;

      .left {
        width: 100%;
        border-right: none;

        .title {
          font-size: 20px;
          margin-bottom: 10px;
          line-height: 25px;
        }

        p {
          font-size: 16px;
        }
      }

      .right {
        width: 100%;
        padding: 20px 0;

        .part {
          h3 {
            font-size: 18px;
            margin-bottom: 8px;
          }

          p {
            font-size: 16px;
            line-height: 24px;
          }
        }
      }
    }

    .bottom {
      flex-direction: column;
    }
  }
`;
