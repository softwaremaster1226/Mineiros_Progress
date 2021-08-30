import "./styles.scss";
// import { Container, Row, Col } from "react-bootstrap";
import { RedButton, TransButton } from "./common.styles";
import DATA from "../../mystyle.json";
import ramda from "../../assets/ramda.svg";
import cup from "../../assets/cup.svg";
import img53 from "../../assets/img53.svg";
import img5 from "../../assets/5.svg";
import homesign from "../../assets/home-sign.svg";
const HomeHeader = () => {
  return (
    <div className="position-relative">
      <div className="paddingleft">
        <div className="devtitle">
          <div className="devtext">{DATA.home.devtitle}</div>
          <div className="py-5">{DATA.home.devtext}</div>
        </div>
        <RedButton className="me-3">About us</RedButton>
        <TransButton>
          <i class="fa fa-phone LIGHT"></i> Talk to the experts
        </TransButton>
      </div>
      <img src={ramda} className="position-absolute ramda" alt="none" />
      <img src={cup} className="position-relative cup" alt="none" />
      <img src={img53} className="position-relative img53" alt="none" />
      <img src={img5} className="position-relative img5" alt="none" />
      <img src={homesign} className="position-relative homesign" alt="none" />
    </div>
  );
};
export default HomeHeader;
