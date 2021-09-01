import CloudButton from "./CloudButton";
const CloudItem = ({ item: { icon, title, text } }) => {
  return (
    <div className="pt-5">
      <CloudButton item={icon} />
      <h3 className="pt-5">{title}</h3>
      <p className="py-1 m-auto" style={{ width: 495, color: "#5A5766" }}>
        {text}{" "}
      </p>
    </div>
  );
};
export default CloudItem;
