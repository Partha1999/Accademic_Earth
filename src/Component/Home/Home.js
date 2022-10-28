import React from 'react';
import { Link } from "react-router-dom";
import img from './../../Component/Images/img.gif'

const Home = () => {
    return (
        <nav>
      <div className="pt-14 flex">
        <div  className="flex justify-center items-center flex-col">
      <img src={img} alt="" />
        <h1 className="font-extrabold text-4xl text-center mt-10 text-cyan-500">A Learning Site Platform for The Digital World!</h1>
        <p className="text-center mt-10 mx-40 w-[60%] font-bold">Advanced learning can build includes SETTINGS and learn sections. Settings control WHAT, WHEN, FOR WHOM, and HOW the learning method  will function. The learn section allows the creation of various question types with images, GIFs, and videos</p>
      </div></div>
      {/* Footer Start */}
      <div>
        


      </div>
    </nav>
    );
};

export default Home;