import React, { useState, useContext, Dispatch, SetStateAction } from "react"
import { CountryType } from "../types/CountryType";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { LeaguesContext } from "../hooks/LeaguesContextHook";
import { LeagueType } from "../types/LeagueType";
import { GamesContext } from "../hooks/GamesContextHook";
import { GameType } from "../types/GameType";
import { StandingsType } from "../types/StandingsType";
import { getStandings } from "../api/getStandings";

const CountrySidebar: React.FC<{
    country: CountryType,
    setStandings: Dispatch<SetStateAction<StandingsType[] | null>>
}> = ({ country, setStandings }) => {

    const [dropdownIsOpen, setDropdownIsOpen] = useState<boolean>(false)
    const { leagues } = useContext(LeaguesContext)
    const { games } = useContext(GamesContext)

    // Filter leagues, so that only leagues in this country stay
    const filteredLeagues: LeagueType[] = leagues.filter(league => (
        league.country.id === country.id
    ))

    const numGamesByLeague: { [key: number]: GameType[] } = {};


    // Number of games in country
    let numGames = 0;

    // Assign each game to appropiate league bucket
    games.forEach(game => {
        numGamesByLeague[game.league.id] ? numGamesByLeague[game.league.id].push(game)
            : numGamesByLeague[game.league.id] = [game]

        game.country.id === country.id ? numGames++ : null
    })

    const handleSetStandings = async (leagueId: number) => {
        try {
            const fetchedStandings = await getStandings(leagueId)

            fetchedStandings.length > 0 && setStandings(fetchedStandings)
        } catch (error) {
            console.log("Error occured while fetching standings! " + error)
        }
    }
    return (
        <>
            <div className={`grid grid-cols-[10%,70%,13%,7%] items-center 
            px-4 py-1 text-[1.1rem] cursor-pointer
            ${!dropdownIsOpen && `hover:bg-hoverDarkShade`} 
            ${dropdownIsOpen && `bg-primaryPurpleHighlight`}`}
                onClick={() => setDropdownIsOpen(!dropdownIsOpen)}>
                <img
                    src={country.flag ? country.flag : "https://www.badensports.com/cdn/shop/products/BX6E-02E_High_Large_SIDE_2000x.png?v=1697043481"}
                    className="aspect-square w-9 rounded-full"
                />
                <span className="pl-5 max-w-[14rem]">
                    {country.name}
                </span>
                <span className="text-teamLostGray">
                    {numGames !== 0 && numGames}
                </span>
                {!dropdownIsOpen ?
                    <IoIosArrowDown
                        size={23}
                        className="text-teamLostGray"
                    />
                    : <IoIosArrowUp
                        size={23}
                        className="text-primaryPurple"
                    />}

            </div>
            {dropdownIsOpen && (
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
            )}
        </>
    )
};

export default CountrySidebar;
