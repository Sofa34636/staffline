import React from 'react';
import './App.css';
import Header from './components/Header';
import Top from './components/Top';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFoundBlock from './components/NotFoundBlock';

import Vacancies from '../src/page/Vacancie';

function App() {
  return (
    <div className='wrapper'>
      <div className='meny'>
        <Header />

        <Routes>
          <Route path='/' element={<Top />} />
          <Route path='/Vacancie' element={<Vacancies />} />
          <Route path='*' element={<NotFoundBlock />} />
        </Routes>

        <Footer />
      </div>
    </div>
  );
}

export default App;
