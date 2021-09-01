import { useState } from "react";
const CodeItem = ({ item: { title, text, toggle } }) => {
  const [show, setShow] = useState(toggle);
  const handleClick = () => setShow(!show);
  return (
    <div className="text-lg-start">
      <h5>
        <span className="redtext pe-3" onClick={handleClick}>
          {show ? "+" : "-"}
        </span>
        {title}
      </h5>
      <div className="py-2 px-5" style={{ color: "#5A5766" }}>
        {show ? text : ""}
      </div>
    </div>
  );
};
export default CodeItem;
