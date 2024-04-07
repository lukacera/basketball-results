import React from "react"
import { GameType } from "../types/GameType";
import SingleGame from "./SingleGame";
/*
 Top leagues (and their ID) are:
 NBA => 12 ,
 ACB(Spanish League) => 117,
 ABA => 198,
 Euroleague => 120,
 Eurocup => 194,
 LNB(France) => 2,
 Lega A(Italy) => 52,
 BBL(Germany) => 40,
 Basket league(Greece) => 45
*/
const TopLeaguesDiv: React.FC<{ games: GameType[] }> = ({ games }) => {

    const topLeaguesID: number[] = [12, 117, 198, 120, 194, 2, 52, 40, 45]
    const filteredTopLeaguesGames = games.filter(game => (
        topLeaguesID.includes(game.league.id)
    ))
    return (
        <div className="my-7 mx-3 bg-mainBg min-h-[90%] px-5">
            <h3 className="text-2xl font-bold text-start p-5">
                Top leagues
            </h3>
            <div className="flex flex-col gap-5">
                {filteredTopLeaguesGames.length > 0 &&
                    filteredTopLeaguesGames.map((game) => (
                        <div key={game.id} className="text-center">
                            <SingleGame game={game} />
                        </div>
                    ))
                }
            </div>

            {filteredTopLeaguesGames.length === 0 && (
                <p>Test</p>
            )}
        </div>
    )
};

export default TopLeaguesDiv;
