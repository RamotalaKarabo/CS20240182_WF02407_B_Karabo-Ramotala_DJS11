import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";


// const podcasts = [
//     { id: 1, title: 'Podcast Show 1' },
//     { id: 2, title: 'Podcast Show 2' },
//     // Add more podcasts here
// ];

const AllShows = () => {

const [podcasts, setPodcasts] = useState([]);
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

if (error){
    return <div>Error: {error}</div>
}

    return (
        <div>
            <h1>Podcast Shows</h1>
            <div>
                {podcasts.map(podcast => (
                    <div key={podcast.id} className="card">
                        <h2>{podcast.title}</h2>
                        <div>
                            <img src={podcast.image}/>
                            <p>{podcast.description}</p>
                        </div>
                        
                        <Link to={`show/${podcast.id}`}>View Show</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllShows;
