import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import PodcastCard from "../components/Podcast/PodcastCard"


const AllPodcasts = () => {

   const [podcasts, setPodcasts] = useState([]); 
   const [filteredPodcasts, setFilteredPodcasts] = useState([]);
   const [searchTerm, setSearchTerm] = useState(''); 
   const [genre, setGenre] = useState('all'); 
   const [sortOrder, setSortOrder] = useState('asc'); 
   const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPodcasts = async () => {
        try {
            const response = await fetch('https://podcast-api.netlify.app');
            if(!response.ok){
                throw new Error('Failed to fetch podcasts');
            }
            const data = await response.json();
            setPodcasts(data);
        } catch (error) {
            setError(error.message);
            
        }
    };

    fetchPodcasts();
}, []);

useEffect(() => { 
  let filtered = podcasts; 
  if (searchTerm) { 
    filtered = filtered.filter(podcast => 
      podcast.title.toLowerCase().includes(searchTerm.toLowerCase())
     ); 
    } if (genre !== 'all') { 
      filtered = filtered.filter(podcast => 
        podcast.genre === genre); 
      } if (sortOrder === 'asc') { 
        filtered.sort((a, b) => a.title.localeCompare(b.title));
       } else { filtered.sort((a, b) => 
        b.title.localeCompare(a.title)); 
      } 
      setFilteredPodcasts(filtered); 
    }, [searchTerm, genre, sortOrder, podcasts]); 

if (error){
    return <div>Error: {error}</div>
}

  return (
    <div >
<nav> 
  <input type="text" 
  placeholder="Search podcasts..." 
  value={searchTerm} 
  onChange={e => setSearchTerm(e.target.value)} /> 
  
  <select 
  value={genre} 
  onChange={e => setGenre(e.target.value)}> 
  <option value="all">All Genres</option> 
  <option value="comedy">Comedy</option> 
  <option value="education">Education</option> 
  <option value="technology">Technology</option> 
  {/* Add more genres as needed */} 
  </select> 
  
  <select 
  value={sortOrder} 
  onChange={e => setSortOrder(e.target.value)}> 
  <option value="asc">A-Z</option> 
  <option value="desc">Z-A</option> 
  </select> 
  </nav>

        <div>
            <h1>Podcast Shows</h1>
            <div className="w-full  px-4 lg:px-12 py-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-8">
                {filteredPodcasts.map(show => (
                    <PodcastCard key={show.id} items={show}/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default AllPodcasts