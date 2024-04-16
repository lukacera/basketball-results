import React, { Dispatch, SetStateAction, useContext } from "react"
import { GameType } from "../../types/GameType"
import GamesByLeague from "./GamesByLeague";
import { GamesContext } from "../../hooks/GamesContextHook";

const GamesContainer: React.FC<{
    setSelectedGame: Dispatch<SetStateAction<GameType | null>>
}> = ({ setSelectedGame }) => {

    const { games } = useContext(GamesContext)

    const topLeaguesID = [12, 117, 198, 120, 194, 2, 52, 40, 45];

    const objectTopLeagues: { [key: number]: GameType[] } = {};
    const objectOtherLeagues: { [key: string]: GameType[] } = {}


    // Place games by league into appropiate bucket
    games.forEach(game => {
        const leagueId = game.league.id;

        if (topLeaguesID.includes(leagueId)) {
            objectTopLeagues[leagueId] ? objectTopLeagues[leagueId].push(game)
                : objectTopLeagues[leagueId] = [game]
        } else {
            const countryName = game.country.name
            objectOtherLeagues[countryName] ? objectOtherLeagues[countryName].push(game)
                : objectOtherLeagues[countryName] = [game]
        }
    });


    // Sort leagues by country name; in alphabetical order
    const otherLeaguesKeys = Object.keys(objectOtherLeagues);

    // Sort keys by country name in ascending order [A - Z]
    otherLeaguesKeys.sort((a, b) => a.localeCompare(b))
    const sortedObjectByCountries: { [key: string]: GameType[] } = {};

    // Assign those sorted keys to new Object
    otherLeaguesKeys.forEach(key => {
        sortedObjectByCountries[key] = objectOtherLeagues[key];
    });

    const sortedObjectLeagues: { [key: string]: GameType[] } = {}

    Object.keys(sortedObjectByCountries).forEach(key => {
        sortedObjectByCountries[key].forEach(game => {
            sortedObjectLeagues[game.league.name] ?
                sortedObjectLeagues[game.league.name].push(game) :
                sortedObjectLeagues[game.league.name] = [game]
        })
    })

    return (
        <div className="bg-secondaryBlueBoxes rounded-xl text-center
        flex flex-col mb-16">
            {/* Top leagues container */}
            {Object.keys(objectTopLeagues).length !== 0 && (
                <div className="my-7 mx-3 bg-mainBg px-5 rounded-xl
                h-auto">
                    <h3 className="text-[1.3rem] font-bold text-start p-5">
                        Top leagues
                    </h3>

                    <div className="flex flex-col gap-5 pb-10">
                        {Object.keys(objectTopLeagues).map((key: string) => {
                            const numericKey: number = parseInt(key); // Parse key to number
                            if (objectTopLeagues[numericKey].length > 0) {
                                return (
                                    <div key={key}>
                                        <GamesByLeague
                                            setSelectedGame={setSelectedGame}
                                            leagueGamesByIDOfLeague={objectTopLeagues[numericKey]} />
                                    </div>
                                );
                            } else {
                                return null;
                            }
                        })}
                    </div>
                </div>
            )}

            {/* Other leagues, in sorted format */}
            <div className="flex flex-col gap-5 pb-10">
                {Object.keys(sortedObjectLeagues).map((key: string) => {
                    if (sortedObjectLeagues[key].length > 0) {
                        return (
                            <div key={key}>
                                <GamesByLeague
                                    setSelectedGame={setSelectedGame}
                                    leagueGamesByIDOfLeague={sortedObjectLeagues[key]} />
                            </div>
                        );
                    } else {
                        return null;
                    }
                })}
            </div>
        </div>

    )
};

export default GamesContainer;
