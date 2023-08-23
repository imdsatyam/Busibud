import React from "react";
import Image from "../Assets/img-2.png";

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-12 align-self-center">
          <h1 class="pt-3 px-3 st-heading">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h1>
          <p className="p-3 size-18para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed
            commodo est.Pellentesque eu placerat mauris. Etiam ut maximus
            ante.Suspendisse varius dolor nec bibendum dignissim. Proin in diam
            a justo sollicitudin mattis eu sagittis nunc. In hac habitasse plate
            a dictumst.
          </p>
          <div className="buttonf pt-3 px-3">
            <a href="/#" className="btn rounded-pill btn-help-click shadow-lg" style={{color: 'white'}}>
              Checking Price
            </a>
          </div>
        </div>
        <div className="col-md-6 col-12">
          <img className="img-fluid" src={Image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
