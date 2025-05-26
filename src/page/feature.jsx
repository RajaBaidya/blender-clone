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

            <div className="container">
                <div className="wp-block-group is-style-box is-layout-constrained wp-block-group-is-layout-constrained">
                  <p>Blender is the free and open source 3D 
                    creation suite. It supports the entirety 
                    of the 3D pipeline—modeling, rigging, 
                    animation, simulation, rendering, compositing
                     and motion tracking, even video editing and 
                     game asset creation. Advanced users employ 
                     Blender’s API for Python scripting to customize 
                     the application and write specialized tools; 
                     often these are included in Blender’s future 
                     releases. Blender is well suited to individuals
                      and small studios who benefit from its unified
                       pipeline and responsive development process. 
                       Examples from many Blender-based projects are 
                       available in the&nbsp;<a href="https://www.blender.org/features/">showcase</a>.</p>
                </div>
            </div>

    </div>
  );
}

export default Feature;
