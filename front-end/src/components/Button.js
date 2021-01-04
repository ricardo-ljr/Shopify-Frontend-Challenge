import React, { useState, useEffect } from "react";
import "./components.css";

const Button = props => {
  const [disable, setDisable] = useState(false);

  useEffect(() => {
    if (!props.nominees.includes(props.movie)) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [props.movie, props.nominees]);

  const setNominate = () => {
    if (!disable) {
      props.onNominate(props.movie);
      setDisable(true);
      console.log(disable);
    }
  };

  return (
    <button
      key={props.movie.imdbID}
      className="nominate-button"
      onClick={() => setNominate()}
      disabled={disable}
    >
      {props.children}
    </button>
  );
};

export default Button;
