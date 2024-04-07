import React, { useEffect, useState } from "react"
import { GameType } from "../types/GameType";

const SingleGame: React.FC<{ game: GameType }> = ({ game }) => {

    const [winner, setWinner] = useState<"home" | "away" | undefined>(undefined)

    // Set winner on initial render
    useEffect(() => {
        if (game.scores.away.total && game.scores.home.total) {
            if (game.scores.home.total > game.scores.away.total) {
                setWinner("home");
            } else if (game.scores.away.total > game.scores.home.total) {
                setWinner("away");
            } else {
                setWinner(undefined);
            }
        }
    }, [game.scores.away.total, game.scores.home.total]);

    return (
        <div className="grid grid-cols-[10%_90%] text-[0.7rem] h-auto">
            <div className="flex flex-col justify-center">
                <span>
                    {game.time}
                </span>
                <span>
                    {game.status.long === "Game Finished" ? (
                        <p>End</p>
                    ) : null}
                </span>
            </div>

            <div className="grid grid-rows-2 gap-1 border-l-[0.1rem] border-primaryGray
            pl-2">
                {/* Home team */}
                <div className="grid grid-cols-[60%_25%_15%]">
                    <div className="flex items-center gap-3">
                        <img src={game.teams.home.logo}
                            className="aspect-square w-6" />
                        <p className="text-[0.8rem]">
                            {game.teams.home.name}
                        </p>
                    </div>

                    {/* Score by quaters */}
                    <div className="grid grid-cols-4 text-[0.8rem]">
                        <span>
                            {game.scores.home.quarter_1}
                        </span>
                        <span>
                            {game.scores.home.quarter_2}

                        </span>
                        <span>
                            {game.scores.home.quarter_3}

                        </span>
                        <span>
                            {game.scores.home.quarter_4}
                        </span>
                    </div>

                    <span className={
                        winner === "away" ? "text-teamLostGray" :
                            "font-bold"
                    }>
                        {game.scores.home.total}
                    </span>
                </div>

                {/* Away team */}
                <div className="grid grid-cols-[60%_25%_15%]">
                    <div className="flex items-center gap-3">
                        <img src={game.teams.away.logo}
                            className="aspect-square w-6" />
                        <p className="text-[0.8rem]">
                            {game.teams.away.name}
                        </p>
                    </div>

                    {/* Score by quaters */}
                    <div className="grid grid-cols-4 text-[0.8rem]">
                        <span>
                            {game.scores.away.quarter_1}
                        </span>
                        <span>
                            {game.scores.away.quarter_2}

                        </span>
                        <span>
                            {game.scores.away.quarter_3}

                        </span>
                        <span>
                            {game.scores.away.quarter_4}
                        </span>
                    </div>

                    <span className={
                        winner === "home" ? "text-teamLostGray" : "font-bold"
                    }>
                        {game.scores.away.total}
                    </span>
                </div>

            </div>
        </div>
    )
};

export default SingleGame;
