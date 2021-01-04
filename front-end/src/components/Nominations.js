import React, { useState } from "react";

const Nominations = props => {
  return (
    <div>
      {props.nominees.map((nominee, index) => {
        return (
          <div>
            <ul key={index}>
              <li>
                {nominee.Title} {nominee.Year}
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Nominations;
