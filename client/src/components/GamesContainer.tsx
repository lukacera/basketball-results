import React, { useState, useContext, useEffect } from "react"
import { DateContext } from "../hooks/DateContextHook";
import { GameType } from "../types/GameType"
import TopLeaguesDiv from "./TopLeaguesDiv";
import { getGamesByDate } from "../api/getGamesByDate";

const GamesContainer: React.FC = () => {

    const { selectedDate } = useContext(DateContext)

    const [games, setGames] = useState<GameType[]>([
        {
            "id": 373308,
            "date": "2024-04-06T00:00:00+00:00",
            "time": "00:00",
            "timestamp": 1712361600,
            "timezone": "UTC",
            "stage": null,
            "week": null,
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 12,
                "name": "NBA",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/12.png"
            },
            "country": {
                "id": 5,
                "name": "USA",
                "code": "US",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "teams": {
                "home": {
                    "id": 136,
                    "name": "Chicago Bulls",
                    "logo": "https://media.api-sports.io/basketball/teams/136.png"
                },
                "away": {
                    "id": 151,
                    "name": "New York Knicks",
                    "logo": "https://media.api-sports.io/basketball/teams/151.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 29,
                    "quarter_2": 32,
                    "quarter_3": 20,
                    "quarter_4": 27,
                    "over_time": null,
                    "total": 108
                },
                "away": {
                    "quarter_1": 17,
                    "quarter_2": 28,
                    "quarter_3": 31,
                    "quarter_4": 24,
                    "over_time": null,
                    "total": 100
                }
            }
        },
        {
            "id": 373309,
            "date": "2024-04-06T00:00:00+00:00",
            "time": "00:00",
            "timestamp": 1712361600,
            "timezone": "UTC",
            "stage": null,
            "week": null,
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 12,
                "name": "NBA",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/12.png"
            },
            "country": {
                "id": 5,
                "name": "USA",
                "code": "US",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "teams": {
                "home": {
                    "id": 142,
                    "name": "Houston Rockets",
                    "logo": "https://media.api-sports.io/basketball/teams/142.png"
                },
                "away": {
                    "id": 147,
                    "name": "Miami Heat",
                    "logo": "https://media.api-sports.io/basketball/teams/147.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 27,
                    "quarter_2": 32,
                    "quarter_3": 24,
                    "quarter_4": 21,
                    "over_time": null,
                    "total": 104
                },
                "away": {
                    "quarter_1": 27,
                    "quarter_2": 37,
                    "quarter_3": 29,
                    "quarter_4": 26,
                    "over_time": null,
                    "total": 119
                }
            }
        },
        {
            "id": 373310,
            "date": "2024-04-06T00:00:00+00:00",
            "time": "00:00",
            "timestamp": 1712361600,
            "timezone": "UTC",
            "stage": null,
            "week": null,
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 12,
                "name": "NBA",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/12.png"
            },
            "country": {
                "id": 5,
                "name": "USA",
                "code": "US",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "teams": {
                "home": {
                    "id": 146,
                    "name": "Memphis Grizzlies",
                    "logo": "https://media.api-sports.io/basketball/teams/146.png"
                },
                "away": {
                    "id": 140,
                    "name": "Detroit Pistons",
                    "logo": "https://media.api-sports.io/basketball/teams/140.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 32,
                    "quarter_2": 25,
                    "quarter_3": 32,
                    "quarter_4": 19,
                    "over_time": null,
                    "total": 108
                },
                "away": {
                    "quarter_1": 22,
                    "quarter_2": 16,
                    "quarter_3": 32,
                    "quarter_4": 20,
                    "over_time": null,
                    "total": 90
                }
            }
        }
    ])



    /*
    useEffect(() => {
        const fetchGames = async () => {
            try {
                const fetchedGames: GameType[] = await getGamesByDate(selectedDate);
                setGames(fetchedGames)
            } catch (error) {
                console.log("Error occured: " + error)
            }
        }
        fetchGames()
    }, [selectedDate]) */

    return (
        <div className="bg-secondaryBlueBoxes rounded-xl text-center">
            {/* Top leagues div */}
            <TopLeaguesDiv games={games} />
        </div>

    )
};

export default GamesContainer;
