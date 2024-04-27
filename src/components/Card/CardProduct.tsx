import React from "react";

const CardProduct: React.FC<CardProps> = ({
  name,
  description,
  src,
  alt,
  price,
  rating,
}) => {
  return (
    <div className="">
      <div>
        <img src={src} alt={alt} className="w-[140px] h-[160] rounded-10" />
      </div>
      <div className="mt-[5px]">
        <p className="text-12 font-Space font-medium line-clamp-2 ">{name}</p>
        <p>{description}</p>
        <div className="flex justify-between">
          <p className="text-12 font-Space font-medium">${price}</p>
          <span className="rating">
            <p>{rating}</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
