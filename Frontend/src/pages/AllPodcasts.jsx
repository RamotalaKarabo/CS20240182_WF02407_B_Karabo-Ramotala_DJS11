import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import PodcastCard from "../components/Podcast_Components/PodcastCard"
import fetchAllPodcasts from '../utils/fetchAllPodcasts';
import {filterPodcasts} from '../utils/filterPodcasts';


const AllPodcasts = () => {

   const [podcasts, setPodcasts] = useState([]); 
   const [filteredPodcasts, setFilteredPodcasts] = useState([]);
   const [searchTerm, setSearchTerm] = useState(''); 
   const [genre, setGenre] = useState('all'); 
   const [sortOrder, setSortOrder] = useState('asc'); 
   const [error, setError] = useState(null);

   useEffect(() => { fetchAllPodcasts(setPodcasts, setError)}, []);

   useEffect(() => { 
    filterPodcasts(podcasts, searchTerm, genre, sortOrder, setFilteredPodcasts)}, 
    [searchTerm, genre, sortOrder, podcasts]
); 


if (error){
    return <div>Error: {error}</div>
}

  return (
    <div >

      <nav> 

        <div className=" mx-auto max-w-xl py-2 px-6 rounded-full bg-gray-50 border flex focus-within:border-gray-300 flex-start" >
          <input className="bg-transparent w-full focus:outline-none pr-4 font-semibold border-0 focus:ring-0 px-0 py-0"
          type="text" 
          placeholder="Search podcasts..." 
          value={searchTerm} 
          onChange={e => setSearchTerm(e.target.value)} 
          /> 
        </div>

        <select 
        value={genre} 
        onChange={e => setGenre(e.target.value)
        }
        className="flex flex-row items-center justify-center min-w-[130px] px-4 rounded-full font-medium tracking-wide border disabled:cursor-not-allowed disabled:opacity-50 transition ease-in-out duration-150 text-base bg-black text-white font-medium tracking-wide border-transparent"> 

        <option value="all">All Genres</option> 
        <option value="comedy">Comedy</option> 
        <option value="education">Education</option> 
        <option value="technology">Technology</option> 
        {/* Add more genres as needed */} 
        </select> 
        
        <select 
        value={sortOrder} 
        onChange={e => setSortOrder(e.target.value) || setGenre(genre)
        }
        className="flex flex-row items-center justify-center min-w-[130px] px-4 rounded-full font-medium tracking-wide border disabled:cursor-not-allowed disabled:opacity-50 transition ease-in-out duration-150 text-base bg-black text-white font-medium tracking-wide border-transparent"> 
        <option value="asc">A-Z</option> 
        <option value="desc">Z-A</option> 
        </select> 
        </nav>

        <div>
            <h1>Podcast Shows</h1>
            <div className="w-full px-4 lg:px-12 py-4 grid grid-cols-1 gap-8">
                {filteredPodcasts.map(show => (
                    <PodcastCard key={show.id} items={show}/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default AllPodcasts