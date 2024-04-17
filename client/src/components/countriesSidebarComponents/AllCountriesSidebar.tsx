import React, { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from "react"
import { CountryType } from "../../types/CountryType"
import CountrySidebar from "./CountrySidebar";
import { StandingsType } from "../../types/StandingsType";
import { BiSearch } from "react-icons/bi";
import { getAllCountries } from "../../api/getAllCountries";

const AllCountriesSidebar: React.FC<{
    setStandings: Dispatch<SetStateAction<StandingsType[] | null>>
}> = ({ setStandings }) => {

    const [countries, setCountries] = useState<CountryType[]>([])

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const fetchData = await getAllCountries()
                setCountries(fetchData)
            } catch (error) {
                console.log("Error occured while fetching countries! " + error)
            }
        }
        fetchCountries()
    }, [])
    const sortedCountries = countries.sort((a: CountryType, b: CountryType) => (
        a.name.localeCompare(b.name)
    ))

    const [searchValue, setSearchValue] = useState<string>("")

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const searchValue = e.target.value;
        setSearchValue(searchValue)
    }
    const filteredCountries: CountryType[] = sortedCountries.filter(country =>
        country.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (
        <div className="bg-secondaryBlueBoxes rounded-lg">
            <div className="flex flex-col py-4">
                <div>
                    <span className="px-4 pt-[14px] pb-[6px] font-bold">
                        Countries
                    </span>
                    <div className="flex items-center bg-mainBg m-3 border-[1px]
                    border-primaryGray rounded-xl">
                        <BiSearch
                            className="my-2 mx-4 aspect-square w-6" />
                        <input type="text"
                            className="my-[10px] w-full bg-transparent outline-none"
                            placeholder="Country..."
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                {filteredCountries.map((country) => (
                    <div key={country.id}>
                        <CountrySidebar
                            setStandings={setStandings}
                            country={country} />
                    </div>
                ))}

            </div>
        </div>
    )
};

export default AllCountriesSidebar;
