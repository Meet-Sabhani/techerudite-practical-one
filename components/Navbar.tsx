"use client";

import { images } from "@/config/images";
import Image from "next/image";
import React, { useMemo, useState } from "react";
import Button from "./ui/button";
import styled from "styled-components";
import useWindowSize from "@/lib/Hooks/useWindowSize";
import { FiMenu, FiX } from "react-icons/fi"; // icons
import Link from "next/link";

export const Navbar = () => {
  const { width } = useWindowSize();
  const [menuOpen, setMenuOpen] = useState(false);

  const isMobileView = useMemo(() => (width ?? 0) < 992, [width]);

  return (
    <NavbarWrapper className="container">
      <Link href="/">
        <Image
          src={images?.logo}
          height={50}
          width={100}
          alt="logo"
          objectFit="contain"
        />
      </Link>

      {isMobileView ? (
        <>
          <MenuIcon onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </MenuIcon>

          {menuOpen && (
            <MobileMenu>
              <li>Services</li>
              <li>About us</li>
              <li>
                <Link href="/blogs"> Blogs</Link>
              </li>
              <li>Studies</li>
              <Button>Contact us</Button>
            </MobileMenu>
          )}
        </>
      ) : (
        <Menu>
          <li>Services</li>
          <li>About us</li>
          <li>
            <Link href="/blogs"> Blogs</Link>
          </li>
          <li>Studies</li>
          <Button>Contact us</Button>
        </Menu>
      )}
    </NavbarWrapper>
  );
};

const NavbarWrapper = styled.header`
  position: fixed;
  top: 20px;
  left: 0;
  right: 0;
  z-index: 999;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 12px;

  @media (max-width: 992px) {
    flex-direction: row;
  }
`;

const Menu = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;

  li {
    list-style: none;
    cursor: pointer;
    font-weight: 500;
  }
`;

const MenuIcon = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const MobileMenu = styled.ul`
  position: absolute;
  top: 100%;
  right: 20px;
  background: white;
  border-radius: 10px;
  padding: 10px 20px;
  margin-top: 10px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  gap: 12px;

  li {
    list-style: none;
    cursor: pointer;
    font-weight: 500;
  }
`;
