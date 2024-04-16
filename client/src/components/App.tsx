import CalendarDiv from "./CalendarDiv";
import GamesContainer from "./mainContainerGamesComponents/GamesContainer";
import AllCountriesSidebar from "./countriesSidebarComponents/AllCountriesSidebar";

import SelectedGame from "./selectedGameComponents/SelectedGame";
import { useState } from "react";
import { GameType } from "../types/GameType";
import { StandingsType } from "../types/StandingsType";
import Standings from "./standingsComponents/Standings";

function App() {

  const [selectedGame, setSelectedGame] = useState<GameType | null>(null)

  const [standings, setStandings] = useState<StandingsType[] | null>([
    {
      "position": 1,
      "stage": "NBA - Regular Season",
      "group": {
        "name": "Western Conference",
        "points": 0
      },
      "team": {
        "id": 152,
        "name": "Oklahoma City Thunder",
        "logo": "https://media.api-sports.io/basketball/teams/152.png"
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
      "games": {
        "played": 82,
        "win": {
          "total": 57,
          "percentage": "0.695"
        },
        "lose": {
          "total": 25,
          "percentage": "0.305"
        }
      },
      "points": {
        "for": 9847,
        "against": 9239
      },
      "form": null,
      "description": "Promotion - NBA (Play Offs: 1/8-finals)"
    },
    {
      "position": 2,
      "stage": "NBA - Regular Season",
      "group": {
        "name": "Western Conference",
        "points": 0
      },
      "team": {
        "id": 139,
        "name": "Denver Nuggets",
        "logo": "https://media.api-sports.io/basketball/teams/139.png"
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
      "games": {
        "played": 82,
        "win": {
          "total": 57,
          "percentage": "0.695"
        },
        "lose": {
          "total": 25,
          "percentage": "0.305"
        }
      },
      "points": {
        "for": 9418,
        "against": 8987
      },
      "form": null,
      "description": "Promotion - NBA (Play Offs: 1/8-finals)"
    },
    {
      "position": 3,
      "stage": "NBA - Regular Season",
      "group": {
        "name": "Western Conference",
        "points": 0
      },
      "team": {
        "id": 149,
        "name": "Minnesota Timberwolves",
        "logo": "https://media.api-sports.io/basketball/teams/149.png"
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
      "games": {
        "played": 82,
        "win": {
          "total": 56,
          "percentage": "0.683"
        },
        "lose": {
          "total": 26,
          "percentage": "0.317"
        }
      },
      "points": {
        "for": 9264,
        "against": 8735
      },
      "form": null,
      "description": "Promotion - NBA (Play Offs: 1/8-finals)"
    },
    {
      "position": 4,
      "stage": "NBA - Regular Season",
      "group": {
        "name": "Western Conference",
        "points": 0
      },
      "team": {
        "id": 144,
        "name": "Los Angeles Clippers",
        "logo": "https://media.api-sports.io/basketball/teams/144.png"
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
      "games": {
        "played": 82,
        "win": {
          "total": 51,
          "percentage": "0.622"
        },
        "lose": {
          "total": 31,
          "percentage": "0.378"
        }
      },
      "points": {
        "for": 9481,
        "against": 9212
      },
      "form": null,
      "description": "Promotion - NBA (Play Offs: 1/8-finals)"
    },
    {
      "position": 5,
      "stage": "NBA - Regular Season",
      "group": {
        "name": "Western Conference",
        "points": 0
      },
      "team": {
        "id": 138,
        "name": "Dallas Mavericks",
        "logo": "https://media.api-sports.io/basketball/teams/138.png"
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
      "games": {
        "played": 82,
        "win": {
          "total": 50,
          "percentage": "0.610"
        },
        "lose": {
          "total": 32,
          "percentage": "0.390"
        }
      },
      "points": {
        "for": 9664,
        "against": 9483
      },
      "form": null,
      "description": "Promotion - NBA (Play Offs: 1/8-finals)"
    },
    {
      "position": 6,
      "stage": "NBA - Regular Season",
      "group": {
        "name": "Western Conference",
        "points": 0
      },
      "team": {
        "id": 155,
        "name": "Phoenix Suns",
        "logo": "https://media.api-sports.io/basketball/teams/155.png"
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
      "games": {
        "played": 82,
        "win": {
          "total": 49,
          "percentage": "0.598"
        },
        "lose": {
          "total": 33,
          "percentage": "0.402"
        }
      },
      "points": {
        "for": 9532,
        "against": 9281
      },
      "form": null,
      "description": "Promotion - NBA (Play Offs: 1/8-finals)"
    },
    {
      "position": 7,
      "stage": "NBA - Regular Season",
      "group": {
        "name": "Western Conference",
        "points": 0
      },
      "team": {
        "id": 150,
        "name": "New Orleans Pelicans",
        "logo": "https://media.api-sports.io/basketball/teams/150.png"
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
      "games": {
        "played": 82,
        "win": {
          "total": 49,
          "percentage": "0.598"
        },
        "lose": {
          "total": 33,
          "percentage": "0.402"
        }
      },
      "points": {
        "for": 9436,
        "against": 9074
      },
      "form": null,
      "description": "Promotion - NBA (Promotion - Play Offs: )"
    },
    {
      "position": 8,
      "stage": "NBA - Regular Season",
      "group": {
        "name": "Western Conference",
        "points": 0
      },
      "team": {
        "id": 145,
        "name": "Los Angeles Lakers",
        "logo": "https://media.api-sports.io/basketball/teams/145.png"
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
      "games": {
        "played": 82,
        "win": {
          "total": 47,
          "percentage": "0.573"
        },
        "lose": {
          "total": 35,
          "percentage": "0.427"
        }
      },
      "points": {
        "for": 9679,
        "against": 9630
      },
      "form": null,
      "description": "Promotion - NBA (Promotion - Play Offs: )"
    },
    {
      "position": 9,
      "stage": "NBA - Regular Season",
      "group": {
        "name": "Western Conference",
        "points": 0
      },
      "team": {
        "id": 157,
        "name": "Sacramento Kings",
        "logo": "https://media.api-sports.io/basketball/teams/157.png"
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
      "games": {
        "played": 82,
        "win": {
          "total": 46,
          "percentage": "0.561"
        },
        "lose": {
          "total": 36,
          "percentage": "0.439"
        }
      },
      "points": {
        "for": 9558,
        "against": 9415
      },
      "form": null,
      "description": "Promotion - NBA (Promotion - Play Offs: )"
    },
    {
      "position": 10,
      "stage": "NBA - Regular Season",
      "group": {
        "name": "Western Conference",
        "points": 0
      },
      "team": {
        "id": 141,
        "name": "Golden State Warriors",
        "logo": "https://media.api-sports.io/basketball/teams/141.png"
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
      "games": {
        "played": 82,
        "win": {
          "total": 46,
          "percentage": "0.561"
        },
        "lose": {
          "total": 36,
          "percentage": "0.439"
        }
      },
      "points": {
        "for": 9657,
        "against": 9443
      },
      "form": null,
      "description": "Promotion - NBA (Promotion - Play Offs: )"
    },
    {
      "position": 11,
      "stage": "NBA - Regular Season",
      "group": {
        "name": "Western Conference",
        "points": 0
      },
      "team": {
        "id": 142,
        "name": "Houston Rockets",
        "logo": "https://media.api-sports.io/basketball/teams/142.png"
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
      "games": {
        "played": 82,
        "win": {
          "total": 41,
          "percentage": "0.500"
        },
        "lose": {
          "total": 41,
          "percentage": "0.500"
        }
      },
      "points": {
        "for": 9375,
        "against": 9283
      },
      "form": null,
      "description": null
    },
    {
      "position": 12,
      "stage": "NBA - Regular Season",
      "group": {
        "name": "Western Conference",
        "points": 0
      },
      "team": {
        "id": 160,
        "name": "Utah Jazz",
        "logo": "https://media.api-sports.io/basketball/teams/160.png"
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
      "games": {
        "played": 82,
        "win": {
          "total": 31,
          "percentage": "0.378"
        },
        "lose": {
          "total": 51,
          "percentage": "0.622"
        }
      },
      "points": {
        "for": 9484,
        "against": 9885
      },
      "form": null,
      "description": null
    },
    {
      "position": 13,
      "stage": "NBA - Regular Season",
      "group": {
        "name": "Western Conference",
        "points": 0
      },
      "team": {
        "id": 146,
        "name": "Memphis Grizzlies",
        "logo": "https://media.api-sports.io/basketball/teams/146.png"
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
      "games": {
        "played": 82,
        "win": {
          "total": 27,
          "percentage": "0.329"
        },
        "lose": {
          "total": 55,
          "percentage": "0.671"
        }
      },
      "points": {
        "for": 8677,
        "against": 9251
      },
      "form": null,
      "description": null
    },
    {
      "position": 14,
      "stage": "NBA - Regular Season",
      "group": {
        "name": "Western Conference",
        "points": 0
      },
      "team": {
        "id": 158,
        "name": "San Antonio Spurs",
        "logo": "https://media.api-sports.io/basketball/teams/158.png"
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
      "games": {
        "played": 82,
        "win": {
          "total": 22,
          "percentage": "0.268"
        },
        "lose": {
          "total": 60,
          "percentage": "0.732"
        }
      },
      "points": {
        "for": 9192,
        "against": 9724
      },
      "form": null,
      "description": null
    },
    {
      "position": 15,
      "stage": "NBA - Regular Season",
      "group": {
        "name": "Western Conference",
        "points": 0
      },
      "team": {
        "id": 156,
        "name": "Portland Trail Blazers",
        "logo": "https://media.api-sports.io/basketball/teams/156.png"
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
      "games": {
        "played": 82,
        "win": {
          "total": 21,
          "percentage": "0.256"
        },
        "lose": {
          "total": 61,
          "percentage": "0.744"
        }
      },
      "points": {
        "for": 8722,
        "against": 9462
      },
      "form": null,
      "description": null
    },
    {
      "position": 1,
      "stage": "NBA - Regular Season",
      "group": {
        "name": "Eastern Conference",
        "points": 0
      },
      "team": {
        "id": 133,
        "name": "Boston Celtics",
        "logo": "https://media.api-sports.io/basketball/teams/133.png"
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
      "games": {
        "played": 82,
        "win": {
          "total": 64,
          "percentage": "0.780"
        },
        "lose": {
          "total": 18,
          "percentage": "0.220"
        }
      },
      "points": {
        "for": 9887,
        "against": 8957
      },
      "form": null,
      "description": "Promotion - NBA (Play Offs: 1/8-finals)"
    },
    {
      "position": 2,
      "stage": "NBA - Regular Season",
      "group": {
        "name": "Eastern Conference",
        "points": 0
      },
      "team": {
        "id": 151,
        "name": "New York Knicks",
        "logo": "https://media.api-sports.io/basketball/teams/151.png"
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
      "games": {
        "played": 82,
        "win": {
          "total": 50,
          "percentage": "0.610"
        },
        "lose": {
          "total": 32,
          "percentage": "0.390"
        }
      },
      "points": {
        "for": 9249,
        "against": 8873
      },
      "form": null,
      "description": "Promotion - NBA (Play Offs: 1/8-finals)"
    },
    {
      "position": 3,
      "stage": "NBA - Regular Season",
      "group": {
        "name": "Eastern Conference",
        "points": 0
      },
      "team": {
        "id": 148,
        "name": "Milwaukee Bucks",
        "logo": "https://media.api-sports.io/basketball/teams/148.png"
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
      "games": {
        "played": 82,
        "win": {
          "total": 49,
          "percentage": "0.598"
        },
        "lose": {
          "total": 33,
          "percentage": "0.402"
        }
      },
      "points": {
        "for": 9756,
        "against": 9541
      },
      "form": null,
      "description": "Promotion - NBA (Play Offs: 1/8-finals)"
    },
    {
      "position": 4,
      "stage": "NBA - Regular Season",
      "group": {
        "name": "Eastern Conference",
        "points": 0
      },
      "team": {
        "id": 137,
        "name": "Cleveland Cavaliers",
        "logo": "https://media.api-sports.io/basketball/teams/137.png"
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
      "games": {
        "played": 82,
        "win": {
          "total": 48,
          "percentage": "0.585"
        },
        "lose": {
          "total": 34,
          "percentage": "0.415"
        }
      },
      "points": {
        "for": 9236,
        "against": 9038
      },
      "form": null,
      "description": "Promotion - NBA (Play Offs: 1/8-finals)"
    },
    {
      "position": 5,
      "stage": "NBA - Regular Season",
      "group": {
        "name": "Eastern Conference",
        "points": 0
      },
      "team": {
        "id": 153,
        "name": "Orlando Magic",
        "logo": "https://media.api-sports.io/basketball/teams/153.png"
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
      "games": {
        "played": 82,
        "win": {
          "total": 47,
          "percentage": "0.573"
        },
        "lose": {
          "total": 35,
          "percentage": "0.427"
        }
      },
      "points": {
        "for": 9058,
        "against": 8892
      },
      "form": null,
      "description": "Promotion - NBA (Play Offs: 1/8-finals)"
    },
    {
      "position": 6,
      "stage": "NBA - Regular Season",
      "group": {
        "name": "Eastern Conference",
        "points": 0
      },
      "team": {
        "id": 143,
        "name": "Indiana Pacers",
        "logo": "https://media.api-sports.io/basketball/teams/143.png"
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
      "games": {
        "played": 82,
        "win": {
          "total": 47,
          "percentage": "0.573"
        },
        "lose": {
          "total": 35,
          "percentage": "0.427"
        }
      },
      "points": {
        "for": 10110,
        "against": 9860
      },
      "form": null,
      "description": "Promotion - NBA (Play Offs: 1/8-finals)"
    },
    {
      "position": 7,
      "stage": "NBA - Regular Season",
      "group": {
        "name": "Eastern Conference",
        "points": 0
      },
      "team": {
        "id": 154,
        "name": "Philadelphia 76ers",
        "logo": "https://media.api-sports.io/basketball/teams/154.png"
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
      "games": {
        "played": 82,
        "win": {
          "total": 47,
          "percentage": "0.573"
        },
        "lose": {
          "total": 35,
          "percentage": "0.427"
        }
      },
      "points": {
        "for": 9397,
        "against": 9147
      },
      "form": null,
      "description": "Promotion - NBA (Promotion - Play Offs: )"
    },
    {
      "position": 8,
      "stage": "NBA - Regular Season",
      "group": {
        "name": "Eastern Conference",
        "points": 0
      },
      "team": {
        "id": 147,
        "name": "Miami Heat",
        "logo": "https://media.api-sports.io/basketball/teams/147.png"
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
      "games": {
        "played": 82,
        "win": {
          "total": 46,
          "percentage": "0.561"
        },
        "lose": {
          "total": 36,
          "percentage": "0.439"
        }
      },
      "points": {
        "for": 9032,
        "against": 8888
      },
      "form": null,
      "description": "Promotion - NBA (Promotion - Play Offs: )"
    },
    {
      "position": 9,
      "stage": "NBA - Regular Season",
      "group": {
        "name": "Eastern Conference",
        "points": 0
      },
      "team": {
        "id": 136,
        "name": "Chicago Bulls",
        "logo": "https://media.api-sports.io/basketball/teams/136.png"
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
      "games": {
        "played": 82,
        "win": {
          "total": 39,
          "percentage": "0.476"
        },
        "lose": {
          "total": 43,
          "percentage": "0.524"
        }
      },
      "points": {
        "for": 9206,
        "against": 9324
      },
      "form": null,
      "description": "Promotion - NBA (Promotion - Play Offs: )"
    },
    {
      "position": 10,
      "stage": "NBA - Regular Season",
      "group": {
        "name": "Eastern Conference",
        "points": 0
      },
      "team": {
        "id": 132,
        "name": "Atlanta Hawks",
        "logo": "https://media.api-sports.io/basketball/teams/132.png"
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
      "games": {
        "played": 82,
        "win": {
          "total": 36,
          "percentage": "0.439"
        },
        "lose": {
          "total": 46,
          "percentage": "0.561"
        }
      },
      "points": {
        "for": 9703,
        "against": 9882
      },
      "form": null,
      "description": "Promotion - NBA (Promotion - Play Offs: )"
    },
    {
      "position": 11,
      "stage": "NBA - Regular Season",
      "group": {
        "name": "Eastern Conference",
        "points": 0
      },
      "team": {
        "id": 134,
        "name": "Brooklyn Nets",
        "logo": "https://media.api-sports.io/basketball/teams/134.png"
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
      "games": {
        "played": 82,
        "win": {
          "total": 32,
          "percentage": "0.390"
        },
        "lose": {
          "total": 50,
          "percentage": "0.610"
        }
      },
      "points": {
        "for": 9050,
        "against": 9287
      },
      "form": null,
      "description": null
    },
    {
      "position": 12,
      "stage": "NBA - Regular Season",
      "group": {
        "name": "Eastern Conference",
        "points": 0
      },
      "team": {
        "id": 159,
        "name": "Toronto Raptors",
        "logo": "https://media.api-sports.io/basketball/teams/159.png"
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
      "games": {
        "played": 82,
        "win": {
          "total": 25,
          "percentage": "0.305"
        },
        "lose": {
          "total": 57,
          "percentage": "0.695"
        }
      },
      "points": {
        "for": 9213,
        "against": 9741
      },
      "form": null,
      "description": null
    },
    {
      "position": 13,
      "stage": "NBA - Regular Season",
      "group": {
        "name": "Eastern Conference",
        "points": 0
      },
      "team": {
        "id": 135,
        "name": "Charlotte Hornets",
        "logo": "https://media.api-sports.io/basketball/teams/135.png"
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
      "games": {
        "played": 82,
        "win": {
          "total": 21,
          "percentage": "0.256"
        },
        "lose": {
          "total": 61,
          "percentage": "0.744"
        }
      },
      "points": {
        "for": 8740,
        "against": 9580
      },
      "form": null,
      "description": null
    },
    {
      "position": 14,
      "stage": "NBA - Regular Season",
      "group": {
        "name": "Eastern Conference",
        "points": 0
      },
      "team": {
        "id": 161,
        "name": "Washington Wizards",
        "logo": "https://media.api-sports.io/basketball/teams/161.png"
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
      "games": {
        "played": 82,
        "win": {
          "total": 15,
          "percentage": "0.183"
        },
        "lose": {
          "total": 67,
          "percentage": "0.817"
        }
      },
      "points": {
        "for": 9327,
        "against": 10089
      },
      "form": null,
      "description": null
    },
    {
      "position": 15,
      "stage": "NBA - Regular Season",
      "group": {
        "name": "Eastern Conference",
        "points": 0
      },
      "team": {
        "id": 140,
        "name": "Detroit Pistons",
        "logo": "https://media.api-sports.io/basketball/teams/140.png"
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
      "games": {
        "played": 82,
        "win": {
          "total": 14,
          "percentage": "0.171"
        },
        "lose": {
          "total": 68,
          "percentage": "0.829"
        }
      },
      "points": {
        "for": 9010,
        "against": 9757
      },
      "form": null,
      "description": null
    },
    {
      "position": 1,
      "stage": "NBA - Regular Season",
      "group": {
        "name": "Atlantic",
        "points": 0
      },
      "team": {
        "id": 133,
        "name": "Boston Celtics",
        "logo": "https://media.api-sports.io/basketball/teams/133.png"
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
      "games": {
        "played": 82,
        "win": {
          "total": 64,
          "percentage": "0.780"
        },
        "lose": {
          "total": 18,
          "percentage": "0.220"
        }
      },
      "points": {
        "for": 9887,
        "against": 8957
      },
      "form": null,
      "description": "Promotion - NBA (Play Offs: 1/8-finals)"
    },
    {
      "position": 2,
      "stage": "NBA - Regular Season",
      "group": {
        "name": "Atlantic",
        "points": 0
      },
      "team": {
        "id": 151,
        "name": "New York Knicks",
        "logo": "https://media.api-sports.io/basketball/teams/151.png"
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
      "games": {
        "played": 82,
        "win": {
          "total": 50,
          "percentage": "0.610"
        },
        "lose": {
          "total": 32,
          "percentage": "0.390"
        }
      },
      "points": {
        "for": 9249,
        "against": 8873
      },
      "form": null,
      "description": "Promotion - NBA (Play Offs: 1/8-finals)"
    },
    {
      "position": 3,
      "stage": "NBA - Regular Season",
      "group": {
        "name": "Atlantic",
        "points": 0
      },
      "team": {
        "id": 154,
        "name": "Philadelphia 76ers",
        "logo": "https://media.api-sports.io/basketball/teams/154.png"
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
      "games": {
        "played": 82,
        "win": {
          "total": 47,
          "percentage": "0.573"
        },
        "lose": {
          "total": 35,
          "percentage": "0.427"
        }
      },
      "points": {
        "for": 9397,
        "against": 9147
      },
      "form": null,
      "description": "Promotion - NBA (Promotion - Play Offs: )"
    },
    {
      "position": 4,
      "stage": "NBA - Regular Season",
      "group": {
        "name": "Atlantic",
        "points": 0
      },
      "team": {
        "id": 134,
        "name": "Brooklyn Nets",
        "logo": "https://media.api-sports.io/basketball/teams/134.png"
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
      "games": {
        "played": 82,
        "win": {
          "total": 32,
          "percentage": "0.390"
        },
        "lose": {
          "total": 50,
          "percentage": "0.610"
        }
      },
      "points": {
        "for": 9050,
        "against": 9287
      },
      "form": null,
      "description": null
    },
    {
      "position": 5,
      "stage": "NBA - Regular Season",
      "group": {
        "name": "Atlantic",
        "points": 0
      },
      "team": {
        "id": 159,
        "name": "Toronto Raptors",
        "logo": "https://media.api-sports.io/basketball/teams/159.png"
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
      "games": {
        "played": 82,
        "win": {
          "total": 25,
          "percentage": "0.305"
        },
        "lose": {
          "total": 57,
          "percentage": "0.695"
        }
      },
      "points": {
        "for": 9213,
        "against": 9741
      },
      "form": null,
      "description": null
    },
    {
      "position": 1,
      "stage": "NBA - Regular Season",
      "group": {
        "name": "Southeast",
        "points": 0
      },
      "team": {
        "id": 153,
        "name": "Orlando Magic",
        "logo": "https://media.api-sports.io/basketball/teams/153.png"
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
      "games": {
        "played": 82,
        "win": {
          "total": 47,
          "percentage": "0.573"
        },
        "lose": {
          "total": 35,
          "percentage": "0.427"
        }
      },
      "points": {
        "for": 9058,
        "against": 8892
      },
      "form": null,
      "description": "Promotion - NBA (Play Offs: 1/8-finals)"
    },
    {
      "position": 2,
      "stage": "NBA - Regular Season",
      "group": {
        "name": "Southeast",
        "points": 0
      },
      "team": {
        "id": 147,
        "name": "Miami Heat",
        "logo": "https://media.api-sports.io/basketball/teams/147.png"
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
      "games": {
        "played": 82,
        "win": {
          "total": 46,
          "percentage": "0.561"
        },
        "lose": {
          "total": 36,
          "percentage": "0.439"
        }
      },
      "points": {
        "for": 9032,
        "against": 8888
      },
      "form": null,
      "description": "Promotion - NBA (Promotion - Play Offs: )"
    },
    {
      "position": 3,
      "stage": "NBA - Regular Season",
      "group": {
        "name": "Southeast",
        "points": 0
      },
      "team": {
        "id": 132,
        "name": "Atlanta Hawks",
        "logo": "https://media.api-sports.io/basketball/teams/132.png"
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
      "games": {
        "played": 82,
        "win": {
          "total": 36,
          "percentage": "0.439"
        },
        "lose": {
          "total": 46,
          "percentage": "0.561"
        }
      },
      "points": {
        "for": 9703,
        "against": 9882
      },
      "form": null,
      "description": "Promotion - NBA (Promotion - Play Offs: )"
    },
    {
      "position": 4,
      "stage": "NBA - Regular Season",
      "group": {
        "name": "Southeast",
        "points": 0
      },
      "team": {
        "id": 135,
        "name": "Charlotte Hornets",
        "logo": "https://media.api-sports.io/basketball/teams/135.png"
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
      "games": {
        "played": 82,
        "win": {
          "total": 21,
          "percentage": "0.256"
        },
        "lose": {
          "total": 61,
          "percentage": "0.744"
        }
      },
      "points": {
        "for": 8740,
        "against": 9580
      },
      "form": null,
      "description": null
    },
    {
      "position": 5,
      "stage": "NBA - Regular Season",
      "group": {
        "name": "Southeast",
        "points": 0
      },
      "team": {
        "id": 161,
        "name": "Washington Wizards",
        "logo": "https://media.api-sports.io/basketball/teams/161.png"
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
      "games": {
        "played": 82,
        "win": {
          "total": 15,
          "percentage": "0.183"
        },
        "lose": {
          "total": 67,
          "percentage": "0.817"
        }
      },
      "points": {
        "for": 9327,
        "against": 10089
      },
      "form": null,
      "description": null
    },
    {
      "position": 1,
      "stage": "NBA - Regular Season",
      "group": {
        "name": "Central",
        "points": 0
      },
      "team": {
        "id": 148,
        "name": "Milwaukee Bucks",
        "logo": "https://media.api-sports.io/basketball/teams/148.png"
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
      "games": {
        "played": 82,
        "win": {
          "total": 49,
          "percentage": "0.598"
        },
        "lose": {
          "total": 33,
          "percentage": "0.402"
        }
      },
      "points": {
        "for": 9756,
        "against": 9541
      },
      "form": null,
      "description": "Promotion - NBA (Play Offs: 1/8-finals)"
    },
    {
      "position": 2,
      "stage": "NBA - Regular Season",
      "group": {
        "name": "Central",
        "points": 0
      },
      "team": {
        "id": 137,
        "name": "Cleveland Cavaliers",
        "logo": "https://media.api-sports.io/basketball/teams/137.png"
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
      "games": {
        "played": 82,
        "win": {
          "total": 48,
          "percentage": "0.585"
        },
        "lose": {
          "total": 34,
          "percentage": "0.415"
        }
      },
      "points": {
        "for": 9236,
        "against": 9038
      },
      "form": null,
      "description": "Promotion - NBA (Play Offs: 1/8-finals)"
    },
    {
      "position": 3,
      "stage": "NBA - Regular Season",
      "group": {
        "name": "Central",
        "points": 0
      },
      "team": {
        "id": 143,
        "name": "Indiana Pacers",
        "logo": "https://media.api-sports.io/basketball/teams/143.png"
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
      "games": {
        "played": 82,
        "win": {
          "total": 47,
          "percentage": "0.573"
        },
        "lose": {
          "total": 35,
          "percentage": "0.427"
        }
      },
      "points": {
        "for": 10110,
        "against": 9860
      },
      "form": null,
      "description": "Promotion - NBA (Play Offs: 1/8-finals)"
    },
    {
      "position": 4,
      "stage": "NBA - Regular Season",
      "group": {
        "name": "Central",
        "points": 0
      },
      "team": {
        "id": 136,
        "name": "Chicago Bulls",
        "logo": "https://media.api-sports.io/basketball/teams/136.png"
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
      "games": {
        "played": 82,
        "win": {
          "total": 39,
          "percentage": "0.476"
        },
        "lose": {
          "total": 43,
          "percentage": "0.524"
        }
      },
      "points": {
        "for": 9206,
        "against": 9324
      },
      "form": null,
      "description": "Promotion - NBA (Promotion - Play Offs: )"
    },
    {
      "position": 5,
      "stage": "NBA - Regular Season",
      "group": {
        "name": "Central",
        "points": 0
      },
      "team": {
        "id": 140,
        "name": "Detroit Pistons",
        "logo": "https://media.api-sports.io/basketball/teams/140.png"
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
      "games": {
        "played": 82,
        "win": {
          "total": 14,
          "percentage": "0.171"
        },
        "lose": {
          "total": 68,
          "percentage": "0.829"
        }
      },
      "points": {
        "for": 9010,
        "against": 9757
      },
      "form": null,
      "description": null
    },
    {
      "position": 1,
      "stage": "NBA - Regular Season",
      "group": {
        "name": "Northwest",
        "points": 0
      },
      "team": {
        "id": 152,
        "name": "Oklahoma City Thunder",
        "logo": "https://media.api-sports.io/basketball/teams/152.png"
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
      "games": {
        "played": 82,
        "win": {
          "total": 57,
          "percentage": "0.695"
        },
        "lose": {
          "total": 25,
          "percentage": "0.305"
        }
      },
      "points": {
        "for": 9847,
        "against": 9239
      },
      "form": null,
      "description": "Promotion - NBA (Play Offs: 1/8-finals)"
    },
    {
      "position": 2,
      "stage": "NBA - Regular Season",
      "group": {
        "name": "Northwest",
        "points": 0
      },
      "team": {
        "id": 139,
        "name": "Denver Nuggets",
        "logo": "https://media.api-sports.io/basketball/teams/139.png"
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
      "games": {
        "played": 82,
        "win": {
          "total": 57,
          "percentage": "0.695"
        },
        "lose": {
          "total": 25,
          "percentage": "0.305"
        }
      },
      "points": {
        "for": 9418,
        "against": 8987
      },
      "form": null,
      "description": "Promotion - NBA (Play Offs: 1/8-finals)"
    },
    {
      "position": 3,
      "stage": "NBA - Regular Season",
      "group": {
        "name": "Northwest",
        "points": 0
      },
      "team": {
        "id": 149,
        "name": "Minnesota Timberwolves",
        "logo": "https://media.api-sports.io/basketball/teams/149.png"
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
      "games": {
        "played": 82,
        "win": {
          "total": 56,
          "percentage": "0.683"
        },
        "lose": {
          "total": 26,
          "percentage": "0.317"
        }
      },
      "points": {
        "for": 9264,
        "against": 8735
      },
      "form": null,
      "description": "Promotion - NBA (Play Offs: 1/8-finals)"
    },
    {
      "position": 4,
      "stage": "NBA - Regular Season",
      "group": {
        "name": "Northwest",
        "points": 0
      },
      "team": {
        "id": 160,
        "name": "Utah Jazz",
        "logo": "https://media.api-sports.io/basketball/teams/160.png"
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
      "games": {
        "played": 82,
        "win": {
          "total": 31,
          "percentage": "0.378"
        },
        "lose": {
          "total": 51,
          "percentage": "0.622"
        }
      },
      "points": {
        "for": 9484,
        "against": 9885
      },
      "form": null,
      "description": null
    },
    {
      "position": 5,
      "stage": "NBA - Regular Season",
      "group": {
        "name": "Northwest",
        "points": 0
      },
      "team": {
        "id": 156,
        "name": "Portland Trail Blazers",
        "logo": "https://media.api-sports.io/basketball/teams/156.png"
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
      "games": {
        "played": 82,
        "win": {
          "total": 21,
          "percentage": "0.256"
        },
        "lose": {
          "total": 61,
          "percentage": "0.744"
        }
      },
      "points": {
        "for": 8722,
        "against": 9462
      },
      "form": null,
      "description": null
    },
    {
      "position": 1,
      "stage": "NBA - Regular Season",
      "group": {
        "name": "Pacific",
        "points": 0
      },
      "team": {
        "id": 144,
        "name": "Los Angeles Clippers",
        "logo": "https://media.api-sports.io/basketball/teams/144.png"
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
      "games": {
        "played": 82,
        "win": {
          "total": 51,
          "percentage": "0.622"
        },
        "lose": {
          "total": 31,
          "percentage": "0.378"
        }
      },
      "points": {
        "for": 9481,
        "against": 9212
      },
      "form": null,
      "description": "Promotion - NBA (Play Offs: 1/8-finals)"
    },
    {
      "position": 2,
      "stage": "NBA - Regular Season",
      "group": {
        "name": "Pacific",
        "points": 0
      },
      "team": {
        "id": 155,
        "name": "Phoenix Suns",
        "logo": "https://media.api-sports.io/basketball/teams/155.png"
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
      "games": {
        "played": 82,
        "win": {
          "total": 49,
          "percentage": "0.598"
        },
        "lose": {
          "total": 33,
          "percentage": "0.402"
        }
      },
      "points": {
        "for": 9532,
        "against": 9281
      },
      "form": null,
      "description": "Promotion - NBA (Play Offs: 1/8-finals)"
    },
    {
      "position": 3,
      "stage": "NBA - Regular Season",
      "group": {
        "name": "Pacific",
        "points": 0
      },
      "team": {
        "id": 145,
        "name": "Los Angeles Lakers",
        "logo": "https://media.api-sports.io/basketball/teams/145.png"
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
      "games": {
        "played": 82,
        "win": {
          "total": 47,
          "percentage": "0.573"
        },
        "lose": {
          "total": 35,
          "percentage": "0.427"
        }
      },
      "points": {
        "for": 9679,
        "against": 9630
      },
      "form": null,
      "description": "Promotion - NBA (Promotion - Play Offs: )"
    },
    {
      "position": 4,
      "stage": "NBA - Regular Season",
      "group": {
        "name": "Pacific",
        "points": 0
      },
      "team": {
        "id": 157,
        "name": "Sacramento Kings",
        "logo": "https://media.api-sports.io/basketball/teams/157.png"
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
      "games": {
        "played": 82,
        "win": {
          "total": 46,
          "percentage": "0.561"
        },
        "lose": {
          "total": 36,
          "percentage": "0.439"
        }
      },
      "points": {
        "for": 9558,
        "against": 9415
      },
      "form": null,
      "description": "Promotion - NBA (Promotion - Play Offs: )"
    },
    {
      "position": 5,
      "stage": "NBA - Regular Season",
      "group": {
        "name": "Pacific",
        "points": 0
      },
      "team": {
        "id": 141,
        "name": "Golden State Warriors",
        "logo": "https://media.api-sports.io/basketball/teams/141.png"
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
      "games": {
        "played": 82,
        "win": {
          "total": 46,
          "percentage": "0.561"
        },
        "lose": {
          "total": 36,
          "percentage": "0.439"
        }
      },
      "points": {
        "for": 9657,
        "against": 9443
      },
      "form": null,
      "description": "Promotion - NBA (Promotion - Play Offs: )"
    },
    {
      "position": 1,
      "stage": "NBA - Regular Season",
      "group": {
        "name": "Southwest",
        "points": 0
      },
      "team": {
        "id": 138,
        "name": "Dallas Mavericks",
        "logo": "https://media.api-sports.io/basketball/teams/138.png"
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
      "games": {
        "played": 82,
        "win": {
          "total": 50,
          "percentage": "0.610"
        },
        "lose": {
          "total": 32,
          "percentage": "0.390"
        }
      },
      "points": {
        "for": 9664,
        "against": 9483
      },
      "form": null,
      "description": "Promotion - NBA (Play Offs: 1/8-finals)"
    },
    {
      "position": 2,
      "stage": "NBA - Regular Season",
      "group": {
        "name": "Southwest",
        "points": 0
      },
      "team": {
        "id": 150,
        "name": "New Orleans Pelicans",
        "logo": "https://media.api-sports.io/basketball/teams/150.png"
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
      "games": {
        "played": 82,
        "win": {
          "total": 49,
          "percentage": "0.598"
        },
        "lose": {
          "total": 33,
          "percentage": "0.402"
        }
      },
      "points": {
        "for": 9436,
        "against": 9074
      },
      "form": null,
      "description": "Promotion - NBA (Promotion - Play Offs: )"
    },
    {
      "position": 3,
      "stage": "NBA - Regular Season",
      "group": {
        "name": "Southwest",
        "points": 0
      },
      "team": {
        "id": 142,
        "name": "Houston Rockets",
        "logo": "https://media.api-sports.io/basketball/teams/142.png"
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
      "games": {
        "played": 82,
        "win": {
          "total": 41,
          "percentage": "0.500"
        },
        "lose": {
          "total": 41,
          "percentage": "0.500"
        }
      },
      "points": {
        "for": 9375,
        "against": 9283
      },
      "form": null,
      "description": null
    },
    {
      "position": 4,
      "stage": "NBA - Regular Season",
      "group": {
        "name": "Southwest",
        "points": 0
      },
      "team": {
        "id": 146,
        "name": "Memphis Grizzlies",
        "logo": "https://media.api-sports.io/basketball/teams/146.png"
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
      "games": {
        "played": 82,
        "win": {
          "total": 27,
          "percentage": "0.329"
        },
        "lose": {
          "total": 55,
          "percentage": "0.671"
        }
      },
      "points": {
        "for": 8677,
        "against": 9251
      },
      "form": null,
      "description": null
    },
    {
      "position": 5,
      "stage": "NBA - Regular Season",
      "group": {
        "name": "Southwest",
        "points": 0
      },
      "team": {
        "id": 158,
        "name": "San Antonio Spurs",
        "logo": "https://media.api-sports.io/basketball/teams/158.png"
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
      "games": {
        "played": 82,
        "win": {
          "total": 22,
          "percentage": "0.268"
        },
        "lose": {
          "total": 60,
          "percentage": "0.732"
        }
      },
      "points": {
        "for": 9192,
        "against": 9724
      },
      "form": null,
      "description": null
    }
  ])

  return (
    <div className='grid grid-rows-[5rem_auto] bg-mainBg
    min-h-screen h-auto text-white font-mainFont'>

      {/* Header div */}
      <div className='bg-headerBg sticky top-0 right-0 grid place-items-center'>

        <h1 className='text-3xl font-bold text-textWhite'>
          BallScore
        </h1>

      </div>
      {/* Main div */}
      <main className={`bg-mainBg w-[73%] mx-auto h-auto
      grid  gap-8 mt-10
      ${standings === null
          ? `grid-cols-[1fr,1.6fr,1.2fr]` : "grid-cols-[2.6fr,1.2fr]"}`}>

        {/* First column */}
        {standings === null && (
          <div className="flex flex-col gap-5">
            <CalendarDiv />
            <AllCountriesSidebar setStandings={setStandings} />
          </div>
        )}
        {standings !== null && (
          <Standings
            standings={standings}
            setStandings={setStandings} />
        )}

        {/* Second column */}
        {standings === null && (
          <GamesContainer setSelectedGame={setSelectedGame} />
        )}

        {/* Third column */}
        {selectedGame && (
          < SelectedGame
            setSelectedGame={setSelectedGame}
            selectedGame={selectedGame} />
        )}


      </main>

    </div>
  )
}

export default App
