import DATA from "../mystyle.json";
import LOGOfooter from "../assets/LOGOfooter.svg";
import lovesign from "../assets/love-sign.svg";
import arrow from "../assets/arrow.svg";
import "./styles.scss";
import FooterItem from "../Components/items/FooterItem";
import TranslateItem from "../Components/items/TranslateItem";
const Footer = () => {
  return (
    <footer class="paddingtop34left205 row footerstyle">
      <div className="col-sm-5">
        <div>
          <img src={LOGOfooter} alt=""></img>
          <div className="py-3">
            © 2020 Mineiros GmbH. All rights reserved.
            <br />
            Made with
            <img src={lovesign} alt="none" />
            in Berlin
          </div>
        </div>
        <div className="d-flex">
          {DATA.home.footeritems.map((item, id) => {
            return <FooterItem key={id} item={item} />;
          })}
        </div>
      </div>
      {DATA.home.linkItems.map((item, id) => {
        return (
          <div key={id} className="col">
            <p styles={{ fontSize: 16 }}>
              <b>{item.title}</b>
            </p>
            {item.items.map((item1, id) => {
              return <p>{item1.itemtext}</p>;
            })}
          </div>
        );
      })}
      <div className="col">
        <p styles={{ fontSize: 16 }}>
          <b>SUBSCRIBE TO OUR NEWSLETTER</b>
        </p>

        <input
          className="inputstyle"
          type="text"
          width="300px"
          placeholder="Your email address"
        />
        <img src={arrow} alt="" style={{ marginLeft: -25 }} />
      </div>
      <TranslateItem />
    </footer>
  );
};
export default Footer;
