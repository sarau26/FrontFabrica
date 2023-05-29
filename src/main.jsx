import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';

import './index.css';

import { ProgramacionPeriodoAcademcico } from './ProgramacionPeriodoAcademico';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProgramacionPeriodoAcademcico/>
    </BrowserRouter>
  </React.StrictMode>,
)
