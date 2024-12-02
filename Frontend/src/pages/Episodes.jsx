import React from 'react'
import ShowEpisodes from '../components/Podcast/ShowEpisodes'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import AudioPlayer from '../components/AudioPlayer';

const Episodes = () => {

  const params = useParams();
  const {showId,seasonId} = params;

  const [podcast, setPodcast] = useState([]);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchEpisodes = async () => {
        try {
            const response = await fetch(`https://podcast-api.netlify.app/id/${showId}`);

            if (!response.ok) {
                throw new Error('Failed to fetch episodes');
            }
            const data = await response.json();
            setPodcast(data);

        } catch (err) {
            setError(err.message);
        }
    };

    fetchEpisodes();
}, [showId]);

if (error) {
    return <div>Error: {error}</div>;
}

console.log(podcast.seasons[seasonId].episodes)

  return (
    <div>
                {/* {podcast.seasons[0].episodes?.map(item=> (
                  <div key={item.episode}>
                    <p>{item.title}</p>
                    <p>{item.description}</p>
                    <AudioPlayer src={item.file} />
                  </div>
                ))} */}
    </div>
  )
}

export default Episodes