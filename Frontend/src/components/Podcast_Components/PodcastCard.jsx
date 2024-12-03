import React from 'react'
import { Link } from 'react-router-dom'

const PodcastCard = ({items}) => {
  return (
    <div>
         <div key={items.id} className="grid grid-cols-2 border p-4 rounded flex flex-col shadow-xl hover:shadow-2xl transition-all duration-300">

            <div>
            <h2 className="mt-2 text-xl font-bold">{items.title}</h2>
                <img src={items.image} className="rounded size-[42vh] object-cover"/>

            </div>

            <div className="flex flex-col justify-end align-end flex-end">

             <p className="mt-2 leading text-slate-500">{items.description}</p>
             <Link to={`show/${items.id}`}className="mt-2 px-4 py-2 bg-purple-100 text-purple-700 border-purple-700 rounded-full flex flex-col flex-end items-center justify-center hover:bg-purple-500 hover:text-white duration-300">
             View Show</Link>
            </div>
          </div>

    </div>
  )
}

export default PodcastCard