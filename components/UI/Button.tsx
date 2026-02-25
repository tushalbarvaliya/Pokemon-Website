import React, { Ref } from "react";

const Button = ({
  children,
  onClick,
  ref,
  type='button',
  ...props
}: {
  children: string;
  onClick?: () => void;
  ref?: Ref<HTMLButtonElement>;
  type?: 'button'|'reset'|'submit';
}) => {
  return (
    <button
      className="bg-amber-400 px-4 py-2 font-semibold text-white rounded hover:bg-amber-500"
      onClick={onClick}
      ref={ref}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
