import "../styles/navb.css";
import "../styles/video_view.css"; // Separate CSS for this component
import vid from "../assets/imgs/1.mp4";
import jobbase from "../assets/imgs/verified.png";
import { NavLink } from "react-router-dom";

function Video() {
  return (
    <div className="video-container">
      <header className="video-header">
        <h1 className="jobbase-title">
          JobsBase{" "}
          <img
            src={jobbase}
            alt="Verified Logo"
            className="verified-icon"
            width={24}
            height={24}
          />
        </h1>
      </header>

      <main className="video-main">
        {/* Fix NavLink: use "/vid/1" or similar, no colon inside */}
        <NavLink to="/vid:id" className="video-link" aria-label="Watch JobsBase video">
          <video className="video-player" preload="metadata" controls>
            <source src={vid} type="video/mp4" />
            Sorry, your browser does not support the video tag.
          </video>
        </NavLink>

        <section className="video-details">
          <p className="video-description">Here is an example video description.</p>
          <p className="video-author">
            <span className="at-symbol">@jobsbase</span>
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
