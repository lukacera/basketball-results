import React, { useState, useContext } from "react"
import { CountryType } from "../types/CountryType";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { LeaguesContext } from "../hooks/LeaguesContextHook";
import { LeagueType } from "../types/LeagueType";
import { GamesContext } from "../hooks/GamesContextHook";

const CountrySidebar: React.FC<{ country: CountryType }> = ({ country }) => {

    const [dropdownIsOpen, setDropdownIsOpen] = useState<boolean>(false)
    const { leagues } = useContext(LeaguesContext)
    const { games } = useContext(GamesContext)

    // Filter leagues, so that only leagues in this country stay
    const filteredLeagues: LeagueType[] = leagues.filter(league => (
        league.country.id === country.id
    ))


    // Number of games in country
    let numGames = 0;
    games.forEach(game => {
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
                        pl-[4.5rem] pr-[1rem] py-1 cursor-pointer"
                            key={league.id}>
                            <p>
                                {league.name}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </>
    )
};

export default CountrySidebar;
