import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import "../../styles/background.css";

function SignUp() {
    const [fname, setfname] = useState('');
    const [lname, setlname] = useState('');
    const [age, setage] = useState('');
    const [user, setuser] = useState('');
    const [pass, setpass] = useState('');
    const [loading, setloading] = useState(false);
    const [success, setsuccess] = useState(false);
    const [error, seterror] = useState('');

    const handlesubmit = async (e) => {
        e.preventDefault();
        setloading(true);
        seterror('');
        try {
            const backend = 'https://7z5574jm-9000.use.devtunnels.ms/indregi';
            const response = await fetch(backend, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    firstname: fname,
                    lastname: lname,
                    age: age,
                    email: user,
                    password: pass
                })
            });
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message);
            }
            setsuccess(true);
            setfname('');
            setlname('');
            setage('');
            setuser('');
            setpass('');
        } catch (err) {
            seterror(err.message);
        } finally {
            setloading(false);
        }
    };

    return (
        <div className="bg-overlay d-flex align-items-center justify-content-center min-vh-100">
            <motion.div
                className="container"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <motion.div
                            className="card shadow-lg p-4 rounded-4"
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-center mb-4 fw-bold">Individual Sign Up</h2>

                            {error && <div className="alert alert-danger">{error}</div>}
                            {success && <div className="alert alert-success">Registration successful!</div>}

                            <form onSubmit={handlesubmit}>
                                <div className="mb-3">
                                    <input type="text" className="form-control rounded-3" placeholder="First Name" value={fname} onChange={(e) => setfname(e.target.value)} required />
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control rounded-3" placeholder="Last Name" value={lname} onChange={(e) => setlname(e.target.value)} required />
                                </div>
                                <div className="mb-3">
                                    <input type="number" className="form-control rounded-3" placeholder="Age" value={age} onChange={(e) => setage(e.target.value)} required />
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control rounded-3" placeholder="School Name" />
                                </div>
                                <div className="mb-3">
                                    <input type="email" className="form-control rounded-3" placeholder="Email" value={user} onChange={(e) => setuser(e.target.value)} required />
                                </div>
                                <div className="mb-3">
                                    <input type="password" className="form-control rounded-3" placeholder="Password" value={pass} onChange={(e) => setpass(e.target.value)} required />
                                </div>

                                <div className="mb-4">
                                    <input type="password" className="form-control rounded-3" placeholder="Confirm Password" />
                                </div>
                                {/* <NavLink to="/login"> */}
                                    <motion.button
                                        type="submit"
                                        className="btn btn-primary w-100 rounded-3 fw-semibold"
                                        whileTap={{ scale: 0.95 }}
                                        disabled={loading}
                                    >
                                        {loading ? "Submitting..." : "Submit"}
                                    </motion.button>
                                {/* </NavLink> */}

                            </form>

                            <div className="mt-3 text-center">
                                <NavLink to="/login" className="btn btn-outline-secondary rounded-3 fw-semibold">Back</NavLink>
                                <p className="mt-2">Already have an account? <NavLink to="/individual login" className="fw-semibold text-decoration-none">Login here</NavLink></p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default SignUp;
