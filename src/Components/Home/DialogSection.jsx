import "./styles.scss";
import DATA from "../../mystyle.json";
import { RedText } from "./common.styles";
import DialogItem from "../items/DialogItem";
const DialogSection = () => {
  return (
    <div className="backgroundcolor paddingleft d-block App ">
      <div className="dialogtitle">WhAT OUR CUSTOMERS ARE SAYING</div>
      <div className="dialogtext">
        We help our customers to get a competitive edge through{" "}
        <RedText>cloud technology</RedText>
        so they can innovate faster
      </div>
      <div className="row py-5">
        {DATA.home.dialogitems.map((item, id) => {
          return <DialogItem key={id} item={item} />;
        })}
      </div>
    </div>
  );
};
export default DialogSection;
