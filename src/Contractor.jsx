import React from "react";
import Commoncard from "./Commoncard.jsx";
import Contractordata from "./Contractordata.jsx";
import "./styles.css";

const Contractor = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contractor</h1>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row ">
              {Contractordata.map((val, index) => {
                return (
                  <Commoncard
                    key={index}
                    img={val.img}
                    title={val.title}
                    info={val.info}
                    visitt={val.visitt}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contractor;
