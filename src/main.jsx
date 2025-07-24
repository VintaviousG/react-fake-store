import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { CssBaseline } from '@mui/material'
//CssBaseline is a component that helps to kickstart an elegant, consistent, and simple baseline to build upon.
createRoot(document.getElementById('root')).render(
  <StrictMode>

    <BrowserRouter>
      <CssBaseline/>
    <App/>
    </BrowserRouter>
  </StrictMode>,
)
