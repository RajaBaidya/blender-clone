import React from "react";
import "../style/home.css";

function Home1() {
  return (
    <main>
      <div className="home">
        <div className="home-container">
          <div className="home-text">
            <h1 className="home-text1">Blender 4.4</h1>
            <p className="home-text2">Action-packed and feature-filled.</p>
            <div className="home-download">
              <button className="home-btn1">Download</button>
              <button className="home-btn2">What's New</button>
            </div>
          </div>
        </div>
      </div>

      <div className="latest-news-section">
        <div className="latest-news-wrapper">
          <div className="latest-news-header">
            <h2 className="latest-news-title">Latest News</h2>
          </div>

          <div className="news-grid">
            <div className="large-item">
              <img
                src="image/bcon25_social_logo_square_color.png"
                alt="BLENDER CONFERENCE"
              />
              <div className="news-info">
                <span className="news-tag">BLENDER CONFERENCE</span>
                <p className="news-desc">Get your tickets for BCON25!</p>
              </div>
            </div>

            <div className="news-item">
              <img
                src="image/blenderheads_ep08_thumbnail_v03_2x1.png"
                alt="BLENDERHEADS"
              />
              <div className="news-info">
                <span className="news-tag">BLENDERHEADS</span>
                <p className="news-desc">Watch the latest episode!</p>
              </div>
            </div>

            <div className="news-item">
              <img src="image/flow_thumbnail.png" alt="USER STORY" />
              <div className="news-info">
                <span className="news-tag">USER STORY</span>
                <p className="news-desc">
                  Making Flow – Interview with director Gints Zilbalodis
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home1;