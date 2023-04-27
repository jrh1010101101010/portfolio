
import './App.css';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage/>}/> 
        <Route path='/about' element={<About/>} />
      </Routes>
      
    </div>
  );
}

export default App;
