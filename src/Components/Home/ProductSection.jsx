import DATA from "../../mystyle.json";
import { RedText } from "./common.styles";
import ProductItem from "../items/ProductItem";
const ProductSection = () => {
  return (
    <div class="paddingtop34left205">
      <div>
        <div className="producttitle py-5">{DATA.home.producttitle}</div>
        <div className="producttext">
          We build and manage <RedText>infrastructure</RedText> so your team can
          focus on your product ..
        </div>
      </div>
      <div className="row">
        {DATA.home.productitems.map((item, id) => {
          return <ProductItem key={id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default ProductSection;
