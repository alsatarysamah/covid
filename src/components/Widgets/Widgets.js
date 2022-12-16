import axios from "axios";
import { useEffect, useState } from "react";
import "./Widgets.css";

export default function Widgets() {
  const [totalStat, setTotalStat] = useState("sama");
  useEffect(() => {
    axios.get("https://api.covid19api.com/world/total").then((data) => {
        console.log(data.data);
      setTotalStat(data.data);
      console.log(totalStat);
     
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
          {totalStat.map((element) => (
            <div class="col">
              <div class="card radius-10  border-0 border-3 ">
                <div class="card-body">
                  <div class="d-flex align-items-center">
                    <div>
                      <p class="mb-0 text-secondary">Total Orders</p>
                      <h4 class="my-1 text-info">4805</h4>
                      <p class="mb-0 font-13">+2.5% from last week</p>
                    </div>
                    <div class="widgets-icons-2 rounded-circle bg-gradient-scooter text-white ms-auto">
                      <i class="fa fa-th-list"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
