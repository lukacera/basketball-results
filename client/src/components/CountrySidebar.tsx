import React, { useState } from "react"
import { CountryType } from "../types/CountryType";
import { IoIosArrowDown } from "react-icons/io";

const CountrySidebar: React.FC<{ country: CountryType }> = ({ country }) => {

    const [dropdownIsOpen, setDropdownIsOpen] = useState<boolean>(false)

    return (
        <>
            <div className="grid grid-cols-[10%,80%,10%] items-center 
            hover:bg-[rgba(0,0,0,0.3)] px-4 py-1 text-[1.1rem] cursor-pointer"
                onClick={() => setDropdownIsOpen(!dropdownIsOpen)}
            >
                <img
                    src={country.flag ? country.flag : "https://www.badensports.com/cdn/shop/products/BX6E-02E_High_Large_SIDE_2000x.png?v=1697043481"}
                    className="aspect-square w-9 rounded-full"
                />
                <p className="pl-5 max-w-[14rem]">{country.name}</p>
                <IoIosArrowDown
                    size={23}
                    color="gray"
                />
            </div>
            {dropdownIsOpen && (
                <div className="bg-white text-black">
                    <p>Dropdown open</p>
                </div>
            )}
        </>
    )
};

export default CountrySidebar;
