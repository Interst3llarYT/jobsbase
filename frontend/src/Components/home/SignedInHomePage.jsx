import { motion } from "framer-motion";
import Navb from "./HomeNav";
import "../../styles/SignedInHomePage.css";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";
import confetti from "canvas-confetti";

function SignedInHomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.showConfetti) {
      const duration = 3000;
      const animationEnd = Date.now() + duration;

      const interval = setInterval(() => {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          clearInterval(interval);
          return;
        }

        confetti({
          particleCount: 5,
          angle: 90,
          spread: 60,
          origin: { x: 0.5, y: 1 },
          gravity: 0.5,
        });
      }, 250);
    }
  }, [location.state]);
const userData = JSON.parse(localStorage.getItem("user"));
const hey = userData?.firstname || "User";
// alert(userData?.firstname);
  return (
    <>
      <Navb />
      <motion.div
        className="dashboard-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <section className="hero-section">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hey, {hey}!
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Your career journey starts here. Let’s make it happen!
          </motion.p>
        </section>

        <section className="quick-links">
          {[
            { path: "/jobs", label: "Jobs" },
            { path: "/upload", label: "Upload Course/Video" },
            { path: "/chat", label: "Chat with Businesses" },
            { path: "/follow", label: "Follow Businesses and Individuals" }
          ].map((link, index) => (
            <motion.div
              key={index}
              className="card"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <NavLink to={link.path}>{link.label}</NavLink>
            </motion.div>
          ))}
        </section>

        <section className="feed">
          <h2>Latest Updates</h2>
          <motion.div
            className="feed-item"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            New AI course launched!
          </motion.div>
          <motion.div
            className="feed-item"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            Join the Networking Event on Friday.
          </motion.div>
          <motion.div
            className="feed-item"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            12 new jobs posted today!
          </motion.div>
        </section>
      </motion.div>
    </>
  );
}

export default SignedInHomePage;
