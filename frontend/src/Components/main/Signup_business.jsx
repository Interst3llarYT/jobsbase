import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import "../../styles/background.css"; // Reuse background styles

function SignUpBusi() {
  const [user, setuser] = useState('');
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [pass, setpass] = useState('');
  const [number, setnumber] = useState('');
  const [loading, setloading] = useState(false);
  const [success, setsuccess] = useState(false);
  const [error, seterror] = useState('');

  const handlesubmit = async (e) => {
    e.preventDefault();
    setloading(true);
    seterror('');
    try {
      const backend = 'https://7z5574jm-9000.use.devtunnels.ms/busyregi';
      const response = await fetch(backend, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name,
          email: email,
          password: pass,
          phone: number
        })
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message);
      }
      setsuccess(true);
      setname('');
      setuser('');
      setnumber('');
      setemail('');
      setpass('');
    } catch (err) {
      seterror(err.message);
    } finally {
      setloading(false);
    }
  };

  return (
    <div className="bg-overlay d-flex align-items-center justify-content-center min-vh-100">
      <div className="container">
        <motion.div
          className="row justify-content-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="col-md-8 col-lg-6">
            <motion.div
              className="card p-4 shadow-sm form-card"
              whileHover={{ scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 120 }}
            >
              <h2 className="text-center mb-4 fw-bold">Business Sign Up</h2>

              {error && <div className="alert alert-danger">{error}</div>}
              {success && <div className="alert alert-success">Business registered successfully!</div>}

              <form onSubmit={handlesubmit}>
                <input type="text" className="form-control mb-3" placeholder="Your Business Name" value={name} onChange={(e) => setname(e.target.value)} required />
                <input type="tel" className="form-control mb-3" placeholder="Your Phone Number" value={number} onChange={(e) => setnumber(e.target.value)} required />
                <input type="email" className="form-control mb-3" placeholder="Your Email" value={email} onChange={(e) => setemail(e.target.value)} required />
                <input type="password" className="form-control mb-3" placeholder="Your Password" value={pass} onChange={(e) => setpass(e.target.value)} required />
                <input type="password" className="form-control mb-4" placeholder="Confirm Password" />
                {/* <NavLink to="/login"> */}
                  <button type="submit" className="btn btn-primary w-100 rounded-pill" disabled={loading}>
                    {loading ? "Registering..." : "Sign Up"}
                  </button>
                {/* </NavLink> */}

              </form>

              <div className="mt-4 text-center">
                <NavLink to="/login" className="btn btn-outline-secondary me-2 rounded-pill">Back</NavLink>
                <p className="text-muted mt-3">
                  Already have an account? <NavLink to="/login" className="text-decoration-none">Login here</NavLink>
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default SignUpBusi;
