import React, { useState, useEffect } from "react";
import "./components.css";

const Button = props => {
  const setNominate = () => {
    props.onNominate(props.movie);
  };
  return (
    <button className="nominate-button" onClick={() => setNominate}>
      {props.children}
    </button>
  );
};

export default Button;
