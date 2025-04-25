import React, { useState } from "react";
import banner from "../../assets/images/Lily1.jpg";
import banner2 from "../../assets/images/Digital (1).jpg";
import userProfile from "../../assets/images/user.jpg";
import logo from "../../assets/images/skill swap.png";
import { Link } from "react-router-dom";

function Home() {
  const [styles] = useState("text-gray-400 hover:text-white");
   
  // const Footer=[
  //   {heading:"Platform" ,aTags:["How it Works","Find a Mentor","Become a Mentor","Skill Exchange","Community Forums"]},
  //   {heading:"Platform" ,aTags:["How it Works","Find a Mentor","Become a Mentor","Skill Exchange","Community Forums"]},
  //   {heading:"Platform" ,aTags:["How it Works","Find a Mentor","Become a Mentor","Skill Exchange","Community Forums"]},
  //   {heading:"Platform" ,aTags:["How it Works","Find a Mentor","Become a Mentor","Skill Exchange","Community Forums"]},
  //   {heading:"Platform" ,aTags:["How it Works","Find a Mentor","Become a Mentor","Skill Exchange","Community Forums"]}
  // ]

  return (
    <div>
      <main>
        <section className="bg-gradient-to-br from-purple-600 to-indigo-700 text-white py-20">
          <div className="container px-4 grid grid-cols-2 max-md:grid-cols-1">
            <div className="flex items-center max-md:mb-6">
              <div>
                <h1 className="text-4xl font-bold mb-6">
                  Connect, Learn, and Grow Together
                </h1>
                <p className="text-purple-100 text-xl mb-8">
                  SkillSwap brings together mentors and learners in a
                  collaborative community. Share knowledge, develop skills, and
                  build meaningful connections.
                </p>
                <div className="flex gap-[15px]">
                  <a href="#start" className="text-purple-700 bg-white px-[20px] py-[10px] rounded-[8px] hover:bg-gray-100">
                    Get Started
                  </a>
                
                </div>
                <div></div>
              </div>
            </div>
            <div >
              <img src={banner} alt="" className="rounded-[10px]" />
            </div>
          </div>
        </section>
        <section className="py-12 bg-white">
          <div className="flex justify-evenly text-center max-md:grid max-md:grid-cols-2 gap-7 ">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-purple-700">
                5,000+
              </p>
              <p className="text-gray-600">Active Mentors</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-purple-700">
                12,000+
              </p>
              <p className="text-gray-600">Learners</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-purple-700">
                50+
              </p>
              <p className="text-gray-600">Skill Categories</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-purple-700">
                25,000+
              </p>
              <p className="text-gray-600">Sessions Completed</p>
            </div>
          </div>
        </section>
        <section className="py-20 bg-gray-50" id="features">
          <div className="px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">
                How MentorCircle Works
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our platform makes it easy to connect with mentors, exchange
                skills, and grow your knowledge.
              </p>
            </div>
            <div className=" grid grid-cols-4 gap-5 max-lg:grid-cols-2 max-md:grid-cols-1">
              <div className="p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border">
                <div className="pb-6">
                  <i class="fa-regular fa-compass bg-purple-100 text-purple-700 p-4 rounded-lg w-fit"></i>
                  <h3 className="text-2xl font-semibold mt-4">
                    Find Expert Mentors
                  </h3>
                </div>
                <div className="p- pt-0">
                  <p className="text-base text-gray-600">
                    Connect with experienced professionals in your field who can
                    guide your learning journey.
                  </p>
                </div>
              </div>
              <div className="p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border">
                <div className="pb-6">
                  <i class="fa-solid fa-globe bg-purple-100 text-purple-700 p-4 rounded-lg"></i>
                  <h3 className="text-2xl font-semibold mt-4">
                    Skill Exchange
                  </h3>
                </div>
                <div className="p- pt-0">
                  <p className="text-base text-gray-600">
                    Trade your expertise with others. Teach what you know, learn
                    what you don't.
                  </p>
                </div>
              </div>
              <div className="p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border">
                <div className="pb-6">
                  <i class="fa-regular fa-message bg-purple-100 text-purple-700 p-4 rounded-lg"></i>

                  <h3 className="text-2xl font-semibold mt-4">
                    Live Discussions
                  </h3>
                </div>
                <div className="p- pt-0">
                  <p className="text-base text-gray-600">
                    Participate in real-time conversations, Q&A sessions, and
                    knowledge sharing.
                  </p>
                </div>
              </div>
              <div className="p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border">
                <div className="pb-6">
                  <i class="fa-solid fa-users bg-purple-100 text-purple-700 p-4 rounded-lg"></i>
                  <h3 className="text-2xl font-semibold mt-4">
                    Community Support
                  </h3>
                </div>
                <div className="p- pt-0">
                  <p className="text-base text-gray-600">
                    Join a supportive community of learners and mentors
                    dedicated to growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white ">
          <div className="container px-4">
            <div className="text-center mb-16">
              <h1 className="text-3xl font-bold mb-4">
                Explore Skill Categories
              </h1>
              <p className="text-xl text-gray-600">
                Discover mentors across a wide range of disciplines and
                specialties.
              </p>
            </div>
            <div className="grid grid-cols-4 gap-5 max-lg:grid-cols-2 max-md:grid-cols-1">
              <div className="p-6 rounded-lg border hover:shadow-lg transition-shadow ">
                <div className="pb-6">
                  <i class="fa-solid fa-code p-4 rounded-lg bg-blue-100 text-blue-700 w-fit"></i>
                  <h3 className="text-2xl font-semibold mt-4 pb-2">
                    Programming
                  </h3>
                  <p className="text-sm text-gray-600">
                    Software development, web, mobile, and more
                  </p>
                </div>
                <div className="flex justify-between items-center hover:bg-[#f1f5f9] px-[20px] py-[10px] rounded-[8px] text-sm">
                  <button>Explore</button>
                  <i class="fa-solid fa-arrow-right"></i>
                </div>
              </div>
              <div className="p-6 rounded-lg border hover:shadow-lg transition-shadow ">
                <div className="pb-6">
                  <i class="fa-solid fa-palette p-4 rounded-lg bg-purple-100 text-purple-700 w-fit"></i>
                  <h3 className="text-2xl font-semibold mt-4 pb-2">Design</h3>
                  <p className="text-sm text-gray-600">
                    UI/UX, graphic design, and visual arts
                  </p>
                </div>
                <div className="flex justify-between items-center hover:bg-[#f1f5f9] px-[20px] py-[10px] rounded-[8px] text-sm">
                  <button>Explore</button>
                  <i class="fa-solid fa-arrow-right"></i>
                </div>
              </div>
              <div className="p-6 rounded-lg border hover:shadow-lg transition-shadow ">
                <div className="pb-6">
                  <i class="fa-regular fa-lightbulb p-4 rounded-lg bg-yellow-100 text-yellow-700 w-fit"></i>
                  <h3 className="text-2xl font-semibold mt-4 pb-2">Business</h3>
                  <p className="text-sm text-gray-600">
                    Marketing, entrepreneurship, and management
                  </p>
                </div>
                <div className="flex justify-between items-center hover:bg-[#f1f5f9] px-[20px] py-[10px] rounded-[8px] text-sm">
                  <button>Explore</button>
                  <i class="fa-solid fa-arrow-right"></i>
                </div>
              </div>
              <div className="p-6 rounded-lg border hover:shadow-lg transition-shadow ">
                <div className="pb-6">
                  <i class="fa-solid fa-book-open p-4 rounded-lg bg-green-100 text-green-700 w-fit"></i>
                  <h3 className="text-2xl font-semibold mt-4 pb-2">
                    Education
                  </h3>
                  <p className="text-sm text-gray-600">
                    Teaching, learning, and academic skills
                  </p>
                </div>
                <div className="flex justify-between items-center hover:bg-[#f1f5f9] px-[20px] py-[10px] rounded-[8px] text-sm">
                  <button>Explore</button>
                  <i class="fa-solid fa-arrow-right"></i>
                </div>
              </div>
            </div>
            <div className="text-center py-14">
              <Link to={'/dashboard'} className="text-sm font-medium rounded-md bg-purple-600 hover:bg-purple-700 px-8 py-3.5 h-11 text-white text-center">
                View All Categories
              </Link>
            </div>
          </div>
        </section>

        <section id="start" className="py-20 bg-gray-50">
          <div className="grid grid-cols-2 px-4 gap-16 max-md:grid-cols-1">
            <div className="">
              <img src={banner2} alt="" className="rounded-lg shadow-xl" />
            </div>

            <div className=" mt-8">
              <h2 className="text-3xl font-bold mb-6">
                Getting Started is Easy
              </h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 text-purple-700 p-2 rounded-full">
                    <span className="font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Create your profile
                    </h3>
                    <p className="text-gray-600">
                      Sign up and build your profile highlighting your skills,
                      interests, and learning goals.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 text-purple-700 p-2 rounded-full">
                    <span className="font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Connect with Mentors
                    </h3>
                    <p className="text-gray-600">
                      Browse mentors by category, read reviews, and request
                      sessions with those who match your needs.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 text-purple-700 p-2 rounded-full">
                    <span className="font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Learn and Grow
                    </h3>
                    <p className="text-gray-600">
                      Schedule sessions, participate in discussions, and track
                      your progress as you develop new skills.
                    </p>
                  </div>
                </div>
                <div className="mt-9 pl-2 max-md:text-center">
                  <Link  to={'/signup'} className="text-white rounded-md text-sm font-medium bg-purple-600 hover:bg-purple-700 px-4 py-2">
                    Get Started Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-3xl font-bold mb-4">What Our Users Say</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Hear from mentors and learners who have experienced the power of
                SkillSwap.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-8 max-md:grid-cols-1">
              <div className="rounded-lg border bg-card shadow-md">
                <div className="p-6">
                  <div className="mb-6">
                    <p className="italic text-gray-700">
                      “SkillSwap helped me transition into tech from a
                      completely different field. My mentor provided invaluable
                      guidance that accelerated my learning.”
                    </p>
                  </div>
                  <div className="flex items-center">
                    <span className="w-12">
                      <img src={userProfile} alt="" className="rounded-full" />
                    </span>
                    <div className="pl-4">
                      <p className="font-semibold">Sarah Williams</p>
                      <p className="text-sm text-gray-600">
                        Frontend Developer
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border bg-card shadow-md">
                <div className="p-6 pt-6">
                  <div className="mb-6">
                    <p className="italic text-gray-700">
                      “As someone who loves to teach, this platform has
                      connected me with amazing mentees who are passionate about
                      learning. It's rewarding to see their growth.”
                    </p>
                  </div>
                  <div className="flex items-center">
                    <span className="w-12">
                      <img src={userProfile} alt="" className="rounded-full" />
                    </span>
                    <div className="pl-4">
                      <p className="font-semibold">Michael Chen</p>
                      <p className="text-sm text-gray-600">
                        Senior Software Engineer
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border bg-card shadow-md">
                <div className="p-6 pt-6">
                  <div className="mb-6">
                    <p className="italic text-gray-700">
                      “The skill exchange model is brilliant. I improved my
                      design skills while teaching programming to others.
                      Win-win for everyone involved!”
                    </p>
                  </div>
                  <div className="flex items-center">
                    <span className="w-12">
                      <img src={userProfile} alt="" className="rounded-full" />
                    </span>
                    <div className="pl-4">
                      <p className="font-semibold">Emily Rodriguez</p>
                      <p className="text-sm text-gray-600">UX Designer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-purple-600 to-indigo-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Join Our Community?
            </h2>
            <p className="text-xl mb-8 mx-auto text-purple-100">
              Start your journey today. Connect with mentors, share your
              knowledge, and grow your skills.
            </p>
          </div>
          <div className="flex justify-center gap-4 max-sm:flex-col text-center items-center">
            <Link to={'/signup'} className="items-center bg-white text-purple-700 hover:bg-gray-100 px-8 rounded-md py-2.5 ">
              Sign Up Now
            </Link>
            <Link to={'/login'} className="items-center bg-gradient-to-br from-indigo-700 to-purple-600 px-8 rounded-md py-2.5">
              Sign In
            </Link>
          </div>
        </section>
      </main>
      <footer className="bg-gray-900 text-white py-12">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-4 gap-8 max-md:grid-cols-1">
            <div>
              <a href="/" className="flex items-center mb-4">
                <img src={logo} alt="" className="w-14" />
                <span className="text-2xl font-bold">SkillSwap</span>
              </a>
              <p className="text-gray-400 mb-4">
                Connecting mentors and learners in a collaborative community.
              </p>
              <div className="flex space-x-4 text-2xl">
                         
              {/* {Footer.map((item,i)=>(
              <div key={i}>
              <h3 className="text-lg font-semibold mb-4">{Footer.heading}</h3>
                <ul className="space-y-2">
                  <li>
                     <a href="#" className={styles}>{item.aTags}</a>
                  </li>
                </ul>
              </div>
              ))} */}
              </div>
              <div className="flex space-x-4 text-2xl">
                <a href="#">
                  <i class="text-gray-400 hover:text-white fa-brands fa-facebook"></i>
                </a>
                <a href="#">
                  <i class="text-gray-400 hover:text-white fa-brands fa-twitter"></i>
                </a>
                <a href="#">
                  <i class="text-gray-400 hover:text-white fa-brands fa-instagram"></i>
                </a>
                <a href="#">
                  <i class="text-gray-400 hover:text-white fa-brands fa-github"></i>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Platform</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className={styles}>
                    How it works
                  </a>
                </li>
                <li>
                  <a href="#" className={styles}>
                    Find a Mentor
                  </a>
                </li>
                <li>
                  <a href="#" className={styles}>
                    Become a Mentor
                  </a>
                </li>
                <li>
                  <a href="#" className={styles}>
                    Skill Exchange
                  </a>
                </li>
                <li>
                  <a href="#" className={styles}>
                    Community Forums
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className={styles}>
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className={styles}>
                    Guides
                  </a>
                </li>
                <li>
                  <a href="#" className={styles}>
                    Events
                  </a>
                </li>
                <li>
                  <a href="#" className={styles}>
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className={styles}>
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className={styles}>
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className={styles}>
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className={styles}>
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className={styles}>
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className={styles}>
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} SkillSwap. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
