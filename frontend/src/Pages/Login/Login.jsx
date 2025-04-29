import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstencs from "../../axios/axiosInstence";
import { setUser } from "../../redux/userSlice";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import Navbar from "../Navbar/Navbar";

function Signin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [inputType, setInputType] = useState("password");

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "") {
      return (document.getElementById("email_error").innerHTML =
        "*Please fill this field");
    } else if (!email.includes("@")) {
      return (document.getElementById(
        "email_error"
      ).innerHTML = `*Please include an '@' in the email address. '${email}' is missing an '@'.`);
    } else {
      document.getElementById("email_error").innerHTML = "";
    }

    if (password === "") {
      return (document.getElementById("pass_error").innerHTML =
        "*Please fill this field");
    } else {
      document.getElementById("pass_error").innerHTML = "";
    }
    axiosInstencs
      .post("/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        localStorage.setItem("access_token", res.data.token);
        const userId = res.data.id;
        const skill = res.data.skills;
        // console.log(skill);
        // console.log(res.data);

        dispatch(setUser(userId));

        if (skill.length === 0) {
          navigate(`/personalinfo/${userId}`);
          toast.success("Complete Your Profile");
        } else {
          navigate("/dashboard");
          toast.success("Login Successfully!!");
        }
      })
      .catch((err) => {
        if (err.status === 500) {
          return (document.getElementById("email_error").innerHTML =
            "*Email does not exist");
          //   toast.error("Email does not exist!! ");
        } else if (err.status === 401) {
          return (document.getElementById("pass_error").innerHTML =
            "*Password incorrect");
        }
        //   toast.error("Password incorrect!!");

        console.log(err);
      });
  };
  const showPassword = () => {
    setInputType((prev) => (prev === "password" ? "text" : "password"));
  };

  return (
    <div className="">
      <Navbar />

      <div className="grid grid-cols-2 gap-[10px] bg-white rounded-[15px] max-lg:grid-cols-1 max-h-[calc(100vh-77px)] max-sm:p-[10px] ">
        <div className="flex   flex-col justify-center p-[60px] max-sm:p-[10px] max-sm:justify-star max-sm:mt-[80px]">
          <div className="pb-[40px] max-sm:pb-[100px">
            <h1 className="text-[32px] font-semibold">Welcome back!</h1>
            <p>Enter your Credentials to access your account</p>
          </div>

          <form action="" className="" onSubmit={handleLogin}>
            <div>
              <label className="text-sm ml-[5px]">Email</label>
              <br />
              <input
                className=" focus:outline-purple-700 rounded-[10px] border-[1px] border-[#D9D9D9] text-[13px] p-[10px] w-full"
                placeholder="Enter your email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span
                id="email_error"
                className="text-red-600 text-xs pl-[5px]"
              ></span>
            </div>
            <br />
            <div>
              <label className="text-sm ml-[5px]">Password</label>
              <br />
              <div className="relative">
                <input
                  className=" focus:outline-purple-700 rounded-[10px] border-[1px] border-[#D9D9D9] text-[13px] p-[10px] w-full"
                  placeholder="Enter your password"
                  type={inputType}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span
                  className="cursor-pointer absolute right-2 top-[5px]"
                  onClick={showPassword}
                >
                  {inputType === "password" ? (
                    <i class="fa-regular fa-eye p-2 hover:bg-gray-200 rounded-md"></i>
                  ) : (
                    <i class="fa-regular fa-eye-slash p-2 hover:bg-gray-200 rounded-md"></i>
                  )}
                </span>
              </div>
              <span
                id="pass_error"
                className="text-red-600 text-xs pl-[5px]"
              ></span>
            </div>
            <br />
            <div className="flex justify-between">
              <div className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="accent-purple-700 w-3 h-3 cursor-pointer"
                  defaultChecked
                />{" "}
                <span className="text-sm pl-[5px]">Remember me</span>
              </div>
              <div>
                <Link
                  to="/forgot-password"
                  className="text-sm font-medium text-purple-600 hover:text-purple-800"
                >
                  Forgot password?
                </Link>
              </div>
            </div>
            <div className="bg-[#7c3bed] text-center rounded-[10px] mt-[10px] hover:bg-purple-700">
              <button className="text-sm text-white p-[10px]">Sign in</button>
            </div>
            <p className="text-center pt-[20px] text-sm">
              Don’t have an account?{" "}
              <Link to="/signup" className="text-purple-700">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
        <div className="max-lg:hidden bg-gradient-to-br from-purple-600 to-indigo-700 text-white flex items-center p-12 h-screen">
          <div className="">
            <h1 className="text-3xl font-bold mb-6">
              Grow your skills with SkillSwap
            </h1>
            <p className="text-lg mb-8">
              Connect with mentors and peers, share knowledge, and accelerate
              your learning journey.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex">
                <div className="pr-[15px] flex items-center">
                  <i class="bg-white/20 p-[10px] text-2xl rounded-full fa-solid fa-user-group"></i>
                </div>
                <div>
                  <h3 className="font-semibold">Expert Mentors</h3>
                  <p className="text-sm text-white/80">
                    Learn from industry professionals
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="pr-[15px] flex items-center">
                  <i class="bg-white/20 p-[10px] text-2xl rounded-full fa-regular fa-message"></i>
                </div>
                <div>
                  <h3 className="font-semibold">Live Discussions</h3>
                  <p className="text-sm text-white/80">
                    Engage in real-time conversations
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="pr-[15px] flex items-center">
                  <i class="bg-white/20 p-[10px] text-4xl rounded-full fa-regular fa-lightbulb"></i>
                </div>
                <div>
                  <h3 className="font-semibold">Skill Exchange</h3>
                  <p className="text-sm text-white/80">
                    Trade knowledge with peers
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="pr-[15px] flex items-center">
                  <i class="bg-white/20 p-[10px] text-2xl rounded-full fa-solid fa-shield"></i>
                </div>
                <div>
                  <h3 className="font-semibold">Secure Platform</h3>
                  <p className="text-sm text-white/80">
                    Safe and private interactions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
