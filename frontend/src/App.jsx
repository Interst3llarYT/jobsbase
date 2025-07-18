import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignIn from "./Components/main/SignIn.jsx";
import AboutUs from "./Components/main/AboutUs.jsx";
import BusinessHome from "./Components/BusinessHome/HomePage.jsx";
import Profile from "./Components/home/Profile.jsx";
import Logout from "./logout.jsx";
import Home from "./Components/main/Home.jsx";
import SignUp from "./Components/main/Signup_invid.jsx";
import SignUpBusi from "./Components/main/Signup_business.jsx";
import Feed from "./Components/home/Feed.jsx";
import Video_view from "./Components/Video_view.jsx";
import SignedInHomePage from "./Components/home/SignedInHomePage.jsx";
import Jobs from "./Components/home/Jobs.jsx";
import Notifications from "./Components/home/Notifications.jsx";
import Upload from "./Components/home/Upload.jsx";
import Report from "./Components/home/Report.jsx";
import Chat from "./Components/home/Chat.jsx";
import Follow from "./Components/home/Follow.jsx";
import PostJob from "./Components/BusinessHome/PostJob.jsx";
import BusinessChat from "./Components/BusinessHome/BusinessChat.jsx";
import BusinessUpload from "./Components/BusinessHome/BusinessUpload.jsx";
import BusinessReport from "./Components/BusinessHome/BusinessReport.jsx";
import BusinessProfile from "./Components/BusinessHome/BusinessProfile.jsx";
import JobDetails from "./Components/home/JobDetails.jsx";

async function Request(){
try{
const response = await fetch('https://7z5574jm-9000.use.devtunnels.ms/')
if(response.ok){
  const data = await response.json();
  // alert(data.message)
}
}
catch(error){
  console.error(error);
};
};

// Helper function to parse session storage value
const getSessionValue = (key) => {
  const value = sessionStorage.getItem(key);
  try {
    return value ? JSON.parse(value) : null;
  } catch {
    return value;
  }
};

// Auth Redirect Route - Prevents authenticated users from accessing login/signup pages
const AuthRedirectRoute = ({ children }) => {
  const email = getSessionValue('email');
  const userType = getSessionValue('ut');
  
  if (email && userType) {
    return <Navigate to={userType === 'business' ? '/business' : '/home'} replace />;
  }

  return children;
};

// Protected Route Component for individual user routes
const ProtectedRoute = ({ children }) => {
  const email = getSessionValue('email');
  const userType = getSessionValue('ut');
  
  if (!email || !userType) {
    return <Navigate to="/login" />;
  }

  // If it's a business user trying to access individual routes, stay on current page
  if (userType === 'business') {
    return <Navigate to="." replace />;
  }

  return children;
};

// Business Protected Route Component
const BusinessProtectedRoute = ({ children }) => {
  const email = getSessionValue('email');
  const userType = getSessionValue('ut');
  
  console.log('Business Route Check:', { email, userType }); // Debug log
  
  if (!email || !userType) {
    console.log('No authentication, redirecting to login');
    return <Navigate to="/login" />;
  }

  // Check if user is a business user
  const isBusiness = userType === 'business';
  console.log('Is business user:', isBusiness);

  if (!isBusiness) {
    console.log('Not a business user, staying on current page');
    return <Navigate to="." replace />;
  }

  console.log('Business user confirmed, rendering route');
  return children;
};

function App() {
  Request()
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<AuthRedirectRoute><SignIn /></AuthRedirectRoute>} />
            <Route path="/individual-signup" element={<AuthRedirectRoute><SignUp/></AuthRedirectRoute>}/>
            <Route path="/business-signup" element={<AuthRedirectRoute><SignUpBusi/></AuthRedirectRoute>}/>
            <Route path="/about" element={<AboutUs />} />
            <Route path="/logout" element={<Logout />} />

            {/* Protected routes for all authenticated users */}
            <Route path="/feed" element={<ProtectedRoute><Feed/></ProtectedRoute>}/>
            <Route path="/vid:id" element={<ProtectedRoute><Video_view/></ProtectedRoute>}/>
            <Route path="/profile" element={<ProtectedRoute><Profile/></ProtectedRoute>}/>
            <Route path="/home" element={<ProtectedRoute><SignedInHomePage/></ProtectedRoute>}/>
            <Route path="/jobs" element={<ProtectedRoute><Jobs/></ProtectedRoute>}/>
            <Route path="/jobs/:id" element={<ProtectedRoute><JobDetails/></ProtectedRoute>}/>
            <Route path="/notifications" element={<ProtectedRoute><Notifications/></ProtectedRoute>}/>
            <Route path="/upload" element={<ProtectedRoute><Upload/></ProtectedRoute>}/>
            <Route path="/report" element={<ProtectedRoute><Report/></ProtectedRoute>}/>
            <Route path="/chat" element={<ProtectedRoute><Chat/></ProtectedRoute>}/>
            <Route path="/follow" element={<ProtectedRoute><Follow/></ProtectedRoute>}/>

            {/* Protected routes for business users only */}
            <Route path="/business" element={<BusinessProtectedRoute><BusinessHome /></BusinessProtectedRoute>} />
            <Route path="/business/post-job" element={<BusinessProtectedRoute><PostJob /></BusinessProtectedRoute>} />
            <Route path="/business/chat" element={<BusinessProtectedRoute><BusinessChat /></BusinessProtectedRoute>} />
            <Route path="/business/profile" element={<BusinessProtectedRoute><BusinessProfile /></BusinessProtectedRoute>} />
            <Route path="/business/upload" element={<BusinessProtectedRoute><BusinessUpload /></BusinessProtectedRoute>} />
            <Route path="/business/report" element={<BusinessProtectedRoute><BusinessReport /></BusinessProtectedRoute>} />
            {/* Fallback route */}
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
