import React, { createContext, ReactNode, useEffect, useState } from "react";
import { LeagueType } from "../types/LeagueType";
import { getAllLeagues } from "../api/getAllLeagues";


type LeaguesContextType = {
    leagues: Required<Omit<LeagueType, "season">>[]
}

// Context that will be used in components
export const LeaguesContext = createContext<LeaguesContextType>({} as LeaguesContextType);

export const LeagueProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

    const [leagues, setLeagues] = useState<Required<Omit<LeagueType, "season">>[]>([]);

    useEffect(() => {
        const fetchLeagues = async () => {
            try {
                const fetchedData = await getAllLeagues();
                setLeagues(fetchedData)
            } catch (error) {
                console.log("Error occured while fetching leagues! " + error)
            }
        }

        fetchLeagues()
    }, [])

    return (
        <LeaguesContext.Provider value={{ leagues }}>
            {children}
        </LeaguesContext.Provider>
    );
};