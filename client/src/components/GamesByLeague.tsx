import React from "react"
import { GameType } from "../types/GameType";
import SingleGame from "./SingleGame";

const GamesByLeague: React.FC<{
    leagueGamesByIDOfLeague: GameType[]
}> = ({ leagueGamesByIDOfLeague }) => {
    return (
        <div className="flex flex-col gap-5">

            {leagueGamesByIDOfLeague.length > 0 && (
                <div className="flex flex-col gap-3">
                    <div className="grid grid-cols-[17%_83%]">
                        <div className="grid place-items-center">
                            {/* 
                                Flag for ABA league is broken, so show logo of 
                                the league
                                For other cases, show flag if it exists, if not,
                                show logo of the league
                            */}
                            <img src={
                                leagueGamesByIDOfLeague[0].league.id === 198 ?
                                    leagueGamesByIDOfLeague[0].league.logo :

                                    leagueGamesByIDOfLeague[0].country.flag ?
                                        leagueGamesByIDOfLeague[0].country.flag :
                                        leagueGamesByIDOfLeague[0].league.logo
                            }
                                className="aspect-square rounded-full w-8"
                            />
                        </div>
                        {/* League name and country */}
                        <div className="flex flex-col items-start text-[0.9rem]
                font-mainFont">
                            <span className="text-teamLostGray">
                                {leagueGamesByIDOfLeague[0].country.name}
                            </span>
                            <span>
                                {leagueGamesByIDOfLeague[0].league.name}
                            </span>
                        </div>
                    </div>
                    {leagueGamesByIDOfLeague.map(game => (
                        <div key={game.id}>
                            <SingleGame game={game} />
                        </div>
                    ))}
                </div>
            )}

        </div>

    )
};

export default GamesByLeague;
