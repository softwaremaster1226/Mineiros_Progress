import React from "react";
import { Trans, withTranslation, useTranslation } from "react-i18next";

import Template from "./Template";
import { Row } from "react-bootstrap";
import "../Components/Home/styles.scss";
import call from "../assets/call.svg";
import DATA from "../mystyle.json";
import SocialItem from "../Components/items/SocialItem";
const AboutPage = () => {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <Template>
        <Row className="paddingtop34left205">
          <div className="col-lg-5 col-sm-12">
            <img className="contactphone" src={call} alt="none" />
            <div
              className="devtext py-5"
              dangerouslySetInnerHTML={{ __html: DATA.about.title }}
            />
            <div className="d-flex pb-5">
              {DATA.about.itemsred.map((item, id) => {
                return <SocialItem key={id} item={item} />;
              })}
            </div>
            <div className="smtext">
              <p>
                <b>{DATA.about.smtitle}</b>
              </p>
              <p>{DATA.about.smtext} </p>
            </div>
          </div>
          {/* //right form */}
          <div className="col-lg-7 col-sm-12  position-relative">
            <div className="verticalcenter">
              <p className="smtext">
                <b>{DATA.about.tellname}</b>
              </p>
              <input
                className="transinput"
                type="text"
                placeholder={DATA.about.holder}
              />
              <div className="py-5">
                <button className="redsubmit">{DATA.about.submitbut}</button>
              </div>
            </div>
          </div>
          <div>
            {" "}
            <p>{t("welcome")}</p>
            <div>
              <label>{t("change-username")}</label>
            </div>
            <p>
              <Trans i18nKey="go-to-page2">
                <p>{t("welcome")}</p>
              </Trans>
            </p>
          </div>
        </Row>
      </Template>
    </div>
  );
};
export default AboutPage;
