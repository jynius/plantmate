import React from "react";
import ApiService from "../services/ApiService";

const SampleHome = () => {
  const a = 1;

  ApiService.delete("test", { a }, {}).then().catch();

  return (
    <div className='content-container'>
      <div>센터입니다.</div>
    </div>
  );
};

export default SampleHome;
