import React from 'react';

interface ButtonProps {
  className: string;
  children: React.ReactNode,
  onClick: React.MouseEventHandler;
}

// can add specific elements in <> to make the handler more specific

export const Button = ({ children, className, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};
