import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCart from '../CourseCart/CourseCart';


const Courses = () => {
    const datas = useLoaderData() ;

    return (
        <div className='grid grid-cols-3 gap-5'>
            {datas.map((data) => (
        <CourseCart key={data.id} data={data}></CourseCart>
      ))}
        </div>
    );
};

export default Courses;