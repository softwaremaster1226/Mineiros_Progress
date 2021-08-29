import React from "react";
import "./styles.scss";
import logo from "../../assets/logo.svg";
import call from "../../assets/call.svg";
import styles from "./style.module.scss";
const NavbarComponent = () => {
  return (
    <div class="topnav paddingtop34left205">
      <div>
        <img src={logo} alt="none" />
      </div>
      <div id="myTopnav">
        <a href="#home" class="active">
          WHATWE DO
        </a>
        <div class="dropdown">
          <button class="dropbtn">
            SOLUTIONS
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
        <a href="#news">COMPANY</a>
        <a href="#contact">BLOG</a>
        <a href="#about" className={styles.phone}>
          <img src={call} alt="none" />
          Contact
        </a>
      </div>
    </div>
  );
};

export default NavbarComponent;
