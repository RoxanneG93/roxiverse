import React, { useContext, useState, useEffect } from 'react'
import Link from 'next/link'
import { getCategories } from '../services'


function Header() {
    const [categories, setCategories] = useState([])

    useEffect(()=> {
        getCategories().then((newCategories) => setCategories(newCategories))
    }, [])

    return (
        <div className="container mx-auto px-10 mb-8">
            <div>
                {/* on medium devices set this float left */}
                <div>
                    <Link href="/">
                    <span className="text-white">
                        Roxiverse
                    </span>
                    </Link>
                </div>
                {/* Categories */}
                <div>
                    {categories.map((category) => (
                        <Link key={category.slug} href={`/category/${category.slug}`}>
                            <span>
                                {category.name} 
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Header