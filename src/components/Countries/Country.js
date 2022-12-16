import axios from "axios";
import { useEffect } from "react";
import "./Country.css";

export default function Country() {
  useEffect(() => {
    axios.get("https://api.covid19api.com/summary")
  }, []);
  return (
    <>
      <section class="pricing-section">
        <div class="container">
          <div class="row justify-content-md-center mt-3">
            <div class="col-xl-5 col-lg-6 col-md-8">
              <div class="section-title text-center title-ex1">
                <h2>Pricing Tables</h2>
                <p>
                  Inventore cillum soluta inceptos eos platea, soluta class
                  laoreet repellendus imperdiet optio.
                </p>
              </div>
            </div>
          </div>

          <div class="row h-25">
            <div class="col-md-4 mt-3">
              <div class="price-card featured">
                <h2>Student</h2>
                {/* <p>Most popular choice</p> */}
                <ul class="pricing-offers">
                  <li>6 Domain Names</li>
                  <li>8 E-Mail Address</li>
                  <li>8 E-Mail Address</li>

                  <li>8 E-Mail Address</li>
                </ul>
                <button class="btn btn-primary  ">Add</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
