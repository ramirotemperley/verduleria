import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ArticulosProvider } from './context/ArticulosContext';
import { FormasPagoProvider } from './context/FormasPagoContext';
import { TicketsProvider } from './context/TicketsContext';
import Menu from './components/Menu';
import Ventas from './components/Ventas';
import GestionArticulos from './components/GestionArticulos';
import GestionFormasPago from './components/GestionFormasPago';
import Tickets from './components/Tickets';
import './App.css';

function App() {
  return (
    <ArticulosProvider>
      <FormasPagoProvider>
        <TicketsProvider>
          <Router>
            <Menu />
            <Routes>
              <Route path="/" element={<Ventas />} />
              <Route path="/articulos" element={<GestionArticulos />} />
              <Route path="/formas-pago" element={<GestionFormasPago />} />
              <Route path="/tickets" element={<Tickets />} />
            </Routes>
          </Router>
        </TicketsProvider>
      </FormasPagoProvider>
    </ArticulosProvider>
  );
}

export default App;
