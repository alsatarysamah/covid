import "./Records.css";
import axios from "axios";
import {  useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { toast, ToastContainer } from "react-toastify";


export default function Records() {
  const [records, setRecords] = useState([]);
  const [isDeleted, setIsDeleted] = useState(false);
  const [userInfo, setUserInfo] = useState(
    JSON.parse(sessionStorage.getItem("userInfo")) || []
  );
  const navigate =useNavigate();



  const getdata = () => {
    axios.get(`https://covidserver.cleverapps.io/record/${userInfo.id}`).then((data) => {
     
      setRecords(data.data);
    });
  };

  const handleDelete = async (record) => {
    console.log("lllllllllll ", userInfo.length);

    axios.delete(`https://covidserver.cleverapps.io/record/${record.id}`).then((data) => {
      setIsDeleted(!isDeleted);
   toast.success("Deleted")
    });
  };

  const handleRedirect=()=>{
    console.log("redi")
    navigate("/signin")

  }
  useEffect(() => {
    if (userInfo.id) getdata();
  }, []);

  
  useEffect(() => {
    if (userInfo.id) getdata();
  }, [isDeleted]);

console.log(records);
  return (
    <>
    <section>
      <div className="d-flex flex-column mt-5">
      <Helmet>
        <title>Records</title>
      </Helmet>
      <ToastContainer />

        <h2 className="mt-3">Your Records</h2>
        {userInfo.id ? (
          <div class="row row-cols-1 row-cols-md-2 row-cols-xl-4 justify-content-between mt-5">
            {records.length>0?records?.map((element) => (
              <div class="col">
                <div
                  class="card radius-10 border-start border-0 border-3 border-dangerous"
                  key={element.id}
                >
                  <div class="card-body">
                    <div class="d-flex align-items-center">
                      <div>
                        <h5 class="mb-1  font-weight-bold ">
                        Country:{" "}
                    {element.country.slice(0, element.country.indexOf(" "))}{" "}
                        </h5>
                        <h7 class="my-1 text-warning">
                          <strong>Date: {element.Date}</strong>
                        </h7>
                      </div>
                    </div>
                    <div class="form-group  d-flex justify-content-center mr-3">
                      <button
                        id="delete-btn"
                        onClick={() => {
                          handleDelete(element);
                        }}
                      >
                        {" "}
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )): <div className="mx-5 my-5">
            <h5>
           No Available Records 😔
            </h5>
          </div>}
          </div>
        ) : (
          <div className="mx-5 my-5">
     
            <h5>
              You shoud signin <Link  to="/signin">click here</Link>
            </h5>
          </div>
        )}
      </div>
      </section>
    </>
  );
}
