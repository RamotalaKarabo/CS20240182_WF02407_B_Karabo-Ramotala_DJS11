import React from 'react'
import CategoryCard from '../components/Categories_Components/CategoryCard'

const Categories = () => {

  const categories = [
    {
      categoryID: 1,
      name:"Personal Growth",
      color:"bg-emerald-300",
      to:"/category/1",
    },
    {
      categoryID: 2,
      name:"Investigative Journalism",
      color:"bg-sky-300",
      to:"/category/2",
    },
    {
      categoryID: 3,
      name:"History",
      color:"bg-yellow-300",
      to:"/category/3",
    },
    {
      categoryID: 4,
      name:"Comedy",
      color:"bg-gray-300",
      to:"/category/4",
    },
    {
      categoryID: 5,
      name:"Entertainment",
      color:"bg-purple-300",
      to:"/category/5",
    },
    {
      categoryID:6,
      name:"Business",
      color:"bg-amber-300",
      to:"/category/6",
    },
    {
      categoryID: 7,
      name:"Fiction",
      color:"bg-orange-300",
      to:"/category/7",
    },
    {
      categoryID: 8,
      name:"News",
      color:"bg-violet-200",
      to:"/category/8",
    },
    {
      categoryID: 9,
      name:"Kids and Family",
      color:"bg-rose-300",
      to:"/category/9",
    },
  ]
  
  return (
    <CategoryCard categoriesList={categories} />
  )
}

export default Categories