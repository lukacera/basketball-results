import React from "react"
import { GameType } from "../types/GameType";

const SingleGame: React.FC<{ game: GameType }> = ({ game }) => {


    const checkWinner = (homeScore: number | null, awayScore: number | null): "home" | "away" | "tie" | null => {
        if (homeScore !== null && awayScore !== null) {
            if (homeScore > awayScore) return "home"
            else if (awayScore > homeScore) return "away"

            return "tie"
        }
        return null
    }

    return (
        <div className="grid grid-cols-[12%_88%] text-[14px] font-sofiaSans
        h-auto">
            <div className="flex flex-col justify-center text-teamLostGray">
                <span>
                    {game.time}
                </span>
                <span>
                    {game.status.long === "Game Finished" ? (
                        <p>End</p>
                    ) : null}
                </span>
            </div>

            <div className="grid grid-rows-2 gap-2 border-l-[0.1rem] border-primaryGray
            pl-2">
                {/* Home team */}
                <div className="grid grid-cols-[60%_20%_20%]">
                    <div className="flex items-center gap-3">
                        <img src={game.teams.home.logo}
                            className="aspect-square w-6" />
                        <p className={checkWinner(game.scores.home.total,
                            game.scores.away.total
                        ) === "home" ? "font-bold" : "text-teamLostGray"
                        }>
                            {game.teams.home.name}
                        </p>
                    </div>

                    {/* Score by quaters */}
                    <div className="grid grid-cols-4 text-[0.8rem] items-center">
                        <span
                            className={
                                checkWinner(game.scores.home.quarter_1,
                                    game.scores.away.quarter_1) === "home" ? "font-bold"
                                    : "text-teamLostGray"
                            }>
                            {game.scores.home.quarter_1}
                        </span>
                        <span
                            className={
                                checkWinner(game.scores.home.quarter_2,
                                    game.scores.away.quarter_2) === "home" ? "font-bold"
                                    : "text-teamLostGray"
                            }>
                            {game.scores.home.quarter_2}

                        </span>
                        <span
                            className={
                                checkWinner(game.scores.home.quarter_3,
                                    game.scores.away.quarter_3) === "home" ? "font-bold"
                                    : "text-teamLostGray"
                            }>
                            {game.scores.home.quarter_3}

                        </span>
                        <span
                            className={
                                checkWinner(game.scores.home.quarter_4,
                                    game.scores.away.quarter_4) === "home" ? "font-bold"
                                    : "text-teamLostGray"
                            }>
                            {game.scores.home.quarter_4}
                        </span>
                    </div>

                    <span
                        className={
                            checkWinner(game.scores.home.total,
                                game.scores.away.total) === "home" ? "font-bold"
                                : "text-teamLostGray"
                        }>
                        {game.scores.home.total}
                    </span>
                </div>

                {/* Away team */}
                <div className="grid grid-cols-[60%_20%_20%]">
                    <div className="flex items-center gap-3">
                        <img src={game.teams.away.logo}
                            className="aspect-square w-6" />
                        <p className={checkWinner(game.scores.home.total,
                            game.scores.away.total
                        ) === "away" ? "font-bold" : "text-teamLostGray"
                        }>
                            {game.teams.away.name}
                        </p>
                    </div>

                    {/* Score by quaters */}
                    <div className="grid grid-cols-4 text-[0.8rem] items-center">
                        <span
                            className={
                                checkWinner(game.scores.home.quarter_1,
                                    game.scores.away.quarter_1) === "away" ? "font-bold"
                                    : "text-teamLostGray"
                            }>
                            {game.scores.away.quarter_1}
                        </span>
                        <span
                            className={
                                checkWinner(game.scores.home.quarter_2,
                                    game.scores.away.quarter_2) === "away" ? "font-bold"
                                    : "text-teamLostGray"
                            }>
                            {game.scores.away.quarter_2}

                        </span>
                        <span
                            className={
                                checkWinner(game.scores.home.quarter_3,
                                    game.scores.away.quarter_3) === "away" ? "font-bold"
                                    : "text-teamLostGray"
                            }>
                            {game.scores.away.quarter_3}

                        </span>
                        <span
                            className={
                                checkWinner(game.scores.home.quarter_4,
                                    game.scores.away.quarter_4) === "away" ? "font-bold"
                                    : "text-teamLostGray"
                            }>
                            {game.scores.away.quarter_4}
                        </span>
                    </div>

                    <span
                        className={
                            checkWinner(game.scores.home.total,
                                game.scores.away.total) === "away" ? "font-bold"
                                : "text-teamLostGray"
                        }>
                        {game.scores.away.total}
                    </span>
                </div>

            </div>
        </div >
    )
};

export default SingleGame;
