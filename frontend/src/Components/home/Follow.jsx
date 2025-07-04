import React, { useState } from "react";
import "../../styles/Follow.css"; // Assuming you have a CSS file for styling
import Navb from "./HomeNav";

const sampleBusinesses = [
  { id: 1, name: "TechCorp", description: "Innovative tech solutions" },
  { id: 2, name: "Designify", description: "Creative design agency" },
];

const sampleIndividuals = [
  { id: 1, name: "Alice Johnson", profession: "UX Designer" },
  { id: 2, name: "Bob Smith", profession: "Full Stack Dev" },
];

function Follow() {
  const [followedBusinesses, setFollowedBusinesses] = useState([]);
  const [followedIndividuals, setFollowedIndividuals] = useState([]);

  const toggleBusinessFollow = (id) => {
    setFollowedBusinesses((prev) =>
      prev.includes(id) ? prev.filter((b) => b !== id) : [...prev, id]
    );
  };

  const toggleIndividualFollow = (id) => {
    setFollowedIndividuals((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <>
    <Navb/>
    <div className="follow-container">
      <h2>Follow Businesses and Individuals</h2>

      <section>
        <h3>Businesses</h3>
        <ul className="follow-list">
          {sampleBusinesses.map((biz) => {
            const isFollowed = followedBusinesses.includes(biz.id);
            return (
              <li key={biz.id} className="follow-item">
                <div>
                  <strong>{biz.name}</strong>
                  <p>{biz.description}</p>
                </div>
                <button
                  className={`btn-follow ${isFollowed ? "btn-unfollow" : ""}`}
                  onClick={() => toggleBusinessFollow(biz.id)}
                >
                  {isFollowed ? "Unfollow" : "Follow"}
                </button>
              </li>
            );
          })}
        </ul>
      </section>

      <section>
        <h3>Individuals</h3>
        <ul className="follow-list">
          {sampleIndividuals.map((ind) => {
            const isFollowed = followedIndividuals.includes(ind.id);
            return (
              <li key={ind.id} className="follow-item">
                <div>
                  <strong>{ind.name}</strong>
                  <p>{ind.profession}</p>
                </div>
                <button
                  className={`btn-follow ${isFollowed ? "btn-unfollow" : ""}`}
                  onClick={() => toggleIndividualFollow(ind.id)}
                >
                  {isFollowed ? "Unfollow" : "Follow"}
                </button>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
    </>
  );
}

export default Follow;
