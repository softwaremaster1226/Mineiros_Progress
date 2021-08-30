import DATA from "../../mystyle.json";
import { RedText } from "./common.styles";
import TechItem from "../items/TechItem";
const TechnicalSection = () => {
  return (
    <div className="row paddingtop34left205">
      <div className="col-sm-5">
        <div className="producttext">
          Technologies we <RedText>love!</RedText>
        </div>
      </div>
      <div className="col-sm-7">
        {DATA.home.techitems.map((item, id) => {
          return <TechItem key={id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default TechnicalSection;
