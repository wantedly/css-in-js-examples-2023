/// <reference types="styled-jsx" />

import React from "react";

const Button: React.FC<{ $size: number } & React.ComponentPropsWithoutRef<"button">> = (props) => {
  const { $size, children, ...rest } = props;
  return <button {...rest}>
    {props.children}
    <style jsx>{`
      button {
        background: red;
        font-size: ${$size}px;
      }
    `}</style>
  </button>;
};

export default () => {
  return <>
    <Button $size={10}>Test</Button>
    <Button $size={20}>Test</Button>
  </>;
};
