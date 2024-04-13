import React, { useEffect, useState } from "react"
import { GameType } from "../types/GameType";
import { useInView } from "react-intersection-observer";
import { checkWinner } from "../utils/checkWinner";
const SingleGame: React.FC<{ game: GameType }> = ({ game }) => {

    const [imgRef, inView] = useInView();

    // State managment for checking if image is loaded
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        inView && !loaded && setLoaded(true)
    }, [inView, loaded])


    // Format date from isoString to dd.mm.yy format
    const formattedDate = (isoDateString: string) => {
        const date = new Date(isoDateString);
        const day = date.getDate().toString().padStart(2, "");
        const month = (date.getMonth() + 1).toString().padStart(2, " ");
        const year = date.getFullYear().toString().slice(2).padStart(2);
        return `${day}.${month}.${year}.`;
    };

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


            </div>

            <div className="grid grid-rows-2 gap-1 border-l-[0.1rem] border-primaryGray
            pl-2">
                {/* Home team */}
                <div className="grid grid-cols-[60%_30%_10%]">
                    <div className="flex items-center gap-3">
                        <img
                            src={loaded ? game.teams.home.logo : ""} // Lazy laoding
                            className="aspect-square w-6"
                            ref={imgRef}
                        />
                        <p className={checkWinner(game.scores.home.total,
                            game.scores.away.total
                        ) === "home" ? "font-bold" : "text-teamLostGray"
                        }>
                            {game.teams.home.name}
                        </p>
                    </div>

                    {/* Score by quaters */}
                    <div className="grid grid-cols-5 text-[0.8rem] items-center">
                        <span
                            className={
                                checkWinner(game.scores.home.quarter_1,
                                    game.scores.away.quarter_1) === "home" ? "font-bold"
                                    : "text-teamLostGray"
                            }>
                            {game.scores.home.quarter_1}
                        </span>
                        <span
                            className={
                                checkWinner(game.scores.home.quarter_2,
                                    game.scores.away.quarter_2) === "home" ? "font-bold"
                                    : "text-teamLostGray"
                            }>
                            {game.scores.home.quarter_2}

                        </span>
                        <span
                            className={
                                checkWinner(game.scores.home.quarter_3,
                                    game.scores.away.quarter_3) === "home" ? "font-bold"
                                    : "text-teamLostGray"
                            }>
                            {game.scores.home.quarter_3}

                        </span>
                        <span
                            className={
                                checkWinner(game.scores.home.quarter_4,
                                    game.scores.away.quarter_4) === "home" ? "font-bold"
                                    : "text-teamLostGray"
                            }>
                            {game.scores.home.quarter_4}
                        </span>
                        <span
                            className={
                                checkWinner(game.scores.home.over_time,
                                    game.scores.away.over_time) === "home" ? "font-bold"
                                    : "text-teamLostGray"
                            }>
                            {game.scores.home.over_time}
                        </span>
                    </div>

                    <span
                        className={
                            checkWinner(game.scores.home.total,
                                game.scores.away.total) === "home" ? "font-bold"
                                : "text-teamLostGray"
                        }>
                        {game.scores.home.total}
                    </span>
                </div>

                {/* Away team */}
                <div className="grid grid-cols-[60%_30%_10%]">
                    <div className="flex items-center gap-3">
                        <img
                            src={loaded ? game.teams.away.logo : ""} // Lazy loading
                            className="aspect-square w-6"
                            ref={imgRef}
                        />
                        <p className={checkWinner(game.scores.home.total,
                            game.scores.away.total
                        ) === "away" ? "font-bold" : "text-teamLostGray"
                        }>
                            {game.teams.away.name}
                        </p>
                    </div>

                    {/* Score by quaters */}
                    <div className="grid grid-cols-5 text-[0.8rem] items-center">
                        <span
                            className={
                                checkWinner(game.scores.home.quarter_1,
                                    game.scores.away.quarter_1) === "away" ? "font-bold"
                                    : "text-teamLostGray"
                            }>
                            {game.scores.away.quarter_1}
                        </span>
                        <span
                            className={
                                checkWinner(game.scores.home.quarter_2,
                                    game.scores.away.quarter_2) === "away" ? "font-bold"
                                    : "text-teamLostGray"
                            }>
                            {game.scores.away.quarter_2}

                        </span>
                        <span
                            className={
                                checkWinner(game.scores.home.quarter_3,
                                    game.scores.away.quarter_3) === "away" ? "font-bold"
                                    : "text-teamLostGray"
                            }>
                            {game.scores.away.quarter_3}

                        </span>
                        <span
                            className={
                                checkWinner(game.scores.home.quarter_4,
                                    game.scores.away.quarter_4) === "away" ? "font-bold"
                                    : "text-teamLostGray"
                            }>
                            {game.scores.away.quarter_4}
                        </span>
                        <span
                            className={
                                checkWinner(game.scores.home.over_time,
                                    game.scores.away.over_time) === "away" ? "font-bold"
                                    : "text-teamLostGray"
                            }>
                            {game.scores.away.over_time}
                        </span>
                    </div>

                    <span
                        className={
                            checkWinner(game.scores.home.total,
                                game.scores.away.total) === "away" ? "font-bold"
                                : "text-teamLostGray"
                        }>
                        {game.scores.away.total}
                    </span>
                </div>

            </div>
        </div >
    )
};

export default SingleGame;
