import React, { Ref } from "react";

const Button = ({
  children,
  onClick,
  disabled,
  ref,
  ...props
}: {
  children: string;
  onClick?: () => void;
  disabled?: boolean;
  ref?: Ref<HTMLButtonElement>;
}) => {
  return (
    <button
      className="bg-amber-400 px-4 py-2 font-semibold text-white rounded hover:bg-amber-500"
      onClick={onClick}
      disabled={disabled}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
