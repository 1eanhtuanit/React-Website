import { CardBrands } from "../components/Card/index";
import card_test from "../assets/imgs/img_cate.jpg";

const Brands = () => {
    return (
        <>
            <div className="flex overflow-x-auto overflow-y-hidden px-4 mt-4">
                <div className="flex gap-3 mb-4">
                    <div className="w-[120px]">
                        <CardBrands
                            name="Nike"
                            src={card_test}
                            alt="kitten"
                            fontSize_title='text-16'
                            className="bg-primary"
                        ></CardBrands>
                    </div>
                    <div className="w-[120px]">
                        <CardBrands
                            name="Samsung"
                            src={card_test}
                            alt="kitten"
                            fontSize_title='text-16'
                            className="bg-primary"
                        ></CardBrands>
                    </div>
                    <div className="w-[120px]">
                        <CardBrands
                            name="Intel"
                            src={card_test}
                            alt="kitten"
                            fontSize_title='text-16'
                            className="bg-primary"
                        ></CardBrands>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Brands