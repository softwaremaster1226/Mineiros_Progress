const FooterItem = ({ item: { icon, backcolor } }) => {
  return (
    <div className="d-flex align-items-center justify-content-center pe-2">
      <div className="footeritem" style={{ backgroundColor: backcolor }}></div>
      <img
        className="itemfoot"
        src={require(`../../assets/${icon}`).default}
        alt="none"
      ></img>
    </div>
  );
};
export default FooterItem;
