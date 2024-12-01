import React from 'react'
import Show from '../components/Podcast/Show'
import { useParams } from 'react-router-dom'

const Podcast = () => {

  const params = useParams();
  console.log(params);

  return (
    <div>
      {`Show:  ${params.showId}`}
      <Show showId={params.showId}/>
    </div>
  )
}

export default Podcast