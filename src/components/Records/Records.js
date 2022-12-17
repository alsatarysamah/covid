import "./Records.css";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Store } from "../../store";
import { getDefaultNormalizer } from "@testing-library/react";

export default function Records() {
  const [records, setRecords] = useState([]);
  const [isDeleted, setIsDeleted] = useState(false);

  const { state, dispatch } = useContext(Store);
  const userInfo = state.userInfo;

  const getdata = () => {
    axios
      .get(`http://localhost:5050/record/${userInfo.userInfo.id}`)
      .then((data) => {
        setRecords(data.data)

        
      });
  };
 
  const handleDelete=async(record)=>{
    axios
    .delete(`http://localhost:5050/record/${record.id}`)
    .then((data) => {
      setIsDeleted(!isDeleted)
      console.log(data.data);
    });
  }
  useEffect(() => {
    getdata();
  },[]);
  useEffect(getdata, [isDeleted]);
  return (
    <>
      <div className="d-flex flex-column mt-5">
        <h2 className="mt-3">COVID Statistice</h2>
        <div class="row row-cols-1 row-cols-md-2 row-cols-xl-4 justify-content-between mt-5">
          {records?.map(element=>(<div class="col">
            <div class="card radius-10 border-start border-0 border-3 border-dangerous" key={element.id}>
              <div class="card-body">
                <div class="d-flex align-items-center">
                  <div>
                    <h5 class="mb-1  font-weight-bold ">Country: {element.country} </h5>
                    <h7 class="my-1 text-warning"><strong>Date: {element.Date}</strong></h7>
                  </div>
                </div>
                <div class="form-group  d-flex justify-content-center mr-3">
                  <button
                    
                    id="delete-btn"
                    onClick={()=>{handleDelete(element)}}
                  > Delete</button>
                </div>
              </div>
            </div>
          </div>))}
        </div>
      </div>
    </>
  );
}
