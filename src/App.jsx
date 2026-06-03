import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Obrigado from './Obrigado';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/obrigado" element={<Obrigado />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
