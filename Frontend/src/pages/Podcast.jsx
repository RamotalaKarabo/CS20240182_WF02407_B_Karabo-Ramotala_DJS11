import React from 'react'
import Show from '../components/Podcast/Show'
import { useParams } from 'react-router-dom'

const Podcast = () => {

  const params = useParams();

  return (
    <div>
      <Show showId={params.showId}/>
    </div>
  )
}

export default Podcast