import React from 'react';
import { Link } from 'react-router-dom';

const Categories = ({ categories }) => {
    return (
        <div  className='flex flex-col'>
              <Link  to="/"><button>All category</button></Link> 

    
            {
                categories.map(category => (<Link key={category.category} to={`/category/${category.category}`}><button>{category.category}</button></Link>))

            }
        </div>
    );
};

export default Categories;