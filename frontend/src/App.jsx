import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ParallaxProvider } from 'react-scroll-parallax';
import SignIn from "./Components/Signin.jsx";
import AboutUs from "./Components/AboutUs.jsx";
import Menu from "./Components/Menu.jsx";
import Profile from "./Components/Profile.jsx";
import Navbar from "./Components/MainNavbar.jsx";
import Home from "./Components/Home.jsx";
import SignUp from "./Components/Signup_invid.jsx";
import SignUpBusi from "./Components/Signup_business.jsx";
import Feed from "./Components/Feed.jsx";
import Video_view from "./Components/Video_view.jsx";
import SignedInHomePage from "./Components/SignedInHomePage.jsx";
import Jobs from "./Components/Jobs.jsx";
import Notifications from "./Components/Notifications.jsx";
import Upload from "./Components/Upload.jsx";
import Report from "./Components/Report.jsx";
import Chat from "./Components/Chat.jsx";
import Follow from "./Components/Follow.jsx";
import Test from "./Components/Test.jsx";

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
            <Route path="/individual signup" element={<SignUp/>}/>
            <Route path="/business signup" element={<SignUpBusi/>}/>
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
            <Route path="/test" element={<Test/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}
export default App
