import React, { useState, Dispatch, SetStateAction, useContext, useEffect } from "react"
import { CountryType } from "../../types/CountryType";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { StandingsType } from "../../types/StandingsType";
import CountrySidebarDropdownLeagues from "./CountrySidebarDropdownLeagues";
import { GameType } from "../../types/GameType";
import { GamesContext } from "../../hooks/GamesContextHook";
import { useInView } from "react-intersection-observer";

const CountrySidebar: React.FC<{
    country: CountryType,
    setStandings: Dispatch<SetStateAction<StandingsType[] | null>>
}> = ({ country, setStandings }) => {

    const [dropdownIsOpen, setDropdownIsOpen] = useState<boolean>(false)
    const { games } = useContext(GamesContext)

    const numGamesByLeague: { [key: number]: GameType[] } = {};

    const [imgRef, inView] = useInView() // Used for Lazy loading of flags
    const [loaded, setLoaded] = useState<boolean>(false)

    useEffect(() => {
        inView && !loaded && setLoaded(true)
    }, [inView, loaded])


    // Number of games in country
    let numGames = 0;

    // Assign each game to appropiate league bucket
    games && games.forEach(game => {
        numGamesByLeague[game.league.id] ? numGamesByLeague[game.league.id].push(game)
            : numGamesByLeague[game.league.id] = [game]

        game.country.id === country.id ? numGames++ : null
    })

    return (
        <>
            <div className={`grid grid-cols-[10%,70%,13%,7%] items-center 
            px-4 py-1 text-[1.1rem] cursor-pointer
            ${!dropdownIsOpen && `hover:bg-hoverDarkShade`} 
            ${dropdownIsOpen && `bg-primaryPurpleHighlight`}`}
                onClick={() => setDropdownIsOpen(!dropdownIsOpen)}>

                <img
                    src={!loaded ? "" :
                        country.flag ? country.flag : "https://www.badensports.com/cdn/shop/products/BX6E-02E_High_Large_SIDE_2000x.png?v=1697043481"}
                    className="aspect-square w-9 rounded-full"
                    ref={imgRef}
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
                < CountrySidebarDropdownLeagues
                    country={country}
                    setStandings={setStandings}
                    numGamesByLeague={numGamesByLeague} />
            )}
        </>
    )
};

export default CountrySidebar;
