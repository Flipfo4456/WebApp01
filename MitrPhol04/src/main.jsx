import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import '../src/styleCss/Nav.css'
// import '../src/styleCss/MapCss.css'
// import '../src/styleCss/Descript.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
