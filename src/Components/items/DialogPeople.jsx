import React from "react";

const DialogContext = ({ item: { icon, name, job } }) => {
  return (
    <div className="d-flex justify-content-center">
      <div>
        <img src={require(`../../assets/${icon}`).default} alt="none" />
      </div>
      <div className="peopletext ps-3">
        <div>{name}</div>
        <div>{job}</div>
      </div>
    </div>
  );
};

export default DialogContext;
