import React from "react";
import { TextProps } from "./Type";

const TextPrimary: React.FC<TextProps> = ({ size, color, Children }) => {
  return <span className={`text-${size} text-${color}`}>{Children}</span>;
};

export default TextPrimary;
