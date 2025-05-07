import React, { useEffect, useRef, useState } from "react";
import Sidebar from "./Sidebar";
import Search from "./Search";
import profileImg from "../../assets/images/user.jpg";
import { Link, useNavigate } from "react-router-dom";
import axiosInstencs from "../../axios/axiosInstence";
import toast from "react-hot-toast";

function Profile() {
  const access_token = localStorage.getItem("access_token");
  const userID = localStorage.getItem("id")
  const navigate = useNavigate();
  const inputRef = useRef();
  const [language, setLanguage] = useState([]);
  const [activeTab, setActiveTab] = useState("profile");
  // const [userID, setUserID] = useState("");
  const [user, setUser] = useState([]);
  // const [isDeleteAccountOpen, setIsDeleteAccountOpen] = useState("");
  const addLanguage = (e) => {
    e.preventDefault();
    console.log(language);
  };

  // axiosInstencs
  //   .get("/protect", {
  //     headers: { Authorization: `Bearer ${access_token}` },
  //   })
  //   .then((res) => {
  //     const id = res.data.user.id;
  //     setUserID(id);
  //   })
  //   .catch((err) => console.log(err));

  // console.log(userID);

  useEffect(() => {
    axiosInstencs.get(`/singleuser/${userID}`,{
      headers:{
        "Authorization" :`Bearer ${access_token}`
      }
    }).then((res) => {
      setUser(res.data.msg);
    });
  }, [userID,access_token]);
  // console.log(skills);

  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return (
          <div value="profile" className="rounded-lg border bg-white shadow-md">
            <div className="flex flex-col space-y-1.5 p-6 max-sm:p-5">
              <h2 className="text-2xl font-semibold ">Profile Information</h2>
              <p className="text-sm text-gray-400">
                Update your personal information
              </p>
            </div>

            <form
              action=""
              className="grid grid-cols-2 p-6 gap-6 max-sm:grid-cols-1 max-sm:gap-2 max-sm:p-5"
            >
              <div className="flex flex-col space-y-2 max-sm:space-y-1">
                <label htmlFor="" className="text-sm font-medium">
                  Full Name
                </label>
                <input
                  value={user.username}
                  type="text"
                  className="border px-3 py-2 rounded-md cursor-not-allowed focus:outline-none text-sm text-gray-600"
                  readOnly
                />
              </div>
              <div className="flex flex-col space-y-2 max-sm:space-y-1">
                <label htmlFor="" className="text-sm font-medium">
                  Email
                </label>
                <input
                  value={user.email}
                  type="text"
                  className="border px-3 py-2 rounded-md cursor-not-allowed focus:outline-none text-sm text-gray-600"
                  readOnly
                />
              </div>
              <div className="flex flex-col space-y-2 max-sm:space-y-1">
                <label htmlFor="" className="text-sm font-medium">
                  Role
                </label>
                <input
                  value={user.role}
                  type="text"
                  className="border px-3 py-2 rounded-md cursor-not-allowed focus:outline-none text-sm text-gray-600"
                  readOnly
                />
              </div>
              {user.role === "Mentor" ? (
                <div className="flex flex-col space-y-2 max-sm:space-y-1">
                  <label htmlFor="" className="text-sm font-medium">
                    Company
                  </label>
                  <input
                    value={user.company}
                    type="text"
                    className="border px-3 py-2 rounded-md cursor-not-allowed focus:outline-none text-sm text-gray-600"
                    readOnly
                  />
                </div>
              ) : (
                ""
              )}
              <div className="flex flex-col space-y-2 max-sm:space-y-1">
                <label htmlFor="" className="text-sm font-medium">
                  Location
                </label>
                <input
                  value={
                    user.address && user.address.length > 0
                      ? user.address[0].street
                      : ""
                  }
                  type="text"
                  className="border px-3 py-2 rounded-md cursor-not-allowed focus:outline-none text-sm text-gray-600"
                  readOnly
                />
              </div>
              {user.role === "Mentor" ? (
                <div className="flex flex-col space-y-2 max-sm:space-y-1">
                  <label htmlFor="" className="text-sm font-medium">
                    Website
                  </label>
                  <input
                    value={user.website}
                    type="text"
                    className="border px-3 py-2 rounded-md cursor-not-allowed focus:outline-none text-sm text-gray-600"
                    readOnly
                  />
                </div>
              ) : (
                ""
              )}
              {user.role === "Mentor" ? (
                <div className="flex flex-col space-y-2 max-sm:space-y-1">
                  <label htmlFor="" className="text-sm font-medium">
                    Education
                  </label>
                  <input
                    value={user.education}
                    type="text"
                    className="border px-3 py-2 rounded-md cursor-not-allowed focus:outline-none text-sm text-gray-600"
                    readOnly
                  />
                </div>
              ) : (
                ""
              )}
              <div className="flex flex-col space-y-2 max-sm:space-y-1">
                <label htmlFor="" className="text-sm font-medium">
                  Joined Date
                </label>
                <input
                  value={user.joined_date}
                  type="text"
                  className="border px-3 py-2 rounded-md cursor-not-allowed focus:outline-none text-sm text-gray-600"
                  readOnly
                />
                <p className="text-[0.8rem] text-gray-500">
                  This field cannot be edited
                </p>
              </div>
            </form>

            {user.role === "Mentor" ? (
              <div className="space-y-2 p-6 pt-0">
                <label htmlFor="" className="text-sm font-medium">
                  Bio
                </label>
                <textarea
                  value={user.bio}
                  name=""
                  id=""
                  className="rounded-md border px-3 py-2 text-sm w-full min-h-36 cursor-not-allowed text-gray-600 focus:outline-none"
                  readOnly
                ></textarea>
                <p className="text-[0.8rem] text-gray-500">
                  Write a short bio about yourself, your experience, and what
                  you're looking to learn or teach.
                </p>
              </div>
            ) : (
              ""
            )}
          </div>
        );

      case "skills":
        return (
          <div className="rounded-lg border bg-white shadow-md">
            <div className="flex flex-col space-y-1.5 p-6">
              <h1 className="text-2xl font-semibold ">Skills & Expertise</h1>
              <p className="text-gray-400 text-sm">Your current Skills</p>
            </div>
            <div className="p-6 pt-0">
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="grid grid-cols-3 gap-8">
                      {user.skills.map((skill, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="text-white inline-flex items-center rounded-full px-2.5 py-0.5 text-xs bg-purple-600">
                            {i + 1}
                          </div>
                          <span className="text-sm">{skill} </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        break;
    }
  };

  // const deleteAccount = (id) => {
  //   axiosInstencs
  //     .delete(`/deleteuser/${id}`)
  //     .then((res) => {
  //       console.log(res.data);
  //       toast("User Deleted!!!", { duration: 1000 });
  //       navigate("/");
  //     })
  //     .catch((err) => console.log(err));
  // };

  return (
    <div>
      <div className=" fixed z-50">
        <Sidebar />
      </div>
      <div className="fixed w-[83%] z-20 ml-[224px] max-lg:ml-0 max-lg:w-full">
        <Search />
      </div>
      <div className="bg-gray-50 py-6 px-4 pt-24 ml-[224px] max-lg:ml-0 max-sm:px-3">
        <div className="space-y-8 max-sm:space-y-4">
          <div className="">
            
            <Link
              to={"/dashboard"}
              className="hidden max-lg:block max-lg:w-fit inline-flex items-center justify-center gap-2 rounded-md text-sm px-4 py-2 mb-4 hover:bg-slate-200"
            >
              <i class="fa-solid fa-arrow-left max-lg:pr-2"></i>Back
            </Link>
            <div>
              <div className="flex justify-between">
                <h1 className="text-2xl font-bold max-sm:text-md">
                  My Profile
                </h1>
                <button
                  onClick={() => navigate(`/profile/edit/${userID}`)}
                  className="bg-purple-600 text-white text-sm rounded-md px-4 py-2 "
                >
                  <i class="fa-regular fa-pen-to-square mr-2 max-sm:mr-0"></i>
                  <span className="max-sm:hidden">Edit Profile</span>
                </button>
              </div>
              <p className="text-gray-400 max-sm:text-xs">
                Manage your profile information and account settings
              </p>
            </div>
            <div></div>
          </div>
          <div className="grid grid-cols-3 gap-8 max-md:grid-cols-1">
            <div className="space-y-6">
              <div className="rounded-lg border shadow-md bg-white">
                <div className="p-6 max-sm:p-5">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative pb-3">
                      <img
                        src={user.avatar ? user.avatar : profileImg}
                        alt=""
                        className="w-32 h-32 rounded-full object-cover"
                      />
                      <span
                        className="cursor-pointer"
                        onClick={() => toast("Edit your Profile")}
                      >
                        <i class="absolute left-24 top-20 fa-solid fa-camera bg-purple-600 text-white rounded-full p-3"></i>
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold">{user.username}</h2>
                    <p className="text-gray-400">{user.role}</p>
                    <p className="text-sm text-gray-400 mb-4">{user.company}</p>
                    <div className="flex justify-center flex-col gap-2 mb-6">
                      <div className="rounded-full border px-2.5 py-0.5 text-xs flex items-center font-meduim">
                        <i class="fa-solid fa-location-dot mr-2"></i>
                        {user.address && user.address.length > 0
                          ? user.address[0].street
                          : ""}
                      </div>

                      <div className="rounded-full border px-2.5 py-0.5 text-xs flex items-center font-meduim">
                        <i class="fa-regular fa-calendar mr-2"></i>Joined{" "}
                        {user.joined_date}
                      </div>
                    </div>
                    {user.role === "Mentor" ? (
                      <div className="rounded-md border w-full">
                        <Link
                          to={`/mentor/${user._id}`}
                          className="inline-flex items-center justify-center py-2 px-4 w-full text-sm font-semibold"
                        >
                          <i className="bx bx-user pr-2 font-semibold"></i>View
                          Public Profile
                        </Link>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
              {user.role === "Mentor" ? (
                <div className="rounded-lg shadow-md border bg-white">
                  <div className="space-y-1.5 p-6">
                    <h2 className="text-2xl font-semibold ">
                      Contact Information
                    </h2>
                  </div>
                  <div className="p-6 pt-0 space-y-4">
                    <div className="flex items-center">
                      <i class="fa-solid fa-envelope text-[#64748b] mr-2"></i>
                      <span>{user.email}</span>
                    </div>
                    <div className="flex items-center">
                      <i class="fa-solid fa-globe mr-2 text-[#64748b]"></i>
                      <Link
                        to={`https://${user.website}`}
                        className="text-purple-600 hover:underline"
                      >
                        Personal Website
                      </Link>
                    </div>
                    <div className="flex items-center">
                      <i class="fa-solid fa-building mr-2 text-[#64748b]"></i>
                      <span className="">{user.company}</span>
                    </div>
                    <div className="flex items-center">
                      <i class="fa-solid fa-graduation-cap mr-2 text-[#64748b]"></i>
                      <span className="">{user.education}</span>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
              {user.role === "Mentor" ? (
                <div className="rounded-lg shadow-md border bg-white">
                  <div className="p-6">
                    <div className="space-y-1.5 pb-6 flex justify-between items-center">
                      <h1 className="text-2xl font-semibold">Languages</h1>
                      <button onClick={() => inputRef.current?.focus()}>
                        <i class="fa-solid fa-plus text-sm hover:bg-slate-200	px-3 py-2 rounded-md"></i>
                      </button>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      <div
                        className={`rounded-full px-1.5 pl-2.5 py-0.5 text-xs ${
                          language.length === 0 ? "" : "bg-gray-200 flex gap-2"
                        }`}
                      >
                        {language}
                        {language.length === 0 ? (
                          ""
                        ) : (
                          <i class="fa-solid fa-xmark flex items-center cursor-pointer hover:bg-red-500 hover:text-white rounded-full p-0.5 px-1"></i>
                        )}
                      </div>
                    </div>

                    <div
                      className="flex justify-between gap-2"
                      onSubmit={addLanguage}
                    >
                      <input
                        ref={inputRef}
                        type="text"
                        id="inp"
                        onChange={(e) => setLanguage(e.target.value)}
                        value={language}
                        className="border rounded-md px-3 py-2 focus:outline-purple-600 text-sm w-full"
                        placeholder="Add a languages..."
                      />
                      <button className="text-white bg-purple-600 px-3 py-2 rounded-md">
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
              {/* <div className="rounded-lg shadow-md border bg-white">
                <div className="p-6">
                  <div className="pb-6">
                    <h2 className="text-2xl font-semibold">Account</h2>
                  </div>
                  <div className="">
                    <button
                      onClick={() => setIsDeleteAccountOpen("isOpen")}
                      className="w-full inline-flex justify-center gap-2 rounded-md text-sm font-medium border px-6 py-2 items-center hover:bg-red-50 text-red-600"
                    >
                      <i class="fa-regular fa-trash-can"></i> Delete Account
                    </button>
                  </div>
                </div>
              </div>
              {isDeleteAccountOpen === "isOpen" ? (
                <div className="rounded-lg bg-white p-6  bg-black text-white  fixed top-[40%] left-[38%]">
                  <div>
                    <p className="text-sm">
                      {" "}
                      Are you sure you want to delete your account?
                    </p>
                  </div>
                  <div className="flex justify-between pt-3">
                    <button
                      className="px-2 py-1 rounded-md bg-green-500 hover:bg-green-600 text-sm"
                      onClick={() => setIsDeleteAccountOpen("")}
                    >
                      Cancel
                    </button>
                    <button
                      className="px-2 py-1 rounded-md bg-red-600 text-sm hover:bg-red-700"
                      onClick={() => deleteAccount(user._id)}
                    >
                      Ok
                    </button>
                  </div>
                </div>
              ) : (
                ""
              )} */}
            </div>
            <div
              className="col-start-2 col-end-4 max-md:col-start-1 max-md:col-end-1"
              defaultValue="profile"
            >
              <div className="grid grid-cols-2 bg-gray-200 p-1 rounded-md mb-6">
                <button
                  onClick={() => setActiveTab("profile")}
                  className={`rounded-sm px-3 py-1.5 text-sm ${
                    activeTab === "profile" ? "bg-white" : "text-gray-500"
                  } `}
                >
                  Profile
                </button>
                <button
                  onClick={() => setActiveTab("skills")}
                  className={`rounded-sm px-3 py-1.5 text-sm ${
                    activeTab === "skills" ? "bg-white" : "text-gray-500"
                  } `}
                >
                  Skills
                </button>
                {/* <button
                  onClick={() => setActiveTab("settings")}
                  className={`rounded-sm px-3 py-1.5 text-sm ${
                    activeTab === "settings" ? "bg-white" : "text-gray-500"
                  } `}
                >
                  Settings
                </button> */}
              </div>
              <div>{renderContent()}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
