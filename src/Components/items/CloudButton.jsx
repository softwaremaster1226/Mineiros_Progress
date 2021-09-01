import "./styles.scss";
const CloudButton = ({ item }) => {
  return (
    <span className="clouditemiconsize">
      <i class={item}></i>
    </span>
  );
};
export default CloudButton;
