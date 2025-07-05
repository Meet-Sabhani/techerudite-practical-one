"use client";

import { BaseColors } from "@/lib/themeConfig";
import React from "react";
import styled from "styled-components";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <ButtonWrapper {...props}>{children}</ButtonWrapper>;
};

export default Button;

const ButtonWrapper = styled.button`
  background-color: ${BaseColors?.primary};
  color: ${BaseColors?.white};
  padding: 10px 25px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
`;
