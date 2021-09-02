import React from "react";
import SocialItem from "./SocialItem";
const TeamMember = ({
  item: { photo, name, job, description, icon1, icon2 },
}) => {
  console.log(icon1, "test");
  return (
    <div className="d-flex row py-5">
      <div className="col-sm-4">
        <img src={require(`../../assets/${photo}`).default} alt="none" />
      </div>
      <div className="col-sm-8  ps-3" style={{ textAlign: "left" }}>
        <p>{name}</p>
        <div>{job}</div>
        <div>{description}</div>
        <div className="d-flex">
          <SocialItem key="0" item={{ icon: icon1, backcolor: "#EC264F" }} />
          <SocialItem key="1" item={{ icon: icon2, backcolor: "#EC264F" }} />
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
