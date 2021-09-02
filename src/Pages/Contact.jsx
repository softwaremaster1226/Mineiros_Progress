import React from "react";
import { TransButton } from "../Components/Home/common.styles";
import about from "../assets/about-1.svg";
import aboutvector from "../assets/about-vector.svg";
import { Trans, withTranslation, useTranslation } from "react-i18next";
import TeamMember from "../Components/items/TeamMember";
import Template from "./Template";
import DATA from "../mystyle.json";

const ContactPage = () => {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <Template>
        <div>
          <div className="row paddingtop34left205">
            <div className="col-lg-6">
              <div
                className="devtext py-5"
                dangerouslySetInnerHTML={{ __html: t("contactpage.title") }}
              />
              <p className="smtext">{t("contactpage.text")} </p>
              <TransButton>
                <i class="fa fa-phone LIGHT"></i> Talk to the experts
              </TransButton>
            </div>
            <div className="col-lg-6">
              <img src={about} alt="none" />
            </div>
          </div>
          <div className="missionsection">
            <img src={aboutvector} alt="none" style={{ width: "2000px" }} />
            <p>
              <b>{t("contactpage.m-stitle")}</b>
            </p>
            <div className="devtext" style={{ color: "white" }}>
              {t("contactpage.m-title")}
            </div>
            <p className="m-text pb-5">{t("contactpage.m-text")}</p>
          </div>
          <div className="paddingtop34left205 py-5 text-center">
            <p className="pt-5" style={{ color: "#F22751" }}>
              <b>{t("partners")}</b>
            </p>
            <div className="devtext pb-5">{t("meettime")}</div>
            {DATA.contact.dialogitems.map((item, id) => {
              return <TeamMember key={id} item={item} />;
            })}
          </div>
        </div>
      </Template>
    </div>
  );
};
export default ContactPage;
