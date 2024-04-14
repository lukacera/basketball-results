import React, { useEffect, useState } from "react"
import { GameType } from "../types/GameType";
import { useInView } from "react-intersection-observer";
import SingleGameTeam from "./SingleGameTeam";
import { formattedDate } from "../utils/formatDate";

const SingleGame: React.FC<{ game: GameType }> = ({ game }) => {

    const [imgRef, inView] = useInView();

    // State managment for checking if image is loaded
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        inView && !loaded && setLoaded(true)
    }, [inView, loaded])

    return (
        <div className="grid grid-cols-[17%_83%] text-[14px] font-sofiaSans
        h-auto cursor-pointer hover:bg-hoverDarkShade pr-5">
            <div className="flex flex-col justify-center text-teamLostGray">
                {game.date.slice(0, 10) !== new Date().toISOString().slice(0, 10) && (
                    <span>
                        {formattedDate(game.date)}
                    </span>
                )}
                {(game.date.slice(0, 10) === new Date().toISOString().slice(0, 10)
                    || game.status.short === "NS") && (
                        <span>
                            {game.time}
                        </span>
                    )}

                {["FT", "AOT"].includes(game.status.short) && (
                    <span>
                        {game.status.short}
                    </span>
                )}

                {["Q1", "Q2", "Q3", "Q4", "OT", "HT", "BT"]
                    .includes(game.status.short) && (
                        <span className="text-red-600">
                            {game.status.short}
                        </span>
                    )}


            </div>

            <div className="grid grid-rows-2 gap-1 border-l-[0.1rem] border-primaryGray
            pl-2">
                {/* Home team */}
                <SingleGameTeam
                    game={game}
                    imgRef={imgRef}
                    loaded={loaded}
                    team="home"
                />

                {/* Away team */}
                <SingleGameTeam
                    game={game}
                    imgRef={imgRef}
                    loaded={loaded}
                    team="away"
                />
            </div>
        </div >
    )
};

export default SingleGame;
