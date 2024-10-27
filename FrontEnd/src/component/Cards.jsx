import React from 'react'

function Cards({ item }) {
  return (
    <div className="flex justify-center mt-8 my-5">
      <div className="card card-compact bg-base-100 w-96 shadow-xl hover:scale-105 duration-200">
        <figure>
          <img
            src={item.image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary ml-2">{item.category}</div>
          </h2>
          <p>{item.title}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-secondary">${item.price}</div>
            <div className="btn btn-primary hover:bg-pink-700 hover:text-white duration-200">
              Buy Now
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards
