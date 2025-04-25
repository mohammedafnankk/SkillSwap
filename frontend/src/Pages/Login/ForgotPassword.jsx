import React, { useState } from "react";
import { Link } from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  return (
    <div className="grid grid-cols-2 gap-[10px] bg-white rounded-[15px] max-lg:grid-cols-1 max-h-[calc(100vh-77px)] max-sm:p-[10px]  ">
      <div className="flex   flex-col justify-center p-[60px] max-sm:p-[10px] max-sm:justify-star">
        {/* <Link to={'/'} className=" flex items-center pt-[50px] pb-[40px]">
                        <img src={logo} alt="" className="w-14" />
                        <h1 className="font-bold text-2xl text-purple-700">SkillSwap</h1>
                      </Link> */}
        <div className="pb-5 max-sm:pb-[20px">
          <h1 className="text-[32px] font-semibold">Forgot Password</h1>
          <p>Enter your Email and forgot Password</p>
        </div>

        <form action="" className="">
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
              className="text-red-600 text-[13px] pl-[5px]"
            ></span>
          </div>

          <div className="bg-[#7c3bed] text-center rounded-[10px] mt-[10px] hover:bg-purple-700">
            <button className="text-sm text-white p-[10px]">Submit</button>
          </div>
          <Link className="underline text-sm flex justify-end pt-3 hover:text-purple-700" to={'/signup'}>Sign Up</Link>
        </form>
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
