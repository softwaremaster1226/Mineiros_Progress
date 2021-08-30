import "./styles.scss";
const ImgButton = ({ item }) => {
  return (
    <span className="imgButton">
      <i class={item}></i>
    </span>
  );
};
export default ImgButton;
