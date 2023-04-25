import React from "react";
import Commoncard from "./Commoncard.jsx";
import Carpenterdata from "./Carpenterdata.jsx";
import "./styles.css";

const Carpenter = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Carpenter</h1>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row ">
              {Carpenterdata.map((val, index) => {
                return (
                  <Commoncard
                    key={index}
                    img={val.img}
                    title={val.title}
                    info={val.info}
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

export default Carpenter;
