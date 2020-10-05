import React from "react";
import Loader from "react-loader-spinner";

const Spinner = () => {
  return (
    <Loader
      style={{ width: "100%", marginTop: "300px", textAlign: "center" }}
      type="ThreeDots"
      color="#4b4099"
      height={80}
      width={80}
    />
  );
};

export default Spinner;
