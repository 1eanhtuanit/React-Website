import React from "react";

const ButtonSecondary: React.FC<ButtonProps> = ({
  onClick,
  type,
  disabled,
  children,
  className,
}) => {
  return (
    <button
      className={`bg-secondary text-white rounded-md px-4 py-2 ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default ButtonSecondary;
