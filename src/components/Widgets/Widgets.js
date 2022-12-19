import axios from "axios";
import { useEffect, useState } from "react";
import "./Widgets.css";

export default function Widgets() {
  const [totalStat, setTotalStat] = useState([]);
  useEffect(() => {
    axios.get("https://api.covid19api.com/world/total").then((data) => {
        // console.log(data.data);
      setTotalStat(data.data);
    //   console.log(totalStat);
     
    });
  }, []);
  return (
    <>
      {" "}
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
      />
      <div className="container2 container-xl">
        <div class="row row-cols-1 row-cols-md-2 row-cols-xl-4 justify-content-between ">
        <div class="col">
              <div class="card radius-10  border-0 border-3 ">
                <div class="card-body">
                  <div class="d-flex align-items-center ">
                    <div>
                      <p class="mb-0 text-secondary ">Total Confirmed</p>
                      <h4 class="my-1 text-danger font-weight-bold">{totalStat.TotalConfirmed}</h4>
                    </div>
                    <div class="widgets-icons-2 rounded-circle bg-gradient-scooter text-white ms-auto">
                      <i class="fa fa-th-list"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card radius-10  border-0 border-3 ">
                <div class="card-body">
                  <div class="d-flex align-items-center">
                    <div>
                      <p class="mb-0 text-secondary">Total Deaths</p>
                      <h4 class="my-1 text-danger">{totalStat.TotalDeaths}</h4>
                    </div>
                    <div class="widgets-icons-2 rounded-circle bg-gradient-bloody text-white ms-auto"><i class="fa fa-th-list"></i>
				   </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card radius-10  border-0 border-3 ">
                <div class="card-body">
                  <div class="d-flex align-items-center">
                    <div>
                      <p class="mb-0 text-secondary">Total Recovered</p>
                      <h4 class="my-1 text-danger">{totalStat.TotalRecovered}</h4>
                    </div>
                    <div class="widgets-icons-2 rounded-circle bg-gradient-ohhappiness text-white ms-auto"><i class="fa fa-th-list"></i>
				   </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </>
  );
}
