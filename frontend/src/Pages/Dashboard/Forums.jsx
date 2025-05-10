import React, { useEffect, useState } from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import axiosInstencs from "../../axios/axiosInstence";
import { Link, useParams } from "react-router-dom";
import profileImg from "../../assets/images/user.jpg";

function Forums() {
  const { userId } = useParams();
  const access_token = localStorage.getItem("access_token");
  const [question, setQuestion] = useState("");
  const [userName, setUserName] = useState("");
  const [avatar, setAvatar] = useState("not avatar");
  const [questions, setQuestions] = useState([]);
  const [allAnswers, setAllanswers] = useState([]);
  const [commentID, setCommentID] = useState("");
  const [answer, setAnswer] = useState("");
  const [cCount,setCcount]= useState("")
  useEffect(() => {
    axiosInstencs
      .get(`/singleuser/${userId}`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      })
      .then((res) => {
        console.log(res.data.msg);
        const user = res.data.msg;
        setUserName(user.username);
        setAvatar(user.avatar);
      })
      .catch((err) => console.log(err));
  }, [userId, access_token]);

  useEffect(() => {
    axiosInstencs
      .get("/all-questions")
      .then((res) => {
        console.log(res.data.questions);
        setQuestions(res.data.questions);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleAddQuestion = (e) => {
    e.preventDefault();
    if (question === "") {
      return;
    }
    axiosInstencs
      .post(`/add-new-question/${userId}`, {
        username: userName,
        avatar: avatar,
        question: question,
      })
      .then((res) => {
        console.log(res.data);
        setQuestion("");
      })
      .catch((err) => console.log(err));
  };

  const comments = (id) => {
    console.log(cCount,"count");
    
    setCommentID((prev) => (prev === "" ? id : ""));
    questions.map((a) =>
      id === a._id ? setAllanswers(a.answer) : console.log("")
    );
  };

  const handleAnswerAdd = (id) => {
    //  .preventDefault()
    axiosInstencs
      .patch(`/add-answer/${id}`, {
        answer: [
          ...allAnswers,
          {
            ans_user_id: userId,
            ans_avatar: avatar,
            ans_username: userName,
            ans_answer: answer,
          },
        ],
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  // const click =(id)=>{
  //   questions.map((a)=>(
  //     id === a._id?setAllanswers(a.answer):console.log("")
  //   ))
  // }

  return (
    <div>
      <div className=" fixed z-50">
        <Sidebar />
      </div>
      <div className="fixed w-[83%] z-20 ml-[224px] max-lg:ml-0 max-lg:w-full">
        <Search />
      </div>
      <div className="bg-gray-50 py-6 px-4 pt-24 ml-[224px] max-lg:ml-0 max-sm:px-3 h-scree">
        <Link
          to={-1}
          className="hidden max-lg:block max-lg:w-fit inline-flex items-center justify-center gap-2 rounded-md text-sm px-4 py-2 mb-4 hover:bg-slate-200"
        >
          <i class="fa-solid fa-arrow-left max-lg:pr-2"></i>Back
        </Link>
        <div className="space-y-8">
          <div>
            <h1 className="text-2xl font-bold">Forums & Discussions</h1>
            <p className="text-gray-400">
              Join conversations, ask questions, and share your knowledge
            </p>
          </div>
          <div className="bg-white rounded-md border">
            <div className="border-b pl-4 py-2">
              <h4 className="text-lg font-semibold">Question and Answer</h4>
            </div>

            {questions === "" ? (
              <div className="flex items-center justify-center py-6 px-4">
                <div className="text-center">
                  <i class="fa-regular fa-message mb-4 text-gray-500 text-4xl"></i>
                  <h1 className="text-lg font-semibold">No questions yet</h1>
                  <p className="text-gray-400 mt-2 mb-2">
                    Be the first to ask a question in the Q&A section
                  </p>
                  <button className="inline-flex items-center justify-center gap-3 rounded-md px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white">
                    <i class="fa-solid fa-plus"></i>Ask a Question
                  </button>
                </div>
              </div>
            ) : (
              <div className="px-4 py-2 ">
                <form
                
                  action=""
                  onSubmit={handleAddQuestion}
                  className="flex gap-2"
                >
                  <input
                    type="text"
                    className="w-full rounded-md px-3 py-2 text-sm focus:outline-purple-600 border "
                    placeholder="Ask a Question..."
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                  />
                  <button className="bg-purple-600 rounded-md hover:bg-purple-700 px-3 py-2">
                    <i class="text-white fa-regular fa-paper-plane"></i>
                  </button>
                </form>
                {questions.map((q, i) => (
                  <div>

                    
                    <div key={i} className="py-2">
                      <div className="rounded-md px-4 py-2 border shadow-md">
                        <div className="flex items-center gap-2">
                          <img
                            src={q.avatar?q.avatar:profileImg}
                            alt=""
                            className="h-10 w-10 overflow-hidde rounded-full object-cover"
                          />
                          <p className="text-sm">{q.username}</p>
                        </div>
                        <div className="pl-2 py-1">
                          <p>{q.question}</p>
                        </div>
                        <div className="pl-2  flex items-center gap-8 font-thin">
                          <p onClick={() => comments(q._id)} className="text-white rounded-md bg-purple-600 px-2 py-0.5 hover:bg-purple-700 cursor-pointer">
                            <i
                              
                              class="fa-regular  fa-comment-dots  font-thin "
                            ></i><span className="text-sm  pl-2">{q.answer.length}</span>
                            {}
                          </p>
                          <p className="rounded-md bg-purple-600 px-2 py-0.5 text-white font-thin hover:bg-purple-700 cursor-pointer">
                            <i class="fa-regular fa-thumbs-up "></i>
                          </p>
                          <p className="rounded-md bg-purple-600 px-2 py-0.5 text-white font-thin hover:bg-purple-700">
                            <i class="fa-regular fa-clock "></i>
                          </p>
                        </div>
                        {q._id === commentID ? (
                          <div>
                            <form
                              onSubmit={() => handleAnswerAdd(q._id)}
                              action=""
                              className="flex items-center  gap-2 ml-7 mt-2"
                            >
                              <input
                                value={answer}
                                onChange={(e) => setAnswer(e.target.value)}
                                placeholder="Add a reply..."
                                type="text"
                                className=" w-full rounded-md px-3 py-2 text-sm focus:outline-purple-600 border "
                              />
                              <button className="bg-purple-600 rounded-md hover:bg-purple-700 px-3 py-2">
                                <i class="fa-solid fa-reply text-white"></i>
                              </button>
                            </form>
                            {q.answer.map((ans, i) => (
                              
                              <div
                                key={i}
                                className="rounded-md border bg-gray-50 mt-2 ml-7 px-4 py-2"
                              >
                                
                              
                                <div className="flex items-center gap-2">
                                  <img
                                    src={ans.ans_avatar?ans.ans_avatar:profileImg}
                                    alt=""
                                    className="h-8 w-8 overflow-hidde rounded-full object-cover"
                                  />
                                  <p className="text-sm">{ans.ans_username}</p>
                                </div>
                                <div className="pl-2 py-1">
                                  <p>{ans.ans_answer}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                    {/* <button onClick={()=>click(q._id)}>Click</button> */}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Forums;
