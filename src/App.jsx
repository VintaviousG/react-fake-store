
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import { Routes, Route, Link } from 'react-router-dom'

function App() {


  return (
    <>
      <nav>
        
        <Link to="/">Home</Link>| {' '}
        <Link to="/about">About</Link>
      </nav>
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<h1>404 Not Found</h1>} />
    </Routes>

    </>
  )
}

export default App
