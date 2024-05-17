import React from "react";

interface Props {
  className: string;
}

// This approach is actually deprecated

/* @ts-expect-error */
export const Button: React.FunctionComponent<Props> = (props) => {
  return {
    ohDear: "123",
  };
};

const Parent = () => {
  return (
    <>
      <Button className="my-class"></Button>
    </>
  );
};
