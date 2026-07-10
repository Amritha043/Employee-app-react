import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddEmployee from './components/AddEmployee'
import ViewEmploye from './components/ViewEmploye'
import NavigationBar from './components/NavigationBar'
import DeleteEmployee from './components/DeleteEmployee'
import SearchEmployee from './components/SearchEmployee'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <BrowserRouter>
  <NavigationBar />
  <Routes>
    <Route path="/" element={<AddEmployee />} />
    <Route path="/view" element={<ViewEmploye />} />
    <Route path="/delete" element={<DeleteEmployee />} />
    <Route path="/search" element={<SearchEmployee />} />
  </Routes>
</BrowserRouter>
      
    
   </>
  )
}

export default App
