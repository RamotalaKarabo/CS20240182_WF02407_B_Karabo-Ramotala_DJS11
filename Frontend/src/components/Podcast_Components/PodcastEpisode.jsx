import React from 'react'
import AudioPlayer from '../AudioPlayer'


const PodcastEpisode = ({items}) => {
  
  return (
    <div>
         <div key={items.id} className="border h-full p-4 rounded flex flex-col shadow-xl hover:shadow-2xl transition-all duration-300">

            <div className="flex flex-col justify-end align-end flex-end">
             <h2 className="mt-2 text-xl font-bold">{items.title}</h2>
             <p className="mt-2 leading text-slate-500">{items.description}</p>
             <div className="mt-2 px-4 py-2 bg-purple-100 text-purple-700 border-purple-700 rounded-full flex flex-col flex-end items-center justify-center hover:bg-purple-500 hover:text-white duration-300">
             <AudioPlayer src={items.file}/>
             </div>
            </div>
          </div>

    </div>
  )
}

export default PodcastEpisode