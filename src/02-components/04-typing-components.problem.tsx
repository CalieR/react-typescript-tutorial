import React from "react";

// Initially I just declared className :string directly
// Refactored to this approach as I like abstraction and it's more readable:

export interface ButtonProps {
  className: string;
}

export const Button = (props: ButtonProps) => {
  return <button className={props.className}></button>;
};

const Parent = () => {
  return (
    <>
      {/* @ts-expect-error */}
      <Button></Button>

      <Button className="my-class"></Button>
    </>
  );
};
