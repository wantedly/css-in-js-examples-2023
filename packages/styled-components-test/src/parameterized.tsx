import React from "react";
import { styled } from "styled-components";

const Button = styled.button<{ $size: number }>`
  background: red;
  font-size: ${(props) => props.$size}px;
`;

export default () => {
  return <>
    <Button $size={10}>Test</Button>
    <Button $size={20}>Test</Button>
  </>;
};
