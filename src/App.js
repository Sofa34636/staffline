import React from 'react';
import './App.css';
import Header from './components/Header';
import Top from './components/Top';
import Footer from './components/Footer';
import Vacancies from './page/Vacancie';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFoundBlock from './components/NotFoundBlock';

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path='/' element={<Top />} />
        <Route path='/Vacancies' element={<Vacancies />} />
        <Route path='*' element={<NotFoundBlock />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
