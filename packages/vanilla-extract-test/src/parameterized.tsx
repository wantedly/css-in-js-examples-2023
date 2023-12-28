import React from "react";
import { buttonStyle } from './parameterized.css.ts';

const Button: React.FC<{ $size: number } & React.ComponentPropsWithoutRef<"button">> = (props) => {
  const { $size, className, style, ...rest } = props;
  return <button
    {...rest}
    className={`${buttonStyle} ${className}`}
    style={{ ...style, "--size": `${$size}px` }}
  />;
};

declare module "csstype" {
  interface Properties {
    "--size"?: `${number}px`;
  }
}

export default () => {
  return <>
    <Button $size={10}>Test</Button>
    <Button $size={20}>Test</Button>
  </>;
};
