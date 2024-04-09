import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "./assets/index.css"
import { DateProvider } from './hooks/DateContextHook.tsx'
import { LeagueProvider } from "./hooks/LeaguesContextHook";
import { GamesProvider } from './hooks/GamesContextHook.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GamesProvider>
      <LeagueProvider>
        <DateProvider>
          <App />
        </DateProvider>
      </LeagueProvider>
    </GamesProvider>
  </React.StrictMode >,
)
