"use client";
import React from "react";
import {Bars} from "react-loader-spinner";

const loading = () => {
  return (
    <div className="flex justify-center mt-20">
      <Bars
        height="80"
        width="80"
        color="#DC143C"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default loading;
