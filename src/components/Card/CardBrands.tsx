import React from "react";

const CardBrands: React.FC<CardProps> = ({
    name,
    src,
    alt,
    fontSize_title,
}) => {
    return (
        <div className="relative">
            <div>
                <img src={src} alt={alt} className="rounded-10" />
            </div>
            <div className="mt-2 flex items-center justify-center">
                <p className={`${fontSize_title} font-medium line-clamp-2`}>{name}</p>
            </div>
        </div>
    );
};

export default CardBrands;
