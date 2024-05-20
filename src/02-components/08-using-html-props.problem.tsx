import React, { ButtonHTMLAttributes } from "react";

// more elegant - replace with any element you want to expose all native types to ...rest:
// export const Button = ({ className, ...rest }: ComponentProps<"button">) => {

export const Button = ({ className, ...rest }: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button {...rest} className={`default-classname ${className}`}></button>
  );
};

const Parent = () => {
  return <Button onClick={() => {}} type="button"></Button>;
};
