import React from "react"
import { GameType } from "../types/GameType";

const H2HGamesSingleTeamComp: React.FC<{
    selectedGame: GameType,
    team1Wins: number,
    team2Wins: number,
    team: "home" | "away"
}> = ({ selectedGame, team1Wins, team2Wins, team }) => {

    const teamName = team === "away" ? selectedGame.teams.away
        : selectedGame.teams.home
    return (
        <div className={`flex items-center gap-2 
        ${team === "home" ? "flex-row" : "flex-row-reverse"}`}>
            <img src={teamName.logo}
                className="aspect-square rounded-full w-10" />
            <div className={`flex flex-col ${team === "home" ? "items-start"
                : "items-end pr-2"}`}>
                <span className={`font-bold ${team === "home" ?
                    team1Wins > team2Wins ?
                        "text-primaryPurple" : "text-primaryGreen" :

                    team === "away" ?
                        team2Wins > team1Wins ? "text-primaryPurple"
                            : "text-primaryGreen"

                        : ""
                    }`}>
                    {team === "away" ? team2Wins : team1Wins}
                </span>
                <span>
                    {teamName.name.length > 8 ?
                        `${teamName.name.slice(0, 8)}...` :
                        teamName.name}
                </span>
            </div>
        </div>
    )
};

export default H2HGamesSingleTeamComp;
