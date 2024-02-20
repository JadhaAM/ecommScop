import { useState } from 'react'
import './App.css'
import SignUp from "./Auth/SignUp";
import LoginFrom from "./Auth/LoginForm"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <SignUp/> */}
      <LoginFrom/>
    </>
  )
}

export default App
