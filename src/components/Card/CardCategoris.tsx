import React from "react";

const CardCategoris: React.FC<CardProps> = ({
    name,
    src,
    alt,
    fontSize_title,
    quantityCate
}) => {
    return (
        <div className="relative">
            <div>
                <img src={src} alt={alt} className="rounded-10" />
            </div>
            <div className="mt-2">
                <p className={`${fontSize_title} font-medium line-clamp-2`}>{name}</p>
                <p className="font-medium opacity-70 text-12">{quantityCate} Items</p>
            </div>
        </div>
    );
};

export default CardCategoris;
