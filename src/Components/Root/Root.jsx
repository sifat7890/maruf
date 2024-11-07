import React from 'react';
import Navbar from '../NavBar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Root = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;