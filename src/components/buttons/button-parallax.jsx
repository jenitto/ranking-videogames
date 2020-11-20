import React from "react";
import "./button-parallax.scss";

const ButtonParallax = () => (
  <div className="page">
    <div className="content">
      <div className="circle">
        <div className="circle_title">
          <h2>Great Outdoors</h2>
          <h3>Get some fresh air</h3>
        </div>
        <div className="circle_inner">
          <div className="circle_inner__layer">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/pc1.png" />
          </div>
          <div className="circle_inner__layer">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/pc3.png" />
          </div>
          <div className="circle_inner__layer">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/pc2.png" />
          </div>
        </div>
        <div className="content_shadow"></div>
      </div>
    </div>
    <div className="content">
      <div className="circle">
        <div className="circle_title">
          <h2>City Breaks</h2>
          <h3>Go somewhere new</h3>
        </div>
        <div className="circle_inner">
          <div className="circle_inner__layer">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/pc4.png" />
          </div>
          <div className="circle_inner__layer">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/pc5.png" />
          </div>
          <div className="circle_inner__layer">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/pc6.png" />
          </div>
        </div>
        <div className="content_shadow"></div>
      </div>
    </div>
    <div className="content">
      <div className="circle">
        <div className="circle_title">
          <h2>Cheap Flights</h2>
          <h3>Come fly with me</h3>
        </div>
        <div className="circle_inner">
          <div className="circle_inner__layer">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/pc7.png" />
          </div>
          <div className="circle_inner__layer">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/pc8.png" />
          </div>
          <div className="circle_inner__layer">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/pc9.png" />
          </div>
        </div>
        <div className="content_shadow"></div>
      </div>
    </div>
  </div>
);

ButtonParallax.propTypes = {};

export default ButtonParallax;
