import React from 'react'
import ShowEpisodes from '../components/Podcast_Components/ShowEpisodes'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import AudioPlayer from '../components/Audio_Component/AudioPlayer';




const Episodes = () => {
  const params = useParams();

  const [show, setShow] = useState([{}]);
  const [error, setError] = useState(null);

  useEffect(() => {
      const fetchEpisodes = async () => {
          try {
              const response = await fetch(`https://podcast-api.netlify.app/id/${params.showId}`);

              if (!response.ok) {
                  throw new Error('Failed to fetch episodes');
              }
              const data = await response.json();
              setShow(data);

          } catch (err) {
              setError(err.message);
          }
      };

      fetchEpisodes();
  }, []);

  if (error) {
      return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Episodes</h1>
    </div>
  )
}

export default Episodes