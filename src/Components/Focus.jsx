import React from "react";
import Image_1 from '../Assets/img-6.png';
import Image_2 from '../Assets/img-7.png';
import Image_3 from '../Assets/img-8.png';
import Image_4 from '../Assets/img-9.png';

const Focus = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center pb-4">
          <h1>Lorem ipsum dolor sit amet,consectetur adipiscing elit.</h1>
        </div>
      </div>
      <div className="row text-md-start text-center">
        <div className="col-md-6 px-0 ">
          <div className="row py-3">
            <div className="col-2 px-0 text-md-start text-end ">
              <img
                className="img-fluid w-75"
                src={Image_1}
                alt=""
              />
            </div>
            <div className="col-10 px-0 align-self-center">
              <h3 className="fw-bold">Lorem ipsum dolor sit .</h3>
            </div>
          </div>
          <p style={{fontSize:'21px', fontWeight: 500}}>
            adipiscing elit. Ut sed commodo est.Pellentesque eu placerat mauris.
            ut maximus ante. Suspendisse varius dolor nec bibendum dignissim
          </p>
          <div className="pt-3">
            <a
              href="/#"
              className="btn rounded-pill text-white btn-help-click shadow-lg"
            >
              Checking Pricing
            </a>
          </div>
        </div>
        <div className="col-md-6"></div>
      </div>
      <div className="row text-md-start text-center">
        <div className="col-md-6"></div>
        <div className="col-md-6 px-0">
          <div className="row py-3">
            <div className="col-2 px-0 text-md-start text-end ">
              <img
                className="img-fluid w-75"
                src={Image_2}
                alt=""
              />
            </div>
            <div className="col-10 px-0 align-self-center">
              <h3 className="fw-bold">Lorem ipsum dolor sit .</h3>
            </div>
          </div>
          <p id="goalsha">
            adipiscing elit. Ut sed commodo est.Pellentesque eu placerat mauris.
            ut maximus ante. Suspendisse varius dolor nec bibendum dignissim
          </p>
          <div className="pt-3">
            <a
              href="/#"
              className="btn rounded-pill text-white btn-help-click shadow-lg"
            >
              Checking Pricing
            </a>
          </div>
        </div>
      </div>
      <div className="row text-md-start text-center">
        <div className="col-md-6 px-0">
          <div className="row py-3">
            <div className="col-2 px-0 text-md-start text-end ">
              <img
                className="img-fluid w-75"
                src={Image_3}
                alt=""
              />
            </div>
            <div className="col-10 px-0 align-self-center">
              <h3 className="fw-bold">Lorem ipsum dolor sit .</h3>
            </div>
          </div>
          <p id="goalsha">
            adipiscing elit. Ut sed commodo est.Pellentesque eu placerat mauris.
            ut maximus ante. Suspendisse varius dolor nec bibendum dignissim
          </p>
          <div className="pt-3">
            <a
              href="/#"
              className="btn rounded-pill text-white btn-help-click shadow-lg"
            >
              Checking Pricing
            </a>
          </div>
        </div>
        <div className="col-md-6"></div>
      </div>
      <div className="row text-md-start text-center">
        <div className="col-md-6"></div>
        <div className="col-md-6 px-0">
          <div className="row py-3">
            <div className="col-2 text-md-start text-end  px-0">
              <img
                className="img-fluid w-75"
                src={Image_4}
                alt=""
              />
            </div>
            <div className="col-10 px-0 align-self-center">
              <h3 className="fw-bold">Lorem ipsum dolor sit .</h3>
            </div>
          </div>
          <p id="goalsha">
            adipiscing elit. Ut sed commodo est.Pellentesque eu placerat mauris.
            ut maximus ante. Suspendisse varius dolor nec bibendum dignissim
          </p>
          <div className="pt-3">
            <a
              href="/#"
              className="btn rounded-pill text-white btn-help-click shadow-lg"
            >
              Checking Pricing
            </a>
          </div>
        </div>
      </div>
      <div className="row">
        <div
          className="col-12 text-center pb-12 pt-4"
          style={{marginTop: '140px'}}
        >
          <h1>Lorem ipsum dolor sit.</h1>
        </div>
      </div>
    </div>
  );
};

export default Focus;
