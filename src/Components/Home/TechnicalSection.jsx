import DATA from "../../mystyle.json";
import { RedText } from "./common.styles";
import "./styles.scss";
import TechItem from "../items/TechItem";
const TechnicalSection = () => {
  return (
    <div className="row paddingtop34left205">
      <div className="col-sm-6">
        <div className="producttext techbox">
          Technologies we <RedText>love!</RedText>
        </div>
      </div>
      <div className="col-sm-6 mr-1">
        {DATA.home.techitems.map((item, id) => {
          return <TechItem key={id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default TechnicalSection;
