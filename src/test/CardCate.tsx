import { CardCategoris } from "../components/Card/index";
import card_test from "../assets/imgs/img_cate.jpg";

const CardCate = () => {
    return (
        <>
            <div className="flex overflow-x-auto overflow-y-hidden px-4 mt-4">
                <div className="flex gap-3 mb-4">
                    <div className="w-[140px]">
                        <CardCategoris
                            name="Clothes"
                            src={card_test}
                            alt="kitten"
                            quantityCate={1000}
                            fontSize_title='text-16'
                            className="bg-primary"
                        ></CardCategoris>
                    </div>
                    <div className="w-[140px]">
                        <CardCategoris
                            name="Clothes"
                            src={card_test}
                            alt="kitten"
                            quantityCate={1000}
                            fontSize_title='text-16'
                            className="bg-primary"
                        ></CardCategoris>
                    </div>
                    <div className="w-[140px]">
                        <CardCategoris
                            name="Clothes"
                            src={card_test}
                            alt="kitten"
                            quantityCate={1000}
                            fontSize_title='text-16'
                            className="bg-primary"
                        ></CardCategoris>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardCate