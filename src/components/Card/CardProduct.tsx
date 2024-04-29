import React from "react";
import { GoStarFill } from "react-icons/go";
import Favourite from "../Favourite/Favourite";

const CardProduct: React.FC<CardProps> = ({
    name,
    description,
    src,
    alt,
    price,
    price_old,
    rating,
    fontSize_title,
    fontSize_price,
    fontSize_price_old
}) => {
    return (
        <div className="relative">
            <div>
                <img src={src} alt={alt} className="rounded-10" />
            </div>
            <div className="absolute z-10 right-2 top-2">
                <Favourite/>
            </div>
            <div className="mt-2">
            <p className={`${fontSize_title} font-medium line-clamp-2`}>{name}</p>
                <p>{description}</p>
                <div className="flex justify-between items-center mt-1">
                    <div className="flex gap-3 items-center">
                        <p className={`${fontSize_price} font-normal`}>{price !== undefined ? (price).toLocaleString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + 'đ' : ''}</p>
                        <p className={`${fontSize_price_old} font-normal line-through opacity-70`}>{price_old !== undefined ? (price_old).toLocaleString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + 'đ' : ''}</p>
                    </div>
                    <span className="rating flex justify-between gap-[3px] items-center">
                        <GoStarFill className="text-[#FF4C3B] text-[13px]" />
                        <p className={`${fontSize_price} opacity-60`}>{rating}</p>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default CardProduct;
