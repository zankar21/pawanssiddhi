// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';     // ← import this
import { ParallaxProvider } from 'react-scroll-parallax';
import App from './App';
import './index.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ParallaxProvider>
      <App />
    </ParallaxProvider>
  </BrowserRouter>
);
