export const Component = () => {
  return (
    <div
      // How do I figure out what type aria-posinset expects?
      aria-posinset={123}  // expects a number or undefined
      // How do I figure out what type onChange expects?
      onChange={() => {}} // expects some sort of handler

      // How do I get autocomplete with JSX?
      // ctrl + space bar to bring up a list of options
    />
  );
};
