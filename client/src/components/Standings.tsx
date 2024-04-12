import React, { Dispatch, SetStateAction } from "react";
import { StandingsType } from "../types/StandingsType";
import { RxCross2 } from "react-icons/rx";

const Standings: React.FC<{
    standings: [StandingsType[] | null],
    setStandings: Dispatch<SetStateAction<[StandingsType[] | null]>>
}> = ({ standings, setStandings }) => {
    if (standings) {
        return (
            <div className="sticky top-[7.4rem] left-0 bg-secondaryBlueBoxes rounded-xl max-h-[50rem]">
                <div className="flex justify-between items-center w-full px-5 pt-3">
                    {standings[0] && (
                        <div className="flex items-center gap-3">
                            <img src={standings[0][0].league.logo} className="w-12 aspect-square" alt="League Logo" />
                            <h3>{standings[0][0].league.name}</h3>
                        </div>
                    )}
                    <RxCross2
                        size={25}
                        cursor={"pointer"}
                        onClick={() => setStandings([null])} />
                </div>
                <div className="flex flex-col px-5 py-3 gap-3 overflow-auto">
                    <div className="grid grid-cols-[50%_30%_20%] w-full text-teamLostGray">
                        <div className="flex gap-5">
                            <span>#</span>
                            <span>Team</span>
                        </div>
                        <div className="flex justify-end gap-4 pr-10">
                            <span>W</span>
                            <span>L</span>
                        </div>
                        <div className="flex justify-between w-full">
                            <span className="w-full text-center pl-10">Form</span>
                            <span className="text-end w-full pr-4">
                                %
                            </span>
                        </div>
                    </div>
                    <hr className="border-primaryGray" />
                    <div className="flex flex-col gap-2">
                        {standings.map(standing =>
                            standing?.map(team => (
                                <div
                                    className="grid grid-cols-[50%_30%_20%] 
                                w-full">

                                    {/* Team Logo and name */}
                                    <div className="flex gap-2 items-center">
                                        <span className="rounded-full 
                                        bg-primaryGreen aspect-square w-7 
                                        text-black flex justify-center 
                                        items-center">
                                            {team.position}
                                        </span>
                                        <img src={team.team.logo} className="aspect-square w-6" alt="Team Logo" />
                                        <span>{team.team.name}</span>
                                    </div>
                                    <div className="flex justify-end gap-4 pr-10">
                                        <span>
                                            {team.games.win.total}
                                        </span>
                                        <span>{team.games.lose.total}</span>
                                    </div>
                                    {/* Container for team's form */}
                                    <div className="grid grid-cols-[70%_30%]">
                                        <div className="text-black flex justify-center w-full text-[0.8rem]">
                                            {team.form?.split("").map((result, index) => (
                                                <span key={index} className={`${result === "W" ? "bg-primaryGreen" : "bg-red-600"} p-[10px] h-4 aspect-square flex justify-center items-center`}>{result}</span>
                                            ))}
                                        </div>
                                        <span className="text-end w-full">{team.games.win.percentage}</span>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        );
    } else {
        return null;
    }
};

export default Standings;
