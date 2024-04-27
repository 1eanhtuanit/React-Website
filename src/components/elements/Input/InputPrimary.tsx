import React from "react";

const InputPrimary: React.FC<InputProps> = ({
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
      className={`bg-primary ${className}`}
    />
  );
};

export default InputPrimary;
