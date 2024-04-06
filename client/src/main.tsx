import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "./assets/index.css"
import { DateProvider } from './hooks/DateContextHook.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DateProvider>
      <App />
    </DateProvider>
  </React.StrictMode>,
)
