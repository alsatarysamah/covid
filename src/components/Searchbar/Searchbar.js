import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchResult from "../SearchResult/SearchResult";
import "./Searchbar.css";

export default function SearchBar() {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [country, setCountry] = useState();
  const [results, setResults] = useState([]);
  // const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(
      `https://api.covid19api.com/country/${country}/status/confirmed?from=${convertToISO(
        startDate
      )}&to=${convertToISO(endDate)}`
    );
    axios
      .get(
        `https://api.covid19api.com/country/${country}/status/confirmed?from=${convertToISO(
          startDate
        )}&to=${convertToISO(endDate)}`
      )
      
      .then((data) => {
        setResults(data.data);
        console.log(data.data);
      });
  };
   const convertToISO = (date) => {
    console.log(typeof date);
    console.log(date.toISOString());
    // return date.toISOString();
    // let convertedDate = new Date(JSON.stringify(startDate).slice(1, 11));
    // console.log(convertedDate.toISOString().slice(2,-2)+"Z");
    return `${date.toISOString().slice(2,-2)}Z`;
  };

  return (
    <>
      <div class="search-bar col-lg-8 mx-auto ">
        <form action="#" onSubmit={handleSearch}>
          <div class="row  ">
            <div class="form-group col-lg-4 d-flex justify-content-start">
              <input
                type="text"
                name="search"
                placeholder="Country?"
                id="country"
                onChange={(e) => {
                  setCountry(e.target.value);
                }}
                required
              />
            </div>

            <div class="form-group col-lg-3">
              <input
                type="date"
                data-date-format="yyyy-mm-dd"
                onChange={(e) => {
                  setStartDate(new Date(e.target.value));
                }}
                required
              />
              <label>
                <i class="fa fa-calendar"></i>
              </label>
            </div>
            <div class="form-group col-lg-3">
              <input
                type="date"
             
                onChange={(e) => {
                  setEndDate(new Date(e.target.value));
                }}
                required
              />
              <label>
                <i class="fa fa-calendar"></i>
              </label>
            </div>
            

            <div class="form-group col-lg-2 d-flex justify-content-center">
              <input type="submit" value="Search" class="submit " />
            </div>
          </div>
        </form>
      </div>
      <div class="row row-cols-1 row-cols-md-2 row-cols-xl-4 justify-content-between mt-3">
        {results.map((element, idx) => (
          <SearchResult key={idx} date={element.Date} cases={element.Cases} />
        ))}
      </div>
    </>
  );
}
