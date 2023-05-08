
import './App.css';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import Blog from './pages/Blog';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage/>}/> 
        <Route path='/blog' element={<Blog />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
