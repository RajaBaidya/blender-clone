import React from "react";

import '../style/footer.css';

function Footer() {
  return (

        

    <footer className="footer-container">      
      <div className="footer-innercontainer">
        <div className="footer-column">
          <h4 className="footer-header">Download</h4>
          <ul>
            <li><a className="footer-subtext" href="#">Latest Blender</a></li>
            <li><a className="footer-subtext" href="#">Blender LTS</a></li>
            <li><a className="footer-subtext" href="#">Blender Benchmark</a></li>
            <li><a className="footer-subtext" href="#">Previous Versions</a></li>
            <li><a className="footer-subtext" href="#">Experimental Builds</a></li>
            <li><a className="footer-subtext" href="#">Source Code</a></li>
            <li><a className="footer-subtext" href="#">Release Notes</a></li>
            <li><a className="footer-subtext" href="#">Requirements</a></li>
          </ul>
          <h4 className="footer-header">Organization</h4>
          <ul>
            <li><a className="footer-subtext" href="#">People</a></li>
            <li><a className="footer-subtext" href="#">Jobs</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4 className="footer-header">About</h4>
          <ul>
            <li><a className="footer-subtext" href="#">Blender Foundation</a></li>
            <li><a className="footer-subtext" href="#">Blender Institute</a></li>
            <li><a className="footer-subtext" href="#">Blender Studio</a></li>
            <li><a className="footer-subtext" href="#">License</a></li>
            <li><a className="footer-subtext" href="#">Logo & Trademark</a></li>
            <li><a className="footer-subtext" href="#">Credits</a></li>
            <li><a className="footer-subtext" href="#">Privacy Policy</a></li>
          </ul>
          <h4 className="footer-header">Articles</h4>
          <ul>
            <li><a className="footer-subtext" href="#">News</a></li>
            <li><a className="footer-subtext" href="#">Pre Releases</a></li>
            <li><a className="footer-subtext" href="#">User Stories</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4 className="footer-header">Get Involved</h4>
          <ul>
            <li><a className="footer-subtext" href="#">Dashboard</a></li>
            <li><a className="footer-subtext" href="#">Development</a></li>
            <li><a className="footer-subtext" href="#">Documentation</a></li>
            <li><a className="footer-subtext" href="#">Education</a></li>
          </ul>
          <h4 className="footer-header">Blender Studio</h4>
          <ul>
            <li><a className="footer-subtext" href="#">Films</a></li>
            <li><a className="footer-subtext" href="#">Training</a></li>
          </ul>
          <h4 className="footer-header">Support</h4>
          <ul>
            <li><a className="footer-subtext" href="#">Manual</a></li>
            <li><a className="footer-subtext" href="#">Community</a></li>
            <li><a className="footer-subtext" href="#">FAQ</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4 className="footer-header">Developers</h4>
          <ul>
            <li><a className="footer-subtext" href="#">Get Started</a></li>
            <li><a className="footer-subtext" href="#">Projects</a></li>
            <li><a className="footer-subtext" href="#">Docs</a></li>
            <li><a className="footer-subtext" href="#">Blog</a></li>
            <li><a className="footer-subtext" href="#">Forum</a></li>
            <li><a className="footer-subtext" href="#">Youtube</a></li>
            <li><a className="footer-subtext" href="#">Python API</a></li>
          </ul>
          <h4 className="footer-header">Blender Conference</h4>
        </div>

        <div className="footer-column follow-column">
          <h4 className="footer-header">Follow Blender</h4>
          <div className="footer-social">
            <img src="icon/youtube.png" alt="YouTube" />
            <img src="icon/bluesky.png" alt="Bluesky" />
            <img src="icon/instagram.png" alt="Instagram" />
            <img src="icon/facebook.png" alt="Facebook" />
            <img src="icon/linkedin.png" alt="LinkedIn" />
            <img src="icon/mastodon.png" alt="Mastodon" />
            <img src="icon/tik-tok.png" alt="Tiktok" />
            <img src="icon/bilibili.png" alt="Bilibili" />
          </div>
          <h4 className="footer-header">Support Blender</h4>
          <div className="footer-support">
            <button className="donate-button">Donate</button>
            <p className="donate-desc">One-time-donation</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;