import { motion } from "motion/react";
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
    <motion.button
      className="bg-amber-400 px-4 py-2 font-semibold text-white rounded hover:bg-amber-500"
      onClick={onClick}
      ref={ref}
      type={type}
      {...props}
      whileHover={{scale:1.05}}
    >
      {children}
    </motion.button>
  );
};

export default Button;
