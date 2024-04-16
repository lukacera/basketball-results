import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.tsx'
import "./assets/index.css"
import { DateProvider } from './hooks/DateContextHook.tsx'
import { LeagueProvider } from "./hooks/LeaguesContextHook";
import { GamesProvider } from './hooks/GamesContextHook.tsx'
import { Analytics } from "@vercel/analytics/react"
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DateProvider>
      <GamesProvider>
        <LeagueProvider>
          <App />
          <Analytics />
        </LeagueProvider>
      </GamesProvider>
    </DateProvider>
  </React.StrictMode>
)
