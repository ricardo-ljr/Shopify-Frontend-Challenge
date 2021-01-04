import React from "react";

const Nominations = props => {
  return (
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
  );
};

export default Nominations;
