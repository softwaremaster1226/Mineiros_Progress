import DATA from "../../mystyle.json";
import "./styles.scss";
import { Col, Row } from "react-bootstrap";
import { ImgCard } from "./common.styles";
import amazon from "../../assets/amazon.svg";
import google from "../../assets/google.svg";
import azure from "../../assets/azure.svg";
import kubernete from "../../assets/kubernete.svg";
import Terraform from "../../assets/Terraform.svg";
const logos = [amazon, google, azure];
const logo2 = [kubernete, Terraform];
const ArtTechSection = () => {
  return (
    <div className="artdiv">
      <div className="arttitle">{DATA.home.arttitle}</div>
      <div className="arttext">{DATA.home.arttext}</div>
      <Row className="justify-content-center">
        {logos.length > 0 &&
          logos.map((item) => {
            console.log(`${item}`);
            return (
              <Col className="d-flex justify-content-center">
                <ImgCard src={item} alt="nones" />
              </Col>
            );
          })}
      </Row>
      <Row>
        {logo2.length > 0 &&
          logo2.map((item) => {
            console.log(`${item}`);
            return (
              <Col className="d-flex justify-content-center">
                <ImgCard src={item} alt="nones" />
              </Col>
            );
          })}
      </Row>
    </div>
  );
};
export default ArtTechSection;
