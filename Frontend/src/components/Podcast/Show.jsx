import React, { useState, useEffect } from 'react';
import PodcastSeasonsCard from './PodcastSeasonsCard';

const Show = ({showId}) => {

    const showID = {showId};

    const [show, setShow] = useState([{}]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchEpisodes = async () => {
            try {
                const response = await fetch(`https://podcast-api.netlify.app/id/${showId}`);

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
    }, [showId]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    console.log(show);


    return (
        <div>
            <div>
                
                {show.seasons?.map(podcast => (
                    <PodcastSeasonsCard key={podcast.season} items={podcast} seasonId={podcast.season} id={showID.showId}/>
                ))}
            </div>
            </div>
    );
};

export default Show;
