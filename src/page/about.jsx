import React from "react";

import "../style/about.css";

// import SubNavbar from "../component/subnavbar";

function About() {
  return (
    <>
      <div className="about-main">
        <div className="about-nav">
          <nav className="support-nav">
            <div className="support-navinner">
              <ol className="breadcrumb">
                <li>
                  <a href="#">abouts</a>
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
        </div>

        <div
          className="about-overlay"
          style={{
            "background-color": "rgba(10, 10, 10, 0.58)",
            height: "80vh",
          }}
        ></div>

        <div className="about-credits">Ian Hubert</div>

        <div className="about-fullcontainer">
          <div className="about header-size-large header-align-x-center header-align-y-center is-container-overlap">
            <div className="container">
              <div className="about-content">
                <h1 className="display-4">
                  The Freedom to Create
                </h1>
              </div>
              {/* <div className="about-credits">pokedstudio.com</div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="container-second">
        <div className="container-main">
          <div className="about-containerHeadtext">
            <div className="about-headtext">
              <h1>More than Software</h1>
              <p>
                Blender is a community project coordinated by
                 the Blender Foundation, primarily funded by donations.
              </p>

              <p>
                At its core is the Blender software, to which thousands
                 of people have contributed, and that millions use daily.
              </p>
            </div>

            <div className="about-headtext">
              <h1>Mission</h1>
              <p>
               Get the world’s best 3D CG technology in the hands of 
               artists as free/open source software.
              </p>
              <h1>Vision</h1>

              <p>
               Everyone should be free to create 3D CG content, 
               with free technical and creative production means 
               and free access to markets.
              </p>
            </div>
          </div>    
          

          {/* end of about-containerHeadtext */}

         


         


        </div>
      </div>
    </>
  );
}

export default About;
