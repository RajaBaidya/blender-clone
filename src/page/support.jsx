import React from "react";
import "../style/support.css";

function Support() {
  return (
    <div className="support">


      <nav className="support-nav">
        <div className="support-navinner">
          <ol class="breadcrumb">
            <li>
              <a>Support</a>
            </li>
            <div className="breadcrumb-sublist">
            
                <a>Documentation</a>
              
            
                <a>Community</a>
              
            
                <a>Enterprise</a>
              
            </div>
          </ol>
        </div>
      </nav>

      <div className="support-header">
        <div className="support-headerbg">
          <div className="support-headerinner">
            <h1 className="support-title">Support</h1>
          </div>
        </div>
      </div>

      <div className="support-container">
        <div className="support-innercontainer">
          <div className="support-content">
            <div className="support-section">
              <h3 className="section-headtext">Documentation</h3>
              <p className="section-subtext">
                Blender’s user manual is available online in several languages
                and is constantly updated by a worldwide collaboration of
                volunteers.
              </p>
              <div className="support-buttons">
                <button className="support-btnblue">User Manual</button>
                <button className="support-btn">Devloper Documentation</button>
                <button className="support-btn">Paython API Reference</button>
              </div>
            </div>
          </div>

          <div className="support-content">
            <div className="support-section">
              <h3 className="section-headtext">Tutorials</h3>
              <p className="section-subtext">
                The most up-to-date tutorials can be found on social media.
              </p>
              <p className="section-subtext">
                Look out for the hashtag #b3d on{" "}
                <sapn className="underline">Mastodon</sapn>,{" "}
                <span className="underline">YouTube</span>, X, or your favorite
                social network.
              </p>
              <p className="section-subtext">
                For professional training, real production knowledge and assets,
                check out Blender Studio.
              </p>
            </div>
          </div>

          <div className="support-content">
            <div className="support-section">
              <h3 className="section-headtext">FAQ</h3>
              <p className="section-subtext">
                A list of{" "}
                <span className="underline">Frequently Asked Questions </span>{" "}
                covering topics such as using Blender commercially, the GNU GPL
                license, add-ons usage and more.
              </p>
              <div className="support-buttons">
                <button className="support-btnblue">Read FAQ</button>
              </div>
            </div>
          </div>
        </div>

        <div className="support-innercontainer">
          <div className="support-content">
            <div className="support-section">
              <h3 className="section-headtext">Enterprise Support</h3>
              <p className="section-subtext">
                Canonical offers professional, enterprise-grade support services
                for the Blender LTS releases.
              </p>
              <p className="section-subtext">
                Learn more about this product at{" "}
                <span className="underline"> ubuntu.com </span>
                and read the
                <span className="underline"> announcement on blender.or</span>g.
              </p>
            </div>
          </div>

          <div className="support-content">
            <div className="support-section">
              <h3 className="section-headtext">Community Support</h3>
              <p className="section-subtext">
                The Blender community offers a wealth of excellent websites with
                support forums.
              </p>
            </div>
            <ui className="support-listcontainer">
              <li className="support-list">Blender Stack Exchange</li>
              <li className="support-list">Blender Artists Forum</li>
              <li className="support-list">User Communities</li>
            </ui>
          </div>

          <div className="support-content">
            <div className="support-section">
              <h3 className="section-headtext">Report a Bug</h3>
              <p className="section-subtext">
                Sometimes bugs happen, but don’t worry! Developers got your
                back.
              </p>
              <p className="section-subtext">
                Please <span className="underline"> read this </span> before
                reporting to learn the best practices.
              </p>
              <p className="section-subtext">
                If you’d like to help fixing bugs, there are plenty of ways to
                get involved in making Blender better.{" "}
                <snap className="underline"> Contact developers.</snap>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Support;
