import React from "react";

const Mobile = (props) => {
  return (
    <>
      <img src="iphone15" alt="" />
      <img
        src={props.mobileObject.PhotoName}
        alt="mobile pic"
        className="pizza"
        key={23}
      />
      <h1>{props.mobileObject.name}</h1>
      <h2>{props.mobileObject.specification}</h2>
    </>
  );
};

export default Mobile;
