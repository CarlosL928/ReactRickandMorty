import logo from './logo.svg';
import './App.css';
//import MultipleHooks from './multipleHooks/MultipleHooks';
import ListaPersonajes from './multipleHooks/ListaPersonajes';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom'
import MultipleHooks from './multipleHooks/MultipleHooks';


function App() {
  return (
    <div className="App">
   <Router>
    <Routes>
      <Route path="/" element={<ListaPersonajes />} />
      <Route path="/personaje/:personajeId" element={<MultipleHooks />} />

    </Routes>
    </Router>
    </div>
  );
}

export default App;
