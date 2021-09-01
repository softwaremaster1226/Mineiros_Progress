import "./styles.scss";
import DATA from "../../mystyle.json";
import cloudred from "../../assets/cloud-red.svg";
import { RedText } from "./common.styles";
import CloudItem from "../items/CloudItem";
const CloudSection = () => {
  return (
    <div className="paddingleft d-block App ">
      <div>
        <img src={cloudred} alt="none" />
      </div>
      <div className="producttitle py-5">WHY MINEIROS</div>
      <div className="producttext">
        A better way of managing
        <RedText>cloud environments</RedText>
      </div>
      <div className="py-5">
        <p className="cloudtext m-auto ptext">
          Save weeks of engineering time by choosing from pre-configured
          end-to-end architectures such as Kubernetes, ECS, Compute and
          Serverless.
        </p>
      </div>
      <div className="row">
        {DATA.home.clouditems.map((item, id) => {
          return <CloudItem key={id} item={item} />;
        })}
      </div>
    </div>
  );
};
export default CloudSection;
