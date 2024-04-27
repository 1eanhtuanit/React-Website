import React from "react";
import { HeartProps } from "./type";

const Heart: React.FC<HeartProps> = ({ className, onClick }) => {
  return (
    <svg
      className={`${className}`}
      onClick={onClick}
      xmlns="XXXXXXXXXXXXXXXXXXXXXXXXXX"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z" />
    </svg>
  );
};

export default Heart;
