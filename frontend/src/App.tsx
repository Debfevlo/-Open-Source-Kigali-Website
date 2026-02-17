import { Routes, Route } from "react-router-dom" 
import HomePage from "./pages/HomePage"
import Navbar from "./components/LandingPage/Navbar"
import About from './pages/About'
import Projects from "./pages/Projects"
import Resources from "./pages/Resources"
import Community from "./pages/Community"
import Contact from "./pages/Contact"
import Login from "./pages/Login"

const App = () => {
  return (
    <div >
      <Navbar/>
      <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/resources" element={<Resources/>}/>
      <Route path="/community" element={<Community/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  )
}

export default App