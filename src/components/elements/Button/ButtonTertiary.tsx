import React from "react";

const ButtonTertiary: React.FC<ButtonProps> = ({
  onClick,
  type,
  disabled,
  children,
  className,
}) => {
  return (
    <button
      className={`bg-tertiary text-black px-4 py-2 rounded-30 border-4 border-secondary  ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default ButtonTertiary;
