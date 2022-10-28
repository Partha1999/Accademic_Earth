
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../Share/useAuth";


const LeftSide = () => {
    
const { user } = useAuth();

const [SingleCourse, setSingleCourse] = useState([]);
console.log(SingleCourse);

useEffect(() => {
  fetch("http://localhost:5000/courses")
    .then((res) => res.json())
    .then((data) => {
      setSingleCourse(data);
    });
}, []);
return (
        <div>
        {user.photoURL && (
          <>
            {SingleCourse.map((c) => (
              <p className="m-4 text-black font-bold bg-yellow-200 rounded-lg p-3">
                <Link to={`/details/${c.id}`}>{c.title}</Link>
              </p>
            ))}
          </>
        )}
      </div>
    );
};

export default LeftSide;