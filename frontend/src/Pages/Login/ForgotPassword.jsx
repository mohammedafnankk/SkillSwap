import React, { useState } from "react";
import { Link } from "react-router-dom";
import axiosInstencs from "../../axios/axiosInstence";
function ForgotPassword() {
  const [isSend, setIsSend] = useState(false);
  const [email, setEmail] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [Error, setError] = useState(false);

  const sendLink = (e) => {
    e.preventDefault();
    if (email === "") {
      return (document.getElementById("email_error").innerHTML =
        "*Please fill this field");
    } else {
      document.getElementById("email_error").innerHTML = "";
    }
    setIsSending(true);
    axiosInstencs
      .post("/forgot-password", {
        email: email,
      })
      .then((res) => {
        console.log(res.data);
        setIsSend(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const tryagain = () => {
    setIsSend(false);
    setIsSending(false);
  };
  return (
    <div className="max-lg:flex max-lg:justify-center max-lg:h-screen grid grid-cols-2 gap-[10px] bg-white rounded-[15px] max-lg:grid-cols-1 max-h-[calc(100vh-77px)] max-sm:p-[10px]  ">
      <div className="flex   flex-col justify-center px-[60px] max-sm:p-[10px] max-sm:justify-star">
        <div className="mb-8">
          <Link
            to={"/login"}
            className="text-sm hover:bg-slate-200 flax justify-center px-4 py-2 rounded-md items-center gap-2"
          >
            <i class="fa-solid fa-arrow-left"></i> Back to login
          </Link>
        </div>
        <div className="border rounded-lg shadow-sm">
          <div className="p-6 space-y-1.5 flex flex-col max-sm:pb-[20px ">
            <h1 className="text-2xl font-semibold">Forgot Password</h1>
            <p className="text-sm text-gray-500">
              Enter your email address and we'll send you a link to reset your
              password.
            </p>
          </div>
          {isSend === false ? (
            <form action="" className=" p-6 pt-0">
              <div>
                <label className="text-sm ml-[5px] ">Email</label>

                <input
                  className="mt-2 focus:outline-purple-700 rounded-[10px] border-[1px] border-[#D9D9D9] text-[13px] p-[10px] w-full"
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

              <div
                className={` text-center rounded-[10px] mt-5  ${
                  isSending === true
                    ? "bg-purple-400"
                    : "bg-[#7c3bed] hover:bg-purple-700"
                }`}
              >
                <button
                  onClick={sendLink}
                  className="text-sm text-white p-[10px] inline-flex gap-1 items-center"
                >
                  {isSending === true ? (
                    <p className="h-4 w-4 border-white border-2 border-t-transparent rounded-full animate-spin"></p>
                  ) : (
                    ""
                  )}
                  {isSending === true ? "Sending..." : "Send Reset Link"}
                </button>
              </div>
            </form>
          ) : (
            <div>
              <div className="p-6 flex flex-col justify-center items-center">
                <i class="fa-regular fa-envelope text-green-600 bg-green-100 rounded-full px-3 py-2 text-3xl"></i>
                <h3 className="mb-2 text-lg pt-4">Check your email</h3>
                <p className="text-gray-500 mb-4 inline-flex flex-col text-center">
                  We've sent a password reset link to{" "}
                  <span className="font-semibold text-gray-600">{email}</span>
                </p>
                <p className="text-gray-500 text-sm inline-flex flex-col text-center">
                  Dind't receive the email? Check your spam folder or{" "}
                  <span
                    onClick={tryagain}
                    className="text-purple-600 cursor-pointer hover:text-purple-800"
                  >
                    try again
                  </span>
                </p>
              </div>
            </div>
          )}
          <div className="flex justify-center items-center border-t p-5">
            <p className="text-sm text-gray-500">
              Remember your password?{" "}
              <Link className="text-sm text-purple-700" to={"/login"}>
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="max-lg:hidden bg-gradient-to-br from-purple-600 to-indigo-700 text-white flex items-center p-12 h-screen">
        <div className="">
          <h1 className="text-3xl font-bold mb-6">
            Grow your skills with SkillSwap
          </h1>
          <p className="text-lg mb-8">
            Connect with mentors and peers, share knowledge, and accelerate your
            learning journey.
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
  );
}

export default ForgotPassword;
