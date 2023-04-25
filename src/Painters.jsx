import React from "react";

import Commoncard from "./Commoncard.jsx";
import Paintersdata from "./Paintersdata.jsx";
import "./styles.css";

const Painters = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Painters</h1>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row ">
              {Paintersdata.map((val, index) => {
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

export default Painters;
