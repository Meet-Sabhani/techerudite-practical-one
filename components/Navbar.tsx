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
import { AnimatePresence, motion } from "framer-motion";

export const Navbar = () => {
  const { width } = useWindowSize();
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobileView = useMemo(() => (width ?? 0) < 992, [width]);

  return (
    <NavbarWrapper>
      <Link href="/">
        <Image
          src={images?.logo}
          height={isMobileView ? 40 : 50}
          width={isMobileView ? 80 : 100}
          quality={100}
          priority
          alt="logo"
          objectFit="contain"
        />
      </Link>

      {isMobileView ? (
        <>
          <MenuIcon onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </MenuIcon>

          <AnimatePresence>
            {menuOpen && (
              <MobileDrawer
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.3 }}
              >
                <DrawerContent>
                  {pagesLinks.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} onClick={() => setMenuOpen(false)}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                  <Button onClick={() => setMenuOpen(false)}>Contact us</Button>
                </DrawerContent>
              </MobileDrawer>
            )}
          </AnimatePresence>
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
  max-width: calc(100% - 40px);
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 8px 15px;
  }
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
  z-index: 1100;
`;

const MobileDrawer = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 80%;
  max-width: 300px;
  height: 100vh;
  background-color: #fff;
  box-shadow: -4px 0 15px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const DrawerContent = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 24px;
  gap: 20px;

  li {
    font-weight: 500;

    a {
      text-decoration: none;
      color: #333;
    }
  }
`;
