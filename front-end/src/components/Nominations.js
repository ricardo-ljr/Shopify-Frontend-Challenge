import React, { useState } from "react";
import { monitorEventLoopDelay } from "perf_hooks";

const Nominations = props => {
  return (
    <div>
      {props.nominees.map((nominee, index) => {
        return (
          <div>
            <ul key={index}></ul>
          </div>
        );
      })}
    </div>
  );
};

export default Nominations;
