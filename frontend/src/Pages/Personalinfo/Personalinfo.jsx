import React, { useEffect, useState } from "react";
import CreatableSelect from "react-select/creatable";
import Select from "react-select";
import axiosInstencs from "../../axios/axiosInstence";
import { useNavigate, useParams } from "react-router-dom";
// import { useSelector } from "react-redux";
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
const level = [
  { value: "Beginner", label: "Beginner" },
  { value: "Intermediate", label: "Intermediate" },
  { value: "Advanced", label: "Advanced" },
  { value: "Expert", label: "Expert" },
];

function Personalinfo() {
  const { id } = useParams();
  const navigate = useNavigate("");
  const [user, setUser] = useState([]);
  // const userID = useSelector((state) => state.user.userId);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selecteLevel, setSelecteLevel] = useState(null);
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [pin, setPin] = useState("");
  const [skills, setSkills] = useState("");
  const [website, setWebsite] = useState("");
  const [company, setCompany] = useState("");
  const [education, setEducation] = useState("");
  const [bio, setBio] = useState("");
  const [levels , setLevels] = useState("")
 

  const handleChange = (newValue) => {
    const values = newValue.map((skill) => skill.value);
    setSelectedOptions(newValue);
    setSkills(values);
  };
  
  const handleSelecteLevel=(e)=>{
    
    // console.log(e.value);
    setSelecteLevel(e)
    setLevels(e.value)
    
  }
//  console.log(levels);
 

  const customStyles = {
    control: (base, state) => ({
      ...base,
      borderRadius: "10px",
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
  };
  useEffect(() => {
    axiosInstencs.get(`/singleuser/${id}`).then((res) => {
      // console.log(res.data.msg);
      const userData = res.data.msg;
      setUser(userData);
    }).catch((err)=>console.log(err))
  }, [id]);
  
const Company =company.charAt(0).toUpperCase()+company.slice(1)
const Education = education.charAt(0).toUpperCase()+education.slice(1)
const Bio = bio.charAt(0).toUpperCase().slice(1)
  const handleInformation = (e) => {
    e.preventDefault();

    //street check
    if (street === "") {
      return (document.getElementById("street_error").innerHTML =
        "*Please fill this field");
    } else {
      document.getElementById("street_error").innerHTML = "";
    }

    //city check
    if (city === "") {
      return (document.getElementById("city_error").innerHTML =
        "*Please fill this field");
    } else {
      document.getElementById("city_error").innerHTML = "";
    }

    //state check
    if (state === "") {
      return (document.getElementById("state_error").innerHTML =
        "*Please fill this field");
    } else {
      document.getElementById("state_error").innerHTML = "";
    }

    //pin check
    if (pin === "") {
      return (document.getElementById("pin_error").innerHTML =
        "*Please fill this field");
    } else {
      document.getElementById("pin_error").innerHTML = "";
    }

    //country check
    if (country === "") {
      return (document.getElementById("country_error").innerHTML =
        "*Please fill this field");
    } else {
      document.getElementById("country_error").innerHTML = "";
    }

    //skill check
    if (selectedOptions.length < !0) {
      return (document.getElementById("skill_error").innerHTML =
        "*Please select your skills or type");
    } else {
      document.getElementById("skill_error").innerHTML = "";
    }
    //level
    if (selecteLevel === "") {
      return (document.getElementById("level_error").innerHTML =
        "*Please select your Proficiency Level");
    } else {
      document.getElementById("level_error").innerHTML = "";
    }
    if(bio === ""){
      return document.getElementById("bio-require").style.color="red"
    }else{
      document.getElementById("bio-require").style.color=""
    }


    axiosInstencs
      .patch(`/personalinfo/${id}`, {
        website:website,
        company:Company,
        education:Education,
        level:levels,
        bio:bio,
        address: [
          {
            street: street,
            state: state,
            city: city,
            pincode: pin,
            country: country,
          },
        ],
        skills: skills,
      })
      .then((res) => {
        console.log(res.data);
        navigate("/dashboard");
      })
      .catch((Err) => {
        console.log(Err, "==err");
      });
  };

  return (
    <div className="">
      <div className=" p-[40px] max-sm:p-[10px]">
        <div className=" bg-white ">
          <div className="flex flex-col justify-center p-[30px] max-sm:p-[15px]">
            <div className="pb-[40px] max-sm:pb-[20px]">
              <h1 className="text-[32px] font-semibold">
                Complete Your Profile
              </h1>
              <p className="text-gray-400">
                Please provide your address and skills to complete your profile
                setup.
              </p>
            </div>
            <br />
            <form action="" className="" onSubmit={handleInformation}>
              <div className="rounded-lg border shadow-sm p-6 max-sm:p-4">
                <div className="pb-6">
                  <h1 className="text-2xl font-semibold">
                    Address Information
                  </h1>
                  <p className="text-sm text-gray-400 mt-1">
                    Enter your current address details
                  </p>
                </div>

                <div className="space-y-2">
                  <label className="text-sm ml-[5px]">Street Address</label>
                  <br />
                  <input
                    className=" focus:outline-purple-700 rounded-[10px] border-[1px] border-[#D9D9D9] text-[13px] p-[10px] w-full  "
                    placeholder="123 main St"
                    type="text"
                    value={street}
                    onChange={(e) => setStreet(e.target.value)}
                  />
                  <span
                    id="street_error"
                    className="text-red-600 text-[13px] pl-[5px]"
                  ></span>
                </div>
                <div className="grid grid-cols-2 gap-8 mt-2 max-sm:grid-cols-1 max-sm:gap-3">
                  <div className="space-y-1">
                    <label className="text-sm ml-[5px]">City</label>
                    <br />
                    <input
                      className=" focus:outline-purple-700 rounded-[10px] border-[1px] border-[#D9D9D9] text-[13px] p-[10px] w-full  "
                      placeholder="San Francisco"
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                    <span
                      id="city_error"
                      className="text-red-600 text-[13px] pl-[5px]"
                    ></span>
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm ml-[5px]">State/Province</label>
                    <br />
                    <input
                      className=" focus:outline-purple-700 rounded-[10px] border-[1px] border-[#D9D9D9] text-[13px] p-[10px] w-full"
                      placeholder="California"
                      type="text"
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                    />
                    <span
                      id="state_error"
                      className="text-red-600 text-[13px] pl-[5px]"
                    ></span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-8 mt-2 max-sm:grid-cols-1 max-sm:gap-3">
                  <div className="space-y-1">
                    <label className="text-sm ml-[5px]">ZIP/Postal Code</label>
                    <br />
                    <input
                      className=" focus:outline-purple-700 rounded-[10px] border-[1px] border-[#D9D9D9] text-[13px] p-[10px] w-full  [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none "
                      placeholder="94103"
                      type="number"
                      value={pin}
                      onChange={(e) => setPin(e.target.value)}
                    />
                    <span
                      id="pin_error"
                      className="text-red-600 text-[13px] pl-[5px]"
                    ></span>
                  </div>

                  <div className="space-y-1">
                    <label className="text-sm ml-[5px]">Country</label>
                    <br />
                    <input
                      className=" focus:outline-purple-700 rounded-[10px] border-[1px] border-[#D9D9D9] text-[13px] p-[10px] w-full  [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                      placeholder="United States of America"
                      type="text"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                    />

                    <span
                      id="country_error"
                      className="text-red-600 text-[13px] pl-[5px]"
                    ></span>
                  </div>
                </div>
                {user.role === "Mentor" ? (
                  <div className="grid grid-cols-2 gap-8 mt-2 gap-y-2">
                    <div className="space-y-1">
                      <label className="text-sm ml-[5px]">Website</label>
                      <br />
                      <input
                        className=" focus:outline-purple-700 rounded-[10px] border-[1px] border-[#D9D9D9] text-[13px] p-[10px] w-full  [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        placeholder="Website"
                        type="text"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                      />

                      <span
                        id="web_error"
                        className="text-red-600 text-[13px] pl-[5px]"
                      ></span>
                    </div>
                    <div className="space-y-1">
                      <label className="text-sm ml-[5px]">Company</label>
                      <br />
                      <input
                        className=" focus:outline-purple-700 rounded-[10px] border-[1px] border-[#D9D9D9] text-[13px] p-[10px] w-full  [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        placeholder="Company"
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                      />

                      <span
                        id="com_error"
                        className="text-red-600 text-[13px] pl-[5px]"
                      ></span>
                    </div>
                    <div className="space-y-1">
                      <label className="text-sm ml-[5px]">Education</label>
                      <br />
                      <input
                        className=" focus:outline-purple-700 rounded-[10px] border-[1px] border-[#D9D9D9] text-[13px] p-[10px] w-full  [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        placeholder="Education"
                        type="text"
                        value={education}
                        onChange={(e) => setEducation(e.target.value)}
                      />

                      <span
                        id="edu_error"
                        className="text-red-600 text-[13px] pl-[5px]"
                      ></span>
                    </div>
                    <div className="space-y-1">
                      <label className="text-sm ml-[5px]">
                        Select Proficiency Level
                      </label>
                      <br />
                      <Select
                        isMulti={false}
                        options={level}
                        value={selecteLevel}
                        onChange={handleSelecteLevel}
                        placeholder="Select Proficiency Level"
                        className="text-sm"
                        styles={customStyles}
                      />

                      <span
                        id="level_error"
                        className="text-red-600 text-[13px] pl-[5px]"
                      ></span>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>

              <div className="p-6 rounded-lg shadow-sm border mt-8 max-sm:mt-5 max-sm:p-4">
                <div>
                  <label htmlFor="" className="text-2xl font-semibold">
                    Skills
                  </label>
                  <p className="text-sm text-gray-400 pb-3">
                    Add skills that you have or want to learn
                  </p>
                  <CreatableSelect
                    isMulti
                    options={options}
                    value={selectedOptions}
                    onChange={handleChange}
                    placeholder="Select or type to skills..."
                    className="text-[13px]"
                    styles={customStyles}
                  />
                  <span
                    id="skill_error"
                    className="text-red-600 text-[13px] pl-[5px]"
                  ></span>
                  <p className="text-sm text-gray-400">
                    Add skills that represent your expertise or areas you want
                    to develop.
                  </p>
                </div>
            
                
              </div>
              {user.role === "Mentor"?
              
              <div className="p-6 rounded-lg shadow-sm border mt-8 ">
                <label htmlFor="" className="text-2xl font-semibold ">
                  Bio
                </label>
                <textarea
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  name=""
                  id=""
                  className="rounded-md border px-3 py-2 text-sm w-full min-h-36 focus:outline-purple-600 mt-2"
                ></textarea>
                <div className="flex justify-between items-center">
                  <p id="bio-require" className="text-[0.8rem] text-gray-500">
                    Write a short bio about yourself, your experience, and what
                    you're looking to learn or teach.
                  </p>
                  <button className="inline-flex text-white text-sm items-center justify-center px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-md gap-2">
                    <i class="fa-regular fa-floppy-disk"></i>Save Information
                  </button>
                </div>
              </div>
              :""}
            </form>
          </div>
          {/* <div className="max-sm:row-start-1">
            <img
              src={image}
              alt=""
              className="rounded-l-[40px] h-full object-cover max-sm:rounded-l-[0px] max-sm:rounded-t-[15px] max-sm:h-80 w-full"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Personalinfo;
