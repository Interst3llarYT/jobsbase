import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Navbar from "./Navbar";
import "../../styles/SignIn.css";  // New CSS file for aesthetic styling

async function invlogin(event) {
  event.preventDefault();

  const email = event.target[0].value;
  const password = event.target[1].value;

  try {
    const response = await fetch("https://7z5574jm-9000.use.devtunnels.ms/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    console.log(data); // handle success
    if (response.ok) {
      alert("Login successful!");
      window.location.href = "/feed";  // Redirect to feed or home page
      // Optionally, you can store user data in localStorage or context for further use
      localStorage.setItem("user", JSON.stringify(data.user));
    } else {
      alert("Login failed: " + data.message);
    }
  } catch (error) {
    console.error("Login error:", error);
  }
}
async function busilogin(event) {
  event.preventDefault();

  const username = event.target[0].value;
  const password = event.target[1].value;

  try {
    const response = await fetch("https://7z5574jm-9000.use.devtunnels.ms/busilogin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    console.log(data); // handle success
    if (response.ok) {
      alert("Login successful!");
      window.location.href = "/feed";  // Redirect to feed or home page
      // Optionally, you can store user data in localStorage or context for further use
      localStorage.setItem("user", JSON.stringify(data.user));
    } else {
      alert("Login failed: " + data.message);
    }
  } catch (error) {
    console.error("Login error:", error);
  }
}
function SignIn() {
  return (
    <>
      <Navbar />
      <div style={{ height: '100vh', overflowX: 'hidden', backgroundColor: '#f5f7fa', color: '#333' }}>
        <Parallax pages={2} style={{ backgroundColor: "#f5f7fa" }}>

          {/* Subtle Background Layer */}
          <ParallaxLayer
            offset={0}
            speed={0.1}
            factor={2}
            style={{
              backgroundImage: 'url(/soft-blurred-bg.jpg)',  // softer background image for aesthetics
              backgroundSize: 'cover',
              filter: 'brightness(0.9) contrast(1)',
            }}
          />

          {/* Header */}
          <ParallaxLayer offset={0} speed={0.4}>
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              className="signin-header-aesthetic"
            >
              <h1>Sign In to JobsBase</h1>
              <p className="header-subtext-aesthetic">Choose your path and unlock your future.</p>
            </motion.div>
          </ParallaxLayer>

          {/* Login Forms */}
          <ParallaxLayer offset={0.7} speed={0.7}>
            <div className="container signin-container-aesthetic">
              <div className="row g-4 justify-content-center">

                {/* Individual Login */}
                <motion.div
                  className="col-md-5"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                >
                  <div className="card signin-card-aesthetic p-4 shadow-soft">
                    <h2 className="text-center mb-4 accent-color">Individual Login</h2>
                    <form onSubmit={invlogin}>
                      <input type="email" placeholder="Enter Your Email" className="form-control input-aesthetic mb-3" required />
                      <input type="password" placeholder="Enter Your Password" className="form-control input-aesthetic mb-3" required />
                      {/* <NavLink to="/feed"> */}
                        <button type="submit" className="btn btn-primary w-100">Login</button>
                      {/* </NavLink> */}

                    </form>
                    <div className="mt-3 text-center">
                      <a href="#" className="link-aesthetic">Forgot password?</a>
                    </div>
                    <div className="mt-3 text-center text-muted">
                      New To JobsBase? <NavLink to="/individual-signup" className="link-aesthetic">Sign up</NavLink>
                    </div>
                  </div>
                </motion.div>

                {/* Business Login */}
                <motion.div
                  className="col-md-5"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                >
                  <div className="card signin-card-aesthetic p-4 shadow-soft">
                    <h2 className="text-center mb-4 accent-color">Business Login</h2>
                    <form onSubmit={busilogin}>
                      <input type="email" placeholder="Enter Your Email" className="form-control input-aesthetic mb-3" required />
                      <input type="password" placeholder="Enter Your Password" className="form-control input-aesthetic mb-3" required />
                      {/* <NavLink to="/feed" className="btn btn-secondary w-100"> */}
                        <button type="submit" className="btn btn-secondary w-100">Business Login</button>
                      {/* </NavLink> */}
                    </form>
                    <div className="mt-3 text-center">
                      <a href="#" className="link-aesthetic">Forgot password?</a>
                    </div>
                    <div className="mt-3 text-center text-muted">
                      New To JobsBase? <NavLink to="/business-signup" className="link-aesthetic">Sign up</NavLink>
                    </div>
                  </div>
                </motion.div>

              </div>
            </div>
          </ParallaxLayer>

        </Parallax>
      </div>
    </>
  );
}

export default SignIn;
