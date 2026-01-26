import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Override console methods to suppress logs
const noop = () => { };
console.log = noop;
console.error = noop;
console.warn = noop;
console.info = noop;
console.debug = noop;
import './styles/index.css'

// Forzar modo claro antes de renderizar
document.documentElement.classList.remove('dark')
localStorage.removeItem('darkMode')
document.body.style.backgroundColor = '#ffffff'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

