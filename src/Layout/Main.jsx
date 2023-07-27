import React from 'react';
import Home from '../Pages/Home/Home/Home';
import NavBar from '../Pages/Shared/NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import './Main.css'
const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className='p-4'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;