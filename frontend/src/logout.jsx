import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear session storage
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('ut');
    localStorage.removeItem("email")
    
    localStorage.removeItem("business-dark-mode")
    localStorage.removeItem("darkMode");
    localStorage.removeItem("job");
    localStorage.removeItem("savedJobIds");
    localStorage.removeItem("savedJobs");
    localStorage.removeItem("user");  


    
    // Redirect to home page
    navigate('/');
  }, [navigate]);

  return null; // This component doesn't render anything
};

export default Logout;