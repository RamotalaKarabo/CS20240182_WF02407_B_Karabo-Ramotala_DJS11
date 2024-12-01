import React from 'react'
import { Link } from 'react-router-dom'

const Categories = () => {

  const categoriesList = [
    {
      name:"Personal Growth",
      color:"bg-emerald-300",
      to:"/categories/personal_growth",
    },
    {
      name:"Business",
      color:"bg-sky-300",
      to:"/categories/business",
    },
    {
      name:"History",
      color:"bg-yellow-300",
      to:"/categories/history",
    },
    {
      name:"Entertainment",
      color:"bg-gray-300",
      to:"/categories/entertainment",
    },
    {
      name:"Comedy",
      color:"bg-purple-300",
      to:"/categories/comedy",
    },
    {
      name:"Kids and Family",
      color:"bg-amber-300",
      to:"/categories/kids_and_family",
    },
    {
      name:"News",
      color:"bg-orange-300",
      to:"/categories/news",
    },
    {
      name:"Investigative Journalism",
      color:"bg-violet-200",
      to:"/categories/personal_growth",
    },
    {
      name:"Fiction",
      color:"bg-rose-300",
      to:"/categories/fiction",
    },
  ]



  return (

    <div 
    className="h-screen lg:h-[78vh] mt-4"
    >
      <div 
      className="px-4 lg:px-12 py-4 gap-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >

        {categoriesList.map((items, i) => (
                <Link 
                key={0}
                to={items.to}
                className={`rounded-xl ${items.color} px-8 p-4 text-xl font-semibold hover:scale-105 shadow-xl relative `}
                >
                  <div>{items.name}</div>                  
             </Link>
        ))} 
        
      </div>
    </div>

  )
}

export default Categories