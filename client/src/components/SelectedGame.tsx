import React, { Dispatch, SetStateAction } from "react"
import { RxCross2 } from "react-icons/rx";
import { GameType } from "../types/GameType";
import { checkWinner } from "../utils/checkWinner";
const SelectedGame: React.FC<{
    selectedGame: GameType | null,
    setSelectedGame: Dispatch<SetStateAction<GameType | null>>
}> = ({ selectedGame, setSelectedGame }) => {

    let team1Wins: number = 0
    let team2Wins: number = 0;

    const calculateH2HWins = () => {
        const h2hGames: GameType[] = []
        h2hGames.forEach(game => {
            if (game.scores.home.total && game.scores.away.total) {
                game.scores.home.total > game.scores.away.total ? team1Wins++ :
                    game.scores.away.total > game.scores.home.total ? team2Wins++ : null
            }
        })
    }

    calculateH2HWins()
    return (
        <div>
            {selectedGame && (
                <>
                    <div className="sticky top-[7.4rem] right-0 bg-secondaryBlueBoxes 
                    h-[50rem] grid grid-rows-[10%_10%_auto] rounded-xl">
                        <div className="flex justify-between items-center px-3">
                            <h3 className="text-primaryPurple">
                                {selectedGame.country.name}, {selectedGame.league.name}
                            </h3>
                            <RxCross2
                                cursor="pointer"
                                size={25}
                                onClick={() => setSelectedGame(null)} />
                        </div>
                        {/* Final score, date and time of game */}
                        <div className="grid grid-cols-3 px-2">
                            <div className="grid place-items-center gap-2">
                                <img src={selectedGame.teams.home.logo}
                                    className="aspect-square rounded-full w-12" />
                                <span className="text-[0.8rem] font-bold max-w-[90%] text-center">
                                    {selectedGame.teams.home.name}
                                </span>
                            </div>

                            <div className="flex flex-col items-center justify-center h-full">
                                {selectedGame.status.short === "NS" && (
                                    <div>
                                        <span className="font-bold">
                                            {selectedGame.time}
                                        </span>
                                        <span className="text-teamLostGray">
                                            {selectedGame.date}
                                        </span>
                                    </div>
                                )}
                                {selectedGame.status.short !== "NS" && (
                                    <div className="grid place-items-center">
                                        <div className="flex gap-2 text-[1.5rem]">
                                            <span className={
                                                checkWinner(selectedGame.scores.home.total,
                                                    selectedGame.scores.away.total
                                                ) === "home" ? `font-bold` : "text-teamLostGray"}>
                                                {selectedGame.scores.home.total}
                                            </span>
                                            <span>
                                                -
                                            </span>
                                            <span className={
                                                checkWinner(selectedGame.scores.home.total,
                                                    selectedGame.scores.away.total
                                                ) === "away" ? `font-bold` : "text-teamLostGray"}>
                                                {selectedGame.scores.away.total}
                                            </span>
                                        </div>
                                        <span>
                                            {selectedGame.status.long}
                                        </span>
                                    </div>
                                )}

                            </div>
                            <div className="grid place-items-center gap-2">
                                <img src={selectedGame.teams.away.logo}
                                    className="aspect-square rounded-full w-12" />
                                <span className="text-[0.8rem] font-bold max-w-[90%] text-center">
                                    {selectedGame.teams.away.name}
                                </span>
                            </div>
                        </div>

                        <div className="flex flex-col mt-10 mx-3">
                            {/* Score by quarters */}
                            <div className="bg-mainBg flex flex-col rounded-lg">
                                <div className={`grid w-full border-b-[1px] 
                        border-teamLostGray text-teamLostGray
                        ${selectedGame.status.short === "AOT"
                                        ? "grid-cols-5" : "grid-cols-4"}`}>
                                    <p className="text-center py-2">Q1</p>
                                    <p className="text-center py-2">Q2</p>
                                    <p className="text-center py-2">Q3</p>
                                    <p className="text-center py-2">Q4</p>
                                    {selectedGame.status.short === "AOT" && (
                                        <p className="text-center py-2">OT</p>
                                    )}
                                </div>
                                {/* Home team score by quarters */}
                                <div className={`grid ${selectedGame.status.short === "AOT"
                                    ? "grid-cols-5" : "grid-cols-4"}`}>
                                    <span className="text-center py-2">
                                        {selectedGame.scores.home.quarter_1}
                                    </span>
                                    <span className="text-center py-2">
                                        {selectedGame.scores.home.quarter_2}
                                    </span>
                                    <span className="text-center py-2">
                                        {selectedGame.scores.home.quarter_3}
                                    </span>
                                    <span className="text-center py-2">
                                        {selectedGame.scores.home.quarter_4}
                                    </span>
                                    {selectedGame.status.short === "AOT" && (
                                        <span className="text-center py-2">
                                            {selectedGame.scores.home.over_time}
                                        </span>
                                    )}
                                </div>
                                {/* Away team score by quarters */}
                                <div className={`grid ${selectedGame.status.short === "AOT"
                                    ? "grid-cols-5" : "grid-cols-4"}`}>
                                    <span className="text-center py-2">
                                        {selectedGame.scores.away.quarter_1}
                                    </span>
                                    <span className="text-center py-2">
                                        {selectedGame.scores.away.quarter_2}
                                    </span>
                                    <span className="text-center py-2">
                                        {selectedGame.scores.away.quarter_3}
                                    </span>
                                    <span className="text-center py-2">
                                        {selectedGame.scores.away.quarter_4}
                                    </span>
                                    {selectedGame.status.short === "AOT" && (
                                        <span className="text-center py-2">
                                            {selectedGame.scores.away.over_time}
                                        </span>
                                    )}
                                </div>
                            </div>
                            {/* H2H games score */}
                            <div className="bg-mainBg grid place-items-center rounded-xl mt-10">
                                <h3 className="py-5 text-[1.2rem] font-bold">
                                    Head to head games
                                </h3>
                                <div className="flex justify-between w-full px-5 py-3">
                                    <div className="flex items-center gap-2">
                                        <img src={selectedGame.teams.home.logo}
                                            className="aspect-square rounded-full w-10" />
                                        <div className="flex flex-col items-start">
                                            <span className={`font-bold
                                        ${team1Wins > team2Wins ? "text-primaryPurple"
                                                    : "text-primaryGreen"}`}>
                                                {team1Wins}
                                            </span>
                                            <span>
                                                {selectedGame.teams.home.name.length > 8 ?
                                                    `${selectedGame.teams.home.name.slice(0, 8)}...` :
                                                    selectedGame.teams.home.name}                                </span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="flex flex-col items-end">
                                            <span className={`font-bold
                                        ${team2Wins > team1Wins ? "text-primaryPurple"
                                                    : "text-primaryGreen"
                                                }`}>
                                                {team2Wins}
                                            </span>
                                            <span>
                                                {selectedGame.teams.away.name.length > 8 ?
                                                    `${selectedGame.teams.away.name.slice(0, 8)}...` :
                                                    selectedGame.teams.away.name}
                                            </span>
                                        </div>
                                        <img src={selectedGame.teams.away.logo}
                                            className="aspect-square rounded-full w-10" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </>
            )}
        </div>

    )
};

export default SelectedGame;