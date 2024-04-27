import React from "react";

const InputSecondary: React.FC<InputProps> = ({
  type,
  value,
  onChange,
  placeholder,
  className,
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`bg-secondary ${className}`}
    />
  );
};

export default InputSecondary;
