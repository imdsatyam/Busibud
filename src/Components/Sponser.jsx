import React from "react";
import Image_1 from '../Assets/img-10.png';
import Image_2 from '../Assets/img-11.png';
import Image_3 from '../Assets/img-12.png';

const Sponser = () => {
  return (
    <div className="container py-5" style={{marginTop: '155px'}}>
      <div className="row">
        <div className="col-12 text-center pb-4">
          <h1>Lorem ipsum dolor sit amet,consectetur adipiscing elit.</h1>
        </div>
      </div>
      <div className="row iconfoot">
        <div className="col-md-4 col-12 pb-2">
          <div className="card border-0 text-center">
            <img
              src={Image_1}
              className="card-img-top bg-light slide-img-1729"
              alt="..."
              style={{width: '177px', height:'60px', background: 'transparent', marginTop:'40px'}}
            />
            <div className="card-body py-3">
              <p className="card-text text-center fw-bold icontxt">Forms On Fire</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-12 py-0">
          <div className="card border-0 text-center">
            <img
              src={Image_2}
              className="card-img-top py-2"
              alt="..."
              style={{width: '177px', margin: '0 auto'}}
            />
            <div className="card-body p-0">
              <p className="card-text text-center fw-bold icontxt">
                ElectroNeek Studio IDE
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-12 pt-0">
          <div className="card border-0 text-center">
            <img
              src={Image_3}
              className="card-img-top py-2"
              alt="..."
              style={{width: '100px', margin: '0 auto'}}
            />
            <div className="card-body p-0">
              <p className="card-text text-center fw-bold icontxt">Jot form</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponser;
