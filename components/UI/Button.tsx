import React from "react";

const Button = ({
  children,
  ...props
}: {
  children: React.ReactNode;
}) => {
  return (
    <button
      className="bg-amber-400 px-4 py-2 font-semibold text-white rounded hover:bg-amber-500"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
