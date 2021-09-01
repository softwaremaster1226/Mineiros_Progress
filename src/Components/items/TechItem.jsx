import "./styles.scss";
const TechItem = ({ item: { icon, color } }) => {
  return (
    <span
      className="imgButton m-lg-4 d-inline-block"
      style={{ backgroundColor: color }}
    >
      <i class={icon}></i>
    </span>
  );
};
export default TechItem;
