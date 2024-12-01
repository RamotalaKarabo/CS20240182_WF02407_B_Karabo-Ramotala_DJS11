import React from 'react';
import { Link, useParams } from 'react-router-dom';

const seasons = {
    1: [{ id: 1, title: 'Season 1' }, { id: 2, title: 'Season 2' }],
    2: [{ id: 1, title: 'Season 1' }, { id: 2, title: 'Season 2' }],
    // Add more seasons for each podcast show here
};

const SeasonList = () => {
    const { showId } = useParams();
    
    return (
        <div>
            <h1>Seasons</h1>
            <div>
                {seasons[showId]?.map(season => (
                    <div key={season.id} className="card">
                        <h2>{season.title}</h2>
                        <Link to={`/show/${showId}/season/${season.id}`}>View Episodes</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SeasonList;
