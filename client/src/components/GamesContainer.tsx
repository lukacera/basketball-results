import React, { useState, useContext, useEffect } from "react"
import { DateContext } from "../hooks/DateContextHook";
import { GameType } from "../types/GameType"
import { getGamesByDate } from "../api/getGamesByDate";
import GamesByLeague from "./GamesByLeague";

const GamesContainer: React.FC = () => {

    const { selectedDate } = useContext(DateContext)

    const [games, setGames] = useState<GameType[]>([])




    useEffect(() => {
        const fetchGames = async () => {
            try {
                const fetchedGames: GameType[] = await getGamesByDate(selectedDate);
                fetchedGames.sort((a, b) => a.country.name.localeCompare(b.country.name))
                console.log(fetchedGames)
                setGames(fetchedGames)
            } catch (error) {
                console.log("Error occured: " + error)
            }
        }
        fetchGames()
    }, [selectedDate])

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

    otherLeaguesKeys.sort((a, b) => a.localeCompare(b))
    const sortedObjectOtherLeagues: { [key: string]: GameType[] } = {};

    otherLeaguesKeys.forEach(key => {
        sortedObjectOtherLeagues[key] = objectOtherLeagues[key];
    });


    return (
        <div className="bg-secondaryBlueBoxes rounded-xl text-center
        flex flex-col gap-5">

            {/* Top leagues container */}
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
                                    <GamesByLeague leagueGamesByIDOfLeague={objectTopLeagues[numericKey]} />
                                </div>
                            );
                        } else {
                            return null;
                        }
                    })}
                </div>
            </div>

            {/* Other leagues, in sorted format */}
            <div className="flex flex-col gap-5 pb-10">
                {Object.keys(sortedObjectOtherLeagues).map((key: string) => {
                    if (sortedObjectOtherLeagues[key].length > 0) {
                        return (
                            <div key={key}>
                                <GamesByLeague leagueGamesByIDOfLeague={sortedObjectOtherLeagues[key]} />
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
