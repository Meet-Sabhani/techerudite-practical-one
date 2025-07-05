"use client";

import { BaseColors } from "@/lib/themeConfig";
import React from "react";
import styled from "styled-components";

const Button = ({ ...props }) => {
  return <ButtonWrapper {...props}>Button</ButtonWrapper>;
};

export default Button;

const ButtonWrapper = styled.button`
  background-color: ${BaseColors?.primary};
  color: ${BaseColors?.white};
  padding: 10px 25px;
  border: none;
  border-radius: 50px;
`;
