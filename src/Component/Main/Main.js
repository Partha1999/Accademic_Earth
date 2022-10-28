import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import LeftSide from '../LeftSide/LeftSide';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='flex '>
                <div className='w-[25%]'><LeftSide></LeftSide></div>
                <div className='w-[75%]'><Outlet></Outlet></div>
            </div>
        </div>
    );
};

export default Main;