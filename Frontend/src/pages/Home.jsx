import React from 'react'
import { Link } from 'react-router-dom'
import  { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <>
        <div className="w-full mt-8 text-center p-12 text-xl font-semibold bg-purple-100 text-purple-900 border-purple-700 rounded">
        <div className="">Welcome to <span>The</span><span>PodSphere</span></div> The galaxy's hub for all your podcasting adventures! 🚀 Whether you’re craving true crime chills, rolling on the floor with comedy gold, diving into science wonders, or leveling up with personal growth tips—we’ve got you covered. 🎧🌟 But why just listen when you can join the fun? Create, upload, and share your own podcasts with our easy-to-use platform. Step into the spotlight, share your story, and connect with a global audience. Ready to tune in and turn up? PodSphere is where your voice takes flight. Let’s make some noise! 🛸✨
        </div>

        <div className="mt-6 flex items-center justify-center ">
          <Link className="" to="/all-podcasts">
          <button className="ms-4 px-6 py-3 bg-purple-600 text-white rounded-full shadow-xl hover:text-xl hover:shadow-2xl hover:text-purple-900">
            <span>Watch</span><span> Podcasts</span>
          </button>
          </Link>

        </div>
    </>

  )
}

export default Home