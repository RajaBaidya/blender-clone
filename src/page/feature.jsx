import React from "react";

import "../style/feature.css";

function Feature() {
  return (
    <>
      <div className="feature-main">
        <div className="feature-nav">
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
        </div>

        <div
          className="feature-overlay"
          style={{
            "background-color": "rgba(10, 10, 10, 0.58)",
            height: "80vh",
          }}
        ></div>

        <div className="feature-credits">pokedstudio.com</div>

        <div className="feature-fullcontainer">
          <div className="feature header-size-large header-align-x-center header-align-y-center is-container-overlap">
            <div className="container">
              <div className="feature-content">
                <h1 className="display-4">
                  Free Software Never Looked This Awesome
                </h1>
              </div>
              {/* <div className="feature-credits">pokedstudio.com</div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="container-second">
        <div className="container-main">
          <div className="feature-containerHeadtext">
            <div className="feature-headtext">
              <p>
                Blender is the free and open source 3D creation suite. It
                supports the entirety of the 3D pipeline—modeling, rigging,
                animation, simulation, rendering, compositing and motion
                tracking, even video editing and game asset creation. Advanced
                users employ Blender’s API for Python scripting to customize the
                application and write specialized tools; often these are
                included in Blender’s future releases. Blender is well suited to
                individuals and small studios who benefit from its unified
                pipeline and responsive development process. Examples from many
                Blender-based projects are available in the&nbsp;
                <a href="https://www.blender.org/features/">showcase</a>.
              </p>

              <p>
                Blender is cross-platform and runs equally well on Linux,
                Windows, and Macintosh computers. Its interface uses OpenGL to
                provide a consistent experience. To confirm specific
                compatibility, the list of supported platforms indicates those
                regularly tested by the development team.
              </p>
            </div>
          </div>

          <div className="feature-content">
            <div class="card">
              <div class="card-content">
                <a
                  href="https://www.blender.org/features/rendering/"
                  class="card-thumbnail"
                >
                  <img
                    src="https://www.blender.org/wp-content/uploads/2017/11/ghost_driver_lukas_walzer.jpg"
                    alt="Ghost Driver - Lukas Walzer"
                    title="Rendering"
                    loading="lazy"
                  />
                </a>

                <a
                  class="card-title"
                  href="https://www.blender.org/features/rendering/"
                >
                  Rendering
                </a>

                <a
                  class="card-excerpt"
                  href="https://www.blender.org/features/rendering/"
                >
                  <p>
                    Create jaw-dropping renders thanks to Cycles, high-end
                    production path tracer.
                  </p>
                </a>

                <div class="card-more">
                  <a
                    class="more-link"
                    href="https://www.blender.org/features/rendering/"
                  >
                    READ MORE <span class="chevron">→</span>
                  </a>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-content">
                <a
                  href="https://www.blender.org/features/rendering/"
                  class="card-thumbnail"
                >
                  <img
                    src="https://www.blender.org/wp-content/uploads/2017/11/ghost_driver_lukas_walzer.jpg"
                    alt="Ghost Driver - Lukas Walzer"
                    title="Rendering"
                    loading="lazy"
                  />
                </a>

                <a
                  class="card-title"
                  href="https://www.blender.org/features/rendering/"
                >
                  Rendering
                </a>

                <a
                  class="card-excerpt"
                  href="https://www.blender.org/features/rendering/"
                >
                  <p>
                    Create jaw-dropping renders thanks to Cycles, high-end
                    production path tracer.
                  </p>
                </a>

                <div class="card-more">
                  <a
                    class="more-link"
                    href="https://www.blender.org/features/rendering/"
                  >
                    READ MORE <span class="chevron">→</span>
                  </a>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-content">
                <a
                  href="https://www.blender.org/features/rendering/"
                  class="card-thumbnail"
                >
                  <img
                    src="https://www.blender.org/wp-content/uploads/2017/11/ghost_driver_lukas_walzer.jpg"
                    alt="Ghost Driver - Lukas Walzer"
                    title="Rendering"
                    loading="lazy"
                  />
                </a>

                <a
                  class="card-title"
                  href="https://www.blender.org/features/rendering/"
                >
                  Rendering
                </a>

                <a
                  class="card-excerpt"
                  href="https://www.blender.org/features/rendering/"
                >
                  <p>
                    Create jaw-dropping renders thanks to Cycles, high-end
                    production path tracer.
                  </p>
                </a>

                <div class="card-more">
                  <a
                    class="more-link"
                    href="https://www.blender.org/features/rendering/"
                  >
                    READ MORE <span class="chevron">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Feature;
