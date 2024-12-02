import React from 'react'
import PodcastCard from '../components/Podcast_Components/PodcastCard'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import CategoryCard from '../components/Categories_Components/CategoryCard'





const Category = () => {

  const params = useParams();

  const [genre, setGenre] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPodcasts = async () => {
        try {
            const response = await fetch(`https://podcast-api.netlify.app/genre/${params.genre}`);
            
            if(!response.ok){
                throw new Error('Failed to fetch podcasts');
            }
            const data = await response.json();
            setGenre(data)
        } catch (error) {
            setError(error.message);
            
        }
    };

    fetchPodcasts();
}, []);


if (error){
  return <div>Error: {error}</div>
}

console.log(genre);


  return (
    <div className="flex align-center justify-content bg-purple-300">
      <div className="rounded-xl ${items.color} px-8 p-4 shadow-lg relative text-center align-center ">
        <header className="mb-4 font-bold text-purple-900">
          {genre.title}
        </header>
        <p className="text-gray-600">{genre.description}</p>
        
      </div>
      <div></div>
    </div>
  )
}

export default Category