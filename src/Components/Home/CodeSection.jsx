import "./styles.scss";
import DATA from "../../mystyle.json";
import { RedText } from "./common.styles";
import CodeItem from "../items/CodeItem";
import Code from "../../assets/code.svg";
const CodeSection = () => {
  return (
    <div className="paddingleft d-block App ">
      <div className="producttitle py-5">SOLUTIONS</div>
      <div className="producttext">
        Get up and running with our <RedText>infrastructure</RedText> as code
        solutions
      </div>
      <div className="py-5">
        <p className="cloudtext m-auto ptext">
          Save weeks of engineering hours by building your infrastructure on top
          of our infrastructure as code library that has been proven in
          production at dozens of companies and is maintained and supported by
          our DevOps experts.
        </p>
      </div>
      <div className="row">
        <div className="col-sm-6">
          {DATA.home.codeitems.map((item, id) => {
            return <CodeItem key={id} item={item} />;
          })}
        </div>
        <div className="col-sm-6">
          <img src={Code} alt="none" />
        </div>
      </div>
    </div>
  );
};
export default CodeSection;
