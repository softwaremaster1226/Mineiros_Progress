import React from "react";
import "./styles.scss";
import { Trans, withTranslation, useTranslation } from "react-i18next";

import logo from "../../assets/logo.svg";
import call from "../../assets/call.svg";
import { Link } from "react-router-dom";
const NavbarComponent = () => {
  const { t, i18n } = useTranslation();
  return (
    <div class="topnav paddingtop34left205 position-relative">
      <div>
        <img src={logo} alt="none" />
      </div>
      <div className="float-right">
        <Link to="/home" class="active">
          {t("whatwedo")}
        </Link>
        <div class="dropdown">
          <Link to="/about" class="dropbtn">
            {t("solutions")}
            <i class="fa fa-caret-down"></i>
          </Link>
          <div class="dropdown-content">
            <Link to="#">Link 1</Link>
            <Link to="#">Link 2</Link>
            <Link to="#">Link 3</Link>
          </div>
        </div>
        <Link to="/contact">{t("company")}</Link>
        <Link to="/terraform">{t("blog")}</Link>
        <Link to="/landingzone" className="phone">
          <img src={call} alt="none" />
          {t("contact")}{" "}
        </Link>
      </div>
    </div>
  );
};

export default NavbarComponent;
