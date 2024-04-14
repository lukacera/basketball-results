import React from "react"
import { GameType } from "../types/GameType";

const H2HGamesSingleTeamComp: React.FC<{
    selectedGame: GameType,
    team1Wins: number,
    team2Wins: number,
    team: "home" | "away"
}> = ({ selectedGame, team1Wins, team2Wins, team }) => {

    return (
        <div className="flex items-center gap-2">
            <img src={selectedGame.teams.home.logo}
                className="aspect-square rounded-full w-10" />
            <div className="flex flex-col items-start">
                <span className={`font-bold ${team === "home" ?
                    team1Wins > team2Wins ?
                        "text-primaryPurple" : "text-primaryGreen" :

                    team === "away" ?
                        team2Wins > team1Wins ? "text-primaryPurple"
                            : "text-primaryGreen"

                        : ""
                    }`}>
                    {team1Wins}
                </span>
                <span>
                    {selectedGame.teams.home.name.length > 8 ?
                        `${selectedGame.teams.home.name.slice(0, 8)}...` :
                        selectedGame.teams.home.name}
                </span>
            </div>
        </div>
    )
};

export default H2HGamesSingleTeamComp;
