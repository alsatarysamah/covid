import axios from "axios";
import { useEffect, useState } from "react";
import "./Country.css";
import { Helmet } from "react-helmet-async";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function Country() {
  const [allCountries, setAllCountries] = useState([]);
  const [userInfo, setUserInfo] = useState(
    JSON.parse(sessionStorage.getItem("userInfo")) || []
  );
const navigate =useNavigate();
  const handleAddRecord = async (record) => {
    console.log(userInfo);
    if(userInfo.id)
    axios
      .post("http://localhost:5050/record", {
        country: record.Country,
        totalConfirmedCases: record.TotalConfirmed,
        totalDeathsCases: record.TotalDeaths,
        totalRecoveredCases: record.TotalRecovered,
        Date: record.Date,
        userId: userInfo.id,
      })
      .then((data) => {
        console.log(data.data);
        toast.success("Added Successfuly")

      });
      else
      navigate("/signin",{redirect:"/country"})
  };

  useEffect(() => {
    axios
      .get("https://api.covid19api.com/summary")
      .then((data) => {
        setAllCountries(data.data.Countries);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <>
      <section>
        <div className="d-flex flex-column mt-5">
          <Helmet>
            <title>All Countries</title>
          </Helmet>
      <ToastContainer position="top-center" limit={1} />

          <h2 className="mt-3">All Countries Statistics</h2>

          <div class="container ">
            <div class="row h-25 mt-5">
              {allCountries?.map((element) => (
                <div class="col-md-3 mt-3">
                  <div class="price-card featured">
                    <h2>
                      Country:{" "}
                      {element.Country.slice(0, element.Country.indexOf(" "))}{" "}
                    </h2>
                    {/* <p>Most popular choice</p> */}
                    <ul class="pricing-offers">
                      <li>Total Confirmed: {element.TotalConfirmed}</li>
                      <li>Total Deaths: {element.TotalDeaths}</li>
                      <li>Total Recovered: {element.TotalRecovered}</li>

                      <li>Date: {element.Date}</li>
                    </ul>
                    <div className="add-btn">
                      <button
                        id="delete-btn"
                        // class="btn btn-primary btn-lg  "
                        onClick={() => handleAddRecord(element)}
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
/**  <div class="row h-25 mt-5">
            <div class="col-md-4 mt-3">
              <div class="price-card featured">
                <h2>Country </h2>
                {/* <p>Most popular choice</p> */
//       <ul class="pricing-offers">
//         <li>6 Domain Names</li>
//         <li>8 E-Mail Address</li>
//         <li>8 E-Mail Address</li>

//         <li>8 E-Mail Address</li>
//       </ul>
//       <div className="d-flex justify-content-center px-auto">
//       <button class="btn btn-primary  ">Add</button>
//       </div>
//     </div>
//   </div>
// </div> */
