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

    axios
      .get(
        // `https://api.covid19api.com/country/${country}/status/confirmed?from=${convertToISO(startDate)}&to=${convertToISO(endDate)}`    )
        // "https://api.covid19api.com/country/jordan/status/confirmed?from=2020-03-01T00:00:00Z&to=2021-04-01T00:00:00Z"
        // "https://api.covid19api.com/country/jordan/status/confirmed?from=2020-08-05T00:00:00Z&to=2020-08-05T00:00:00Z"
        "https://api.covid19api.com/country/jordan/status/confirmed?from=2020-03-01T00:00:00Z&to=2020-04-01T00:00:00Z"
      )
      .then((data) => {
        setResults(data.data)
        console.log(data.data);
      });
  };
  const convertToISO = (date) => {
    let convertedDate = new Date(JSON.stringify(startDate).slice(1, 11));
    return convertedDate.toISOString();
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
                  console.log(country);
                  setCountry(e.target.value);
                }}
              />
            </div>

            <div class="form-group col-lg-3">
              <input
                type="date"
                onChange={(e) => {
                  setStartDate(new Date(e.target.value));
                }}
              />
              <label>
                <i class="fa fa-calendar"></i>
              </label>
            </div>
            <div class="form-group col-lg-3">
              <input
                type="date"
                onChange={(e) => {
                  setEndDate(e.target.value);
                }}
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

      {results.map((element)=>(<SearchResult date={element.Date} cases={element.Cases}/>))}
      </div>

    </>
  );
}
