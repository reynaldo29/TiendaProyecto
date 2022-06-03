import logo from './logo.svg';
import './App.scss';
//rutas
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//iconos
import * as FaIcons from 'react-icons/fa';


function App() {
  return (
    <div className="container text-center py-5">
        <FaIcons.FaHome className="me-3"/>
        <h1 className='text-center'>HOLA MUNDO</h1>
    </div>
  )
 
}

export default App;
