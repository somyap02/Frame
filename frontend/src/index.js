import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Gallery from './pages/Gallery';
import Upload from './pages/UploadArtwork';
import Navbar from './pages/navbar';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './pages/Footer';

function App(){
  return (
    <BrowserRouter>
      <div>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='gallery' element={<Gallery/>} />
          <Route path='/upload' element={<Upload/>} />
          <Route path='/about' element={<About/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}
const root = createRoot(document.getElementById('root'));
root.render(<App />);
