import React, { Dispatch, SetStateAction } from "react"
import { StandingsType } from "../types/StandingsType";
import { RxCross2 } from "react-icons/rx";

const Standings: React.FC<{
    standings: [StandingsType[] | null],
    setStandings: Dispatch<SetStateAction<[StandingsType[] | null]>>
}> = ({ standings, setStandings }) => {
    if (standings) {
        return (
            <div>
                <div className="sticky top-[7.4rem] 
                left-0 bg-secondaryBlueBoxes rounded-xl">
                    <div className="flex justify-between items-center 
                        w-full px-5 pt-3">
                        {standings[0] && (
                            <div className="flex items-center gap-3">
                                <img src={standings[0][0].league.logo}
                                    className="w-12 aspect-square" />
                                <h3>
                                    {standings[0] && standings[0][0].league.name}
                                </h3>
                            </div>
                        )}

                        <RxCross2 size={25}
                            onClick={() => setStandings([null])} />
                    </div>
                    <div className="h-auto
                            flex flex-col ">
                        {standings.map(standing => (
                            standing?.map(team => (
                                <div
                                    className="flex items-center"
                                    key={team.team.id}>
                                    <img src={team.team.logo}
                                        className="aspect-square w-10" />
                                    <span>
                                        {team.team.name}
                                    </span>
                                </div>
                            ))
                        ))}
                    </div>
                </div>
            </div>
        )

    } else {
        return null
    }
};

export default Standings;
