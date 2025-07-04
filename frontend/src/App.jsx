import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ParallaxProvider } from 'react-scroll-parallax';
import SignIn from "./Components/main/SignIn.jsx";
import AboutUs from "./Components/main/AboutUs.jsx";
import BusinessHome from "./Components/BusinessHome/HomePage.jsx";
import Profile from "./Components/home/Profile.jsx";

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
function App() {

  Request()
  return (
    <>
      <div>
        {/* <Menu/> */}
        <BrowserRouter>
          {/* <Menu />  */}
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/gallery" element={<Gallery />} /> */}
            {/* <Route path="/profile" element={<Profile />} />
            <Route path="/Shop" element={<Shop />} />*/}
            <Route path="/login" element={<SignIn />} /> 
            <Route path="/individual-signup" element={<SignUp/>}/>
            <Route path="/business-signup" element={<SignUpBusi/>}/>
            <Route path="/feed" element={<Feed/>}/>
            <Route path="/vid:id" element={<Video_view/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/about" element={<AboutUs />} />
            <Route path="/home" element={<SignedInHomePage/>}/>
            <Route path="/jobs" element={<Jobs/>}/>
            <Route path="/notifications" element={<Notifications/>}/>
            <Route path="/upload" element={<Upload/>}/>
            <Route path="/report" element={<Report/>}/>
            <Route path="/chat" element={<Chat/>}/>
            <Route path="/follow" element={<Follow/>}/>
            <Route path="/business" element={<BusinessHome />} />
            <Route path="/business/post-job" element={<PostJob />} />
            <Route path="/business/chat" element={<BusinessChat />} />
            <Route path="/business/profile" element={<BusinessProfile />} />
            <Route path="/business/upload" element={<BusinessUpload />} />
            <Route path="/business/report" element={<BusinessReport />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}
export default App
