import React from "react";

const ButtonPrimary: React.FC<ButtonProps> = ({
  onClick,
  type,
  disabled,
  children,
  className,
}) => {
  return (
    <button
      className={`bg-primary text-white px-4 py-2 rounded-md ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
