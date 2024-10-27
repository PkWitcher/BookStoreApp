import React, { useState, useEffect } from 'react';
import Cards from "./Cards";
import { Link } from "react-router-dom";
import axios from 'axios';

function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:40001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-28 items-center justify-center text-center'>
          <h1 className='text-2xl md:text-4xl'>
            We are Delighted To Have You{" "}
            <span className='text-pink-500'>Here :)</span>
          </h1>
          <p className='mt-12'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium
            saepe expedita aperiam perspiciatis non facere consequuntur, quidem,
            beatae doloribus laborum quisquam quo neque pariatur ipsa culpa
            velit! Natus ullam rerum fugiat similique, aliquid optio!
          </p>
          <Link to="/">
            <button className='mt-6 bg-pink-500 text-white px-2 py-2 rounded-md hover:bg-pink-900 duration-200'>
              Back
            </button>
          </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-3'>
          {book.map((item) => (
            <Cards key={item._id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
