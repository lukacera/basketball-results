import React, { LegacyRef } from "react"
import { GameType } from "../../../types/GameType";
import { checkWinner } from "../../../utils/checkWinner";
import { getScoreClassName } from "../../../utils/getScoreClassName";
const SingleGameTeam: React.FC<{
    loaded: boolean,
    game: GameType,
    imgRef: LegacyRef<HTMLImageElement> | undefined,
    team: "away" | "home"
}> = ({ loaded, game, imgRef, team }) => {

    // Check if it is home or away team
    const teamNameTeams = team === "home" ? game.teams.home : game.teams.away
    const teamNameScores = team === "home" ? game.scores.home : game.scores.away
    return (
        <div className="grid grid-cols-[60%_30%_10%]">
            <div className="flex items-center gap-3">
                <img
                    src={loaded ? teamNameTeams.logo : ""} // Lazy laoding
                    className="aspect-square w-5"
                    ref={imgRef}
                />
                <p className={checkWinner(teamNameScores.total,
                    game.scores.away.total
                ) === "home" ? "font-bold" : "text-teamLostGray"
                }>
                    {teamNameTeams.name}
                </p>
            </div>

            {/* Score by quaters */}
            <div className="grid grid-cols-5 text-[0.8rem] items-center">
                <span className={getScoreClassName(game.status.short,
                    game.scores.home.quarter_1,
                    game.scores.away.quarter_1,
                    team, "Q1"
                )}>
                    {teamNameScores.quarter_1}
                </span>
                <span className={getScoreClassName(game.status.short,
                    game.scores.home.quarter_2,
                    game.scores.away.quarter_2,
                    team, "Q2"
                )}>
                    {teamNameScores.quarter_2}
                </span>
                <span className={getScoreClassName(game.status.short,
                    game.scores.home.quarter_3,
                    game.scores.away.quarter_3,
                    team, "Q3"
                )}>
                    {teamNameScores.quarter_3}
                </span>
                <span className={getScoreClassName(game.status.short,
                    game.scores.home.quarter_4,
                    game.scores.away.quarter_4,
                    team, "Q4"
                )}>
                    {teamNameScores.quarter_4}
                </span>
                <span className={getScoreClassName(game.status.short,
                    game.scores.home.over_time,
                    game.scores.away.over_time,
                    team, "OT"
                )}>
                    {teamNameScores.over_time}
                </span>
            </div>

            <span className={getScoreClassName(game.status.short,
                game.scores.home.total,
                game.scores.away.total,
                team, ""
            )}>
                {teamNameScores.total}
            </span>

        </div>

    )
};

export default SingleGameTeam;
