import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import { Outlet, useLoaderData } from 'react-router-dom';

const Home = () => {
    const categories = useLoaderData();
    console.log(categories);
    
    return (
        <div>
            <Banner></Banner>
            <div className='mt-96'>
               <div className='flex'>
               <div>
               <Categories categories={categories} ></Categories>
               </div>
               <div>
               <Outlet></Outlet>
               </div>
               </div>
            </div>
        </div>
    );
};

export default Home;