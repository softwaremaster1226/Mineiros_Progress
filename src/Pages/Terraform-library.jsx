import React from "react";
import { TransButton } from "../Components/Home/common.styles";
import about from "../assets/about-1.svg";
import aboutvector from "../assets/about-vector.svg";
import { Trans, withTranslation, useTranslation } from "react-i18next";
import TeamMember from "../Components/items/TeamMember";
import Template from "./Template";
import DATA from "../mystyle.json";

const TerraformLibrary = () => {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <Template></Template>
    </div>
  );
};
export default TerraformLibrary;
