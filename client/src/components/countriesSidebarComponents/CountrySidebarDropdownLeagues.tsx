import React, { Dispatch, SetStateAction, useContext } from "react"
import { LeagueType } from "../../types/LeagueType";
import { getStandings } from "../../api/getStandings";
import { CountryType } from "../../types/CountryType";
import { StandingsType } from "../../types/StandingsType";
import { LeaguesContext } from "../../hooks/LeaguesContextHook";
import { GameType } from "../../types/GameType";

const CountrySidebarDropdownLeagues: React.FC<{
    country: CountryType,
    setStandings: Dispatch<SetStateAction<StandingsType[] | null>>,
    numGamesByLeague: { [key: number]: GameType[] }
}> = ({ country, setStandings, numGamesByLeague }) => {


    const { leagues } = useContext(LeaguesContext)

    // Filter leagues, so that only leagues in this country stay
    const filteredLeagues: LeagueType[] = leagues.filter(league => (
        league.country?.id === country.id
    ))

    const handleSetStandings = async (leagueId: number) => {
        try {
            const fetchedStandings = await getStandings(leagueId)

            fetchedStandings.length > 0 && setStandings(fetchedStandings)
        } catch (error) {
            console.log("Error occured while fetching standings! " + error)
        }
    }
    return (
        <div className="bg-mainBg">
            {filteredLeagues.map(league => (
                <div className="hover:bg-hoverDarkShade
                            pl-[4.5rem] pr-4 py-1 cursor-pointer flex justify-between"
                    onClick={() => handleSetStandings(league.id)}
                    key={league.id}>
                    <span>
                        {league.name}
                    </span>
                    <span className="text-teamLostGray">
                        {numGamesByLeague[league.id] ?
                            numGamesByLeague[league.id].length : null}
                    </span>
                </div>
            ))}
        </div>
    )
};

export default CountrySidebarDropdownLeagues;
