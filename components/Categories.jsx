import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import { getCategories } from '../services'

function Categories() {
  const [categories, setCategories] = useState([])

  useEffect(()=> {
    getCategories().then((newCategories) => setCategories(newCategories))
  }, [])

  return (
    <div className='card shadow mt-2'>
      <h3>Categories</h3>
      {categories.map((category) => (
        <Link href={`/category/${category.slug}`} key={category.slug}>
          <span>{category.name}</span>
        </Link>
      ))}
    </div>
  )
}

export default Categories