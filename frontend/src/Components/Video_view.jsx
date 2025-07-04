import React, { useState, useEffect } from "react";
import "../styles/video.css";
import vid from "../assets/imgs/1.mp4";
import jobbase from "../assets/imgs/verified.png";
import confetti from "canvas-confetti";
import { useNavigate } from "react-router-dom";
import Navb from "./home/HomeNav";

function Video_view() {
  const navigate = useNavigate();
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (showConfetti) {
      // Fire confetti for ~3 seconds
      const duration = 2000;
      const animationEnd = Date.now() + duration;

      const interval = setInterval(() => {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          clearInterval(interval);
          setShowConfetti(false);
          navigate("/home"); // Adjust this route as needed
          return;
        }

        // Shoot confetti from bottom center with some spread
        confetti({
          particleCount: 5,
          angle: 90,
          spread: 80,
          origin: { x: 0.5, y: 1 },
          gravity: 0.5,
        });
      }, 250);


      // Cleanup on component unmount or state change
      return () => clearInterval(interval);
    }
  }, [showConfetti, navigate]);

  // Handler for finish course button
  function handleFinishCourse() {
    setShowConfetti(true);
  }

  return (
    <>
      <Navb />
      <div className="content">
        <div className="wrapped">
          <div className="wideo">
            {/* logo */}
            <div className="vidlogo">
              <p className="joblogo">JobsBase</p>
              <img className="verif" src={jobbase} alt="JobsBase Verified" />
            </div>
            {/* logo end */}

            {/* video */}
            <center>
              <video className="img-fluid" preload="metadata" controls>
                <source src={vid} />
              </video>
            </center>
            {/* video end */}

            {/* text under video */}
            <div className="textunvid">
              <p className="textshtuf">bkawujvbdkjwadbv</p>
              <p className="textshtuf">Uploaded on: 4-04-2015</p>
              <div className="newshtuffadded">
                <div className="likebtn">
                  <button className="btnlike btun">Like</button>
                  <br />
                  <input placeholder="Post a Comment" className="cmnttext" />
                  <br />
                  <button className="btncmnt btun">Comment</button>
                </div>
              </div>
              <p className="textshtuf">Likes: 5</p>
              <p className="textshtuf">Comments: 3</p>
              <button className="showcmnts btun">Show Comments</button>
              <p className="textshtuf">aowibdoaiwbd</p>
              <button className="reprtvid btun">Report Video</button>
            </div>

            {/* Finish Course Button */}
            <div style={{ textAlign: "center", marginTop: "30px" }}>
              <button
                onClick={handleFinishCourse}
                className="finish-course-button"
                disabled={showConfetti}
              >
                Finish Course
              </button>

            </div>
          </div>

          {/* Recommended videos (no changes) */}
          <div className="wideo-recmnds">
            <div className="recoms">
              {[1, 2, 3].map((item) => (
                <div key={item} className="sections">
                  <div className="smallwideo">
                    <center>
                      <video className="img-fluid" preload="metadata">
                        <source src={vid} type="video/mp4" />
                      </video>
                    </center>
                    <div className="textunvid">
                      bkawujvbdkjwadbv
                      <br />
                      <span className="at">@jobsbase</span>
                      <br />
                      Uploaded on: 4-04-2015
                      <br />
                      Likes: 5
                      <br />
                      Comments: 3
                      <br />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Video_view;
