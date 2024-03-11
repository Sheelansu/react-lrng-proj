import { useState, useCallback } from 'react'
import './App.css'
import Cards from './Cards'

function App() {
  const [color, setColor] = useState("lavender")
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [symAllowed, setSymAllowed] = useState(false)
  const [password, setPassword] = useState()

  const passwordGenerator = useCallback(()=>{
    let pwd = ""
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuioplkjhgfdsazxcvbnm"
    if(numAllowed) str+="1234567890"
    if(symAllowed) str+="!@#$_*&%"

    for (let i = 0; i < length; i++) {
      const inx = Math.floor(Math.random * str.length + 1)
      pwd += str.charAt(inx)
      
    }
    setPassword(pwd)
  }, [length, numAllowed, symAllowed, setPassword])

  const emp1 = {
    uName : 'Sher',
    uDesc : "Hi I'm Sher. I'm a full-stack developer with experties in Node, React, Flask and DotNet",
    uImg : "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/acc0d38e-f905-44b2-939e-2e13418480f8/dg0i74e-00ae4980-a707-4e74-bcdd-b26277164589.png/v1/fill/w_1280,h_804,q_80,strp/a_developer_in_the_sin_city__pt_1_by_armedian_dg0i74e-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODA0IiwicGF0aCI6IlwvZlwvYWNjMGQzOGUtZjkwNS00NGIyLTkzOWUtMmUxMzQxODQ4MGY4XC9kZzBpNzRlLTAwYWU0OTgwLWE3MDctNGU3NC1iY2RkLWIyNjI3NzE2NDU4OS5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.bhjGa26fohVIC8tORk8Y3aIhNoo8Voxio1SXsuWCMJY"
  }
  const emp2 = {
    uName : 'Mann',
    uDesc : "Hi I'm Mann. I'm a data scientist with experties in Python, tensorflow, Flask and scikit-learn",
    uImg : "https://www.simplilearn.com/ice9/free_resources_article_thumb/What-Skills-Do-I-Need-to-Become-a-Data-Scientist.jpg"
  }
  return (
      <div style={{backgroundColor : color}}>
        <div className=' w-full max-w-md shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
          <h1 className=' text-white text-center my-3'>PASSWORD GENERATOR</h1>
          <div className='flex shadow rounded-lg overflow-hidden mb-4'>
            <input type="text" value={password} className=" outline-none w-full py-1 px-3" placeholder='PASSWORD' readOnly/>
            <button className=' outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>COPY</button>
          </div>
          <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
              <input type="range" min={6} max={40} value={length} className=' cursor-pointer' 
              onChange={(e)=>{setLength(e.target.value)}}/>
              <label >Length: {length}</label>
            </div>
          </div>
        </div>
        <div className='w-full h-full duration-200 flex justify-center' style={{backgroundColor : color}}>
        
        <div>
        <Cards someObj = {emp1} />
        <Cards someObj = {emp2} />
        <Cards />
        </div>
        <div className='fixed bottom-3 flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button onClick={()=>{setColor('violet')}}
           className=' outline-none px-4 py-1 rounded-full text-white shadow-lg'
           style={{backgroundColor : 'violet'}}
          >VIOLET</button>

          <button onClick={()=>{setColor('indigo')}}
          className=' outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor : 'indigo'}}
          >INDIGO</button>

          <button onClick={()=>{setColor('blue')}}
           className=' outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor : 'blue'}}
          >BLUE</button>

          <button onClick={()=>{setColor('green')}}
           className=' outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor : 'green'}}
          >GREEN</button>

          <button onClick={()=>{setColor('yellow')}}
           className=' outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor : 'yellow'}}
          >YELLOW</button>

          <button onClick={()=>{setColor('orange')}}
           className=' outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor : 'orange'}}
          >ORANGE</button>

          <button onClick={()=>{setColor('red')}}
           className=' outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor : 'red'}}
          >RED</button>
        </div>
      </div>
      </div>
  )
}

export default App
