import { useEffect } from 'react';

function Logout() {
  useEffect(() => {
    // Perform logout when component mounts
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('ut');
    window.location.href = '/';
  }, []); // Empty dependency array means this runs once when component mounts

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh' 
    }}>
      Logging out...
    </div>
  );
}

export default Logout;