import React, { useEffect, useRef, useState } from "react";
import socket from "../../Socket";
import profileImg from "../../assets/images/user.jpg";
import Search from "./Search";
import Sidebar from "./Sidebar";
import axiosInstencs from "../../axios/axiosInstence";
import { useNavigate } from "react-router-dom";
function Chat() {
  const access_token = localStorage.getItem("access_token");
  const userID = localStorage.getItem("id");
  // console.log(access_token);

  // const [activeTab, setActiveTab] = useState("direct");
  const navigate = useNavigate();
  const bottomRef = useRef(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [currentUser, setCurrentUser] = useState([]);
  const [errors, setErrors] = useState([]);
  const [mentors, setMentors] = useState([]);
  const [selectedUser, setSelectedUser] = useState([]);
  const [isSelected, setIsSelected] = useState(false);
  const [isOpen, setIsOpen] = useState("");
  // const [userID, setUserID] = useState("");
  const [chats, setChats] = useState([]);
  const [searchUser, setSearchUser] = useState("");
  // const [messageId,setMessageId] = useState('')

  // useEffect(() => {
  //   axiosInstencs
  //     .get("/protect", {
  //       headers: { Authorization: `Bearer ${access_token}` },
  //     })
  //     .then((res) => {
  //       setUserID(res.data.user.id);
  //       // console.log(res.data);
  //     });
  // }, [access_token]);

  useEffect(() => {
    axiosInstencs
      .get(`/singleuser/${userID}`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      })
      .then((res) => {
        setCurrentUser(res.data.msg);
        console.log(res.data.msg.chats);
        setChats(res.data.msg.chats);
      })
      .catch((err) => setErrors(err));
  }, [userID, access_token]);
  useEffect(() => {
    // console.log(chats);

    axiosInstencs
      .post("/me", {
        ids: chats,
        role: currentUser.role,
      })
      .then((res) => {
        console.log(res.data.msg);
        setMentors(res.data.msg);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [chats, currentUser, access_token]);

  const messageSelecte = (id) => {
    axiosInstencs
      .get(`/singleuser/${id}`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      })
      .then((res) => {
        setSelectedUser(res.data.msg);
        setIsSelected(true);
        setIsOpen("isOpen");
        // console.log(res.data.msg)
        // console.log("Hell");
      })
      .catch((err) => console.log(err));

    // console.log("lll");

    axiosInstencs
      .get(`/get`, {
        params: {
          senderId: currentUser._id,
          receiverId: id,
        },
      })
      .then((res) => {
        //     const to = new Date()

        // const dd = datee.getHours()+":"+ datee.getMinutes()
        // console.log(dd);

        setMessages(res.data);
        //  console.log(res.data._id);
        //  setMessageId(res.data._id)

        // console.log(res.data);
        // console.log("kkk");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    // fetchMessages();

    socket.on("receive_message", (data) => {
      if (
        (data.senderId === selectedUser._id &&
          data.receiverId === currentUser._id) ||
        (data.senderId === currentUser._id &&
          data.receiverId === selectedUser._id)
      ) {
        setMessages((prev) => [...prev, data]);
      }
      console.log(data, "dddaa");
    });

    return () => {
      socket.off("receive_message");
    };
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    const sendTime = new Date();
    const hour = sendTime.getHours();
    const ampm = hour >= 12 ? "PM" : "AM";
    const time = sendTime.getHours() + ":" + sendTime.getMinutes() + " " + ampm;
    if (message === "") {
      return;
    }
    const newMessage = {
      senderId: currentUser._id,
      receiverId: selectedUser._id,
      text: message,
      time: time,
    };

    socket.emit("send_message", newMessage);

    setMessages((prev) => [...prev, { ...newMessage, timestamp: new Date() }]);
    setMessage("");
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  const back = () => {
    setIsOpen("");
    setIsSelected(false);
  };

  // const findUser = (e) => {
  //   e.preventDefault();
  //   // const uu = "Afnan KK"
  //   setSearchUser(e.target.value);

  //   const filtered = mentors.filter((user) => {
  //     if (searchUser === "") {
  //       return user;
  //     } else if (
  //       user.username.toLowerCase().includes(searchUser.toLowerCase())
  //     ) {
  //       setMentors(filtered);
  //       return user;
  //     }
  //   });

  // };

  return (
    <div className="">
      <div className=" fixed z-50">
        <Sidebar />
      </div>
      <div className="fixed w-[83%] z-20 ml-[224px] max-lg:ml-0 max-lg:w-full">
        <Search />
      </div>
      <div className="py-6 px-4 ml-[224px] max-lg:ml-0 pt-24 bg-gray-50 h-screen">
        <button
          onClick={() => navigate(-1)}
          className="hidden max-lg:block inline-flex items-center justify-center gap-2 rounded-md text-sm px-4 py-2 mb-4 hover:bg-slate-200"
        >
          <i class="fa-solid fa-arrow-left pr-2"></i>Back
        </button>

        <div>
          <h1 className="text-2xl font-bold mb-4">Messages</h1>
        </div>
        <div className="grid grid-cols-3 rounded-lg border bg-white max-sm:block max-sm:h-scree">
          <div
            className={`border-r ${isOpen === "isOpen" ? "max-sm:hidden" : ""}`}
          >
            {/* <div className="flex flex-col">
              <div className="border-b px-4 py-2 ">
                <div
                  defaultValue="direct"
                  className="inline-flex items-center justify-center rounded-md bg-gray-200 p-1 w-full"
                > */}
            {/* <button
                    onClick={() => setActiveTab("direct")}
                    className={`text-sm px-12 py-1.5 rounded-sm font-medium ${
                      activeTab === "direct"
                        ? "bg-white w-full"
                        : "text-gray-500"
                    }`}
                  >
                    Direct
                  </button> */}
            {/* <button onClick={()=>setActiveTab("groups")} className={`text-sm px-12 py-1.5 rounded-sm font-medium ${activeTab === "groups"?"bg-white":"text-gray-500"}`}>
                    Groups
                  </button> */}
            {/* </div>
              </div>
            </div> */}
            <div className="p-4 border-b">
              <input
                value={searchUser}
                onChange={(e) => setSearchUser(e.target.value)}
                type="text"
                placeholder="Search conversations..."
                className="rounded-md text-sm border px-3 py-3 w-full focus:outline-purple-700"
              />
              {/* <span onClick={finduser}>Search</span> */}
            </div>

            <div className="overflow-y-auto h-64 max-sm:h-[600px] p-1">
              {mentors
                .filter((mentor) => {
                  if (searchUser === "") {
                    return mentor;
                  } else if (
                    mentor.username
                      .toLowerCase()
                      .includes(searchUser.toLowerCase())
                  ) {
                    return mentor;
                  }
                })
                .map((mentor, i) => (
                  <div key={i}>
                    <button
                      onClick={() => messageSelecte(mentor._id)}
                      className={`w-full flex items-start p-1.5 rounded-md border mb-1 flex items-center ${
                        mentor._id === selectedUser._id
                          ? "bg-purple-50 max-sm:bg-gray-50 hover:max-sm:bg-gray-200"
                          : "bg-white hover:bg-gray-50 max-sm:bg-gray-50 hover:max-sm:bg-gray-200"
                      }`}
                    >
                      <div className="relative">
                        <span className="h-10 w-10 relative overflow-hidden rounded-full ">
                          <img
                            src={mentor.avatar ? mentor.avatar : profileImg}
                            alt=""
                            className="w-12 h-12 rounded-full overflow-hidden object-cover "
                          />
                        </span>
                        <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-white"></span>
                      </div>

                      <div className="flex-1 pl-2">
                        <div className="flex justify-between items-baseline">
                          <h2 className="font-medium">{mentor.username}</h2>
                          <span
                            className={`text-sm ${
                              mentor._id === selectedUser._id
                                ? "hidden max-sm:block"
                                : "block"
                            }`}
                          >
                            4:21 PM
                          </span>
                        </div>
                        <p className="text-[13px] text-[#94a3b8] text-start truncate w-56 max-lg:w-28 max-sm:w-52 ">
                          Thanks for the help with React hooks!
                        </p>
                      </div>

                      <div
                        className={`pl-2 ${
                          mentor._id === selectedUser._id
                            ? "block max-sm:hidden"
                            : "hidden"
                        }`}
                      >
                        <i class="text-2xl fa-solid fa-angles-right text-purple-700"></i>
                      </div>
                    </button>
                  </div>
                ))}
            </div>
          </div>
          {isSelected === true ? (
            <div className="flex flex-col justify-between col-start-2 col-end-4 max-sm:h- max-sm:block  ">
              <div className="flex gap-2 items-center px-4 py-2 border-b max-sm:pl-2 max-sm:gap-1 ">
                <i
                  onClick={back}
                  class="text-sm text-purple-800 fa-solid fa-angles-left cursor-pointer hidden max-sm:block hover:bg-purple-100 px-2 py-1 rounded-md"
                ></i>
                <img
                  src={selectedUser.avatar ? selectedUser.avatar : profileImg}
                  alt=""
                  className="h-10 w-10 overflow-hidden rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <h3 className="font-medium ">{selectedUser.username}</h3>
                  <p className="text-xs inline-flex justify-start text-gray-500 ">
                    Online
                  </p>
                </div>
              </div>
              <div className="flex-1 overflow-y-auto space-y-6 p-4 max-h-60 max-sm:max-h-[500px] max-sm:space-y-3 ">
                {messages.map((m, index) => (
                  <div
                    ref={bottomRef}
                    key={index}
                    className={` ${
                      m.senderId === currentUser._id
                        ? "text-right "
                        : "text-left"
                    }`}
                  >
                    <span
                      className={`max-w-[80%] inline-flex flex-col ${
                        m.senderId === currentUser._id
                          ? "bg-purple-600 text-white items-start"
                          : " bg-gray-100 text-gray-900 "
                      } rounded-lg px-3 py-1.5 max-sm:px-2 max-sm:py-[1px] max-sm:text-sm`}
                    >
                      {m.text}
                      <span
                        className={`text-xs max-sm:text-[9px] ${
                          m.senderId === currentUser._id
                            ? "text-gray-200"
                            : "text-gray-500"
                        }`}
                      >
                        {m.time}
                      </span>
                    </span>
                  </div>
                ))}
              </div>

              <div className="relative p-4 border-t border">
                <form action="" className="flex gap-2">
                  <input
                    type="text"
                    className="w-full rounded-md px-3 py-2 text-sm focus:outline-purple-600 border "
                    placeholder="Type a message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  <button
                    onClick={sendMessage}
                    className="bg-purple-600 rounded-md hover:ng-purple-700 px-3 py-2"
                  >
                    <i class="text-white fa-regular fa-paper-plane"></i>
                  </button>
                </form>
              </div>
            </div>
          ) : (
            <div className="flex flex-1 items-cente justify-center col-start-2 col-end-4 max-sm:hidden">
              <div className="text-center flex flex-col items-center justify-center">
                <i class="fa-regular fa-message text-purple-700 bg-purple-50 text-4xl rounded-full p-4"></i>
                <h3 className="text-lg font-medium mb-2">
                  No conversation selected
                </h3>
                <p className="text-[#94a3b8] max-w-md text-sm">
                  Choose a conversation from the sidebar to start chatting or
                  continue a previous conversation.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Chat;
