import React, { useState, useContext, useEffect } from "react"
import { DateContext } from "../hooks/DateContextHook";
import { GameType } from "../types/GameType"
import TopLeaguesDiv from "./TopLeaguesDiv";
import { getGamesByDate } from "../api/getGamesByDate";

const GamesContainer: React.FC = () => {

    const { selectedDate } = useContext(DateContext)

    const [games, setGames] = useState<GameType[]>([])



    useEffect(() => {
        const fetchGames = async () => {
            try {
                const fetchedGames: GameType[] = await getGamesByDate(selectedDate);
                setGames(fetchedGames)
            } catch (error) {
                console.log("Error occured: " + error)
            }
        }
        fetchGames()
    }, [selectedDate])

    return (
        <div className="bg-secondaryBlueBoxes rounded-xl text-center">
            {/* Top leagues div */}
            <TopLeaguesDiv games={games} />
        </div>

    )
};

export default GamesContainer;
