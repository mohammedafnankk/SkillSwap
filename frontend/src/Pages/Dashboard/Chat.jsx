import React, { useEffect, useState } from "react";
import socket from "../../Socket";
import profileImg from "../../assets/images/user.jpg";
import Search from "./Search";
import Sidebar from "./Sidebar";
import axiosInstencs from "../../axios/axiosInstence";
function Chat() {
  const [activeTab,setActiveTab]= useState("direct")

    const [message, setMessage] = useState("");
//   const [chat, setChat] = useState([]);
//   const [messages, setMessages] = useState([]);
  const [mentors,setMentors]=useState([])
  const [selectedUser,setSelectedUser]= useState([])
  const [isSelected,setIsSelected]= useState(false)

   useEffect(()=>{
    axiosInstencs.get('/allmentors').then((res)=>{
      console.log(res.data.allMentors);
      setMentors(res.data.allMentors)
    }).catch((err)=>{
      console.log(err);
      
    })
   },[])
   const sin =(id)=>{
    axiosInstencs.get(`/singleuser/${id}`).then((res)=>{
      setSelectedUser(res.data.msg)
      setIsSelected(true)
      console.log(res.data.msg)
      
    }).catch((err)=>console.log(err))
   }
  return (
    <div className="">
      <div className=" fixed z-50">
        <Sidebar />
      </div>
      <div className="fixed w-[83%] z-20 ml-[224px] max-lg:ml-0 max-lg:w-full">
        <Search />
      </div>
      <div className="py-6 px-4 ml-[224px] max-lg:ml-0 pt-24 bg-gray-50">
   

        <div>
          <h1 className="text-2xl font-bold mb-4">Messages</h1>
        </div>
        <div className="grid grid-cols-3 rounded-lg border bg-white ">
          <div className="border-r">
            <div className="flex flex-col">
              <div className="border-b px-4 py-2 ">
                <div defaultValue="direct" className="inline-flex items-center justify-center rounded-md bg-gray-200 p-1 w-full">
                  <button onClick={()=>setActiveTab("direct")} className={`text-sm px-12 py-1.5 rounded-sm font-medium ${activeTab === "direct"?"bg-white w-full":"text-gray-500"}`}>
                    Direct
                  </button>
                  {/* <button onClick={()=>setActiveTab("groups")} className={`text-sm px-12 py-1.5 rounded-sm font-medium ${activeTab === "groups"?"bg-white":"text-gray-500"}`}>
                    Groups
                  </button> */}
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
                    {mentors.map((mentor,i)=>(
            <div key={i}>
              <button onClick={()=>sin(mentor._id)} className="w-full flex items-start p-4 hover:bg-gray-50 border-b">
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
                    <h2 className="font-medium">{mentor.username}</h2>
                    <span className="text-sm">4:21 PM</span>
                  </div>
                  <p className="text-sm text-[#94a3b8] text-start truncate w-64 max-lg:w-28 ">
                    Thanks for the help with React hooks!
                  </p>
                </div>
              </button>
              </div>
                  ))}
                </div>
             {isSelected === true?
             <div className="flex flex-col justify-between col-start-2 col-end-4">
      

              <div className="flex gap-2 items-center px-4 py-2 border-b">
                <img src={profileImg} alt="" className="h-10 w-10 overflow-hidden rounded-full object-cover"/>
                <div className="flex flex-col">
                  <h3 className="font-medium">{selectedUser.username}</h3>
                  <p className="text-xs inline-flex justify-start text-gray-500">Online</p>
                </div>
              </div>
          
              <div className="relative p-4 border-t border">
                <form action="" className="flex gap-2">


                 <input type="text"
                 className="w-full rounded-md px-3 py-2 text-sm focus:outline-purple-600 border "
                 placeholder="Type a message..."
                 value={message}
                 onChange={(e)=>setMessage(e.target.value)}
                 />
                 <button className="bg-purple-600 rounded-md hover:ng-purple-700 px-3 py-2"><i class="text-white fa-regular fa-paper-plane"></i></button>
                </form>
              </div>
             </div>
             :
             
          <div className="flex flex-1 items-cente justify-center col-start-2 col-end-4">
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
             }
        </div>
      </div>
    </div>
  );
}

export default Chat;


// import { useEffect, useState } from "react";
// import socket from "../../Socket"
// import axiosInstencs from "../../axios/axiosInstence";
// import { data } from "react-router-dom";

// const Chat = () => {
//   const [message, setMessage] = useState("");
//   const [chat, setChat] = useState([]);
//   const [messages, setMessages] = useState([]);
//   const [currentUser,setCurrentUser]= useState([])
//   const [selectedUser,setSelectedUser]= useState([])

//   useEffect(()=>{
//     axiosInstencs.get('/singleuser/680cb8164fd75cdd7db37efd').then((res)=>{
//       setCurrentUser(res.data.msg)
//       console.log(res.data.msg);
      
//     })
//     axiosInstencs.get('/singleuser/680cf66590feb70c3244edfe').then((res)=>{
//       setSelectedUser(res.data.msg)
//     })
//   },[])
//   // console.log("Helloooooo",currentUser._id);
  
//   // useEffect(() => {
//   //   socket.emit('addUser', currentUser._id);

//   //   socket.on('getMessage', (data) => {
//   //     setChat((prev) => [...prev, { senderId: data.senderId, text: data.text }]);
//   //   });

//   //   return () => {
//   //     socket.off();
//   //   };
//   // }, [currentUser]);

//   // const handleSend = () => {
//   //   if (message.trim() !== "") {
//   //     socket.emit('sendMessage', {
//   //       senderId: currentUser._id,
//   //       receiverId: selectedUser._id,
//   //       text: message,
//   //     });
//   //     setChat((prev) => [...prev, { senderId: currentUser._id, text: message }]);
//   //     setMessage('');
//   //   }
//   // };

//   // return (
//   //   <div className="p-4">
//   //     <div className="h-96 overflow-y-scroll border mb-4">
//   //       {chat.map((m, index) => (
//   //         <div key={index} className={`p-2 ${m.senderId === currentUser._id ? "text-right" : "text-left"}`}>
//   //           <span className="bg-blue-200 rounded px-3 py-1">{m.text}</span>
//   //         </div>
//   //       ))}
//   //     </div>
//   //     <div className="flex gap-2">
//   //       <input
//   //         type="text"
//   //         value={message}
//   //         onChange={(e) => setMessage(e.target.value)}
//   //         className="border w-full px-4 py-2 rounded"
//   //         placeholder="Type a message"
//   //       />
//   //       <button onClick={handleSend} className="bg-blue-500 text-white px-4 py-2 rounded">
//   //         Send
//   //       </button>
//   //     </div>
//   //   </div>
//   // );


//   useEffect(() => {
//     fetchMessages();

//     socket.on('receive_message', (data) => {
//       if ((data.senderId === selectedUser._id && data.receiverId === currentUser._id) ||
//           (data.senderId === currentUser._id && data.receiverId === selectedUser._id)) {
//         setMessages(prev => [...prev, data]);
//       }
//     });

//     return () => {
//       socket.off('receive_message');
//     };
//   }, []);

//   const fetchMessages = async () => {
//      axiosInstencs.get(`/get`, {
//       params: {
//         senderId: currentUser._id,
//         receiverId: selectedUser._id
//       }
//     }).then((res)=>{
//       setMessages(res.data);
//      console.log(res.data);
     
//     }).catch((err)=>{
//       console.log(err);
      
//     })
//   };

//   const sendMessage = () => {
//     const newMessage = {
//       senderId: currentUser._id,
//       receiverId: selectedUser._id,
//       text: message
//     };

//     socket.emit('send_message', newMessage);

//     setMessages(prev => [...prev, { ...newMessage, timestamp: new Date() }]);
//     setMessage('');
//   };

//   return (
//     <div className="flex flex-col p-4 h-screen">
//       <div className="flex-1 overflow-y-auto space-y-2">
//         {messages.map((msg, index) => (
//           <div key={index} className={`p-2 rounded-md ${msg.senderId === currentUser._id ? 'bg-blue-500 text-white ml-auto' : 'bg-gray-300 text-black mr-auto'}`}>
//             {msg.text}
//           </div>
//         ))}
//       </div>

//       <div className="flex p-2">
//         <input 
//           type="text" 
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           className="flex-1 p-2 border rounded-md mr-2"
//           placeholder="Type a message..."
//         />
//         <button 
//           onClick={sendMessage}
//           className="bg-blue-600 text-white px-4 py-2 rounded-md"
//         >
//           Send
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Chat;
