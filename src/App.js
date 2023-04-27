
import './App.css';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Blog from './pages/Blog';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage/>}/> 
        <Route path='/about' element={<About/>} />
        <Route path="/projects" element={<Projects />} />
        <Route path='/contact' element={<Contact />} /> 
        <Route path='/blog' element={<Blog />} />
      </Routes>
      <Footer />
      
    </div>
  );
}

export default App;
