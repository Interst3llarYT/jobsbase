import { motion } from "framer-motion";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Navbar from "./Navbar";
import "../../styles/AboutUs.css";  // New aesthetic styles

function AboutUs() {
  return (
    <>
      <Navbar />
      <div style={{ height: '100vh', overflowX: 'hidden', backgroundColor: '#f5f7fa', color: '#333' }}>
        <Parallax pages={2} style={{ backgroundColor: "#f5f7fa" }}>

          {/* HERO About Section */}
          <ParallaxLayer offset={0} speed={0.3}>
            <motion.div
              initial={{ opacity: 0, y: -60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              className="about-hero-container-aesthetic"
            >
              <h1 className="about-title">ABOUT JOBSBASE</h1>
              <p className="about-subtext-aesthetic">
                JobsBase is a dynamic platform connecting job seekers with businesses. Our mission is to streamline the job search process and empower individuals to find the right opportunities. We believe in creating meaningful connections that drive growth, success, and innovation.
              </p>
              <p className="about-subtext-aesthetic">
                Whether you're an individual looking for your dream job or a business seeking top talent, JobsBase provides the tools you need to succeed.
              </p>
            </motion.div>
          </ParallaxLayer>

          {/* CALL TO ACTION or extra info */}
          <ParallaxLayer offset={1} speed={0.5}>
            <motion.div
              className="about-cta-aesthetic"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h2 className="cta-title">Join the Workforce Revolution</h2>
              <p className="cta-subtext">
                Ready to discover new opportunities or find top talent? JobsBase is your ultimate launchpad to success.
              </p>
              <div className="about-buttons-aesthetic">
                <motion.a 
                  href="/login" 
                  className="btn-primary-aesthetic" 
                  whileHover={{ scale: 1.1 }} 
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Sign In
                </motion.a>
                <motion.a 
                  href="/" 
                  className="btn-outline-aesthetic" 
                  whileHover={{ scale: 1.1 }} 
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Home
                </motion.a>
              </div>
            </motion.div>
          </ParallaxLayer>

        </Parallax>
      </div>
    </>
  );
}

export default AboutUs;
