import "./styles.scss";
const TechItem = ({ item: { icon, color } }) => {
  return (
    <span className="imgButton" style={{ backgroundColor: color }}>
      <i class={icon}></i>
    </span>
  );
};
export default TechItem;
