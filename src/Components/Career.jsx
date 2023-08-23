import React from "react";
import Image_1 from '../Assets/img-3.png';
import Image_2 from '../Assets/img-4.png';
import Image_3 from '../Assets/img-5.png';

const Career = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12 text-center pb-4">
          <h1>Lorem ipsum dolor sit amet,consectetur adipiscing elit.</h1>
        </div>
      </div>
      <div className="row py-5 mt-5">
        <div className="col-lg-4 col-md-6 col-12">
          <div className="card border-0">
            <img
              src={Image_1}
              className="card-img-top w-75"
              alt="..."
            />
            <div className="card-body px-0">
              <h5 className="card-title p-2 fw-bold">Lorem ipsum dolor sit .</h5>
              <p
                className="card-text"
                style={{fontSize: '18px', fontWeight: 500, padding: '2px 0px 26px'}}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed
                commodo est. Pellentesque eu placerat mauris. Etiam ut maximus
                ante. Suspendisse varius dolor nec bibendum dignissim. Proin in
                diam a justo sollicitudin mattis eu sagittis nunc. In hac
                habitasse platea dictumst.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          <div className="card border-0">
            <img
              src={Image_2}
              className="card-img-top w-75"
              alt="..."
            />
            <div className="card-body px-0">
              <h5 className="card-title p-2 fw-bold">Lorem ipsum dolor sit .</h5>
              <p
                className="card-text"
                style={{fontSize: '18px', fontWeight: 500, padding: '2px 0px 26px'}}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed
                commodo est. Pellentesque eu placerat mauris. Etiam ut maximus
                ante. Suspendisse varius dolor nec bibendum dignissim. Proin in
                diam a justo sollicitudin mattis eu sagittis nunc. In hac
                habitasse platea dictumst.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          <div className="card border-0">
            <img
              src={Image_3}
              className="card-img-top thirdcard"
              alt="..."
            />
            <div className="card-body px-0">
              <h5 className="card-title p-2 fw-bold">Lorem ipsum dolor sit .</h5>
              <p
                className="card-text"
                style={{fontSize: '18px', fontWeight: 500, padding: '2px 0px 26px'}}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed
                commodo est. Pellentesque eu placerat mauris. Etiam ut maximus
                ante. Suspendisse varius dolor nec bibendum dignissim. Proin in
                diam a justo sollicitudin mattis eu sagittis nunc. In hac
                habitasse platea dictumst.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
