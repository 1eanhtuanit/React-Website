import { CardProduct } from "../components/Card/index";
import card_test from "../assets/imgs/img_test.jpg";

const CardTest = () => {
    return (
        <div className="flex overflow-x-auto overflow-y-hidden px-4 mt-4">
            <div className="flex gap-3 mb-4">
                <div className="w-[140px]">
                    <CardProduct
                        name="Samsung Galaxy A14 5G (8 GB RAM, 128 GB ROM, Light Green)"
                        src={card_test}
                        alt="kitten"
                        price={1000}
                        rating={5}
                        // description="abcdefg"
                        className="bg-primary"
                    ></CardProduct>
                </div>
                <div className="w-[140px]">
                    <CardProduct
                        name="Samsung Galaxy A14 5G (8 GB RAM, 128 GB ROM, Light Green)"
                        src={card_test}
                        alt="kitten"
                        price={1000}
                        rating={5}
                        // description="abcdefg"
                        className="bg-primary"
                    ></CardProduct>
                </div>
                <div className="w-[140px]">
                    <CardProduct
                        name="Samsung Galaxy A14 5G (8 GB RAM, 128 GB ROM, Light Green)"
                        src={card_test}
                        alt="kitten"
                        price={1000}
                        rating={5}
                        // description="abcdefg"
                        className="bg-primary"
                    ></CardProduct>
                </div>
            </div>
        </div>
    )
}

export default CardTest