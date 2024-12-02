import React from 'react'
import PodcastCard from '../components/Podcast_Components/PodcastCard'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'




const Category = () => {

  const params = useParams();

  const [genre, setGenre] = useState([]);
  const [podcast, setPodcast] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPodcasts = async () => {
        try {
            const response = await fetch(`https://podcast-api.netlify.app/genre/${params.genre}`);
            
            if(!response.ok){
                throw new Error('Failed to fetch podcasts');
            }
            const data = await response.json();
            setGenre(data);
        } catch (error) {
            setError(error.message);
            
        }
    };

    fetchPodcasts();
}, []);



if (error){
  return <div>Error: {error}</div>
}

function returnPodcasts(x){

  const fetchPodcasts = async () => {
    try {
        const response = await fetch(`https://podcast-api.netlify.app/id/${x}`);
        
        if(!response.ok){
            throw new Error('Failed to fetch podcasts');
        }
        const data = await response.json();
        setPodcast(data);
    } catch (error) {
        setError(error.message);
        
    }
};

fetchPodcasts();

return podcast;
}

  return (
    <div>
      <div>
        {genre.shows?.map(item => (
          <div key={item}>
          </div>
          
        ))}
      </div>
    </div>
  )
}

export default Category