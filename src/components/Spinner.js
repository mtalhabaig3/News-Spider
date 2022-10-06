import React, { Component } from "react";
import loading from "./loading.gif";

export default function Spinner() {
  return (
    <div className="text-center">
      <img className="" src={loading} alt="loading" />
    </div>
  );
}
