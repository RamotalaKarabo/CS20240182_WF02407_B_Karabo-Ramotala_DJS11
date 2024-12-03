import React from 'react'
import PodcastCard from '../components/Podcast_Components/PodcastCard'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import fetchCategories  from '../utils/fetchCategories'
import filterPodByCategory from "../utils/filterPod"


const Category = () => {

  const params = useParams();

  const [genre, setGenre] = useState([]);
  const [error, setError] = useState(null);


  useEffect(() => {fetchCategories(params.genre, setGenre, setError)}, []);

  // useEffect(() => {window.location.reload()},[genre])

  const podcastData = filterPodByCategory(params.genre);

  if (error){
    return <div>Error: {error}</div>
  }

  return (
    <>
        <div className="mb-36 flex align-center justify-content bg-purple-300">
      <div className="rounded-xl ${items.color} px-8 p-4 shadow-lg relative text-center align-center ">
        <header className="mb-4 font-bold text-purple-900">
          {genre.title}
        </header>
        <p className="text-gray-600">{genre.description}</p>
        
      </div>
      <div></div>
    </div>

    <div key={params.genres} className="">
    {podcastData?.map((item, i) => 
    <PodcastCard key={i} items={item}/>
    )}
    </div>
    </>

  )
}

export default Category