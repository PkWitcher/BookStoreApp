import React from 'react'
import Cards from "./Cards"
import list from "../../public/list.json"
import {Link} from "react-router-dom"
function Course() {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 '>
      <div className='mt-28 items-center justify-center text-center'>
      <h1 className='text-2xl md:text-4xl'>We are Delighted To Have You{" "} <span className='text-pink-500'>Here :)</span></h1>
      <p className='mt-12'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium saepe expedita aperiam perspiciatis non facere consequuntur, quidem, beatae doloribus laborum quisquam quo neque pariatur ipsa culpa velit! Natus ullam rerum fugiat similique, aliquid optio!
      </p>
      <Link to="/">
      <button className='mt-6 bg-pink-500 text-white px-2 py-2 rounded-md hover:bg-pink-900 duration-200'>Back</button>
      </Link>
     
      </div>
      <div className='mt-12 grid grid-cols-1 md:grid-cols-3'>
           {
            list.map((item)=>(
              <Cards key={item.id} item={item}/>
            ))
           }
      </div>
    </div>
    </>
  )
}

export default Course