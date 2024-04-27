import "./App.css";
import { CardProduct } from "./components/Card/index";
function App() {
  return (
    <div className="flex gap-10 px-[10px] mt-[10px]">
      <CardProduct
        name="Samsung Galaxy A14 5G (8 GB RAM, 128 GB ROM, Light Green)"
        src="https://cdn.tgdd.vn/Products/Images/42/303891/iphone-15-plus-xanh-la-128gb-thumb-600x600.jpg"
        alt="kitten"
        price={1000}
        rating={5}
        // description="abcdefg"
        className="bg-primary"
      ></CardProduct>
      <CardProduct
        name="Samsung Galaxy A14 5G (8 GB RAM, 128 GB ROM, Light Green)"
        src="https://cdn.tgdd.vn/Products/Images/42/303891/iphone-15-plus-xanh-la-128gb-thumb-600x600.jpg"
        alt="kitten"
        price={1000}
        rating={5}
        // description="abcdefg"
        className="bg-primary"
      ></CardProduct>
      <CardProduct
        name="Samsung Galaxy A14 5G (8 GB RAM, 128 GB ROM, Light Green)"
        src="https://cdn.tgdd.vn/Products/Images/42/303891/iphone-15-plus-xanh-la-128gb-thumb-600x600.jpg"
        alt="kitten"
        price={1000}
        rating={5}
        // description="abcdefg"
        className="bg-primary"
      ></CardProduct>
    </div>
  );
}

export default App;
