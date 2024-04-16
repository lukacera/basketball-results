import React, { Dispatch, SetStateAction } from "react"
import { GameType } from "../../types/GameType";
import SingleGame from "./singleGameMainContainerComponents/SingleGame";
import { StandingsType } from "../../types/StandingsType";
import { getStandings } from "../../api/getStandings";

const GamesByLeague: React.FC<{
    leagueGamesByIDOfLeague: GameType[],
    setSelectedGame: Dispatch<SetStateAction<GameType | null>>,
    setStandings: Dispatch<SetStateAction<StandingsType[] | null>>
}> = ({ leagueGamesByIDOfLeague, setSelectedGame, setStandings }) => {

    // Standings are fetched by league ID
    const handleSettingStandings = async () => {
        try {
            const fetchedStandings = await getStandings(leagueGamesByIDOfLeague[0].league.id)
            setStandings(fetchedStandings)
        } catch (error) {
            console.log("Error occured while fetching standings! " + error)
        }
    }
    return (
        <div className="flex flex-col gap-5">
            <hr className="border-primaryGray" />
            {leagueGamesByIDOfLeague.length > 0 && (
                <div className="flex flex-col gap-3">
                    <div className="grid grid-cols-[17%_83%] ">
                        <div className="grid place-items-center">
                            {/* 
                                There is no flag for Europe, so use 
                                league logos instead
                            */}
                            <img src={
                                leagueGamesByIDOfLeague[0].country.name === "Europe" ?
                                    leagueGamesByIDOfLeague[0].league.logo :

                                    leagueGamesByIDOfLeague[0].country.flag ?
                                        leagueGamesByIDOfLeague[0].country.flag :
                                        leagueGamesByIDOfLeague[0].league.logo
                            }
                                className="aspect-square rounded-full w-7"
                            />
                        </div>
                        {/* League name and country */}
                        <div className="flex flex-col items-start text-[0.8rem]
                        font-mainFont">
                            <span className="text-teamLostGray">
                                {leagueGamesByIDOfLeague[0].country.name}
                            </span>
                            <span onClick={() => handleSettingStandings()}
                                className="hover:text-primaryPurple 
                            cursor-pointer">
                                {leagueGamesByIDOfLeague[0].league.name}
                            </span>
                        </div>
                    </div>
                    {leagueGamesByIDOfLeague.map(game => (
                        <div
                            onClick={() => setSelectedGame(game)}
                            key={game.id}>
                            <SingleGame game={game} />
                        </div>
                    ))}
                </div>
            )}

        </div>

    )
};

export default GamesByLeague;
