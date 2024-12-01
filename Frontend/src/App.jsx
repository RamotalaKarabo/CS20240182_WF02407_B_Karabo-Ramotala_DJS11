import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


import MainLayout from './layout/MainLayout'
import Home from './pages/Home'
import AuthenticationLayout from './layout/AuthenticationLayout'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Categories from './pages/Categories'
import Profile from './pages/Profile'
import AllPodcasts from './pages/AllPodcasts'
import AddPodcasts from './pages/AddPodcasts'
import PodcastLayout from './layout/PodcastLayout'
import SeasonsLayout from './layout/SeasonsLayout'
import EpisodesLayout from './layout/EpisodesLayout'
import Seasons from './pages/Seasons'
import Episodes from './pages/Episodes'
import Podcast from './pages/Podcast'
import ShowLayout from './layout/ShowLayout'





const App = () => {
  return (
    <div className="">

      <Router>
        <Routes>

          {/* Page Route */}
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home/>} />
            <Route path="categories" element={<Categories />} />
            <Route path="profile" element={<Profile />} />
            <Route path="add-podcast" element={<AddPodcasts />} />
          </Route>

          {/* Podcast Route */}
          <Route path="/all-podcasts" element={<PodcastLayout />}>
            <Route index element={<AllPodcasts />} />
            <Route path="show/:showId" element={<Podcast />}/>
          </Route>

          <Route path="/show/:showId/season/:seasonId" element={<EpisodesLayout/>}>
            <Route index element={<Episodes/>} /> 
          </Route>

          {/* Authentication Route (Log-In || Sign-In) */}
          <Route path="/" element={<AuthenticationLayout />}>
           <Route path="/signup" element={<SignUp />} />
           <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </Router>

    </div>
  )
}

export default App