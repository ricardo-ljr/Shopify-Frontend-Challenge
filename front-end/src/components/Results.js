import React, { useState } from "react";
import Button from "./Button";
import Nominations from "./Nominations";

import "./components.css";

const Results = props => {
  const [nominees, setNominees] = useState([]);

  const onNominate = movie => {
    setNominees([...nominees, movie]);
    console.log(movie);
  };

  const onRemoveNominee = movie => {
    const copy = [...nominees];
    const index = copy
      .map(movie => {
        return movie.imdbID;
      })
      .indexOf(movie.imdbID);

    if (index !== -1) {
      copy.splice(index, 1);
      setNominees([...copy]);
    }
  };

  return (
    <div>
      <h1>Results for "{props.query}"</h1>
      <h3>Choose up to 5 nominees</h3>
      <div className="main-container">
        <div className="results-container">
          {props.movie.map((movie, index) => {
            return (
              <ul key={movie.imdbID}>
                <li className="movie-list">
                  {movie.Title} {movie.Year}
                  <Button
                    onNominate={onNominate}
                    movie={movie}
                    nominees={nominees}
                  >
                    Nominate
                  </Button>
                </li>
              </ul>
            );
          })}
        </div>
        <div className="nominations-container">
          <Nominations nominees={nominees} onRemoveNominee={onRemoveNominee} />
        </div>
      </div>
    </div>
  );
};

export default Results;
