import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear session storage
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('ut');
    
    // Redirect to home page
    navigate('/');
  }, [navigate]);

  return null; // This component doesn't render anything
};

export default Logout;