import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import profileImg from "../../assets/images/user.jpg";
import Sidebar from "./Sidebar";
import Search from "./Search";
import CreatableSelect from "react-select/creatable";
import axiosInstencs from "../../axios/axiosInstence";
import toast from "react-hot-toast";

// const options = [
//   { value: "Beginner", label: "Beginner" },
//   { value: "Intermediate", label: "Intermediate" },
//   { value: "Advanced", label: "Advanced" },
//   { value: "Expert", label: "Expert" },
// ];
function Editprofile() {
  const [skills, setSkills] = useState([]);
  let { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("basic-info");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [locations, setLocations] = useState("");
  const [bio, setBio] = useState("");
  const [company, setCompany] = useState("");
  const [website, setWebsite] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const options = [
    { value: "React.js", label: "ReactJS" },
    { value: "JavaScript", label: "JavaScript" },
    { value: "Angular", label: "Angular" },
    { value: "TypeScript", label: "TypeScript" },
    { value: "Python", label: "Python" },
    { value: "Node.js", label: "NodeJS" },
    { value: "Java", label: "Java" },
    { value: "C#", label: "C#" },
  ];
  console.log(skills);

  

  const handleChange = (newValue) => {
    const values = newValue.map((skill) => skill.value);
    setSelectedOptions(newValue);
    console.log(newValue);

    setSkills(values);
  };
  useEffect(() => {
    axiosInstencs
      .get(`/singleuser/${id}`)
      .then((res) => {
        // console.log(res.data);
        setUserName(res.data.msg.username);
        setEmail(res.data.msg.email);
        setRole(res.data.msg.role);
        setLocations(res.data.msg.address[0].street);
        setSkills(res.data.msg.skills);
        setBio(res.data.msg.bio);
        setCompany(res.data.msg.company);
        setWebsite(res.data.msg.website);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const customStyles = {
    control: (base, state) => ({
      ...base,
      borderRadius: "6px",
      outline: "none",

      borderColor: state.isFocused ? "#a855f7" : base.borderColor,
      boxShadow: "none",
    }),
    multiValue: (base) => ({
      ...base,
      backgroundColor: "#7c3bed",
      color: "white",
      borderRadius: "5px",
      padding: "3px",
    }),
    multiValueLabel: (base) => ({
      ...base,
      color: "white",
    }),
    multiValueRemove: (base) => ({
      ...base,
      color: "white",
      "&:hover": {
        backgroundColor: "red",
        color: "white",
      },
    }),
    dropdownIndicator: (base) => ({
      ...base,
      cursor: "pointer",
    }),

    menu: (base) => ({
      ...base,
      borderRadius: "10px",
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isFocused ? "#a855f7" : "white",
      color: state.isFocused ? "white" : "black",
      padding: "10px 12px",
      cursor: "pointer",
      borderRadius: "6px",
    }),
  };

  const saveChangesHandler = (e) => {
    e.preventDefault()
    if (userName === "") {
      return (document.getElementById("name-require").innerHTML =
        "*Please fill out this field");
    } else {
      document.getElementById("name-require").innerHTML = "";
    }
    if (email === "") {
      return (document.getElementById("email-require").innerHTML =
        "*Please fill out this field");
    } else if (!email.includes("@")) {
      return (document.getElementById(
        "email-require"
      ).innerHTML = `*Please include an '@' in the email address. '${email}' is missing an '@'.`);
    } else {
      document.getElementById("email-require").innerHTML = "";
    }
    if (locations === "") {
      return (document.getElementById("location-require").innerHTML =
        "*Please fill out this field");
    } else {
      document.getElementById("location-require").innerHTML = "";
    }
    if(role === "Mentor"){

      if (bio === "") {
        return (document.getElementById("bio-require").style.color = "red");
      } else {
        document.getElementById("bio-require").style.color = "#6b7280";
      }
    }

    axiosInstencs
      .patch(`/personalinfo/${id}`, {
        username: userName,
        email: email,
        role: role,
        bio: bio,
        company: company,
        website: website,
      })
      .then((res) => {
        // console.log(res);
        toast.success("Profile Updated Successfully");
        navigate("/profile");
      })
      .catch((err) => console.log(err));
  };

  const handleSkillDelete = (i) => {
    console.log(i);
    const updatedSkills = skills.filter((_, index) => index !== i);
    console.log(updatedSkills);
  };
  const renderContent = () => {
    switch (activeTab) {
      case "basic-info":
        return (
          <div>
            <div className="rounded-lg shadow-sm border bg-white mb-7">
              <div className="flex flex-col space-y-1.5 p-6">
                <h1 className="text-2xl font-bold">Profile Picture</h1>
                <p className=" text-sm text-gray-500">
                  Upload a profile picture to make your profile more
                  personalized
                </p>
              </div>
              <div className="p-6 pt-0">
                <div className="flex gap-6">
                  <span>
                    <img
                      src={profileImg}
                      alt=""
                      className="rounded-full h-32 w-32"
                    />
                  </span>
                  <div className="flex flex-col items-center justify-center gap-3">
                    <button className="w-full hover:bg-slate-100 text-sm px-4 py-2 border rounded-md">
                      <i class="fa-solid fa-arrow-up-from-bracket pr-2"></i>
                      Upload New Picture
                    </button>
                    <button className="w-full hover:bg-slate-100 text-sm text-red-600 px-4 py-2 border rounded-md">
                      <i class="fa-regular fa-trash-can pr-2"></i>Remove Picture
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-lg shadow-sm border bg-white">
              <div className="flex flex-col space-y-1.5 p-6">
                <h2 className="text-2xl font-semibold ">Profile Information</h2>
                <p className="text-sm text-gray-500">
                  Update your personal information
                </p>
              </div>
              <form action="" className="grid grid-cols-2 p-6 gap-6">
                <div className="flex flex-col space-y-2">
                  <label htmlFor="" className="text-sm font-medium">
                    Full Name
                  </label>
                  <input
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    type="text"
                    className="border px-3 py-2 rounded-md focus:outline-purple-600 text-sm "
                  />{" "}
                  <span
                    id="name-require"
                    className="text-xs text-red-600"
                  ></span>
                </div>
                <div className="flex flex-col space-y-2">
                  <label htmlFor="" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    className="border px-3 py-2 rounded-md focus:outline-purple-600 text-sm "
                  />
                  <span
                    id="email-require"
                    className="text-xs text-red-600"
                  ></span>
                </div>
                <div className="flex flex-col space-y-2">
                  <label htmlFor="" className="text-sm font-medium">
                    Role
                  </label>
                  <input
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    type="text"
                    className="border px-3 py-2 rounded-md focus:outline-purple-600 text-sm "
                  />
                  <span
                    id="role-require"
                    className="text-xs text-red-600"
                  ></span>
                </div>
                {role === "Mentor"?
                
                <div className="flex flex-col space-y-2">
                  <label htmlFor="" className="text-sm font-medium">
                    Company
                  </label>
                  <input
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    type="text"
                    className="border px-3 py-2 rounded-md focus:outline-purple-600 text-sm "
                  />
                </div>
                :""}
                <div className="flex flex-col space-y-2">
                  <label htmlFor="" className="text-sm font-medium">
                    Location
                  </label>
                  <input
                    value={locations}
                    onChange={(e) => setLocations(e.target.value)}
                    type="text"
                    className="border px-3 py-2 rounded-md focus:outline-purple-600 text-sm "
                  />
                  <span
                    id="location-require"
                    className="text-xs text-red-600"
                  ></span>
                </div>
                {role === "Mentor"?
                
                <div className="flex flex-col space-y-2">
                  <label htmlFor="" className="text-sm font-medium">
                    Website
                  </label>
                  <input
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    type="text"
                    className="border px-3 py-2 rounded-md focus:outline-purple-600 text-sm "
                  />
                  <span
                    id="web-require"
                    className="text-xs text-red-600"
                  ></span>
                </div>
                :""}
                {role === "Student"?
                
                <button
                    onClick={saveChangesHandler}
                    className="col-start-1 col-end-3 inline-flex text-white text-sm items-center justify-center px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-md gap-2"
                  >
                    <i class="fa-regular fa-floppy-disk"></i>Save Changes
                  </button>
                :""}
              </form>
              {role ==="Mentor"?
              
              <div className="space-y-2 p-6 pt-0">
                <label htmlFor="" className="text-sm font-medium">
                  Bio
                </label>
                <textarea
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  name=""
                  id=""
                  className="rounded-md border px-3 py-2 text-sm w-full min-h-36 focus:outline-purple-600"
                ></textarea>
                <div className="flex justify-between items-center">
                  <p id="bio-require" className="text-[0.8rem] text-gray-500">
                    Write a short bio about yourself, your experience, and what
                    you're looking to learn or teach.
                  </p>
                  <button
                    onClick={saveChangesHandler}
                    className="inline-flex text-white text-sm items-center justify-center px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-md gap-2"
                  >
                    <i class="fa-regular fa-floppy-disk"></i>Save Changes
                  </button>
                </div>
              </div>
              :""}
            </div>
          </div>
        );

      case "skills":
        return (
          <div className="rounded-lg border bg-white shadow-md">
            <div className="flex flex-col space-y-1.5 p-6">
              <h1 className="text-2xl font-semibold ">Skills & Expertise</h1>
              <p className="text-gray-400 text-sm">
                Add skills that you have or want to develop
              </p>
            </div>
            <div className="p-6 pt-0">
              <div className="space-y-6">
                {skills.map((item, i) => (
                  <div key={i} className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="text-white inline-flex items-center rounded-full px-2.5 py-0.5 text-xs bg-purple-600">
                          {i + 1}
                        </div>
                        <span>{item}</span>
                      </div>
                      <div>
                        <i
                          class="cursor-pointer fa-regular fa-trash-can text-gray-600 hover:bg-red-50 hover:text-red-700 px-2.5 py-2 rounded-lg"
                          onClick={() => handleSkillDelete(i)}
                        ></i>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="border-b-2"></div>
                <div className="space-y-4">
                  <h3 className="font-medium">Select or type to skills</h3>
                  <div className="">
                    {/* <div className="flex flex-col">
                      <label htmlFor="" className="text-sm">
                        Skill Name
                      </label>
                      <input
                        type="text"
                        className="rounded-md border px-3 py-2 text-sm focus:outline-purple-700"
                        placeholder="e.g., JavaScript, Design, Marketing"
                      />
                    </div> */}
                    {/* <div className="flex flex-col  ">
                      <label htmlFor="" className="text-sm">
                        Proficiency Level
                      </label>
                     
                      <Select
                        isMulti={false}
                        options={options}
                        value={selectedOption}
                        onChange={setSelectedOption}
                        placeholder="Select Proficiency Level..."
                        className="text-sm "
                        styles={customStyles}
                      />
                    </div> */}
                    <CreatableSelect
                     defaultValue={options[1]}
                      isMulti
                      options={options}
                      value={selectedOptions}
                      onChange={handleChange}
                      placeholder="Select or type to skills..."
                      className="text-[13px]"
                      styles={customStyles}
                    />
                  </div>
                  <div className="">
                    <button className="text-white bg-purple-600 text-sm px-3 py-2 rounded-md w-full">
                      <i class="fa-regular fa-floppy-disk text-sm pr-2"></i>Save
                      Changes & Add Skills
                    </button>
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

  return (
    <div>
      <div className=" fixed z-50">
        <Sidebar />
      </div>
      <div className="fixed w-full z-50 pl-[229px]">
        <Search />
      </div>

      <div className="py-6 px-4 bg-gray-50 pt-24 ml-[229px]">
          <Link
            to={"/profile"}
            className="inline-flex items-center justify-center gap-2 rounded-md text-sm px-4 py-2 mb-4 hover:bg-slate-200"
          >
            <i class="fa-solid fa-arrow-left"></i>Back to Profile
          </Link>
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Edit Profile</h1>
              <p className="text-gray-500">
                Update your personal information and preferences
              </p>
            </div>
            {/* <button
              onClick={saveChangesHandler}
              className="inline-flex text-white text-sm items-center justify-center px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-md gap-2"
            >
              <i class="fa-regular fa-floppy-disk"></i>Save Changes
            </button> */}
          </div>
          <div className="grid grid-cols-2 bg-gray-200 p-1 rounded-md mb-6">
            <button
              onClick={() => setActiveTab("basic-info")}
              className={`rounded-sm px-3 py-1.5 text-sm ${
                activeTab === "basic-info" ? "bg-white" : "text-gray-500"
              } `}
            >
              Basic Info
            </button>
            <button
              onClick={() => setActiveTab("skills")}
              className={`rounded-sm px-3 py-1.5 text-sm ${
                activeTab === "skills" ? "bg-white" : "text-gray-500"
              } `}
            >
              Skills & Interests
            </button>
            {/* <button
              onClick={() => setActiveTab("education")}
              className={`rounded-sm px-3 py-1.5 text-sm ${
                activeTab === "education" ? "bg-white" : "text-gray-500"
              } `}
            >
              Education & Certifications
            </button> */}
          </div>
          <div>{renderContent()}</div>
        </div>
      </div>
    </div>
  );
}

export default Editprofile;
