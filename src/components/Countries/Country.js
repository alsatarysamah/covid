import axios from "axios";
import { useEffect, useState } from "react";
import "./Country.css";

export default function Country() {
  const [allCountries, setAllCountries] = useState([]);

  const handleAddRecord=(record)=>{
    console.log({record});
  }
  useEffect(() => {
    axios.get("https://api.covid19api.com/summary").then((data) => {
      setAllCountries(data.data.Countries);
      console.log(data.data.Countries);
    });
  }, []);
  return (
    <>
      <section >
        <div class="container ">
        <div class="row h-25 mt-5">
          {allCountries?.map((element) => (
            
            <div class="col-md-3 mt-3">
                <div class="price-card featured">
                  <h2>Country: {element.Country.slice(0,element.Country.indexOf(" "))} </h2>
                  {/* <p>Most popular choice</p> */}
                  <ul class="pricing-offers">
                    <li>Total Confirmed: {element.TotalConfirmed}</li>
                    <li>Total Deaths: {element.TotalDeaths}</li>
                    <li>Total Recovered: {element.TotalRecovered}</li>

                    <li>Date: {element.Date}</li>
                  </ul>
                  <div className="add-btn">
                    <button class="btn btn-primary btn-lg  " onClick={()=>handleAddRecord(element)}>Add</button>
                  </div>
                </div>
            </div>
          ))}
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
