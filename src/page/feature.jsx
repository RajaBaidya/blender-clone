import React from "react";

import "../style/feature.css";

function Feature() {
  return (
    <div className="support">
      <nav className="support-nav">
        <div className="support-navinner">
          <ol className="breadcrumb">
            <li>
              <a href="#">Features</a>
            </li>
            <div className="breadcrumb-sublist">
              <a href="#">Modeling</a>
              <a href="#">Sculpting</a>
              <a href="#">Animation & Rigging</a>
              <a href="#">Rendering</a>
              <a href="#">Compositing</a>
              <a href="#">Motion Tracking</a>
              <a href="#">Video Editing</a>
              <a href="#">Scripting</a>
              <a href="#">Simulation</a>
              <a href="#">VFX</a>
              <a href="#">Interface</a>
              <a href="#">Pipeline</a>
            </div>
          </ol>
        </div>
      </nav>

      <div className="feature header-size-large header-align-x-center header-align-y-center is-container-overlap">
        <div className="container">
          <div className="feature-content">
            <h1 className="display-4">Free Software Never Looked This Awesome</h1>
          </div>
        </div>
        <div
          className="feature-bg"
          style={{
            backgroundImage: "url(https://www.blender.org/wp-content/uploads/2017/11/features_rendering_02.jpg)",
            backgroundPositionY: "50%",
          }}
        ></div>
        <div
          className="feature-overlay"
          style={{ backgroundColor: "rgba(10,10,10,0.58)" }}
        ></div>
        <div className="feature-credits">pokedstudio.com</div>
      </div>
    </div>
  );
}

export default Feature;
