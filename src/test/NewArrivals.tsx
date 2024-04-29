import { CardNewArrivals } from "../components/Card/index";
import card_test from "../assets/imgs/img_arri.jpg";

const NewArrivals = () => {
    return (
        <div className="flex flex-col px-4 mt-4">
            <div className="mb-3">
                <CardNewArrivals
                    name="Samsung Galaxy A14 5G (8 GB RAM, 128 GB ROM, Light Green)"
                    src={card_test}
                    alt="kitten"
                    price={1000}
                    rating={5}
                    // description="abcdefg"
                    className="bg-primary"
                ></CardNewArrivals>
            </div>
            <div className="mb-3">
                <CardNewArrivals
                    name="Samsung Galaxy A14 5G (8 GB RAM, 128 GB ROM, Light Green)"
                    src={card_test}
                    alt="kitten"
                    price={1000}
                    rating={5}
                    // description="abcdefg"
                    className="bg-primary"
                ></CardNewArrivals>
            </div>
            <div className="mb-3">
                <CardNewArrivals
                    name="Samsung Galaxy A14 5G (8 GB RAM, 128 GB ROM, Light Green)"
                    src={card_test}
                    alt="kitten"
                    price={1000}
                    rating={5}
                    // description="abcdefg"
                    className="bg-primary"
                ></CardNewArrivals>
            </div>
        </div>
    )
}

export default NewArrivals