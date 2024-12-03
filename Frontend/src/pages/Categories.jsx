import React from 'react'
import CategoryCard from '../components/Categories_Components/CategoryCard'
import categories from '../utils/Categories'

const Categories = () => {
  
  return (
    <CategoryCard categoriesList={categories} />
  )
}

export default Categories