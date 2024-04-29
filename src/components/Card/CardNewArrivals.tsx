import React from "react";
import { GoStarFill } from "react-icons/go";
import Favourite from "../Favourite/Favourite";

const CardNewArrivals: React.FC<CardProps> = ({
    name,
    src,
    alt,
    price,
    rating,
    fontSize_title,
    fontSize_price,
}) => {
    return (
        <div className="flex flex-row gap-3 justify-between">
            <div className="w-full">
                <img src={src} alt={alt} className="rounded-10" />
            </div>
            <div className="flex flex-col gap-3">
                <p className={`${fontSize_title} font-medium line-clamp-3`}>{name}</p>
                <p className={`${fontSize_price} font-normal`}>{price !== undefined ? (price).toLocaleString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + 'đ' : ''}</p>
                <span className="rating flex gap-2 items-center">
                    <GoStarFill className="text-[#FF4C3B] text-[13px]" />
                    <p className={`${fontSize_price} opacity-60`}>{rating}</p>
                </span>
            </div>
            <div>
                <Favourite/>
            </div>
        </div>
    );
};

export default CardNewArrivals;
