import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstencs from "../../axios/axiosInstence";
import toast from "react-hot-toast";
import Navbar from "../Navbar/Navbar";

function Signup() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [inputType, setInputType] = useState("password");
  const [cinputType, setCInputType] = useState("password");
  const [cPassword, setCPassword] = useState("");


  const Months = [
    { m: 1, M: "January" },
    { m: 2, M: "February" },
    { m: 3, M: "March" },
    { m: 4, M: "April" },
    { m: 5, M: "May" },
    { m: 6, M: "June" },
    { m: 7, M: "July" },
    { m: 8, M: "Ougust" },
    { m: 9, M: "September" },
    { m: 10, M: "October" },
    { m: 11, M: "Novembar" },
    { m: 12, M: "December" },
  ];

  const handelRegister = (e) => {
    const today = new Date();

    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    var joined_date = "";
    Months.map((MM) => {
      if (MM.m === month) {
        const date = MM.M + " " + year;
        joined_date = date;
      }
    });
    // console.log(joined_date);

    e.preventDefault();

    if (username === "") {
      return (document.getElementById("username_error").innerHTML =
        "*Please fill out this field");
    } else {
      document.getElementById("username_error").innerHTML = "";
    }

    if (email === "") {
      return (document.getElementById("email_error").innerHTML =
        "*Please fill out this field");
    } else if (!email.includes("@")) {
      return (document.getElementById(
        "email_error"
      ).innerHTML = `*Please include an '@' in the email address. '${email}' is missing an '@'.`);
    } else {
      document.getElementById("email_error").innerHTML = "";
    }

    if (password === "") {
      return (document.getElementById("pass_error").innerHTML =
        "*Please fill out this field");
    } else if (password.length < 6) {
      return (document.getElementById("pass_error").innerHTML =
        "*Password must be at least 6 characters");
    } else {
      document.getElementById("pass_error").innerHTML = "";
    }
    if (cPassword === "") {
      return (document.getElementById("cpass_error").innerHTML =
        "*Please fill out this field");
    } else if (password != cPassword) {
      return (document.getElementById("cpass_error").innerHTML =
        "*Password not match");
    } else {
      document.getElementById("cpass_error").innerHTML = "";
    }
    if (role === "") {
      return (document.getElementById("student_mentor").innerHTML =
        "*Please choose one");
    } else {
      document.getElementById("student_mentor").innerHTML = "";
    }
    const Username = username.charAt(0).toUpperCase() + username.slice(1);
    axiosInstencs
      .post("/register", {
        username: Username,
        email: email,
        password: password,
        role: role,
        joined_date: joined_date,
      })
      .then((res) => {
        toast.success("Register Successfully!!");
        navigate("/login");
        console.log(res.data);
      })
      .catch((err) => {
        if (err.status === 403) {
          document.getElementById("email_error").innerHTML =
            "*This email already registered";
          //   toast.error("User already registered!!");
        } // } else if (err.status === 400) {
        //   document.getElementById("pass_error").innerHTML =
        //     "*Password must be at least 6 characters";
        //   //   toast.error("Password must be at least 6 characters")
        // }

        console.log(err);
      });
  };

  const showPassword = () => {
    setInputType((prev) => (prev === "password" ? "text" : "password"));
  };
  const cShowPassword = () => {
    setCInputType((prev) => (prev === "password" ? "text" : "password"));
  };

  return (
    <div>
        <Navbar />
     
    <div className="pt-[20px] max-sm:pt-[70px]">
      <div className="bg-[#F5F5F]  max-sm:p-[10px]">
        <div className="grid grid-cols-2 gap-[10px] bg-white rounded-[15px] max-sm:grid-cols-1">
          <div className="flex flex-col justify-center p-[60px] max-sm:p-[10px] ">
          
            <div className="mb-8 max-sm:mb-[20px]">
              <h1 className="text-3xl font-bold">Create an account</h1>
              <p className="text-muted-foreground mt-2 text-[#64748B]">
                Join SkillSwap to connect with mentors and peers
              </p>
            </div>

            <form action="" className="" onSubmit={handelRegister}>
              <div className="">
                <label className="text-sm ml-[5px]">Full Name</label>
                <br />
                <input
                  className=" focus:outline-none rounded-[10px] border-[1px] border-[#D9D9D9] text-[13px] p-[10px] w-full"
                  placeholder="Jhon Deo"
                  type="text"
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                />
                <span
                  id="username_error"
                  className="text-red-600 text-[13px] pl-[5px]"
                ></span>
              </div>
              <br />
              <div>
                <label className="text-sm ml-[5px]">Email</label>
                <br />
                <input
                  className=" focus:outline-none rounded-[10px] border-[1px] border-[#D9D9D9] text-[13px] p-[10px] w-full"
                  placeholder="name@example.com"
                  type="text"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                <span
                  id="email_error"
                  className="text-red-600 text-[13px] pl-[5px]"
                ></span>
              </div>
              <br />
              <div>
                <label className="text-sm ml-[5px]">Password</label>
                <br />
                <div className="relative">
                  <input
                    className=" focus:outline-none rounded-[10px] border-[1px] border-[#D9D9D9] text-[13px] p-[10px] w-full"
                    placeholder="Create a password"
                    type={inputType}
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    require
                  />{" "}
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
                  className="text-red-600 text-[13px] pl-[5px]"
                ></span>
              </div>

              <div>
                <label className="text-sm ml-[5px]">Confirm Password</label>
                <br />
                <div className="relative">
                  <input
                    className=" focus:outline-none rounded-[10px] border-[1px] border-[#D9D9D9] text-[13px] p-[10px] w-full"
                    placeholder="Confirm your password"
                    type={cinputType}
                    onChange={(e) => setCPassword(e.target.value)}
                    value={cPassword}
                    require
                  />
                  <span
                    className="absolute right-2 top-[5px] cursor-pointer"
                    onClick={cShowPassword}
                  >
                    {cinputType === "password" ? (
                      <i class="fa-regular fa-eye p-2 hover:bg-gray-200 rounded-md"></i>
                    ) : (
                      <i class="fa-regular fa-eye-slash p-2 hover:bg-gray-200 rounded-md"></i>
                    )}
                  </span>
                </div>
                <span
                  id="cpass_error"
                  className="text-red-600 text-[13px] pl-[5px]"
                ></span>
              </div>

              <div className="pl-[7px]">
                <p className="pb-[7px] text-sm">
                  Are you <span className="font-semibold">Student</span> or{" "}
                  <span className="font-semibold">Mentor</span> ?
                </p>
                <div>
                  <input
                    type="radio"
                    name="are_you"
                    onChange={() => setRole("Student")}
                    value="student"
                    className="accent-purple-700 cursor-pointer"
                  />
                  <label htmlFor="" className="text-sm pl-[5px]">
                    Student
                  </label>
                </div>

                <div>
                  <input
                    type="radio"
                    name="are_you"
                    onChange={() => setRole("Mentor")}
                    value="mentor"
                    className="accent-purple-700 cursor-pointer"
                  />
                  <label htmlFor="" className="text-sm pl-[5px]">
                    Mentor
                  </label>
                </div>
                <span
                  id="student_mentor"
                  className="text-red-600 text-[13px] pl-[5px]"
                ></span>
              </div>
              <div className="pb-[10px]">
                <input
                  type="checkbox"
                  className="accent-purple-700 w-4 h-4 cursor-pointer"
                />{" "}
                <span className="pl-[5px] text-sm">
                  I agree to the{" "}
                  <a href="#" className="text-purple-700 underline">
                    terms of service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="underline text-purple-700">
                    privacy policy
                  </a>
                </span>
              </div>
              <div className="bg-[#7c3bed] text-center rounded-[10px] mt-[10px] hover:bg-purple-700">
                <button className="text-[13px] text-white p-[10px]">
                  Create account
                </button>
              </div>
              <p className="text-center pt-[20px] text-sm">
                Have an account?{" "}
                <Link to="/login" className="text-purple-700">
                  Sign In
                </Link>
              </p>
            </form>
          </div>
          <div className="max-lg:hidden bg-gradient-to-br from-purple-600 to-indigo-700 text-white flex items-center p-12">
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
    </div>
                  </div>
  );
}

export default Signup;
