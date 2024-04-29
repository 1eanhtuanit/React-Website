import { CardProduct } from "../components/Card/index";
import card_test from "../assets/imgs/80c8f240cadf64813dce.jpg";

const NewArrivals1 = () => {
    return (
        <div className="flex px-4 mt-4 justify-between flex-wrap">
            <div className="w-[164px] mb-3">
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
            <div className="w-[164px] mb-3">
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
            <div className="w-[164px] mb-3">
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
            <div className="w-[164px] mb-3">
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
    )
}

export default NewArrivals1