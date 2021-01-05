import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";

const Nominations = props => {
  const [stopNominees, setStopNominees] = useState(false);

  const Bounce = styled.div`
    animation: 2s ${keyframes`${fadeIn}`};
  `;

  useEffect(() => {
    if (props.nominees.length === 5) {
      setStopNominees(true);
    }
  }, [props.nominees]);
  return (
    <>
      <div>
        {stopNominees === true && <h2>You already have 5 nominations</h2>}
      </div>
      <div>
        {props.nominees.map(nominee => {
          return (
            <Bounce>
              <ul key={nominee.imdbID}>
                <li>
                  {nominee.Title} {nominee.Year}
                </li>
                <button
                  onClick={() => {
                    props.onRemoveNominee(nominee);
                  }}
                >
                  Remove
                </button>
              </ul>
            </Bounce>
          );
        })}
      </div>
    </>
  );
};

export default Nominations;
