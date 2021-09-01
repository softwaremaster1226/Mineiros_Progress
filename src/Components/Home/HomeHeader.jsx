import "./styles.scss";
// import { Container, Row, Col } from "react-bootstrap";
import { RedButton, TransButton } from "./common.styles";
import DATA from "../../mystyle.json";
import ramda from "../../assets/ramda.svg";
import cup from "../../assets/cup.svg";
import img53 from "../../assets/img53.svg";
import img5 from "../../assets/5.svg";
import homesign from "../../assets/home-sign.svg";
import RedText from "./common.styles";
const HomeHeader = () => {
  return (
    <div className="row pt-5">
      <div className="position-relative paddingleft col">
        <img src={ramda} className="ramda" alt="none" />

        <div className="devtitle">
          <div className="devtext">{DATA.home.devtitle}</div>
          <div className="py-5">{DATA.home.devtext}</div>
        </div>

        <div className="float-left">
          <RedButton className="me-3">About us</RedButton>
          <TransButton>
            <i class="fa fa-phone LIGHT"></i> Talk to the experts
          </TransButton>
        </div>

        <img src={cup} className="cup" alt="none" />
        <img src={img53} className="img53" alt="none" />
      </div>
      <div className="col">
        <img src={img5} className="img5" alt="none" />
        <img src={homesign} className="homesign" alt="none" />
      </div>
    </div>
  );
};
export default HomeHeader;
