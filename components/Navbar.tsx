"use client";

import { images } from "@/config/images";
import Image from "next/image";
import React, { useMemo, useState } from "react";
import Button from "./ui/button";
import styled from "styled-components";
import useWindowSize from "@/lib/Hooks/useWindowSize";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
import { pagesLinks } from "@/config/StaticData";

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

          <Drawer open={menuOpen}>
            {pagesLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} onClick={() => setMenuOpen(false)}>
                  {link.label}
                </Link>
              </li>
            ))}
            <Button onClick={() => setMenuOpen(false)}>Contact us</Button>
          </Drawer>
        </>
      ) : (
        <Menu>
          {pagesLinks.map((link) => (
            <li key={link.label}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
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
`;

const Menu = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;

  li {
    list-style: none;
    font-weight: 500;

    a {
      text-decoration: none;
      color: #333;
    }
  }
`;

const MenuIcon = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Drawer = styled.ul<{ open: boolean }>`
  position: fixed;
  top: 80px;
  right: ${({ open }) => (open ? "20px" : "-100%")};
  background: white;
  border-radius: 10px;
  padding: 20px;
  width: calc(100% - 40px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: right 0.3s ease;

  li {
    list-style: none;
    font-weight: 500;

    a {
      text-decoration: none;
      color: #000;
    }
  }
`;
