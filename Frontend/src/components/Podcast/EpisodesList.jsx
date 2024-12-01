import React from 'react';
import { useParams } from 'react-router-dom';

const episodes = {
    1: {
        1: [{ id: 1, title: 'Episode 1' }, { id: 2, title: 'Episode 2' }],
        2: [{ id: 1, title: 'Episode 1' }, { id: 2, title: 'Episode 2' }],
    },
    2: {
        1: [{ id: 1, title: 'Episode 1' }, { id: 2, title: 'Episode 2' }],
        2: [{ id: 1, title: 'Episode 1' }, { id: 2, title: 'Episode 2' }],
    },
    // Add more episodes for each season here
};

const EpisodeList = () => {
    const { showId, seasonId } = useParams();
    return (
        <div>
            <h1>Episodes</h1>
            <div>
                {episodes[showId][seasonId]?.map(episode => (
                    <div key={episode.id} className="card">
                        <h2>{episode.title}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EpisodeList;
