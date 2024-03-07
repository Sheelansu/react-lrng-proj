import { useState } from 'react'
import './App.css'
import Cards from './Cards'

function App() {
  const [count, setCount] = useState(0)

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
    <>
      <Cards someObj = {emp1} />
      <Cards someObj = {emp2} />
    </>
  )
}

export default App
