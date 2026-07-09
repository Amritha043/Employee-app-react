import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddEmployee from './components/AddEmployee'
import SearchEmployee from './components/SearchEmployee'
import DeleteEmployee from './components/DeleteEmployee'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ViewEmploye from './components/ViewEmploye'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      
    <BrowserRouter>
      <Routes>
        <Route path="/"element={<AddEmployee/>} />
        <Route path="/Search"element={<SearchEmployee/>} />
        <Route path="/Delete"element={<DeleteEmployee/>} />
        <Route path="/view"element={<ViewEmploye/>} />
        

      </Routes>


    </BrowserRouter>
   
   </>
  )
}

export default App
