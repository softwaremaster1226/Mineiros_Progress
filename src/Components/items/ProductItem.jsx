import ImgButton from "./ImgButton";
const ProductItem = ({ item: { icon, title, text } }) => {
  return (
    <div className="col-sm-6 pt-5">
      <ImgButton item={icon} />
      <h3 className="pt-5">{title}</h3>
      <p className="py-1">{text} </p>
    </div>
  );
};
export default ProductItem;
