import "../styles/video.css";
import vid from "../assets/imgs/1.mp4";
import verif from "../assets/imgs/verified.png"
import Navb from "./navb";

function Video_view() {
  return (
    <>
    <Navb/>
    <div className="content">
      <div className="wrapped">
        {/* Main Video Section */}
        <div className="wideo">
          <div className="vidlogo">
            <p className="joblogo">JobsBase</p>
            <img className="verif" src={verif} alt="Verified Badge" />
          </div>

          <div className="video-wrapper" style={{ textAlign: 'center' }}>
            <video className="img-fluid" preload="metadata" controls>
              <source src={vid} type="video/mp4" />
              Sorry, your browser does not support the video tag.
            </video>
          </div>

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
        </div>

        {/* Recommended Videos Section */}
        <aside className="wideo-recmnds">
          <div className="recoms">
            {[...Array(3)].map((_, idx) => (
              <div className="recom" key={idx}>
                <div className="sections">
                  <div className="smallwideo">
                    {/* title or label */}
                    <p>Test Video {idx + 1}</p>

                    <div style={{ textAlign: "center" }}>
                      <video className="img-fluid" preload="metadata" controls muted>
                        <source src={vid} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>

                    <div className="textunvid">
                      <p>bkawujvbdkjwadbv</p>
                      <p><span className="at">@jobsbase</span></p>
                      <p>Uploaded on: 4-04-2015</p>
                      <p>Likes: 5</p>
                      <p>Comments: 3</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
    </>
    
  );
}

export default Video_view;
