import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { StandingsType } from "../../types/StandingsType";
import { RxCross2 } from "react-icons/rx";
import SelectedGroup from "./SelectedGroup";
import StandingsDropdown from "./StandingsDropdown";

const Standings: React.FC<{
    standings: StandingsType[] | null,
    setStandings: Dispatch<SetStateAction<StandingsType[] | null>>
}> = ({ standings, setStandings }) => {
    /*
        Standings are going to be grouped by groups
        {
            "Group A" : [Team1, Team2...]
            "Group B" : [Team6, Team9 ...]
            ...
        }

    */
    const [standingsGroupedByGroup, setStandingsGroupedByGroup] = useState<{ [key: string]: StandingsType[] }>({});
    const [selGroup, setSelGroup] = useState<string | number>(0)

    console.log(standings)
    useEffect(() => {
        if (standings) {
            const groupedStandings = standings.reduce((acc, team) => {
                const groupName = team.group.name;
                acc[groupName] ? acc[groupName].push(team) : acc[groupName] = [team];
                return acc;
            }, {} as { [key: string]: StandingsType[] });

            setStandingsGroupedByGroup(groupedStandings);

            // Access the first group's standings if it exists
            const firstGroupStandings = Object.keys(groupedStandings)[0];
            firstGroupStandings && setSelGroup(firstGroupStandings);
        }
    }, [standings]);

    if (standings) {

        return (
            <div className="bg-secondaryBlueBoxes h-auto mb-10">
                {/* Header of table */}
                <div className="flex justify-between items-center 
                w-full px-5 py-3">
                    {standings[0] && (
                        <div className="flex items-center gap-10">
                            <img src={standings[0].league.logo}
                                className="w-[88px] aspect-square" />
                            <div className="flex flex-col justify-start">
                                <h3 className="font-bold text-[1.5rem]">
                                    {standings[0].league.name}
                                </h3>
                                <div className="flex items-center gap-2">
                                    {standings[0].country.name !== "Europe" && (
                                        <img src={standings[0].country.flag || ""}
                                            className="aspect-square w-8 rounded-full" />

                                    )}
                                    <span className="font-bold">
                                        {standings[0].country.name}
                                    </span>
                                </div>
                            </div>
                        </div>
                    )}
                    <RxCross2
                        size={25}
                        cursor={"pointer"}
                        onClick={() => setStandings(null)} />
                </div>
                {/* Main part of table */}
                <div className="flex flex-col px-5 py-3 gap-3">

                    <h2 className="text-center text-[1.3rem]">
                        Table
                    </h2>
                    <StandingsDropdown
                        selGroup={selGroup}
                        setSelGroup={setSelGroup}
                        standings={standings}
                        standingsGroupedByGroup={standingsGroupedByGroup} />
                    <div className="grid grid-cols-[40%_32%_28%] w-full
                    text-teamLostGray">
                        <div className="flex gap-5">
                            <span>#</span>
                            <span>Team</span>
                        </div>
                        <div className="flex justify-end gap-4 pr-10">
                            <span>W</span>
                            <span>L</span>
                        </div>
                        <div className="flex justify-between w-full">
                            <div className="flex items-center gap-4">
                                <span>
                                    For
                                </span>
                                <span>
                                    Against
                                </span>
                                <span>
                                    +-
                                </span>
                            </div>
                            <span className="text-end w-full pr-4">
                                %
                            </span>
                        </div>
                    </div>
                    <hr className="border-primaryGray" />
                    < SelectedGroup
                        standings={standingsGroupedByGroup[selGroup]} />
                </div>
            </div>
        );
    } else {
        return null;
    }
};

export default Standings;
