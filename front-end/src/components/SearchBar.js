import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";
import "./components.css";

const SearchBar = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const API_KEY = process.env.REACT_APP_API_KEY;

  const onInputChange = e => {
    setQuery(e.target.value);
    console.log(e.target.value);
  };

  const fetchData = e => {
    e.preventDefault();
    axios
      .get(`http://www.omdbapi.com/?s=${query}&type=movie&apikey=${API_KEY}`)
      .then(res => {
        console.log(res.data);
        const result = res.data.Search;
        if (!Object.keys(result).length) {
          setData("Not found");
        } else {
          setData(result);
          setLoading(true);
        }
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div>
      <div className="form-container">
        <form className="form-inline mt-4 mb-4" onSubmit={fetchData}>
          <i className="fa fa-search search-icon" />
          <input
            className="form-control form-control-sm ml-3 w-75"
            type="text"
            placeholder="Search..."
            aria-label="Search..."
            onChange={onInputChange}
          />
        </form>
      </div>
      <Results movie={data} query={query} />
    </div>
  );
};

export default SearchBar;
