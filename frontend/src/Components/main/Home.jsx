import { motion } from "framer-motion";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { NavLink } from "react-router-dom";
import "../../styles/HomePage.css";  // New CSS file
import Navbar from "./Navbar";

function HomePage() {
  return (
    <>
      <Navbar />
      <div style={{ height: '100vh', overflowX: 'hidden', backgroundColor: "#f5f7fa", color: "#333" }}>
        <Parallax pages={3} style={{ backgroundColor: "#f5f7fa", color: "#333" }}>

          {/* HERO Section */}
          <ParallaxLayer offset={0} speed={0.3}>
            <motion.div 
              initial={{ opacity: 0, y: -50 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1 }}
              className="hero-section-aesthetic"
            >
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 2 }}
                className="hero-content-aesthetic"
              >
                <h1 className="hero-title">JOBSBASE</h1>
                <p className="subtext-aesthetic">
                  Your Ultimate Destination for Career Heroes! Unlock Opportunities, Build Your Legacy, and Join the Workforce Revolution.
                </p>
                <div className="hero-buttons-aesthetic">
                  <NavLink to="/about" className="btn-primary-aesthetic">Learn More</NavLink>
                  <NavLink to="/login" className="btn-outline-aesthetic">Get Started</NavLink>
                </div>
              </motion.div>
            </motion.div>
          </ParallaxLayer>

          {/* INFO CARDS Section */}
          <ParallaxLayer offset={1} speed={0.5}>
            <div className="container py-5">
              <h2 className="section-heading-aesthetic text-center mb-5">What Makes JobsBase Different?</h2>
              <div className="row g-4">
                {[
                  { title: "Career-Focused", desc: "Connect with top companies, industry experts, and mentors to guide your career journey." },
                  { title: "AI-Driven Matches", desc: "Our AI system finds the perfect job for you based on your skills, interests, and goals." },
                  { title: "Skill-Building Resources", desc: "Access exclusive tutorials, webinars, and industry insights to level up your professional game." },
                  { title: "Global Reach", desc: "Find opportunities not just locally, but worldwide – your future knows no borders!" },
                  { title: "Real-Time Updates", desc: "Stay ahead of the curve with real-time job market trends, salary insights, and company news." },
                  { title: "Community Vibes", desc: "Join a network of passionate professionals, attend events, and grow together." }
                ].map((card, index) => (
                  <motion.div 
                    key={index} 
                    className="col-md-4"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                  >
                    <div className="info-card-aesthetic">
                      <h4>{card.title}</h4>
                      <p>{card.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </ParallaxLayer>

          {/* FINAL CALL-TO-ACTION */}
          <ParallaxLayer offset={2} speed={0.3}>
            <div className="final-cta-aesthetic">
              <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
                Ready to Join the Workforce Revolution?
              </motion.h2>
              <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}>
                Whether you're a job seeker or an employer, JobsBase is your launchpad to the future. Find your dream job, discover talent, and make your mark on the world.
              </motion.p>
              <div className="hero-buttons-aesthetic">
                <NavLink to="/login" className="btn-primary-aesthetic">Sign In</NavLink>
                <NavLink to="/about" className="btn-outline-aesthetic">Learn More</NavLink>
              </div>
            </div>
          </ParallaxLayer>

        </Parallax>
      </div>
    </>
  );
}

export default HomePage;
