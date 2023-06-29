import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import BoxesContextProvider from './ BoxesContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BoxesContextProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BoxesContextProvider>,
)
