import React, { Dispatch, SetStateAction, useEffect, useState } from "react"
import { RxCross2 } from "react-icons/rx";
import { GameType } from "../../types/GameType";
import { checkWinner } from "../../utils/checkWinner";
import { getH2HScore } from "../../api/getH2HScore";
import { formattedDate } from "../../utils/formatDate";
import SelectedGameSingleTeamScores from "./SelectedGameSingleTeamScores";
import { getScoreClassName } from "../../utils/getScoreClassName";
import H2HGamesSingleTeamComp from "./H2HGamesSingleTeamComp";

const SelectedGame: React.FC<{
    selectedGame: GameType | null,
    setSelectedGame: Dispatch<SetStateAction<GameType | null>>
}> = ({ selectedGame, setSelectedGame }) => {

    const [team1Wins, setTeam1Wins] = useState<number>(0);
    const [team2Wins, setTeam2Wins] = useState<number>(0);

    useEffect(() => {
        if (selectedGame) {

            getH2HScore(selectedGame.teams.home.id, selectedGame.teams.away.id)
                .then((h2hData) => {
                    // Filter home and away wins
                    const team1Wins = h2hData.filter((game: GameType) =>
                        checkWinner(game.scores.home.total, game.scores.away.total) === "home").length;
                    const team2Wins = h2hData.filter((game: GameType) =>
                        checkWinner(game.scores.home.total, game.scores.away.total) === "away").length;

                    setTeam1Wins(team1Wins);
                    setTeam2Wins(team2Wins);
                })
                .catch((error) => {
                    console.error("Error fetching H2H games:", error);
                });
        }
    }, [selectedGame]); // Dependency array ensures useEffect runs only when selectedGame changes


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

                            {/* If game did not start */}
                            <div className="flex flex-col items-center justify-center h-full">
                                {selectedGame.status.short === "NS" && (
                                    <div className="grid place-items-center">
                                        <span className="font-bold">
                                            {formattedDate(selectedGame.date)}
                                        </span>
                                        <span className="text-teamLostGray">
                                            {selectedGame.time}
                                        </span>
                                    </div>
                                )}
                                {/* If game has started or it's finished */}
                                {selectedGame.status.short !== "NS" && (
                                    <div className="grid place-items-center">
                                        <div className="flex gap-2 text-[1.5rem]">
                                            <span className={
                                                getScoreClassName(selectedGame.status.short,
                                                    selectedGame.scores.home.total, selectedGame.scores.away.total,
                                                    "home", ""
                                                )
                                            }>
                                                {selectedGame.scores.home.total}
                                            </span>
                                            <span
                                                className={
                                                    ["Q1", "Q2", "Q3", "Q4", "OT", "BT", "HT"]
                                                        .includes(selectedGame.status.short) ? "text-red-600" :
                                                        ""
                                                }>
                                                -
                                            </span>
                                            <span className={
                                                getScoreClassName(selectedGame.status.short,
                                                    selectedGame.scores.home.total, selectedGame.scores.away.total,
                                                    "away", ""
                                                )
                                            }>
                                                {selectedGame.scores.away.total}
                                            </span>
                                        </div>
                                        {["Q1", "Q2", "Q3", "Q4", "OT", "BT", "HT"]
                                            .includes(selectedGame.status.short) ? (
                                            <span className="text-red-600">
                                                {selectedGame.status.short}
                                            </span>
                                        ) : (
                                            <span>
                                                {selectedGame.status.long}
                                            </span>
                                        )}

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
                            {"NS" !== selectedGame.status.short && (

                                < div className="bg-mainBg flex flex-col rounded-lg">
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
                                    <SelectedGameSingleTeamScores
                                        selectedGame={selectedGame}
                                        team="home" />
                                    {/* Away team score by quarters */}
                                    <SelectedGameSingleTeamScores
                                        selectedGame={selectedGame}
                                        team="away" />
                                </div>
                            )}

                            {/* H2H games score */}
                            <div className="bg-mainBg grid place-items-center rounded-xl mt-10">
                                <h3 className="py-5 text-[1.2rem] font-bold">
                                    Head to head games
                                </h3>
                                <div className="flex justify-between w-full px-5 py-3">
                                    < H2HGamesSingleTeamComp
                                        selectedGame={selectedGame}
                                        team="home"
                                        team1Wins={team1Wins}
                                        team2Wins={team2Wins} />
                                    < H2HGamesSingleTeamComp
                                        selectedGame={selectedGame}
                                        team="away"
                                        team1Wins={team1Wins}
                                        team2Wins={team2Wins} />
                                </div>
                            </div>
                        </div>

                    </div>


                </>
            )
            }
        </div >

    )
};

export default SelectedGame;
