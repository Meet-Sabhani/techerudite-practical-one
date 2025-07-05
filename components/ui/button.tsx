"use client";

import { BaseColors } from "@/lib/themeConfig";
import React from "react";
import styled, { keyframes } from "styled-components";
import { FiLoader } from "react-icons/fi";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  loading = false,
  ...props
}) => {
  return (
    <ButtonWrapper
      disabled={loading || props.disabled}
      $loading={loading}
      {...props}
    >
      {loading ? (
        <>
          <Spinner />
          <span style={{ marginLeft: "8px" }}>{children}</span>
        </>
      ) : (
        children
      )}
    </ButtonWrapper>
  );
};

export default Button;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Spinner = styled(FiLoader)`
  animation: ${spin} 1s linear infinite;
  font-size: 1.2rem;
`;

const ButtonWrapper = styled.button<{ $loading: boolean }>`
  background-color: ${BaseColors?.primary};
  color: ${BaseColors?.white};
  padding: 10px 25px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  opacity: ${({ $loading }) => ($loading ? 0.5 : 1)};
  pointer-events: ${({ $loading }) => ($loading ? "none" : "auto")};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: opacity 0.2s ease;
`;
