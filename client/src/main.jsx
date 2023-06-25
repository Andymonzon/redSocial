import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { PublicationContextProvider } from './context/PublicationContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <PublicationContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PublicationContextProvider>
    </AuthProvider>
  </React.StrictMode>,
)