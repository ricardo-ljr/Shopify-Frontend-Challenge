import React, { useState, useEffect } from "react";

const Nominations = props => {
  const [stopNominees, setStopNominees] = useState(false);

  useEffect(() => {
    if (props.nominees.length == 5) {
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
            <div>
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
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Nominations;
