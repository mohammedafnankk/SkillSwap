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
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />

          <Route element={<ProtectRoutes />}>
            <Route path="/personalinfo/:id" element={<Personalinfo />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/mentor/:id" element={<MentorProfile />} />
            <Route path="/chat" element={<Chat currentUser="arun" otherUser="adhi" />}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/forums" element={<Forums/>}/>
            <Route path="/settings" element={<Settings/>}/>
            <Route path="/profile/edit/:id" element={<Editprofile/>}/>
          </Route>
          <Route path="*" element={<Notfound/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
