import React from 'react';
import { useRouteError } from 'react-router-dom';
import img1 from './../../Component/Images/PngItem_2550411.png'

const Error = () => {
    const error = useRouteError();
    return (
        <div>
            <div>
                <img className='mx-auto' src={img1} alt="" />
            </div>
        </div>
    );
};

export default Error;