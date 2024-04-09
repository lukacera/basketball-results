import React, { createContext, ReactNode } from "react";
import { GameType } from "../types/GameType";

interface GamesContextType {
    games: GameType[]
}

// Context that will be used in components
export const GamesContext = createContext<GamesContextType>({} as GamesContextType);

export const GamesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

    const games = [
        {
            "id": 373318,
            "date": "2024-04-07T00:00:00+00:00",
            "time": "00:00",
            "timestamp": 1712448000,
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
                    "id": 154,
                    "name": "Philadelphia 76ers",
                    "logo": "https://media.api-sports.io/basketball/teams/154.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 23,
                    "quarter_2": 19,
                    "quarter_3": 28,
                    "quarter_4": 26,
                    "over_time": null,
                    "total": 96
                },
                "away": {
                    "quarter_1": 28,
                    "quarter_2": 34,
                    "quarter_3": 24,
                    "quarter_4": 30,
                    "over_time": null,
                    "total": 116
                }
            }
        },
        {
            "id": 375291,
            "date": "2024-04-07T00:00:00+00:00",
            "time": "00:00",
            "timestamp": 1712448000,
            "timezone": "UTC",
            "stage": null,
            "week": null,
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 18,
                "name": "Liga A",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/18.png"
            },
            "country": {
                "id": 6,
                "name": "Argentina",
                "code": "AR",
                "flag": "https://media.api-sports.io/flags/ar.svg"
            },
            "teams": {
                "home": {
                    "id": 296,
                    "name": "Regatas",
                    "logo": "https://media.api-sports.io/basketball/teams/296.png"
                },
                "away": {
                    "id": 6125,
                    "name": "Zarate",
                    "logo": "https://media.api-sports.io/basketball/teams/6125.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 21,
                    "quarter_2": 18,
                    "quarter_3": 16,
                    "quarter_4": 14,
                    "over_time": null,
                    "total": 69
                },
                "away": {
                    "quarter_1": 23,
                    "quarter_2": 11,
                    "quarter_3": 17,
                    "quarter_4": 10,
                    "over_time": null,
                    "total": 61
                }
            }
        },
        {
            "id": 385414,
            "date": "2024-04-07T00:00:00+00:00",
            "time": "00:00",
            "timestamp": 1712448000,
            "timezone": "UTC",
            "stage": null,
            "week": null,
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 251,
                "name": "CIBACOPA",
                "type": "League",
                "season": 2024,
                "logo": "https://media.api-sports.io/basketball/leagues/251.png"
            },
            "country": {
                "id": 28,
                "name": "Mexico",
                "code": "MX",
                "flag": "https://media.api-sports.io/flags/mx.svg"
            },
            "teams": {
                "home": {
                    "id": 6304,
                    "name": "Angeles CDMX",
                    "logo": "https://media.api-sports.io/basketball/teams/6304.png"
                },
                "away": {
                    "id": 6305,
                    "name": "Frayles de Guasave",
                    "logo": "https://media.api-sports.io/basketball/teams/6305.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 20,
                    "quarter_2": 22,
                    "quarter_3": 22,
                    "quarter_4": 18,
                    "over_time": null,
                    "total": 82
                },
                "away": {
                    "quarter_1": 20,
                    "quarter_2": 10,
                    "quarter_3": 20,
                    "quarter_4": 22,
                    "over_time": null,
                    "total": 72
                }
            }
        },
        {
            "id": 389836,
            "date": "2024-04-07T00:00:00+00:00",
            "time": "00:00",
            "timestamp": 1712448000,
            "timezone": "UTC",
            "stage": null,
            "week": null,
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 76,
                "name": "BSN",
                "type": "League",
                "season": 2024,
                "logo": "https://media.api-sports.io/basketball/leagues/76.png"
            },
            "country": {
                "id": 36,
                "name": "Puerto Rico",
                "code": "PR",
                "flag": "https://media.api-sports.io/flags/pr.svg"
            },
            "teams": {
                "home": {
                    "id": 950,
                    "name": "Aguada Santeros",
                    "logo": "https://media.api-sports.io/basketball/teams/950.png"
                },
                "away": {
                    "id": 955,
                    "name": "Leones De Ponce",
                    "logo": "https://media.api-sports.io/basketball/teams/955.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 23,
                    "quarter_2": 31,
                    "quarter_3": 24,
                    "quarter_4": 13,
                    "over_time": null,
                    "total": 91
                },
                "away": {
                    "quarter_1": 22,
                    "quarter_2": 11,
                    "quarter_3": 16,
                    "quarter_4": 21,
                    "over_time": null,
                    "total": 70
                }
            }
        },
        {
            "id": 389837,
            "date": "2024-04-07T00:00:00+00:00",
            "time": "00:00",
            "timestamp": 1712448000,
            "timezone": "UTC",
            "stage": null,
            "week": null,
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 76,
                "name": "BSN",
                "type": "League",
                "season": 2024,
                "logo": "https://media.api-sports.io/basketball/leagues/76.png"
            },
            "country": {
                "id": 36,
                "name": "Puerto Rico",
                "code": "PR",
                "flag": "https://media.api-sports.io/flags/pr.svg"
            },
            "teams": {
                "home": {
                    "id": 952,
                    "name": "Capitanes de Arecibo",
                    "logo": "https://media.api-sports.io/basketball/teams/952.png"
                },
                "away": {
                    "id": 956,
                    "name": "Piratas de Quebradillas",
                    "logo": "https://media.api-sports.io/basketball/teams/956.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 28,
                    "quarter_2": 15,
                    "quarter_3": 21,
                    "quarter_4": 23,
                    "over_time": null,
                    "total": 87
                },
                "away": {
                    "quarter_1": 22,
                    "quarter_2": 23,
                    "quarter_3": 19,
                    "quarter_4": 20,
                    "over_time": null,
                    "total": 84
                }
            }
        },
        {
            "id": 389838,
            "date": "2024-04-07T00:00:00+00:00",
            "time": "00:00",
            "timestamp": 1712448000,
            "timezone": "UTC",
            "stage": null,
            "week": null,
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 76,
                "name": "BSN",
                "type": "League",
                "season": 2024,
                "logo": "https://media.api-sports.io/basketball/leagues/76.png"
            },
            "country": {
                "id": 36,
                "name": "Puerto Rico",
                "code": "PR",
                "flag": "https://media.api-sports.io/flags/pr.svg"
            },
            "teams": {
                "home": {
                    "id": 3062,
                    "name": "Gigantes de Carolina",
                    "logo": "https://media.api-sports.io/basketball/teams/3062.png"
                },
                "away": {
                    "id": 1644,
                    "name": "Cangrejeros",
                    "logo": "https://media.api-sports.io/basketball/teams/1644.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 23,
                    "quarter_2": 24,
                    "quarter_3": 28,
                    "quarter_4": 21,
                    "over_time": null,
                    "total": 96
                },
                "away": {
                    "quarter_1": 20,
                    "quarter_2": 24,
                    "quarter_3": 22,
                    "quarter_4": 26,
                    "over_time": null,
                    "total": 92
                }
            }
        },
        {
            "id": 390932,
            "date": "2024-04-07T00:00:00+00:00",
            "time": "00:00",
            "timestamp": 1712448000,
            "timezone": "UTC",
            "stage": null,
            "week": null,
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 224,
                "name": "LNB 2",
                "type": "League",
                "season": "2024-2025",
                "logo": "https://media.api-sports.io/basketball/leagues/224.png"
            },
            "country": {
                "id": 53,
                "name": "Chile",
                "code": "CL",
                "flag": "https://media.api-sports.io/flags/cl.svg"
            },
            "teams": {
                "home": {
                    "id": 3582,
                    "name": "Brisas",
                    "logo": "https://media.api-sports.io/basketball/teams/3582.png"
                },
                "away": {
                    "id": 3579,
                    "name": "Arabe Valparaiso",
                    "logo": "https://media.api-sports.io/basketball/teams/3579.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 5,
                    "quarter_2": 14,
                    "quarter_3": 14,
                    "quarter_4": 18,
                    "over_time": null,
                    "total": 51
                },
                "away": {
                    "quarter_1": 18,
                    "quarter_2": 18,
                    "quarter_3": 22,
                    "quarter_4": 15,
                    "over_time": null,
                    "total": 73
                }
            }
        },
        {
            "id": 394969,
            "date": "2024-04-07T00:00:00+00:00",
            "time": "00:00",
            "timestamp": 1712448000,
            "timezone": "UTC",
            "stage": null,
            "week": "Liga Femenina Women - Quarter-finals",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 206,
                "name": "Liga Femenina Women",
                "type": "League",
                "season": 2024,
                "logo": "https://media.api-sports.io/basketball/leagues/206.png"
            },
            "country": {
                "id": 6,
                "name": "Argentina",
                "code": "AR",
                "flag": "https://media.api-sports.io/flags/ar.svg"
            },
            "teams": {
                "home": {
                    "id": 3439,
                    "name": "Quimsa W",
                    "logo": "https://media.api-sports.io/basketball/teams/3439.png"
                },
                "away": {
                    "id": 3438,
                    "name": "Obras Sanitarias W",
                    "logo": "https://media.api-sports.io/basketball/teams/3438.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 12,
                    "quarter_2": 16,
                    "quarter_3": 11,
                    "quarter_4": 17,
                    "over_time": null,
                    "total": 56
                },
                "away": {
                    "quarter_1": 16,
                    "quarter_2": 12,
                    "quarter_3": 18,
                    "quarter_4": 15,
                    "over_time": null,
                    "total": 61
                }
            }
        },
        {
            "id": 394962,
            "date": "2024-04-07T00:49:00+00:00",
            "time": "00:49",
            "timestamp": 1712450940,
            "timezone": "UTC",
            "stage": null,
            "week": "NCAA - Semi-finals",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 116,
                "name": "NCAA",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/116.png"
            },
            "country": {
                "id": 5,
                "name": "USA",
                "code": "US",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "teams": {
                "home": {
                    "id": 5875,
                    "name": "UConn",
                    "logo": "https://media.api-sports.io/basketball/teams/5875.png"
                },
                "away": {
                    "id": 176,
                    "name": "Alabama",
                    "logo": "https://media.api-sports.io/basketball/teams/176.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 0,
                    "quarter_2": 44,
                    "quarter_3": 0,
                    "quarter_4": 42,
                    "over_time": null,
                    "total": 86
                },
                "away": {
                    "quarter_1": 0,
                    "quarter_2": 40,
                    "quarter_3": 0,
                    "quarter_4": 32,
                    "over_time": null,
                    "total": 72
                }
            }
        },
        {
            "id": 373319,
            "date": "2024-04-07T01:00:00+00:00",
            "time": "01:00",
            "timestamp": 1712451600,
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
                    "id": 139,
                    "name": "Denver Nuggets",
                    "logo": "https://media.api-sports.io/basketball/teams/139.png"
                },
                "away": {
                    "id": 132,
                    "name": "Atlanta Hawks",
                    "logo": "https://media.api-sports.io/basketball/teams/132.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 33,
                    "quarter_2": 36,
                    "quarter_3": 42,
                    "quarter_4": 31,
                    "over_time": null,
                    "total": 142
                },
                "away": {
                    "quarter_1": 26,
                    "quarter_2": 30,
                    "quarter_3": 30,
                    "quarter_4": 24,
                    "over_time": null,
                    "total": 110
                }
            }
        },
        {
            "id": 395278,
            "date": "2024-04-07T01:00:00+00:00",
            "time": "01:00",
            "timestamp": 1712451600,
            "timezone": "UTC",
            "stage": null,
            "week": "LMBPF Women - Quarter-finals",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 252,
                "name": "LMBPF Women",
                "type": "League",
                "season": 2024,
                "logo": "https://media.api-sports.io/basketball/leagues/252.png"
            },
            "country": {
                "id": 28,
                "name": "Mexico",
                "code": "MX",
                "flag": "https://media.api-sports.io/flags/mx.svg"
            },
            "teams": {
                "home": {
                    "id": 3862,
                    "name": "Quetzales W",
                    "logo": "https://media.api-sports.io/basketball/teams/3862.png"
                },
                "away": {
                    "id": 6318,
                    "name": "Las Avispas W",
                    "logo": "https://media.api-sports.io/basketball/teams/6318.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 14,
                    "quarter_2": 27,
                    "quarter_3": 23,
                    "quarter_4": 15,
                    "over_time": null,
                    "total": 79
                },
                "away": {
                    "quarter_1": 24,
                    "quarter_2": 13,
                    "quarter_3": 11,
                    "quarter_4": 22,
                    "over_time": null,
                    "total": 70
                }
            }
        },
        {
            "id": 395279,
            "date": "2024-04-07T01:00:00+00:00",
            "time": "01:00",
            "timestamp": 1712451600,
            "timezone": "UTC",
            "stage": null,
            "week": "LMBPF Women - Quarter-finals",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 252,
                "name": "LMBPF Women",
                "type": "League",
                "season": 2024,
                "logo": "https://media.api-sports.io/basketball/leagues/252.png"
            },
            "country": {
                "id": 28,
                "name": "Mexico",
                "code": "MX",
                "flag": "https://media.api-sports.io/flags/mx.svg"
            },
            "teams": {
                "home": {
                    "id": 6321,
                    "name": "Toritas W",
                    "logo": "https://media.api-sports.io/basketball/teams/6321.png"
                },
                "away": {
                    "id": 3860,
                    "name": "Mieleras W",
                    "logo": "https://media.api-sports.io/basketball/teams/3860.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 12,
                    "quarter_2": 14,
                    "quarter_3": 12,
                    "quarter_4": 12,
                    "over_time": null,
                    "total": 50
                },
                "away": {
                    "quarter_1": 26,
                    "quarter_2": 21,
                    "quarter_3": 27,
                    "quarter_4": 18,
                    "over_time": null,
                    "total": 92
                }
            }
        },
        {
            "id": 385417,
            "date": "2024-04-07T01:15:00+00:00",
            "time": "01:15",
            "timestamp": 1712452500,
            "timezone": "UTC",
            "stage": null,
            "week": null,
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 251,
                "name": "CIBACOPA",
                "type": "League",
                "season": 2024,
                "logo": "https://media.api-sports.io/basketball/leagues/251.png"
            },
            "country": {
                "id": 28,
                "name": "Mexico",
                "code": "MX",
                "flag": "https://media.api-sports.io/flags/mx.svg"
            },
            "teams": {
                "home": {
                    "id": 3848,
                    "name": "Venados de Mazatlan",
                    "logo": "https://media.api-sports.io/basketball/teams/3848.png"
                },
                "away": {
                    "id": 3845,
                    "name": "Ostioneros de Guaymas",
                    "logo": "https://media.api-sports.io/basketball/teams/3845.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 33,
                    "quarter_2": 14,
                    "quarter_3": 25,
                    "quarter_4": 23,
                    "over_time": null,
                    "total": 95
                },
                "away": {
                    "quarter_1": 26,
                    "quarter_2": 23,
                    "quarter_3": 21,
                    "quarter_4": 28,
                    "over_time": null,
                    "total": 98
                }
            }
        },
        {
            "id": 386394,
            "date": "2024-04-07T02:00:00+00:00",
            "time": "02:00",
            "timestamp": 1712455200,
            "timezone": "UTC",
            "stage": null,
            "week": null,
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 210,
                "name": "NBL1 South Women",
                "type": "League",
                "season": 2024,
                "logo": "https://media.api-sports.io/basketball/leagues/210.png"
            },
            "country": {
                "id": 1,
                "name": "Australia",
                "code": "AU",
                "flag": "https://media.api-sports.io/flags/au.svg"
            },
            "teams": {
                "home": {
                    "id": 59,
                    "name": "Ballarat W",
                    "logo": "https://media.api-sports.io/basketball/teams/59.png"
                },
                "away": {
                    "id": 57,
                    "name": "Geelong W",
                    "logo": "https://media.api-sports.io/basketball/teams/57.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 25,
                    "quarter_2": 26,
                    "quarter_3": 17,
                    "quarter_4": 27,
                    "over_time": null,
                    "total": 95
                },
                "away": {
                    "quarter_1": 25,
                    "quarter_2": 29,
                    "quarter_3": 22,
                    "quarter_4": 9,
                    "over_time": null,
                    "total": 85
                }
            }
        },
        {
            "id": 386589,
            "date": "2024-04-07T02:00:00+00:00",
            "time": "02:00",
            "timestamp": 1712455200,
            "timezone": "UTC",
            "stage": null,
            "week": null,
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 216,
                "name": "NBL1 East Women",
                "type": "League",
                "season": 2024,
                "logo": "https://media.api-sports.io/basketball/leagues/216.png"
            },
            "country": {
                "id": 1,
                "name": "Australia",
                "code": "AU",
                "flag": "https://media.api-sports.io/flags/au.svg"
            },
            "teams": {
                "home": {
                    "id": 5929,
                    "name": "Hornsby S. W",
                    "logo": "https://media.api-sports.io/basketball/teams/5929.png"
                },
                "away": {
                    "id": 68,
                    "name": "Albury W",
                    "logo": "https://media.api-sports.io/basketball/teams/68.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 10,
                    "quarter_2": 18,
                    "quarter_3": 14,
                    "quarter_4": 8,
                    "over_time": null,
                    "total": 50
                },
                "away": {
                    "quarter_1": 32,
                    "quarter_2": 30,
                    "quarter_3": 17,
                    "quarter_4": 28,
                    "over_time": null,
                    "total": 107
                }
            }
        },
        {
            "id": 395280,
            "date": "2024-04-07T02:00:00+00:00",
            "time": "02:00",
            "timestamp": 1712455200,
            "timezone": "UTC",
            "stage": null,
            "week": "LMBPF Women - Quarter-finals",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 252,
                "name": "LMBPF Women",
                "type": "League",
                "season": 2024,
                "logo": "https://media.api-sports.io/basketball/leagues/252.png"
            },
            "country": {
                "id": 28,
                "name": "Mexico",
                "code": "MX",
                "flag": "https://media.api-sports.io/flags/mx.svg"
            },
            "teams": {
                "home": {
                    "id": 6316,
                    "name": "Cinnamon W",
                    "logo": "https://media.api-sports.io/basketball/teams/6316.png"
                },
                "away": {
                    "id": 6320,
                    "name": "Mineras W",
                    "logo": "https://media.api-sports.io/basketball/teams/6320.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 25,
                    "quarter_2": 13,
                    "quarter_3": 15,
                    "quarter_4": 23,
                    "over_time": null,
                    "total": 76
                },
                "away": {
                    "quarter_1": 20,
                    "quarter_2": 11,
                    "quarter_3": 22,
                    "quarter_4": 12,
                    "over_time": null,
                    "total": 65
                }
            }
        },
        {
            "id": 385416,
            "date": "2024-04-07T02:15:00+00:00",
            "time": "02:15",
            "timestamp": 1712456100,
            "timezone": "UTC",
            "stage": null,
            "week": null,
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 251,
                "name": "CIBACOPA",
                "type": "League",
                "season": 2024,
                "logo": "https://media.api-sports.io/basketball/leagues/251.png"
            },
            "country": {
                "id": 28,
                "name": "Mexico",
                "code": "MX",
                "flag": "https://media.api-sports.io/flags/mx.svg"
            },
            "teams": {
                "home": {
                    "id": 3846,
                    "name": "Pioneros de Los Mochis",
                    "logo": "https://media.api-sports.io/basketball/teams/3846.png"
                },
                "away": {
                    "id": 3847,
                    "name": "Rayos de Hermosillo",
                    "logo": "https://media.api-sports.io/basketball/teams/3847.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 22,
                    "quarter_2": 29,
                    "quarter_3": 19,
                    "quarter_4": 23,
                    "over_time": null,
                    "total": 93
                },
                "away": {
                    "quarter_1": 20,
                    "quarter_2": 19,
                    "quarter_3": 32,
                    "quarter_4": 30,
                    "over_time": null,
                    "total": 101
                }
            }
        },
        {
            "id": 386395,
            "date": "2024-04-07T02:30:00+00:00",
            "time": "02:30",
            "timestamp": 1712457000,
            "timezone": "UTC",
            "stage": null,
            "week": null,
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 210,
                "name": "NBL1 South Women",
                "type": "League",
                "season": 2024,
                "logo": "https://media.api-sports.io/basketball/leagues/210.png"
            },
            "country": {
                "id": 1,
                "name": "Australia",
                "code": "AU",
                "flag": "https://media.api-sports.io/flags/au.svg"
            },
            "teams": {
                "home": {
                    "id": 60,
                    "name": "Frankston W",
                    "logo": "https://media.api-sports.io/basketball/teams/60.png"
                },
                "away": {
                    "id": 63,
                    "name": "Eltham W",
                    "logo": "https://media.api-sports.io/basketball/teams/63.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 17,
                    "quarter_2": 15,
                    "quarter_3": 20,
                    "quarter_4": 14,
                    "over_time": null,
                    "total": 66
                },
                "away": {
                    "quarter_1": 16,
                    "quarter_2": 5,
                    "quarter_3": 25,
                    "quarter_4": 16,
                    "over_time": null,
                    "total": 62
                }
            }
        },
        {
            "id": 386396,
            "date": "2024-04-07T02:30:00+00:00",
            "time": "02:30",
            "timestamp": 1712457000,
            "timezone": "UTC",
            "stage": null,
            "week": null,
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 210,
                "name": "NBL1 South Women",
                "type": "League",
                "season": 2024,
                "logo": "https://media.api-sports.io/basketball/leagues/210.png"
            },
            "country": {
                "id": 1,
                "name": "Australia",
                "code": "AU",
                "flag": "https://media.api-sports.io/flags/au.svg"
            },
            "teams": {
                "home": {
                    "id": 69,
                    "name": "Melbourne Tigers W",
                    "logo": "https://media.api-sports.io/basketball/teams/69.png"
                },
                "away": {
                    "id": 58,
                    "name": "Nunawading W",
                    "logo": "https://media.api-sports.io/basketball/teams/58.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 28,
                    "quarter_2": 22,
                    "quarter_3": 17,
                    "quarter_4": 19,
                    "over_time": null,
                    "total": 86
                },
                "away": {
                    "quarter_1": 23,
                    "quarter_2": 20,
                    "quarter_3": 17,
                    "quarter_4": 19,
                    "over_time": null,
                    "total": 79
                }
            }
        },
        {
            "id": 386397,
            "date": "2024-04-07T02:30:00+00:00",
            "time": "02:30",
            "timestamp": 1712457000,
            "timezone": "UTC",
            "stage": null,
            "week": null,
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 210,
                "name": "NBL1 South Women",
                "type": "League",
                "season": 2024,
                "logo": "https://media.api-sports.io/basketball/leagues/210.png"
            },
            "country": {
                "id": 1,
                "name": "Australia",
                "code": "AU",
                "flag": "https://media.api-sports.io/flags/au.svg"
            },
            "teams": {
                "home": {
                    "id": 61,
                    "name": "Waverley W",
                    "logo": "https://media.api-sports.io/basketball/teams/61.png"
                },
                "away": {
                    "id": 3483,
                    "name": "Mt. Gambier W",
                    "logo": "https://media.api-sports.io/basketball/teams/3483.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 23,
                    "quarter_2": 17,
                    "quarter_3": 21,
                    "quarter_4": 5,
                    "over_time": null,
                    "total": 66
                },
                "away": {
                    "quarter_1": 25,
                    "quarter_2": 18,
                    "quarter_3": 34,
                    "quarter_4": 18,
                    "over_time": null,
                    "total": 95
                }
            }
        },
        {
            "id": 385418,
            "date": "2024-04-07T02:45:00+00:00",
            "time": "02:45",
            "timestamp": 1712457900,
            "timezone": "UTC",
            "stage": null,
            "week": null,
            "status": {
                "long": "After Over Time",
                "short": "AOT",
                "timer": null
            },
            "league": {
                "id": 251,
                "name": "CIBACOPA",
                "type": "League",
                "season": 2024,
                "logo": "https://media.api-sports.io/basketball/leagues/251.png"
            },
            "country": {
                "id": 28,
                "name": "Mexico",
                "code": "MX",
                "flag": "https://media.api-sports.io/flags/mx.svg"
            },
            "teams": {
                "home": {
                    "id": 3849,
                    "name": "Zonkeys de Tijuana",
                    "logo": "https://media.api-sports.io/basketball/teams/3849.png"
                },
                "away": {
                    "id": 819,
                    "name": "Astros",
                    "logo": "https://media.api-sports.io/basketball/teams/819.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 19,
                    "quarter_2": 19,
                    "quarter_3": 27,
                    "quarter_4": 10,
                    "over_time": 17,
                    "total": 92
                },
                "away": {
                    "quarter_1": 15,
                    "quarter_2": 22,
                    "quarter_3": 15,
                    "quarter_4": 23,
                    "over_time": 11,
                    "total": 86
                }
            }
        },
        {
            "id": 385108,
            "date": "2024-04-07T03:00:00+00:00",
            "time": "03:00",
            "timestamp": 1712458800,
            "timezone": "UTC",
            "stage": null,
            "week": null,
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 66,
                "name": "NBL",
                "type": "League",
                "season": 2024,
                "logo": "https://media.api-sports.io/basketball/leagues/66.png"
            },
            "country": {
                "id": 31,
                "name": "New Zealand",
                "code": "NZ",
                "flag": "https://media.api-sports.io/flags/nz.svg"
            },
            "teams": {
                "home": {
                    "id": 2256,
                    "name": "Franklin Bulls",
                    "logo": "https://media.api-sports.io/basketball/teams/2256.png"
                },
                "away": {
                    "id": 854,
                    "name": "Canterbury Rams",
                    "logo": "https://media.api-sports.io/basketball/teams/854.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 17,
                    "quarter_2": 21,
                    "quarter_3": 28,
                    "quarter_4": 27,
                    "over_time": null,
                    "total": 93
                },
                "away": {
                    "quarter_1": 19,
                    "quarter_2": 13,
                    "quarter_3": 18,
                    "quarter_4": 33,
                    "over_time": null,
                    "total": 83
                }
            }
        },
        {
            "id": 386590,
            "date": "2024-04-07T03:00:00+00:00",
            "time": "03:00",
            "timestamp": 1712458800,
            "timezone": "UTC",
            "stage": null,
            "week": null,
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 216,
                "name": "NBL1 East Women",
                "type": "League",
                "season": 2024,
                "logo": "https://media.api-sports.io/basketball/leagues/216.png"
            },
            "country": {
                "id": 1,
                "name": "Australia",
                "code": "AU",
                "flag": "https://media.api-sports.io/flags/au.svg"
            },
            "teams": {
                "home": {
                    "id": 3548,
                    "name": "Maitland Mustangs W",
                    "logo": "https://media.api-sports.io/basketball/teams/3548.png"
                },
                "away": {
                    "id": 3547,
                    "name": "Inner West Bulls W",
                    "logo": "https://media.api-sports.io/basketball/teams/3547.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 22,
                    "quarter_2": 15,
                    "quarter_3": 22,
                    "quarter_4": 22,
                    "over_time": null,
                    "total": 81
                },
                "away": {
                    "quarter_1": 20,
                    "quarter_2": 4,
                    "quarter_3": 11,
                    "quarter_4": 14,
                    "over_time": null,
                    "total": 49
                }
            }
        },
        {
            "id": 386756,
            "date": "2024-04-07T03:00:00+00:00",
            "time": "03:00",
            "timestamp": 1712458800,
            "timezone": "UTC",
            "stage": null,
            "week": null,
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 213,
                "name": "NBL1 West Women",
                "type": "League",
                "season": 2024,
                "logo": "https://media.api-sports.io/basketball/leagues/213.png"
            },
            "country": {
                "id": 1,
                "name": "Australia",
                "code": "AU",
                "flag": "https://media.api-sports.io/flags/au.svg"
            },
            "teams": {
                "home": {
                    "id": 3515,
                    "name": "Rockingham Flames W",
                    "logo": "https://media.api-sports.io/basketball/teams/3515.png"
                },
                "away": {
                    "id": 3508,
                    "name": "Goldfields Giants W",
                    "logo": "https://media.api-sports.io/basketball/teams/3508.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 28,
                    "quarter_2": 35,
                    "quarter_3": 25,
                    "quarter_4": 28,
                    "over_time": null,
                    "total": 116
                },
                "away": {
                    "quarter_1": 14,
                    "quarter_2": 8,
                    "quarter_3": 11,
                    "quarter_4": 12,
                    "over_time": null,
                    "total": 45
                }
            }
        },
        {
            "id": 394993,
            "date": "2024-04-07T03:00:00+00:00",
            "time": "03:00",
            "timestamp": 1712458800,
            "timezone": "UTC",
            "stage": null,
            "week": "W League Women - Semi-finals",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 246,
                "name": "W League Women",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/246.png"
            },
            "country": {
                "id": 24,
                "name": "Japan",
                "code": "JP",
                "flag": "https://media.api-sports.io/flags/jp.svg"
            },
            "teams": {
                "home": {
                    "id": 3799,
                    "name": "Denso Iris W",
                    "logo": "https://media.api-sports.io/basketball/teams/3799.png"
                },
                "away": {
                    "id": 3800,
                    "name": "Eneos Sunflowers W",
                    "logo": "https://media.api-sports.io/basketball/teams/3800.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 21,
                    "quarter_2": 23,
                    "quarter_3": 15,
                    "quarter_4": 23,
                    "over_time": null,
                    "total": 82
                },
                "away": {
                    "quarter_1": 15,
                    "quarter_2": 23,
                    "quarter_3": 13,
                    "quarter_4": 15,
                    "over_time": null,
                    "total": 66
                }
            }
        },
        {
            "id": 385415,
            "date": "2024-04-07T03:15:00+00:00",
            "time": "03:15",
            "timestamp": 1712459700,
            "timezone": "UTC",
            "stage": null,
            "week": null,
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 251,
                "name": "CIBACOPA",
                "type": "League",
                "season": 2024,
                "logo": "https://media.api-sports.io/basketball/leagues/251.png"
            },
            "country": {
                "id": 28,
                "name": "Mexico",
                "code": "MX",
                "flag": "https://media.api-sports.io/flags/mx.svg"
            },
            "teams": {
                "home": {
                    "id": 3844,
                    "name": "Halcones de Obregon",
                    "logo": "https://media.api-sports.io/basketball/teams/3844.png"
                },
                "away": {
                    "id": 3843,
                    "name": "Caballeros de Culiacan",
                    "logo": "https://media.api-sports.io/basketball/teams/3843.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 23,
                    "quarter_2": 30,
                    "quarter_3": 38,
                    "quarter_4": 28,
                    "over_time": null,
                    "total": 119
                },
                "away": {
                    "quarter_1": 19,
                    "quarter_2": 13,
                    "quarter_3": 29,
                    "quarter_4": 26,
                    "over_time": null,
                    "total": 87
                }
            }
        },
        {
            "id": 385635,
            "date": "2024-04-07T04:00:00+00:00",
            "time": "04:00",
            "timestamp": 1712462400,
            "timezone": "UTC",
            "stage": null,
            "week": null,
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 215,
                "name": "NBL1 East",
                "type": "League",
                "season": 2024,
                "logo": "https://media.api-sports.io/basketball/leagues/215.png"
            },
            "country": {
                "id": 1,
                "name": "Australia",
                "code": "AU",
                "flag": "https://media.api-sports.io/flags/au.svg"
            },
            "teams": {
                "home": {
                    "id": 5925,
                    "name": "Hornsby S.",
                    "logo": "https://media.api-sports.io/basketball/teams/5925.png"
                },
                "away": {
                    "id": 3479,
                    "name": "Albury-Wodonga Bandits",
                    "logo": "https://media.api-sports.io/basketball/teams/3479.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 18,
                    "quarter_2": 24,
                    "quarter_3": 22,
                    "quarter_4": 18,
                    "over_time": null,
                    "total": 82
                },
                "away": {
                    "quarter_1": 17,
                    "quarter_2": 28,
                    "quarter_3": 28,
                    "quarter_4": 18,
                    "over_time": null,
                    "total": 91
                }
            }
        },
        {
            "id": 385800,
            "date": "2024-04-07T04:00:00+00:00",
            "time": "04:00",
            "timestamp": 1712462400,
            "timezone": "UTC",
            "stage": null,
            "week": null,
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 209,
                "name": "NBL1 South",
                "type": "League",
                "season": 2024,
                "logo": "https://media.api-sports.io/basketball/leagues/209.png"
            },
            "country": {
                "id": 1,
                "name": "Australia",
                "code": "AU",
                "flag": "https://media.api-sports.io/flags/au.svg"
            },
            "teams": {
                "home": {
                    "id": 43,
                    "name": "Ballarat",
                    "logo": "https://media.api-sports.io/basketball/teams/43.png"
                },
                "away": {
                    "id": 38,
                    "name": "Geelong",
                    "logo": "https://media.api-sports.io/basketball/teams/38.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 18,
                    "quarter_2": 25,
                    "quarter_3": 19,
                    "quarter_4": 17,
                    "over_time": null,
                    "total": 79
                },
                "away": {
                    "quarter_1": 18,
                    "quarter_2": 18,
                    "quarter_3": 23,
                    "quarter_4": 22,
                    "over_time": null,
                    "total": 81
                }
            }
        },
        {
            "id": 392508,
            "date": "2024-04-07T04:00:00+00:00",
            "time": "04:00",
            "timestamp": 1712462400,
            "timezone": "UTC",
            "stage": null,
            "week": null,
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 407,
                "name": "B2.League",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/407.png"
            },
            "country": {
                "id": 24,
                "name": "Japan",
                "code": "JP",
                "flag": "https://media.api-sports.io/flags/jp.svg"
            },
            "teams": {
                "home": {
                    "id": 2977,
                    "name": "Iwate",
                    "logo": "https://media.api-sports.io/basketball/teams/2977.png"
                },
                "away": {
                    "id": 6349,
                    "name": "Altiri Chiba",
                    "logo": "https://media.api-sports.io/basketball/teams/6349.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 12,
                    "quarter_2": 16,
                    "quarter_3": 18,
                    "quarter_4": 18,
                    "over_time": null,
                    "total": 64
                },
                "away": {
                    "quarter_1": 18,
                    "quarter_2": 20,
                    "quarter_3": 18,
                    "quarter_4": 17,
                    "over_time": null,
                    "total": 73
                }
            }
        },
        {
            "id": 385801,
            "date": "2024-04-07T04:30:00+00:00",
            "time": "04:30",
            "timestamp": 1712464200,
            "timezone": "UTC",
            "stage": null,
            "week": null,
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 209,
                "name": "NBL1 South",
                "type": "League",
                "season": 2024,
                "logo": "https://media.api-sports.io/basketball/leagues/209.png"
            },
            "country": {
                "id": 1,
                "name": "Australia",
                "code": "AU",
                "flag": "https://media.api-sports.io/flags/au.svg"
            },
            "teams": {
                "home": {
                    "id": 44,
                    "name": "Frankston",
                    "logo": "https://media.api-sports.io/basketball/teams/44.png"
                },
                "away": {
                    "id": 47,
                    "name": "Eltham",
                    "logo": "https://media.api-sports.io/basketball/teams/47.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 29,
                    "quarter_2": 27,
                    "quarter_3": 25,
                    "quarter_4": 23,
                    "over_time": null,
                    "total": 104
                },
                "away": {
                    "quarter_1": 21,
                    "quarter_2": 22,
                    "quarter_3": 33,
                    "quarter_4": 15,
                    "over_time": null,
                    "total": 91
                }
            }
        },
        {
            "id": 385802,
            "date": "2024-04-07T04:30:00+00:00",
            "time": "04:30",
            "timestamp": 1712464200,
            "timezone": "UTC",
            "stage": null,
            "week": null,
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 209,
                "name": "NBL1 South",
                "type": "League",
                "season": 2024,
                "logo": "https://media.api-sports.io/basketball/leagues/209.png"
            },
            "country": {
                "id": 1,
                "name": "Australia",
                "code": "AU",
                "flag": "https://media.api-sports.io/flags/au.svg"
            },
            "teams": {
                "home": {
                    "id": 52,
                    "name": "Melbourne Tigers",
                    "logo": "https://media.api-sports.io/basketball/teams/52.png"
                },
                "away": {
                    "id": 39,
                    "name": "Nunawading",
                    "logo": "https://media.api-sports.io/basketball/teams/39.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 18,
                    "quarter_2": 21,
                    "quarter_3": 21,
                    "quarter_4": 14,
                    "over_time": null,
                    "total": 74
                },
                "away": {
                    "quarter_1": 18,
                    "quarter_2": 29,
                    "quarter_3": 16,
                    "quarter_4": 26,
                    "over_time": null,
                    "total": 89
                }
            }
        },
        {
            "id": 385803,
            "date": "2024-04-07T04:30:00+00:00",
            "time": "04:30",
            "timestamp": 1712464200,
            "timezone": "UTC",
            "stage": null,
            "week": null,
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 209,
                "name": "NBL1 South",
                "type": "League",
                "season": 2024,
                "logo": "https://media.api-sports.io/basketball/leagues/209.png"
            },
            "country": {
                "id": 1,
                "name": "Australia",
                "code": "AU",
                "flag": "https://media.api-sports.io/flags/au.svg"
            },
            "teams": {
                "home": {
                    "id": 45,
                    "name": "Waverley",
                    "logo": "https://media.api-sports.io/basketball/teams/45.png"
                },
                "away": {
                    "id": 2957,
                    "name": "Mt Gambier",
                    "logo": "https://media.api-sports.io/basketball/teams/2957.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 17,
                    "quarter_2": 17,
                    "quarter_3": 9,
                    "quarter_4": 20,
                    "over_time": null,
                    "total": 63
                },
                "away": {
                    "quarter_1": 18,
                    "quarter_2": 16,
                    "quarter_3": 16,
                    "quarter_4": 17,
                    "over_time": null,
                    "total": 67
                }
            }
        },
        {
            "id": 392509,
            "date": "2024-04-07T04:30:00+00:00",
            "time": "04:30",
            "timestamp": 1712464200,
            "timezone": "UTC",
            "stage": null,
            "week": null,
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 407,
                "name": "B2.League",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/407.png"
            },
            "country": {
                "id": 24,
                "name": "Japan",
                "code": "JP",
                "flag": "https://media.api-sports.io/flags/jp.svg"
            },
            "teams": {
                "home": {
                    "id": 2974,
                    "name": "Fukushima",
                    "logo": "https://media.api-sports.io/basketball/teams/2974.png"
                },
                "away": {
                    "id": 6352,
                    "name": "Koshigaya Alphas",
                    "logo": "https://media.api-sports.io/basketball/teams/6352.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 14,
                    "quarter_2": 23,
                    "quarter_3": 26,
                    "quarter_4": 12,
                    "over_time": null,
                    "total": 75
                },
                "away": {
                    "quarter_1": 23,
                    "quarter_2": 22,
                    "quarter_3": 28,
                    "quarter_4": 28,
                    "over_time": null,
                    "total": 101
                }
            }
        },
        {
            "id": 373881,
            "date": "2024-04-07T04:35:00+00:00",
            "time": "04:35",
            "timestamp": 1712464500,
            "timezone": "UTC",
            "stage": null,
            "week": null,
            "status": {
                "long": "After Over Time",
                "short": "AOT",
                "timer": null
            },
            "league": {
                "id": 56,
                "name": "B League",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/56.png"
            },
            "country": {
                "id": 24,
                "name": "Japan",
                "code": "JP",
                "flag": "https://media.api-sports.io/flags/jp.svg"
            },
            "teams": {
                "home": {
                    "id": 761,
                    "name": "Shimane",
                    "logo": "https://media.api-sports.io/basketball/teams/761.png"
                },
                "away": {
                    "id": 1586,
                    "name": "Sendai",
                    "logo": "https://media.api-sports.io/basketball/teams/1586.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 19,
                    "quarter_2": 26,
                    "quarter_3": 18,
                    "quarter_4": 18,
                    "over_time": 11,
                    "total": 92
                },
                "away": {
                    "quarter_1": 13,
                    "quarter_2": 25,
                    "quarter_3": 27,
                    "quarter_4": 16,
                    "over_time": 14,
                    "total": 95
                }
            }
        },
        {
            "id": 385636,
            "date": "2024-04-07T05:00:00+00:00",
            "time": "05:00",
            "timestamp": 1712466000,
            "timezone": "UTC",
            "stage": null,
            "week": null,
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 215,
                "name": "NBL1 East",
                "type": "League",
                "season": 2024,
                "logo": "https://media.api-sports.io/basketball/leagues/215.png"
            },
            "country": {
                "id": 1,
                "name": "Australia",
                "code": "AU",
                "flag": "https://media.api-sports.io/flags/au.svg"
            },
            "teams": {
                "home": {
                    "id": 3537,
                    "name": "Maitland M.",
                    "logo": "https://media.api-sports.io/basketball/teams/3537.png"
                },
                "away": {
                    "id": 3536,
                    "name": "Inner West Bulls",
                    "logo": "https://media.api-sports.io/basketball/teams/3536.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 24,
                    "quarter_2": 21,
                    "quarter_3": 30,
                    "quarter_4": 26,
                    "over_time": null,
                    "total": 101
                },
                "away": {
                    "quarter_1": 19,
                    "quarter_2": 12,
                    "quarter_3": 24,
                    "quarter_4": 24,
                    "over_time": null,
                    "total": 79
                }
            }
        },
        {
            "id": 386093,
            "date": "2024-04-07T05:00:00+00:00",
            "time": "05:00",
            "timestamp": 1712466000,
            "timezone": "UTC",
            "stage": null,
            "week": null,
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 214,
                "name": "NBL1 West",
                "type": "League",
                "season": 2024,
                "logo": "https://media.api-sports.io/basketball/leagues/214.png"
            },
            "country": {
                "id": 1,
                "name": "Australia",
                "code": "AU",
                "flag": "https://media.api-sports.io/flags/au.svg"
            },
            "teams": {
                "home": {
                    "id": 3529,
                    "name": "Rockingham Flames",
                    "logo": "https://media.api-sports.io/basketball/teams/3529.png"
                },
                "away": {
                    "id": 3522,
                    "name": "Goldfields Giants",
                    "logo": "https://media.api-sports.io/basketball/teams/3522.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 18,
                    "quarter_2": 19,
                    "quarter_3": 28,
                    "quarter_4": 22,
                    "over_time": null,
                    "total": 87
                },
                "away": {
                    "quarter_1": 19,
                    "quarter_2": 25,
                    "quarter_3": 18,
                    "quarter_4": 16,
                    "over_time": null,
                    "total": 78
                }
            }
        },
        {
            "id": 392510,
            "date": "2024-04-07T05:00:00+00:00",
            "time": "05:00",
            "timestamp": 1712466000,
            "timezone": "UTC",
            "stage": null,
            "week": null,
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 407,
                "name": "B2.League",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/407.png"
            },
            "country": {
                "id": 24,
                "name": "Japan",
                "code": "JP",
                "flag": "https://media.api-sports.io/flags/jp.svg"
            },
            "teams": {
                "home": {
                    "id": 1583,
                    "name": "Kumamoto",
                    "logo": "https://media.api-sports.io/basketball/teams/1583.png"
                },
                "away": {
                    "id": 6350,
                    "name": "Ehime Orange Vikings",
                    "logo": "https://media.api-sports.io/basketball/teams/6350.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 18,
                    "quarter_2": 24,
                    "quarter_3": 16,
                    "quarter_4": 23,
                    "over_time": null,
                    "total": 81
                },
                "away": {
                    "quarter_1": 23,
                    "quarter_2": 22,
                    "quarter_3": 20,
                    "quarter_4": 23,
                    "over_time": null,
                    "total": 88
                }
            }
        },
        {
            "id": 392511,
            "date": "2024-04-07T05:00:00+00:00",
            "time": "05:00",
            "timestamp": 1712466000,
            "timezone": "UTC",
            "stage": null,
            "week": null,
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 407,
                "name": "B2.League",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/407.png"
            },
            "country": {
                "id": 24,
                "name": "Japan",
                "code": "JP",
                "flag": "https://media.api-sports.io/flags/jp.svg"
            },
            "teams": {
                "home": {
                    "id": 2979,
                    "name": "Nara",
                    "logo": "https://media.api-sports.io/basketball/teams/2979.png"
                },
                "away": {
                    "id": 6351,
                    "name": "Kobe",
                    "logo": "https://media.api-sports.io/basketball/teams/6351.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 26,
                    "quarter_2": 16,
                    "quarter_3": 14,
                    "quarter_4": 23,
                    "over_time": null,
                    "total": 79
                },
                "away": {
                    "quarter_1": 21,
                    "quarter_2": 20,
                    "quarter_3": 16,
                    "quarter_4": 15,
                    "over_time": null,
                    "total": 72
                }
            }
        },
        {
            "id": 394602,
            "date": "2024-04-07T05:00:00+00:00",
            "time": "05:00",
            "timestamp": 1712466000,
            "timezone": "UTC",
            "stage": null,
            "week": null,
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 268,
                "name": "WSBL Women",
                "type": "League",
                "season": 2024,
                "logo": "https://media.api-sports.io/basketball/leagues/268.png"
            },
            "country": {
                "id": 68,
                "name": "Taiwan",
                "code": "TW",
                "flag": "https://media.api-sports.io/flags/tw.svg"
            },
            "teams": {
                "home": {
                    "id": 3950,
                    "name": "Chunghua Telecom W",
                    "logo": "https://media.api-sports.io/basketball/teams/3950.png"
                },
                "away": {
                    "id": 3951,
                    "name": "Taipower W",
                    "logo": "https://media.api-sports.io/basketball/teams/3951.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 10,
                    "quarter_2": 17,
                    "quarter_3": 10,
                    "quarter_4": 14,
                    "over_time": null,
                    "total": 51
                },
                "away": {
                    "quarter_1": 18,
                    "quarter_2": 14,
                    "quarter_3": 11,
                    "quarter_4": 23,
                    "over_time": null,
                    "total": 66
                }
            }
        },
        {
            "id": 394994,
            "date": "2024-04-07T05:00:00+00:00",
            "time": "05:00",
            "timestamp": 1712466000,
            "timezone": "UTC",
            "stage": null,
            "week": "W League Women - Semi-finals",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 246,
                "name": "W League Women",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/246.png"
            },
            "country": {
                "id": 24,
                "name": "Japan",
                "code": "JP",
                "flag": "https://media.api-sports.io/flags/jp.svg"
            },
            "teams": {
                "home": {
                    "id": 3801,
                    "name": "Fujitsu W",
                    "logo": "https://media.api-sports.io/basketball/teams/3801.png"
                },
                "away": {
                    "id": 3798,
                    "name": "Chanson V-Magic W",
                    "logo": "https://media.api-sports.io/basketball/teams/3798.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 23,
                    "quarter_2": 12,
                    "quarter_3": 22,
                    "quarter_4": 13,
                    "over_time": null,
                    "total": 70
                },
                "away": {
                    "quarter_1": 6,
                    "quarter_2": 24,
                    "quarter_3": 19,
                    "quarter_4": 22,
                    "over_time": null,
                    "total": 71
                }
            }
        },
        {
            "id": 395189,
            "date": "2024-04-07T05:00:00+00:00",
            "time": "05:00",
            "timestamp": 1712466000,
            "timezone": "UTC",
            "stage": null,
            "week": null,
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 396,
                "name": "Higher League",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/396.png"
            },
            "country": {
                "id": 25,
                "name": "Kazakhstan",
                "code": "KZ",
                "flag": "https://media.api-sports.io/flags/kz.svg"
            },
            "teams": {
                "home": {
                    "id": 772,
                    "name": "Atyrau 2",
                    "logo": "https://media.api-sports.io/basketball/teams/772.png"
                },
                "away": {
                    "id": 6006,
                    "name": "Tigers-KazATU",
                    "logo": "https://media.api-sports.io/basketball/teams/6006.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": null,
                    "quarter_2": null,
                    "quarter_3": null,
                    "quarter_4": null,
                    "over_time": null,
                    "total": 0
                },
                "away": {
                    "quarter_1": null,
                    "quarter_2": null,
                    "quarter_3": null,
                    "quarter_4": null,
                    "over_time": null,
                    "total": 20
                }
            }
        },
        {
            "id": 395190,
            "date": "2024-04-07T05:00:00+00:00",
            "time": "05:00",
            "timestamp": 1712466000,
            "timezone": "UTC",
            "stage": null,
            "week": null,
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 396,
                "name": "Higher League",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/396.png"
            },
            "country": {
                "id": 25,
                "name": "Kazakhstan",
                "code": "KZ",
                "flag": "https://media.api-sports.io/flags/kz.svg"
            },
            "teams": {
                "home": {
                    "id": 3212,
                    "name": "Shymkent",
                    "logo": "https://media.api-sports.io/basketball/teams/3212.png"
                },
                "away": {
                    "id": 6004,
                    "name": "Altay",
                    "logo": "https://media.api-sports.io/basketball/teams/6004.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": null,
                    "quarter_2": null,
                    "quarter_3": null,
                    "quarter_4": null,
                    "over_time": null,
                    "total": 20
                },
                "away": {
                    "quarter_1": null,
                    "quarter_2": null,
                    "quarter_3": null,
                    "quarter_4": null,
                    "over_time": null,
                    "total": 0
                }
            }
        },
        {
            "id": 373880,
            "date": "2024-04-07T05:05:00+00:00",
            "time": "05:05",
            "timestamp": 1712466300,
            "timezone": "UTC",
            "stage": null,
            "week": null,
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 56,
                "name": "B League",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/56.png"
            },
            "country": {
                "id": 24,
                "name": "Japan",
                "code": "JP",
                "flag": "https://media.api-sports.io/flags/jp.svg"
            },
            "teams": {
                "home": {
                    "id": 2260,
                    "name": "Sun Rockers Shibuya",
                    "logo": "https://media.api-sports.io/basketball/teams/2260.png"
                },
                "away": {
                    "id": 754,
                    "name": "Kyoto",
                    "logo": "https://media.api-sports.io/basketball/teams/754.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 19,
                    "quarter_2": 22,
                    "quarter_3": 20,
                    "quarter_4": 27,
                    "over_time": null,
                    "total": 88
                },
                "away": {
                    "quarter_1": 24,
                    "quarter_2": 20,
                    "quarter_3": 23,
                    "quarter_4": 14,
                    "over_time": null,
                    "total": 81
                }
            }
        },
        {
            "id": 373886,
            "date": "2024-04-07T05:05:00+00:00",
            "time": "05:05",
            "timestamp": 1712466300,
            "timezone": "UTC",
            "stage": null,
            "week": null,
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 56,
                "name": "B League",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/56.png"
            },
            "country": {
                "id": 24,
                "name": "Japan",
                "code": "JP",
                "flag": "https://media.api-sports.io/flags/jp.svg"
            },
            "teams": {
                "home": {
                    "id": 753,
                    "name": "Hokkaido",
                    "logo": "https://media.api-sports.io/basketball/teams/753.png"
                },
                "away": {
                    "id": 6034,
                    "name": "Nagasaki",
                    "logo": "https://media.api-sports.io/basketball/teams/6034.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 16,
                    "quarter_2": 13,
                    "quarter_3": 21,
                    "quarter_4": 15,
                    "over_time": null,
                    "total": 65
                },
                "away": {
                    "quarter_1": 25,
                    "quarter_2": 18,
                    "quarter_3": 27,
                    "quarter_4": 16,
                    "over_time": null,
                    "total": 86
                }
            }
        },
        {
            "id": 380265,
            "date": "2024-04-07T06:00:00+00:00",
            "time": "06:00",
            "timestamp": 1712469600,
            "timezone": "UTC",
            "stage": null,
            "week": null,
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 402,
                "name": "T1 League",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/402.png"
            },
            "country": {
                "id": 68,
                "name": "Taiwan",
                "code": "TW",
                "flag": "https://media.api-sports.io/flags/tw.svg"
            },
            "teams": {
                "home": {
                    "id": 6020,
                    "name": "Tainan TSG GhostHawks",
                    "logo": "https://media.api-sports.io/basketball/teams/6020.png"
                },
                "away": {
                    "id": 6322,
                    "name": "Taiwan Beer Leopards",
                    "logo": "https://media.api-sports.io/basketball/teams/6322.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 21,
                    "quarter_2": 16,
                    "quarter_3": 16,
                    "quarter_4": 32,
                    "over_time": null,
                    "total": 85
                },
                "away": {
                    "quarter_1": 21,
                    "quarter_2": 27,
                    "quarter_3": 33,
                    "quarter_4": 24,
                    "over_time": null,
                    "total": 105
                }
            }
        },
        {
            "id": 390653,
            "date": "2024-04-07T06:00:00+00:00",
            "time": "06:00",
            "timestamp": 1712469600,
            "timezone": "UTC",
            "stage": null,
            "week": null,
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 396,
                "name": "Higher League",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/396.png"
            },
            "country": {
                "id": 25,
                "name": "Kazakhstan",
                "code": "KZ",
                "flag": "https://media.api-sports.io/flags/kz.svg"
            },
            "teams": {
                "home": {
                    "id": 3208,
                    "name": "ChelSU Kostanay",
                    "logo": "https://media.api-sports.io/basketball/teams/3208.png"
                },
                "away": {
                    "id": 2353,
                    "name": "Karaganda",
                    "logo": "https://media.api-sports.io/basketball/teams/2353.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 21,
                    "quarter_2": 14,
                    "quarter_3": 25,
                    "quarter_4": 17,
                    "over_time": null,
                    "total": 77
                },
                "away": {
                    "quarter_1": 25,
                    "quarter_2": 15,
                    "quarter_3": 17,
                    "quarter_4": 17,
                    "over_time": null,
                    "total": 74
                }
            }
        },
        {
            "id": 392512,
            "date": "2024-04-07T06:00:00+00:00",
            "time": "06:00",
            "timestamp": 1712469600,
            "timezone": "UTC",
            "stage": null,
            "week": null,
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 407,
                "name": "B2.League",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/407.png"
            },
            "country": {
                "id": 24,
                "name": "Japan",
                "code": "JP",
                "flag": "https://media.api-sports.io/flags/jp.svg"
            },
            "teams": {
                "home": {
                    "id": 6353,
                    "name": "Shizuoka",
                    "logo": "https://media.api-sports.io/basketball/teams/6353.png"
                },
                "away": {
                    "id": 2972,
                    "name": "Aomori",
                    "logo": "https://media.api-sports.io/basketball/teams/2972.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 23,
                    "quarter_2": 12,
                    "quarter_3": 20,
                    "quarter_4": 24,
                    "over_time": null,
                    "total": 79
                },
                "away": {
                    "quarter_1": 26,
                    "quarter_2": 23,
                    "quarter_3": 20,
                    "quarter_4": 27,
                    "over_time": null,
                    "total": 96
                }
            }
        },
        {
            "id": 394878,
            "date": "2024-04-07T06:00:00+00:00",
            "time": "06:00",
            "timestamp": 1712469600,
            "timezone": "UTC",
            "stage": null,
            "week": null,
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 83,
                "name": "Premier League W",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/83.png"
            },
            "country": {
                "id": 39,
                "name": "Russia",
                "code": "RU",
                "flag": "https://media.api-sports.io/flags/ru.svg"
            },
            "teams": {
                "home": {
                    "id": 1004,
                    "name": "Novosibirsk W",
                    "logo": "https://media.api-sports.io/basketball/teams/1004.png"
                },
                "away": {
                    "id": 998,
                    "name": "Dynamo Moscow W",
                    "logo": "https://media.api-sports.io/basketball/teams/998.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 25,
                    "quarter_2": 29,
                    "quarter_3": 18,
                    "quarter_4": 17,
                    "over_time": null,
                    "total": 89
                },
                "away": {
                    "quarter_1": 22,
                    "quarter_2": 9,
                    "quarter_3": 28,
                    "quarter_4": 18,
                    "over_time": null,
                    "total": 77
                }
            }
        },
        {
            "id": 373883,
            "date": "2024-04-07T06:05:00+00:00",
            "time": "06:05",
            "timestamp": 1712469900,
            "timezone": "UTC",
            "stage": null,
            "week": null,
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 56,
                "name": "B League",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/56.png"
            },
            "country": {
                "id": 24,
                "name": "Japan",
                "code": "JP",
                "flag": "https://media.api-sports.io/flags/jp.svg"
            },
            "teams": {
                "home": {
                    "id": 755,
                    "name": "NeoPhoenix",
                    "logo": "https://media.api-sports.io/basketball/teams/755.png"
                },
                "away": {
                    "id": 757,
                    "name": "Osaka",
                    "logo": "https://media.api-sports.io/basketball/teams/757.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 22,
                    "quarter_2": 35,
                    "quarter_3": 19,
                    "quarter_4": 25,
                    "over_time": null,
                    "total": 101
                },
                "away": {
                    "quarter_1": 19,
                    "quarter_2": 24,
                    "quarter_3": 18,
                    "quarter_4": 20,
                    "over_time": null,
                    "total": 81
                }
            }
        },
        {
            "id": 373884,
            "date": "2024-04-07T06:05:00+00:00",
            "time": "06:05",
            "timestamp": 1712469900,
            "timezone": "UTC",
            "stage": null,
            "week": null,
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 56,
                "name": "B League",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/56.png"
            },
            "country": {
                "id": 24,
                "name": "Japan",
                "code": "JP",
                "flag": "https://media.api-sports.io/flags/jp.svg"
            },
            "teams": {
                "home": {
                    "id": 764,
                    "name": "Utsunomiya Brex",
                    "logo": "https://media.api-sports.io/basketball/teams/764.png"
                },
                "away": {
                    "id": 748,
                    "name": "Akita",
                    "logo": "https://media.api-sports.io/basketball/teams/748.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 21,
                    "quarter_2": 27,
                    "quarter_3": 16,
                    "quarter_4": 21,
                    "over_time": null,
                    "total": 85
                },
                "away": {
                    "quarter_1": 29,
                    "quarter_2": 13,
                    "quarter_3": 24,
                    "quarter_4": 16,
                    "over_time": null,
                    "total": 82
                }
            }
        },
        {
            "id": 373885,
            "date": "2024-04-07T06:05:00+00:00",
            "time": "06:05",
            "timestamp": 1712469900,
            "timezone": "UTC",
            "stage": null,
            "week": null,
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 56,
                "name": "B League",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/56.png"
            },
            "country": {
                "id": 24,
                "name": "Japan",
                "code": "JP",
                "flag": "https://media.api-sports.io/flags/jp.svg"
            },
            "teams": {
                "home": {
                    "id": 3061,
                    "name": "Ibaraki Robots",
                    "logo": "https://media.api-sports.io/basketball/teams/3061.png"
                },
                "away": {
                    "id": 765,
                    "name": "Yokohama",
                    "logo": "https://media.api-sports.io/basketball/teams/765.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 30,
                    "quarter_2": 23,
                    "quarter_3": 17,
                    "quarter_4": 25,
                    "over_time": null,
                    "total": 95
                },
                "away": {
                    "quarter_1": 27,
                    "quarter_2": 17,
                    "quarter_3": 22,
                    "quarter_4": 28,
                    "over_time": null,
                    "total": 94
                }
            }
        },
        {
            "id": 373887,
            "date": "2024-04-07T06:05:00+00:00",
            "time": "06:05",
            "timestamp": 1712469900,
            "timezone": "UTC",
            "stage": null,
            "week": null,
            "status": {
                "long": "After Over Time",
                "short": "AOT",
                "timer": null
            },
            "league": {
                "id": 56,
                "name": "B League",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/56.png"
            },
            "country": {
                "id": 24,
                "name": "Japan",
                "code": "JP",
                "flag": "https://media.api-sports.io/flags/jp.svg"
            },
            "teams": {
                "home": {
                    "id": 2975,
                    "name": "Gunma",
                    "logo": "https://media.api-sports.io/basketball/teams/2975.png"
                },
                "away": {
                    "id": 2259,
                    "name": "Shinshu",
                    "logo": "https://media.api-sports.io/basketball/teams/2259.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 24,
                    "quarter_2": 21,
                    "quarter_3": 21,
                    "quarter_4": 13,
                    "over_time": 10,
                    "total": 89
                },
                "away": {
                    "quarter_1": 15,
                    "quarter_2": 26,
                    "quarter_3": 13,
                    "quarter_4": 25,
                    "over_time": 6,
                    "total": 85
                }
            }
        },
        {
            "id": 373888,
            "date": "2024-04-07T06:05:00+00:00",
            "time": "06:05",
            "timestamp": 1712469900,
            "timezone": "UTC",
            "stage": null,
            "week": null,
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 56,
                "name": "B League",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/56.png"
            },
            "country": {
                "id": 24,
                "name": "Japan",
                "code": "JP",
                "flag": "https://media.api-sports.io/flags/jp.svg"
            },
            "teams": {
                "home": {
                    "id": 752,
                    "name": "Diamond Dolphins",
                    "logo": "https://media.api-sports.io/basketball/teams/752.png"
                },
                "away": {
                    "id": 6035,
                    "name": "Saga",
                    "logo": "https://media.api-sports.io/basketball/teams/6035.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 26,
                    "quarter_2": 20,
                    "quarter_3": 24,
                    "quarter_4": 18,
                    "over_time": null,
                    "total": 88
                },
                "away": {
                    "quarter_1": 25,
                    "quarter_2": 16,
                    "quarter_3": 22,
                    "quarter_4": 16,
                    "over_time": null,
                    "total": 79
                }
            }
        },
        {
            "id": 373890,
            "date": "2024-04-07T06:05:00+00:00",
            "time": "06:05",
            "timestamp": 1712469900,
            "timezone": "UTC",
            "stage": null,
            "week": null,
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 56,
                "name": "B League",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/56.png"
            },
            "country": {
                "id": 24,
                "name": "Japan",
                "code": "JP",
                "flag": "https://media.api-sports.io/flags/jp.svg"
            },
            "teams": {
                "home": {
                    "id": 749,
                    "name": "Alvark",
                    "logo": "https://media.api-sports.io/basketball/teams/749.png"
                },
                "away": {
                    "id": 759,
                    "name": "SeaHorses Mikawa",
                    "logo": "https://media.api-sports.io/basketball/teams/759.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 27,
                    "quarter_2": 14,
                    "quarter_3": 13,
                    "quarter_4": 11,
                    "over_time": null,
                    "total": 65
                },
                "away": {
                    "quarter_1": 17,
                    "quarter_2": 15,
                    "quarter_3": 11,
                    "quarter_4": 18,
                    "over_time": null,
                    "total": 61
                }
            }
        },
        {
            "id": 380163,
            "date": "2024-04-07T06:30:00+00:00",
            "time": "06:30",
            "timestamp": 1712471400,
            "timezone": "UTC",
            "stage": null,
            "week": null,
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 403,
                "name": "P. League+",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/403.png"
            },
            "country": {
                "id": 68,
                "name": "Taiwan",
                "code": "TW",
                "flag": "https://media.api-sports.io/flags/tw.svg"
            },
            "teams": {
                "home": {
                    "id": 6023,
                    "name": "Hsinchu Jko Lioneers",
                    "logo": "https://media.api-sports.io/basketball/teams/6023.png"
                },
                "away": {
                    "id": 77,
                    "name": "Formosa Dreamers",
                    "logo": "https://media.api-sports.io/basketball/teams/77.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 30,
                    "quarter_2": 26,
                    "quarter_3": 17,
                    "quarter_4": 25,
                    "over_time": null,
                    "total": 98
                },
                "away": {
                    "quarter_1": 20,
                    "quarter_2": 23,
                    "quarter_3": 14,
                    "quarter_4": 39,
                    "over_time": null,
                    "total": 96
                }
            }
        },
        {
            "id": 385109,
            "date": "2024-04-07T06:30:00+00:00",
            "time": "06:30",
            "timestamp": 1712471400,
            "timezone": "UTC",
            "stage": null,
            "week": null,
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 66,
                "name": "NBL",
                "type": "League",
                "season": 2024,
                "logo": "https://media.api-sports.io/basketball/leagues/66.png"
            },
            "country": {
                "id": 31,
                "name": "New Zealand",
                "code": "NZ",
                "flag": "https://media.api-sports.io/flags/nz.svg"
            },
            "teams": {
                "home": {
                    "id": 853,
                    "name": "Bay Hawks",
                    "logo": "https://media.api-sports.io/basketball/teams/853.png"
                },
                "away": {
                    "id": 858,
                    "name": "Southland Sharks",
                    "logo": "https://media.api-sports.io/basketball/teams/858.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 18,
                    "quarter_2": 27,
                    "quarter_3": 28,
                    "quarter_4": 34,
                    "over_time": null,
                    "total": 107
                },
                "away": {
                    "quarter_1": 24,
                    "quarter_2": 19,
                    "quarter_3": 15,
                    "quarter_4": 22,
                    "over_time": null,
                    "total": 80
                }
            }
        },
        {
            "id": 373879,
            "date": "2024-04-07T06:35:00+00:00",
            "time": "06:35",
            "timestamp": 1712471700,
            "timezone": "UTC",
            "stage": null,
            "week": null,
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 56,
                "name": "B League",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/56.png"
            },
            "country": {
                "id": 24,
                "name": "Japan",
                "code": "JP",
                "flag": "https://media.api-sports.io/flags/jp.svg"
            },
            "teams": {
                "home": {
                    "id": 4945,
                    "name": "Nagoya Fighting Eagles",
                    "logo": "https://media.api-sports.io/basketball/teams/4945.png"
                },
                "away": {
                    "id": 763,
                    "name": "Toyama",
                    "logo": "https://media.api-sports.io/basketball/teams/763.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 16,
                    "quarter_2": 24,
                    "quarter_3": 24,
                    "quarter_4": 30,
                    "over_time": null,
                    "total": 94
                },
                "away": {
                    "quarter_1": 25,
                    "quarter_2": 11,
                    "quarter_3": 22,
                    "quarter_4": 12,
                    "over_time": null,
                    "total": 70
                }
            }
        },
        {
            "id": 390364,
            "date": "2024-04-07T07:00:00+00:00",
            "time": "07:00",
            "timestamp": 1712473200,
            "timezone": "UTC",
            "stage": null,
            "week": null,
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 151,
                "name": "Philippine Cup",
                "type": "cup",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/151.png"
            },
            "country": {
                "id": 60,
                "name": "Philippines",
                "code": "PH",
                "flag": "https://media.api-sports.io/flags/ph.svg"
            },
            "teams": {
                "home": {
                    "id": 2770,
                    "name": "Meralco Bolts",
                    "logo": "https://media.api-sports.io/basketball/teams/2770.png"
                },
                "away": {
                    "id": 5648,
                    "name": "TNT Tropang Giga",
                    "logo": "https://media.api-sports.io/basketball/teams/5648.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 25,
                    "quarter_2": 15,
                    "quarter_3": 28,
                    "quarter_4": 22,
                    "over_time": null,
                    "total": 90
                },
                "away": {
                    "quarter_1": 21,
                    "quarter_2": 28,
                    "quarter_3": 24,
                    "quarter_4": 19,
                    "over_time": null,
                    "total": 92
                }
            }
        },
        {
            "id": 392513,
            "date": "2024-04-07T07:00:00+00:00",
            "time": "07:00",
            "timestamp": 1712473200,
            "timezone": "UTC",
            "stage": null,
            "week": null,
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 407,
                "name": "B2.League",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/407.png"
            },
            "country": {
                "id": 24,
                "name": "Japan",
                "code": "JP",
                "flag": "https://media.api-sports.io/flags/jp.svg"
            },
            "teams": {
                "home": {
                    "id": 6354,
                    "name": "Yamagata Wyverns",
                    "logo": "https://media.api-sports.io/basketball/teams/6354.png"
                },
                "away": {
                    "id": 756,
                    "name": "Niigata",
                    "logo": "https://media.api-sports.io/basketball/teams/756.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 22,
                    "quarter_2": 24,
                    "quarter_3": 18,
                    "quarter_4": 20,
                    "over_time": null,
                    "total": 84
                },
                "away": {
                    "quarter_1": 16,
                    "quarter_2": 16,
                    "quarter_3": 16,
                    "quarter_4": 11,
                    "over_time": null,
                    "total": 59
                }
            }
        },
        {
            "id": 394603,
            "date": "2024-04-07T07:00:00+00:00",
            "time": "07:00",
            "timestamp": 1712473200,
            "timezone": "UTC",
            "stage": null,
            "week": null,
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 268,
                "name": "WSBL Women",
                "type": "League",
                "season": 2024,
                "logo": "https://media.api-sports.io/basketball/leagues/268.png"
            },
            "country": {
                "id": 68,
                "name": "Taiwan",
                "code": "TW",
                "flag": "https://media.api-sports.io/flags/tw.svg"
            },
            "teams": {
                "home": {
                    "id": 3949,
                    "name": "Cathay Life W",
                    "logo": "https://media.api-sports.io/basketball/teams/3949.png"
                },
                "away": {
                    "id": 3952,
                    "name": "Taiyuan W",
                    "logo": "https://media.api-sports.io/basketball/teams/3952.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 28,
                    "quarter_2": 18,
                    "quarter_3": 26,
                    "quarter_4": 14,
                    "over_time": null,
                    "total": 86
                },
                "away": {
                    "quarter_1": 23,
                    "quarter_2": 4,
                    "quarter_3": 15,
                    "quarter_4": 15,
                    "over_time": null,
                    "total": 57
                }
            }
        },
        {
            "id": 373889,
            "date": "2024-04-07T07:05:00+00:00",
            "time": "07:05",
            "timestamp": 1712473500,
            "timezone": "UTC",
            "stage": null,
            "week": null,
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 56,
                "name": "B League",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/56.png"
            },
            "country": {
                "id": 24,
                "name": "Japan",
                "code": "JP",
                "flag": "https://media.api-sports.io/flags/jp.svg"
            },
            "teams": {
                "home": {
                    "id": 750,
                    "name": "Brave Thunders",
                    "logo": "https://media.api-sports.io/basketball/teams/750.png"
                },
                "away": {
                    "id": 1585,
                    "name": "Hiroshima D.",
                    "logo": "https://media.api-sports.io/basketball/teams/1585.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 11,
                    "quarter_2": 19,
                    "quarter_3": 24,
                    "quarter_4": 33,
                    "over_time": null,
                    "total": 87
                },
                "away": {
                    "quarter_1": 31,
                    "quarter_2": 26,
                    "quarter_3": 19,
                    "quarter_4": 22,
                    "over_time": null,
                    "total": 98
                }
            }
        },
        {
            "id": 380266,
            "date": "2024-04-07T08:30:00+00:00",
            "time": "08:30",
            "timestamp": 1712478600,
            "timezone": "UTC",
            "stage": null,
            "week": null,
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 402,
                "name": "T1 League",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/402.png"
            },
            "country": {
                "id": 68,
                "name": "Taiwan",
                "code": "TW",
                "flag": "https://media.api-sports.io/flags/tw.svg"
            },
            "teams": {
                "home": {
                    "id": 6017,
                    "name": "Kaohsiung Aquas",
                    "logo": "https://media.api-sports.io/basketball/teams/6017.png"
                },
                "away": {
                    "id": 6266,
                    "name": "Taipei Taishin Mars",
                    "logo": "https://media.api-sports.io/basketball/teams/6266.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 32,
                    "quarter_2": 21,
                    "quarter_3": 29,
                    "quarter_4": 25,
                    "over_time": null,
                    "total": 107
                },
                "away": {
                    "quarter_1": 20,
                    "quarter_2": 29,
                    "quarter_3": 25,
                    "quarter_4": 15,
                    "over_time": null,
                    "total": 89
                }
            }
        },
        {
            "id": 390654,
            "date": "2024-04-07T08:30:00+00:00",
            "time": "08:30",
            "timestamp": 1712478600,
            "timezone": "UTC",
            "stage": null,
            "week": null,
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 396,
                "name": "Higher League",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/396.png"
            },
            "country": {
                "id": 25,
                "name": "Kazakhstan",
                "code": "KZ",
                "flag": "https://media.api-sports.io/flags/kz.svg"
            },
            "teams": {
                "home": {
                    "id": 6259,
                    "name": "Turan",
                    "logo": "https://media.api-sports.io/basketball/teams/6259.png"
                },
                "away": {
                    "id": 775,
                    "name": "Bars Petropavlovsk",
                    "logo": "https://media.api-sports.io/basketball/teams/775.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 25,
                    "quarter_2": 18,
                    "quarter_3": 22,
                    "quarter_4": 22,
                    "over_time": null,
                    "total": 87
                },
                "away": {
                    "quarter_1": 21,
                    "quarter_2": 15,
                    "quarter_3": 22,
                    "quarter_4": 19,
                    "over_time": null,
                    "total": 77
                }
            }
        },
        {
            "id": 394929,
            "date": "2024-04-07T08:30:00+00:00",
            "time": "08:30",
            "timestamp": 1712478600,
            "timezone": "UTC",
            "stage": null,
            "week": "ZBL Women - Semi-finals",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 33,
                "name": "ZBL W",
                "type": "League",
                "season": "2022-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/33.png"
            },
            "country": {
                "id": 12,
                "name": "Czech Republic",
                "code": "CZ",
                "flag": "https://media.api-sports.io/flags/cz.svg"
            },
            "teams": {
                "home": {
                    "id": 456,
                    "name": "KP Brno W",
                    "logo": "https://media.api-sports.io/basketball/teams/456.png"
                },
                "away": {
                    "id": 462,
                    "name": "Zabiny Brno W",
                    "logo": "https://media.api-sports.io/basketball/teams/462.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 17,
                    "quarter_2": 12,
                    "quarter_3": 11,
                    "quarter_4": 5,
                    "over_time": null,
                    "total": 45
                },
                "away": {
                    "quarter_1": 19,
                    "quarter_2": 16,
                    "quarter_3": 15,
                    "quarter_4": 9,
                    "over_time": null,
                    "total": 59
                }
            }
        },
        {
            "id": 380164,
            "date": "2024-04-07T09:00:00+00:00",
            "time": "09:00",
            "timestamp": 1712480400,
            "timezone": "UTC",
            "stage": null,
            "week": null,
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 403,
                "name": "P. League+",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/403.png"
            },
            "country": {
                "id": 68,
                "name": "Taiwan",
                "code": "TW",
                "flag": "https://media.api-sports.io/flags/tw.svg"
            },
            "teams": {
                "home": {
                    "id": 73,
                    "name": "Fubon Braves",
                    "logo": "https://media.api-sports.io/basketball/teams/73.png"
                },
                "away": {
                    "id": 6026,
                    "name": "Taoyuan Pauian Pilots",
                    "logo": "https://media.api-sports.io/basketball/teams/6026.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 27,
                    "quarter_2": 25,
                    "quarter_3": 17,
                    "quarter_4": 28,
                    "over_time": null,
                    "total": 97
                },
                "away": {
                    "quarter_1": 24,
                    "quarter_2": 33,
                    "quarter_3": 28,
                    "quarter_4": 16,
                    "over_time": null,
                    "total": 101
                }
            }
        },
        {
            "id": 394590,
            "date": "2024-04-07T09:00:00+00:00",
            "time": "09:00",
            "timestamp": 1712480400,
            "timezone": "UTC",
            "stage": null,
            "week": null,
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 267,
                "name": "SBL",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/267.png"
            },
            "country": {
                "id": 68,
                "name": "Taiwan",
                "code": "TW",
                "flag": "https://media.api-sports.io/flags/tw.svg"
            },
            "teams": {
                "home": {
                    "id": 3944,
                    "name": "Bank of Taiwan",
                    "logo": "https://media.api-sports.io/basketball/teams/3944.png"
                },
                "away": {
                    "id": 5924,
                    "name": "Changhua",
                    "logo": "https://media.api-sports.io/basketball/teams/5924.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 26,
                    "quarter_2": 20,
                    "quarter_3": 24,
                    "quarter_4": 14,
                    "over_time": null,
                    "total": 84
                },
                "away": {
                    "quarter_1": 21,
                    "quarter_2": 14,
                    "quarter_3": 11,
                    "quarter_4": 11,
                    "over_time": null,
                    "total": 57
                }
            }
        },
        {
            "id": 395053,
            "date": "2024-04-07T09:00:00+00:00",
            "time": "09:00",
            "timestamp": 1712480400,
            "timezone": "UTC",
            "stage": null,
            "week": "KBL - Quarter-finals",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 91,
                "name": "KBL",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/91.png"
            },
            "country": {
                "id": 44,
                "name": "South Korea",
                "code": "KR",
                "flag": "https://media.api-sports.io/flags/kr.svg"
            },
            "teams": {
                "home": {
                    "id": 3173,
                    "name": "Suwon KT",
                    "logo": "https://media.api-sports.io/basketball/teams/3173.png"
                },
                "away": {
                    "id": 1107,
                    "name": "Mobis Phoebus",
                    "logo": "https://media.api-sports.io/basketball/teams/1107.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 23,
                    "quarter_2": 16,
                    "quarter_3": 22,
                    "quarter_4": 16,
                    "over_time": null,
                    "total": 77
                },
                "away": {
                    "quarter_1": 22,
                    "quarter_2": 23,
                    "quarter_3": 12,
                    "quarter_4": 22,
                    "over_time": null,
                    "total": 79
                }
            }
        },
        {
            "id": 395100,
            "date": "2024-04-07T09:00:00+00:00",
            "time": "09:00",
            "timestamp": 1712480400,
            "timezone": "UTC",
            "stage": null,
            "week": "A1 Women - Semi-finals",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 234,
                "name": "A1 Women",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/234.png"
            },
            "country": {
                "id": 18,
                "name": "Greece",
                "code": "GR",
                "flag": "https://media.api-sports.io/flags/gr.svg"
            },
            "teams": {
                "home": {
                    "id": 3690,
                    "name": "Olympiacos W",
                    "logo": "https://media.api-sports.io/basketball/teams/3690.png"
                },
                "away": {
                    "id": 3729,
                    "name": "Proteas Voulas W",
                    "logo": "https://media.api-sports.io/basketball/teams/3729.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 17,
                    "quarter_2": 18,
                    "quarter_3": 28,
                    "quarter_4": 20,
                    "over_time": null,
                    "total": 83
                },
                "away": {
                    "quarter_1": 10,
                    "quarter_2": 11,
                    "quarter_3": 11,
                    "quarter_4": 16,
                    "over_time": null,
                    "total": 48
                }
            }
        },
        {
            "id": 373882,
            "date": "2024-04-07T09:05:00+00:00",
            "time": "09:05",
            "timestamp": 1712480700,
            "timezone": "UTC",
            "stage": null,
            "week": null,
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 56,
                "name": "B League",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/56.png"
            },
            "country": {
                "id": 24,
                "name": "Japan",
                "code": "JP",
                "flag": "https://media.api-sports.io/flags/jp.svg"
            },
            "teams": {
                "home": {
                    "id": 758,
                    "name": "Ryukyu",
                    "logo": "https://media.api-sports.io/basketball/teams/758.png"
                },
                "away": {
                    "id": 751,
                    "name": "Chiba",
                    "logo": "https://media.api-sports.io/basketball/teams/751.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 22,
                    "quarter_2": 18,
                    "quarter_3": 17,
                    "quarter_4": 26,
                    "over_time": null,
                    "total": 83
                },
                "away": {
                    "quarter_1": 15,
                    "quarter_2": 18,
                    "quarter_3": 26,
                    "quarter_4": 20,
                    "over_time": null,
                    "total": 79
                }
            }
        },
        {
            "id": 365940,
            "date": "2024-04-07T09:30:00+00:00",
            "time": "09:30",
            "timestamp": 1712482200,
            "timezone": "UTC",
            "stage": null,
            "week": "23",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 236,
                "name": "A2 Women",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/236.png"
            },
            "country": {
                "id": 18,
                "name": "Greece",
                "code": "GR",
                "flag": "https://media.api-sports.io/flags/gr.svg"
            },
            "teams": {
                "home": {
                    "id": 3717,
                    "name": "Kavala W",
                    "logo": "https://media.api-sports.io/basketball/teams/3717.png"
                },
                "away": {
                    "id": 3730,
                    "name": "Pylaia W",
                    "logo": "https://media.api-sports.io/basketball/teams/3730.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 17,
                    "quarter_2": 14,
                    "quarter_3": 17,
                    "quarter_4": 10,
                    "over_time": null,
                    "total": 58
                },
                "away": {
                    "quarter_1": 13,
                    "quarter_2": 9,
                    "quarter_3": 9,
                    "quarter_4": 8,
                    "over_time": null,
                    "total": 39
                }
            }
        },
        {
            "id": 351457,
            "date": "2024-04-07T10:00:00+00:00",
            "time": "10:00",
            "timestamp": 1712484000,
            "timezone": "UTC",
            "stage": null,
            "week": null,
            "status": {
                "long": "Cancelled",
                "short": "CANC",
                "timer": null
            },
            "league": {
                "id": 98,
                "name": "Basketettan W",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/98.png"
            },
            "country": {
                "id": 46,
                "name": "Sweden",
                "code": "SE",
                "flag": "https://media.api-sports.io/flags/se.svg"
            },
            "teams": {
                "home": {
                    "id": 5983,
                    "name": "Kvarnby Lions W",
                    "logo": "https://media.api-sports.io/basketball/teams/5983.png"
                },
                "away": {
                    "id": 2321,
                    "name": "Wetterbygden Sparks 2 W",
                    "logo": "https://media.api-sports.io/basketball/teams/2321.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": null,
                    "quarter_2": null,
                    "quarter_3": null,
                    "quarter_4": null,
                    "over_time": null,
                    "total": null
                },
                "away": {
                    "quarter_1": null,
                    "quarter_2": null,
                    "quarter_3": null,
                    "quarter_4": null,
                    "over_time": null,
                    "total": null
                }
            }
        },
        {
            "id": 358372,
            "date": "2024-04-07T10:00:00+00:00",
            "time": "10:00",
            "timestamp": 1712484000,
            "timezone": "UTC",
            "stage": null,
            "week": "26",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 52,
                "name": "Lega A",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/52.png"
            },
            "country": {
                "id": 23,
                "name": "Italy",
                "code": "IT",
                "flag": "https://media.api-sports.io/flags/it.svg"
            },
            "teams": {
                "home": {
                    "id": 726,
                    "name": "Sassari",
                    "logo": "https://media.api-sports.io/basketball/teams/726.png"
                },
                "away": {
                    "id": 723,
                    "name": "Pesaro",
                    "logo": "https://media.api-sports.io/basketball/teams/723.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 26,
                    "quarter_2": 20,
                    "quarter_3": 26,
                    "quarter_4": 19,
                    "over_time": null,
                    "total": 91
                },
                "away": {
                    "quarter_1": 28,
                    "quarter_2": 22,
                    "quarter_3": 16,
                    "quarter_4": 30,
                    "over_time": null,
                    "total": 96
                }
            }
        },
        {
            "id": 365941,
            "date": "2024-04-07T10:00:00+00:00",
            "time": "10:00",
            "timestamp": 1712484000,
            "timezone": "UTC",
            "stage": null,
            "week": "23",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 236,
                "name": "A2 Women",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/236.png"
            },
            "country": {
                "id": 18,
                "name": "Greece",
                "code": "GR",
                "flag": "https://media.api-sports.io/flags/gr.svg"
            },
            "teams": {
                "home": {
                    "id": 3725,
                    "name": "Panseraikos W",
                    "logo": "https://media.api-sports.io/basketball/teams/3725.png"
                },
                "away": {
                    "id": 3724,
                    "name": "Panorama W",
                    "logo": "https://media.api-sports.io/basketball/teams/3724.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 21,
                    "quarter_2": 18,
                    "quarter_3": 21,
                    "quarter_4": 26,
                    "over_time": null,
                    "total": 86
                },
                "away": {
                    "quarter_1": 17,
                    "quarter_2": 6,
                    "quarter_3": 5,
                    "quarter_4": 5,
                    "over_time": null,
                    "total": 33
                }
            }
        },
        {
            "id": 365942,
            "date": "2024-04-07T10:00:00+00:00",
            "time": "10:00",
            "timestamp": 1712484000,
            "timezone": "UTC",
            "stage": null,
            "week": "23",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 236,
                "name": "A2 Women",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/236.png"
            },
            "country": {
                "id": 18,
                "name": "Greece",
                "code": "GR",
                "flag": "https://media.api-sports.io/flags/gr.svg"
            },
            "teams": {
                "home": {
                    "id": 3728,
                    "name": "Pierikos Arhelaos W",
                    "logo": "https://media.api-sports.io/basketball/teams/3728.png"
                },
                "away": {
                    "id": 3704,
                    "name": "Apollon Ptolemaidas W",
                    "logo": "https://media.api-sports.io/basketball/teams/3704.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 18,
                    "quarter_2": 15,
                    "quarter_3": 28,
                    "quarter_4": 15,
                    "over_time": null,
                    "total": 76
                },
                "away": {
                    "quarter_1": 13,
                    "quarter_2": 15,
                    "quarter_3": 11,
                    "quarter_4": 15,
                    "over_time": null,
                    "total": 54
                }
            }
        },
        {
            "id": 371431,
            "date": "2024-04-07T10:00:00+00:00",
            "time": "10:00",
            "timestamp": 1712484000,
            "timezone": "UTC",
            "stage": null,
            "week": null,
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 111,
                "name": "Premier League",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/111.png"
            },
            "country": {
                "id": 51,
                "name": "Belarus",
                "code": "BY",
                "flag": "https://media.api-sports.io/flags/by.svg"
            },
            "teams": {
                "home": {
                    "id": 2268,
                    "name": "Grodno GrSU",
                    "logo": "https://media.api-sports.io/basketball/teams/2268.png"
                },
                "away": {
                    "id": 6164,
                    "name": "Gomel 2",
                    "logo": "https://media.api-sports.io/basketball/teams/6164.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 19,
                    "quarter_2": 34,
                    "quarter_3": 27,
                    "quarter_4": 19,
                    "over_time": null,
                    "total": 99
                },
                "away": {
                    "quarter_1": 2,
                    "quarter_2": 10,
                    "quarter_3": 9,
                    "quarter_4": 7,
                    "over_time": null,
                    "total": 28
                }
            }
        },
        {
            "id": 371432,
            "date": "2024-04-07T10:00:00+00:00",
            "time": "10:00",
            "timestamp": 1712484000,
            "timezone": "UTC",
            "stage": null,
            "week": null,
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 111,
                "name": "Premier League",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/111.png"
            },
            "country": {
                "id": 51,
                "name": "Belarus",
                "code": "BY",
                "flag": "https://media.api-sports.io/flags/by.svg"
            },
            "teams": {
                "home": {
                    "id": 1357,
                    "name": "Minsk 3",
                    "logo": "https://media.api-sports.io/basketball/teams/1357.png"
                },
                "away": {
                    "id": 1355,
                    "name": "SDUSHOR Minsk",
                    "logo": "https://media.api-sports.io/basketball/teams/1355.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 24,
                    "quarter_2": 27,
                    "quarter_3": 27,
                    "quarter_4": 14,
                    "over_time": null,
                    "total": 92
                },
                "away": {
                    "quarter_1": 20,
                    "quarter_2": 11,
                    "quarter_3": 18,
                    "quarter_4": 11,
                    "over_time": null,
                    "total": 60
                }
            }
        },
        {
            "id": 388821,
            "date": "2024-04-07T10:00:00+00:00",
            "time": "10:00",
            "timestamp": 1712484000,
            "timezone": "UTC",
            "stage": null,
            "week": null,
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 82,
                "name": "VTB United League",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/82.png"
            },
            "country": {
                "id": 39,
                "name": "Russia",
                "code": "RU",
                "flag": "https://media.api-sports.io/flags/ru.svg"
            },
            "teams": {
                "home": {
                    "id": 1023,
                    "name": "Enisey",
                    "logo": "https://media.api-sports.io/basketball/teams/1023.png"
                },
                "away": {
                    "id": 1022,
                    "name": "CSKA Moscow",
                    "logo": "https://media.api-sports.io/basketball/teams/1022.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 20,
                    "quarter_2": 18,
                    "quarter_3": 23,
                    "quarter_4": 25,
                    "over_time": null,
                    "total": 86
                },
                "away": {
                    "quarter_1": 9,
                    "quarter_2": 29,
                    "quarter_3": 19,
                    "quarter_4": 24,
                    "over_time": null,
                    "total": 81
                }
            }
        },
        {
            "id": 389374,
            "date": "2024-04-07T10:00:00+00:00",
            "time": "10:00",
            "timestamp": 1712484000,
            "timezone": "UTC",
            "stage": null,
            "week": "6",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 113,
                "name": "NBL",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/113.png"
            },
            "country": {
                "id": 52,
                "name": "Bulgaria",
                "code": "BG",
                "flag": "https://media.api-sports.io/flags/bg.svg"
            },
            "teams": {
                "home": {
                    "id": 1372,
                    "name": "Chernomorets",
                    "logo": "https://media.api-sports.io/basketball/teams/1372.png"
                },
                "away": {
                    "id": 1374,
                    "name": "Rilski Sportist",
                    "logo": "https://media.api-sports.io/basketball/teams/1374.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 17,
                    "quarter_2": 20,
                    "quarter_3": 22,
                    "quarter_4": 29,
                    "over_time": null,
                    "total": 88
                },
                "away": {
                    "quarter_1": 19,
                    "quarter_2": 24,
                    "quarter_3": 20,
                    "quarter_4": 24,
                    "over_time": null,
                    "total": 87
                }
            }
        },
        {
            "id": 394694,
            "date": "2024-04-07T10:00:00+00:00",
            "time": "10:00",
            "timestamp": 1712484000,
            "timezone": "UTC",
            "stage": null,
            "week": "26",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 104,
                "name": "Super Ligi",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/104.png"
            },
            "country": {
                "id": 48,
                "name": "Turkey",
                "code": "TR",
                "flag": "https://media.api-sports.io/flags/tr.svg"
            },
            "teams": {
                "home": {
                    "id": 1304,
                    "name": "Manisa",
                    "logo": "https://media.api-sports.io/basketball/teams/1304.png"
                },
                "away": {
                    "id": 1269,
                    "name": "Darussafaka",
                    "logo": "https://media.api-sports.io/basketball/teams/1269.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 12,
                    "quarter_2": 25,
                    "quarter_3": 19,
                    "quarter_4": 13,
                    "over_time": null,
                    "total": 69
                },
                "away": {
                    "quarter_1": 21,
                    "quarter_2": 12,
                    "quarter_3": 11,
                    "quarter_4": 18,
                    "over_time": null,
                    "total": 62
                }
            }
        },
        {
            "id": 394731,
            "date": "2024-04-07T10:00:00+00:00",
            "time": "10:00",
            "timestamp": 1712484000,
            "timezone": "UTC",
            "stage": null,
            "week": "Super League - Quarter-finals",
            "status": {
                "long": "After Over Time",
                "short": "AOT",
                "timer": null
            },
            "league": {
                "id": 81,
                "name": "Super League",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/81.png"
            },
            "country": {
                "id": 39,
                "name": "Russia",
                "code": "RU",
                "flag": "https://media.api-sports.io/flags/ru.svg"
            },
            "teams": {
                "home": {
                    "id": 1011,
                    "name": "Novosibirsk",
                    "logo": "https://media.api-sports.io/basketball/teams/1011.png"
                },
                "away": {
                    "id": 1016,
                    "name": "Temp Sumz Revda",
                    "logo": "https://media.api-sports.io/basketball/teams/1016.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 19,
                    "quarter_2": 7,
                    "quarter_3": 26,
                    "quarter_4": 18,
                    "over_time": 9,
                    "total": 79
                },
                "away": {
                    "quarter_1": 17,
                    "quarter_2": 16,
                    "quarter_3": 21,
                    "quarter_4": 16,
                    "over_time": 17,
                    "total": 87
                }
            }
        },
        {
            "id": 358950,
            "date": "2024-04-07T10:15:00+00:00",
            "time": "10:15",
            "timestamp": 1712484900,
            "timezone": "UTC",
            "stage": null,
            "week": "28",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 94,
                "name": "Liga Femenina W",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/94.png"
            },
            "country": {
                "id": 45,
                "name": "Spain",
                "code": "ES",
                "flag": "https://media.api-sports.io/flags/es.svg"
            },
            "teams": {
                "home": {
                    "id": 1173,
                    "name": "Zaragoza W",
                    "logo": "https://media.api-sports.io/basketball/teams/1173.png"
                },
                "away": {
                    "id": 1717,
                    "name": "Gran Canaria W",
                    "logo": "https://media.api-sports.io/basketball/teams/1717.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 20,
                    "quarter_2": 12,
                    "quarter_3": 28,
                    "quarter_4": 21,
                    "over_time": null,
                    "total": 81
                },
                "away": {
                    "quarter_1": 15,
                    "quarter_2": 18,
                    "quarter_3": 14,
                    "quarter_4": 21,
                    "over_time": null,
                    "total": 68
                }
            }
        },
        {
            "id": 390365,
            "date": "2024-04-07T10:15:00+00:00",
            "time": "10:15",
            "timestamp": 1712484900,
            "timezone": "UTC",
            "stage": null,
            "week": null,
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 151,
                "name": "Philippine Cup",
                "type": "cup",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/151.png"
            },
            "country": {
                "id": 60,
                "name": "Philippines",
                "code": "PH",
                "flag": "https://media.api-sports.io/flags/ph.svg"
            },
            "teams": {
                "home": {
                    "id": 2777,
                    "name": "Terrafirma Dyip",
                    "logo": "https://media.api-sports.io/basketball/teams/2777.png"
                },
                "away": {
                    "id": 2767,
                    "name": "Barangay Ginebra San Miguel",
                    "logo": "https://media.api-sports.io/basketball/teams/2767.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 24,
                    "quarter_2": 17,
                    "quarter_3": 23,
                    "quarter_4": 27,
                    "over_time": null,
                    "total": 91
                },
                "away": {
                    "quarter_1": 17,
                    "quarter_2": 23,
                    "quarter_3": 21,
                    "quarter_4": 24,
                    "over_time": null,
                    "total": 85
                }
            }
        },
        {
            "id": 359681,
            "date": "2024-04-07T10:30:00+00:00",
            "time": "10:30",
            "timestamp": 1712485800,
            "timezone": "UTC",
            "stage": null,
            "week": "28",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 117,
                "name": "ACB",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/117.png"
            },
            "country": {
                "id": 45,
                "name": "Spain",
                "code": "ES",
                "flag": "https://media.api-sports.io/flags/es.svg"
            },
            "teams": {
                "home": {
                    "id": 1698,
                    "name": "Manresa",
                    "logo": "https://media.api-sports.io/basketball/teams/1698.png"
                },
                "away": {
                    "id": 2340,
                    "name": "Unicaja",
                    "logo": "https://media.api-sports.io/basketball/teams/2340.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 20,
                    "quarter_2": 21,
                    "quarter_3": 15,
                    "quarter_4": 21,
                    "over_time": null,
                    "total": 77
                },
                "away": {
                    "quarter_1": 8,
                    "quarter_2": 23,
                    "quarter_3": 24,
                    "quarter_4": 33,
                    "over_time": null,
                    "total": 88
                }
            }
        },
        {
            "id": 365943,
            "date": "2024-04-07T10:30:00+00:00",
            "time": "10:30",
            "timestamp": 1712485800,
            "timezone": "UTC",
            "stage": null,
            "week": "23",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 236,
                "name": "A2 Women",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/236.png"
            },
            "country": {
                "id": 18,
                "name": "Greece",
                "code": "GR",
                "flag": "https://media.api-sports.io/flags/gr.svg"
            },
            "teams": {
                "home": {
                    "id": 3719,
                    "name": "Melission W",
                    "logo": "https://media.api-sports.io/basketball/teams/3719.png"
                },
                "away": {
                    "id": 5578,
                    "name": "Promitheas W",
                    "logo": "https://media.api-sports.io/basketball/teams/5578.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 27,
                    "quarter_2": 19,
                    "quarter_3": 14,
                    "quarter_4": 13,
                    "over_time": null,
                    "total": 73
                },
                "away": {
                    "quarter_1": 6,
                    "quarter_2": 16,
                    "quarter_3": 12,
                    "quarter_4": 14,
                    "over_time": null,
                    "total": 48
                }
            }
        },
        {
            "id": 395101,
            "date": "2024-04-07T10:30:00+00:00",
            "time": "10:30",
            "timestamp": 1712485800,
            "timezone": "UTC",
            "stage": null,
            "week": "A1 Women - Final",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 234,
                "name": "A1 Women",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/234.png"
            },
            "country": {
                "id": 18,
                "name": "Greece",
                "code": "GR",
                "flag": "https://media.api-sports.io/flags/gr.svg"
            },
            "teams": {
                "home": {
                    "id": 3689,
                    "name": "Lefkadas W",
                    "logo": "https://media.api-sports.io/basketball/teams/3689.png"
                },
                "away": {
                    "id": 3708,
                    "name": "Athinaikos W",
                    "logo": "https://media.api-sports.io/basketball/teams/3708.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 18,
                    "quarter_2": 21,
                    "quarter_3": 11,
                    "quarter_4": 8,
                    "over_time": null,
                    "total": 58
                },
                "away": {
                    "quarter_1": 8,
                    "quarter_2": 20,
                    "quarter_3": 20,
                    "quarter_4": 22,
                    "over_time": null,
                    "total": 70
                }
            }
        },
        {
            "id": 365945,
            "date": "2024-04-07T10:45:00+00:00",
            "time": "10:45",
            "timestamp": 1712486700,
            "timezone": "UTC",
            "stage": null,
            "week": "23",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 236,
                "name": "A2 Women",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/236.png"
            },
            "country": {
                "id": 18,
                "name": "Greece",
                "code": "GR",
                "flag": "https://media.api-sports.io/flags/gr.svg"
            },
            "teams": {
                "home": {
                    "id": 3722,
                    "name": "Panathlitikos W",
                    "logo": "https://media.api-sports.io/basketball/teams/3722.png"
                },
                "away": {
                    "id": 3706,
                    "name": "Aris W",
                    "logo": "https://media.api-sports.io/basketball/teams/3706.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 24,
                    "quarter_2": 29,
                    "quarter_3": 18,
                    "quarter_4": 16,
                    "over_time": null,
                    "total": 87
                },
                "away": {
                    "quarter_1": 10,
                    "quarter_2": 8,
                    "quarter_3": 7,
                    "quarter_4": 12,
                    "over_time": null,
                    "total": 37
                }
            }
        },
        {
            "id": 350964,
            "date": "2024-04-07T11:00:00+00:00",
            "time": "11:00",
            "timestamp": 1712487600,
            "timezone": "UTC",
            "stage": null,
            "week": null,
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 99,
                "name": "Superettan",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/99.png"
            },
            "country": {
                "id": 46,
                "name": "Sweden",
                "code": "SE",
                "flag": "https://media.api-sports.io/flags/se.svg"
            },
            "teams": {
                "home": {
                    "id": 4934,
                    "name": "Tureberg",
                    "logo": "https://media.api-sports.io/basketball/teams/4934.png"
                },
                "away": {
                    "id": 1719,
                    "name": "Malbas",
                    "logo": "https://media.api-sports.io/basketball/teams/1719.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 25,
                    "quarter_2": 12,
                    "quarter_3": 20,
                    "quarter_4": 26,
                    "over_time": null,
                    "total": 83
                },
                "away": {
                    "quarter_1": 16,
                    "quarter_2": 16,
                    "quarter_3": 19,
                    "quarter_4": 18,
                    "over_time": null,
                    "total": 69
                }
            }
        },
        {
            "id": 351455,
            "date": "2024-04-07T11:00:00+00:00",
            "time": "11:00",
            "timestamp": 1712487600,
            "timezone": "UTC",
            "stage": null,
            "week": null,
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 98,
                "name": "Basketettan W",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/98.png"
            },
            "country": {
                "id": 46,
                "name": "Sweden",
                "code": "SE",
                "flag": "https://media.api-sports.io/flags/se.svg"
            },
            "teams": {
                "home": {
                    "id": 1185,
                    "name": "Huddinge W",
                    "logo": "https://media.api-sports.io/basketball/teams/1185.png"
                },
                "away": {
                    "id": 1189,
                    "name": "Lobas W",
                    "logo": "https://media.api-sports.io/basketball/teams/1189.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 5,
                    "quarter_2": 10,
                    "quarter_3": 12,
                    "quarter_4": 13,
                    "over_time": null,
                    "total": 40
                },
                "away": {
                    "quarter_1": 22,
                    "quarter_2": 25,
                    "quarter_3": 17,
                    "quarter_4": 16,
                    "over_time": null,
                    "total": 80
                }
            }
        },
        {
            "id": 351469,
            "date": "2024-04-07T11:00:00+00:00",
            "time": "11:00",
            "timestamp": 1712487600,
            "timezone": "UTC",
            "stage": null,
            "week": null,
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 98,
                "name": "Basketettan W",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/98.png"
            },
            "country": {
                "id": 46,
                "name": "Sweden",
                "code": "SE",
                "flag": "https://media.api-sports.io/flags/se.svg"
            },
            "teams": {
                "home": {
                    "id": 1175,
                    "name": "Alvik 2 W",
                    "logo": "https://media.api-sports.io/basketball/teams/1175.png"
                },
                "away": {
                    "id": 1190,
                    "name": "Lulea Stars W",
                    "logo": "https://media.api-sports.io/basketball/teams/1190.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": null,
                    "quarter_2": null,
                    "quarter_3": null,
                    "quarter_4": null,
                    "over_time": null,
                    "total": 64
                },
                "away": {
                    "quarter_1": null,
                    "quarter_2": null,
                    "quarter_3": null,
                    "quarter_4": null,
                    "over_time": null,
                    "total": 70
                }
            }
        },
        {
            "id": 359682,
            "date": "2024-04-07T11:00:00+00:00",
            "time": "11:00",
            "timestamp": 1712487600,
            "timezone": "UTC",
            "stage": null,
            "week": "28",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 117,
                "name": "ACB",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/117.png"
            },
            "country": {
                "id": 45,
                "name": "Spain",
                "code": "ES",
                "flag": "https://media.api-sports.io/flags/es.svg"
            },
            "teams": {
                "home": {
                    "id": 2339,
                    "name": "Tenerife",
                    "logo": "https://media.api-sports.io/basketball/teams/2339.png"
                },
                "away": {
                    "id": 1139,
                    "name": "Basquet Girona",
                    "logo": "https://media.api-sports.io/basketball/teams/1139.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 19,
                    "quarter_2": 23,
                    "quarter_3": 12,
                    "quarter_4": 20,
                    "over_time": null,
                    "total": 74
                },
                "away": {
                    "quarter_1": 9,
                    "quarter_2": 21,
                    "quarter_3": 11,
                    "quarter_4": 19,
                    "over_time": null,
                    "total": 60
                }
            }
        },
        {
            "id": 365944,
            "date": "2024-04-07T11:00:00+00:00",
            "time": "11:00",
            "timestamp": 1712487600,
            "timezone": "UTC",
            "stage": null,
            "week": "23",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 236,
                "name": "A2 Women",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/236.png"
            },
            "country": {
                "id": 18,
                "name": "Greece",
                "code": "GR",
                "flag": "https://media.api-sports.io/flags/gr.svg"
            },
            "teams": {
                "home": {
                    "id": 5574,
                    "name": "Ioannina W",
                    "logo": "https://media.api-sports.io/basketball/teams/5574.png"
                },
                "away": {
                    "id": 6090,
                    "name": "Anorthosis Volou W",
                    "logo": "https://media.api-sports.io/basketball/teams/6090.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 20,
                    "quarter_2": 13,
                    "quarter_3": 18,
                    "quarter_4": 20,
                    "over_time": null,
                    "total": 71
                },
                "away": {
                    "quarter_1": 11,
                    "quarter_2": 18,
                    "quarter_3": 15,
                    "quarter_4": 21,
                    "over_time": null,
                    "total": 65
                }
            }
        },
        {
            "id": 365946,
            "date": "2024-04-07T11:00:00+00:00",
            "time": "11:00",
            "timestamp": 1712487600,
            "timezone": "UTC",
            "stage": null,
            "week": "23",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 236,
                "name": "A2 Women",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/236.png"
            },
            "country": {
                "id": 18,
                "name": "Greece",
                "code": "GR",
                "flag": "https://media.api-sports.io/flags/gr.svg"
            },
            "teams": {
                "home": {
                    "id": 5577,
                    "name": "Porfyras W",
                    "logo": "https://media.api-sports.io/basketball/teams/5577.png"
                },
                "away": {
                    "id": 3698,
                    "name": "Agia Paraskevis W",
                    "logo": "https://media.api-sports.io/basketball/teams/3698.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 6,
                    "quarter_2": 8,
                    "quarter_3": 12,
                    "quarter_4": 11,
                    "over_time": null,
                    "total": 37
                },
                "away": {
                    "quarter_1": 14,
                    "quarter_2": 20,
                    "quarter_3": 14,
                    "quarter_4": 10,
                    "over_time": null,
                    "total": 58
                }
            }
        },
        {
            "id": 394591,
            "date": "2024-04-07T11:00:00+00:00",
            "time": "11:00",
            "timestamp": 1712487600,
            "timezone": "UTC",
            "stage": null,
            "week": null,
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 267,
                "name": "SBL",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/267.png"
            },
            "country": {
                "id": 68,
                "name": "Taiwan",
                "code": "TW",
                "flag": "https://media.api-sports.io/flags/tw.svg"
            },
            "teams": {
                "home": {
                    "id": 3948,
                    "name": "Yulon Luxgen Dinos",
                    "logo": "https://media.api-sports.io/basketball/teams/3948.png"
                },
                "away": {
                    "id": 3947,
                    "name": "Taiwan Beer",
                    "logo": "https://media.api-sports.io/basketball/teams/3947.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 21,
                    "quarter_2": 30,
                    "quarter_3": 15,
                    "quarter_4": 17,
                    "over_time": null,
                    "total": 83
                },
                "away": {
                    "quarter_1": 19,
                    "quarter_2": 14,
                    "quarter_3": 22,
                    "quarter_4": 16,
                    "over_time": null,
                    "total": 71
                }
            }
        },
        {
            "id": 394616,
            "date": "2024-04-07T11:00:00+00:00",
            "time": "11:00",
            "timestamp": 1712487600,
            "timezone": "UTC",
            "stage": null,
            "week": "32",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 102,
                "name": "TBL",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/102.png"
            },
            "country": {
                "id": 48,
                "name": "Turkey",
                "code": "TR",
                "flag": "https://media.api-sports.io/flags/tr.svg"
            },
            "teams": {
                "home": {
                    "id": 5682,
                    "name": "Kapakli Spor",
                    "logo": "https://media.api-sports.io/basketball/teams/5682.png"
                },
                "away": {
                    "id": 3425,
                    "name": "Yalovaspor",
                    "logo": "https://media.api-sports.io/basketball/teams/3425.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 24,
                    "quarter_2": 15,
                    "quarter_3": 11,
                    "quarter_4": 25,
                    "over_time": null,
                    "total": 75
                },
                "away": {
                    "quarter_1": 36,
                    "quarter_2": 30,
                    "quarter_3": 25,
                    "quarter_4": 23,
                    "over_time": null,
                    "total": 114
                }
            }
        },
        {
            "id": 395102,
            "date": "2024-04-07T11:00:00+00:00",
            "time": "11:00",
            "timestamp": 1712487600,
            "timezone": "UTC",
            "stage": null,
            "week": "A1 Women - Semi-finals",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 234,
                "name": "A1 Women",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/234.png"
            },
            "country": {
                "id": 18,
                "name": "Greece",
                "code": "GR",
                "flag": "https://media.api-sports.io/flags/gr.svg"
            },
            "teams": {
                "home": {
                    "id": 3686,
                    "name": "Eleftheria W",
                    "logo": "https://media.api-sports.io/basketball/teams/3686.png"
                },
                "away": {
                    "id": 3716,
                    "name": "Iraklis W",
                    "logo": "https://media.api-sports.io/basketball/teams/3716.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": null,
                    "quarter_2": null,
                    "quarter_3": null,
                    "quarter_4": null,
                    "over_time": null,
                    "total": 0
                },
                "away": {
                    "quarter_1": null,
                    "quarter_2": null,
                    "quarter_3": null,
                    "quarter_4": null,
                    "over_time": null,
                    "total": 20
                }
            }
        },
        {
            "id": 395103,
            "date": "2024-04-07T11:00:00+00:00",
            "time": "11:00",
            "timestamp": 1712487600,
            "timezone": "UTC",
            "stage": null,
            "week": "A1 Women - Semi-finals",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 234,
                "name": "A1 Women",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/234.png"
            },
            "country": {
                "id": 18,
                "name": "Greece",
                "code": "GR",
                "flag": "https://media.api-sports.io/flags/gr.svg"
            },
            "teams": {
                "home": {
                    "id": 3692,
                    "name": "Panathinaikos W",
                    "logo": "https://media.api-sports.io/basketball/teams/3692.png"
                },
                "away": {
                    "id": 3687,
                    "name": "Esperides Kalliotheas W",
                    "logo": "https://media.api-sports.io/basketball/teams/3687.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 22,
                    "quarter_2": 17,
                    "quarter_3": 17,
                    "quarter_4": 10,
                    "over_time": null,
                    "total": 66
                },
                "away": {
                    "quarter_1": 17,
                    "quarter_2": 22,
                    "quarter_3": 9,
                    "quarter_4": 10,
                    "over_time": null,
                    "total": 58
                }
            }
        },
        {
            "id": 365947,
            "date": "2024-04-07T11:30:00+00:00",
            "time": "11:30",
            "timestamp": 1712489400,
            "timezone": "UTC",
            "stage": null,
            "week": "23",
            "status": {
                "long": "Cancelled",
                "short": "CANC",
                "timer": null
            },
            "league": {
                "id": 236,
                "name": "A2 Women",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/236.png"
            },
            "country": {
                "id": 18,
                "name": "Greece",
                "code": "GR",
                "flag": "https://media.api-sports.io/flags/gr.svg"
            },
            "teams": {
                "home": {
                    "id": 3720,
                    "name": "Ment W",
                    "logo": "https://media.api-sports.io/basketball/teams/3720.png"
                },
                "away": {
                    "id": 3721,
                    "name": "Olympia Larisas W",
                    "logo": "https://media.api-sports.io/basketball/teams/3721.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": null,
                    "quarter_2": null,
                    "quarter_3": null,
                    "quarter_4": null,
                    "over_time": null,
                    "total": null
                },
                "away": {
                    "quarter_1": null,
                    "quarter_2": null,
                    "quarter_3": null,
                    "quarter_4": null,
                    "over_time": null,
                    "total": null
                }
            }
        },
        {
            "id": 365948,
            "date": "2024-04-07T11:30:00+00:00",
            "time": "11:30",
            "timestamp": 1712489400,
            "timezone": "UTC",
            "stage": null,
            "week": "23",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 236,
                "name": "A2 Women",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/236.png"
            },
            "country": {
                "id": 18,
                "name": "Greece",
                "code": "GR",
                "flag": "https://media.api-sports.io/flags/gr.svg"
            },
            "teams": {
                "home": {
                    "id": 3696,
                    "name": "AEK Peristeriou W",
                    "logo": "https://media.api-sports.io/basketball/teams/3696.png"
                },
                "away": {
                    "id": 5575,
                    "name": "Ionikos W",
                    "logo": "https://media.api-sports.io/basketball/teams/5575.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 7,
                    "quarter_2": 13,
                    "quarter_3": 14,
                    "quarter_4": 15,
                    "over_time": null,
                    "total": 49
                },
                "away": {
                    "quarter_1": 9,
                    "quarter_2": 14,
                    "quarter_3": 14,
                    "quarter_4": 18,
                    "over_time": null,
                    "total": 55
                }
            }
        },
        {
            "id": 362533,
            "date": "2024-04-07T12:00:00+00:00",
            "time": "12:00",
            "timestamp": 1712491200,
            "timezone": "UTC",
            "stage": null,
            "week": "33",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 71,
                "name": "1 Liga",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/71.png"
            },
            "country": {
                "id": 34,
                "name": "Poland",
                "code": "PL",
                "flag": "https://media.api-sports.io/flags/pl.svg"
            },
            "teams": {
                "home": {
                    "id": 6134,
                    "name": "AWF Katowice",
                    "logo": "https://media.api-sports.io/basketball/teams/6134.png"
                },
                "away": {
                    "id": 3093,
                    "name": "MKKS Koszalin",
                    "logo": "https://media.api-sports.io/basketball/teams/3093.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 29,
                    "quarter_2": 16,
                    "quarter_3": 26,
                    "quarter_4": 22,
                    "over_time": null,
                    "total": 93
                },
                "away": {
                    "quarter_1": 19,
                    "quarter_2": 23,
                    "quarter_3": 25,
                    "quarter_4": 18,
                    "over_time": null,
                    "total": 85
                }
            }
        },
        {
            "id": 371433,
            "date": "2024-04-07T12:00:00+00:00",
            "time": "12:00",
            "timestamp": 1712491200,
            "timezone": "UTC",
            "stage": null,
            "week": null,
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 111,
                "name": "Premier League",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/111.png"
            },
            "country": {
                "id": 51,
                "name": "Belarus",
                "code": "BY",
                "flag": "https://media.api-sports.io/flags/by.svg"
            },
            "teams": {
                "home": {
                    "id": 6163,
                    "name": "Borisfen 2",
                    "logo": "https://media.api-sports.io/basketball/teams/6163.png"
                },
                "away": {
                    "id": 1349,
                    "name": "Brest",
                    "logo": "https://media.api-sports.io/basketball/teams/1349.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 14,
                    "quarter_2": 14,
                    "quarter_3": 14,
                    "quarter_4": 21,
                    "over_time": null,
                    "total": 63
                },
                "away": {
                    "quarter_1": 30,
                    "quarter_2": 12,
                    "quarter_3": 25,
                    "quarter_4": 23,
                    "over_time": null,
                    "total": 90
                }
            }
        },
        {
            "id": 388820,
            "date": "2024-04-07T12:00:00+00:00",
            "time": "12:00",
            "timestamp": 1712491200,
            "timezone": "UTC",
            "stage": null,
            "week": null,
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 82,
                "name": "VTB United League",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/82.png"
            },
            "country": {
                "id": 39,
                "name": "Russia",
                "code": "RU",
                "flag": "https://media.api-sports.io/flags/ru.svg"
            },
            "teams": {
                "home": {
                    "id": 1019,
                    "name": "Uralmash Ekaterinburg",
                    "logo": "https://media.api-sports.io/basketball/teams/1019.png"
                },
                "away": {
                    "id": 767,
                    "name": "Astana",
                    "logo": "https://media.api-sports.io/basketball/teams/767.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 19,
                    "quarter_2": 14,
                    "quarter_3": 21,
                    "quarter_4": 33,
                    "over_time": null,
                    "total": 87
                },
                "away": {
                    "quarter_1": 11,
                    "quarter_2": 13,
                    "quarter_3": 27,
                    "quarter_4": 28,
                    "over_time": null,
                    "total": 79
                }
            }
        },
        {
            "id": 389444,
            "date": "2024-04-07T12:00:00+00:00",
            "time": "12:00",
            "timestamp": 1712491200,
            "timezone": "UTC",
            "stage": null,
            "week": null,
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 34,
                "name": "Basketligaen",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/34.png"
            },
            "country": {
                "id": 13,
                "name": "Denmark",
                "code": "DK",
                "flag": "https://media.api-sports.io/flags/dk.svg"
            },
            "teams": {
                "home": {
                    "id": 467,
                    "name": "Herlev Wolfpack",
                    "logo": "https://media.api-sports.io/basketball/teams/467.png"
                },
                "away": {
                    "id": 2258,
                    "name": "Bears Academy",
                    "logo": "https://media.api-sports.io/basketball/teams/2258.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 20,
                    "quarter_2": 27,
                    "quarter_3": 20,
                    "quarter_4": 21,
                    "over_time": null,
                    "total": 88
                },
                "away": {
                    "quarter_1": 19,
                    "quarter_2": 20,
                    "quarter_3": 26,
                    "quarter_4": 14,
                    "over_time": null,
                    "total": 79
                }
            }
        },
        {
            "id": 394293,
            "date": "2024-04-07T12:00:00+00:00",
            "time": "12:00",
            "timestamp": 1712491200,
            "timezone": "UTC",
            "stage": null,
            "week": "National League - Quarter-finals",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 57,
                "name": "National League",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/57.png"
            },
            "country": {
                "id": 25,
                "name": "Kazakhstan",
                "code": "KZ",
                "flag": "https://media.api-sports.io/flags/kz.svg"
            },
            "teams": {
                "home": {
                    "id": 769,
                    "name": "Kaspiy Aktau",
                    "logo": "https://media.api-sports.io/basketball/teams/769.png"
                },
                "away": {
                    "id": 768,
                    "name": "Atyrau",
                    "logo": "https://media.api-sports.io/basketball/teams/768.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 14,
                    "quarter_2": 16,
                    "quarter_3": 16,
                    "quarter_4": 20,
                    "over_time": null,
                    "total": 66
                },
                "away": {
                    "quarter_1": 22,
                    "quarter_2": 21,
                    "quarter_3": 20,
                    "quarter_4": 26,
                    "over_time": null,
                    "total": 89
                }
            }
        },
        {
            "id": 394921,
            "date": "2024-04-07T12:00:00+00:00",
            "time": "12:00",
            "timestamp": 1712491200,
            "timezone": "UTC",
            "stage": null,
            "week": "2",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 45,
                "name": "Basket League",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/45.png"
            },
            "country": {
                "id": 18,
                "name": "Greece",
                "code": "GR",
                "flag": "https://media.api-sports.io/flags/gr.svg"
            },
            "teams": {
                "home": {
                    "id": 1542,
                    "name": "Olympiacos",
                    "logo": "https://media.api-sports.io/basketball/teams/1542.png"
                },
                "away": {
                    "id": 616,
                    "name": "Peristeri",
                    "logo": "https://media.api-sports.io/basketball/teams/616.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 23,
                    "quarter_2": 20,
                    "quarter_3": 21,
                    "quarter_4": 27,
                    "over_time": null,
                    "total": 91
                },
                "away": {
                    "quarter_1": 23,
                    "quarter_2": 29,
                    "quarter_3": 15,
                    "quarter_4": 16,
                    "over_time": null,
                    "total": 83
                }
            }
        },
        {
            "id": 395018,
            "date": "2024-04-07T12:00:00+00:00",
            "time": "12:00",
            "timestamp": 1712491200,
            "timezone": "UTC",
            "stage": null,
            "week": "Top Division Women - Quarter-finals",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 25,
                "name": "Top Division Women",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/25.png"
            },
            "country": {
                "id": 7,
                "name": "Belgium",
                "code": "BE",
                "flag": "https://media.api-sports.io/flags/be.svg"
            },
            "teams": {
                "home": {
                    "id": 317,
                    "name": "Mechelen W",
                    "logo": "https://media.api-sports.io/basketball/teams/317.png"
                },
                "away": {
                    "id": 1423,
                    "name": "Waregem W",
                    "logo": "https://media.api-sports.io/basketball/teams/1423.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 19,
                    "quarter_2": 20,
                    "quarter_3": 25,
                    "quarter_4": 23,
                    "over_time": null,
                    "total": 87
                },
                "away": {
                    "quarter_1": 7,
                    "quarter_2": 20,
                    "quarter_3": 4,
                    "quarter_4": 7,
                    "over_time": null,
                    "total": 38
                }
            }
        },
        {
            "id": 395093,
            "date": "2024-04-07T12:00:00+00:00",
            "time": "12:00",
            "timestamp": 1712491200,
            "timezone": "UTC",
            "stage": null,
            "week": "KBSL Women - Final",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 105,
                "name": "KBSL W",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/105.png"
            },
            "country": {
                "id": 48,
                "name": "Turkey",
                "code": "TR",
                "flag": "https://media.api-sports.io/flags/tr.svg"
            },
            "teams": {
                "home": {
                    "id": 1257,
                    "name": "Fenerbahce W",
                    "logo": "https://media.api-sports.io/basketball/teams/1257.png"
                },
                "away": {
                    "id": 2345,
                    "name": "CBK Mersin W",
                    "logo": "https://media.api-sports.io/basketball/teams/2345.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 24,
                    "quarter_2": 11,
                    "quarter_3": 28,
                    "quarter_4": 22,
                    "over_time": null,
                    "total": 85
                },
                "away": {
                    "quarter_1": 18,
                    "quarter_2": 16,
                    "quarter_3": 12,
                    "quarter_4": 18,
                    "over_time": null,
                    "total": 64
                }
            }
        },
        {
            "id": 395187,
            "date": "2024-04-07T12:00:00+00:00",
            "time": "12:00",
            "timestamp": 1712491200,
            "timezone": "UTC",
            "stage": null,
            "week": "Basketligan Women - Quarter-finals",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 97,
                "name": "Basketligan W",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/97.png"
            },
            "country": {
                "id": 46,
                "name": "Sweden",
                "code": "SE",
                "flag": "https://media.api-sports.io/flags/se.svg"
            },
            "teams": {
                "home": {
                    "id": 1215,
                    "name": "Uppsala W",
                    "logo": "https://media.api-sports.io/basketball/teams/1215.png"
                },
                "away": {
                    "id": 1194,
                    "name": "Ostersund W",
                    "logo": "https://media.api-sports.io/basketball/teams/1194.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 23,
                    "quarter_2": 21,
                    "quarter_3": 11,
                    "quarter_4": 26,
                    "over_time": null,
                    "total": 81
                },
                "away": {
                    "quarter_1": 14,
                    "quarter_2": 15,
                    "quarter_3": 18,
                    "quarter_4": 16,
                    "over_time": null,
                    "total": 63
                }
            }
        },
        {
            "id": 355181,
            "date": "2024-04-07T12:30:00+00:00",
            "time": "12:30",
            "timestamp": 1712493000,
            "timezone": "UTC",
            "stage": null,
            "week": "28",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 2,
                "name": "LNB",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/2.png"
            },
            "country": {
                "id": 4,
                "name": "France",
                "code": "FR",
                "flag": "https://media.api-sports.io/flags/fr.svg"
            },
            "teams": {
                "home": {
                    "id": 16,
                    "name": "Monaco",
                    "logo": "https://media.api-sports.io/basketball/teams/16.png"
                },
                "away": {
                    "id": 100,
                    "name": "Nancy",
                    "logo": "https://media.api-sports.io/basketball/teams/100.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 28,
                    "quarter_2": 25,
                    "quarter_3": 19,
                    "quarter_4": 14,
                    "over_time": null,
                    "total": 86
                },
                "away": {
                    "quarter_1": 25,
                    "quarter_2": 25,
                    "quarter_3": 26,
                    "quarter_4": 24,
                    "over_time": null,
                    "total": 100
                }
            }
        },
        {
            "id": 394695,
            "date": "2024-04-07T12:30:00+00:00",
            "time": "12:30",
            "timestamp": 1712493000,
            "timezone": "UTC",
            "stage": null,
            "week": "26",
            "status": {
                "long": "After Over Time",
                "short": "AOT",
                "timer": null
            },
            "league": {
                "id": 104,
                "name": "Super Ligi",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/104.png"
            },
            "country": {
                "id": 48,
                "name": "Turkey",
                "code": "TR",
                "flag": "https://media.api-sports.io/flags/tr.svg"
            },
            "teams": {
                "home": {
                    "id": 2264,
                    "name": "Petkim Spor",
                    "logo": "https://media.api-sports.io/basketball/teams/2264.png"
                },
                "away": {
                    "id": 1277,
                    "name": "Turk Telekom",
                    "logo": "https://media.api-sports.io/basketball/teams/1277.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 25,
                    "quarter_2": 22,
                    "quarter_3": 16,
                    "quarter_4": 20,
                    "over_time": 13,
                    "total": 96
                },
                "away": {
                    "quarter_1": 20,
                    "quarter_2": 24,
                    "quarter_3": 21,
                    "quarter_4": 18,
                    "over_time": 11,
                    "total": 94
                }
            }
        },
        {
            "id": 394617,
            "date": "2024-04-07T12:45:00+00:00",
            "time": "12:45",
            "timestamp": 1712493900,
            "timezone": "UTC",
            "stage": null,
            "week": "32",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 102,
                "name": "TBL",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/102.png"
            },
            "country": {
                "id": 48,
                "name": "Turkey",
                "code": "TR",
                "flag": "https://media.api-sports.io/flags/tr.svg"
            },
            "teams": {
                "home": {
                    "id": 1302,
                    "name": "Konyaspor",
                    "logo": "https://media.api-sports.io/basketball/teams/1302.png"
                },
                "away": {
                    "id": 2461,
                    "name": "Harem Spor",
                    "logo": "https://media.api-sports.io/basketball/teams/2461.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 30,
                    "quarter_2": 18,
                    "quarter_3": 25,
                    "quarter_4": 8,
                    "over_time": null,
                    "total": 81
                },
                "away": {
                    "quarter_1": 17,
                    "quarter_2": 18,
                    "quarter_3": 18,
                    "quarter_4": 32,
                    "over_time": null,
                    "total": 85
                }
            }
        },
        {
            "id": 350961,
            "date": "2024-04-07T13:00:00+00:00",
            "time": "13:00",
            "timestamp": 1712494800,
            "timezone": "UTC",
            "stage": null,
            "week": null,
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 99,
                "name": "Superettan",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/99.png"
            },
            "country": {
                "id": 46,
                "name": "Sweden",
                "code": "SE",
                "flag": "https://media.api-sports.io/flags/se.svg"
            },
            "teams": {
                "home": {
                    "id": 4931,
                    "name": "Eskilstuna",
                    "logo": "https://media.api-sports.io/basketball/teams/4931.png"
                },
                "away": {
                    "id": 1200,
                    "name": "Djurgarden",
                    "logo": "https://media.api-sports.io/basketball/teams/1200.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 28,
                    "quarter_2": 21,
                    "quarter_3": 30,
                    "quarter_4": 22,
                    "over_time": null,
                    "total": 101
                },
                "away": {
                    "quarter_1": 19,
                    "quarter_2": 24,
                    "quarter_3": 20,
                    "quarter_4": 31,
                    "over_time": null,
                    "total": 94
                }
            }
        },
        {
            "id": 350963,
            "date": "2024-04-07T13:00:00+00:00",
            "time": "13:00",
            "timestamp": 1712494800,
            "timezone": "UTC",
            "stage": null,
            "week": null,
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 99,
                "name": "Superettan",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/99.png"
            },
            "country": {
                "id": 46,
                "name": "Sweden",
                "code": "SE",
                "flag": "https://media.api-sports.io/flags/se.svg"
            },
            "teams": {
                "home": {
                    "id": 2313,
                    "name": "Ockelbo",
                    "logo": "https://media.api-sports.io/basketball/teams/2313.png"
                },
                "away": {
                    "id": 1222,
                    "name": "Hogsbo",
                    "logo": "https://media.api-sports.io/basketball/teams/1222.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 27,
                    "quarter_2": 16,
                    "quarter_3": 19,
                    "quarter_4": 28,
                    "over_time": null,
                    "total": 90
                },
                "away": {
                    "quarter_1": 31,
                    "quarter_2": 25,
                    "quarter_3": 20,
                    "quarter_4": 25,
                    "over_time": null,
                    "total": 101
                }
            }
        },
        {
            "id": 351459,
            "date": "2024-04-07T13:00:00+00:00",
            "time": "13:00",
            "timestamp": 1712494800,
            "timezone": "UTC",
            "stage": null,
            "week": null,
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 98,
                "name": "Basketettan W",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/98.png"
            },
            "country": {
                "id": 46,
                "name": "Sweden",
                "code": "SE",
                "flag": "https://media.api-sports.io/flags/se.svg"
            },
            "teams": {
                "home": {
                    "id": 1192,
                    "name": "Norrort W",
                    "logo": "https://media.api-sports.io/basketball/teams/1192.png"
                },
                "away": {
                    "id": 5687,
                    "name": "Eskilstuna W",
                    "logo": "https://media.api-sports.io/basketball/teams/5687.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 14,
                    "quarter_2": 15,
                    "quarter_3": 10,
                    "quarter_4": 12,
                    "over_time": null,
                    "total": 51
                },
                "away": {
                    "quarter_1": 15,
                    "quarter_2": 22,
                    "quarter_3": 28,
                    "quarter_4": 12,
                    "over_time": null,
                    "total": 77
                }
            }
        },
        {
            "id": 355820,
            "date": "2024-04-07T13:00:00+00:00",
            "time": "13:00",
            "timestamp": 1712494800,
            "timezone": "UTC",
            "stage": null,
            "week": "31",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 42,
                "name": "Pro A",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/42.png"
            },
            "country": {
                "id": 17,
                "name": "Germany",
                "code": "DE",
                "flag": "https://media.api-sports.io/flags/de.svg"
            },
            "teams": {
                "home": {
                    "id": 523,
                    "name": "Bayreuth",
                    "logo": "https://media.api-sports.io/basketball/teams/523.png"
                },
                "away": {
                    "id": 549,
                    "name": "Bremerhaven",
                    "logo": "https://media.api-sports.io/basketball/teams/549.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 25,
                    "quarter_2": 21,
                    "quarter_3": 14,
                    "quarter_4": 24,
                    "over_time": null,
                    "total": 84
                },
                "away": {
                    "quarter_1": 16,
                    "quarter_2": 21,
                    "quarter_3": 29,
                    "quarter_4": 21,
                    "over_time": null,
                    "total": 87
                }
            }
        },
        {
            "id": 355821,
            "date": "2024-04-07T13:00:00+00:00",
            "time": "13:00",
            "timestamp": 1712494800,
            "timezone": "UTC",
            "stage": null,
            "week": "31",
            "status": {
                "long": "After Over Time",
                "short": "AOT",
                "timer": null
            },
            "league": {
                "id": 42,
                "name": "Pro A",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/42.png"
            },
            "country": {
                "id": 17,
                "name": "Germany",
                "code": "DE",
                "flag": "https://media.api-sports.io/flags/de.svg"
            },
            "teams": {
                "home": {
                    "id": 526,
                    "name": "Frankfurt",
                    "logo": "https://media.api-sports.io/basketball/teams/526.png"
                },
                "away": {
                    "id": 553,
                    "name": "Jena",
                    "logo": "https://media.api-sports.io/basketball/teams/553.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 12,
                    "quarter_2": 18,
                    "quarter_3": 16,
                    "quarter_4": 17,
                    "over_time": 2,
                    "total": 65
                },
                "away": {
                    "quarter_1": 12,
                    "quarter_2": 18,
                    "quarter_3": 22,
                    "quarter_4": 11,
                    "over_time": 14,
                    "total": 77
                }
            }
        },
        {
            "id": 379804,
            "date": "2024-04-07T13:00:00+00:00",
            "time": "13:00",
            "timestamp": 1712494800,
            "timezone": "UTC",
            "stage": null,
            "week": "21",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 388,
                "name": "Superliga",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/388.png"
            },
            "country": {
                "id": 76,
                "name": "Albania",
                "code": "AL",
                "flag": "https://media.api-sports.io/flags/al.svg"
            },
            "teams": {
                "home": {
                    "id": 6256,
                    "name": "Fieri",
                    "logo": "https://media.api-sports.io/basketball/teams/6256.png"
                },
                "away": {
                    "id": 4879,
                    "name": "Kamza Basket",
                    "logo": "https://media.api-sports.io/basketball/teams/4879.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 11,
                    "quarter_2": 16,
                    "quarter_3": 21,
                    "quarter_4": 11,
                    "over_time": null,
                    "total": 59
                },
                "away": {
                    "quarter_1": 35,
                    "quarter_2": 29,
                    "quarter_3": 13,
                    "quarter_4": 21,
                    "over_time": null,
                    "total": 98
                }
            }
        },
        {
            "id": 388822,
            "date": "2024-04-07T13:00:00+00:00",
            "time": "13:00",
            "timestamp": 1712494800,
            "timezone": "UTC",
            "stage": null,
            "week": null,
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 82,
                "name": "VTB United League",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/82.png"
            },
            "country": {
                "id": 39,
                "name": "Russia",
                "code": "RU",
                "flag": "https://media.api-sports.io/flags/ru.svg"
            },
            "teams": {
                "home": {
                    "id": 2245,
                    "name": "Samara",
                    "logo": "https://media.api-sports.io/basketball/teams/2245.png"
                },
                "away": {
                    "id": 1028,
                    "name": "Saratov",
                    "logo": "https://media.api-sports.io/basketball/teams/1028.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 18,
                    "quarter_2": 26,
                    "quarter_3": 20,
                    "quarter_4": 22,
                    "over_time": null,
                    "total": 86
                },
                "away": {
                    "quarter_1": 27,
                    "quarter_2": 16,
                    "quarter_3": 16,
                    "quarter_4": 12,
                    "over_time": null,
                    "total": 71
                }
            }
        },
        {
            "id": 394717,
            "date": "2024-04-07T13:04:00+00:00",
            "time": "13:04",
            "timestamp": 1712495040,
            "timezone": "UTC",
            "stage": null,
            "week": "Basketligan - Quarter-finals",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 93,
                "name": "Basketligan",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/93.png"
            },
            "country": {
                "id": 46,
                "name": "Sweden",
                "code": "SE",
                "flag": "https://media.api-sports.io/flags/se.svg"
            },
            "teams": {
                "home": {
                    "id": 1202,
                    "name": "Koping Stars",
                    "logo": "https://media.api-sports.io/basketball/teams/1202.png"
                },
                "away": {
                    "id": 1204,
                    "name": "Norrkoping",
                    "logo": "https://media.api-sports.io/basketball/teams/1204.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 19,
                    "quarter_2": 17,
                    "quarter_3": 24,
                    "quarter_4": 15,
                    "over_time": null,
                    "total": 75
                },
                "away": {
                    "quarter_1": 28,
                    "quarter_2": 30,
                    "quarter_3": 18,
                    "quarter_4": 18,
                    "over_time": null,
                    "total": 94
                }
            }
        },
        {
            "id": 370227,
            "date": "2024-04-07T13:30:00+00:00",
            "time": "13:30",
            "timestamp": 1712496600,
            "timezone": "UTC",
            "stage": null,
            "week": "27",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 40,
                "name": "BBL",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/40.png"
            },
            "country": {
                "id": 17,
                "name": "Germany",
                "code": "DE",
                "flag": "https://media.api-sports.io/flags/de.svg"
            },
            "teams": {
                "home": {
                    "id": 528,
                    "name": "Gottingen",
                    "logo": "https://media.api-sports.io/basketball/teams/528.png"
                },
                "away": {
                    "id": 5923,
                    "name": "Wurzburg",
                    "logo": "https://media.api-sports.io/basketball/teams/5923.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 21,
                    "quarter_2": 13,
                    "quarter_3": 16,
                    "quarter_4": 17,
                    "over_time": null,
                    "total": 67
                },
                "away": {
                    "quarter_1": 16,
                    "quarter_2": 14,
                    "quarter_3": 24,
                    "quarter_4": 21,
                    "over_time": null,
                    "total": 75
                }
            }
        },
        {
            "id": 370228,
            "date": "2024-04-07T13:30:00+00:00",
            "time": "13:30",
            "timestamp": 1712496600,
            "timezone": "UTC",
            "stage": null,
            "week": "27",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 40,
                "name": "BBL",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/40.png"
            },
            "country": {
                "id": 17,
                "name": "Germany",
                "code": "DE",
                "flag": "https://media.api-sports.io/flags/de.svg"
            },
            "teams": {
                "home": {
                    "id": 519,
                    "name": "Alba Berlin",
                    "logo": "https://media.api-sports.io/basketball/teams/519.png"
                },
                "away": {
                    "id": 530,
                    "name": "Ludwigsburg",
                    "logo": "https://media.api-sports.io/basketball/teams/530.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 27,
                    "quarter_2": 28,
                    "quarter_3": 25,
                    "quarter_4": 20,
                    "over_time": null,
                    "total": 100
                },
                "away": {
                    "quarter_1": 23,
                    "quarter_2": 21,
                    "quarter_3": 24,
                    "quarter_4": 23,
                    "over_time": null,
                    "total": 91
                }
            }
        },
        {
            "id": 395016,
            "date": "2024-04-07T13:30:00+00:00",
            "time": "13:30",
            "timestamp": 1712496600,
            "timezone": "UTC",
            "stage": null,
            "week": "Top Division Women - Quarter-finals",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 25,
                "name": "Top Division Women",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/25.png"
            },
            "country": {
                "id": 7,
                "name": "Belgium",
                "code": "BE",
                "flag": "https://media.api-sports.io/flags/be.svg"
            },
            "teams": {
                "home": {
                    "id": 311,
                    "name": "Braine W",
                    "logo": "https://media.api-sports.io/basketball/teams/311.png"
                },
                "away": {
                    "id": 312,
                    "name": "Charleroi W",
                    "logo": "https://media.api-sports.io/basketball/teams/312.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 23,
                    "quarter_2": 28,
                    "quarter_3": 23,
                    "quarter_4": 26,
                    "over_time": null,
                    "total": 100
                },
                "away": {
                    "quarter_1": 16,
                    "quarter_2": 16,
                    "quarter_3": 14,
                    "quarter_4": 17,
                    "over_time": null,
                    "total": 63
                }
            }
        },
        {
            "id": 395034,
            "date": "2024-04-07T13:45:00+00:00",
            "time": "13:45",
            "timestamp": 1712497500,
            "timezone": "UTC",
            "stage": null,
            "week": "Division 1 - Quarter-finals",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 409,
                "name": "Division 1",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/409.png"
            },
            "country": {
                "id": 77,
                "name": "Lebanon",
                "code": "LB",
                "flag": "https://media.api-sports.io/flags/lb.svg"
            },
            "teams": {
                "home": {
                    "id": 6357,
                    "name": "Champville",
                    "logo": "https://media.api-sports.io/basketball/teams/6357.png"
                },
                "away": {
                    "id": 6358,
                    "name": "Homenetmen Beirut",
                    "logo": "https://media.api-sports.io/basketball/teams/6358.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 18,
                    "quarter_2": 20,
                    "quarter_3": 28,
                    "quarter_4": 19,
                    "over_time": null,
                    "total": 85
                },
                "away": {
                    "quarter_1": 21,
                    "quarter_2": 25,
                    "quarter_3": 20,
                    "quarter_4": 27,
                    "over_time": null,
                    "total": 93
                }
            }
        },
        {
            "id": 350958,
            "date": "2024-04-07T14:00:00+00:00",
            "time": "14:00",
            "timestamp": 1712498400,
            "timezone": "UTC",
            "stage": null,
            "week": null,
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 99,
                "name": "Superettan",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/99.png"
            },
            "country": {
                "id": 46,
                "name": "Sweden",
                "code": "SE",
                "flag": "https://media.api-sports.io/flags/se.svg"
            },
            "teams": {
                "home": {
                    "id": 3070,
                    "name": "KFUM Kalmar",
                    "logo": "https://media.api-sports.io/basketball/teams/3070.png"
                },
                "away": {
                    "id": 1223,
                    "name": "IK Eos",
                    "logo": "https://media.api-sports.io/basketball/teams/1223.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 22,
                    "quarter_2": 23,
                    "quarter_3": 27,
                    "quarter_4": 24,
                    "over_time": null,
                    "total": 96
                },
                "away": {
                    "quarter_1": 28,
                    "quarter_2": 18,
                    "quarter_3": 29,
                    "quarter_4": 25,
                    "over_time": null,
                    "total": 100
                }
            }
        },
        {
            "id": 351458,
            "date": "2024-04-07T14:00:00+00:00",
            "time": "14:00",
            "timestamp": 1712498400,
            "timezone": "UTC",
            "stage": null,
            "week": null,
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 98,
                "name": "Basketettan W",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/98.png"
            },
            "country": {
                "id": 46,
                "name": "Sweden",
                "code": "SE",
                "flag": "https://media.api-sports.io/flags/se.svg"
            },
            "teams": {
                "home": {
                    "id": 3075,
                    "name": "Malbas Malmo W",
                    "logo": "https://media.api-sports.io/basketball/teams/3075.png"
                },
                "away": {
                    "id": 1186,
                    "name": "IK Eos Utveckling W",
                    "logo": "https://media.api-sports.io/basketball/teams/1186.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 21,
                    "quarter_2": 25,
                    "quarter_3": 13,
                    "quarter_4": 15,
                    "over_time": null,
                    "total": 74
                },
                "away": {
                    "quarter_1": 9,
                    "quarter_2": 14,
                    "quarter_3": 12,
                    "quarter_4": 16,
                    "over_time": null,
                    "total": 51
                }
            }
        },
        {
            "id": 357471,
            "date": "2024-04-07T14:00:00+00:00",
            "time": "14:00",
            "timestamp": 1712498400,
            "timezone": "UTC",
            "stage": null,
            "week": "19",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 74,
                "name": "LPB",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/74.png"
            },
            "country": {
                "id": 35,
                "name": "Portugal",
                "code": "PT",
                "flag": "https://media.api-sports.io/flags/pt.svg"
            },
            "teams": {
                "home": {
                    "id": 936,
                    "name": "FC Porto",
                    "logo": "https://media.api-sports.io/basketball/teams/936.png"
                },
                "away": {
                    "id": 3387,
                    "name": "Galomar",
                    "logo": "https://media.api-sports.io/basketball/teams/3387.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 24,
                    "quarter_2": 19,
                    "quarter_3": 22,
                    "quarter_4": 26,
                    "over_time": null,
                    "total": 91
                },
                "away": {
                    "quarter_1": 20,
                    "quarter_2": 27,
                    "quarter_3": 23,
                    "quarter_4": 15,
                    "over_time": null,
                    "total": 85
                }
            }
        },
        {
            "id": 357474,
            "date": "2024-04-07T14:00:00+00:00",
            "time": "14:00",
            "timestamp": 1712498400,
            "timezone": "UTC",
            "stage": null,
            "week": "19",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 74,
                "name": "LPB",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/74.png"
            },
            "country": {
                "id": 35,
                "name": "Portugal",
                "code": "PT",
                "flag": "https://media.api-sports.io/flags/pt.svg"
            },
            "teams": {
                "home": {
                    "id": 945,
                    "name": "Vitoria",
                    "logo": "https://media.api-sports.io/basketball/teams/945.png"
                },
                "away": {
                    "id": 946,
                    "name": "Imortal",
                    "logo": "https://media.api-sports.io/basketball/teams/946.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 22,
                    "quarter_2": 26,
                    "quarter_3": 15,
                    "quarter_4": 17,
                    "over_time": null,
                    "total": 80
                },
                "away": {
                    "quarter_1": 17,
                    "quarter_2": 24,
                    "quarter_3": 24,
                    "quarter_4": 9,
                    "over_time": null,
                    "total": 74
                }
            }
        },
        {
            "id": 360216,
            "date": "2024-04-07T14:00:00+00:00",
            "time": "14:00",
            "timestamp": 1712498400,
            "timezone": "UTC",
            "stage": null,
            "week": null,
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 94,
                "name": "Liga Femenina W",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/94.png"
            },
            "country": {
                "id": 45,
                "name": "Spain",
                "code": "ES",
                "flag": "https://media.api-sports.io/flags/es.svg"
            },
            "teams": {
                "home": {
                    "id": 1347,
                    "name": "Sheffield Hatters W",
                    "logo": "https://media.api-sports.io/basketball/teams/1347.png"
                },
                "away": {
                    "id": 1339,
                    "name": "Durham Palatinates W",
                    "logo": "https://media.api-sports.io/basketball/teams/1339.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 25,
                    "quarter_2": 22,
                    "quarter_3": 16,
                    "quarter_4": 28,
                    "over_time": null,
                    "total": 91
                },
                "away": {
                    "quarter_1": 11,
                    "quarter_2": 21,
                    "quarter_3": 12,
                    "quarter_4": 18,
                    "over_time": null,
                    "total": 62
                }
            }
        },
        {
            "id": 362082,
            "date": "2024-04-07T14:00:00+00:00",
            "time": "14:00",
            "timestamp": 1712498400,
            "timezone": "UTC",
            "stage": null,
            "week": null,
            "status": {
                "long": "Cancelled",
                "short": "CANC",
                "timer": null
            },
            "league": {
                "id": 60,
                "name": "LKL",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/60.png"
            },
            "country": {
                "id": 27,
                "name": "Lithuania",
                "code": "LT",
                "flag": "https://media.api-sports.io/flags/lt.svg"
            },
            "teams": {
                "home": {
                    "id": 5562,
                    "name": "Gargzdai",
                    "logo": "https://media.api-sports.io/basketball/teams/5562.png"
                },
                "away": {
                    "id": 796,
                    "name": "Zalgiris Kaunas",
                    "logo": "https://media.api-sports.io/basketball/teams/796.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": null,
                    "quarter_2": null,
                    "quarter_3": null,
                    "quarter_4": null,
                    "over_time": null,
                    "total": null
                },
                "away": {
                    "quarter_1": null,
                    "quarter_2": null,
                    "quarter_3": null,
                    "quarter_4": null,
                    "over_time": null,
                    "total": null
                }
            }
        },
        {
            "id": 362531,
            "date": "2024-04-07T14:00:00+00:00",
            "time": "14:00",
            "timestamp": 1712498400,
            "timezone": "UTC",
            "stage": null,
            "week": "33",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 71,
                "name": "1 Liga",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/71.png"
            },
            "country": {
                "id": 34,
                "name": "Poland",
                "code": "PL",
                "flag": "https://media.api-sports.io/flags/pl.svg"
            },
            "teams": {
                "home": {
                    "id": 891,
                    "name": "Gornik Walbrzych",
                    "logo": "https://media.api-sports.io/basketball/teams/891.png"
                },
                "away": {
                    "id": 909,
                    "name": "HydroTruck Radom",
                    "logo": "https://media.api-sports.io/basketball/teams/909.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 21,
                    "quarter_2": 21,
                    "quarter_3": 16,
                    "quarter_4": 18,
                    "over_time": null,
                    "total": 76
                },
                "away": {
                    "quarter_1": 23,
                    "quarter_2": 19,
                    "quarter_3": 16,
                    "quarter_4": 17,
                    "over_time": null,
                    "total": 75
                }
            }
        },
        {
            "id": 363550,
            "date": "2024-04-07T14:00:00+00:00",
            "time": "14:00",
            "timestamp": 1712498400,
            "timezone": "UTC",
            "stage": null,
            "week": null,
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 108,
                "name": "BBL",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/108.png"
            },
            "country": {
                "id": 50,
                "name": "United Kingdom",
                "code": "GB",
                "flag": "https://media.api-sports.io/flags/gb.svg"
            },
            "teams": {
                "home": {
                    "id": 1324,
                    "name": "Bristol Flyers",
                    "logo": "https://media.api-sports.io/basketball/teams/1324.png"
                },
                "away": {
                    "id": 1329,
                    "name": "London Lions",
                    "logo": "https://media.api-sports.io/basketball/teams/1329.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 14,
                    "quarter_2": 24,
                    "quarter_3": 18,
                    "quarter_4": 15,
                    "over_time": null,
                    "total": 71
                },
                "away": {
                    "quarter_1": 24,
                    "quarter_2": 18,
                    "quarter_3": 18,
                    "quarter_4": 26,
                    "over_time": null,
                    "total": 86
                }
            }
        },
        {
            "id": 365949,
            "date": "2024-04-07T14:00:00+00:00",
            "time": "14:00",
            "timestamp": 1712498400,
            "timezone": "UTC",
            "stage": null,
            "week": "23",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 236,
                "name": "A2 Women",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/236.png"
            },
            "country": {
                "id": 18,
                "name": "Greece",
                "code": "GR",
                "flag": "https://media.api-sports.io/flags/gr.svg"
            },
            "teams": {
                "home": {
                    "id": 3701,
                    "name": "Amyntas W",
                    "logo": "https://media.api-sports.io/basketball/teams/3701.png"
                },
                "away": {
                    "id": 3694,
                    "name": "Kronos W",
                    "logo": "https://media.api-sports.io/basketball/teams/3694.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 9,
                    "quarter_2": 16,
                    "quarter_3": 15,
                    "quarter_4": 12,
                    "over_time": null,
                    "total": 52
                },
                "away": {
                    "quarter_1": 17,
                    "quarter_2": 17,
                    "quarter_3": 14,
                    "quarter_4": 14,
                    "over_time": null,
                    "total": 62
                }
            }
        },
        {
            "id": 365950,
            "date": "2024-04-07T14:00:00+00:00",
            "time": "14:00",
            "timestamp": 1712498400,
            "timezone": "UTC",
            "stage": null,
            "week": "23",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 236,
                "name": "A2 Women",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/236.png"
            },
            "country": {
                "id": 18,
                "name": "Greece",
                "code": "GR",
                "flag": "https://media.api-sports.io/flags/gr.svg"
            },
            "teams": {
                "home": {
                    "id": 3710,
                    "name": "Danaoi Argous W",
                    "logo": "https://media.api-sports.io/basketball/teams/3710.png"
                },
                "away": {
                    "id": 6091,
                    "name": "Falirou W",
                    "logo": "https://media.api-sports.io/basketball/teams/6091.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 16,
                    "quarter_2": 10,
                    "quarter_3": 11,
                    "quarter_4": 15,
                    "over_time": null,
                    "total": 52
                },
                "away": {
                    "quarter_1": 20,
                    "quarter_2": 15,
                    "quarter_3": 16,
                    "quarter_4": 17,
                    "over_time": null,
                    "total": 68
                }
            }
        },
        {
            "id": 379806,
            "date": "2024-04-07T14:00:00+00:00",
            "time": "14:00",
            "timestamp": 1712498400,
            "timezone": "UTC",
            "stage": null,
            "week": "21",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 388,
                "name": "Superliga",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/388.png"
            },
            "country": {
                "id": 76,
                "name": "Albania",
                "code": "AL",
                "flag": "https://media.api-sports.io/flags/al.svg"
            },
            "teams": {
                "home": {
                    "id": 4882,
                    "name": "Vllaznia",
                    "logo": "https://media.api-sports.io/basketball/teams/4882.png"
                },
                "away": {
                    "id": 5992,
                    "name": "Partizani Tirana",
                    "logo": "https://media.api-sports.io/basketball/teams/5992.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 23,
                    "quarter_2": 24,
                    "quarter_3": 20,
                    "quarter_4": 18,
                    "over_time": null,
                    "total": 85
                },
                "away": {
                    "quarter_1": 21,
                    "quarter_2": 13,
                    "quarter_3": 15,
                    "quarter_4": 17,
                    "over_time": null,
                    "total": 66
                }
            }
        },
        {
            "id": 388823,
            "date": "2024-04-07T14:00:00+00:00",
            "time": "14:00",
            "timestamp": 1712498400,
            "timezone": "UTC",
            "stage": null,
            "week": null,
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 82,
                "name": "VTB United League",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/82.png"
            },
            "country": {
                "id": 39,
                "name": "Russia",
                "code": "RU",
                "flag": "https://media.api-sports.io/flags/ru.svg"
            },
            "teams": {
                "home": {
                    "id": 2244,
                    "name": "Runa Basket Moscow",
                    "logo": "https://media.api-sports.io/basketball/teams/2244.png"
                },
                "away": {
                    "id": 1010,
                    "name": "MBA Moscow",
                    "logo": "https://media.api-sports.io/basketball/teams/1010.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 19,
                    "quarter_2": 23,
                    "quarter_3": 12,
                    "quarter_4": 21,
                    "over_time": null,
                    "total": 75
                },
                "away": {
                    "quarter_1": 19,
                    "quarter_2": 21,
                    "quarter_3": 21,
                    "quarter_4": 21,
                    "over_time": null,
                    "total": 82
                }
            }
        },
        {
            "id": 395017,
            "date": "2024-04-07T14:00:00+00:00",
            "time": "14:00",
            "timestamp": 1712498400,
            "timezone": "UTC",
            "stage": null,
            "week": "Top Division Women - Quarter-finals",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 25,
                "name": "Top Division Women",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/25.png"
            },
            "country": {
                "id": 7,
                "name": "Belgium",
                "code": "BE",
                "flag": "https://media.api-sports.io/flags/be.svg"
            },
            "teams": {
                "home": {
                    "id": 313,
                    "name": "Kortrijk W",
                    "logo": "https://media.api-sports.io/basketball/teams/313.png"
                },
                "away": {
                    "id": 318,
                    "name": "Namur W",
                    "logo": "https://media.api-sports.io/basketball/teams/318.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 8,
                    "quarter_2": 7,
                    "quarter_3": 21,
                    "quarter_4": 22,
                    "over_time": null,
                    "total": 58
                },
                "away": {
                    "quarter_1": 21,
                    "quarter_2": 18,
                    "quarter_3": 15,
                    "quarter_4": 9,
                    "over_time": null,
                    "total": 63
                }
            }
        },
        {
            "id": 395081,
            "date": "2024-04-07T14:00:00+00:00",
            "time": "14:00",
            "timestamp": 1712498400,
            "timezone": "UTC",
            "stage": null,
            "week": "DBBL Women - Semi-finals",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 41,
                "name": "DBBL Women",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/41.png"
            },
            "country": {
                "id": 17,
                "name": "Germany",
                "code": "DE",
                "flag": "https://media.api-sports.io/flags/de.svg"
            },
            "teams": {
                "home": {
                    "id": 542,
                    "name": "Keltern W",
                    "logo": "https://media.api-sports.io/basketball/teams/542.png"
                },
                "away": {
                    "id": 545,
                    "name": "TK Hannover W",
                    "logo": "https://media.api-sports.io/basketball/teams/545.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 20,
                    "quarter_2": 15,
                    "quarter_3": 9,
                    "quarter_4": 16,
                    "over_time": null,
                    "total": 60
                },
                "away": {
                    "quarter_1": 20,
                    "quarter_2": 9,
                    "quarter_3": 10,
                    "quarter_4": 19,
                    "over_time": null,
                    "total": 58
                }
            }
        },
        {
            "id": 395104,
            "date": "2024-04-07T14:00:00+00:00",
            "time": "14:00",
            "timestamp": 1712498400,
            "timezone": "UTC",
            "stage": null,
            "week": "A1 Women - Semi-finals",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 234,
                "name": "A1 Women",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/234.png"
            },
            "country": {
                "id": 18,
                "name": "Greece",
                "code": "GR",
                "flag": "https://media.api-sports.io/flags/gr.svg"
            },
            "teams": {
                "home": {
                    "id": 3688,
                    "name": "Giannina W",
                    "logo": "https://media.api-sports.io/basketball/teams/3688.png"
                },
                "away": {
                    "id": 3691,
                    "name": "PAOK W",
                    "logo": "https://media.api-sports.io/basketball/teams/3691.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 19,
                    "quarter_2": 17,
                    "quarter_3": 18,
                    "quarter_4": 9,
                    "over_time": null,
                    "total": 63
                },
                "away": {
                    "quarter_1": 15,
                    "quarter_2": 13,
                    "quarter_3": 16,
                    "quarter_4": 13,
                    "over_time": null,
                    "total": 57
                }
            }
        },
        {
            "id": 395185,
            "date": "2024-04-07T14:00:00+00:00",
            "time": "14:00",
            "timestamp": 1712498400,
            "timezone": "UTC",
            "stage": null,
            "week": "I Divisioona Women - Final",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 230,
                "name": "I Divisioona Women",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/230.png"
            },
            "country": {
                "id": 15,
                "name": "Finland",
                "code": "FI",
                "flag": "https://media.api-sports.io/flags/fi.svg"
            },
            "teams": {
                "home": {
                    "id": 3643,
                    "name": "BC Nokia W",
                    "logo": "https://media.api-sports.io/basketball/teams/3643.png"
                },
                "away": {
                    "id": 5626,
                    "name": "Turun NMKY W",
                    "logo": "https://media.api-sports.io/basketball/teams/5626.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 14,
                    "quarter_2": 20,
                    "quarter_3": 15,
                    "quarter_4": 10,
                    "over_time": null,
                    "total": 59
                },
                "away": {
                    "quarter_1": 7,
                    "quarter_2": 4,
                    "quarter_3": 12,
                    "quarter_4": 12,
                    "over_time": null,
                    "total": 35
                }
            }
        },
        {
            "id": 395188,
            "date": "2024-04-07T14:00:00+00:00",
            "time": "14:00",
            "timestamp": 1712498400,
            "timezone": "UTC",
            "stage": null,
            "week": "Basketligan Women - Quarter-finals",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 97,
                "name": "Basketligan W",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/97.png"
            },
            "country": {
                "id": 46,
                "name": "Sweden",
                "code": "SE",
                "flag": "https://media.api-sports.io/flags/se.svg"
            },
            "teams": {
                "home": {
                    "id": 1212,
                    "name": "Norrkoping W",
                    "logo": "https://media.api-sports.io/basketball/teams/1212.png"
                },
                "away": {
                    "id": 1209,
                    "name": "Hogsbo W",
                    "logo": "https://media.api-sports.io/basketball/teams/1209.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 22,
                    "quarter_2": 20,
                    "quarter_3": 19,
                    "quarter_4": 23,
                    "over_time": null,
                    "total": 84
                },
                "away": {
                    "quarter_1": 16,
                    "quarter_2": 18,
                    "quarter_3": 17,
                    "quarter_4": 14,
                    "over_time": null,
                    "total": 65
                }
            }
        },
        {
            "id": 394923,
            "date": "2024-04-07T14:15:00+00:00",
            "time": "14:15",
            "timestamp": 1712499300,
            "timezone": "UTC",
            "stage": null,
            "week": "2",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 45,
                "name": "Basket League",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/45.png"
            },
            "country": {
                "id": 18,
                "name": "Greece",
                "code": "GR",
                "flag": "https://media.api-sports.io/flags/gr.svg"
            },
            "teams": {
                "home": {
                    "id": 617,
                    "name": "Promitheas",
                    "logo": "https://media.api-sports.io/basketball/teams/617.png"
                },
                "away": {
                    "id": 606,
                    "name": "Aris",
                    "logo": "https://media.api-sports.io/basketball/teams/606.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 13,
                    "quarter_2": 17,
                    "quarter_3": 34,
                    "quarter_4": 20,
                    "over_time": null,
                    "total": 84
                },
                "away": {
                    "quarter_1": 13,
                    "quarter_2": 14,
                    "quarter_3": 12,
                    "quarter_4": 12,
                    "over_time": null,
                    "total": 51
                }
            }
        },
        {
            "id": 362083,
            "date": "2024-04-07T14:20:00+00:00",
            "time": "14:20",
            "timestamp": 1712499600,
            "timezone": "UTC",
            "stage": null,
            "week": null,
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 60,
                "name": "LKL",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/60.png"
            },
            "country": {
                "id": 27,
                "name": "Lithuania",
                "code": "LT",
                "flag": "https://media.api-sports.io/flags/lt.svg"
            },
            "teams": {
                "home": {
                    "id": 794,
                    "name": "Rytas",
                    "logo": "https://media.api-sports.io/basketball/teams/794.png"
                },
                "away": {
                    "id": 790,
                    "name": "Lietkabelis",
                    "logo": "https://media.api-sports.io/basketball/teams/790.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 34,
                    "quarter_2": 35,
                    "quarter_3": 22,
                    "quarter_4": 22,
                    "over_time": null,
                    "total": 113
                },
                "away": {
                    "quarter_1": 20,
                    "quarter_2": 26,
                    "quarter_3": 33,
                    "quarter_4": 21,
                    "over_time": null,
                    "total": 100
                }
            }
        },
        {
            "id": 355187,
            "date": "2024-04-07T14:30:00+00:00",
            "time": "14:30",
            "timestamp": 1712500200,
            "timezone": "UTC",
            "stage": null,
            "week": "28",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 2,
                "name": "LNB",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/2.png"
            },
            "country": {
                "id": 4,
                "name": "France",
                "code": "FR",
                "flag": "https://media.api-sports.io/flags/fr.svg"
            },
            "teams": {
                "home": {
                    "id": 24,
                    "name": "JL Bourg",
                    "logo": "https://media.api-sports.io/basketball/teams/24.png"
                },
                "away": {
                    "id": 95,
                    "name": "Ada Blois",
                    "logo": "https://media.api-sports.io/basketball/teams/95.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 24,
                    "quarter_2": 21,
                    "quarter_3": 17,
                    "quarter_4": 19,
                    "over_time": null,
                    "total": 81
                },
                "away": {
                    "quarter_1": 12,
                    "quarter_2": 20,
                    "quarter_3": 23,
                    "quarter_4": 11,
                    "over_time": null,
                    "total": 66
                }
            }
        },
        {
            "id": 358373,
            "date": "2024-04-07T14:30:00+00:00",
            "time": "14:30",
            "timestamp": 1712500200,
            "timezone": "UTC",
            "stage": null,
            "week": "26",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 52,
                "name": "Lega A",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/52.png"
            },
            "country": {
                "id": 23,
                "name": "Italy",
                "code": "IT",
                "flag": "https://media.api-sports.io/flags/it.svg"
            },
            "teams": {
                "home": {
                    "id": 730,
                    "name": "Varese",
                    "logo": "https://media.api-sports.io/basketball/teams/730.png"
                },
                "away": {
                    "id": 690,
                    "name": "Basket Napoli",
                    "logo": "https://media.api-sports.io/basketball/teams/690.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 27,
                    "quarter_2": 27,
                    "quarter_3": 21,
                    "quarter_4": 38,
                    "over_time": null,
                    "total": 113
                },
                "away": {
                    "quarter_1": 26,
                    "quarter_2": 17,
                    "quarter_3": 20,
                    "quarter_4": 16,
                    "over_time": null,
                    "total": 79
                }
            }
        },
        {
            "id": 394618,
            "date": "2024-04-07T14:30:00+00:00",
            "time": "14:30",
            "timestamp": 1712500200,
            "timezone": "UTC",
            "stage": null,
            "week": "32",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 102,
                "name": "TBL",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/102.png"
            },
            "country": {
                "id": 48,
                "name": "Turkey",
                "code": "TR",
                "flag": "https://media.api-sports.io/flags/tr.svg"
            },
            "teams": {
                "home": {
                    "id": 6302,
                    "name": "MKE Ankaragucu",
                    "logo": "https://media.api-sports.io/basketball/teams/6302.png"
                },
                "away": {
                    "id": 5678,
                    "name": "Cayirova",
                    "logo": "https://media.api-sports.io/basketball/teams/5678.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 28,
                    "quarter_2": 22,
                    "quarter_3": 14,
                    "quarter_4": 24,
                    "over_time": null,
                    "total": 88
                },
                "away": {
                    "quarter_1": 10,
                    "quarter_2": 26,
                    "quarter_3": 18,
                    "quarter_4": 19,
                    "over_time": null,
                    "total": 73
                }
            }
        },
        {
            "id": 394659,
            "date": "2024-04-07T14:30:00+00:00",
            "time": "14:30",
            "timestamp": 1712500200,
            "timezone": "UTC",
            "stage": null,
            "week": "Kvindebasketligaen Women - Semi-finals",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 35,
                "name": "Dameligaen W",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/35.png"
            },
            "country": {
                "id": 13,
                "name": "Denmark",
                "code": "DK",
                "flag": "https://media.api-sports.io/flags/dk.svg"
            },
            "teams": {
                "home": {
                    "id": 3379,
                    "name": "BMS Herlev W",
                    "logo": "https://media.api-sports.io/basketball/teams/3379.png"
                },
                "away": {
                    "id": 473,
                    "name": "Aabyhoj W",
                    "logo": "https://media.api-sports.io/basketball/teams/473.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 15,
                    "quarter_2": 15,
                    "quarter_3": 16,
                    "quarter_4": 10,
                    "over_time": null,
                    "total": 56
                },
                "away": {
                    "quarter_1": 10,
                    "quarter_2": 19,
                    "quarter_3": 20,
                    "quarter_4": 12,
                    "over_time": null,
                    "total": 61
                }
            }
        },
        {
            "id": 355822,
            "date": "2024-04-07T15:00:00+00:00",
            "time": "15:00",
            "timestamp": 1712502000,
            "timezone": "UTC",
            "stage": null,
            "week": "31",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 42,
                "name": "Pro A",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/42.png"
            },
            "country": {
                "id": 17,
                "name": "Germany",
                "code": "DE",
                "flag": "https://media.api-sports.io/flags/de.svg"
            },
            "teams": {
                "home": {
                    "id": 571,
                    "name": "Dresden",
                    "logo": "https://media.api-sports.io/basketball/teams/571.png"
                },
                "away": {
                    "id": 572,
                    "name": "Dusseldorf",
                    "logo": "https://media.api-sports.io/basketball/teams/572.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 27,
                    "quarter_2": 18,
                    "quarter_3": 21,
                    "quarter_4": 20,
                    "over_time": null,
                    "total": 86
                },
                "away": {
                    "quarter_1": 22,
                    "quarter_2": 18,
                    "quarter_3": 16,
                    "quarter_4": 14,
                    "over_time": null,
                    "total": 70
                }
            }
        },
        {
            "id": 355823,
            "date": "2024-04-07T15:00:00+00:00",
            "time": "15:00",
            "timestamp": 1712502000,
            "timezone": "UTC",
            "stage": null,
            "week": "31",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 42,
                "name": "Pro A",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/42.png"
            },
            "country": {
                "id": 17,
                "name": "Germany",
                "code": "DE",
                "flag": "https://media.api-sports.io/flags/de.svg"
            },
            "teams": {
                "home": {
                    "id": 563,
                    "name": "Trier",
                    "logo": "https://media.api-sports.io/basketball/teams/563.png"
                },
                "away": {
                    "id": 527,
                    "name": "Giessen",
                    "logo": "https://media.api-sports.io/basketball/teams/527.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 25,
                    "quarter_2": 23,
                    "quarter_3": 22,
                    "quarter_4": 19,
                    "over_time": null,
                    "total": 89
                },
                "away": {
                    "quarter_1": 24,
                    "quarter_2": 16,
                    "quarter_3": 19,
                    "quarter_4": 12,
                    "over_time": null,
                    "total": 71
                }
            }
        },
        {
            "id": 355824,
            "date": "2024-04-07T15:00:00+00:00",
            "time": "15:00",
            "timestamp": 1712502000,
            "timezone": "UTC",
            "stage": null,
            "week": "31",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 42,
                "name": "Pro A",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/42.png"
            },
            "country": {
                "id": 17,
                "name": "Germany",
                "code": "DE",
                "flag": "https://media.api-sports.io/flags/de.svg"
            },
            "teams": {
                "home": {
                    "id": 560,
                    "name": "Phoenix Hagen",
                    "logo": "https://media.api-sports.io/basketball/teams/560.png"
                },
                "away": {
                    "id": 580,
                    "name": "Munster",
                    "logo": "https://media.api-sports.io/basketball/teams/580.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 23,
                    "quarter_2": 24,
                    "quarter_3": 20,
                    "quarter_4": 20,
                    "over_time": null,
                    "total": 87
                },
                "away": {
                    "quarter_1": 17,
                    "quarter_2": 14,
                    "quarter_3": 24,
                    "quarter_4": 22,
                    "over_time": null,
                    "total": 77
                }
            }
        },
        {
            "id": 355825,
            "date": "2024-04-07T15:00:00+00:00",
            "time": "15:00",
            "timestamp": 1712502000,
            "timezone": "UTC",
            "stage": null,
            "week": "31",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 42,
                "name": "Pro A",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/42.png"
            },
            "country": {
                "id": 17,
                "name": "Germany",
                "code": "DE",
                "flag": "https://media.api-sports.io/flags/de.svg"
            },
            "teams": {
                "home": {
                    "id": 554,
                    "name": "Kirchheim",
                    "logo": "https://media.api-sports.io/basketball/teams/554.png"
                },
                "away": {
                    "id": 4944,
                    "name": "Vechta 2",
                    "logo": "https://media.api-sports.io/basketball/teams/4944.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 22,
                    "quarter_2": 26,
                    "quarter_3": 24,
                    "quarter_4": 13,
                    "over_time": null,
                    "total": 85
                },
                "away": {
                    "quarter_1": 12,
                    "quarter_2": 21,
                    "quarter_3": 21,
                    "quarter_4": 21,
                    "over_time": null,
                    "total": 75
                }
            }
        },
        {
            "id": 355826,
            "date": "2024-04-07T15:00:00+00:00",
            "time": "15:00",
            "timestamp": 1712502000,
            "timezone": "UTC",
            "stage": null,
            "week": "31",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 42,
                "name": "Pro A",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/42.png"
            },
            "country": {
                "id": 17,
                "name": "Germany",
                "code": "DE",
                "flag": "https://media.api-sports.io/flags/de.svg"
            },
            "teams": {
                "home": {
                    "id": 569,
                    "name": "Bochum",
                    "logo": "https://media.api-sports.io/basketball/teams/569.png"
                },
                "away": {
                    "id": 2267,
                    "name": "Koblenz",
                    "logo": "https://media.api-sports.io/basketball/teams/2267.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 14,
                    "quarter_2": 24,
                    "quarter_3": 15,
                    "quarter_4": 23,
                    "over_time": null,
                    "total": 76
                },
                "away": {
                    "quarter_1": 20,
                    "quarter_2": 17,
                    "quarter_3": 22,
                    "quarter_4": 15,
                    "over_time": null,
                    "total": 74
                }
            }
        },
        {
            "id": 355827,
            "date": "2024-04-07T15:00:00+00:00",
            "time": "15:00",
            "timestamp": 1712502000,
            "timezone": "UTC",
            "stage": null,
            "week": "31",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 42,
                "name": "Pro A",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/42.png"
            },
            "country": {
                "id": 17,
                "name": "Germany",
                "code": "DE",
                "flag": "https://media.api-sports.io/flags/de.svg"
            },
            "teams": {
                "home": {
                    "id": 548,
                    "name": "Artland",
                    "logo": "https://media.api-sports.io/basketball/teams/548.png"
                },
                "away": {
                    "id": 556,
                    "name": "Nurnberger",
                    "logo": "https://media.api-sports.io/basketball/teams/556.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 31,
                    "quarter_2": 18,
                    "quarter_3": 19,
                    "quarter_4": 33,
                    "over_time": null,
                    "total": 101
                },
                "away": {
                    "quarter_1": 8,
                    "quarter_2": 26,
                    "quarter_3": 21,
                    "quarter_4": 25,
                    "over_time": null,
                    "total": 80
                }
            }
        },
        {
            "id": 359683,
            "date": "2024-04-07T15:00:00+00:00",
            "time": "15:00",
            "timestamp": 1712502000,
            "timezone": "UTC",
            "stage": null,
            "week": "28",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 117,
                "name": "ACB",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/117.png"
            },
            "country": {
                "id": 45,
                "name": "Spain",
                "code": "ES",
                "flag": "https://media.api-sports.io/flags/es.svg"
            },
            "teams": {
                "home": {
                    "id": 2335,
                    "name": "MoraBanc Andorra",
                    "logo": "https://media.api-sports.io/basketball/teams/2335.png"
                },
                "away": {
                    "id": 1125,
                    "name": "Granada",
                    "logo": "https://media.api-sports.io/basketball/teams/1125.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 21,
                    "quarter_2": 14,
                    "quarter_3": 20,
                    "quarter_4": 33,
                    "over_time": null,
                    "total": 88
                },
                "away": {
                    "quarter_1": 17,
                    "quarter_2": 15,
                    "quarter_3": 14,
                    "quarter_4": 16,
                    "over_time": null,
                    "total": 62
                }
            }
        },
        {
            "id": 359684,
            "date": "2024-04-07T15:00:00+00:00",
            "time": "15:00",
            "timestamp": 1712502000,
            "timezone": "UTC",
            "stage": null,
            "week": "28",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 117,
                "name": "ACB",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/117.png"
            },
            "country": {
                "id": 45,
                "name": "Spain",
                "code": "ES",
                "flag": "https://media.api-sports.io/flags/es.svg"
            },
            "teams": {
                "home": {
                    "id": 2341,
                    "name": "Valencia",
                    "logo": "https://media.api-sports.io/basketball/teams/2341.png"
                },
                "away": {
                    "id": 2331,
                    "name": "Baskonia",
                    "logo": "https://media.api-sports.io/basketball/teams/2331.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 31,
                    "quarter_2": 31,
                    "quarter_3": 25,
                    "quarter_4": 24,
                    "over_time": null,
                    "total": 111
                },
                "away": {
                    "quarter_1": 14,
                    "quarter_2": 20,
                    "quarter_3": 31,
                    "quarter_4": 36,
                    "over_time": null,
                    "total": 101
                }
            }
        },
        {
            "id": 366145,
            "date": "2024-04-07T15:00:00+00:00",
            "time": "15:00",
            "timestamp": 1712502000,
            "timezone": "UTC",
            "stage": null,
            "week": "26",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 227,
                "name": "Prva Liga",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/227.png"
            },
            "country": {
                "id": 10,
                "name": "Croatia",
                "code": "HR",
                "flag": "https://media.api-sports.io/flags/hr.svg"
            },
            "teams": {
                "home": {
                    "id": 6093,
                    "name": "Marsonia",
                    "logo": "https://media.api-sports.io/basketball/teams/6093.png"
                },
                "away": {
                    "id": 2599,
                    "name": "Stoja",
                    "logo": "https://media.api-sports.io/basketball/teams/2599.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 23,
                    "quarter_2": 30,
                    "quarter_3": 17,
                    "quarter_4": 17,
                    "over_time": null,
                    "total": 87
                },
                "away": {
                    "quarter_1": 17,
                    "quarter_2": 21,
                    "quarter_3": 29,
                    "quarter_4": 23,
                    "over_time": null,
                    "total": 90
                }
            }
        },
        {
            "id": 370226,
            "date": "2024-04-07T15:00:00+00:00",
            "time": "15:00",
            "timestamp": 1712502000,
            "timezone": "UTC",
            "stage": null,
            "week": "27",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 40,
                "name": "BBL",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/40.png"
            },
            "country": {
                "id": 17,
                "name": "Germany",
                "code": "DE",
                "flag": "https://media.api-sports.io/flags/de.svg"
            },
            "teams": {
                "home": {
                    "id": 522,
                    "name": "Bayern",
                    "logo": "https://media.api-sports.io/basketball/teams/522.png"
                },
                "away": {
                    "id": 521,
                    "name": "Basketball Braunschweig",
                    "logo": "https://media.api-sports.io/basketball/teams/521.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 21,
                    "quarter_2": 23,
                    "quarter_3": 23,
                    "quarter_4": 24,
                    "over_time": null,
                    "total": 91
                },
                "away": {
                    "quarter_1": 13,
                    "quarter_2": 18,
                    "quarter_3": 18,
                    "quarter_4": 12,
                    "over_time": null,
                    "total": 61
                }
            }
        },
        {
            "id": 375801,
            "date": "2024-04-07T15:00:00+00:00",
            "time": "15:00",
            "timestamp": 1712502000,
            "timezone": "UTC",
            "stage": null,
            "week": "22",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 219,
                "name": "Prvenstvo BiH Women",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/219.png"
            },
            "country": {
                "id": 57,
                "name": "Bosnia-and-Herzegovina",
                "code": "BA",
                "flag": "https://media.api-sports.io/flags/ba.svg"
            },
            "teams": {
                "home": {
                    "id": 3559,
                    "name": "Igman W",
                    "logo": "https://media.api-sports.io/basketball/teams/3559.png"
                },
                "away": {
                    "id": 3567,
                    "name": "Play Off Sarajevo W",
                    "logo": "https://media.api-sports.io/basketball/teams/3567.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 19,
                    "quarter_2": 12,
                    "quarter_3": 18,
                    "quarter_4": 15,
                    "over_time": null,
                    "total": 64
                },
                "away": {
                    "quarter_1": 18,
                    "quarter_2": 14,
                    "quarter_3": 26,
                    "quarter_4": 18,
                    "over_time": null,
                    "total": 76
                }
            }
        },
        {
            "id": 390481,
            "date": "2024-04-07T15:00:00+00:00",
            "time": "15:00",
            "timestamp": 1712502000,
            "timezone": "UTC",
            "stage": null,
            "week": "29",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 30,
                "name": "Premijer liga",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/30.png"
            },
            "country": {
                "id": 10,
                "name": "Croatia",
                "code": "HR",
                "flag": "https://media.api-sports.io/flags/hr.svg"
            },
            "teams": {
                "home": {
                    "id": 410,
                    "name": "Cibona",
                    "logo": "https://media.api-sports.io/basketball/teams/410.png"
                },
                "away": {
                    "id": 1451,
                    "name": "Bosco",
                    "logo": "https://media.api-sports.io/basketball/teams/1451.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 20,
                    "quarter_2": 30,
                    "quarter_3": 26,
                    "quarter_4": 23,
                    "over_time": null,
                    "total": 99
                },
                "away": {
                    "quarter_1": 15,
                    "quarter_2": 14,
                    "quarter_3": 16,
                    "quarter_4": 28,
                    "over_time": null,
                    "total": 73
                }
            }
        },
        {
            "id": 394678,
            "date": "2024-04-07T15:00:00+00:00",
            "time": "15:00",
            "timestamp": 1712502000,
            "timezone": "UTC",
            "stage": null,
            "week": "1. Liga - Semi-finals",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 228,
                "name": "1. Liga",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/228.png"
            },
            "country": {
                "id": 12,
                "name": "Czech Republic",
                "code": "CZ",
                "flag": "https://media.api-sports.io/flags/cz.svg"
            },
            "teams": {
                "home": {
                    "id": 2612,
                    "name": "Litomerice",
                    "logo": "https://media.api-sports.io/basketball/teams/2612.png"
                },
                "away": {
                    "id": 443,
                    "name": "Hradec Kralove",
                    "logo": "https://media.api-sports.io/basketball/teams/443.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 26,
                    "quarter_2": 15,
                    "quarter_3": 15,
                    "quarter_4": 8,
                    "over_time": null,
                    "total": 64
                },
                "away": {
                    "quarter_1": 24,
                    "quarter_2": 22,
                    "quarter_3": 29,
                    "quarter_4": 17,
                    "over_time": null,
                    "total": 92
                }
            }
        },
        {
            "id": 394696,
            "date": "2024-04-07T15:00:00+00:00",
            "time": "15:00",
            "timestamp": 1712502000,
            "timezone": "UTC",
            "stage": null,
            "week": "26",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 104,
                "name": "Super Ligi",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/104.png"
            },
            "country": {
                "id": 48,
                "name": "Turkey",
                "code": "TR",
                "flag": "https://media.api-sports.io/flags/tr.svg"
            },
            "teams": {
                "home": {
                    "id": 1276,
                    "name": "Tofas",
                    "logo": "https://media.api-sports.io/basketball/teams/1276.png"
                },
                "away": {
                    "id": 1268,
                    "name": "Buyukcekmece",
                    "logo": "https://media.api-sports.io/basketball/teams/1268.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 21,
                    "quarter_2": 19,
                    "quarter_3": 17,
                    "quarter_4": 16,
                    "over_time": null,
                    "total": 73
                },
                "away": {
                    "quarter_1": 27,
                    "quarter_2": 29,
                    "quarter_3": 17,
                    "quarter_4": 21,
                    "over_time": null,
                    "total": 94
                }
            }
        },
        {
            "id": 394732,
            "date": "2024-04-07T15:00:00+00:00",
            "time": "15:00",
            "timestamp": 1712502000,
            "timezone": "UTC",
            "stage": null,
            "week": "Super League - Quarter-finals",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 81,
                "name": "Super League",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/81.png"
            },
            "country": {
                "id": 39,
                "name": "Russia",
                "code": "RU",
                "flag": "https://media.api-sports.io/flags/ru.svg"
            },
            "teams": {
                "home": {
                    "id": 2243,
                    "name": "Dome-Springs Izhevsk",
                    "logo": "https://media.api-sports.io/basketball/teams/2243.png"
                },
                "away": {
                    "id": 1024,
                    "name": "Khimki M.",
                    "logo": "https://media.api-sports.io/basketball/teams/1024.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 21,
                    "quarter_2": 29,
                    "quarter_3": 14,
                    "quarter_4": 23,
                    "over_time": null,
                    "total": 87
                },
                "away": {
                    "quarter_1": 24,
                    "quarter_2": 13,
                    "quarter_3": 20,
                    "quarter_4": 24,
                    "over_time": null,
                    "total": 81
                }
            }
        },
        {
            "id": 394861,
            "date": "2024-04-07T15:00:00+00:00",
            "time": "15:00",
            "timestamp": 1712502000,
            "timezone": "UTC",
            "stage": null,
            "week": "TB2L - Quarter-finals",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 103,
                "name": "TB2L",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/103.png"
            },
            "country": {
                "id": 48,
                "name": "Turkey",
                "code": "TR",
                "flag": "https://media.api-sports.io/flags/tr.svg"
            },
            "teams": {
                "home": {
                    "id": 1291,
                    "name": "Nazilli",
                    "logo": "https://media.api-sports.io/basketball/teams/1291.png"
                },
                "away": {
                    "id": 1734,
                    "name": "Sakarya BB",
                    "logo": "https://media.api-sports.io/basketball/teams/1734.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 22,
                    "quarter_2": 25,
                    "quarter_3": 23,
                    "quarter_4": 10,
                    "over_time": null,
                    "total": 80
                },
                "away": {
                    "quarter_1": 15,
                    "quarter_2": 18,
                    "quarter_3": 13,
                    "quarter_4": 12,
                    "over_time": null,
                    "total": 58
                }
            }
        },
        {
            "id": 394971,
            "date": "2024-04-07T15:00:00+00:00",
            "time": "15:00",
            "timestamp": 1712502000,
            "timezone": "UTC",
            "stage": null,
            "week": "SB League - Quarter-finals",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 100,
                "name": "SB League",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/100.png"
            },
            "country": {
                "id": 47,
                "name": "Switzerland",
                "code": "CH",
                "flag": "https://media.api-sports.io/flags/ch.svg"
            },
            "teams": {
                "home": {
                    "id": 1234,
                    "name": "Neuchatel",
                    "logo": "https://media.api-sports.io/basketball/teams/1234.png"
                },
                "away": {
                    "id": 1239,
                    "name": "Vevey Riviera",
                    "logo": "https://media.api-sports.io/basketball/teams/1239.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 24,
                    "quarter_2": 19,
                    "quarter_3": 17,
                    "quarter_4": 19,
                    "over_time": null,
                    "total": 79
                },
                "away": {
                    "quarter_1": 13,
                    "quarter_2": 26,
                    "quarter_3": 19,
                    "quarter_4": 8,
                    "over_time": null,
                    "total": 66
                }
            }
        },
        {
            "id": 395259,
            "date": "2024-04-07T15:00:00+00:00",
            "time": "15:00",
            "timestamp": 1712502000,
            "timezone": "UTC",
            "stage": null,
            "week": "Hungarian Cup - 3rd place",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 138,
                "name": "Hungarian Cup",
                "type": "cup",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/138.png"
            },
            "country": {
                "id": 19,
                "name": "Hungary",
                "code": "HU",
                "flag": "https://media.api-sports.io/flags/hu.svg"
            },
            "teams": {
                "home": {
                    "id": 631,
                    "name": "Szombathely",
                    "logo": "https://media.api-sports.io/basketball/teams/631.png"
                },
                "away": {
                    "id": 6099,
                    "name": "NKA Pecs",
                    "logo": "https://media.api-sports.io/basketball/teams/6099.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 28,
                    "quarter_2": 22,
                    "quarter_3": 29,
                    "quarter_4": 22,
                    "over_time": null,
                    "total": 101
                },
                "away": {
                    "quarter_1": 18,
                    "quarter_2": 22,
                    "quarter_3": 22,
                    "quarter_4": 19,
                    "over_time": null,
                    "total": 81
                }
            }
        },
        {
            "id": 394718,
            "date": "2024-04-07T15:04:00+00:00",
            "time": "15:04",
            "timestamp": 1712502240,
            "timezone": "UTC",
            "stage": null,
            "week": "Basketligan - Quarter-finals",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 93,
                "name": "Basketligan",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/93.png"
            },
            "country": {
                "id": 46,
                "name": "Sweden",
                "code": "SE",
                "flag": "https://media.api-sports.io/flags/se.svg"
            },
            "teams": {
                "home": {
                    "id": 1718,
                    "name": "Uppsala",
                    "logo": "https://media.api-sports.io/basketball/teams/1718.png"
                },
                "away": {
                    "id": 1201,
                    "name": "Jamtland",
                    "logo": "https://media.api-sports.io/basketball/teams/1201.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 18,
                    "quarter_2": 11,
                    "quarter_3": 21,
                    "quarter_4": 15,
                    "over_time": null,
                    "total": 65
                },
                "away": {
                    "quarter_1": 21,
                    "quarter_2": 22,
                    "quarter_3": 21,
                    "quarter_4": 13,
                    "over_time": null,
                    "total": 77
                }
            }
        },
        {
            "id": 394750,
            "date": "2024-04-07T15:15:00+00:00",
            "time": "15:15",
            "timestamp": 1712502900,
            "timezone": "UTC",
            "stage": null,
            "week": "LBBL - Semi-finals",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 249,
                "name": "Total League",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/249.png"
            },
            "country": {
                "id": 66,
                "name": "Luxembourg",
                "code": "LU",
                "flag": "https://media.api-sports.io/flags/lu.svg"
            },
            "teams": {
                "home": {
                    "id": 3823,
                    "name": "Ettelbruck",
                    "logo": "https://media.api-sports.io/basketball/teams/3823.png"
                },
                "away": {
                    "id": 3822,
                    "name": "Esch",
                    "logo": "https://media.api-sports.io/basketball/teams/3822.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 21,
                    "quarter_2": 16,
                    "quarter_3": 26,
                    "quarter_4": 22,
                    "over_time": null,
                    "total": 85
                },
                "away": {
                    "quarter_1": 25,
                    "quarter_2": 18,
                    "quarter_3": 24,
                    "quarter_4": 21,
                    "over_time": null,
                    "total": 88
                }
            }
        },
        {
            "id": 395114,
            "date": "2024-04-07T15:15:00+00:00",
            "time": "15:15",
            "timestamp": 1712502900,
            "timezone": "UTC",
            "stage": null,
            "week": "Superliga - Quarter-finals",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 59,
                "name": "Superliga",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/59.png"
            },
            "country": {
                "id": 26,
                "name": "Kosovo",
                "code": "XK",
                "flag": "https://media.api-sports.io/flags/xk.svg"
            },
            "teams": {
                "home": {
                    "id": 780,
                    "name": "Golden Eagle Ylli",
                    "logo": "https://media.api-sports.io/basketball/teams/780.png"
                },
                "away": {
                    "id": 778,
                    "name": "Bashkimi",
                    "logo": "https://media.api-sports.io/basketball/teams/778.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 18,
                    "quarter_2": 23,
                    "quarter_3": 18,
                    "quarter_4": 28,
                    "over_time": null,
                    "total": 87
                },
                "away": {
                    "quarter_1": 18,
                    "quarter_2": 14,
                    "quarter_3": 22,
                    "quarter_4": 15,
                    "over_time": null,
                    "total": 69
                }
            }
        },
        {
            "id": 371696,
            "date": "2024-04-07T15:20:00+00:00",
            "time": "15:20",
            "timestamp": 1712503200,
            "timezone": "UTC",
            "stage": null,
            "week": "21",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 265,
                "name": "1. ZLS Women",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/265.png"
            },
            "country": {
                "id": 41,
                "name": "Serbia",
                "code": "RS",
                "flag": "https://media.api-sports.io/flags/rs.svg"
            },
            "teams": {
                "home": {
                    "id": 3930,
                    "name": "Crvena zvezda W",
                    "logo": "https://media.api-sports.io/basketball/teams/3930.png"
                },
                "away": {
                    "id": 3932,
                    "name": "Partizan W",
                    "logo": "https://media.api-sports.io/basketball/teams/3932.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 20,
                    "quarter_2": 16,
                    "quarter_3": 20,
                    "quarter_4": 22,
                    "over_time": null,
                    "total": 78
                },
                "away": {
                    "quarter_1": 22,
                    "quarter_2": 18,
                    "quarter_3": 13,
                    "quarter_4": 24,
                    "over_time": null,
                    "total": 77
                }
            }
        },
        {
            "id": 355828,
            "date": "2024-04-07T15:30:00+00:00",
            "time": "15:30",
            "timestamp": 1712503800,
            "timezone": "UTC",
            "stage": null,
            "week": "31",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 42,
                "name": "Pro A",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/42.png"
            },
            "country": {
                "id": 17,
                "name": "Germany",
                "code": "DE",
                "flag": "https://media.api-sports.io/flags/de.svg"
            },
            "teams": {
                "home": {
                    "id": 557,
                    "name": "PS Karlsruhe",
                    "logo": "https://media.api-sports.io/basketball/teams/557.png"
                },
                "away": {
                    "id": 558,
                    "name": "Paderborn",
                    "logo": "https://media.api-sports.io/basketball/teams/558.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 21,
                    "quarter_2": 30,
                    "quarter_3": 23,
                    "quarter_4": 34,
                    "over_time": null,
                    "total": 108
                },
                "away": {
                    "quarter_1": 25,
                    "quarter_2": 18,
                    "quarter_3": 18,
                    "quarter_4": 14,
                    "over_time": null,
                    "total": 75
                }
            }
        },
        {
            "id": 358369,
            "date": "2024-04-07T15:30:00+00:00",
            "time": "15:30",
            "timestamp": 1712503800,
            "timezone": "UTC",
            "stage": null,
            "week": "26",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 52,
                "name": "Lega A",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/52.png"
            },
            "country": {
                "id": 23,
                "name": "Italy",
                "code": "IT",
                "flag": "https://media.api-sports.io/flags/it.svg"
            },
            "teams": {
                "home": {
                    "id": 720,
                    "name": "Cremona",
                    "logo": "https://media.api-sports.io/basketball/teams/720.png"
                },
                "away": {
                    "id": 699,
                    "name": "Scafati",
                    "logo": "https://media.api-sports.io/basketball/teams/699.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 18,
                    "quarter_2": 17,
                    "quarter_3": 15,
                    "quarter_4": 18,
                    "over_time": null,
                    "total": 68
                },
                "away": {
                    "quarter_1": 17,
                    "quarter_2": 13,
                    "quarter_3": 12,
                    "quarter_4": 21,
                    "over_time": null,
                    "total": 63
                }
            }
        },
        {
            "id": 363548,
            "date": "2024-04-07T15:30:00+00:00",
            "time": "15:30",
            "timestamp": 1712503800,
            "timezone": "UTC",
            "stage": null,
            "week": null,
            "status": {
                "long": "After Over Time",
                "short": "AOT",
                "timer": null
            },
            "league": {
                "id": 108,
                "name": "BBL",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/108.png"
            },
            "country": {
                "id": 50,
                "name": "United Kingdom",
                "code": "GB",
                "flag": "https://media.api-sports.io/flags/gb.svg"
            },
            "teams": {
                "home": {
                    "id": 5633,
                    "name": "Caledonia Gladiators",
                    "logo": "https://media.api-sports.io/basketball/teams/5633.png"
                },
                "away": {
                    "id": 1325,
                    "name": "Cheshire Phoenix",
                    "logo": "https://media.api-sports.io/basketball/teams/1325.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 27,
                    "quarter_2": 22,
                    "quarter_3": 22,
                    "quarter_4": 27,
                    "over_time": 18,
                    "total": 116
                },
                "away": {
                    "quarter_1": 27,
                    "quarter_2": 24,
                    "quarter_3": 19,
                    "quarter_4": 28,
                    "over_time": 12,
                    "total": 110
                }
            }
        },
        {
            "id": 365952,
            "date": "2024-04-07T15:30:00+00:00",
            "time": "15:30",
            "timestamp": 1712503800,
            "timezone": "UTC",
            "stage": null,
            "week": "23",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 236,
                "name": "A2 Women",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/236.png"
            },
            "country": {
                "id": 18,
                "name": "Greece",
                "code": "GR",
                "flag": "https://media.api-sports.io/flags/gr.svg"
            },
            "teams": {
                "home": {
                    "id": 3732,
                    "name": "Terpsithea Glyfadas W",
                    "logo": "https://media.api-sports.io/basketball/teams/3732.png"
                },
                "away": {
                    "id": 3695,
                    "name": "Sporting Athens W",
                    "logo": "https://media.api-sports.io/basketball/teams/3695.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 17,
                    "quarter_2": 13,
                    "quarter_3": 18,
                    "quarter_4": 19,
                    "over_time": null,
                    "total": 67
                },
                "away": {
                    "quarter_1": 18,
                    "quarter_2": 19,
                    "quarter_3": 3,
                    "quarter_4": 5,
                    "over_time": null,
                    "total": 45
                }
            }
        },
        {
            "id": 371697,
            "date": "2024-04-07T15:30:00+00:00",
            "time": "15:30",
            "timestamp": 1712503800,
            "timezone": "UTC",
            "stage": null,
            "week": "21",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 265,
                "name": "1. ZLS Women",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/265.png"
            },
            "country": {
                "id": 41,
                "name": "Serbia",
                "code": "RS",
                "flag": "https://media.api-sports.io/flags/rs.svg"
            },
            "teams": {
                "home": {
                    "id": 3941,
                    "name": "Novosadska Novi Sad W",
                    "logo": "https://media.api-sports.io/basketball/teams/3941.png"
                },
                "away": {
                    "id": 3940,
                    "name": "ZKK Kraljevo W",
                    "logo": "https://media.api-sports.io/basketball/teams/3940.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 16,
                    "quarter_2": 28,
                    "quarter_3": 20,
                    "quarter_4": 25,
                    "over_time": null,
                    "total": 89
                },
                "away": {
                    "quarter_1": 26,
                    "quarter_2": 13,
                    "quarter_3": 22,
                    "quarter_4": 31,
                    "over_time": null,
                    "total": 92
                }
            }
        },
        {
            "id": 372043,
            "date": "2024-04-07T15:30:00+00:00",
            "time": "15:30",
            "timestamp": 1712503800,
            "timezone": "UTC",
            "stage": null,
            "week": "27",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 72,
                "name": "Energa Basket Liga",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/72.png"
            },
            "country": {
                "id": 34,
                "name": "Poland",
                "code": "PL",
                "flag": "https://media.api-sports.io/flags/pl.svg"
            },
            "teams": {
                "home": {
                    "id": 896,
                    "name": "Lancut",
                    "logo": "https://media.api-sports.io/basketball/teams/896.png"
                },
                "away": {
                    "id": 908,
                    "name": "Gdynia",
                    "logo": "https://media.api-sports.io/basketball/teams/908.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 29,
                    "quarter_2": 8,
                    "quarter_3": 10,
                    "quarter_4": 27,
                    "over_time": null,
                    "total": 74
                },
                "away": {
                    "quarter_1": 21,
                    "quarter_2": 23,
                    "quarter_3": 18,
                    "quarter_4": 15,
                    "over_time": null,
                    "total": 77
                }
            }
        },
        {
            "id": 389580,
            "date": "2024-04-07T15:30:00+00:00",
            "time": "15:30",
            "timestamp": 1712503800,
            "timezone": "UTC",
            "stage": null,
            "week": "9",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 217,
                "name": "Superliga",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/217.png"
            },
            "country": {
                "id": 3,
                "name": "Austria",
                "code": "AT",
                "flag": "https://media.api-sports.io/flags/at.svg"
            },
            "teams": {
                "home": {
                    "id": 2515,
                    "name": "Graz UBSC",
                    "logo": "https://media.api-sports.io/basketball/teams/2515.png"
                },
                "away": {
                    "id": 2522,
                    "name": "Wels",
                    "logo": "https://media.api-sports.io/basketball/teams/2522.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 17,
                    "quarter_2": 26,
                    "quarter_3": 13,
                    "quarter_4": 20,
                    "over_time": null,
                    "total": 76
                },
                "away": {
                    "quarter_1": 20,
                    "quarter_2": 14,
                    "quarter_3": 23,
                    "quarter_4": 25,
                    "over_time": null,
                    "total": 82
                }
            }
        },
        {
            "id": 389581,
            "date": "2024-04-07T15:30:00+00:00",
            "time": "15:30",
            "timestamp": 1712503800,
            "timezone": "UTC",
            "stage": null,
            "week": "9",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 217,
                "name": "Superliga",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/217.png"
            },
            "country": {
                "id": 3,
                "name": "Austria",
                "code": "AT",
                "flag": "https://media.api-sports.io/flags/at.svg"
            },
            "teams": {
                "home": {
                    "id": 2519,
                    "name": "Swans Gmunden",
                    "logo": "https://media.api-sports.io/basketball/teams/2519.png"
                },
                "away": {
                    "id": 1406,
                    "name": "St. Polten",
                    "logo": "https://media.api-sports.io/basketball/teams/1406.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 26,
                    "quarter_2": 27,
                    "quarter_3": 29,
                    "quarter_4": 26,
                    "over_time": null,
                    "total": 108
                },
                "away": {
                    "quarter_1": 15,
                    "quarter_2": 21,
                    "quarter_3": 14,
                    "quarter_4": 21,
                    "over_time": null,
                    "total": 71
                }
            }
        },
        {
            "id": 389582,
            "date": "2024-04-07T15:30:00+00:00",
            "time": "15:30",
            "timestamp": 1712503800,
            "timezone": "UTC",
            "stage": null,
            "week": "9",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 217,
                "name": "Superliga",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/217.png"
            },
            "country": {
                "id": 3,
                "name": "Austria",
                "code": "AT",
                "flag": "https://media.api-sports.io/flags/at.svg"
            },
            "teams": {
                "home": {
                    "id": 2521,
                    "name": "Vienna Basket",
                    "logo": "https://media.api-sports.io/basketball/teams/2521.png"
                },
                "away": {
                    "id": 2516,
                    "name": "Kapfenberg Bulls",
                    "logo": "https://media.api-sports.io/basketball/teams/2516.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 22,
                    "quarter_2": 13,
                    "quarter_3": 25,
                    "quarter_4": 12,
                    "over_time": null,
                    "total": 72
                },
                "away": {
                    "quarter_1": 18,
                    "quarter_2": 18,
                    "quarter_3": 27,
                    "quarter_4": 17,
                    "over_time": null,
                    "total": 80
                }
            }
        },
        {
            "id": 364113,
            "date": "2024-04-07T15:40:00+00:00",
            "time": "15:40",
            "timestamp": 1712504400,
            "timezone": "UTC",
            "stage": null,
            "week": "23",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 51,
                "name": "Super League",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/51.png"
            },
            "country": {
                "id": 22,
                "name": "Israel",
                "code": "IL",
                "flag": "https://media.api-sports.io/flags/il.svg"
            },
            "teams": {
                "home": {
                    "id": 687,
                    "name": "Maccabi Tel Aviv",
                    "logo": "https://media.api-sports.io/basketball/teams/687.png"
                },
                "away": {
                    "id": 1566,
                    "name": "Bnei Herzliya",
                    "logo": "https://media.api-sports.io/basketball/teams/1566.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 33,
                    "quarter_2": 29,
                    "quarter_3": 19,
                    "quarter_4": 17,
                    "over_time": null,
                    "total": 98
                },
                "away": {
                    "quarter_1": 24,
                    "quarter_2": 19,
                    "quarter_3": 21,
                    "quarter_4": 21,
                    "over_time": null,
                    "total": 85
                }
            }
        },
        {
            "id": 357691,
            "date": "2024-04-07T16:00:00+00:00",
            "time": "16:00",
            "timestamp": 1712505600,
            "timezone": "UTC",
            "stage": null,
            "week": "26",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 198,
                "name": "ABA League",
                "type": "cup",
                "season": 2023,
                "logo": "https://media.api-sports.io/basketball/leagues/198.png"
            },
            "country": {
                "id": 55,
                "name": "Europe",
                "code": " ",
                "flag": "https://media.api-sports.io/flags/ .svg"
            },
            "teams": {
                "home": {
                    "id": 418,
                    "name": "Split",
                    "logo": "https://media.api-sports.io/basketball/teams/418.png"
                },
                "away": {
                    "id": 1065,
                    "name": "Crvena zvezda",
                    "logo": "https://media.api-sports.io/basketball/teams/1065.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 19,
                    "quarter_2": 18,
                    "quarter_3": 19,
                    "quarter_4": 17,
                    "over_time": null,
                    "total": 73
                },
                "away": {
                    "quarter_1": 25,
                    "quarter_2": 24,
                    "quarter_3": 17,
                    "quarter_4": 26,
                    "over_time": null,
                    "total": 92
                }
            }
        },
        {
            "id": 358368,
            "date": "2024-04-07T16:00:00+00:00",
            "time": "16:00",
            "timestamp": 1712505600,
            "timezone": "UTC",
            "stage": null,
            "week": "26",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 52,
                "name": "Lega A",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/52.png"
            },
            "country": {
                "id": 23,
                "name": "Italy",
                "code": "IT",
                "flag": "https://media.api-sports.io/flags/it.svg"
            },
            "teams": {
                "home": {
                    "id": 718,
                    "name": "Brindisi",
                    "logo": "https://media.api-sports.io/basketball/teams/718.png"
                },
                "away": {
                    "id": 728,
                    "name": "Treviso",
                    "logo": "https://media.api-sports.io/basketball/teams/728.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 23,
                    "quarter_2": 19,
                    "quarter_3": 26,
                    "quarter_4": 25,
                    "over_time": null,
                    "total": 93
                },
                "away": {
                    "quarter_1": 21,
                    "quarter_2": 21,
                    "quarter_3": 10,
                    "quarter_4": 23,
                    "over_time": null,
                    "total": 75
                }
            }
        },
        {
            "id": 358951,
            "date": "2024-04-07T16:00:00+00:00",
            "time": "16:00",
            "timestamp": 1712505600,
            "timezone": "UTC",
            "stage": null,
            "week": "28",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 94,
                "name": "Liga Femenina W",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/94.png"
            },
            "country": {
                "id": 45,
                "name": "Spain",
                "code": "ES",
                "flag": "https://media.api-sports.io/flags/es.svg"
            },
            "teams": {
                "home": {
                    "id": 1171,
                    "name": "Uni Girona W",
                    "logo": "https://media.api-sports.io/basketball/teams/1171.png"
                },
                "away": {
                    "id": 1161,
                    "name": "Bembibre W",
                    "logo": "https://media.api-sports.io/basketball/teams/1161.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 24,
                    "quarter_2": 19,
                    "quarter_3": 29,
                    "quarter_4": 18,
                    "over_time": null,
                    "total": 90
                },
                "away": {
                    "quarter_1": 15,
                    "quarter_2": 18,
                    "quarter_3": 14,
                    "quarter_4": 10,
                    "over_time": null,
                    "total": 57
                }
            }
        },
        {
            "id": 359878,
            "date": "2024-04-07T16:00:00+00:00",
            "time": "16:00",
            "timestamp": 1712505600,
            "timezone": "UTC",
            "stage": null,
            "week": "24",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 53,
                "name": "Serie A1 W",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/53.png"
            },
            "country": {
                "id": 23,
                "name": "Italy",
                "code": "IT",
                "flag": "https://media.api-sports.io/flags/it.svg"
            },
            "teams": {
                "home": {
                    "id": 3773,
                    "name": "Brixia W",
                    "logo": "https://media.api-sports.io/basketball/teams/3773.png"
                },
                "away": {
                    "id": 2270,
                    "name": "Campobasso W",
                    "logo": "https://media.api-sports.io/basketball/teams/2270.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 25,
                    "quarter_2": 15,
                    "quarter_3": 15,
                    "quarter_4": 12,
                    "over_time": null,
                    "total": 67
                },
                "away": {
                    "quarter_1": 13,
                    "quarter_2": 32,
                    "quarter_3": 14,
                    "quarter_4": 13,
                    "over_time": null,
                    "total": 72
                }
            }
        },
        {
            "id": 359883,
            "date": "2024-04-07T16:00:00+00:00",
            "time": "16:00",
            "timestamp": 1712505600,
            "timezone": "UTC",
            "stage": null,
            "week": "24",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 53,
                "name": "Serie A1 W",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/53.png"
            },
            "country": {
                "id": 23,
                "name": "Italy",
                "code": "IT",
                "flag": "https://media.api-sports.io/flags/it.svg"
            },
            "teams": {
                "home": {
                    "id": 747,
                    "name": "Virtus Bologna W",
                    "logo": "https://media.api-sports.io/basketball/teams/747.png"
                },
                "away": {
                    "id": 2271,
                    "name": "Sassari W",
                    "logo": "https://media.api-sports.io/basketball/teams/2271.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 25,
                    "quarter_2": 15,
                    "quarter_3": 26,
                    "quarter_4": 15,
                    "over_time": null,
                    "total": 81
                },
                "away": {
                    "quarter_1": 15,
                    "quarter_2": 20,
                    "quarter_3": 14,
                    "quarter_4": 14,
                    "over_time": null,
                    "total": 63
                }
            }
        },
        {
            "id": 362530,
            "date": "2024-04-07T16:00:00+00:00",
            "time": "16:00",
            "timestamp": 1712505600,
            "timezone": "UTC",
            "stage": null,
            "week": "33",
            "status": {
                "long": "After Over Time",
                "short": "AOT",
                "timer": null
            },
            "league": {
                "id": 71,
                "name": "1 Liga",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/71.png"
            },
            "country": {
                "id": 34,
                "name": "Poland",
                "code": "PL",
                "flag": "https://media.api-sports.io/flags/pl.svg"
            },
            "teams": {
                "home": {
                    "id": 893,
                    "name": "Krosno",
                    "logo": "https://media.api-sports.io/basketball/teams/893.png"
                },
                "away": {
                    "id": 900,
                    "name": "Poli. Opolska",
                    "logo": "https://media.api-sports.io/basketball/teams/900.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 18,
                    "quarter_2": 21,
                    "quarter_3": 17,
                    "quarter_4": 19,
                    "over_time": 10,
                    "total": 85
                },
                "away": {
                    "quarter_1": 20,
                    "quarter_2": 19,
                    "quarter_3": 23,
                    "quarter_4": 13,
                    "over_time": 5,
                    "total": 80
                }
            }
        },
        {
            "id": 371700,
            "date": "2024-04-07T16:00:00+00:00",
            "time": "16:00",
            "timestamp": 1712505600,
            "timezone": "UTC",
            "stage": null,
            "week": "21",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 265,
                "name": "1. ZLS Women",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/265.png"
            },
            "country": {
                "id": 41,
                "name": "Serbia",
                "code": "RS",
                "flag": "https://media.api-sports.io/flags/rs.svg"
            },
            "teams": {
                "home": {
                    "id": 3938,
                    "name": "Vrbas W",
                    "logo": "https://media.api-sports.io/basketball/teams/3938.png"
                },
                "away": {
                    "id": 3936,
                    "name": "Student Nis W",
                    "logo": "https://media.api-sports.io/basketball/teams/3936.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 23,
                    "quarter_2": 13,
                    "quarter_3": 15,
                    "quarter_4": 20,
                    "over_time": null,
                    "total": 71
                },
                "away": {
                    "quarter_1": 20,
                    "quarter_2": 11,
                    "quarter_3": 22,
                    "quarter_4": 16,
                    "over_time": null,
                    "total": 69
                }
            }
        },
        {
            "id": 379802,
            "date": "2024-04-07T16:00:00+00:00",
            "time": "16:00",
            "timestamp": 1712505600,
            "timezone": "UTC",
            "stage": null,
            "week": "21",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 388,
                "name": "Superliga",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/388.png"
            },
            "country": {
                "id": 76,
                "name": "Albania",
                "code": "AL",
                "flag": "https://media.api-sports.io/flags/al.svg"
            },
            "teams": {
                "home": {
                    "id": 5990,
                    "name": "Apolonia Fier",
                    "logo": "https://media.api-sports.io/basketball/teams/5990.png"
                },
                "away": {
                    "id": 6255,
                    "name": "Elbasani",
                    "logo": "https://media.api-sports.io/basketball/teams/6255.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 38,
                    "quarter_2": 40,
                    "quarter_3": 27,
                    "quarter_4": 39,
                    "over_time": null,
                    "total": 144
                },
                "away": {
                    "quarter_1": 20,
                    "quarter_2": 26,
                    "quarter_3": 25,
                    "quarter_4": 22,
                    "over_time": null,
                    "total": 93
                }
            }
        },
        {
            "id": 379805,
            "date": "2024-04-07T16:00:00+00:00",
            "time": "16:00",
            "timestamp": 1712505600,
            "timezone": "UTC",
            "stage": null,
            "week": "21",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 388,
                "name": "Superliga",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/388.png"
            },
            "country": {
                "id": 76,
                "name": "Albania",
                "code": "AL",
                "flag": "https://media.api-sports.io/flags/al.svg"
            },
            "teams": {
                "home": {
                    "id": 4881,
                    "name": "Tirana",
                    "logo": "https://media.api-sports.io/basketball/teams/4881.png"
                },
                "away": {
                    "id": 6257,
                    "name": "PBC Flamurtari",
                    "logo": "https://media.api-sports.io/basketball/teams/6257.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 40,
                    "quarter_2": 23,
                    "quarter_3": 26,
                    "quarter_4": 16,
                    "over_time": null,
                    "total": 105
                },
                "away": {
                    "quarter_1": 21,
                    "quarter_2": 20,
                    "quarter_3": 13,
                    "quarter_4": 10,
                    "over_time": null,
                    "total": 64
                }
            }
        },
        {
            "id": 383343,
            "date": "2024-04-07T16:00:00+00:00",
            "time": "16:00",
            "timestamp": 1712505600,
            "timezone": "UTC",
            "stage": null,
            "week": "21",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 64,
                "name": "Prva A Liga",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/64.png"
            },
            "country": {
                "id": 29,
                "name": "Montenegro",
                "code": "ME",
                "flag": "https://media.api-sports.io/flags/me.svg"
            },
            "teams": {
                "home": {
                    "id": 837,
                    "name": "Jedinstvo",
                    "logo": "https://media.api-sports.io/basketball/teams/837.png"
                },
                "away": {
                    "id": 838,
                    "name": "Lovcen Cetinje",
                    "logo": "https://media.api-sports.io/basketball/teams/838.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 26,
                    "quarter_2": 19,
                    "quarter_3": 12,
                    "quarter_4": 19,
                    "over_time": null,
                    "total": 76
                },
                "away": {
                    "quarter_1": 17,
                    "quarter_2": 14,
                    "quarter_3": 19,
                    "quarter_4": 15,
                    "over_time": null,
                    "total": 65
                }
            }
        },
        {
            "id": 388114,
            "date": "2024-04-07T16:00:00+00:00",
            "time": "16:00",
            "timestamp": 1712505600,
            "timezone": "UTC",
            "stage": null,
            "week": "8",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 228,
                "name": "1. Liga",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/228.png"
            },
            "country": {
                "id": 12,
                "name": "Czech Republic",
                "code": "CZ",
                "flag": "https://media.api-sports.io/flags/cz.svg"
            },
            "teams": {
                "home": {
                    "id": 2601,
                    "name": "Basketbal Olomouc",
                    "logo": "https://media.api-sports.io/basketball/teams/2601.png"
                },
                "away": {
                    "id": 3627,
                    "name": "Polabi",
                    "logo": "https://media.api-sports.io/basketball/teams/3627.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 21,
                    "quarter_2": 22,
                    "quarter_3": 17,
                    "quarter_4": 27,
                    "over_time": null,
                    "total": 87
                },
                "away": {
                    "quarter_1": 23,
                    "quarter_2": 37,
                    "quarter_3": 18,
                    "quarter_4": 25,
                    "over_time": null,
                    "total": 103
                }
            }
        },
        {
            "id": 388115,
            "date": "2024-04-07T16:00:00+00:00",
            "time": "16:00",
            "timestamp": 1712505600,
            "timezone": "UTC",
            "stage": null,
            "week": "8",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 228,
                "name": "1. Liga",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/228.png"
            },
            "country": {
                "id": 12,
                "name": "Czech Republic",
                "code": "CZ",
                "flag": "https://media.api-sports.io/flags/cz.svg"
            },
            "teams": {
                "home": {
                    "id": 2622,
                    "name": "Snakes Ostrava",
                    "logo": "https://media.api-sports.io/basketball/teams/2622.png"
                },
                "away": {
                    "id": 5629,
                    "name": "SP Basket",
                    "logo": "https://media.api-sports.io/basketball/teams/5629.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 22,
                    "quarter_2": 19,
                    "quarter_3": 19,
                    "quarter_4": 25,
                    "over_time": null,
                    "total": 85
                },
                "away": {
                    "quarter_1": 25,
                    "quarter_2": 16,
                    "quarter_3": 20,
                    "quarter_4": 14,
                    "over_time": null,
                    "total": 75
                }
            }
        },
        {
            "id": 388725,
            "date": "2024-04-07T16:00:00+00:00",
            "time": "16:00",
            "timestamp": 1712505600,
            "timezone": "UTC",
            "stage": null,
            "week": "30",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 242,
                "name": "Serie A2",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/242.png"
            },
            "country": {
                "id": 23,
                "name": "Italy",
                "code": "IT",
                "flag": "https://media.api-sports.io/flags/it.svg"
            },
            "teams": {
                "home": {
                    "id": 6158,
                    "name": "Sebastiani Rieti",
                    "logo": "https://media.api-sports.io/basketball/teams/6158.png"
                },
                "away": {
                    "id": 5981,
                    "name": "Cento",
                    "logo": "https://media.api-sports.io/basketball/teams/5981.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 21,
                    "quarter_2": 18,
                    "quarter_3": 23,
                    "quarter_4": 22,
                    "over_time": null,
                    "total": 84
                },
                "away": {
                    "quarter_1": 27,
                    "quarter_2": 21,
                    "quarter_3": 13,
                    "quarter_4": 14,
                    "over_time": null,
                    "total": 75
                }
            }
        },
        {
            "id": 388726,
            "date": "2024-04-07T16:00:00+00:00",
            "time": "16:00",
            "timestamp": 1712505600,
            "timezone": "UTC",
            "stage": null,
            "week": "30",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 242,
                "name": "Serie A2",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/242.png"
            },
            "country": {
                "id": 23,
                "name": "Italy",
                "code": "IT",
                "flag": "https://media.api-sports.io/flags/it.svg"
            },
            "teams": {
                "home": {
                    "id": 6044,
                    "name": "Vigevano",
                    "logo": "https://media.api-sports.io/basketball/teams/6044.png"
                },
                "away": {
                    "id": 706,
                    "name": "Forli",
                    "logo": "https://media.api-sports.io/basketball/teams/706.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 21,
                    "quarter_2": 23,
                    "quarter_3": 21,
                    "quarter_4": 15,
                    "over_time": null,
                    "total": 80
                },
                "away": {
                    "quarter_1": 21,
                    "quarter_2": 22,
                    "quarter_3": 24,
                    "quarter_4": 18,
                    "over_time": null,
                    "total": 85
                }
            }
        },
        {
            "id": 388730,
            "date": "2024-04-07T16:00:00+00:00",
            "time": "16:00",
            "timestamp": 1712505600,
            "timezone": "UTC",
            "stage": null,
            "week": "30",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 242,
                "name": "Serie A2",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/242.png"
            },
            "country": {
                "id": 23,
                "name": "Italy",
                "code": "IT",
                "flag": "https://media.api-sports.io/flags/it.svg"
            },
            "teams": {
                "home": {
                    "id": 6043,
                    "name": "Luiss Roma",
                    "logo": "https://media.api-sports.io/basketball/teams/6043.png"
                },
                "away": {
                    "id": 3765,
                    "name": "Chiusi",
                    "logo": "https://media.api-sports.io/basketball/teams/3765.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 21,
                    "quarter_2": 14,
                    "quarter_3": 11,
                    "quarter_4": 10,
                    "over_time": null,
                    "total": 56
                },
                "away": {
                    "quarter_1": 13,
                    "quarter_2": 20,
                    "quarter_3": 26,
                    "quarter_4": 22,
                    "over_time": null,
                    "total": 81
                }
            }
        },
        {
            "id": 388731,
            "date": "2024-04-07T16:00:00+00:00",
            "time": "16:00",
            "timestamp": 1712505600,
            "timezone": "UTC",
            "stage": null,
            "week": "30",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 242,
                "name": "Serie A2",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/242.png"
            },
            "country": {
                "id": 23,
                "name": "Italy",
                "code": "IT",
                "flag": "https://media.api-sports.io/flags/it.svg"
            },
            "teams": {
                "home": {
                    "id": 3768,
                    "name": "Monferrato",
                    "logo": "https://media.api-sports.io/basketball/teams/3768.png"
                },
                "away": {
                    "id": 714,
                    "name": "Udine",
                    "logo": "https://media.api-sports.io/basketball/teams/714.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 26,
                    "quarter_2": 13,
                    "quarter_3": 26,
                    "quarter_4": 23,
                    "over_time": null,
                    "total": 88
                },
                "away": {
                    "quarter_1": 14,
                    "quarter_2": 21,
                    "quarter_3": 17,
                    "quarter_4": 19,
                    "over_time": null,
                    "total": 71
                }
            }
        },
        {
            "id": 388734,
            "date": "2024-04-07T16:00:00+00:00",
            "time": "16:00",
            "timestamp": 1712505600,
            "timezone": "UTC",
            "stage": null,
            "week": "30",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 242,
                "name": "Serie A2",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/242.png"
            },
            "country": {
                "id": 23,
                "name": "Italy",
                "code": "IT",
                "flag": "https://media.api-sports.io/flags/it.svg"
            },
            "teams": {
                "home": {
                    "id": 719,
                    "name": "Cantu",
                    "logo": "https://media.api-sports.io/basketball/teams/719.png"
                },
                "away": {
                    "id": 703,
                    "name": "Assigeco Piacenza",
                    "logo": "https://media.api-sports.io/basketball/teams/703.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 22,
                    "quarter_2": 15,
                    "quarter_3": 22,
                    "quarter_4": 20,
                    "over_time": null,
                    "total": 79
                },
                "away": {
                    "quarter_1": 20,
                    "quarter_2": 22,
                    "quarter_3": 15,
                    "quarter_4": 18,
                    "over_time": null,
                    "total": 75
                }
            }
        },
        {
            "id": 388736,
            "date": "2024-04-07T16:00:00+00:00",
            "time": "16:00",
            "timestamp": 1712505600,
            "timezone": "UTC",
            "stage": null,
            "week": "30",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 242,
                "name": "Serie A2",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/242.png"
            },
            "country": {
                "id": 23,
                "name": "Italy",
                "code": "IT",
                "flag": "https://media.api-sports.io/flags/it.svg"
            },
            "teams": {
                "home": {
                    "id": 689,
                    "name": "Agrigento",
                    "logo": "https://media.api-sports.io/basketball/teams/689.png"
                },
                "away": {
                    "id": 721,
                    "name": "Fortitudo Bologna",
                    "logo": "https://media.api-sports.io/basketball/teams/721.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 19,
                    "quarter_2": 17,
                    "quarter_3": 24,
                    "quarter_4": 21,
                    "over_time": null,
                    "total": 81
                },
                "away": {
                    "quarter_1": 20,
                    "quarter_2": 20,
                    "quarter_3": 23,
                    "quarter_4": 16,
                    "over_time": null,
                    "total": 79
                }
            }
        },
        {
            "id": 388911,
            "date": "2024-04-07T16:00:00+00:00",
            "time": "16:00",
            "timestamp": 1712505600,
            "timezone": "UTC",
            "stage": null,
            "week": "21",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 257,
                "name": "Prva Liga Women",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/257.png"
            },
            "country": {
                "id": 32,
                "name": "Macedonia",
                "code": "MK",
                "flag": "https://media.api-sports.io/flags/mk.svg"
            },
            "teams": {
                "home": {
                    "id": 6127,
                    "name": "Kumanovo-Grizli W",
                    "logo": "https://media.api-sports.io/basketball/teams/6127.png"
                },
                "away": {
                    "id": 3886,
                    "name": "MZT Skopje W",
                    "logo": "https://media.api-sports.io/basketball/teams/3886.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 13,
                    "quarter_2": 18,
                    "quarter_3": 15,
                    "quarter_4": 14,
                    "over_time": null,
                    "total": 60
                },
                "away": {
                    "quarter_1": 10,
                    "quarter_2": 10,
                    "quarter_3": 10,
                    "quarter_4": 16,
                    "over_time": null,
                    "total": 46
                }
            }
        },
        {
            "id": 394866,
            "date": "2024-04-07T16:00:00+00:00",
            "time": "16:00",
            "timestamp": 1712505600,
            "timezone": "UTC",
            "stage": null,
            "week": "1. Liga - Semi-finals",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 228,
                "name": "1. Liga",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/228.png"
            },
            "country": {
                "id": 12,
                "name": "Czech Republic",
                "code": "CZ",
                "flag": "https://media.api-sports.io/flags/cz.svg"
            },
            "teams": {
                "home": {
                    "id": 450,
                    "name": "Svitavy",
                    "logo": "https://media.api-sports.io/basketball/teams/450.png"
                },
                "away": {
                    "id": 1460,
                    "name": "Jindrichuv Hradec",
                    "logo": "https://media.api-sports.io/basketball/teams/1460.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 21,
                    "quarter_2": 22,
                    "quarter_3": 20,
                    "quarter_4": 20,
                    "over_time": null,
                    "total": 83
                },
                "away": {
                    "quarter_1": 19,
                    "quarter_2": 27,
                    "quarter_3": 10,
                    "quarter_4": 20,
                    "over_time": null,
                    "total": 76
                }
            }
        },
        {
            "id": 395022,
            "date": "2024-04-07T16:00:00+00:00",
            "time": "16:00",
            "timestamp": 1712505600,
            "timezone": "UTC",
            "stage": null,
            "week": "Super League - Quarter-finals",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 238,
                "name": "Super League",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/238.png"
            },
            "country": {
                "id": 65,
                "name": "Iran",
                "code": "IR",
                "flag": "https://media.api-sports.io/flags/ir.svg"
            },
            "teams": {
                "home": {
                    "id": 3742,
                    "name": "Mahram Tehran",
                    "logo": "https://media.api-sports.io/basketball/teams/3742.png"
                },
                "away": {
                    "id": 3743,
                    "name": "Mes Kerman",
                    "logo": "https://media.api-sports.io/basketball/teams/3743.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 31,
                    "quarter_2": 18,
                    "quarter_3": 26,
                    "quarter_4": 13,
                    "over_time": null,
                    "total": 88
                },
                "away": {
                    "quarter_1": 17,
                    "quarter_2": 16,
                    "quarter_3": 20,
                    "quarter_4": 18,
                    "over_time": null,
                    "total": 71
                }
            }
        },
        {
            "id": 395023,
            "date": "2024-04-07T16:00:00+00:00",
            "time": "16:00",
            "timestamp": 1712505600,
            "timezone": "UTC",
            "stage": null,
            "week": "Super League - Quarter-finals",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 238,
                "name": "Super League",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/238.png"
            },
            "country": {
                "id": 65,
                "name": "Iran",
                "code": "IR",
                "flag": "https://media.api-sports.io/flags/ir.svg"
            },
            "teams": {
                "home": {
                    "id": 3749,
                    "name": "Shahrdari Gorgan",
                    "logo": "https://media.api-sports.io/basketball/teams/3749.png"
                },
                "away": {
                    "id": 6271,
                    "name": "Limondis",
                    "logo": "https://media.api-sports.io/basketball/teams/6271.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 28,
                    "quarter_2": 26,
                    "quarter_3": 27,
                    "quarter_4": 21,
                    "over_time": null,
                    "total": 102
                },
                "away": {
                    "quarter_1": 23,
                    "quarter_2": 13,
                    "quarter_3": 20,
                    "quarter_4": 15,
                    "over_time": null,
                    "total": 71
                }
            }
        },
        {
            "id": 395024,
            "date": "2024-04-07T16:00:00+00:00",
            "time": "16:00",
            "timestamp": 1712505600,
            "timezone": "UTC",
            "stage": null,
            "week": "Super League - Quarter-finals",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 238,
                "name": "Super League",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/238.png"
            },
            "country": {
                "id": 65,
                "name": "Iran",
                "code": "IR",
                "flag": "https://media.api-sports.io/flags/ir.svg"
            },
            "teams": {
                "home": {
                    "id": 6272,
                    "name": "Tabiat",
                    "logo": "https://media.api-sports.io/basketball/teams/6272.png"
                },
                "away": {
                    "id": 3747,
                    "name": "Palayesh Naft Abadan",
                    "logo": "https://media.api-sports.io/basketball/teams/3747.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 18,
                    "quarter_2": 24,
                    "quarter_3": 11,
                    "quarter_4": 35,
                    "over_time": null,
                    "total": 88
                },
                "away": {
                    "quarter_1": 23,
                    "quarter_2": 12,
                    "quarter_3": 27,
                    "quarter_4": 32,
                    "over_time": null,
                    "total": 94
                }
            }
        },
        {
            "id": 395025,
            "date": "2024-04-07T16:00:00+00:00",
            "time": "16:00",
            "timestamp": 1712505600,
            "timezone": "UTC",
            "stage": null,
            "week": "Super League - Quarter-finals",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 238,
                "name": "Super League",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/238.png"
            },
            "country": {
                "id": 65,
                "name": "Iran",
                "code": "IR",
                "flag": "https://media.api-sports.io/flags/ir.svg"
            },
            "teams": {
                "home": {
                    "id": 3751,
                    "name": "Zob Ahan",
                    "logo": "https://media.api-sports.io/basketball/teams/3751.png"
                },
                "away": {
                    "id": 3740,
                    "name": "Kalleh",
                    "logo": "https://media.api-sports.io/basketball/teams/3740.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 21,
                    "quarter_2": 13,
                    "quarter_3": 23,
                    "quarter_4": 33,
                    "over_time": null,
                    "total": 90
                },
                "away": {
                    "quarter_1": 20,
                    "quarter_2": 28,
                    "quarter_3": 13,
                    "quarter_4": 21,
                    "over_time": null,
                    "total": 82
                }
            }
        },
        {
            "id": 395072,
            "date": "2024-04-07T16:00:00+00:00",
            "time": "16:00",
            "timestamp": 1712505600,
            "timezone": "UTC",
            "stage": null,
            "week": "FBU Superleague - Semi-finals",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 106,
                "name": "FBU Superleague",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/106.png"
            },
            "country": {
                "id": 49,
                "name": "Ukraine",
                "code": "UA",
                "flag": "https://media.api-sports.io/flags/ua.svg"
            },
            "teams": {
                "home": {
                    "id": 2882,
                    "name": "Rivne",
                    "logo": "https://media.api-sports.io/basketball/teams/2882.png"
                },
                "away": {
                    "id": 1314,
                    "name": "Kyiv Basket",
                    "logo": "https://media.api-sports.io/basketball/teams/1314.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 17,
                    "quarter_2": 21,
                    "quarter_3": 17,
                    "quarter_4": 22,
                    "over_time": null,
                    "total": 77
                },
                "away": {
                    "quarter_1": 10,
                    "quarter_2": 9,
                    "quarter_3": 11,
                    "quarter_4": 13,
                    "over_time": null,
                    "total": 43
                }
            }
        },
        {
            "id": 358374,
            "date": "2024-04-07T16:15:00+00:00",
            "time": "16:15",
            "timestamp": 1712506500,
            "timezone": "UTC",
            "stage": null,
            "week": "26",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 52,
                "name": "Lega A",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/52.png"
            },
            "country": {
                "id": 23,
                "name": "Italy",
                "code": "IT",
                "flag": "https://media.api-sports.io/flags/it.svg"
            },
            "teams": {
                "home": {
                    "id": 731,
                    "name": "Venezia",
                    "logo": "https://media.api-sports.io/basketball/teams/731.png"
                },
                "away": {
                    "id": 732,
                    "name": "Virtus Bologna",
                    "logo": "https://media.api-sports.io/basketball/teams/732.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 20,
                    "quarter_2": 11,
                    "quarter_3": 16,
                    "quarter_4": 23,
                    "over_time": null,
                    "total": 70
                },
                "away": {
                    "quarter_1": 24,
                    "quarter_2": 30,
                    "quarter_3": 20,
                    "quarter_4": 15,
                    "over_time": null,
                    "total": 89
                }
            }
        },
        {
            "id": 359685,
            "date": "2024-04-07T16:30:00+00:00",
            "time": "16:30",
            "timestamp": 1712507400,
            "timezone": "UTC",
            "stage": null,
            "week": "28",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 117,
                "name": "ACB",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/117.png"
            },
            "country": {
                "id": 45,
                "name": "Spain",
                "code": "ES",
                "flag": "https://media.api-sports.io/flags/es.svg"
            },
            "teams": {
                "home": {
                    "id": 2329,
                    "name": "Barcelona",
                    "logo": "https://media.api-sports.io/basketball/teams/2329.png"
                },
                "away": {
                    "id": 2338,
                    "name": "Real Madrid",
                    "logo": "https://media.api-sports.io/basketball/teams/2338.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 27,
                    "quarter_2": 18,
                    "quarter_3": 19,
                    "quarter_4": 21,
                    "over_time": null,
                    "total": 85
                },
                "away": {
                    "quarter_1": 11,
                    "quarter_2": 22,
                    "quarter_3": 25,
                    "quarter_4": 21,
                    "over_time": null,
                    "total": 79
                }
            }
        },
        {
            "id": 362081,
            "date": "2024-04-07T16:30:00+00:00",
            "time": "16:30",
            "timestamp": 1712507400,
            "timezone": "UTC",
            "stage": null,
            "week": null,
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 60,
                "name": "LKL",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/60.png"
            },
            "country": {
                "id": 27,
                "name": "Lithuania",
                "code": "LT",
                "flag": "https://media.api-sports.io/flags/lt.svg"
            },
            "teams": {
                "home": {
                    "id": 795,
                    "name": "Siauliai",
                    "logo": "https://media.api-sports.io/basketball/teams/795.png"
                },
                "away": {
                    "id": 793,
                    "name": "Pieno Zvaigzdes",
                    "logo": "https://media.api-sports.io/basketball/teams/793.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 28,
                    "quarter_2": 19,
                    "quarter_3": 25,
                    "quarter_4": 26,
                    "over_time": null,
                    "total": 98
                },
                "away": {
                    "quarter_1": 26,
                    "quarter_2": 25,
                    "quarter_3": 15,
                    "quarter_4": 23,
                    "over_time": null,
                    "total": 89
                }
            }
        },
        {
            "id": 365951,
            "date": "2024-04-07T16:30:00+00:00",
            "time": "16:30",
            "timestamp": 1712507400,
            "timezone": "UTC",
            "stage": null,
            "week": "23",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 236,
                "name": "A2 Women",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/236.png"
            },
            "country": {
                "id": 18,
                "name": "Greece",
                "code": "GR",
                "flag": "https://media.api-sports.io/flags/gr.svg"
            },
            "teams": {
                "home": {
                    "id": 5697,
                    "name": "Amilla Peristeriou W",
                    "logo": "https://media.api-sports.io/basketball/teams/5697.png"
                },
                "away": {
                    "id": 3685,
                    "name": "Dafni W",
                    "logo": "https://media.api-sports.io/basketball/teams/3685.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 8,
                    "quarter_2": 13,
                    "quarter_3": 25,
                    "quarter_4": 10,
                    "over_time": null,
                    "total": 56
                },
                "away": {
                    "quarter_1": 17,
                    "quarter_2": 25,
                    "quarter_3": 15,
                    "quarter_4": 14,
                    "over_time": null,
                    "total": 71
                }
            }
        },
        {
            "id": 355182,
            "date": "2024-04-07T17:00:00+00:00",
            "time": "17:00",
            "timestamp": 1712509200,
            "timezone": "UTC",
            "stage": null,
            "week": "28",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 2,
                "name": "LNB",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/2.png"
            },
            "country": {
                "id": 4,
                "name": "France",
                "code": "FR",
                "flag": "https://media.api-sports.io/flags/fr.svg"
            },
            "teams": {
                "home": {
                    "id": 26,
                    "name": "Lyon-Villeurbanne",
                    "logo": "https://media.api-sports.io/basketball/teams/26.png"
                },
                "away": {
                    "id": 21,
                    "name": "Nanterre",
                    "logo": "https://media.api-sports.io/basketball/teams/21.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 21,
                    "quarter_2": 32,
                    "quarter_3": 16,
                    "quarter_4": 31,
                    "over_time": null,
                    "total": 100
                },
                "away": {
                    "quarter_1": 18,
                    "quarter_2": 16,
                    "quarter_3": 20,
                    "quarter_4": 22,
                    "over_time": null,
                    "total": 76
                }
            }
        },
        {
            "id": 358370,
            "date": "2024-04-07T17:00:00+00:00",
            "time": "17:00",
            "timestamp": 1712509200,
            "timezone": "UTC",
            "stage": null,
            "week": "26",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 52,
                "name": "Lega A",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/52.png"
            },
            "country": {
                "id": 23,
                "name": "Italy",
                "code": "IT",
                "flag": "https://media.api-sports.io/flags/it.svg"
            },
            "teams": {
                "home": {
                    "id": 722,
                    "name": "Olimpia Milano",
                    "logo": "https://media.api-sports.io/basketball/teams/722.png"
                },
                "away": {
                    "id": 727,
                    "name": "Trento",
                    "logo": "https://media.api-sports.io/basketball/teams/727.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 20,
                    "quarter_2": 24,
                    "quarter_3": 25,
                    "quarter_4": 22,
                    "over_time": null,
                    "total": 91
                },
                "away": {
                    "quarter_1": 33,
                    "quarter_2": 19,
                    "quarter_3": 21,
                    "quarter_4": 13,
                    "over_time": null,
                    "total": 86
                }
            }
        },
        {
            "id": 363521,
            "date": "2024-04-07T17:00:00+00:00",
            "time": "17:00",
            "timestamp": 1712509200,
            "timezone": "UTC",
            "stage": null,
            "week": null,
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 108,
                "name": "BBL",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/108.png"
            },
            "country": {
                "id": 50,
                "name": "United Kingdom",
                "code": "GB",
                "flag": "https://media.api-sports.io/flags/gb.svg"
            },
            "teams": {
                "home": {
                    "id": 1330,
                    "name": "Manchester Giants",
                    "logo": "https://media.api-sports.io/basketball/teams/1330.png"
                },
                "away": {
                    "id": 1333,
                    "name": "Sheffield Sharks",
                    "logo": "https://media.api-sports.io/basketball/teams/1333.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 14,
                    "quarter_2": 33,
                    "quarter_3": 13,
                    "quarter_4": 8,
                    "over_time": null,
                    "total": 68
                },
                "away": {
                    "quarter_1": 26,
                    "quarter_2": 27,
                    "quarter_3": 22,
                    "quarter_4": 24,
                    "over_time": null,
                    "total": 99
                }
            }
        },
        {
            "id": 364976,
            "date": "2024-04-07T17:00:00+00:00",
            "time": "17:00",
            "timestamp": 1712509200,
            "timezone": "UTC",
            "stage": null,
            "week": "20",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 226,
                "name": "Premijer Liga Women",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/226.png"
            },
            "country": {
                "id": 10,
                "name": "Croatia",
                "code": "HR",
                "flag": "https://media.api-sports.io/flags/hr.svg"
            },
            "teams": {
                "home": {
                    "id": 3609,
                    "name": "Sibenik W",
                    "logo": "https://media.api-sports.io/basketball/teams/3609.png"
                },
                "away": {
                    "id": 3600,
                    "name": "Brod na Savi W",
                    "logo": "https://media.api-sports.io/basketball/teams/3600.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 24,
                    "quarter_2": 24,
                    "quarter_3": 20,
                    "quarter_4": 18,
                    "over_time": null,
                    "total": 86
                },
                "away": {
                    "quarter_1": 17,
                    "quarter_2": 23,
                    "quarter_3": 14,
                    "quarter_4": 23,
                    "over_time": null,
                    "total": 77
                }
            }
        },
        {
            "id": 389214,
            "date": "2024-04-07T17:00:00+00:00",
            "time": "17:00",
            "timestamp": 1712509200,
            "timezone": "UTC",
            "stage": null,
            "week": null,
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 255,
                "name": "WBL Women",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/255.png"
            },
            "country": {
                "id": 30,
                "name": "Netherlands",
                "code": "NL",
                "flag": "https://media.api-sports.io/flags/nl.svg"
            },
            "teams": {
                "home": {
                    "id": 5584,
                    "name": "Limburg W",
                    "logo": "https://media.api-sports.io/basketball/teams/5584.png"
                },
                "away": {
                    "id": 6087,
                    "name": "Leiden W",
                    "logo": "https://media.api-sports.io/basketball/teams/6087.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": null,
                    "quarter_2": null,
                    "quarter_3": null,
                    "quarter_4": null,
                    "over_time": null,
                    "total": 61
                },
                "away": {
                    "quarter_1": null,
                    "quarter_2": null,
                    "quarter_3": null,
                    "quarter_4": null,
                    "over_time": null,
                    "total": 75
                }
            }
        },
        {
            "id": 358371,
            "date": "2024-04-07T17:30:00+00:00",
            "time": "17:30",
            "timestamp": 1712511000,
            "timezone": "UTC",
            "stage": null,
            "week": "26",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 52,
                "name": "Lega A",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/52.png"
            },
            "country": {
                "id": 23,
                "name": "Italy",
                "code": "IT",
                "flag": "https://media.api-sports.io/flags/it.svg"
            },
            "teams": {
                "home": {
                    "id": 724,
                    "name": "Pistoia",
                    "logo": "https://media.api-sports.io/basketball/teams/724.png"
                },
                "away": {
                    "id": 725,
                    "name": "Reggiana",
                    "logo": "https://media.api-sports.io/basketball/teams/725.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 16,
                    "quarter_2": 24,
                    "quarter_3": 30,
                    "quarter_4": 13,
                    "over_time": null,
                    "total": 83
                },
                "away": {
                    "quarter_1": 25,
                    "quarter_2": 19,
                    "quarter_3": 18,
                    "quarter_4": 20,
                    "over_time": null,
                    "total": 82
                }
            }
        },
        {
            "id": 394782,
            "date": "2024-04-07T17:30:00+00:00",
            "time": "17:30",
            "timestamp": 1712511000,
            "timezone": "UTC",
            "stage": null,
            "week": "3",
            "status": {
                "long": "After Over Time",
                "short": "AOT",
                "timer": null
            },
            "league": {
                "id": 123,
                "name": "Prvenstvo BiH",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/123.png"
            },
            "country": {
                "id": 57,
                "name": "Bosnia-and-Herzegovina",
                "code": "BA",
                "flag": "https://media.api-sports.io/flags/ba.svg"
            },
            "teams": {
                "home": {
                    "id": 5660,
                    "name": "Slavija",
                    "logo": "https://media.api-sports.io/basketball/teams/5660.png"
                },
                "away": {
                    "id": 2549,
                    "name": "Leotar Trebinje",
                    "logo": "https://media.api-sports.io/basketball/teams/2549.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 15,
                    "quarter_2": 22,
                    "quarter_3": 21,
                    "quarter_4": 22,
                    "over_time": 19,
                    "total": 99
                },
                "away": {
                    "quarter_1": 20,
                    "quarter_2": 21,
                    "quarter_3": 17,
                    "quarter_4": 22,
                    "over_time": 7,
                    "total": 87
                }
            }
        },
        {
            "id": 395048,
            "date": "2024-04-07T17:30:00+00:00",
            "time": "17:30",
            "timestamp": 1712511000,
            "timezone": "UTC",
            "stage": null,
            "week": "TB2L - Quarter-finals",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 103,
                "name": "TB2L",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/103.png"
            },
            "country": {
                "id": 48,
                "name": "Turkey",
                "code": "TR",
                "flag": "https://media.api-sports.io/flags/tr.svg"
            },
            "teams": {
                "home": {
                    "id": 5684,
                    "name": "Konya BBSK",
                    "logo": "https://media.api-sports.io/basketball/teams/5684.png"
                },
                "away": {
                    "id": 1284,
                    "name": "Ege Universitesi",
                    "logo": "https://media.api-sports.io/basketball/teams/1284.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 14,
                    "quarter_2": 20,
                    "quarter_3": 19,
                    "quarter_4": 18,
                    "over_time": null,
                    "total": 71
                },
                "away": {
                    "quarter_1": 24,
                    "quarter_2": 10,
                    "quarter_3": 13,
                    "quarter_4": 17,
                    "over_time": null,
                    "total": 64
                }
            }
        },
        {
            "id": 364114,
            "date": "2024-04-07T17:45:00+00:00",
            "time": "17:45",
            "timestamp": 1712511900,
            "timezone": "UTC",
            "stage": null,
            "week": "23",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 51,
                "name": "Super League",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/51.png"
            },
            "country": {
                "id": 22,
                "name": "Israel",
                "code": "IL",
                "flag": "https://media.api-sports.io/flags/il.svg"
            },
            "teams": {
                "home": {
                    "id": 1792,
                    "name": "Hapoel Jerusalem",
                    "logo": "https://media.api-sports.io/basketball/teams/1792.png"
                },
                "away": {
                    "id": 2726,
                    "name": "H. Afula",
                    "logo": "https://media.api-sports.io/basketball/teams/2726.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 22,
                    "quarter_2": 13,
                    "quarter_3": 23,
                    "quarter_4": 23,
                    "over_time": null,
                    "total": 81
                },
                "away": {
                    "quarter_1": 22,
                    "quarter_2": 28,
                    "quarter_3": 11,
                    "quarter_4": 17,
                    "over_time": null,
                    "total": 78
                }
            }
        },
        {
            "id": 395019,
            "date": "2024-04-07T17:45:00+00:00",
            "time": "17:45",
            "timestamp": 1712511900,
            "timezone": "UTC",
            "stage": null,
            "week": "Top Division Women - Quarter-finals",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 25,
                "name": "Top Division Women",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/25.png"
            },
            "country": {
                "id": 7,
                "name": "Belgium",
                "code": "BE",
                "flag": "https://media.api-sports.io/flags/be.svg"
            },
            "teams": {
                "home": {
                    "id": 320,
                    "name": "Phantoms W",
                    "logo": "https://media.api-sports.io/basketball/teams/320.png"
                },
                "away": {
                    "id": 315,
                    "name": "Liege W",
                    "logo": "https://media.api-sports.io/basketball/teams/315.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 12,
                    "quarter_2": 21,
                    "quarter_3": 17,
                    "quarter_4": 21,
                    "over_time": null,
                    "total": 71
                },
                "away": {
                    "quarter_1": 20,
                    "quarter_2": 10,
                    "quarter_3": 9,
                    "quarter_4": 17,
                    "over_time": null,
                    "total": 56
                }
            }
        },
        {
            "id": 359882,
            "date": "2024-04-07T18:00:00+00:00",
            "time": "18:00",
            "timestamp": 1712512800,
            "timezone": "UTC",
            "stage": null,
            "week": "24",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 53,
                "name": "Serie A1 W",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/53.png"
            },
            "country": {
                "id": 23,
                "name": "Italy",
                "code": "IT",
                "flag": "https://media.api-sports.io/flags/it.svg"
            },
            "teams": {
                "home": {
                    "id": 743,
                    "name": "San Martino W",
                    "logo": "https://media.api-sports.io/basketball/teams/743.png"
                },
                "away": {
                    "id": 744,
                    "name": "Schio W",
                    "logo": "https://media.api-sports.io/basketball/teams/744.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 5,
                    "quarter_2": 5,
                    "quarter_3": 14,
                    "quarter_4": 19,
                    "over_time": null,
                    "total": 43
                },
                "away": {
                    "quarter_1": 22,
                    "quarter_2": 23,
                    "quarter_3": 18,
                    "quarter_4": 22,
                    "over_time": null,
                    "total": 85
                }
            }
        },
        {
            "id": 362525,
            "date": "2024-04-07T18:00:00+00:00",
            "time": "18:00",
            "timestamp": 1712512800,
            "timezone": "UTC",
            "stage": null,
            "week": "33",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 71,
                "name": "1 Liga",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/71.png"
            },
            "country": {
                "id": 34,
                "name": "Poland",
                "code": "PL",
                "flag": "https://media.api-sports.io/flags/pl.svg"
            },
            "teams": {
                "home": {
                    "id": 1625,
                    "name": "Alstom Krakow",
                    "logo": "https://media.api-sports.io/basketball/teams/1625.png"
                },
                "away": {
                    "id": 3094,
                    "name": "Starogard Gdanski",
                    "logo": "https://media.api-sports.io/basketball/teams/3094.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 12,
                    "quarter_2": 24,
                    "quarter_3": 17,
                    "quarter_4": 25,
                    "over_time": null,
                    "total": 78
                },
                "away": {
                    "quarter_1": 30,
                    "quarter_2": 29,
                    "quarter_3": 16,
                    "quarter_4": 24,
                    "over_time": null,
                    "total": 99
                }
            }
        },
        {
            "id": 364975,
            "date": "2024-04-07T18:00:00+00:00",
            "time": "18:00",
            "timestamp": 1712512800,
            "timezone": "UTC",
            "stage": null,
            "week": "20",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 226,
                "name": "Premijer Liga Women",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/226.png"
            },
            "country": {
                "id": 10,
                "name": "Croatia",
                "code": "HR",
                "flag": "https://media.api-sports.io/flags/hr.svg"
            },
            "teams": {
                "home": {
                    "id": 3603,
                    "name": "Medvescak W",
                    "logo": "https://media.api-sports.io/basketball/teams/3603.png"
                },
                "away": {
                    "id": 4887,
                    "name": "Zadar Plus W",
                    "logo": "https://media.api-sports.io/basketball/teams/4887.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 37,
                    "quarter_2": 21,
                    "quarter_3": 22,
                    "quarter_4": 14,
                    "over_time": null,
                    "total": 94
                },
                "away": {
                    "quarter_1": 4,
                    "quarter_2": 8,
                    "quarter_3": 20,
                    "quarter_4": 9,
                    "over_time": null,
                    "total": 41
                }
            }
        },
        {
            "id": 366376,
            "date": "2024-04-07T18:00:00+00:00",
            "time": "18:00",
            "timestamp": 1712512800,
            "timezone": "UTC",
            "stage": null,
            "week": "29",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 85,
                "name": "First League",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/85.png"
            },
            "country": {
                "id": 41,
                "name": "Serbia",
                "code": "RS",
                "flag": "https://media.api-sports.io/flags/rs.svg"
            },
            "teams": {
                "home": {
                    "id": 1059,
                    "name": "OKK Novi Pazar",
                    "logo": "https://media.api-sports.io/basketball/teams/1059.png"
                },
                "away": {
                    "id": 1673,
                    "name": "Sloga",
                    "logo": "https://media.api-sports.io/basketball/teams/1673.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 18,
                    "quarter_2": 19,
                    "quarter_3": 17,
                    "quarter_4": 13,
                    "over_time": null,
                    "total": 67
                },
                "away": {
                    "quarter_1": 20,
                    "quarter_2": 25,
                    "quarter_3": 12,
                    "quarter_4": 22,
                    "over_time": null,
                    "total": 79
                }
            }
        },
        {
            "id": 390476,
            "date": "2024-04-07T18:00:00+00:00",
            "time": "18:00",
            "timestamp": 1712512800,
            "timezone": "UTC",
            "stage": null,
            "week": "29",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 30,
                "name": "Premijer liga",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/30.png"
            },
            "country": {
                "id": 10,
                "name": "Croatia",
                "code": "HR",
                "flag": "https://media.api-sports.io/flags/hr.svg"
            },
            "teams": {
                "home": {
                    "id": 2588,
                    "name": "Dubrovnik",
                    "logo": "https://media.api-sports.io/basketball/teams/2588.png"
                },
                "away": {
                    "id": 416,
                    "name": "Skrljevo",
                    "logo": "https://media.api-sports.io/basketball/teams/416.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 26,
                    "quarter_2": 25,
                    "quarter_3": 12,
                    "quarter_4": 11,
                    "over_time": null,
                    "total": 74
                },
                "away": {
                    "quarter_1": 16,
                    "quarter_2": 9,
                    "quarter_3": 10,
                    "quarter_4": 25,
                    "over_time": null,
                    "total": 60
                }
            }
        },
        {
            "id": 391507,
            "date": "2024-04-07T18:00:00+00:00",
            "time": "18:00",
            "timestamp": 1712512800,
            "timezone": "UTC",
            "stage": null,
            "week": null,
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 405,
                "name": "Super League",
                "type": "League",
                "season": 2023,
                "logo": "https://media.api-sports.io/basketball/leagues/405.png"
            },
            "country": {
                "id": 9,
                "name": "Canada",
                "code": "CA",
                "flag": "https://media.api-sports.io/flags/ca.svg"
            },
            "teams": {
                "home": {
                    "id": 360,
                    "name": "Sudbury",
                    "logo": "https://media.api-sports.io/basketball/teams/360.png"
                },
                "away": {
                    "id": 3402,
                    "name": "Toledo Glass City",
                    "logo": "https://media.api-sports.io/basketball/teams/3402.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 35,
                    "quarter_2": 36,
                    "quarter_3": 37,
                    "quarter_4": 33,
                    "over_time": null,
                    "total": 141
                },
                "away": {
                    "quarter_1": 29,
                    "quarter_2": 22,
                    "quarter_3": 32,
                    "quarter_4": 23,
                    "over_time": null,
                    "total": 106
                }
            }
        },
        {
            "id": 395035,
            "date": "2024-04-07T18:00:00+00:00",
            "time": "18:00",
            "timestamp": 1712512800,
            "timezone": "UTC",
            "stage": null,
            "week": "Division 1 - Quarter-finals",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 409,
                "name": "Division 1",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/409.png"
            },
            "country": {
                "id": 77,
                "name": "Lebanon",
                "code": "LB",
                "flag": "https://media.api-sports.io/flags/lb.svg"
            },
            "teams": {
                "home": {
                    "id": 4418,
                    "name": "Al-Riyadi",
                    "logo": "https://media.api-sports.io/basketball/teams/4418.png"
                },
                "away": {
                    "id": 6361,
                    "name": "NSA",
                    "logo": "https://media.api-sports.io/basketball/teams/6361.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 17,
                    "quarter_2": 24,
                    "quarter_3": 25,
                    "quarter_4": 21,
                    "over_time": null,
                    "total": 87
                },
                "away": {
                    "quarter_1": 19,
                    "quarter_2": 14,
                    "quarter_3": 12,
                    "quarter_4": 24,
                    "over_time": null,
                    "total": 69
                }
            }
        },
        {
            "id": 395115,
            "date": "2024-04-07T18:00:00+00:00",
            "time": "18:00",
            "timestamp": 1712512800,
            "timezone": "UTC",
            "stage": null,
            "week": "Superliga - Quarter-finals",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 59,
                "name": "Superliga",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/59.png"
            },
            "country": {
                "id": 26,
                "name": "Kosovo",
                "code": "XK",
                "flag": "https://media.api-sports.io/flags/xk.svg"
            },
            "teams": {
                "home": {
                    "id": 3006,
                    "name": "Sigal Prishtina",
                    "logo": "https://media.api-sports.io/basketball/teams/3006.png"
                },
                "away": {
                    "id": 1593,
                    "name": "Vellaznimi",
                    "logo": "https://media.api-sports.io/basketball/teams/1593.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 24,
                    "quarter_2": 20,
                    "quarter_3": 13,
                    "quarter_4": 15,
                    "over_time": null,
                    "total": 72
                },
                "away": {
                    "quarter_1": 18,
                    "quarter_2": 22,
                    "quarter_3": 8,
                    "quarter_4": 16,
                    "over_time": null,
                    "total": 64
                }
            }
        },
        {
            "id": 395260,
            "date": "2024-04-07T18:00:00+00:00",
            "time": "18:00",
            "timestamp": 1712512800,
            "timezone": "UTC",
            "stage": null,
            "week": "Hungarian Cup - Final",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 138,
                "name": "Hungarian Cup",
                "type": "cup",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/138.png"
            },
            "country": {
                "id": 19,
                "name": "Hungary",
                "code": "HU",
                "flag": "https://media.api-sports.io/flags/hu.svg"
            },
            "teams": {
                "home": {
                    "id": 629,
                    "name": "Szedeak",
                    "logo": "https://media.api-sports.io/basketball/teams/629.png"
                },
                "away": {
                    "id": 630,
                    "name": "Szolnoki Olaj",
                    "logo": "https://media.api-sports.io/basketball/teams/630.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 27,
                    "quarter_2": 20,
                    "quarter_3": 15,
                    "quarter_4": 18,
                    "over_time": null,
                    "total": 80
                },
                "away": {
                    "quarter_1": 23,
                    "quarter_2": 20,
                    "quarter_3": 33,
                    "quarter_4": 20,
                    "over_time": null,
                    "total": 96
                }
            }
        },
        {
            "id": 394768,
            "date": "2024-04-07T18:15:00+00:00",
            "time": "18:15",
            "timestamp": 1712513700,
            "timezone": "UTC",
            "stage": null,
            "week": "Superliga Women - Final",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 218,
                "name": "Superliga Women",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/218.png"
            },
            "country": {
                "id": 3,
                "name": "Austria",
                "code": "AT",
                "flag": "https://media.api-sports.io/flags/at.svg"
            },
            "teams": {
                "home": {
                    "id": 6104,
                    "name": "St. Polten W",
                    "logo": "https://media.api-sports.io/basketball/teams/6104.png"
                },
                "away": {
                    "id": 2964,
                    "name": "UBI Graz W",
                    "logo": "https://media.api-sports.io/basketball/teams/2964.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 12,
                    "quarter_2": 21,
                    "quarter_3": 18,
                    "quarter_4": 20,
                    "over_time": null,
                    "total": 71
                },
                "away": {
                    "quarter_1": 18,
                    "quarter_2": 24,
                    "quarter_3": 9,
                    "quarter_4": 13,
                    "over_time": null,
                    "total": 64
                }
            }
        },
        {
            "id": 395117,
            "date": "2024-04-07T19:15:00+00:00",
            "time": "19:15",
            "timestamp": 1712517300,
            "timezone": "UTC",
            "stage": null,
            "week": "Premier League Women - Semi-finals",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 49,
                "name": "Premier League W",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/49.png"
            },
            "country": {
                "id": 20,
                "name": "Iceland",
                "code": "IS",
                "flag": "https://media.api-sports.io/flags/is.svg"
            },
            "teams": {
                "home": {
                    "id": 6444,
                    "name": "Athena W",
                    "logo": "https://media.api-sports.io/basketball/teams/6444.png"
                },
                "away": {
                    "id": 660,
                    "name": "KR Reykjavik W",
                    "logo": "https://media.api-sports.io/basketball/teams/660.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 13,
                    "quarter_2": 21,
                    "quarter_3": 28,
                    "quarter_4": 28,
                    "over_time": null,
                    "total": 90
                },
                "away": {
                    "quarter_1": 24,
                    "quarter_2": 18,
                    "quarter_3": 13,
                    "quarter_4": 8,
                    "over_time": null,
                    "total": 63
                }
            }
        },
        {
            "id": 373320,
            "date": "2024-04-07T19:30:00+00:00",
            "time": "19:30",
            "timestamp": 1712518200,
            "timezone": "UTC",
            "stage": null,
            "week": null,
            "status": {
                "long": "After Over Time",
                "short": "AOT",
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
                    "id": 138,
                    "name": "Dallas Mavericks",
                    "logo": "https://media.api-sports.io/basketball/teams/138.png"
                },
                "away": {
                    "id": 142,
                    "name": "Houston Rockets",
                    "logo": "https://media.api-sports.io/basketball/teams/142.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 27,
                    "quarter_2": 39,
                    "quarter_3": 32,
                    "quarter_4": 31,
                    "over_time": 18,
                    "total": 147
                },
                "away": {
                    "quarter_1": 42,
                    "quarter_2": 29,
                    "quarter_3": 35,
                    "quarter_4": 23,
                    "over_time": 7,
                    "total": 136
                }
            }
        },
        {
            "id": 373321,
            "date": "2024-04-07T19:30:00+00:00",
            "time": "19:30",
            "timestamp": 1712518200,
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
                    "id": 144,
                    "name": "Los Angeles Clippers",
                    "logo": "https://media.api-sports.io/basketball/teams/144.png"
                },
                "away": {
                    "id": 137,
                    "name": "Cleveland Cavaliers",
                    "logo": "https://media.api-sports.io/basketball/teams/137.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 33,
                    "quarter_2": 26,
                    "quarter_3": 27,
                    "quarter_4": 34,
                    "over_time": null,
                    "total": 120
                },
                "away": {
                    "quarter_1": 40,
                    "quarter_2": 40,
                    "quarter_3": 18,
                    "quarter_4": 20,
                    "over_time": null,
                    "total": 118
                }
            }
        },
        {
            "id": 391508,
            "date": "2024-04-07T20:00:00+00:00",
            "time": "20:00",
            "timestamp": 1712520000,
            "timezone": "UTC",
            "stage": null,
            "week": null,
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 405,
                "name": "Super League",
                "type": "League",
                "season": 2023,
                "logo": "https://media.api-sports.io/basketball/leagues/405.png"
            },
            "country": {
                "id": 9,
                "name": "Canada",
                "code": "CA",
                "flag": "https://media.api-sports.io/flags/ca.svg"
            },
            "teams": {
                "home": {
                    "id": 6343,
                    "name": "Montreal Toundra",
                    "logo": "https://media.api-sports.io/basketball/teams/6343.png"
                },
                "away": {
                    "id": 5913,
                    "name": "Newfoundland Rogues",
                    "logo": "https://media.api-sports.io/basketball/teams/5913.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 21,
                    "quarter_2": 29,
                    "quarter_3": 32,
                    "quarter_4": 31,
                    "over_time": null,
                    "total": 113
                },
                "away": {
                    "quarter_1": 25,
                    "quarter_2": 26,
                    "quarter_3": 24,
                    "quarter_4": 37,
                    "over_time": null,
                    "total": 112
                }
            }
        },
        {
            "id": 388345,
            "date": "2024-04-07T20:30:00+00:00",
            "time": "20:30",
            "timestamp": 1712521800,
            "timezone": "UTC",
            "stage": null,
            "week": null,
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 27,
                "name": "LBF W",
                "type": "League",
                "season": 2024,
                "logo": "https://media.api-sports.io/basketball/leagues/27.png"
            },
            "country": {
                "id": 8,
                "name": "Brazil",
                "code": "BR",
                "flag": "https://media.api-sports.io/flags/br.svg"
            },
            "teams": {
                "home": {
                    "id": 6330,
                    "name": "Campinas W",
                    "logo": "https://media.api-sports.io/basketball/teams/6330.png"
                },
                "away": {
                    "id": 348,
                    "name": "Sampaio W",
                    "logo": "https://media.api-sports.io/basketball/teams/348.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 13,
                    "quarter_2": 12,
                    "quarter_3": 18,
                    "quarter_4": 15,
                    "over_time": null,
                    "total": 58
                },
                "away": {
                    "quarter_1": 23,
                    "quarter_2": 16,
                    "quarter_3": 20,
                    "quarter_4": 14,
                    "over_time": null,
                    "total": 73
                }
            }
        },
        {
            "id": 373322,
            "date": "2024-04-07T21:00:00+00:00",
            "time": "21:00",
            "timestamp": 1712523600,
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
                    "id": 143,
                    "name": "Indiana Pacers",
                    "logo": "https://media.api-sports.io/basketball/teams/143.png"
                },
                "away": {
                    "id": 147,
                    "name": "Miami Heat",
                    "logo": "https://media.api-sports.io/basketball/teams/147.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 38,
                    "quarter_2": 25,
                    "quarter_3": 28,
                    "quarter_4": 26,
                    "over_time": null,
                    "total": 117
                },
                "away": {
                    "quarter_1": 24,
                    "quarter_2": 22,
                    "quarter_3": 32,
                    "quarter_4": 37,
                    "over_time": null,
                    "total": 115
                }
            }
        },
        {
            "id": 383940,
            "date": "2024-04-07T21:00:00+00:00",
            "time": "21:00",
            "timestamp": 1712523600,
            "timezone": "UTC",
            "stage": null,
            "week": null,
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 26,
                "name": "NBB",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/26.png"
            },
            "country": {
                "id": 8,
                "name": "Brazil",
                "code": "BR",
                "flag": "https://media.api-sports.io/flags/br.svg"
            },
            "teams": {
                "home": {
                    "id": 336,
                    "name": "Mogi",
                    "logo": "https://media.api-sports.io/basketball/teams/336.png"
                },
                "away": {
                    "id": 342,
                    "name": "Sao Paulo",
                    "logo": "https://media.api-sports.io/basketball/teams/342.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 19,
                    "quarter_2": 16,
                    "quarter_3": 24,
                    "quarter_4": 22,
                    "over_time": null,
                    "total": 81
                },
                "away": {
                    "quarter_1": 22,
                    "quarter_2": 20,
                    "quarter_3": 13,
                    "quarter_4": 24,
                    "over_time": null,
                    "total": 79
                }
            }
        },
        {
            "id": 373323,
            "date": "2024-04-07T22:00:00+00:00",
            "time": "22:00",
            "timestamp": 1712527200,
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
                    "id": 133,
                    "name": "Boston Celtics",
                    "logo": "https://media.api-sports.io/basketball/teams/133.png"
                },
                "away": {
                    "id": 156,
                    "name": "Portland Trail Blazers",
                    "logo": "https://media.api-sports.io/basketball/teams/156.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 30,
                    "quarter_2": 33,
                    "quarter_3": 30,
                    "quarter_4": 31,
                    "over_time": null,
                    "total": 124
                },
                "away": {
                    "quarter_1": 24,
                    "quarter_2": 32,
                    "quarter_3": 29,
                    "quarter_4": 22,
                    "over_time": null,
                    "total": 107
                }
            }
        },
        {
            "id": 373324,
            "date": "2024-04-07T22:00:00+00:00",
            "time": "22:00",
            "timestamp": 1712527200,
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
                    "id": 135,
                    "name": "Charlotte Hornets",
                    "logo": "https://media.api-sports.io/basketball/teams/135.png"
                },
                "away": {
                    "id": 152,
                    "name": "Oklahoma City Thunder",
                    "logo": "https://media.api-sports.io/basketball/teams/152.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 29,
                    "quarter_2": 26,
                    "quarter_3": 30,
                    "quarter_4": 33,
                    "over_time": null,
                    "total": 118
                },
                "away": {
                    "quarter_1": 31,
                    "quarter_2": 34,
                    "quarter_3": 21,
                    "quarter_4": 35,
                    "over_time": null,
                    "total": 121
                }
            }
        },
        {
            "id": 373325,
            "date": "2024-04-07T22:00:00+00:00",
            "time": "22:00",
            "timestamp": 1712527200,
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
                    "id": 153,
                    "name": "Orlando Magic",
                    "logo": "https://media.api-sports.io/basketball/teams/153.png"
                },
                "away": {
                    "id": 136,
                    "name": "Chicago Bulls",
                    "logo": "https://media.api-sports.io/basketball/teams/136.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 31,
                    "quarter_2": 25,
                    "quarter_3": 33,
                    "quarter_4": 24,
                    "over_time": null,
                    "total": 113
                },
                "away": {
                    "quarter_1": 14,
                    "quarter_2": 30,
                    "quarter_3": 28,
                    "quarter_4": 26,
                    "over_time": null,
                    "total": 98
                }
            }
        },
        {
            "id": 373326,
            "date": "2024-04-07T22:00:00+00:00",
            "time": "22:00",
            "timestamp": 1712527200,
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
                    "id": 155,
                    "name": "Phoenix Suns",
                    "logo": "https://media.api-sports.io/basketball/teams/155.png"
                },
                "away": {
                    "id": 150,
                    "name": "New Orleans Pelicans",
                    "logo": "https://media.api-sports.io/basketball/teams/150.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 26,
                    "quarter_2": 24,
                    "quarter_3": 33,
                    "quarter_4": 22,
                    "over_time": null,
                    "total": 105
                },
                "away": {
                    "quarter_1": 19,
                    "quarter_2": 37,
                    "quarter_3": 34,
                    "quarter_4": 23,
                    "over_time": null,
                    "total": 113
                }
            }
        },
        {
            "id": 373327,
            "date": "2024-04-07T22:00:00+00:00",
            "time": "22:00",
            "timestamp": 1712527200,
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
                    "id": 159,
                    "name": "Toronto Raptors",
                    "logo": "https://media.api-sports.io/basketball/teams/159.png"
                },
                "away": {
                    "id": 161,
                    "name": "Washington Wizards",
                    "logo": "https://media.api-sports.io/basketball/teams/161.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 42,
                    "quarter_2": 21,
                    "quarter_3": 36,
                    "quarter_4": 31,
                    "over_time": null,
                    "total": 130
                },
                "away": {
                    "quarter_1": 17,
                    "quarter_2": 33,
                    "quarter_3": 37,
                    "quarter_4": 35,
                    "over_time": null,
                    "total": 122
                }
            }
        },
        {
            "id": 389840,
            "date": "2024-04-07T22:00:00+00:00",
            "time": "22:00",
            "timestamp": 1712527200,
            "timezone": "UTC",
            "stage": null,
            "week": null,
            "status": {
                "long": "After Over Time",
                "short": "AOT",
                "timer": null
            },
            "league": {
                "id": 76,
                "name": "BSN",
                "type": "League",
                "season": 2024,
                "logo": "https://media.api-sports.io/basketball/leagues/76.png"
            },
            "country": {
                "id": 36,
                "name": "Puerto Rico",
                "code": "PR",
                "flag": "https://media.api-sports.io/flags/pr.svg"
            },
            "teams": {
                "home": {
                    "id": 954,
                    "name": "Indios de Mayaguez",
                    "logo": "https://media.api-sports.io/basketball/teams/954.png"
                },
                "away": {
                    "id": 957,
                    "name": "San German",
                    "logo": "https://media.api-sports.io/basketball/teams/957.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 25,
                    "quarter_2": 19,
                    "quarter_3": 19,
                    "quarter_4": 13,
                    "over_time": 16,
                    "total": 92
                },
                "away": {
                    "quarter_1": 26,
                    "quarter_2": 13,
                    "quarter_3": 16,
                    "quarter_4": 21,
                    "over_time": 9,
                    "total": 85
                }
            }
        },
        {
            "id": 373328,
            "date": "2024-04-07T23:00:00+00:00",
            "time": "23:00",
            "timestamp": 1712530800,
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
                    "id": 148,
                    "name": "Milwaukee Bucks",
                    "logo": "https://media.api-sports.io/basketball/teams/148.png"
                },
                "away": {
                    "id": 151,
                    "name": "New York Knicks",
                    "logo": "https://media.api-sports.io/basketball/teams/151.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 31,
                    "quarter_2": 30,
                    "quarter_3": 24,
                    "quarter_4": 24,
                    "over_time": null,
                    "total": 109
                },
                "away": {
                    "quarter_1": 25,
                    "quarter_2": 25,
                    "quarter_3": 39,
                    "quarter_4": 33,
                    "over_time": null,
                    "total": 122
                }
            }
        },
        {
            "id": 373329,
            "date": "2024-04-07T23:00:00+00:00",
            "time": "23:00",
            "timestamp": 1712530800,
            "timezone": "UTC",
            "stage": null,
            "week": null,
            "status": {
                "long": "After Over Time",
                "short": "AOT",
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
                    "id": 158,
                    "name": "San Antonio Spurs",
                    "logo": "https://media.api-sports.io/basketball/teams/158.png"
                },
                "away": {
                    "id": 154,
                    "name": "Philadelphia 76ers",
                    "logo": "https://media.api-sports.io/basketball/teams/154.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 24,
                    "quarter_2": 40,
                    "quarter_3": 16,
                    "quarter_4": 31,
                    "over_time": 15,
                    "total": 126
                },
                "away": {
                    "quarter_1": 31,
                    "quarter_2": 23,
                    "quarter_3": 19,
                    "quarter_4": 38,
                    "over_time": 22,
                    "total": 133
                }
            }
        },
        {
            "id": 375260,
            "date": "2024-04-07T23:00:00+00:00",
            "time": "23:00",
            "timestamp": 1712530800,
            "timezone": "UTC",
            "stage": null,
            "week": null,
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 18,
                "name": "Liga A",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/18.png"
            },
            "country": {
                "id": 6,
                "name": "Argentina",
                "code": "AR",
                "flag": "https://media.api-sports.io/flags/ar.svg"
            },
            "teams": {
                "home": {
                    "id": 3114,
                    "name": "Riachuelo",
                    "logo": "https://media.api-sports.io/basketball/teams/3114.png"
                },
                "away": {
                    "id": 282,
                    "name": "Boca Juniors",
                    "logo": "https://media.api-sports.io/basketball/teams/282.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 29,
                    "quarter_2": 16,
                    "quarter_3": 23,
                    "quarter_4": 14,
                    "over_time": null,
                    "total": 82
                },
                "away": {
                    "quarter_1": 18,
                    "quarter_2": 21,
                    "quarter_3": 18,
                    "quarter_4": 20,
                    "over_time": null,
                    "total": 77
                }
            }
        },
        {
            "id": 388037,
            "date": "2024-04-07T23:00:00+00:00",
            "time": "23:00",
            "timestamp": 1712530800,
            "timezone": "UTC",
            "stage": null,
            "week": null,
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 114,
                "name": "LNB",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/114.png"
            },
            "country": {
                "id": 53,
                "name": "Chile",
                "code": "CL",
                "flag": "https://media.api-sports.io/flags/cl.svg"
            },
            "teams": {
                "home": {
                    "id": 3585,
                    "name": "Sportiva Italiana",
                    "logo": "https://media.api-sports.io/basketball/teams/3585.png"
                },
                "away": {
                    "id": 4922,
                    "name": "Liceo Pablo Neruda",
                    "logo": "https://media.api-sports.io/basketball/teams/4922.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 21,
                    "quarter_2": 30,
                    "quarter_3": 37,
                    "quarter_4": 25,
                    "over_time": null,
                    "total": 113
                },
                "away": {
                    "quarter_1": 21,
                    "quarter_2": 15,
                    "quarter_3": 24,
                    "quarter_4": 8,
                    "over_time": null,
                    "total": 68
                }
            }
        },
        {
            "id": 390929,
            "date": "2024-04-07T23:00:00+00:00",
            "time": "23:00",
            "timestamp": 1712530800,
            "timezone": "UTC",
            "stage": null,
            "week": null,
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 224,
                "name": "LNB 2",
                "type": "League",
                "season": "2024-2025",
                "logo": "https://media.api-sports.io/basketball/leagues/224.png"
            },
            "country": {
                "id": 53,
                "name": "Chile",
                "code": "CL",
                "flag": "https://media.api-sports.io/flags/cl.svg"
            },
            "teams": {
                "home": {
                    "id": 3587,
                    "name": "Truenos De Talca",
                    "logo": "https://media.api-sports.io/basketball/teams/3587.png"
                },
                "away": {
                    "id": 4924,
                    "name": "Municipal Chillan",
                    "logo": "https://media.api-sports.io/basketball/teams/4924.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 23,
                    "quarter_2": 19,
                    "quarter_3": 17,
                    "quarter_4": 17,
                    "over_time": null,
                    "total": 76
                },
                "away": {
                    "quarter_1": 10,
                    "quarter_2": 16,
                    "quarter_3": 15,
                    "quarter_4": 17,
                    "over_time": null,
                    "total": 58
                }
            }
        },
        {
            "id": 395281,
            "date": "2024-04-07T23:00:00+00:00",
            "time": "23:00",
            "timestamp": 1712530800,
            "timezone": "UTC",
            "stage": null,
            "week": "LMBPF Women - Quarter-finals",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 252,
                "name": "LMBPF Women",
                "type": "League",
                "season": 2024,
                "logo": "https://media.api-sports.io/basketball/leagues/252.png"
            },
            "country": {
                "id": 28,
                "name": "Mexico",
                "code": "MX",
                "flag": "https://media.api-sports.io/flags/mx.svg"
            },
            "teams": {
                "home": {
                    "id": 6315,
                    "name": "Blueskas W",
                    "logo": "https://media.api-sports.io/basketball/teams/6315.png"
                },
                "away": {
                    "id": 6319,
                    "name": "Libelulas W",
                    "logo": "https://media.api-sports.io/basketball/teams/6319.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 10,
                    "quarter_2": 12,
                    "quarter_3": 6,
                    "quarter_4": 14,
                    "over_time": null,
                    "total": 42
                },
                "away": {
                    "quarter_1": 14,
                    "quarter_2": 19,
                    "quarter_3": 29,
                    "quarter_4": 20,
                    "over_time": null,
                    "total": 82
                }
            }
        },
        {
            "id": 395282,
            "date": "2024-04-07T23:00:00+00:00",
            "time": "23:00",
            "timestamp": 1712530800,
            "timezone": "UTC",
            "stage": null,
            "week": "LMBPF Women - Quarter-finals",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 252,
                "name": "LMBPF Women",
                "type": "League",
                "season": 2024,
                "logo": "https://media.api-sports.io/basketball/leagues/252.png"
            },
            "country": {
                "id": 28,
                "name": "Mexico",
                "code": "MX",
                "flag": "https://media.api-sports.io/flags/mx.svg"
            },
            "teams": {
                "home": {
                    "id": 6316,
                    "name": "Cinnamon W",
                    "logo": "https://media.api-sports.io/basketball/teams/6316.png"
                },
                "away": {
                    "id": 6320,
                    "name": "Mineras W",
                    "logo": "https://media.api-sports.io/basketball/teams/6320.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 20,
                    "quarter_2": 24,
                    "quarter_3": 26,
                    "quarter_4": 9,
                    "over_time": null,
                    "total": 79
                },
                "away": {
                    "quarter_1": 19,
                    "quarter_2": 21,
                    "quarter_3": 13,
                    "quarter_4": 16,
                    "over_time": null,
                    "total": 69
                }
            }
        },
        {
            "id": 395283,
            "date": "2024-04-07T23:00:00+00:00",
            "time": "23:00",
            "timestamp": 1712530800,
            "timezone": "UTC",
            "stage": null,
            "week": "LMBPF Women - Quarter-finals",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 252,
                "name": "LMBPF Women",
                "type": "League",
                "season": 2024,
                "logo": "https://media.api-sports.io/basketball/leagues/252.png"
            },
            "country": {
                "id": 28,
                "name": "Mexico",
                "code": "MX",
                "flag": "https://media.api-sports.io/flags/mx.svg"
            },
            "teams": {
                "home": {
                    "id": 3862,
                    "name": "Quetzales W",
                    "logo": "https://media.api-sports.io/basketball/teams/3862.png"
                },
                "away": {
                    "id": 6318,
                    "name": "Las Avispas W",
                    "logo": "https://media.api-sports.io/basketball/teams/6318.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 26,
                    "quarter_2": 21,
                    "quarter_3": 25,
                    "quarter_4": 24,
                    "over_time": null,
                    "total": 96
                },
                "away": {
                    "quarter_1": 12,
                    "quarter_2": 7,
                    "quarter_3": 18,
                    "quarter_4": 26,
                    "over_time": null,
                    "total": 63
                }
            }
        },
        {
            "id": 395320,
            "date": "2024-04-07T23:00:00+00:00",
            "time": "23:00",
            "timestamp": 1712530800,
            "timezone": "UTC",
            "stage": null,
            "week": "NBA G League - Semi-finals",
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 20,
                "name": "NBA - G League",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/20.png"
            },
            "country": {
                "id": 5,
                "name": "USA",
                "code": "US",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "teams": {
                "home": {
                    "id": 3170,
                    "name": "Maine Celtics",
                    "logo": "https://media.api-sports.io/basketball/teams/3170.png"
                },
                "away": {
                    "id": 262,
                    "name": "Long Island Nets",
                    "logo": "https://media.api-sports.io/basketball/teams/262.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 23,
                    "quarter_2": 25,
                    "quarter_3": 13,
                    "quarter_4": 38,
                    "over_time": null,
                    "total": 99
                },
                "away": {
                    "quarter_1": 19,
                    "quarter_2": 24,
                    "quarter_3": 17,
                    "quarter_4": 17,
                    "over_time": null,
                    "total": 77
                }
            }
        },
        {
            "id": 390933,
            "date": "2024-04-07T23:15:00+00:00",
            "time": "23:15",
            "timestamp": 1712531700,
            "timezone": "UTC",
            "stage": null,
            "week": null,
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 224,
                "name": "LNB 2",
                "type": "League",
                "season": "2024-2025",
                "logo": "https://media.api-sports.io/basketball/leagues/224.png"
            },
            "country": {
                "id": 53,
                "name": "Chile",
                "code": "CL",
                "flag": "https://media.api-sports.io/flags/cl.svg"
            },
            "teams": {
                "home": {
                    "id": 3586,
                    "name": "Stadio Italiano",
                    "logo": "https://media.api-sports.io/basketball/teams/3586.png"
                },
                "away": {
                    "id": 6336,
                    "name": "Quilpue Basquetbol",
                    "logo": "https://media.api-sports.io/basketball/teams/6336.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 16,
                    "quarter_2": 12,
                    "quarter_3": 10,
                    "quarter_4": 18,
                    "over_time": null,
                    "total": 56
                },
                "away": {
                    "quarter_1": 16,
                    "quarter_2": 17,
                    "quarter_3": 15,
                    "quarter_4": 22,
                    "over_time": null,
                    "total": 70
                }
            }
        },
        {
            "id": 373330,
            "date": "2024-04-07T23:30:00+00:00",
            "time": "23:30",
            "timestamp": 1712532600,
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
                    "id": 134,
                    "name": "Brooklyn Nets",
                    "logo": "https://media.api-sports.io/basketball/teams/134.png"
                },
                "away": {
                    "id": 157,
                    "name": "Sacramento Kings",
                    "logo": "https://media.api-sports.io/basketball/teams/157.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 19,
                    "quarter_2": 21,
                    "quarter_3": 24,
                    "quarter_4": 13,
                    "over_time": null,
                    "total": 77
                },
                "away": {
                    "quarter_1": 29,
                    "quarter_2": 36,
                    "quarter_3": 13,
                    "quarter_4": 29,
                    "over_time": null,
                    "total": 107
                }
            }
        },
        {
            "id": 388207,
            "date": "2024-04-07T23:30:00+00:00",
            "time": "23:30",
            "timestamp": 1712532600,
            "timezone": "UTC",
            "stage": null,
            "week": null,
            "status": {
                "long": "Game Finished",
                "short": "FT",
                "timer": null
            },
            "league": {
                "id": 114,
                "name": "LNB",
                "type": "League",
                "season": "2023-2024",
                "logo": "https://media.api-sports.io/basketball/leagues/114.png"
            },
            "country": {
                "id": 53,
                "name": "Chile",
                "code": "CL",
                "flag": "https://media.api-sports.io/flags/cl.svg"
            },
            "teams": {
                "home": {
                    "id": 1382,
                    "name": "Leones Quilpue",
                    "logo": "https://media.api-sports.io/basketball/teams/1382.png"
                },
                "away": {
                    "id": 1447,
                    "name": "Espanol de Talca",
                    "logo": "https://media.api-sports.io/basketball/teams/1447.png"
                }
            },
            "scores": {
                "home": {
                    "quarter_1": 19,
                    "quarter_2": 26,
                    "quarter_3": 14,
                    "quarter_4": 18,
                    "over_time": null,
                    "total": 77
                },
                "away": {
                    "quarter_1": 19,
                    "quarter_2": 24,
                    "quarter_3": 16,
                    "quarter_4": 26,
                    "over_time": null,
                    "total": 85
                }
            }
        }
    ]

    return (
        <GamesContext.Provider value={{ games }}>
            {children}
        </GamesContext.Provider>
    );
};