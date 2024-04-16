import React from "react"
import { StandingsType } from "../../types/StandingsType";

const SelectedGroup: React.FC<{
    standings: StandingsType[]
}> = ({ standings }) => {
    console.log(standings)
    return (
        <div className="flex flex-col gap-2">
            {standings && standings.map(team =>
                <div
                    key={team.team.id}
                    className="grid grid-cols-[40%_32%_28%] w-full">

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
                    <div className="flex justify-end pr-7">
                        <span className="w-8 text-center">
                            {team.games.win.total}
                        </span>
                        <span className="w-8 text-center">
                            {team.games.lose.total}
                        </span>
                    </div>
                    <div className="grid grid-cols-[70%_30%]">
                        <div className="flex items-center gap-2">
                            <span className="w-10 text-center">
                                {team.points.for}
                            </span>
                            <span className="w-12 text-center">
                                {team.points.against}
                            </span>
                            <span className="w-10 text-center">
                                {team.points.for - team.points.against}
                            </span>
                        </div>
                        <span className="text-center pl-6">
                            {team.games.win.percentage}
                        </span>
                    </div>
                </div>
            )}
        </div>

    )
};

export default SelectedGroup;
