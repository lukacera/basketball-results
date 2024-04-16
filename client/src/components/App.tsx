import CalendarDiv from "./CalendarDiv";
import GamesContainer from "./mainContainerGamesComponents/GamesContainer";
import AllCountriesSidebar from "./countriesSidebarComponents/AllCountriesSidebar";

import SelectedGame from "./selectedGameComponents/SelectedGame";
import { useState } from "react";
import { GameType } from "../types/GameType";
import { StandingsType } from "../types/StandingsType";
import Standings from "./standingsComponents/Standings";

function App() {

  const [selectedGame, setSelectedGame] = useState<GameType | null>(null)

  const [standings, setStandings] = useState<StandingsType[] | null>(null)

  return (
    <div className='grid grid-rows-[5rem_auto] bg-mainBg
    min-h-screen h-auto text-white font-mainFont'>

      {/* Header div */}
      <div className='bg-headerBg sticky top-0 right-0 grid place-items-center'>

        <h1 className='text-3xl font-bold text-textWhite'>
          BallScore
        </h1>

      </div>
      {/* Main div */}
      <main className={`bg-mainBg w-[73%] mx-auto h-auto
      grid  gap-8 mt-10
      ${standings === null
          ? `grid-cols-[1fr,1.6fr,1.2fr]` : "grid-cols-[2.6fr,1.2fr]"}`}>

        {/* First column */}
        {standings === null && (
          <div className="flex flex-col gap-5">
            <CalendarDiv />
            <AllCountriesSidebar setStandings={setStandings} />
          </div>
        )}
        {standings !== null && (
          <Standings
            standings={standings}
            setStandings={setStandings} />
        )}

        {/* Second column */}
        {standings === null && (
          <GamesContainer
            setStandings={setStandings}
            setSelectedGame={setSelectedGame} />
        )}

        {/* Third column */}
        {selectedGame && (
          < SelectedGame
            setSelectedGame={setSelectedGame}
            selectedGame={selectedGame} />
        )}


      </main>

    </div>
  )
}

export default App
