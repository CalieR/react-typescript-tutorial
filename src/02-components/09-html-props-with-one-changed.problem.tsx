import { ComponentProps } from "react";
import { Equal, Expect } from "../helpers/type-utils";

//  use a type:

// type newProps = Omit<ComponentProps<"input">, "onChange"> & {
//   onChange: (value: string) => void;
// };

// or an interface - slightly different syntax:

interface newProps extends Omit<ComponentProps<"input">, "onChange"> {
  onChange: (value: string) => void;
}

export const Input = (props: newProps) => {
  return (
    <input
      {...props}
      onChange={(e) => {
        props.onChange(e.target.value);
      }}
    ></input>
  );
};

const Parent = () => {
  return (
    <Input
      onChange={(e) => {
        console.log(e);

        type test = Expect<Equal<typeof e, string>>;
      }}
    ></Input>
  );
};
