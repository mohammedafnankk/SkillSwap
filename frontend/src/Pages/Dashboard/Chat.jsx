import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import profileImg from "../../assets/images/user.jpg";
import Search from "./Search";
import Sidebar from "./Sidebar";
function Chat() {
  const [activeTab,setActiveTab]= useState("direct")
  //   const socket= io("http://localhost:8020")
  // const [message,setMessage] = useState("")
  // const [room , setRoom] = useState('')
  // const [messages,setMessages] = useState([])
  // const [roomName,setRoomName] = useState('')
  // console.log(messages);

  // const handleSubmit=(e)=>{
  //   e.preventDefault()
  //   socket.emit("message",{message , room})
  //   setMessage("")
  // }
  // const joinRoomhandler=(e)=>{
  //   e.preventDefault()
  //   socket.emit('join-room',roomName)
  //   setRoomName("")
  //   socket.on("receive-message",(data)=>{
  //     console.log(data);
  //     setMessages((prev)=>[...prev , data])

  //   })
  // }

  //   useEffect(()=>{
  //     socket.on("connect",()=>{
  //       console.log("connected",socket.id);

  //     })
  //     socket.on("receive-message",(data)=>{
  //       console.log(data);
  //       setMessages((prev)=>[...prev , data])

  //     })
  //     socket.on("welcome",(s)=>{
  //       console.log(s);

  //     })

  //     return ()=>{
  //       socket.disconnect()
  //     }
  //   },[])
  return (
    <div className="">
      <div className=" fixed z-50">
        <Sidebar />
      </div>
      <div className="fixed w-full z-50 pl-[229px]">
        <Search />
      </div>
      <div className="py-6 px-4 ml-[229px] pt-24 bg-gray-50">
        {/* <div>
        <form action="" onSubmit={joinRoomhandler}>
          <input value={roomName} onChange={(e)=>setRoomName(e.target.value)} type="text" placeholder='room name' />
          <button type='submit'>join</button>
        </form>
        <form action="" onSubmit={handleSubmit}>
          <input value={message} onChange={(e)=>setMessage(e.target.value)} type="text" placeholder='message' />
          <input type="text" value={room} onChange={(e)=>setRoom(e.target.value)} placeholder='room' />
          <button type='submit'>sent</button>
        </form>
        {messages.map((m,i)=>(
          <p key={i}>{m}</p>
        ))}
        
        
      </div> */}

        <div>
          <h1 className="text-2xl font-bold mb-4">Messages</h1>
        </div>
        <div className="flex flex-1 overflow-hidden rounded-lg border bg-white ">
          <div className="border-r">
            <div className="flex flex-col">
              <div className="border-b px-4 py-2">
                <div defaultValue="direct" className="inline-flex items-center justify-center rounded-md bg-gray-200 p-1">
                  <button onClick={()=>setActiveTab("direct")} className={`text-sm px-12 py-1.5 rounded-sm font-medium ${activeTab === "direct"?"bg-white":"text-gray-500"}`}>
                    Direct
                  </button>
                  <button onClick={()=>setActiveTab("groups")} className={`text-sm px-12 py-1.5 rounded-sm font-medium ${activeTab === "groups"?"bg-white":"text-gray-500"}`}>
                    Groups
                  </button>
                </div>
              </div>
            </div>
            <div className="p-4 border-b">
              <input
                type="text"
                placeholder="Search conversations..."
                className="rounded-md text-sm border px-3 py-3 w-full focus:outline-purple-700"
              />
            </div>
            <div>
              <button className="w-full flex items-start p-4 hover:bg-gray-50 border-b">
                <div className="relative">
                  <span className="h-10 w-10 relative overflow-hidden rounded-full ">
                    <img
                      src={profileImg}
                      alt=""
                      className="w-12 h-12 rounded-full "
                    />
                  </span>
                  <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-white"></span>
                </div>
                <div className="flex-1 pl-2">
                  <div className="flex justify-between items-baseline">
                    <h2 className="font-medium">Elone Musk</h2>
                    <span className="text-sm">4:21 PM</span>
                  </div>
                  <p className="text-sm text-[#94a3b8]">
                    Thanks for the help with React hooks!
                  </p>
                </div>
              </button>
              <button className="w-full flex items-start p-4 hover:bg-gray-50 ">
                <div className="relative">
                  <span className="h-10 w-10 relative overflow-hidden rounded-full ">
                    <img
                      src={profileImg}
                      alt=""
                      className="w-12 h-12 rounded-full "
                    />
                  </span>
                  <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-white"></span>
                </div>
                <div className="flex-1 pl-2">
                  <div className="flex justify-between items-baseline">
                    <h2 className="font-medium">Elone Musk</h2>
                    <span className="text-sm">4:21 PM</span>
                  </div>
                  <p className="text-sm text-[#94a3b8]">
                    Thanks for the help with React hooks!
                  </p>
                </div>
              </button>
            </div>
          </div>
          <div className="flex flex-1 items-cente justify-center">
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
        </div>
      </div>
    </div>
  );
}

export default Chat;
