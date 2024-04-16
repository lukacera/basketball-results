import React, { Dispatch, SetStateAction, useState } from "react"
import { StandingsType } from "../../types/StandingsType";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const StandingsDropdown: React.FC<{
    standingsGroupedByGroup: { [key: string]: StandingsType[] },
    setSelGroup: Dispatch<SetStateAction<string | number>>
    selGroup: string | number,
    standings: StandingsType[]
}> = ({ standingsGroupedByGroup, setSelGroup, selGroup, standings }) => {

    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false)

    // Set new group when user clicks on group from dropdown menu
    const handleClick = (key: string) => {
        setSelGroup(key);
        setIsDropdownOpen(false)
    }

    return (
        <div className="relative">
            {/* Currently selected group */}
            <div className="bg-mainBg px-5 py-2 flex items-center justify-between
                rounded-xl border-[1px] border-primaryGray
                w-[20rem] cursor-pointer"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                <div className="flex items-center gap-3">
                    <img src={standings[0].league.logo}
                        className="w-3" />
                    <span>{selGroup}</span>
                </div>
                {!isDropdownOpen ? <IoIosArrowDown size={25} />
                    : <IoIosArrowUp size={25} />}
            </div>

            <ul className={`${!isDropdownOpen ? "hidden" : "visible"}
            bg-mainBg w-52 z-10 absolute max-h-[15rem] overflow-auto`}>
                {Object.keys(standingsGroupedByGroup).map((key, index) => (
                    <li
                        className={`${key === selGroup ? "hidden" : "visible"}
                        px-5 py-2 hover:bg-primaryGray cursor-pointer`}
                        onClick={() => handleClick(key)}
                        key={index}>
                        <span>
                            {key}
                        </span>
                    </li>
                ))}
            </ul>
        </div >

    )
};

export default StandingsDropdown;
