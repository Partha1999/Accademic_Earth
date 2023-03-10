import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const Details = () => {
  const { id } = useParams();

  const [SingleCourse, setSingleCourse] = useState([]);
  console.log(SingleCourse);

  useEffect(() => {
    fetch(`https://academic-earth-server-phi.vercel.app/courses/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSingleCourse(data);
      });
  }, [id]);
  return (
    <div>
      <section className="w-[60%] mx-auto border-2 p-5 mt-10">
        <img
          className="mx-auto w-full h-[550px]"
          src={SingleCourse.img}
          alt=""
        />
        <div ref={ref}>
          <h1 className="text-2xl mb-3">{SingleCourse.title}</h1>
          <p className="mb-3">{SingleCourse.details}</p>
          <div>
            <p className="font-bold mb-3">Price : {SingleCourse.price}</p>
            <div className="flex justify-between">
            <Link to={`/premiumAcess/${id}`}>
              <button className="btn btn-primary">Premium</button>
            </Link>
            <Pdf targetRef={ref} filename={`${SingleCourse.title}.pdf`}>
              {({ toPdf }) => (
                <button
                  className="p-2 rounded-md bg-red-600 text-white"
                  onClick={toPdf}
                >
                  Download
                </button>
              )}
            </Pdf>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Details;
