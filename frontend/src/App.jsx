import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./Pages/SignUp/Signup";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import { Toaster } from "react-hot-toast";
import Personalinfo from "./Pages/Personalinfo/Personalinfo";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Chat from "./Pages/Dashboard/Chat";
import Navbar from "./Pages/Navbar/Navbar";
import ProtectRoutes from "./ProtectRoutes";
import Notfound from "./Pages/Notfound";
import Menu from "./Pages/Dashboard/Sidebar";
import Search from "./Pages/Dashboard/Search";
import Profile from "./Pages/Dashboard/Profile";
import Forums from "./Pages/Dashboard/Forums";
import Settings from "./Pages/Dashboard/Settings";
import Editprofile from "./Pages/Dashboard/Editprofile";
import MentorProfile from "./Pages/Dashboard/MentorProfile";
import ForgotPassword from "./Pages/Login/ForgotPassword";
import ResetPassword from "./Pages/Login/ResetPassword";
import Allmentors from "./Pages/Dashboard/Allmentors";
import "./App.css";

function App() {
  return (
    <div>
      <Toaster position="bottom-right" reverseOrder={false} 
      toastOptions={{
        style:{
          borderRadius:"6px"
        }
      }}
      />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />

            <Route path="/forgot-password" element={<ForgotPassword/>}/>
            <Route path="/reset-password/:id/:token" element={<ResetPassword/>}/>
          <Route element={<ProtectRoutes />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/personalinfo/:id" element={<Personalinfo />} />
            <Route path="/mentor/:id/:myId" element={<MentorProfile />} />
            <Route path="/chat" element={<Chat/>}/>
            <Route path="/forums" element={<Forums/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/settings" element={<Settings/>}/>
            <Route path="/profile/edit/:id" element={<Editprofile/>}/>
            <Route path="/all-mentors/:id" element={<Allmentors/>}/>
          </Route>
          <Route path="*" element={<Notfound/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
