import { useState } from 'react'
import './App.css'

function Cards({someObj = {
    uName : 'John Doe',
    uDesc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae veritatis minima maxime.",
    uImg : "https://cdn.vectorstock.com/i/preview-1x/66/14/default-avatar-photo-placeholder-profile-picture-vector-21806614.jpg"
}}) {
  const [count, setCount] = useState(0)
  console.log(someObj);

  return (
    <>
      <div className="mb-4">
        
      <div className="relative h-[400px] w-[300px] rounded-md">
  <img
    src= {someObj.uImg}
    alt="AirMax Pro"
    className="z-0 h-full w-full rounded-md object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
  <div className="absolute bottom-4 left-4 text-left">
    <h1 className="text-lg font-semibold text-white">{someObj.uName || "[No name]"}</h1>
    <p className="mt-2 text-sm text-gray-300">
        {someObj.uDesc || "[No description provided]"}
    </p>
    <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-black">
      View Profile →
    </button>
  </div>
</div>
      </div>
    </>
  )
}

export default Cards
