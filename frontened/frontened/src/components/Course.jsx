import React from 'react'
import list from "../../public/list.json"
import Cards from './cards'
import{ Link } from "react-router-dom"
function Course() {
  return (
    <div className=' max-w-screen-2xl container x-auto md:px-20 px-4'>
      <div className='mt-28 items-center justify-center text-center'>
        <h1 className='text-2xl font-semibold md:text-4xl'>We are delighted to have you <span className='text-green-500'>here :)</span></h1>
        <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In ratione dignissimos vel cupiditate molestias, sapiente earum? Deserunt, quam! Nisi nulla aut pariatur 
          molestias beatae ipsum reprehenderit temporibus laudantium? Tempore, deleniti dicta. Dolores modi doloremque in. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima suscipit aliquid hic officiis sed recusandae ea officia laborum praesentium nobis, ipsa numquam facilis inventore impedit corrupti voluptatum repellat omnis quo?</p>
          <Link to="/">
          <button className="mt-6 btn btn-secondary w-24 rounded-full border-black-1px hover:bg-green-500">Back</button>
      
          </Link></div>
      <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
{
  list.map((item)=>
  (
  <Cards key={item.id} item={item}/>
  ))
}
      </div>
    </div>
  )
}

export default Course