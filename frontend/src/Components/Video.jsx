import "../styles/navb.css";
import vid from "../assets/imgs/1.mp4";
import jobbase from "../assets/imgs/verified.png";
import { NavLink } from "react-router-dom";

function Video() {
  return (
    <div className="video-container">
      <header className="video-header">
        <h1 className="jobbase-title">
          JobsBase <img src={jobbase} alt="Verified Logo" className="verified-icon" />
        </h1>
      </header>

      <main className="video-main">
        <NavLink to="/vid:id" className="video-link" aria-label="Watch JobsBase video">
          <video className="video-player" preload="metadata" controls>
            <source src={vid} type="video/mp4" />
            Sorry, your browser does not support the video tag.
          </video>
        </NavLink>

        <section className="video-details">
          <p className="video-description">bkawujvbdkjwadbv</p>
          <p className="video-author">
            <span className="at-symbol">@jobsbase</span> aiwdbvwauiodb
          </p>
          <p className="video-meta">Uploaded on: 4-04-2015</p>
          <p className="video-meta">Likes: 5</p>
          <p className="video-meta">Comments: 3</p>
        </section>
      </main>
    </div>
  );
}

export default Video;
