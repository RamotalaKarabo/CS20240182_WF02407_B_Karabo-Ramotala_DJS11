import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Show = ({showId}) => {

    const seasons = [
        {
            seasonNumber: "",
            seasonTitle: "",
            seasonImage: ""

    }];
  
    const [show, setShow] = useState([]);
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

    const data = { 
        section1: 
        [ 
            { id: 1, name: 'Alice' }, 
            { id: 2, name: 'Bob' } ], };

    return (
        <div>
            {Object.entries(data).map(([section, items]) => 
            ( 
            <div key={section}> 
            <h2>{section}</h2> 
            <ul> {items.map(item => (
                 <li key={item.id}>{item.name}</li> 
                ))} 
            </ul> 
            </div>
            ))} 
            </div>
    );
};

export default Show;
