import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { GameType } from "../types/GameType";
import { DateContext } from "./DateContextHook";
import { getGamesByDate } from "../api/getGamesByDate";

interface GamesContextType {
    games: GameType[]
}

// Context that will be used in components
export const GamesContext = createContext<GamesContextType>({} as GamesContextType);

export const GamesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

    const [games, setGames] = useState<GameType[]>([]);

    const { selectedDate } = useContext(DateContext)

    useEffect(() => {
        const fetchGames = async () => {
            try {
                const fetchedGames = await getGamesByDate(selectedDate)

                setGames(fetchedGames)
            } catch (error) {
                console.log("Error occured while fetching games! " + error)
            }
        }

        fetchGames()
    }, [selectedDate, setGames])

    return (
        <GamesContext.Provider value={{ games }}>
            {children}
        </GamesContext.Provider>
    );
};