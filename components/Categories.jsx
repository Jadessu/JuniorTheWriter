import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { getCategories } from '../services';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="bg-dark5 shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b border-gray-800 pb-4 text-accent1">Categories</h3>
      {categories.map((category, index) => (
        <Link key={index} href={`/category/${category.slug}`} className="text-text1">
          <span className={`text-text1 cursor-pointer block ${(index === categories.length - 1) ? 'border-b-0' : 'border-b border-gray-800'} pb-3 mb-3 hover:text-accent1`}>{category.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
