import React, { createContext, ReactNode } from "react";
import { LeagueType } from "../types/LeagueType";


type LeaguesContextType = {
    leagues: Required<Omit<LeagueType, "season">>[]
}

// Context that will be used in components
export const LeaguesContext = createContext<LeaguesContextType>({} as LeaguesContextType);

export const LeagueProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

    const leagues: Required<Omit<LeagueType, "season">>[] = [
        {
            "id": 326,
            "name": "Africa Champions Cup",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/326.png",
            "country": {
                "id": 71,
                "name": "Africa",
                "code": null,
                "flag": null
            },
            "seasons": [
                {
                    "season": 2019,
                    "start": "2019-02-08",
                    "end": "2019-05-26"
                },
                {
                    "season": 2017,
                    "start": "2017-12-11",
                    "end": "2017-12-20"
                },
                {
                    "season": 2016,
                    "start": "2016-12-07",
                    "end": "2016-12-16"
                },
                {
                    "season": 2014,
                    "start": "2014-12-11",
                    "end": "2014-12-20"
                },
                {
                    "season": 2012,
                    "start": "2012-11-29",
                    "end": "2012-12-08"
                },
                {
                    "season": 2011,
                    "start": "2011-12-12",
                    "end": "2011-12-21"
                },
                {
                    "season": 2010,
                    "start": "2010-12-10",
                    "end": "2010-12-19"
                },
                {
                    "season": 2009,
                    "start": "2009-12-13",
                    "end": "2009-12-22"
                },
                {
                    "season": 2015,
                    "start": "2015-12-10",
                    "end": "2015-12-19"
                }
            ]
        },
        {
            "id": 327,
            "name": "Africa Champions Cup Women",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/327.png",
            "country": {
                "id": 71,
                "name": "Africa",
                "code": null,
                "flag": null
            },
            "seasons": [
                {
                    "season": 2018,
                    "start": "2018-11-17",
                    "end": "2018-11-25"
                },
                {
                    "season": 2019,
                    "start": "2019-12-06",
                    "end": "2019-12-14"
                }
            ]
        },
        {
            "id": 320,
            "name": "African Championship",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/320.png",
            "country": {
                "id": 71,
                "name": "Africa",
                "code": null,
                "flag": null
            },
            "seasons": [
                {
                    "season": 2011,
                    "start": "2011-08-17",
                    "end": "2011-08-28"
                },
                {
                    "season": 2013,
                    "start": "2013-08-20",
                    "end": "2013-08-31"
                },
                {
                    "season": 2009,
                    "start": "2009-08-05",
                    "end": "2009-08-15"
                },
                {
                    "season": 2015,
                    "start": "2015-08-19",
                    "end": "2015-08-30"
                },
                {
                    "season": 2017,
                    "start": "2017-09-08",
                    "end": "2017-09-16"
                }
            ]
        },
        {
            "id": 321,
            "name": "African Championship U16",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/321.png",
            "country": {
                "id": 71,
                "name": "Africa",
                "code": null,
                "flag": null
            },
            "seasons": [
                {
                    "season": 2023,
                    "start": "2023-07-13",
                    "end": "2023-07-23"
                },
                {
                    "season": 2017,
                    "start": "2017-07-13",
                    "end": "2017-07-22"
                },
                {
                    "season": 2019,
                    "start": "2019-07-05",
                    "end": "2019-07-14"
                },
                {
                    "season": 2021,
                    "start": "2021-08-06",
                    "end": "2021-08-15"
                }
            ]
        },
        {
            "id": 322,
            "name": "African Championship U16 Women",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/322.png",
            "country": {
                "id": 71,
                "name": "Africa",
                "code": null,
                "flag": null
            },
            "seasons": [
                {
                    "season": 2023,
                    "start": "2023-07-14",
                    "end": "2023-07-22"
                },
                {
                    "season": 2019,
                    "start": "2019-07-28",
                    "end": "2019-08-03"
                },
                {
                    "season": 2021,
                    "start": "2021-08-07",
                    "end": "2021-08-15"
                },
                {
                    "season": 2017,
                    "start": "2017-08-05",
                    "end": "2017-08-12"
                }
            ]
        },
        {
            "id": 319,
            "name": "African Championship U18",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/319.png",
            "country": {
                "id": 71,
                "name": "Africa",
                "code": null,
                "flag": null
            },
            "seasons": [
                {
                    "season": 2020,
                    "start": "2020-12-03",
                    "end": "2020-12-09"
                },
                {
                    "season": 2022,
                    "start": "2022-08-04",
                    "end": "2022-08-14"
                },
                {
                    "season": 2012,
                    "start": "2012-08-16",
                    "end": "2012-08-25"
                },
                {
                    "season": 2010,
                    "start": "2010-10-08",
                    "end": "2010-10-17"
                },
                {
                    "season": 2014,
                    "start": "2014-08-02",
                    "end": "2014-08-10"
                },
                {
                    "season": 2018,
                    "start": "2018-08-24",
                    "end": "2018-09-02"
                }
            ]
        },
        {
            "id": 323,
            "name": "African Championship U18 Women",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/323.png",
            "country": {
                "id": 71,
                "name": "Africa",
                "code": null,
                "flag": null
            },
            "seasons": [
                {
                    "season": 2020,
                    "start": "2020-12-03",
                    "end": "2020-12-09"
                },
                {
                    "season": 2018,
                    "start": "2018-08-10",
                    "end": "2018-08-19"
                },
                {
                    "season": 2022,
                    "start": "2022-08-05",
                    "end": "2022-08-13"
                }
            ]
        },
        {
            "id": 324,
            "name": "AfroBasket",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/324.png",
            "country": {
                "id": 71,
                "name": "Africa",
                "code": null,
                "flag": null
            },
            "seasons": [
                {
                    "season": 2024,
                    "start": "2024-02-23",
                    "end": "2025-02-23"
                },
                {
                    "season": 2021,
                    "start": "2021-08-24",
                    "end": "2021-09-05"
                }
            ]
        },
        {
            "id": 325,
            "name": "AfroBasket Women",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/325.png",
            "country": {
                "id": 71,
                "name": "Africa",
                "code": null,
                "flag": null
            },
            "seasons": [
                {
                    "season": 2023,
                    "start": "2023-07-28",
                    "end": "2023-08-05"
                },
                {
                    "season": 2021,
                    "start": "2021-09-18",
                    "end": "2021-09-26"
                }
            ]
        },
        {
            "id": 412,
            "name": "AfroCan",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/412.png",
            "country": {
                "id": 71,
                "name": "Africa",
                "code": null,
                "flag": null
            },
            "seasons": [
                {
                    "season": 2023,
                    "start": "2023-07-08",
                    "end": "2023-07-16"
                }
            ]
        },
        {
            "id": 328,
            "name": "BAL",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/328.png",
            "country": {
                "id": 71,
                "name": "Africa",
                "code": null,
                "flag": null
            },
            "seasons": [
                {
                    "season": 2022,
                    "start": "2022-03-05",
                    "end": "2022-05-28"
                },
                {
                    "season": 2024,
                    "start": "2024-03-09",
                    "end": "2024-05-12"
                },
                {
                    "season": 2021,
                    "start": "2021-05-16",
                    "end": "2021-05-30"
                },
                {
                    "season": 2023,
                    "start": "2023-03-11",
                    "end": "2023-05-27"
                }
            ]
        },
        {
            "id": 388,
            "name": "Superliga",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/388.png",
            "country": {
                "id": 76,
                "name": "Albania",
                "code": "AL",
                "flag": "https://media.api-sports.io/flags/al.svg"
            },
            "seasons": [
                {
                    "season": "2022-2023",
                    "start": "2022-10-09",
                    "end": "2023-05-04"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-10-06",
                    "end": "2024-04-07"
                }
            ]
        },
        {
            "id": 18,
            "name": "Liga A",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/18.png",
            "country": {
                "id": 6,
                "name": "Argentina",
                "code": "AR",
                "flag": "https://media.api-sports.io/flags/ar.svg"
            },
            "seasons": [
                {
                    "season": "2020-2021",
                    "start": "2020-11-04",
                    "end": "2021-05-15"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-10-05",
                    "end": "2023-06-17"
                },
                {
                    "season": "2015-2016",
                    "start": "2015-09-24",
                    "end": "2016-06-24"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-10-04",
                    "end": "2024-05-23"
                },
                {
                    "season": "2019-2020",
                    "start": "2019-11-10",
                    "end": "2020-04-30"
                },
                {
                    "season": "2014-2015",
                    "start": "2014-09-30",
                    "end": "2015-07-16"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-11-03",
                    "end": "2022-06-14"
                },
                {
                    "season": "2013-2014",
                    "start": "2013-10-10",
                    "end": "2014-06-06"
                },
                {
                    "season": "2012-2013",
                    "start": "2012-09-14",
                    "end": "2013-05-16"
                },
                {
                    "season": "2011-2012",
                    "start": "2011-09-22",
                    "end": "2012-06-01"
                },
                {
                    "season": "2010-2011",
                    "start": "2010-10-14",
                    "end": "2011-06-06"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-12-05",
                    "end": "2019-05-28"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-11-29",
                    "end": "2018-06-23"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-09-23",
                    "end": "2017-07-16"
                }
            ]
        },
        {
            "id": 206,
            "name": "Liga Femenina Women",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/206.png",
            "country": {
                "id": 6,
                "name": "Argentina",
                "code": "AR",
                "flag": "https://media.api-sports.io/flags/ar.svg"
            },
            "seasons": [
                {
                    "season": 2023,
                    "start": "2022-10-29",
                    "end": "2023-03-31"
                },
                {
                    "season": 2021,
                    "start": "2021-10-23",
                    "end": "2021-12-19"
                },
                {
                    "season": 2024,
                    "start": "2023-09-21",
                    "end": "2024-04-09"
                },
                {
                    "season": 2022,
                    "start": "2022-02-19",
                    "end": "2022-04-24"
                }
            ]
        },
        {
            "id": 179,
            "name": "Super 4",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/179.png",
            "country": {
                "id": 6,
                "name": "Argentina",
                "code": "AR",
                "flag": "https://media.api-sports.io/flags/ar.svg"
            },
            "seasons": [
                {
                    "season": "2012-2013",
                    "start": "2012-11-07",
                    "end": "2012-11-11"
                },
                {
                    "season": "2017-2018",
                    "start": "2018-01-06",
                    "end": "2018-01-07"
                },
                {
                    "season": "2013-2014",
                    "start": "2013-12-18",
                    "end": "2013-12-21"
                },
                {
                    "season": "2016-2017",
                    "start": "2017-01-06",
                    "end": "2017-01-08"
                },
                {
                    "season": "2014-2015",
                    "start": "2014-12-11",
                    "end": "2014-12-20"
                },
                {
                    "season": "2015-2016",
                    "start": "2015-12-22",
                    "end": "2015-12-24"
                }
            ]
        },
        {
            "id": 180,
            "name": "Super Cup",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/180.png",
            "country": {
                "id": 6,
                "name": "Argentina",
                "code": "AR",
                "flag": "https://media.api-sports.io/flags/ar.svg"
            },
            "seasons": [
                {
                    "season": 2023,
                    "start": "2023-12-21",
                    "end": "2023-12-21"
                },
                {
                    "season": 2018,
                    "start": "2018-11-26",
                    "end": "2018-11-26"
                },
                {
                    "season": 2022,
                    "start": "2022-12-23",
                    "end": "2022-12-23"
                }
            ]
        },
        {
            "id": 22,
            "name": "Torneo Super 20",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/22.png",
            "country": {
                "id": 6,
                "name": "Argentina",
                "code": "AR",
                "flag": "https://media.api-sports.io/flags/ar.svg"
            },
            "seasons": [
                {
                    "season": 2018,
                    "start": "2018-09-23",
                    "end": "2018-12-23"
                },
                {
                    "season": 2022,
                    "start": "2023-02-11",
                    "end": "2023-02-12"
                },
                {
                    "season": 2017,
                    "start": "2017-09-21",
                    "end": "2017-11-19"
                },
                {
                    "season": 2023,
                    "start": "2024-03-13",
                    "end": "2024-03-15"
                },
                {
                    "season": 2020,
                    "start": "2021-02-25",
                    "end": "2021-02-27"
                },
                {
                    "season": 2019,
                    "start": "2019-09-26",
                    "end": "2020-01-26"
                },
                {
                    "season": 2021,
                    "start": "2021-09-24",
                    "end": "2021-10-30"
                }
            ]
        },
        {
            "id": 6,
            "name": "ABL",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/6.png",
            "country": {
                "id": 2,
                "name": "Asia",
                "code": null,
                "flag": null
            },
            "seasons": [
                {
                    "season": "2022-2023",
                    "start": "2023-01-02",
                    "end": "2023-03-14"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-11-17",
                    "end": "2018-05-02"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-11-25",
                    "end": "2017-04-23"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-11-16",
                    "end": "2019-05-15"
                },
                {
                    "season": "2015-2016",
                    "start": "2015-10-27",
                    "end": "2016-03-26"
                },
                {
                    "season": "2019-2020",
                    "start": "2019-11-16",
                    "end": "2020-03-29"
                }
            ]
        },
        {
            "id": 306,
            "name": "Asia Challenge",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/306.png",
            "country": {
                "id": 2,
                "name": "Asia",
                "code": null,
                "flag": null
            },
            "seasons": [
                {
                    "season": 2012,
                    "start": "2012-09-14",
                    "end": "2012-09-22"
                },
                {
                    "season": 2014,
                    "start": "2014-07-11",
                    "end": "2014-07-19"
                },
                {
                    "season": 2016,
                    "start": "2016-09-09",
                    "end": "2016-09-18"
                }
            ]
        },
        {
            "id": 316,
            "name": "Asia Champions Cup",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/316.png",
            "country": {
                "id": 2,
                "name": "Asia",
                "code": null,
                "flag": null
            },
            "seasons": [
                {
                    "season": 2013,
                    "start": "2013-09-13",
                    "end": "2013-09-21"
                },
                {
                    "season": 2012,
                    "start": "2012-10-15",
                    "end": "2012-10-21"
                },
                {
                    "season": 2011,
                    "start": "2011-05-28",
                    "end": "2011-06-05"
                },
                {
                    "season": 2010,
                    "start": "2010-05-22",
                    "end": "2010-05-30"
                },
                {
                    "season": 2017,
                    "start": "2017-09-22",
                    "end": "2017-09-30"
                },
                {
                    "season": 2018,
                    "start": "2018-09-27",
                    "end": "2018-10-02"
                },
                {
                    "season": 2016,
                    "start": "2016-10-08",
                    "end": "2016-10-16"
                },
                {
                    "season": 2019,
                    "start": "2019-09-24",
                    "end": "2019-09-29"
                }
            ]
        },
        {
            "id": 313,
            "name": "Asia Championship U16",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/313.png",
            "country": {
                "id": 2,
                "name": "Asia",
                "code": null,
                "flag": null
            },
            "seasons": [
                {
                    "season": 2023,
                    "start": "2023-09-17",
                    "end": "2023-09-24"
                },
                {
                    "season": 2018,
                    "start": "2018-04-02",
                    "end": "2018-04-08"
                },
                {
                    "season": 2022,
                    "start": "2022-06-12",
                    "end": "2022-06-19"
                }
            ]
        },
        {
            "id": 312,
            "name": "Asia Championship U16 B Women",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/312.png",
            "country": {
                "id": 2,
                "name": "Asia",
                "code": null,
                "flag": null
            },
            "seasons": [
                {
                    "season": 2023,
                    "start": "2023-07-10",
                    "end": "2023-07-16"
                },
                {
                    "season": 2017,
                    "start": "2017-10-22",
                    "end": "2017-10-28"
                },
                {
                    "season": 2022,
                    "start": "2022-06-24",
                    "end": "2022-06-30"
                }
            ]
        },
        {
            "id": 311,
            "name": "Asia Championship U16 Women",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/311.png",
            "country": {
                "id": 2,
                "name": "Asia",
                "code": null,
                "flag": null
            },
            "seasons": [
                {
                    "season": 2023,
                    "start": "2023-07-10",
                    "end": "2023-07-16"
                },
                {
                    "season": 2017,
                    "start": "2017-10-22",
                    "end": "2017-10-28"
                },
                {
                    "season": 2022,
                    "start": "2022-06-24",
                    "end": "2022-06-30"
                }
            ]
        },
        {
            "id": 300,
            "name": "Asia Championship U18",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/300.png",
            "country": {
                "id": 2,
                "name": "Asia",
                "code": null,
                "flag": null
            },
            "seasons": [
                {
                    "season": 2022,
                    "start": "2022-08-21",
                    "end": "2022-08-28"
                },
                {
                    "season": 2014,
                    "start": "2014-08-19",
                    "end": "2014-08-28"
                },
                {
                    "season": 2010,
                    "start": "2010-09-22",
                    "end": "2010-10-01"
                },
                {
                    "season": 2018,
                    "start": "2018-08-05",
                    "end": "2018-08-11"
                },
                {
                    "season": 2016,
                    "start": "2016-07-22",
                    "end": "2016-07-31"
                },
                {
                    "season": 2012,
                    "start": "2012-08-17",
                    "end": "2012-08-26"
                }
            ]
        },
        {
            "id": 314,
            "name": "Asia Championship U18 B Women",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/314.png",
            "country": {
                "id": 2,
                "name": "Asia",
                "code": null,
                "flag": null
            },
            "seasons": [
                {
                    "season": 2018,
                    "start": "2018-10-28",
                    "end": "2018-11-03"
                }
            ]
        },
        {
            "id": 315,
            "name": "Asia Championship U18 Women",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/315.png",
            "country": {
                "id": 2,
                "name": "Asia",
                "code": null,
                "flag": null
            },
            "seasons": [
                {
                    "season": 2022,
                    "start": "2022-09-06",
                    "end": "2022-09-11"
                },
                {
                    "season": 2018,
                    "start": "2018-10-28",
                    "end": "2018-11-03"
                }
            ]
        },
        {
            "id": 301,
            "name": "Asia Cup",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/301.png",
            "country": {
                "id": 2,
                "name": "Asia",
                "code": null,
                "flag": null
            },
            "seasons": [
                {
                    "season": 2023,
                    "start": "2022-06-02",
                    "end": "2025-02-24"
                },
                {
                    "season": 2022,
                    "start": "2020-02-20",
                    "end": "2022-07-24"
                },
                {
                    "season": 2013,
                    "start": "2013-08-01",
                    "end": "2013-08-11"
                },
                {
                    "season": 2015,
                    "start": "2015-09-23",
                    "end": "2015-10-03"
                },
                {
                    "season": 2017,
                    "start": "2017-08-08",
                    "end": "2017-08-20"
                }
            ]
        },
        {
            "id": 310,
            "name": "Asia Cup Women",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/310.png",
            "country": {
                "id": 2,
                "name": "Asia",
                "code": null,
                "flag": null
            },
            "seasons": [
                {
                    "season": 2023,
                    "start": "2023-06-26",
                    "end": "2023-07-02"
                },
                {
                    "season": 2017,
                    "start": "2017-07-23",
                    "end": "2017-07-29"
                },
                {
                    "season": 2019,
                    "start": "2019-09-24",
                    "end": "2019-09-29"
                },
                {
                    "season": 2015,
                    "start": "2015-08-29",
                    "end": "2015-09-05"
                },
                {
                    "season": 2013,
                    "start": "2013-10-27",
                    "end": "2013-11-03"
                },
                {
                    "season": 2021,
                    "start": "2021-09-27",
                    "end": "2021-10-03"
                }
            ]
        },
        {
            "id": 303,
            "name": "Asian Games",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/303.png",
            "country": {
                "id": 2,
                "name": "Asia",
                "code": null,
                "flag": null
            },
            "seasons": [
                {
                    "season": 2023,
                    "start": "2023-09-26",
                    "end": "2023-10-06"
                },
                {
                    "season": 2018,
                    "start": "2018-08-14",
                    "end": "2018-09-01"
                },
                {
                    "season": 2010,
                    "start": "2010-11-13",
                    "end": "2010-11-26"
                },
                {
                    "season": 2014,
                    "start": "2014-09-20",
                    "end": "2014-10-03"
                }
            ]
        },
        {
            "id": 302,
            "name": "Asian Games Women",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/302.png",
            "country": {
                "id": 2,
                "name": "Asia",
                "code": " ",
                "flag": "https://media.api-sports.io/flags/ .svg"
            },
            "seasons": [
                {
                    "season": 2023,
                    "start": "2023-09-27",
                    "end": "2023-10-05"
                },
                {
                    "season": 2018,
                    "start": "2018-08-15",
                    "end": "2018-09-01"
                },
                {
                    "season": 2014,
                    "start": "2014-09-23",
                    "end": "2014-10-02"
                }
            ]
        },
        {
            "id": 309,
            "name": "EABA Championship",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/309.png",
            "country": {
                "id": 2,
                "name": "Asia",
                "code": null,
                "flag": null
            },
            "seasons": [
                {
                    "season": 2017,
                    "start": "2017-06-03",
                    "end": "2017-06-07"
                }
            ]
        },
        {
            "id": 386,
            "name": "EASL",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/386.png",
            "country": {
                "id": 2,
                "name": "Asia",
                "code": null,
                "flag": null
            },
            "seasons": [
                {
                    "season": 2023,
                    "start": "2023-03-01",
                    "end": "2023-03-05"
                },
                {
                    "season": 2024,
                    "start": "2023-10-11",
                    "end": "2024-03-10"
                }
            ]
        },
        {
            "id": 308,
            "name": "SEABA Championship",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/308.png",
            "country": {
                "id": 2,
                "name": "Asia",
                "code": null,
                "flag": null
            },
            "seasons": [
                {
                    "season": 2017,
                    "start": "2017-05-12",
                    "end": "2017-05-18"
                }
            ]
        },
        {
            "id": 307,
            "name": "SEABA Championship Women",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/307.png",
            "country": {
                "id": 2,
                "name": "Asia",
                "code": null,
                "flag": null
            },
            "seasons": [
                {
                    "season": 2016,
                    "start": "2016-09-20",
                    "end": "2016-09-26"
                }
            ]
        },
        {
            "id": 304,
            "name": "Southeast Asian Games",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/304.png",
            "country": {
                "id": 2,
                "name": "Asia",
                "code": null,
                "flag": null
            },
            "seasons": [
                {
                    "season": 2023,
                    "start": "2023-05-09",
                    "end": "2023-05-16"
                },
                {
                    "season": 2019,
                    "start": "2019-12-04",
                    "end": "2019-12-10"
                },
                {
                    "season": 2022,
                    "start": "2022-05-16",
                    "end": "2022-05-22"
                },
                {
                    "season": 2017,
                    "start": "2017-08-20",
                    "end": "2017-08-26"
                },
                {
                    "season": 2015,
                    "start": "2015-06-09",
                    "end": "2015-06-15"
                }
            ]
        },
        {
            "id": 305,
            "name": "Southeast Asian Games Women",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/305.png",
            "country": {
                "id": 2,
                "name": "Asia",
                "code": null,
                "flag": null
            },
            "seasons": [
                {
                    "season": 2023,
                    "start": "2023-05-09",
                    "end": "2023-05-15"
                },
                {
                    "season": 2022,
                    "start": "2022-05-16",
                    "end": "2022-05-22"
                },
                {
                    "season": 2015,
                    "start": "2015-06-09",
                    "end": "2015-06-15"
                },
                {
                    "season": 2017,
                    "start": "2017-08-20",
                    "end": "2017-08-26"
                },
                {
                    "season": 2019,
                    "start": "2019-12-04",
                    "end": "2019-12-10"
                }
            ]
        },
        {
            "id": 317,
            "name": "The Super 8",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/317.png",
            "country": {
                "id": 2,
                "name": "Asia",
                "code": null,
                "flag": null
            },
            "seasons": [
                {
                    "season": 2017,
                    "start": "2017-09-20",
                    "end": "2017-09-24"
                },
                {
                    "season": 2018,
                    "start": "2018-07-17",
                    "end": "2018-07-22"
                }
            ]
        },
        {
            "id": 389,
            "name": "WASL",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/389.png",
            "country": {
                "id": 2,
                "name": "Asia",
                "code": null,
                "flag": null
            },
            "seasons": [
                {
                    "season": "2023-2024",
                    "start": "2023-11-13",
                    "end": "2024-04-29"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-12-19",
                    "end": "2023-06-17"
                }
            ]
        },
        {
            "id": 1,
            "name": "NBL",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/1.png",
            "country": {
                "id": 1,
                "name": "Australia",
                "code": "AU",
                "flag": "https://media.api-sports.io/flags/au.svg"
            },
            "seasons": [
                {
                    "season": "2013-2014",
                    "start": "2013-10-10",
                    "end": "2014-04-13"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-09-28",
                    "end": "2024-03-31"
                },
                {
                    "season": "2012-2013",
                    "start": "2012-10-05",
                    "end": "2013-04-12"
                },
                {
                    "season": "2011-2012",
                    "start": "2011-10-07",
                    "end": "2012-04-24"
                },
                {
                    "season": "2010-2011",
                    "start": "2010-10-15",
                    "end": "2011-04-29"
                },
                {
                    "season": "2009-2010",
                    "start": "2009-09-24",
                    "end": "2010-03-12"
                },
                {
                    "season": "2014-2015",
                    "start": "2014-10-10",
                    "end": "2015-03-08"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-10-01",
                    "end": "2023-03-15"
                },
                {
                    "season": "2019-2020",
                    "start": "2019-10-03",
                    "end": "2020-03-15"
                },
                {
                    "season": "2020-2021",
                    "start": "2021-01-15",
                    "end": "2021-06-25"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-12-03",
                    "end": "2022-05-11"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-10-06",
                    "end": "2017-03-05"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-10-05",
                    "end": "2018-03-31"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-10-11",
                    "end": "2019-03-17"
                },
                {
                    "season": "2015-2016",
                    "start": "2015-10-07",
                    "end": "2016-03-06"
                }
            ]
        },
        {
            "id": 4,
            "name": "NBL 1",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/4.png",
            "country": {
                "id": 1,
                "name": "Australia",
                "code": "AU",
                "flag": "https://media.api-sports.io/flags/au.svg"
            },
            "seasons": [
                {
                    "season": 2022,
                    "start": "2022-09-09",
                    "end": "2022-09-11"
                },
                {
                    "season": 2019,
                    "start": "2019-03-29",
                    "end": "2019-08-17"
                },
                {
                    "season": 2023,
                    "start": "2023-08-18",
                    "end": "2023-08-20"
                }
            ]
        },
        {
            "id": 5,
            "name": "NBL 1 W",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/5.png",
            "country": {
                "id": 1,
                "name": "Australia",
                "code": "AU",
                "flag": "https://media.api-sports.io/flags/au.svg"
            },
            "seasons": [
                {
                    "season": 2019,
                    "start": "2019-03-29",
                    "end": "2019-08-17"
                },
                {
                    "season": 2022,
                    "start": "2022-09-09",
                    "end": "2022-09-11"
                },
                {
                    "season": 2023,
                    "start": "2023-08-18",
                    "end": "2023-08-20"
                }
            ]
        },
        {
            "id": 3,
            "name": "NBL W",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/3.png",
            "country": {
                "id": 1,
                "name": "Australia",
                "code": "AU",
                "flag": "https://media.api-sports.io/flags/au.svg"
            },
            "seasons": [
                {
                    "season": "2019-2020",
                    "start": "2019-10-11",
                    "end": "2020-03-04"
                },
                {
                    "season": "2012-2013",
                    "start": "2012-10-05",
                    "end": "2013-03-10"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-12-04",
                    "end": "2022-04-09"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-11-01",
                    "end": "2024-03-17"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-11-11",
                    "end": "2020-12-20"
                },
                {
                    "season": "2010-2011",
                    "start": "2010-10-08",
                    "end": "2011-03-13"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-10-12",
                    "end": "2019-02-16"
                },
                {
                    "season": "2011-2012",
                    "start": "2011-10-07",
                    "end": "2012-03-11"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-10-05",
                    "end": "2018-01-21"
                },
                {
                    "season": "2013-2014",
                    "start": "2013-10-04",
                    "end": "2014-03-09"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-10-07",
                    "end": "2017-03-17"
                },
                {
                    "season": "2014-2015",
                    "start": "2014-10-17",
                    "end": "2015-03-08"
                },
                {
                    "season": "2015-2016",
                    "start": "2015-10-09",
                    "end": "2016-03-18"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-11-02",
                    "end": "2023-03-22"
                }
            ]
        },
        {
            "id": 212,
            "name": "NBL1 Central",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/212.png",
            "country": {
                "id": 1,
                "name": "Australia",
                "code": "AU",
                "flag": "https://media.api-sports.io/flags/au.svg"
            },
            "seasons": [
                {
                    "season": 2022,
                    "start": "2022-04-09",
                    "end": "2022-09-03"
                },
                {
                    "season": 2024,
                    "start": "2024-03-23",
                    "end": "2024-07-13"
                },
                {
                    "season": 2021,
                    "start": "2021-04-10",
                    "end": "2021-09-11"
                },
                {
                    "season": 2023,
                    "start": "2023-03-25",
                    "end": "2023-08-12"
                }
            ]
        },
        {
            "id": 211,
            "name": "NBL1 Central Women",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/211.png",
            "country": {
                "id": 1,
                "name": "Australia",
                "code": "AU",
                "flag": "https://media.api-sports.io/flags/au.svg"
            },
            "seasons": [
                {
                    "season": 2022,
                    "start": "2022-04-09",
                    "end": "2022-09-03"
                },
                {
                    "season": 2024,
                    "start": "2024-03-23",
                    "end": "2024-07-13"
                },
                {
                    "season": 2021,
                    "start": "2021-04-10",
                    "end": "2021-09-11"
                },
                {
                    "season": 2023,
                    "start": "2023-03-25",
                    "end": "2023-08-12"
                }
            ]
        },
        {
            "id": 215,
            "name": "NBL1 East",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/215.png",
            "country": {
                "id": 1,
                "name": "Australia",
                "code": "AU",
                "flag": "https://media.api-sports.io/flags/au.svg"
            },
            "seasons": [
                {
                    "season": 2022,
                    "start": "2022-04-02",
                    "end": "2022-08-28"
                },
                {
                    "season": 2023,
                    "start": "2023-03-11",
                    "end": "2023-08-12"
                },
                {
                    "season": 2024,
                    "start": "2024-04-06",
                    "end": "2024-07-14"
                }
            ]
        },
        {
            "id": 216,
            "name": "NBL1 East Women",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/216.png",
            "country": {
                "id": 1,
                "name": "Australia",
                "code": "AU",
                "flag": "https://media.api-sports.io/flags/au.svg"
            },
            "seasons": [
                {
                    "season": 2022,
                    "start": "2022-04-02",
                    "end": "2022-08-28"
                },
                {
                    "season": 2023,
                    "start": "2023-03-11",
                    "end": "2023-08-12"
                },
                {
                    "season": 2024,
                    "start": "2024-04-06",
                    "end": "2024-07-14"
                }
            ]
        },
        {
            "id": 207,
            "name": "NBL1 North",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/207.png",
            "country": {
                "id": 1,
                "name": "Australia",
                "code": "AU",
                "flag": "https://media.api-sports.io/flags/au.svg"
            },
            "seasons": [
                {
                    "season": 2022,
                    "start": "2022-04-29",
                    "end": "2022-08-27"
                },
                {
                    "season": 2023,
                    "start": "2023-03-24",
                    "end": "2023-08-06"
                },
                {
                    "season": 2021,
                    "start": "2021-05-13",
                    "end": "2021-09-11"
                },
                {
                    "season": 2024,
                    "start": "2024-04-11",
                    "end": "2024-07-13"
                }
            ]
        },
        {
            "id": 208,
            "name": "NBL1 North Women",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/208.png",
            "country": {
                "id": 1,
                "name": "Australia",
                "code": "AU",
                "flag": "https://media.api-sports.io/flags/au.svg"
            },
            "seasons": [
                {
                    "season": 2021,
                    "start": "2021-05-13",
                    "end": "2021-09-11"
                },
                {
                    "season": 2024,
                    "start": "2024-04-11",
                    "end": "2024-07-13"
                },
                {
                    "season": 2022,
                    "start": "2022-04-29",
                    "end": "2022-08-27"
                },
                {
                    "season": 2023,
                    "start": "2023-03-24",
                    "end": "2023-08-05"
                }
            ]
        },
        {
            "id": 209,
            "name": "NBL1 South",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/209.png",
            "country": {
                "id": 1,
                "name": "Australia",
                "code": "AU",
                "flag": "https://media.api-sports.io/flags/au.svg"
            },
            "seasons": [
                {
                    "season": 2022,
                    "start": "2022-04-21",
                    "end": "2022-09-03"
                },
                {
                    "season": 2024,
                    "start": "2024-04-03",
                    "end": "2024-07-14"
                },
                {
                    "season": 2021,
                    "start": "2021-04-17",
                    "end": "2021-08-14"
                },
                {
                    "season": 2023,
                    "start": "2023-04-01",
                    "end": "2023-08-12"
                }
            ]
        },
        {
            "id": 210,
            "name": "NBL1 South Women",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/210.png",
            "country": {
                "id": 1,
                "name": "Australia",
                "code": "AU",
                "flag": "https://media.api-sports.io/flags/au.svg"
            },
            "seasons": [
                {
                    "season": 2022,
                    "start": "2022-04-21",
                    "end": "2022-09-03"
                },
                {
                    "season": 2023,
                    "start": "2023-04-01",
                    "end": "2023-08-12"
                },
                {
                    "season": 2021,
                    "start": "2021-04-17",
                    "end": "2021-08-14"
                },
                {
                    "season": 2024,
                    "start": "2024-04-03",
                    "end": "2024-07-14"
                }
            ]
        },
        {
            "id": 214,
            "name": "NBL1 West",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/214.png",
            "country": {
                "id": 1,
                "name": "Australia",
                "code": "AU",
                "flag": "https://media.api-sports.io/flags/au.svg"
            },
            "seasons": [
                {
                    "season": 2021,
                    "start": "2021-04-16",
                    "end": "2021-09-04"
                },
                {
                    "season": 2023,
                    "start": "2023-03-31",
                    "end": "2023-08-12"
                },
                {
                    "season": 2022,
                    "start": "2022-04-08",
                    "end": "2022-09-03"
                },
                {
                    "season": 2024,
                    "start": "2024-03-28",
                    "end": "2024-07-20"
                }
            ]
        },
        {
            "id": 213,
            "name": "NBL1 West Women",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/213.png",
            "country": {
                "id": 1,
                "name": "Australia",
                "code": "AU",
                "flag": "https://media.api-sports.io/flags/au.svg"
            },
            "seasons": [
                {
                    "season": 2021,
                    "start": "2021-04-16",
                    "end": "2021-09-03"
                },
                {
                    "season": 2023,
                    "start": "2023-03-31",
                    "end": "2023-08-11"
                },
                {
                    "season": 2022,
                    "start": "2022-04-08",
                    "end": "2022-09-02"
                },
                {
                    "season": 2024,
                    "start": "2024-03-28",
                    "end": "2024-07-20"
                }
            ]
        },
        {
            "id": 181,
            "name": "SEABL",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/181.png",
            "country": {
                "id": 1,
                "name": "Australia",
                "code": "AU",
                "flag": "https://media.api-sports.io/flags/au.svg"
            },
            "seasons": [
                {
                    "season": 2015,
                    "start": "2015-04-10",
                    "end": "2015-09-12"
                },
                {
                    "season": 2018,
                    "start": "2018-04-06",
                    "end": "2018-08-18"
                },
                {
                    "season": 2017,
                    "start": "2017-03-24",
                    "end": "2017-09-02"
                },
                {
                    "season": 2016,
                    "start": "2016-04-01",
                    "end": "2016-09-10"
                }
            ]
        },
        {
            "id": 182,
            "name": "SEABL Women",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/182.png",
            "country": {
                "id": 1,
                "name": "Australia",
                "code": "AU",
                "flag": "https://media.api-sports.io/flags/au.svg"
            },
            "seasons": [
                {
                    "season": 2015,
                    "start": "2015-04-10",
                    "end": "2015-09-12"
                },
                {
                    "season": 2016,
                    "start": "2016-04-01",
                    "end": "2016-09-10"
                },
                {
                    "season": 2018,
                    "start": "2018-04-06",
                    "end": "2018-08-18"
                },
                {
                    "season": 2017,
                    "start": "2017-03-25",
                    "end": "2017-09-02"
                }
            ]
        },
        {
            "id": 189,
            "name": "ABL",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/189.png",
            "country": {
                "id": 3,
                "name": "Austria",
                "code": "AT",
                "flag": "https://media.api-sports.io/flags/at.svg"
            },
            "seasons": [
                {
                    "season": "2018-2019",
                    "start": "2018-10-04",
                    "end": "2019-06-05"
                },
                {
                    "season": "2015-2016",
                    "start": "2015-09-24",
                    "end": "2016-05-31"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-10-07",
                    "end": "2017-06-08"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-10-04",
                    "end": "2018-06-12"
                }
            ]
        },
        {
            "id": 121,
            "name": "Austria Cup",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/121.png",
            "country": {
                "id": 3,
                "name": "Austria",
                "code": "AT",
                "flag": "https://media.api-sports.io/flags/at.svg"
            },
            "seasons": [
                {
                    "season": "2022-2023",
                    "start": "2022-09-24",
                    "end": "2023-01-15"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-10-23",
                    "end": "2022-02-06"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-09-23",
                    "end": "2024-01-21"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-09-19",
                    "end": "2021-03-07"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-10-07",
                    "end": "2019-03-24"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-10-08",
                    "end": "2018-03-25"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-11-01",
                    "end": "2017-03-26"
                },
                {
                    "season": "2015-2016",
                    "start": "2015-10-23",
                    "end": "2016-01-24"
                }
            ]
        },
        {
            "id": 183,
            "name": "AWBL Women",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/183.png",
            "country": {
                "id": 3,
                "name": "Austria",
                "code": "AT",
                "flag": "https://media.api-sports.io/flags/at.svg"
            },
            "seasons": [
                {
                    "season": "2018-2019",
                    "start": "2018-10-06",
                    "end": "2019-04-27"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-10-08",
                    "end": "2018-03-25"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-10-08",
                    "end": "2017-03-25"
                },
                {
                    "season": "2015-2016",
                    "start": "2015-10-03",
                    "end": "2016-01-31"
                }
            ]
        },
        {
            "id": 190,
            "name": "Super Cup",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/190.png",
            "country": {
                "id": 3,
                "name": "Austria",
                "code": "AT",
                "flag": "https://media.api-sports.io/flags/at.svg"
            },
            "seasons": [
                {
                    "season": 2023,
                    "start": "2023-10-01",
                    "end": "2023-10-01"
                },
                {
                    "season": 2010,
                    "start": "2010-09-27",
                    "end": "2010-09-27"
                },
                {
                    "season": 2022,
                    "start": "2022-09-29",
                    "end": "2022-09-29"
                },
                {
                    "season": 2021,
                    "start": "2021-10-03",
                    "end": "2021-10-03"
                },
                {
                    "season": 2015,
                    "start": "2015-09-20",
                    "end": "2015-09-20"
                },
                {
                    "season": 2016,
                    "start": "2016-10-02",
                    "end": "2016-10-02"
                },
                {
                    "season": 2017,
                    "start": "2017-10-01",
                    "end": "2017-10-01"
                },
                {
                    "season": 2018,
                    "start": "2018-09-29",
                    "end": "2018-09-29"
                },
                {
                    "season": 2019,
                    "start": "2019-09-23",
                    "end": "2019-09-23"
                },
                {
                    "season": 2012,
                    "start": "2012-09-30",
                    "end": "2012-09-30"
                },
                {
                    "season": 2013,
                    "start": "2013-09-29",
                    "end": "2013-09-29"
                },
                {
                    "season": 2014,
                    "start": "2014-09-21",
                    "end": "2014-09-21"
                }
            ]
        },
        {
            "id": 217,
            "name": "Superliga",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/217.png",
            "country": {
                "id": 3,
                "name": "Austria",
                "code": "AT",
                "flag": "https://media.api-sports.io/flags/at.svg"
            },
            "seasons": [
                {
                    "season": "2023-2024",
                    "start": "2023-09-30",
                    "end": "2024-04-13"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-09-29",
                    "end": "2023-05-29"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-10-09",
                    "end": "2022-05-31"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-10-03",
                    "end": "2021-05-16"
                }
            ]
        },
        {
            "id": 218,
            "name": "Superliga Women",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/218.png",
            "country": {
                "id": 3,
                "name": "Austria",
                "code": "AT",
                "flag": "https://media.api-sports.io/flags/at.svg"
            },
            "seasons": [
                {
                    "season": "2023-2024",
                    "start": "2023-10-14",
                    "end": "2024-04-07"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-10-02",
                    "end": "2022-05-01"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-10-01",
                    "end": "2023-04-02"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-10-03",
                    "end": "2021-04-17"
                }
            ]
        },
        {
            "id": 7,
            "name": "Zweite Liga",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/7.png",
            "country": {
                "id": 3,
                "name": "Austria",
                "code": "AT",
                "flag": "https://media.api-sports.io/flags/at.svg"
            },
            "seasons": [
                {
                    "season": "2022-2023",
                    "start": "2022-10-07",
                    "end": "2023-04-29"
                },
                {
                    "season": "2019-2020",
                    "start": "2019-09-21",
                    "end": "2020-03-28"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-10-07",
                    "end": "2024-04-20"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-09-23",
                    "end": "2018-04-29"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-10-08",
                    "end": "2022-05-21"
                },
                {
                    "season": "2014-2015",
                    "start": "2014-09-27",
                    "end": "2015-04-24"
                },
                {
                    "season": "2013-2014",
                    "start": "2013-09-28",
                    "end": "2014-04-12"
                },
                {
                    "season": "2015-2016",
                    "start": "2015-09-19",
                    "end": "2016-04-29"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-09-26",
                    "end": "2021-05-08"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-10-13",
                    "end": "2019-04-22"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-10-08",
                    "end": "2017-05-25"
                }
            ]
        },
        {
            "id": 122,
            "name": "Premier League",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/122.png",
            "country": {
                "id": 56,
                "name": "Bahrain",
                "code": "BH",
                "flag": "https://media.api-sports.io/flags/bh.svg"
            },
            "seasons": [
                {
                    "season": "2023-2024",
                    "start": "2023-10-24",
                    "end": "2024-04-19"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-09-05",
                    "end": "2018-04-28"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-09-10",
                    "end": "2023-06-22"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-10-16",
                    "end": "2017-04-18"
                },
                {
                    "season": "2014-2015",
                    "start": "2014-11-23",
                    "end": "2015-05-23"
                },
                {
                    "season": "2015-2016",
                    "start": "2015-11-05",
                    "end": "2016-05-03"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-10-01",
                    "end": "2019-03-30"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-09-14",
                    "end": "2022-04-18"
                },
                {
                    "season": "2013-2014",
                    "start": "2013-11-24",
                    "end": "2014-05-06"
                },
                {
                    "season": "2012-2013",
                    "start": "2012-11-27",
                    "end": "2013-07-07"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-12-06",
                    "end": "2021-04-02"
                }
            ]
        },
        {
            "id": 111,
            "name": "Premier League",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/111.png",
            "country": {
                "id": 51,
                "name": "Belarus",
                "code": "BY",
                "flag": "https://media.api-sports.io/flags/by.svg"
            },
            "seasons": [
                {
                    "season": "2023-2024",
                    "start": "2023-09-23",
                    "end": "2024-04-20"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-10-21",
                    "end": "2017-05-26"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-09-17",
                    "end": "2023-05-20"
                },
                {
                    "season": "2012-2013",
                    "start": "2012-10-12",
                    "end": "2013-05-18"
                },
                {
                    "season": "2015-2016",
                    "start": "2015-10-23",
                    "end": "2016-05-18"
                },
                {
                    "season": "2014-2015",
                    "start": "2014-10-31",
                    "end": "2015-05-21"
                },
                {
                    "season": "2013-2014",
                    "start": "2013-10-18",
                    "end": "2014-05-10"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-10-13",
                    "end": "2018-05-29"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-10-13",
                    "end": "2019-05-19"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-09-25",
                    "end": "2022-05-21"
                },
                {
                    "season": "2019-2020",
                    "start": "2019-09-21",
                    "end": "2020-09-06"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-09-26",
                    "end": "2021-05-26"
                }
            ]
        },
        {
            "id": 112,
            "name": "Premier League W",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/112.png",
            "country": {
                "id": 51,
                "name": "Belarus",
                "code": "BY",
                "flag": "https://media.api-sports.io/flags/by.svg"
            },
            "seasons": [
                {
                    "season": "2023-2024",
                    "start": "2023-09-23",
                    "end": "2024-04-14"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-09-26",
                    "end": "2022-04-20"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-09-17",
                    "end": "2023-05-03"
                },
                {
                    "season": "2019-2020",
                    "start": "2019-09-29",
                    "end": "2020-03-15"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-10-13",
                    "end": "2019-04-14"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-10-07",
                    "end": "2018-05-19"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-09-27",
                    "end": "2021-04-21"
                }
            ]
        },
        {
            "id": 23,
            "name": "Belgian Cup",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/23.png",
            "country": {
                "id": 7,
                "name": "Belgium",
                "code": "BE",
                "flag": "https://media.api-sports.io/flags/be.svg"
            },
            "seasons": [
                {
                    "season": 2022,
                    "start": "2022-10-28",
                    "end": "2023-03-12"
                },
                {
                    "season": 2019,
                    "start": "2019-10-16",
                    "end": "2020-03-08"
                },
                {
                    "season": 2023,
                    "start": "2023-10-20",
                    "end": "2024-03-10"
                },
                {
                    "season": 2017,
                    "start": "2017-12-07",
                    "end": "2018-03-11"
                },
                {
                    "season": 2016,
                    "start": "2016-12-09",
                    "end": "2017-02-19"
                },
                {
                    "season": 2015,
                    "start": "2015-11-27",
                    "end": "2016-03-12"
                },
                {
                    "season": 2014,
                    "start": "2014-11-25",
                    "end": "2015-04-06"
                },
                {
                    "season": 2013,
                    "start": "2014-01-14",
                    "end": "2014-04-21"
                },
                {
                    "season": 2012,
                    "start": "2012-11-22",
                    "end": "2013-04-01"
                },
                {
                    "season": 2021,
                    "start": "2021-10-27",
                    "end": "2022-03-13"
                },
                {
                    "season": 2018,
                    "start": "2018-09-26",
                    "end": "2019-03-10"
                },
                {
                    "season": 2020,
                    "start": "2020-12-22",
                    "end": "2021-03-21"
                }
            ]
        },
        {
            "id": 24,
            "name": "EuroMillions Basketball League",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/24.png",
            "country": {
                "id": 7,
                "name": "Belgium",
                "code": "BE",
                "flag": "https://media.api-sports.io/flags/be.svg"
            },
            "seasons": [
                {
                    "season": "2014-2015",
                    "start": "2014-10-03",
                    "end": "2015-06-03"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-09-29",
                    "end": "2019-05-27"
                },
                {
                    "season": "2012-2013",
                    "start": "2012-10-06",
                    "end": "2013-06-05"
                },
                {
                    "season": "2019-2020",
                    "start": "2019-09-13",
                    "end": "2020-05-08"
                },
                {
                    "season": "2011-2012",
                    "start": "2011-10-01",
                    "end": "2012-06-08"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-10-01",
                    "end": "2017-06-14"
                },
                {
                    "season": "2010-2011",
                    "start": "2010-10-01",
                    "end": "2011-06-04"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-09-22",
                    "end": "2018-06-13"
                },
                {
                    "season": "2013-2014",
                    "start": "2013-10-04",
                    "end": "2014-06-09"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-11-06",
                    "end": "2021-06-09"
                },
                {
                    "season": "2015-2016",
                    "start": "2015-10-02",
                    "end": "2016-06-08"
                }
            ]
        },
        {
            "id": 374,
            "name": "Pro Basketball League",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/374.png",
            "country": {
                "id": 7,
                "name": "Belgium",
                "code": "BE",
                "flag": "https://media.api-sports.io/flags/be.svg"
            },
            "seasons": [
                {
                    "season": 2022,
                    "start": "2022-05-03",
                    "end": "2022-05-27"
                },
                {
                    "season": 2023,
                    "start": "2023-05-03",
                    "end": "2023-05-27"
                }
            ]
        },
        {
            "id": 25,
            "name": "Top Division Women",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/25.png",
            "country": {
                "id": 7,
                "name": "Belgium",
                "code": "BE",
                "flag": "https://media.api-sports.io/flags/be.svg"
            },
            "seasons": [
                {
                    "season": "2019-2020",
                    "start": "2019-09-14",
                    "end": "2020-03-08"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-09-23",
                    "end": "2024-04-14"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-10-04",
                    "end": "2021-04-28"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-10-15",
                    "end": "2023-04-26"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-09-09",
                    "end": "2018-04-25"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-10-13",
                    "end": "2019-04-27"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-09-25",
                    "end": "2022-04-29"
                }
            ]
        },
        {
            "id": 379,
            "name": "Libobasquet",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/379.png",
            "country": {
                "id": 72,
                "name": "Bolivia",
                "code": "BO",
                "flag": "https://media.api-sports.io/flags/bo.svg"
            },
            "seasons": [
                {
                    "season": 2023,
                    "start": "2023-03-15",
                    "end": "2023-08-16"
                },
                {
                    "season": 2022,
                    "start": "2022-06-07",
                    "end": "2022-09-07"
                },
                {
                    "season": 2024,
                    "start": "2024-03-27",
                    "end": "2024-07-06"
                },
                {
                    "season": 2019,
                    "start": "2019-06-14",
                    "end": "2019-09-11"
                }
            ]
        },
        {
            "id": 123,
            "name": "Prvenstvo BiH",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/123.png",
            "country": {
                "id": 57,
                "name": "Bosnia-and-Herzegovina",
                "code": "BA",
                "flag": "https://media.api-sports.io/flags/ba.svg"
            },
            "seasons": [
                {
                    "season": "2022-2023",
                    "start": "2022-10-29",
                    "end": "2023-05-25"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-10-03",
                    "end": "2021-06-05"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-10-04",
                    "end": "2024-05-04"
                },
                {
                    "season": "2014-2015",
                    "start": "2014-10-25",
                    "end": "2015-06-02"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-10-16",
                    "end": "2022-06-04"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-10-14",
                    "end": "2018-05-23"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-10-22",
                    "end": "2017-05-20"
                },
                {
                    "season": "2015-2016",
                    "start": "2015-10-17",
                    "end": "2016-05-11"
                }
            ]
        },
        {
            "id": 219,
            "name": "Prvenstvo BiH Women",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/219.png",
            "country": {
                "id": 57,
                "name": "Bosnia-and-Herzegovina",
                "code": "BA",
                "flag": "https://media.api-sports.io/flags/ba.svg"
            },
            "seasons": [
                {
                    "season": "2022-2023",
                    "start": "2022-10-29",
                    "end": "2023-05-13"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-10-22",
                    "end": "2022-05-11"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-10-05",
                    "end": "2024-04-09"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-10-02",
                    "end": "2021-05-04"
                }
            ]
        },
        {
            "id": 27,
            "name": "LBF W",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/27.png",
            "country": {
                "id": 8,
                "name": "Brazil",
                "code": "BR",
                "flag": "https://media.api-sports.io/flags/br.svg"
            },
            "seasons": [
                {
                    "season": 2023,
                    "start": "2023-03-08",
                    "end": "2023-09-01"
                },
                {
                    "season": "2018-2019",
                    "start": "2019-03-08",
                    "end": "2019-06-25"
                },
                {
                    "season": 2024,
                    "start": "2024-03-01",
                    "end": "2024-05-14"
                },
                {
                    "season": "2017-2018",
                    "start": "2018-01-12",
                    "end": "2018-06-03"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-12-15",
                    "end": "2017-05-03"
                },
                {
                    "season": "2015-2016",
                    "start": "2015-11-20",
                    "end": "2016-04-26"
                },
                {
                    "season": 2021,
                    "start": "2021-03-08",
                    "end": "2021-08-22"
                },
                {
                    "season": 2020,
                    "start": "2020-03-08",
                    "end": "2020-04-16"
                },
                {
                    "season": "2014-2015",
                    "start": "2014-11-29",
                    "end": "2015-04-27"
                },
                {
                    "season": 2022,
                    "start": "2022-03-08",
                    "end": "2022-08-20"
                }
            ]
        },
        {
            "id": 26,
            "name": "NBB",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/26.png",
            "country": {
                "id": 8,
                "name": "Brazil",
                "code": "BR",
                "flag": "https://media.api-sports.io/flags/br.svg"
            },
            "seasons": [
                {
                    "season": "2008-2009",
                    "start": "2009-01-28",
                    "end": "2009-06-28"
                },
                {
                    "season": "2010-2011",
                    "start": "2010-10-29",
                    "end": "2011-05-25"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-10-13",
                    "end": "2024-04-13"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-11-10",
                    "end": "2021-05-27"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-10-15",
                    "end": "2023-06-10"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-10-13",
                    "end": "2019-05-25"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-11-04",
                    "end": "2018-06-02"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-11-05",
                    "end": "2017-06-17"
                },
                {
                    "season": "2019-2020",
                    "start": "2019-10-12",
                    "end": "2020-04-04"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-10-23",
                    "end": "2022-06-09"
                },
                {
                    "season": "2011-2012",
                    "start": "2011-11-19",
                    "end": "2012-06-02"
                },
                {
                    "season": "2012-2013",
                    "start": "2012-11-23",
                    "end": "2013-06-01"
                },
                {
                    "season": "2013-2014",
                    "start": "2013-11-09",
                    "end": "2014-05-31"
                },
                {
                    "season": "2014-2015",
                    "start": "2014-10-31",
                    "end": "2015-05-30"
                },
                {
                    "season": "2015-2016",
                    "start": "2015-11-02",
                    "end": "2016-06-11"
                }
            ]
        },
        {
            "id": 220,
            "name": "Super 8",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/220.png",
            "country": {
                "id": 8,
                "name": "Brazil",
                "code": "BR",
                "flag": "https://media.api-sports.io/flags/br.svg"
            },
            "seasons": [
                {
                    "season": 2024,
                    "start": "2024-01-27",
                    "end": "2024-02-03"
                },
                {
                    "season": 2022,
                    "start": "2022-01-15",
                    "end": "2022-01-22"
                },
                {
                    "season": 2023,
                    "start": "2023-01-21",
                    "end": "2023-01-28"
                },
                {
                    "season": 2021,
                    "start": "2021-01-15",
                    "end": "2021-01-23"
                }
            ]
        },
        {
            "id": 124,
            "name": "Bulgarian Cup",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/124.png",
            "country": {
                "id": 52,
                "name": "Bulgaria",
                "code": "BG",
                "flag": "https://media.api-sports.io/flags/bg.svg"
            },
            "seasons": [
                {
                    "season": 2024,
                    "start": "2024-03-15",
                    "end": "2024-03-17"
                },
                {
                    "season": 2015,
                    "start": "2015-02-19",
                    "end": "2015-02-22"
                },
                {
                    "season": 2023,
                    "start": "2023-03-21",
                    "end": "2023-03-24"
                },
                {
                    "season": 2017,
                    "start": "2017-02-16",
                    "end": "2017-02-19"
                },
                {
                    "season": 2016,
                    "start": "2016-02-18",
                    "end": "2016-02-21"
                },
                {
                    "season": 2018,
                    "start": "2018-01-10",
                    "end": "2018-03-03"
                },
                {
                    "season": 2019,
                    "start": "2018-12-27",
                    "end": "2019-03-02"
                },
                {
                    "season": 2020,
                    "start": "2020-02-06",
                    "end": "2020-02-09"
                },
                {
                    "season": 2021,
                    "start": "2021-03-11",
                    "end": "2021-03-15"
                },
                {
                    "season": 2014,
                    "start": "2014-02-27",
                    "end": "2014-03-03"
                },
                {
                    "season": 2013,
                    "start": "2013-02-27",
                    "end": "2013-03-01"
                },
                {
                    "season": 2012,
                    "start": "2012-02-15",
                    "end": "2012-02-18"
                },
                {
                    "season": 2011,
                    "start": "2011-03-11",
                    "end": "2011-03-14"
                },
                {
                    "season": 2022,
                    "start": "2022-03-24",
                    "end": "2022-03-28"
                }
            ]
        },
        {
            "id": 113,
            "name": "NBL",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/113.png",
            "country": {
                "id": 52,
                "name": "Bulgaria",
                "code": "BG",
                "flag": "https://media.api-sports.io/flags/bg.svg"
            },
            "seasons": [
                {
                    "season": "2022-2023",
                    "start": "2022-10-08",
                    "end": "2023-06-01"
                },
                {
                    "season": "2010-2011",
                    "start": "2010-10-16",
                    "end": "2011-05-29"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-10-07",
                    "end": "2024-04-24"
                },
                {
                    "season": "2011-2012",
                    "start": "2011-10-15",
                    "end": "2012-05-27"
                },
                {
                    "season": "2019-2020",
                    "start": "2019-10-05",
                    "end": "2020-04-08"
                },
                {
                    "season": "2012-2013",
                    "start": "2012-10-19",
                    "end": "2013-06-03"
                },
                {
                    "season": "2013-2014",
                    "start": "2013-10-19",
                    "end": "2014-06-03"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-10-08",
                    "end": "2022-06-12"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-10-06",
                    "end": "2019-05-27"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-10-10",
                    "end": "2021-05-29"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-10-07",
                    "end": "2018-05-29"
                },
                {
                    "season": "2014-2015",
                    "start": "2014-10-11",
                    "end": "2015-06-01"
                },
                {
                    "season": "2015-2016",
                    "start": "2015-10-10",
                    "end": "2016-05-22"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-10-14",
                    "end": "2017-05-29"
                }
            ]
        },
        {
            "id": 221,
            "name": "Super Cup",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/221.png",
            "country": {
                "id": 52,
                "name": "Bulgaria",
                "code": "BG",
                "flag": "https://media.api-sports.io/flags/bg.svg"
            },
            "seasons": [
                {
                    "season": 2022,
                    "start": "2022-10-03",
                    "end": "2022-10-03"
                },
                {
                    "season": 2021,
                    "start": "2021-10-04",
                    "end": "2021-10-04"
                },
                {
                    "season": 2023,
                    "start": "2023-10-01",
                    "end": "2023-10-01"
                }
            ]
        },
        {
            "id": 222,
            "name": "CEBL",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/222.png",
            "country": {
                "id": 9,
                "name": "Canada",
                "code": "CA",
                "flag": "https://media.api-sports.io/flags/ca.svg"
            },
            "seasons": [
                {
                    "season": 2022,
                    "start": "2022-05-25",
                    "end": "2022-08-14"
                },
                {
                    "season": 2023,
                    "start": "2023-05-24",
                    "end": "2023-08-13"
                },
                {
                    "season": 2021,
                    "start": "2021-06-24",
                    "end": "2021-08-22"
                },
                {
                    "season": 2024,
                    "start": "2024-05-22",
                    "end": "2024-07-29"
                }
            ]
        },
        {
            "id": 29,
            "name": "U Sports",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/29.png",
            "country": {
                "id": 9,
                "name": "Canada",
                "code": "CA",
                "flag": "https://media.api-sports.io/flags/ca.svg"
            },
            "seasons": [
                {
                    "season": "2015-2016",
                    "start": "2015-11-05",
                    "end": "2016-03-21"
                },
                {
                    "season": "2014-2015",
                    "start": "2014-11-01",
                    "end": "2015-03-15"
                },
                {
                    "season": "2019-2020",
                    "start": "2019-10-24",
                    "end": "2020-03-09"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-10-26",
                    "end": "2023-03-12"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-10-21",
                    "end": "2019-03-10"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-10-26",
                    "end": "2024-03-10"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-10-26",
                    "end": "2018-03-11"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-11-03",
                    "end": "2017-03-12"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-10-29",
                    "end": "2022-04-04"
                }
            ]
        },
        {
            "id": 28,
            "name": "NBL",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/28.png",
            "country": {
                "id": 9,
                "name": "Canada",
                "code": "CA",
                "flag": "https://media.api-sports.io/flags/ca.svg"
            },
            "seasons": [
                {
                    "season": "2022-2023",
                    "start": "2023-01-08",
                    "end": "2023-05-26"
                },
                {
                    "season": "2012-2013",
                    "start": "2012-11-02",
                    "end": "2013-04-12"
                },
                {
                    "season": "2021-2022",
                    "start": "2022-02-21",
                    "end": "2022-06-01"
                },
                {
                    "season": "2013-2014",
                    "start": "2013-11-01",
                    "end": "2014-04-17"
                },
                {
                    "season": "2019-2020",
                    "start": "2019-12-26",
                    "end": "2020-04-23"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-11-15",
                    "end": "2019-05-16"
                },
                {
                    "season": "2014-2015",
                    "start": "2014-11-01",
                    "end": "2015-04-30"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-11-18",
                    "end": "2018-05-18"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-12-26",
                    "end": "2017-06-05"
                },
                {
                    "season": "2015-2016",
                    "start": "2015-12-26",
                    "end": "2016-06-13"
                }
            ]
        },
        {
            "id": 405,
            "name": "Super League",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/405.png",
            "country": {
                "id": 9,
                "name": "Canada",
                "code": "CA",
                "flag": "https://media.api-sports.io/flags/ca.svg"
            },
            "seasons": [
                {
                    "season": 2023,
                    "start": "2023-12-29",
                    "end": "2024-05-01"
                }
            ]
        },
        {
            "id": 390,
            "name": "Copa Chile",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/390.png",
            "country": {
                "id": 53,
                "name": "Chile",
                "code": "CL",
                "flag": "https://media.api-sports.io/flags/cl.svg"
            },
            "seasons": [
                {
                    "season": 2023,
                    "start": "2023-09-29",
                    "end": "2023-12-23"
                },
                {
                    "season": 2022,
                    "start": "2022-09-23",
                    "end": "2022-12-19"
                }
            ]
        },
        {
            "id": 223,
            "name": "Copa LNB",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/223.png",
            "country": {
                "id": 53,
                "name": "Chile",
                "code": "CL",
                "flag": "https://media.api-sports.io/flags/cl.svg"
            },
            "seasons": [
                {
                    "season": 2022,
                    "start": "2021-01-16",
                    "end": "2021-05-23"
                }
            ]
        },
        {
            "id": 382,
            "name": "DIMAYOR",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/382.png",
            "country": {
                "id": 53,
                "name": "Chile",
                "code": "CL",
                "flag": "https://media.api-sports.io/flags/cl.svg"
            },
            "seasons": [
                {
                    "season": "2012-2013",
                    "start": "2012-09-22",
                    "end": "2012-12-10"
                }
            ]
        },
        {
            "id": 114,
            "name": "LNB",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/114.png",
            "country": {
                "id": 53,
                "name": "Chile",
                "code": "CL",
                "flag": "https://media.api-sports.io/flags/cl.svg"
            },
            "seasons": [
                {
                    "season": "2022-2023",
                    "start": "2023-01-13",
                    "end": "2023-07-16"
                },
                {
                    "season": "2015-2016",
                    "start": "2015-10-03",
                    "end": "2016-02-28"
                },
                {
                    "season": "2023-2024",
                    "start": "2024-01-12",
                    "end": "2024-05-06"
                },
                {
                    "season": "2020-2021",
                    "start": "2021-02-27",
                    "end": "2021-09-12"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-10-06",
                    "end": "2019-05-05"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-09-30",
                    "end": "2018-04-21"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-10-01",
                    "end": "2017-05-06"
                },
                {
                    "season": "2021-2022",
                    "start": "2022-01-08",
                    "end": "2022-06-20"
                },
                {
                    "season": "2014-2015",
                    "start": "2014-10-04",
                    "end": "2015-02-14"
                },
                {
                    "season": "2019-2020",
                    "start": "2019-10-04",
                    "end": "2020-03-16"
                }
            ]
        },
        {
            "id": 224,
            "name": "LNB 2",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/224.png",
            "country": {
                "id": 53,
                "name": "Chile",
                "code": "CL",
                "flag": "https://media.api-sports.io/flags/cl.svg"
            },
            "seasons": [
                {
                    "season": "2024-2025",
                    "start": "2024-03-23",
                    "end": "2024-07-22"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-09-24",
                    "end": "2022-01-05"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-04-15",
                    "end": "2023-09-03"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-05-01",
                    "end": "2022-08-28"
                }
            ]
        },
        {
            "id": 406,
            "name": "Supercopa",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/406.png",
            "country": {
                "id": 53,
                "name": "Chile",
                "code": "CL",
                "flag": "https://media.api-sports.io/flags/cl.svg"
            },
            "seasons": [
                {
                    "season": 2024,
                    "start": "2024-01-05",
                    "end": "2024-01-07"
                }
            ]
        },
        {
            "id": 31,
            "name": "CBA",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/31.png",
            "country": {
                "id": 11,
                "name": "China",
                "code": "CN",
                "flag": "https://media.api-sports.io/flags/cn.svg"
            },
            "seasons": [
                {
                    "season": "2020-2021",
                    "start": "2020-10-17",
                    "end": "2021-05-01"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-10-21",
                    "end": "2024-04-14"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-10-16",
                    "end": "2022-04-26"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-10-06",
                    "end": "2023-05-15"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-10-29",
                    "end": "2017-04-07"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-10-28",
                    "end": "2018-04-22"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-10-21",
                    "end": "2019-05-03"
                },
                {
                    "season": "2015-2016",
                    "start": "2015-10-31",
                    "end": "2016-03-20"
                },
                {
                    "season": "2014-2015",
                    "start": "2014-11-01",
                    "end": "2015-03-22"
                },
                {
                    "season": "2013-2014",
                    "start": "2013-11-08",
                    "end": "2014-03-30"
                },
                {
                    "season": "2012-2013",
                    "start": "2012-11-24",
                    "end": "2013-03-29"
                },
                {
                    "season": "2011-2012",
                    "start": "2011-11-19",
                    "end": "2012-03-30"
                },
                {
                    "season": "2019-2020",
                    "start": "2019-11-01",
                    "end": "2020-08-15"
                }
            ]
        },
        {
            "id": 125,
            "name": "WCBA Women",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/125.png",
            "country": {
                "id": 11,
                "name": "China",
                "code": "CN",
                "flag": "https://media.api-sports.io/flags/cn.svg"
            },
            "seasons": [
                {
                    "season": "2023-2024",
                    "start": "2023-10-17",
                    "end": "2024-04-16"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-11-14",
                    "end": "2022-01-02"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-11-30",
                    "end": "2023-03-12"
                },
                {
                    "season": "2012-2013",
                    "start": "2012-10-27",
                    "end": "2013-02-05"
                },
                {
                    "season": "2015-2016",
                    "start": "2015-10-16",
                    "end": "2016-03-08"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-10-16",
                    "end": "2017-03-02"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-11-13",
                    "end": "2018-03-14"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-10-18",
                    "end": "2019-03-23"
                },
                {
                    "season": "2014-2015",
                    "start": "2014-10-28",
                    "end": "2015-03-05"
                },
                {
                    "season": "2013-2014",
                    "start": "2013-11-19",
                    "end": "2014-03-04"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-10-01",
                    "end": "2021-01-03"
                }
            ]
        },
        {
            "id": 225,
            "name": "LBP",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/225.png",
            "country": {
                "id": 64,
                "name": "Colombia",
                "code": "CO",
                "flag": "https://media.api-sports.io/flags/co.svg"
            },
            "seasons": [
                {
                    "season": "2023-2024",
                    "start": "2023-04-29",
                    "end": "2023-11-20"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-10-23",
                    "end": "2021-12-14"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-04-21",
                    "end": "2022-11-25"
                }
            ]
        },
        {
            "id": 30,
            "name": "Premijer liga",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/30.png",
            "country": {
                "id": 10,
                "name": "Croatia",
                "code": "HR",
                "flag": "https://media.api-sports.io/flags/hr.svg"
            },
            "seasons": [
                {
                    "season": "2015-2016",
                    "start": "2015-10-03",
                    "end": "2016-06-03"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-10-05",
                    "end": "2017-06-01"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-10-06",
                    "end": "2018-06-03"
                },
                {
                    "season": "2014-2015",
                    "start": "2014-10-04",
                    "end": "2015-06-13"
                },
                {
                    "season": "2013-2014",
                    "start": "2013-10-11",
                    "end": "2014-06-10"
                },
                {
                    "season": "2012-2013",
                    "start": "2012-10-05",
                    "end": "2013-06-04"
                },
                {
                    "season": "2011-2012",
                    "start": "2011-10-08",
                    "end": "2012-06-05"
                },
                {
                    "season": "2010-2011",
                    "start": "2010-10-09",
                    "end": "2011-06-01"
                },
                {
                    "season": "2008-2009",
                    "start": "2009-03-24",
                    "end": "2009-06-05"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-09-28",
                    "end": "2024-04-27"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-09-18",
                    "end": "2021-06-05"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-09-30",
                    "end": "2023-06-04"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-10-06",
                    "end": "2019-05-30"
                },
                {
                    "season": "2019-2020",
                    "start": "2019-09-28",
                    "end": "2020-03-15"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-09-18",
                    "end": "2022-06-10"
                }
            ]
        },
        {
            "id": 126,
            "name": "Croatian Cup",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/126.png",
            "country": {
                "id": 10,
                "name": "Croatia",
                "code": "HR",
                "flag": "https://media.api-sports.io/flags/hr.svg"
            },
            "seasons": [
                {
                    "season": "2022-2023",
                    "start": "2022-12-07",
                    "end": "2023-02-18"
                },
                {
                    "season": "2012-2013",
                    "start": "2013-02-06",
                    "end": "2013-02-07"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-11-29",
                    "end": "2024-02-17"
                },
                {
                    "season": "2013-2014",
                    "start": "2013-12-27",
                    "end": "2014-02-27"
                },
                {
                    "season": "2014-2015",
                    "start": "2014-12-30",
                    "end": "2015-02-19"
                },
                {
                    "season": "2015-2016",
                    "start": "2015-12-06",
                    "end": "2016-02-18"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-10-04",
                    "end": "2017-02-18"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-11-07",
                    "end": "2018-02-17"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-11-28",
                    "end": "2019-02-16"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-11-23",
                    "end": "2021-02-13"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-11-24",
                    "end": "2022-02-19"
                }
            ]
        },
        {
            "id": 226,
            "name": "Premijer Liga Women",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/226.png",
            "country": {
                "id": 10,
                "name": "Croatia",
                "code": "HR",
                "flag": "https://media.api-sports.io/flags/hr.svg"
            },
            "seasons": [
                {
                    "season": "2023-2024",
                    "start": "2023-09-30",
                    "end": "2024-04-20"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-10-02",
                    "end": "2022-05-14"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-10-01",
                    "end": "2023-05-09"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-10-03",
                    "end": "2021-05-09"
                }
            ]
        },
        {
            "id": 227,
            "name": "Prva Liga",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/227.png",
            "country": {
                "id": 10,
                "name": "Croatia",
                "code": "HR",
                "flag": "https://media.api-sports.io/flags/hr.svg"
            },
            "seasons": [
                {
                    "season": "2023-2024",
                    "start": "2023-10-07",
                    "end": "2024-04-16"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-09-25",
                    "end": "2022-05-17"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-10-01",
                    "end": "2023-05-17"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-10-10",
                    "end": "2021-05-08"
                }
            ]
        },
        {
            "id": 115,
            "name": "Division A",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/115.png",
            "country": {
                "id": 54,
                "name": "Cyprus",
                "code": "CY",
                "flag": "https://media.api-sports.io/flags/cy.svg"
            },
            "seasons": [
                {
                    "season": "2023-2024",
                    "start": "2023-10-06",
                    "end": "2024-04-22"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-10-29",
                    "end": "2017-05-05"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-10-07",
                    "end": "2023-05-22"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-10-14",
                    "end": "2018-05-04"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-10-13",
                    "end": "2019-05-04"
                },
                {
                    "season": "2013-2014",
                    "start": "2013-11-01",
                    "end": "2014-03-18"
                },
                {
                    "season": "2019-2020",
                    "start": "2019-10-12",
                    "end": "2020-04-04"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-10-03",
                    "end": "2021-04-21"
                },
                {
                    "season": "2010-2011",
                    "start": "2010-10-22",
                    "end": "2011-04-19"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-10-01",
                    "end": "2022-05-28"
                },
                {
                    "season": "2011-2012",
                    "start": "2011-10-21",
                    "end": "2012-04-07"
                },
                {
                    "season": "2015-2016",
                    "start": "2015-11-06",
                    "end": "2016-05-03"
                },
                {
                    "season": "2014-2015",
                    "start": "2014-10-31",
                    "end": "2015-04-21"
                },
                {
                    "season": "2012-2013",
                    "start": "2012-10-26",
                    "end": "2013-04-05"
                }
            ]
        },
        {
            "id": 228,
            "name": "1. Liga",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/228.png",
            "country": {
                "id": 12,
                "name": "Czech Republic",
                "code": "CZ",
                "flag": "https://media.api-sports.io/flags/cz.svg"
            },
            "seasons": [
                {
                    "season": "2023-2024",
                    "start": "2023-09-15",
                    "end": "2024-04-10"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-09-15",
                    "end": "2022-04-27"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-09-18",
                    "end": "2020-10-11"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-09-16",
                    "end": "2023-04-23"
                }
            ]
        },
        {
            "id": 127,
            "name": "Czech Cup",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/127.png",
            "country": {
                "id": 12,
                "name": "Czech Republic",
                "code": "CZ",
                "flag": "https://media.api-sports.io/flags/cz.svg"
            },
            "seasons": [
                {
                    "season": "2014-2015",
                    "start": "2015-01-13",
                    "end": "2015-02-21"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-10-17",
                    "end": "2019-02-10"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-12-18",
                    "end": "2024-02-01"
                },
                {
                    "season": "2020-2021",
                    "start": "2021-01-20",
                    "end": "2021-02-14"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-12-08",
                    "end": "2023-03-19"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-10-17",
                    "end": "2018-02-18"
                },
                {
                    "season": "2010-2011",
                    "start": "2011-03-17",
                    "end": "2011-03-19"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-11-15",
                    "end": "2017-02-18"
                },
                {
                    "season": "2011-2012",
                    "start": "2012-02-16",
                    "end": "2012-02-18"
                },
                {
                    "season": "2015-2016",
                    "start": "2015-11-12",
                    "end": "2016-02-13"
                },
                {
                    "season": "2012-2013",
                    "start": "2013-02-06",
                    "end": "2013-02-08"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-12-14",
                    "end": "2022-03-13"
                },
                {
                    "season": "2013-2014",
                    "start": "2014-02-06",
                    "end": "2014-02-08"
                }
            ]
        },
        {
            "id": 128,
            "name": "Czech Cup Women",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/128.png",
            "country": {
                "id": 12,
                "name": "Czech Republic",
                "code": "CZ",
                "flag": "https://media.api-sports.io/flags/cz.svg"
            },
            "seasons": [
                {
                    "season": "2011-2012",
                    "start": "2011-11-16",
                    "end": "2012-02-04"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-11-30",
                    "end": "2023-02-26"
                },
                {
                    "season": "2020-2021",
                    "start": "2021-01-27",
                    "end": "2021-04-01"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-11-15",
                    "end": "2024-01-09"
                },
                {
                    "season": "2012-2013",
                    "start": "2012-11-13",
                    "end": "2013-03-10"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-11-14",
                    "end": "2019-03-10"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-11-10",
                    "end": "2018-02-26"
                },
                {
                    "season": "2016-2017",
                    "start": "2017-01-10",
                    "end": "2017-02-27"
                },
                {
                    "season": "2015-2016",
                    "start": "2016-01-20",
                    "end": "2016-02-29"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-12-15",
                    "end": "2022-02-27"
                },
                {
                    "season": "2014-2015",
                    "start": "2014-10-12",
                    "end": "2015-03-15"
                },
                {
                    "season": "2013-2014",
                    "start": "2013-10-28",
                    "end": "2014-02-23"
                }
            ]
        },
        {
            "id": 32,
            "name": "NBL",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/32.png",
            "country": {
                "id": 12,
                "name": "Czech Republic",
                "code": "CZ",
                "flag": "https://media.api-sports.io/flags/cz.svg"
            },
            "seasons": [
                {
                    "season": "2023-2024",
                    "start": "2023-09-23",
                    "end": "2024-04-21"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-09-26",
                    "end": "2019-05-28"
                },
                {
                    "season": "2019-2020",
                    "start": "2019-10-04",
                    "end": "2020-04-08"
                },
                {
                    "season": "2010-2011",
                    "start": "2010-10-07",
                    "end": "2011-06-10"
                },
                {
                    "season": "2009-2010",
                    "start": "2009-10-03",
                    "end": "2010-06-05"
                },
                {
                    "season": "2008-2009",
                    "start": "2008-10-08",
                    "end": "2009-05-30"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-10-01",
                    "end": "2023-06-01"
                },
                {
                    "season": "2015-2016",
                    "start": "2015-10-10",
                    "end": "2016-05-23"
                },
                {
                    "season": "2014-2015",
                    "start": "2014-09-22",
                    "end": "2015-05-20"
                },
                {
                    "season": "2013-2014",
                    "start": "2013-10-07",
                    "end": "2014-05-28"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-09-17",
                    "end": "2022-05-26"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-09-11",
                    "end": "2021-05-24"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-10-02",
                    "end": "2018-05-24"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-09-24",
                    "end": "2017-05-23"
                },
                {
                    "season": "2012-2013",
                    "start": "2012-10-03",
                    "end": "2013-05-30"
                },
                {
                    "season": "2011-2012",
                    "start": "2011-09-23",
                    "end": "2012-05-26"
                }
            ]
        },
        {
            "id": 33,
            "name": "ZBL W",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/33.png",
            "country": {
                "id": 12,
                "name": "Czech Republic",
                "code": "CZ",
                "flag": "https://media.api-sports.io/flags/cz.svg"
            },
            "seasons": [
                {
                    "season": "2022-2024",
                    "start": "2023-09-27",
                    "end": "2024-04-09"
                },
                {
                    "season": "2012-2013",
                    "start": "2012-09-26",
                    "end": "2013-05-18"
                },
                {
                    "season": "2011-2012",
                    "start": "2011-09-21",
                    "end": "2012-04-24"
                },
                {
                    "season": "2010-2011",
                    "start": "2010-10-20",
                    "end": "2011-04-27"
                },
                {
                    "season": "2013-2014",
                    "start": "2013-09-21",
                    "end": "2014-05-06"
                },
                {
                    "season": "2014-2015",
                    "start": "2014-10-22",
                    "end": "2015-05-09"
                },
                {
                    "season": "2015-2016",
                    "start": "2015-09-19",
                    "end": "2016-04-27"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-09-21",
                    "end": "2017-04-26"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-09-30",
                    "end": "2023-05-18"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-09-24",
                    "end": "2022-04-19"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-09-30",
                    "end": "2019-04-24"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-09-25",
                    "end": "2021-04-16"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-09-20",
                    "end": "2018-05-02"
                },
                {
                    "season": "2019-2020",
                    "start": "2019-09-27",
                    "end": "2020-03-15"
                }
            ]
        },
        {
            "id": 34,
            "name": "Canal Digital Ligaen",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/34.png",
            "country": {
                "id": 13,
                "name": "Denmark",
                "code": "DK",
                "flag": "https://media.api-sports.io/flags/dk.svg"
            },
            "seasons": [
                {
                    "season": "2023-2024",
                    "start": "2023-09-14",
                    "end": "2024-04-28"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-09-17",
                    "end": "2023-05-22"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-10-02",
                    "end": "2021-05-27"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-09-18",
                    "end": "2018-05-07"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-09-30",
                    "end": "2017-05-08"
                },
                {
                    "season": "2015-2016",
                    "start": "2015-10-03",
                    "end": "2016-05-09"
                },
                {
                    "season": "2014-2015",
                    "start": "2014-10-08",
                    "end": "2015-05-15"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-09-25",
                    "end": "2019-05-13"
                },
                {
                    "season": "2013-2014",
                    "start": "2013-09-24",
                    "end": "2014-05-05"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-09-22",
                    "end": "2022-05-19"
                },
                {
                    "season": "2019-2020",
                    "start": "2019-09-22",
                    "end": "2020-03-23"
                },
                {
                    "season": "2012-2013",
                    "start": "2012-09-22",
                    "end": "2013-05-02"
                },
                {
                    "season": "2011-2012",
                    "start": "2011-09-24",
                    "end": "2012-04-30"
                },
                {
                    "season": "2010-2011",
                    "start": "2010-09-25",
                    "end": "2011-04-18"
                }
            ]
        },
        {
            "id": 35,
            "name": "Dameligaen W",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/35.png",
            "country": {
                "id": 13,
                "name": "Denmark",
                "code": "DK",
                "flag": "https://media.api-sports.io/flags/dk.svg"
            },
            "seasons": [
                {
                    "season": "2023-2024",
                    "start": "2023-09-23",
                    "end": "2024-04-10"
                },
                {
                    "season": "2012-2013",
                    "start": "2012-09-22",
                    "end": "2013-04-09"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-09-17",
                    "end": "2023-03-16"
                },
                {
                    "season": "2019-2020",
                    "start": "2019-09-28",
                    "end": "2020-03-15"
                },
                {
                    "season": "2010-2011",
                    "start": "2010-09-26",
                    "end": "2011-04-14"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-10-10",
                    "end": "2019-05-04"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-10-08",
                    "end": "2017-04-28"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-10-21",
                    "end": "2021-04-21"
                },
                {
                    "season": "2015-2016",
                    "start": "2015-10-03",
                    "end": "2016-04-26"
                },
                {
                    "season": "2014-2015",
                    "start": "2014-09-27",
                    "end": "2015-04-26"
                },
                {
                    "season": "2013-2014",
                    "start": "2013-09-28",
                    "end": "2014-04-15"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-09-29",
                    "end": "2018-04-28"
                },
                {
                    "season": "2011-2012",
                    "start": "2011-09-24",
                    "end": "2012-04-25"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-09-25",
                    "end": "2022-04-26"
                }
            ]
        },
        {
            "id": 129,
            "name": "Denmark Cup",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/129.png",
            "country": {
                "id": 13,
                "name": "Denmark",
                "code": "DK",
                "flag": "https://media.api-sports.io/flags/dk.svg"
            },
            "seasons": [
                {
                    "season": "2022-2023",
                    "start": "2022-12-16",
                    "end": "2023-03-25"
                },
                {
                    "season": "2013-2014",
                    "start": "2013-10-10",
                    "end": "2014-01-19"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-11-11",
                    "end": "2024-01-21"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-12-19",
                    "end": "2021-04-03"
                },
                {
                    "season": "2018-2019",
                    "start": "2019-01-05",
                    "end": "2019-02-02"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-10-10",
                    "end": "2018-01-27"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-10-26",
                    "end": "2017-01-28"
                },
                {
                    "season": "2014-2015",
                    "start": "2014-10-15",
                    "end": "2015-01-18"
                },
                {
                    "season": "2015-2016",
                    "start": "2015-10-20",
                    "end": "2016-01-16"
                },
                {
                    "season": "2012-2013",
                    "start": "2012-10-23",
                    "end": "2013-01-13"
                },
                {
                    "season": "2011-2012",
                    "start": "2011-09-28",
                    "end": "2012-01-08"
                },
                {
                    "season": "2010-2011",
                    "start": "2010-10-26",
                    "end": "2011-01-16"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-12-11",
                    "end": "2022-04-17"
                }
            ]
        },
        {
            "id": 130,
            "name": "Denmark Cup Women",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/130.png",
            "country": {
                "id": 13,
                "name": "Denmark",
                "code": "DK",
                "flag": "https://media.api-sports.io/flags/dk.svg"
            },
            "seasons": [
                {
                    "season": "2022-2023",
                    "start": "2022-12-10",
                    "end": "2023-03-12"
                },
                {
                    "season": "2021-2022",
                    "start": "2022-01-14",
                    "end": "2022-03-06"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-11-18",
                    "end": "2024-01-14"
                },
                {
                    "season": "2015-2016",
                    "start": "2015-10-05",
                    "end": "2016-01-16"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-10-10",
                    "end": "2017-01-28"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-09-27",
                    "end": "2018-01-27"
                },
                {
                    "season": "2018-2019",
                    "start": "2019-01-05",
                    "end": "2019-02-02"
                },
                {
                    "season": "2010-2011",
                    "start": "2010-10-27",
                    "end": "2011-01-16"
                },
                {
                    "season": "2011-2012",
                    "start": "2011-09-28",
                    "end": "2012-01-08"
                },
                {
                    "season": "2012-2013",
                    "start": "2012-10-07",
                    "end": "2013-01-13"
                },
                {
                    "season": "2013-2014",
                    "start": "2013-10-22",
                    "end": "2014-01-19"
                },
                {
                    "season": "2014-2015",
                    "start": "2014-10-07",
                    "end": "2015-01-18"
                },
                {
                    "season": "2020-2021",
                    "start": "2021-01-10",
                    "end": "2021-04-03"
                }
            ]
        },
        {
            "id": 380,
            "name": "LNB",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/380.png",
            "country": {
                "id": 73,
                "name": "Dominican-Republic",
                "code": "DO",
                "flag": "https://media.api-sports.io/flags/do.svg"
            },
            "seasons": [
                {
                    "season": 2023,
                    "start": "2023-05-09",
                    "end": "2023-08-04"
                },
                {
                    "season": 2022,
                    "start": "2022-05-24",
                    "end": "2022-08-13"
                }
            ]
        },
        {
            "id": 131,
            "name": "Estonia Cup",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/131.png",
            "country": {
                "id": 14,
                "name": "Estonia",
                "code": "EE",
                "flag": "https://media.api-sports.io/flags/ee.svg"
            },
            "seasons": [
                {
                    "season": 2013,
                    "start": "2013-12-21",
                    "end": "2013-12-22"
                },
                {
                    "season": 2014,
                    "start": "2014-09-24",
                    "end": "2014-12-21"
                },
                {
                    "season": 2015,
                    "start": "2015-09-30",
                    "end": "2015-12-20"
                },
                {
                    "season": 2016,
                    "start": "2016-09-27",
                    "end": "2016-12-18"
                }
            ]
        },
        {
            "id": 36,
            "name": "Korvpalli Meistriliiga",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/36.png",
            "country": {
                "id": 14,
                "name": "Estonia",
                "code": "EE",
                "flag": "https://media.api-sports.io/flags/ee.svg"
            },
            "seasons": [
                {
                    "season": "2022-2023",
                    "start": "2023-04-12",
                    "end": "2023-05-27"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-10-05",
                    "end": "2018-05-24"
                },
                {
                    "season": "2021-2022",
                    "start": "2022-03-08",
                    "end": "2022-05-26"
                },
                {
                    "season": "2011-2012",
                    "start": "2011-10-05",
                    "end": "2012-05-17"
                },
                {
                    "season": "2010-2011",
                    "start": "2010-10-06",
                    "end": "2011-05-14"
                },
                {
                    "season": "2020-2021",
                    "start": "2021-02-19",
                    "end": "2021-05-17"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-10-02",
                    "end": "2017-05-22"
                },
                {
                    "season": "2018-2019",
                    "start": "2019-04-09",
                    "end": "2019-05-22"
                },
                {
                    "season": "2015-2016",
                    "start": "2015-10-07",
                    "end": "2016-05-27"
                },
                {
                    "season": "2014-2015",
                    "start": "2014-10-04",
                    "end": "2015-05-22"
                },
                {
                    "season": "2013-2014",
                    "start": "2013-09-27",
                    "end": "2014-05-21"
                },
                {
                    "season": "2012-2013",
                    "start": "2012-10-10",
                    "end": "2013-05-17"
                }
            ]
        },
        {
            "id": 198,
            "name": "NLB",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/198.png",
            "country": {
                "id": 55,
                "name": "Europe",
                "code": " ",
                "flag": "https://media.api-sports.io/flags/ .svg"
            },
            "seasons": [
                {
                    "season": 2013,
                    "start": "2013-10-04",
                    "end": "2014-04-27"
                },
                {
                    "season": 2020,
                    "start": "2020-10-02",
                    "end": "2021-05-28"
                },
                {
                    "season": 2012,
                    "start": "2012-09-28",
                    "end": "2013-04-27"
                },
                {
                    "season": 2018,
                    "start": "2018-09-28",
                    "end": "2019-04-23"
                },
                {
                    "season": 2011,
                    "start": "2011-10-01",
                    "end": "2012-04-30"
                },
                {
                    "season": 2017,
                    "start": "2017-09-29",
                    "end": "2018-04-14"
                },
                {
                    "season": 2014,
                    "start": "2014-10-03",
                    "end": "2015-04-30"
                },
                {
                    "season": 2015,
                    "start": "2015-10-01",
                    "end": "2016-05-02"
                },
                {
                    "season": 2023,
                    "start": "2023-09-29",
                    "end": "2024-04-22"
                },
                {
                    "season": 2022,
                    "start": "2022-09-30",
                    "end": "2023-06-22"
                },
                {
                    "season": 2016,
                    "start": "2016-09-29",
                    "end": "2017-04-13"
                },
                {
                    "season": 2021,
                    "start": "2021-09-24",
                    "end": "2022-06-06"
                },
                {
                    "season": 2008,
                    "start": "2008-10-04",
                    "end": "2009-04-18"
                },
                {
                    "season": 2010,
                    "start": "2010-10-08",
                    "end": "2011-04-21"
                },
                {
                    "season": 2009,
                    "start": "2009-10-09",
                    "end": "2010-04-25"
                }
            ]
        },
        {
            "id": 203,
            "name": "ABA League 2",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/203.png",
            "country": {
                "id": 55,
                "name": "Europe",
                "code": " ",
                "flag": "https://media.api-sports.io/flags/ .svg"
            },
            "seasons": [
                {
                    "season": 2022,
                    "start": "2022-10-17",
                    "end": "2023-04-16"
                },
                {
                    "season": 2021,
                    "start": "2021-10-11",
                    "end": "2022-04-17"
                },
                {
                    "season": 2023,
                    "start": "2023-09-21",
                    "end": "2024-04-17"
                },
                {
                    "season": 2020,
                    "start": "2020-11-09",
                    "end": "2021-05-06"
                },
                {
                    "season": 2018,
                    "start": "2018-09-27",
                    "end": "2019-04-04"
                },
                {
                    "season": 2017,
                    "start": "2017-10-10",
                    "end": "2018-04-04"
                }
            ]
        },
        {
            "id": 365,
            "name": "ABA Supercup",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/365.png",
            "country": {
                "id": 55,
                "name": "Europe",
                "code": " ",
                "flag": "https://media.api-sports.io/flags/ .svg"
            },
            "seasons": [
                {
                    "season": 2018,
                    "start": "2018-09-20",
                    "end": "2018-09-23"
                },
                {
                    "season": 2023,
                    "start": "2023-09-18",
                    "end": "2023-09-20"
                },
                {
                    "season": 2019,
                    "start": "2019-09-26",
                    "end": "2019-09-29"
                },
                {
                    "season": 2017,
                    "start": "2017-09-20",
                    "end": "2017-09-23"
                }
            ]
        },
        {
            "id": 330,
            "name": "Acropolis Tournament",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/330.png",
            "country": {
                "id": 55,
                "name": "Europe",
                "code": " ",
                "flag": "https://media.api-sports.io/flags/ .svg"
            },
            "seasons": [
                {
                    "season": 2011,
                    "start": "2011-08-23",
                    "end": "2011-08-25"
                },
                {
                    "season": 2017,
                    "start": "2017-08-23",
                    "end": "2017-08-25"
                },
                {
                    "season": 2013,
                    "start": "2013-08-27",
                    "end": "2013-08-29"
                },
                {
                    "season": 2019,
                    "start": "2019-08-16",
                    "end": "2019-08-18"
                },
                {
                    "season": 2010,
                    "start": "2010-08-17",
                    "end": "2010-08-19"
                }
            ]
        },
        {
            "id": 200,
            "name": "Alpe Adria Cup",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/200.png",
            "country": {
                "id": 55,
                "name": "Europe",
                "code": " ",
                "flag": "https://media.api-sports.io/flags/ .svg"
            },
            "seasons": [
                {
                    "season": 2021,
                    "start": "2021-09-23",
                    "end": "2022-03-17"
                },
                {
                    "season": 2016,
                    "start": "2016-09-29",
                    "end": "2017-04-24"
                },
                {
                    "season": 2019,
                    "start": "2019-09-24",
                    "end": "2020-09-09"
                },
                {
                    "season": 2022,
                    "start": "2022-09-22",
                    "end": "2023-03-16"
                },
                {
                    "season": 2023,
                    "start": "2023-10-18",
                    "end": "2024-03-13"
                },
                {
                    "season": 2017,
                    "start": "2017-09-15",
                    "end": "2018-04-03"
                },
                {
                    "season": 2015,
                    "start": "2015-09-29",
                    "end": "2016-03-02"
                },
                {
                    "season": 2018,
                    "start": "2018-09-26",
                    "end": "2019-04-15"
                }
            ]
        },
        {
            "id": 196,
            "name": "Baltic League",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/196.png",
            "country": {
                "id": 55,
                "name": "Europe",
                "code": " ",
                "flag": "https://media.api-sports.io/flags/ .svg"
            },
            "seasons": [
                {
                    "season": 2017,
                    "start": "2017-10-24",
                    "end": "2018-04-05"
                },
                {
                    "season": 2011,
                    "start": "2011-09-30",
                    "end": "2012-04-29"
                },
                {
                    "season": 2016,
                    "start": "2016-10-11",
                    "end": "2017-04-06"
                },
                {
                    "season": 2015,
                    "start": "2015-10-13",
                    "end": "2016-04-06"
                },
                {
                    "season": 2014,
                    "start": "2014-10-14",
                    "end": "2015-04-02"
                },
                {
                    "season": 2013,
                    "start": "2013-10-06",
                    "end": "2014-04-13"
                },
                {
                    "season": 2012,
                    "start": "2012-10-02",
                    "end": "2013-04-06"
                },
                {
                    "season": 2010,
                    "start": "2010-09-29",
                    "end": "2011-04-15"
                },
                {
                    "season": 2009,
                    "start": "2009-09-29",
                    "end": "2010-04-24"
                }
            ]
        },
        {
            "id": 371,
            "name": "Baltic League Cup",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/371.png",
            "country": {
                "id": 55,
                "name": "Europe",
                "code": " ",
                "flag": "https://media.api-sports.io/flags/ .svg"
            },
            "seasons": [
                {
                    "season": 2016,
                    "start": "2016-09-24",
                    "end": "2016-09-25"
                },
                {
                    "season": 2011,
                    "start": "2011-09-24",
                    "end": "2011-09-25"
                },
                {
                    "season": 2012,
                    "start": "2012-09-28",
                    "end": "2012-09-29"
                },
                {
                    "season": 2010,
                    "start": "2010-09-24",
                    "end": "2010-09-25"
                },
                {
                    "season": 2013,
                    "start": "2013-09-28",
                    "end": "2013-09-29"
                },
                {
                    "season": 2014,
                    "start": "2014-09-27",
                    "end": "2014-09-28"
                }
            ]
        },
        {
            "id": 372,
            "name": "Baltic League Women",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/372.png",
            "country": {
                "id": 55,
                "name": "Europe",
                "code": " ",
                "flag": "https://media.api-sports.io/flags/ .svg"
            },
            "seasons": [
                {
                    "season": "2017-2018",
                    "start": "2017-10-07",
                    "end": "2018-03-18"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-10-04",
                    "end": "2017-04-30"
                }
            ]
        },
        {
            "id": 351,
            "name": "ERGO Supercup",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/351.png",
            "country": {
                "id": 55,
                "name": "Europe",
                "code": " ",
                "flag": "https://media.api-sports.io/flags/ .svg"
            },
            "seasons": [
                {
                    "season": 2011,
                    "start": "2011-08-19",
                    "end": "2011-08-21"
                },
                {
                    "season": 2013,
                    "start": "2013-08-23",
                    "end": "2013-08-25"
                },
                {
                    "season": 2014,
                    "start": "2014-08-01",
                    "end": "2014-08-03"
                },
                {
                    "season": 2023,
                    "start": "2023-08-12",
                    "end": "2023-08-13"
                },
                {
                    "season": 2022,
                    "start": "2022-08-19",
                    "end": "2022-08-20"
                },
                {
                    "season": 2017,
                    "start": "2017-08-18",
                    "end": "2017-08-20"
                },
                {
                    "season": 2015,
                    "start": "2015-08-21",
                    "end": "2015-08-23"
                },
                {
                    "season": 2016,
                    "start": "2016-08-19",
                    "end": "2016-08-21"
                }
            ]
        },
        {
            "id": 195,
            "name": "BIBL",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/195.png",
            "country": {
                "id": 55,
                "name": "Europe",
                "code": " ",
                "flag": "https://media.api-sports.io/flags/ .svg"
            },
            "seasons": [
                {
                    "season": 2009,
                    "start": "2009-10-10",
                    "end": "2010-04-15"
                },
                {
                    "season": 2021,
                    "start": "2021-10-12",
                    "end": "2022-05-01"
                },
                {
                    "season": 2011,
                    "start": "2011-10-11",
                    "end": "2012-04-23"
                },
                {
                    "season": 2020,
                    "start": "2020-10-13",
                    "end": "2021-04-29"
                },
                {
                    "season": 2013,
                    "start": "2013-10-15",
                    "end": "2014-04-27"
                },
                {
                    "season": 2010,
                    "start": "2010-10-02",
                    "end": "2011-04-17"
                },
                {
                    "season": 2014,
                    "start": "2014-10-14",
                    "end": "2015-04-29"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-10-27",
                    "end": "2023-04-30"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-11-15",
                    "end": "2024-04-12"
                },
                {
                    "season": 2015,
                    "start": "2015-10-13",
                    "end": "2016-04-20"
                },
                {
                    "season": 2012,
                    "start": "2012-10-16",
                    "end": "2013-04-21"
                },
                {
                    "season": 2016,
                    "start": "2016-10-10",
                    "end": "2017-04-18"
                },
                {
                    "season": 2017,
                    "start": "2017-10-10",
                    "end": "2018-04-15"
                },
                {
                    "season": 2018,
                    "start": "2018-10-16",
                    "end": "2019-04-07"
                },
                {
                    "season": 2008,
                    "start": "2008-10-07",
                    "end": "2009-03-25"
                }
            ]
        },
        {
            "id": 368,
            "name": "BNXT League",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/368.png",
            "country": {
                "id": 55,
                "name": "Europe",
                "code": " ",
                "flag": "https://media.api-sports.io/flags/ .svg"
            },
            "seasons": [
                {
                    "season": "2021-2022",
                    "start": "2021-09-24",
                    "end": "2022-06-11"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-09-22",
                    "end": "2024-05-03"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-09-30",
                    "end": "2023-06-13"
                }
            ]
        },
        {
            "id": 362,
            "name": "CEWL Women",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/362.png",
            "country": {
                "id": 55,
                "name": "Europe",
                "code": " ",
                "flag": "https://media.api-sports.io/flags/ .svg"
            },
            "seasons": [
                {
                    "season": "2014-2015",
                    "start": "2014-11-01",
                    "end": "2015-03-08"
                },
                {
                    "season": "2019-2020",
                    "start": "2019-10-16",
                    "end": "2020-03-11"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-10-24",
                    "end": "2019-02-24"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-10-18",
                    "end": "2018-03-04"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-11-09",
                    "end": "2017-03-12"
                },
                {
                    "season": "2015-2016",
                    "start": "2015-10-28",
                    "end": "2016-03-13"
                }
            ]
        },
        {
            "id": 202,
            "name": "Champions League",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/202.png",
            "country": {
                "id": 55,
                "name": "Europe",
                "code": " ",
                "flag": "https://media.api-sports.io/flags/ .svg"
            },
            "seasons": [
                {
                    "season": 2017,
                    "start": "2017-09-19",
                    "end": "2018-05-06"
                },
                {
                    "season": 2022,
                    "start": "2022-09-21",
                    "end": "2023-05-14"
                },
                {
                    "season": 2018,
                    "start": "2018-09-20",
                    "end": "2019-05-05"
                },
                {
                    "season": 2021,
                    "start": "2021-09-13",
                    "end": "2022-05-08"
                },
                {
                    "season": 2020,
                    "start": "2020-09-22",
                    "end": "2021-05-09"
                },
                {
                    "season": 2016,
                    "start": "2016-09-27",
                    "end": "2017-04-30"
                },
                {
                    "season": 2023,
                    "start": "2023-09-24",
                    "end": "2024-04-10"
                }
            ]
        },
        {
            "id": 419,
            "name": "Czech-Slovak Cup",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/419.png",
            "country": {
                "id": 55,
                "name": "Europe",
                "code": " ",
                "flag": "https://media.api-sports.io/flags/ .svg"
            },
            "seasons": [
                {
                    "season": 2024,
                    "start": "2024-02-14",
                    "end": "2024-02-16"
                }
            ]
        },
        {
            "id": 369,
            "name": "ENBL",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/369.png",
            "country": {
                "id": 55,
                "name": "Europe",
                "code": " ",
                "flag": "https://media.api-sports.io/flags/ .svg"
            },
            "seasons": [
                {
                    "season": "2023-2024",
                    "start": "2023-09-19",
                    "end": "2024-04-09"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-10-19",
                    "end": "2022-04-07"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-11-22",
                    "end": "2023-04-12"
                }
            ]
        },
        {
            "id": 197,
            "name": "EuroBasket",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/197.png",
            "country": {
                "id": 55,
                "name": "Europe",
                "code": " ",
                "flag": "https://media.api-sports.io/flags/ .svg"
            },
            "seasons": [
                {
                    "season": 2023,
                    "start": "2021-11-25",
                    "end": "2025-02-24"
                },
                {
                    "season": 2022,
                    "start": "2017-11-23",
                    "end": "2022-09-18"
                }
            ]
        },
        {
            "id": 381,
            "name": "EuroBasket B",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/381.png",
            "country": {
                "id": 55,
                "name": "Europe",
                "code": " ",
                "flag": "https://media.api-sports.io/flags/ .svg"
            },
            "seasons": [
                {
                    "season": 2011,
                    "start": "2011-08-08",
                    "end": "2011-08-24"
                }
            ]
        },
        {
            "id": 336,
            "name": "EuroBasket U16",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/336.png",
            "country": {
                "id": 55,
                "name": "Europe",
                "code": " ",
                "flag": "https://media.api-sports.io/flags/ .svg"
            },
            "seasons": [
                {
                    "season": 2012,
                    "start": "2012-07-19",
                    "end": "2012-07-29"
                },
                {
                    "season": 2016,
                    "start": "2016-08-12",
                    "end": "2016-08-20"
                },
                {
                    "season": 2010,
                    "start": "2010-08-05",
                    "end": "2010-08-15"
                },
                {
                    "season": 2015,
                    "start": "2015-08-06",
                    "end": "2015-08-16"
                },
                {
                    "season": 2011,
                    "start": "2011-07-28",
                    "end": "2011-08-07"
                },
                {
                    "season": 2017,
                    "start": "2017-08-11",
                    "end": "2017-08-19"
                },
                {
                    "season": 2014,
                    "start": "2014-08-20",
                    "end": "2014-08-30"
                },
                {
                    "season": 2018,
                    "start": "2018-08-10",
                    "end": "2018-08-18"
                },
                {
                    "season": 2013,
                    "start": "2013-08-08",
                    "end": "2013-08-18"
                },
                {
                    "season": 2022,
                    "start": "2022-08-12",
                    "end": "2022-08-20"
                },
                {
                    "season": 2023,
                    "start": "2023-08-05",
                    "end": "2023-08-13"
                },
                {
                    "season": 2019,
                    "start": "2019-08-09",
                    "end": "2019-08-17"
                }
            ]
        },
        {
            "id": 341,
            "name": "EuroBasket U16 B",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/341.png",
            "country": {
                "id": 55,
                "name": "Europe",
                "code": " ",
                "flag": "https://media.api-sports.io/flags/ .svg"
            },
            "seasons": [
                {
                    "season": 2023,
                    "start": "2023-08-04",
                    "end": "2023-08-13"
                },
                {
                    "season": 2016,
                    "start": "2016-08-11",
                    "end": "2016-08-20"
                },
                {
                    "season": 2017,
                    "start": "2017-08-10",
                    "end": "2017-08-19"
                },
                {
                    "season": 2018,
                    "start": "2018-08-09",
                    "end": "2018-08-18"
                },
                {
                    "season": 2019,
                    "start": "2019-08-08",
                    "end": "2019-08-17"
                },
                {
                    "season": 2022,
                    "start": "2022-08-11",
                    "end": "2022-08-20"
                }
            ]
        },
        {
            "id": 344,
            "name": "EuroBasket U16 C",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/344.png",
            "country": {
                "id": 55,
                "name": "Europe",
                "code": " ",
                "flag": "https://media.api-sports.io/flags/ .svg"
            },
            "seasons": [
                {
                    "season": 2023,
                    "start": "2023-07-19",
                    "end": "2023-07-27"
                },
                {
                    "season": 2022,
                    "start": "2022-07-12",
                    "end": "2022-07-17"
                },
                {
                    "season": 2019,
                    "start": "2019-07-14",
                    "end": "2019-07-21"
                },
                {
                    "season": 2018,
                    "start": "2018-07-03",
                    "end": "2018-07-11"
                },
                {
                    "season": 2017,
                    "start": "2017-07-23",
                    "end": "2017-07-30"
                },
                {
                    "season": 2016,
                    "start": "2016-07-17",
                    "end": "2016-07-24"
                }
            ]
        },
        {
            "id": 335,
            "name": "EuroBasket U18",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/335.png",
            "country": {
                "id": 55,
                "name": "Europe",
                "code": " ",
                "flag": "https://media.api-sports.io/flags/ .svg"
            },
            "seasons": [
                {
                    "season": 2014,
                    "start": "2014-07-24",
                    "end": "2014-08-03"
                },
                {
                    "season": 2022,
                    "start": "2022-07-30",
                    "end": "2022-08-07"
                },
                {
                    "season": 2013,
                    "start": "2013-07-18",
                    "end": "2013-07-28"
                },
                {
                    "season": 2019,
                    "start": "2019-07-27",
                    "end": "2019-08-04"
                },
                {
                    "season": 2023,
                    "start": "2023-07-22",
                    "end": "2023-07-30"
                },
                {
                    "season": 2018,
                    "start": "2018-07-28",
                    "end": "2018-08-05"
                },
                {
                    "season": 2012,
                    "start": "2012-08-09",
                    "end": "2012-08-19"
                },
                {
                    "season": 2017,
                    "start": "2017-07-29",
                    "end": "2017-08-06"
                },
                {
                    "season": 2011,
                    "start": "2011-07-21",
                    "end": "2011-07-31"
                },
                {
                    "season": 2016,
                    "start": "2016-12-16",
                    "end": "2016-12-22"
                },
                {
                    "season": 2010,
                    "start": "2010-07-22",
                    "end": "2010-08-01"
                },
                {
                    "season": 2015,
                    "start": "2015-07-23",
                    "end": "2015-08-02"
                }
            ]
        },
        {
            "id": 337,
            "name": "EuroBasket U18 B",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/337.png",
            "country": {
                "id": 55,
                "name": "Europe",
                "code": " ",
                "flag": "https://media.api-sports.io/flags/ .svg"
            },
            "seasons": [
                {
                    "season": 2011,
                    "start": "2011-07-21",
                    "end": "2011-07-31"
                },
                {
                    "season": 2015,
                    "start": "2015-07-23",
                    "end": "2015-08-02"
                },
                {
                    "season": 2012,
                    "start": "2012-08-09",
                    "end": "2012-08-19"
                },
                {
                    "season": 2016,
                    "start": "2016-07-29",
                    "end": "2016-08-07"
                },
                {
                    "season": 2013,
                    "start": "2013-07-18",
                    "end": "2013-07-28"
                },
                {
                    "season": 2017,
                    "start": "2017-07-28",
                    "end": "2017-08-06"
                },
                {
                    "season": 2023,
                    "start": "2023-07-21",
                    "end": "2023-07-30"
                },
                {
                    "season": 2018,
                    "start": "2018-07-27",
                    "end": "2018-08-05"
                },
                {
                    "season": 2014,
                    "start": "2014-07-24",
                    "end": "2014-08-03"
                },
                {
                    "season": 2019,
                    "start": "2019-07-26",
                    "end": "2019-08-04"
                },
                {
                    "season": 2022,
                    "start": "2022-07-29",
                    "end": "2022-08-07"
                }
            ]
        },
        {
            "id": 345,
            "name": "EuroBasket U18 C",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/345.png",
            "country": {
                "id": 55,
                "name": "Europe",
                "code": " ",
                "flag": "https://media.api-sports.io/flags/ .svg"
            },
            "seasons": [
                {
                    "season": 2023,
                    "start": "2023-07-29",
                    "end": "2023-08-06"
                },
                {
                    "season": 2017,
                    "start": "2017-07-04",
                    "end": "2017-07-09"
                },
                {
                    "season": 2016,
                    "start": "2016-07-08",
                    "end": "2016-07-15"
                },
                {
                    "season": 2018,
                    "start": "2018-07-22",
                    "end": "2018-07-29"
                },
                {
                    "season": 2022,
                    "start": "2022-07-24",
                    "end": "2022-07-31"
                },
                {
                    "season": 2019,
                    "start": "2019-07-28",
                    "end": "2019-08-04"
                }
            ]
        },
        {
            "id": 329,
            "name": "EuroBasket U20",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/329.png",
            "country": {
                "id": 55,
                "name": "Europe",
                "code": " ",
                "flag": "https://media.api-sports.io/flags/ .svg"
            },
            "seasons": [
                {
                    "season": 2023,
                    "start": "2023-07-08",
                    "end": "2023-07-16"
                },
                {
                    "season": 2015,
                    "start": "2015-07-07",
                    "end": "2015-07-19"
                },
                {
                    "season": 2010,
                    "start": "2010-07-08",
                    "end": "2010-07-18"
                },
                {
                    "season": 2022,
                    "start": "2022-07-16",
                    "end": "2022-07-24"
                },
                {
                    "season": 2011,
                    "start": "2011-07-14",
                    "end": "2011-07-24"
                },
                {
                    "season": 2016,
                    "start": "2016-07-16",
                    "end": "2016-07-24"
                },
                {
                    "season": 2012,
                    "start": "2012-07-12",
                    "end": "2012-07-22"
                },
                {
                    "season": 2017,
                    "start": "2017-07-15",
                    "end": "2017-07-23"
                },
                {
                    "season": 2013,
                    "start": "2013-07-09",
                    "end": "2013-07-21"
                },
                {
                    "season": 2018,
                    "start": "2018-07-14",
                    "end": "2018-07-22"
                },
                {
                    "season": 2014,
                    "start": "2014-07-08",
                    "end": "2014-07-20"
                },
                {
                    "season": 2019,
                    "start": "2019-07-13",
                    "end": "2019-07-21"
                }
            ]
        },
        {
            "id": 334,
            "name": "EuroBasket U20 B",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/334.png",
            "country": {
                "id": 55,
                "name": "Europe",
                "code": " ",
                "flag": "https://media.api-sports.io/flags/ .svg"
            },
            "seasons": [
                {
                    "season": 2011,
                    "start": "2011-07-14",
                    "end": "2011-07-24"
                },
                {
                    "season": 2019,
                    "start": "2019-07-12",
                    "end": "2019-07-21"
                },
                {
                    "season": 2014,
                    "start": "2014-07-10",
                    "end": "2014-07-20"
                },
                {
                    "season": 2018,
                    "start": "2018-07-13",
                    "end": "2018-07-22"
                },
                {
                    "season": 2013,
                    "start": "2013-07-12",
                    "end": "2013-07-21"
                },
                {
                    "season": 2017,
                    "start": "2017-07-14",
                    "end": "2017-07-23"
                },
                {
                    "season": 2012,
                    "start": "2012-07-12",
                    "end": "2012-07-22"
                },
                {
                    "season": 2016,
                    "start": "2016-07-15",
                    "end": "2016-07-24"
                },
                {
                    "season": 2023,
                    "start": "2023-07-07",
                    "end": "2023-07-16"
                },
                {
                    "season": 2022,
                    "start": "2022-07-15",
                    "end": "2022-07-24"
                },
                {
                    "season": 2015,
                    "start": "2015-07-09",
                    "end": "2015-07-19"
                }
            ]
        },
        {
            "id": 199,
            "name": "EuroChallenge",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/199.png",
            "country": {
                "id": 55,
                "name": "Europe",
                "code": " ",
                "flag": "https://media.api-sports.io/flags/ .svg"
            },
            "seasons": [
                {
                    "season": 2008,
                    "start": "2008-10-14",
                    "end": "2009-04-26"
                },
                {
                    "season": 2014,
                    "start": "2014-11-04",
                    "end": "2015-04-26"
                },
                {
                    "season": 2013,
                    "start": "2013-11-05",
                    "end": "2014-04-27"
                },
                {
                    "season": 2012,
                    "start": "2012-09-25",
                    "end": "2013-04-28"
                },
                {
                    "season": 2011,
                    "start": "2011-10-04",
                    "end": "2012-04-29"
                },
                {
                    "season": 2010,
                    "start": "2010-09-28",
                    "end": "2011-05-01"
                },
                {
                    "season": 2009,
                    "start": "2009-11-24",
                    "end": "2010-05-02"
                }
            ]
        },
        {
            "id": 194,
            "name": "Eurocup",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/194.png",
            "country": {
                "id": 55,
                "name": "Europe",
                "code": " ",
                "flag": "https://media.api-sports.io/flags/ .svg"
            },
            "seasons": [
                {
                    "season": 2021,
                    "start": "2021-10-19",
                    "end": "2022-05-11"
                },
                {
                    "season": 2016,
                    "start": "2016-10-12",
                    "end": "2017-04-05"
                },
                {
                    "season": 2022,
                    "start": "2022-10-11",
                    "end": "2023-05-03"
                },
                {
                    "season": 2013,
                    "start": "2013-10-15",
                    "end": "2014-05-07"
                },
                {
                    "season": 2012,
                    "start": "2012-11-06",
                    "end": "2013-04-13"
                },
                {
                    "season": 2014,
                    "start": "2014-10-14",
                    "end": "2015-04-29"
                },
                {
                    "season": 2015,
                    "start": "2015-10-13",
                    "end": "2016-04-27"
                },
                {
                    "season": 2011,
                    "start": "2011-09-27",
                    "end": "2012-04-15"
                },
                {
                    "season": 2010,
                    "start": "2010-09-28",
                    "end": "2011-04-17"
                },
                {
                    "season": 2009,
                    "start": "2009-10-19",
                    "end": "2010-04-18"
                },
                {
                    "season": 2008,
                    "start": "2008-10-14",
                    "end": "2009-04-05"
                },
                {
                    "season": 2017,
                    "start": "2017-10-10",
                    "end": "2018-04-13"
                },
                {
                    "season": 2023,
                    "start": "2023-10-03",
                    "end": "2024-04-12"
                },
                {
                    "season": 2020,
                    "start": "2020-09-29",
                    "end": "2021-04-30"
                },
                {
                    "season": 2018,
                    "start": "2018-10-02",
                    "end": "2019-04-15"
                }
            ]
        },
        {
            "id": 360,
            "name": "EuroCup Women",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/360.png",
            "country": {
                "id": 55,
                "name": "Europe",
                "code": " ",
                "flag": "https://media.api-sports.io/flags/ .svg"
            },
            "seasons": [
                {
                    "season": "2015-2016",
                    "start": "2015-10-07",
                    "end": "2016-04-13"
                },
                {
                    "season": "2014-2015",
                    "start": "2014-11-05",
                    "end": "2015-03-26"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-10-05",
                    "end": "2017-04-12"
                },
                {
                    "season": "2013-2014",
                    "start": "2013-11-06",
                    "end": "2014-03-27"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-09-20",
                    "end": "2018-04-18"
                },
                {
                    "season": "2012-2013",
                    "start": "2012-10-24",
                    "end": "2013-03-14"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-10-08",
                    "end": "2019-04-10"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-09-20",
                    "end": "2024-04-10"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-10-05",
                    "end": "2023-04-12"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-12-16",
                    "end": "2021-04-11"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-09-22",
                    "end": "2022-04-07"
                }
            ]
        },
        {
            "id": 120,
            "name": "Euroleague",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/120.png",
            "country": {
                "id": 55,
                "name": "Europe",
                "code": null,
                "flag": null
            },
            "seasons": [
                {
                    "season": 2011,
                    "start": "2011-09-29",
                    "end": "2012-05-13"
                },
                {
                    "season": 2022,
                    "start": "2022-10-06",
                    "end": "2023-05-21"
                },
                {
                    "season": 2018,
                    "start": "2018-10-11",
                    "end": "2019-05-19"
                },
                {
                    "season": 2020,
                    "start": "2020-10-01",
                    "end": "2021-05-30"
                },
                {
                    "season": 2017,
                    "start": "2017-10-12",
                    "end": "2018-05-20"
                },
                {
                    "season": 2021,
                    "start": "2021-09-30",
                    "end": "2022-05-21"
                },
                {
                    "season": 2016,
                    "start": "2016-10-12",
                    "end": "2017-05-21"
                },
                {
                    "season": 2015,
                    "start": "2015-10-15",
                    "end": "2016-05-15"
                },
                {
                    "season": 2014,
                    "start": "2014-09-23",
                    "end": "2015-05-17"
                },
                {
                    "season": 2013,
                    "start": "2013-10-01",
                    "end": "2014-05-18"
                },
                {
                    "season": 2012,
                    "start": "2012-09-25",
                    "end": "2013-05-12"
                },
                {
                    "season": 2010,
                    "start": "2010-09-21",
                    "end": "2011-05-08"
                },
                {
                    "season": 2009,
                    "start": "2009-09-29",
                    "end": "2010-05-09"
                },
                {
                    "season": 2008,
                    "start": "2008-10-20",
                    "end": "2009-05-03"
                },
                {
                    "season": 2023,
                    "start": "2023-10-05",
                    "end": "2024-04-12"
                }
            ]
        },
        {
            "id": 359,
            "name": "Euroleague Women",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/359.png",
            "country": {
                "id": 55,
                "name": "Europe",
                "code": " ",
                "flag": "https://media.api-sports.io/flags/ .svg"
            },
            "seasons": [
                {
                    "season": "2015-2016",
                    "start": "2015-10-14",
                    "end": "2016-04-17"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-09-20",
                    "end": "2024-04-12"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-10-11",
                    "end": "2023-04-16"
                },
                {
                    "season": "2014-2015",
                    "start": "2014-11-05",
                    "end": "2015-04-12"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-10-08",
                    "end": "2019-04-14"
                },
                {
                    "season": "2013-2014",
                    "start": "2013-11-06",
                    "end": "2014-04-13"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-10-28",
                    "end": "2021-04-18"
                },
                {
                    "season": "2012-2013",
                    "start": "2012-10-24",
                    "end": "2013-03-24"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-09-21",
                    "end": "2022-04-10"
                },
                {
                    "season": "2008-2009",
                    "start": "2008-10-15",
                    "end": "2009-04-05"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-10-26",
                    "end": "2017-04-16"
                },
                {
                    "season": "2009-2010",
                    "start": "2009-02-02",
                    "end": "2010-01-20"
                },
                {
                    "season": "2010-2011",
                    "start": "2010-10-27",
                    "end": "2011-04-10"
                },
                {
                    "season": "2011-2012",
                    "start": "2011-10-12",
                    "end": "2012-04-01"
                }
            ]
        },
        {
            "id": 356,
            "name": "European Challengers U16",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/356.png",
            "country": {
                "id": 55,
                "name": "Europe",
                "code": " ",
                "flag": "https://media.api-sports.io/flags/ .svg"
            },
            "seasons": [
                {
                    "season": 2021,
                    "start": "2021-08-16",
                    "end": "2021-08-21"
                }
            ]
        },
        {
            "id": 357,
            "name": "European Challengers U16 Women",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/357.png",
            "country": {
                "id": 55,
                "name": "Europe",
                "code": " ",
                "flag": "https://media.api-sports.io/flags/ .svg"
            },
            "seasons": [
                {
                    "season": 2021,
                    "start": "2021-08-09",
                    "end": "2021-08-16"
                }
            ]
        },
        {
            "id": 355,
            "name": "European Challengers U18",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/355.png",
            "country": {
                "id": 55,
                "name": "Europe",
                "code": " ",
                "flag": "https://media.api-sports.io/flags/ .svg"
            },
            "seasons": [
                {
                    "season": 2021,
                    "start": "2021-08-03",
                    "end": "2021-08-08"
                }
            ]
        },
        {
            "id": 354,
            "name": "European Challengers U18 Women",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/354.png",
            "country": {
                "id": 55,
                "name": "Europe",
                "code": " ",
                "flag": "https://media.api-sports.io/flags/ .svg"
            },
            "seasons": [
                {
                    "season": 2021,
                    "start": "2021-07-27",
                    "end": "2021-08-01"
                }
            ]
        },
        {
            "id": 353,
            "name": "European Challengers U20",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/353.png",
            "country": {
                "id": 55,
                "name": "Europe",
                "code": " ",
                "flag": "https://media.api-sports.io/flags/ .svg"
            },
            "seasons": [
                {
                    "season": 2021,
                    "start": "2021-07-19",
                    "end": "2021-07-25"
                }
            ]
        },
        {
            "id": 352,
            "name": "European Challengers U20 Women",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/352.png",
            "country": {
                "id": 55,
                "name": "Europe",
                "code": " ",
                "flag": "https://media.api-sports.io/flags/ .svg"
            },
            "seasons": [
                {
                    "season": 2021,
                    "start": "2021-07-12",
                    "end": "2021-07-18"
                }
            ]
        },
        {
            "id": 348,
            "name": "European Championship U16 B Women",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/348.png",
            "country": {
                "id": 55,
                "name": "Europe",
                "code": " ",
                "flag": "https://media.api-sports.io/flags/ .svg"
            },
            "seasons": [
                {
                    "season": 2023,
                    "start": "2023-08-10",
                    "end": "2023-08-19"
                },
                {
                    "season": 2017,
                    "start": "2017-08-17",
                    "end": "2017-08-26"
                },
                {
                    "season": 2022,
                    "start": "2022-08-18",
                    "end": "2022-08-27"
                },
                {
                    "season": 2019,
                    "start": "2019-08-15",
                    "end": "2019-08-24"
                },
                {
                    "season": 2018,
                    "start": "2018-08-16",
                    "end": "2018-08-25"
                }
            ]
        },
        {
            "id": 347,
            "name": "European Championship U16 C Women",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/347.png",
            "country": {
                "id": 55,
                "name": "Europe",
                "code": " ",
                "flag": "https://media.api-sports.io/flags/ .svg"
            },
            "seasons": [
                {
                    "season": 2023,
                    "start": "2023-07-18",
                    "end": "2023-07-23"
                },
                {
                    "season": 2017,
                    "start": "2017-07-25",
                    "end": "2017-07-30"
                },
                {
                    "season": 2018,
                    "start": "2018-07-03",
                    "end": "2018-07-08"
                },
                {
                    "season": 2019,
                    "start": "2019-07-16",
                    "end": "2019-07-21"
                },
                {
                    "season": 2022,
                    "start": "2022-07-12",
                    "end": "2022-07-17"
                }
            ]
        },
        {
            "id": 340,
            "name": "European Championship U16 Women",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/340.png",
            "country": {
                "id": 55,
                "name": "Europe",
                "code": " ",
                "flag": "https://media.api-sports.io/flags/ .svg"
            },
            "seasons": [
                {
                    "season": 2023,
                    "start": "2023-08-11",
                    "end": "2023-08-19"
                },
                {
                    "season": 2018,
                    "start": "2018-08-17",
                    "end": "2018-08-25"
                },
                {
                    "season": 2013,
                    "start": "2013-08-01",
                    "end": "2013-08-11"
                },
                {
                    "season": 2017,
                    "start": "2017-08-04",
                    "end": "2017-08-12"
                },
                {
                    "season": 2014,
                    "start": "2014-07-31",
                    "end": "2014-08-10"
                },
                {
                    "season": 2016,
                    "start": "2016-08-06",
                    "end": "2016-08-14"
                },
                {
                    "season": 2015,
                    "start": "2015-08-13",
                    "end": "2015-08-23"
                },
                {
                    "season": 2019,
                    "start": "2019-08-22",
                    "end": "2019-08-30"
                },
                {
                    "season": 2022,
                    "start": "2022-08-19",
                    "end": "2022-08-27"
                }
            ]
        },
        {
            "id": 338,
            "name": "European Championship U18 B Women",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/338.png",
            "country": {
                "id": 55,
                "name": "Europe",
                "code": " ",
                "flag": "https://media.api-sports.io/flags/ .svg"
            },
            "seasons": [
                {
                    "season": 2013,
                    "start": "2013-08-15",
                    "end": "2013-08-25"
                },
                {
                    "season": 2017,
                    "start": "2017-08-04",
                    "end": "2017-08-13"
                },
                {
                    "season": 2014,
                    "start": "2014-07-17",
                    "end": "2014-07-27"
                },
                {
                    "season": 2019,
                    "start": "2019-07-05",
                    "end": "2019-07-14"
                },
                {
                    "season": 2012,
                    "start": "2012-07-26",
                    "end": "2012-08-05"
                },
                {
                    "season": 2018,
                    "start": "2018-08-03",
                    "end": "2018-08-12"
                },
                {
                    "season": 2011,
                    "start": "2011-08-04",
                    "end": "2011-08-14"
                },
                {
                    "season": 2022,
                    "start": "2022-07-30",
                    "end": "2022-08-07"
                },
                {
                    "season": 2023,
                    "start": "2023-06-30",
                    "end": "2023-07-09"
                },
                {
                    "season": 2016,
                    "start": "2016-07-23",
                    "end": "2016-07-31"
                },
                {
                    "season": 2015,
                    "start": "2015-07-30",
                    "end": "2015-08-09"
                }
            ]
        },
        {
            "id": 346,
            "name": "European Championship U18 C Women",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/346.png",
            "country": {
                "id": 55,
                "name": "Europe",
                "code": " ",
                "flag": "https://media.api-sports.io/flags/ .svg"
            },
            "seasons": [
                {
                    "season": 2023,
                    "start": "2023-08-01",
                    "end": "2023-08-06"
                },
                {
                    "season": 2022,
                    "start": "2022-07-26",
                    "end": "2022-07-31"
                },
                {
                    "season": 2016,
                    "start": "2016-07-08",
                    "end": "2016-07-13"
                },
                {
                    "season": 2017,
                    "start": "2017-07-04",
                    "end": "2017-07-09"
                },
                {
                    "season": 2018,
                    "start": "2018-07-24",
                    "end": "2018-07-29"
                },
                {
                    "season": 2019,
                    "start": "2019-07-30",
                    "end": "2019-08-04"
                }
            ]
        },
        {
            "id": 339,
            "name": "European Championship U18 Women",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/339.png",
            "country": {
                "id": 55,
                "name": "Europe",
                "code": " ",
                "flag": "https://media.api-sports.io/flags/ .svg"
            },
            "seasons": [
                {
                    "season": 2023,
                    "start": "2023-07-01",
                    "end": "2023-07-09"
                },
                {
                    "season": 2015,
                    "start": "2015-07-30",
                    "end": "2015-08-09"
                },
                {
                    "season": 2014,
                    "start": "2014-07-17",
                    "end": "2014-07-27"
                },
                {
                    "season": 2019,
                    "start": "2019-07-06",
                    "end": "2019-07-14"
                },
                {
                    "season": 2013,
                    "start": "2013-08-15",
                    "end": "2013-08-25"
                },
                {
                    "season": 2018,
                    "start": "2018-08-04",
                    "end": "2018-08-12"
                },
                {
                    "season": 2012,
                    "start": "2012-07-26",
                    "end": "2012-08-05"
                },
                {
                    "season": 2017,
                    "start": "2017-08-05",
                    "end": "2017-08-13"
                },
                {
                    "season": 2011,
                    "start": "2011-08-04",
                    "end": "2011-08-14"
                },
                {
                    "season": 2016,
                    "start": "2016-07-23",
                    "end": "2016-07-31"
                },
                {
                    "season": 2022,
                    "start": "2022-08-06",
                    "end": "2022-08-14"
                }
            ]
        },
        {
            "id": 332,
            "name": "European Championship U20 B Women",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/332.png",
            "country": {
                "id": 55,
                "name": "Europe",
                "code": " ",
                "flag": "https://media.api-sports.io/flags/ .svg"
            },
            "seasons": [
                {
                    "season": 2011,
                    "start": "2011-07-08",
                    "end": "2011-07-17"
                },
                {
                    "season": 2016,
                    "start": "2016-07-09",
                    "end": "2016-07-17"
                },
                {
                    "season": 2012,
                    "start": "2012-08-16",
                    "end": "2012-08-26"
                },
                {
                    "season": 2015,
                    "start": "2015-07-02",
                    "end": "2015-07-12"
                },
                {
                    "season": 2013,
                    "start": "2013-07-04",
                    "end": "2013-07-14"
                },
                {
                    "season": 2017,
                    "start": "2017-07-08",
                    "end": "2017-07-16"
                },
                {
                    "season": 2014,
                    "start": "2014-07-03",
                    "end": "2014-07-13"
                },
                {
                    "season": 2018,
                    "start": "2018-07-07",
                    "end": "2018-07-15"
                },
                {
                    "season": 2023,
                    "start": "2023-07-28",
                    "end": "2023-08-06"
                },
                {
                    "season": 2022,
                    "start": "2022-07-09",
                    "end": "2022-07-17"
                },
                {
                    "season": 2019,
                    "start": "2019-08-03",
                    "end": "2019-08-11"
                }
            ]
        },
        {
            "id": 333,
            "name": "European Championship U20 Women",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/333.png",
            "country": {
                "id": 55,
                "name": "Europe",
                "code": " ",
                "flag": "https://media.api-sports.io/flags/ .svg"
            },
            "seasons": [
                {
                    "season": 2012,
                    "start": "2012-08-16",
                    "end": "2012-08-26"
                },
                {
                    "season": 2019,
                    "start": "2019-08-03",
                    "end": "2019-08-11"
                },
                {
                    "season": 2023,
                    "start": "2023-07-29",
                    "end": "2023-08-06"
                },
                {
                    "season": 2018,
                    "start": "2018-07-07",
                    "end": "2018-07-15"
                },
                {
                    "season": 2011,
                    "start": "2011-07-07",
                    "end": "2011-07-17"
                },
                {
                    "season": 2017,
                    "start": "2017-07-08",
                    "end": "2017-07-16"
                },
                {
                    "season": 2013,
                    "start": "2013-07-04",
                    "end": "2013-07-14"
                },
                {
                    "season": 2016,
                    "start": "2016-07-09",
                    "end": "2016-07-17"
                },
                {
                    "season": 2014,
                    "start": "2014-07-03",
                    "end": "2014-07-13"
                },
                {
                    "season": 2015,
                    "start": "2015-07-02",
                    "end": "2015-07-12"
                },
                {
                    "season": 2022,
                    "start": "2022-07-08",
                    "end": "2022-07-16"
                }
            ]
        },
        {
            "id": 331,
            "name": "European Championship Women",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/331.png",
            "country": {
                "id": 55,
                "name": "Europe",
                "code": " ",
                "flag": "https://media.api-sports.io/flags/ .svg"
            },
            "seasons": [
                {
                    "season": 2024,
                    "start": "2023-11-08",
                    "end": "2025-02-09"
                },
                {
                    "season": 2021,
                    "start": "2019-11-14",
                    "end": "2021-06-27"
                },
                {
                    "season": 2023,
                    "start": "2021-11-11",
                    "end": "2023-06-25"
                }
            ]
        },
        {
            "id": 366,
            "name": "EWBL Women",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/366.png",
            "country": {
                "id": 55,
                "name": "Europe",
                "code": " ",
                "flag": "https://media.api-sports.io/flags/ .svg"
            },
            "seasons": [
                {
                    "season": "2022-2023",
                    "start": "2022-10-28",
                    "end": "2023-03-05"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-10-30",
                    "end": "2022-03-20"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-11-25",
                    "end": "2024-03-09"
                },
                {
                    "season": "2015-2016",
                    "start": "2015-09-25",
                    "end": "2016-04-17"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-09-23",
                    "end": "2017-04-02"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-12-17",
                    "end": "2021-04-04"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-10-03",
                    "end": "2019-03-17"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-09-22",
                    "end": "2018-03-18"
                }
            ]
        },
        {
            "id": 387,
            "name": "Federal Cup",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/387.png",
            "country": {
                "id": 55,
                "name": "Europe",
                "code": " ",
                "flag": "https://media.api-sports.io/flags/ .svg"
            },
            "seasons": [
                {
                    "season": 2022,
                    "start": "2022-09-09",
                    "end": "2022-09-17"
                },
                {
                    "season": 2023,
                    "start": "2023-09-08",
                    "end": "2023-09-09"
                },
                {
                    "season": 2021,
                    "start": "2021-09-03",
                    "end": "2021-09-12"
                }
            ]
        },
        {
            "id": 370,
            "name": "Federal Cup Women",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/370.png",
            "country": {
                "id": 55,
                "name": "Europe",
                "code": " ",
                "flag": "https://media.api-sports.io/flags/ .svg"
            },
            "seasons": [
                {
                    "season": "2021-2022",
                    "start": "2022-02-04",
                    "end": "2022-02-06"
                },
                {
                    "season": "2022-2023",
                    "start": "2023-03-10",
                    "end": "2023-03-12"
                },
                {
                    "season": "2023-2024",
                    "start": "2024-01-26",
                    "end": "2024-01-28"
                }
            ]
        },
        {
            "id": 201,
            "name": "FIBA Europe Cup",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/201.png",
            "country": {
                "id": 55,
                "name": "Europe",
                "code": " ",
                "flag": "https://media.api-sports.io/flags/ .svg"
            },
            "seasons": [
                {
                    "season": 2021,
                    "start": "2021-09-28",
                    "end": "2022-04-27"
                },
                {
                    "season": 2017,
                    "start": "2017-09-19",
                    "end": "2018-05-02"
                },
                {
                    "season": 2022,
                    "start": "2022-09-27",
                    "end": "2023-04-26"
                },
                {
                    "season": 2018,
                    "start": "2018-09-20",
                    "end": "2019-05-01"
                },
                {
                    "season": 2023,
                    "start": "2023-10-02",
                    "end": "2024-04-24"
                },
                {
                    "season": 2020,
                    "start": "2021-01-26",
                    "end": "2021-04-25"
                },
                {
                    "season": 2016,
                    "start": "2016-10-18",
                    "end": "2017-04-25"
                },
                {
                    "season": 2015,
                    "start": "2015-10-21",
                    "end": "2016-05-01"
                }
            ]
        },
        {
            "id": 349,
            "name": "Games of the Small States of Europe",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/349.png",
            "country": {
                "id": 55,
                "name": "Europe",
                "code": " ",
                "flag": "https://media.api-sports.io/flags/ .svg"
            },
            "seasons": [
                {
                    "season": 2017,
                    "start": "2017-05-30",
                    "end": "2017-06-03"
                },
                {
                    "season": 2023,
                    "start": "2023-05-29",
                    "end": "2023-06-03"
                },
                {
                    "season": 2019,
                    "start": "2019-05-28",
                    "end": "2019-06-01"
                }
            ]
        },
        {
            "id": 350,
            "name": "Games of the Small States of Europe Women",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/350.png",
            "country": {
                "id": 55,
                "name": "Europe",
                "code": " ",
                "flag": "https://media.api-sports.io/flags/ .svg"
            },
            "seasons": [
                {
                    "season": 2023,
                    "start": "2023-05-29",
                    "end": "2023-06-03"
                },
                {
                    "season": 2017,
                    "start": "2017-05-30",
                    "end": "2017-06-02"
                },
                {
                    "season": 2019,
                    "start": "2019-05-28",
                    "end": "2019-06-01"
                }
            ]
        },
        {
            "id": 358,
            "name": "Gomelsky Cup",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/358.png",
            "country": {
                "id": 55,
                "name": "Europe",
                "code": " ",
                "flag": "https://media.api-sports.io/flags/ .svg"
            },
            "seasons": [
                {
                    "season": 2014,
                    "start": "2014-10-04",
                    "end": "2014-10-05"
                },
                {
                    "season": 2016,
                    "start": "2016-09-24",
                    "end": "2016-09-25"
                },
                {
                    "season": 2013,
                    "start": "2013-09-28",
                    "end": "2013-09-29"
                },
                {
                    "season": 2015,
                    "start": "2015-10-03",
                    "end": "2015-10-04"
                },
                {
                    "season": 2009,
                    "start": "2009-10-02",
                    "end": "2009-10-03"
                },
                {
                    "season": 2017,
                    "start": "2017-09-27",
                    "end": "2017-09-28"
                },
                {
                    "season": 2012,
                    "start": "2012-09-29",
                    "end": "2012-09-30"
                },
                {
                    "season": 2020,
                    "start": "2020-09-17",
                    "end": "2020-09-18"
                },
                {
                    "season": 2010,
                    "start": "2010-10-02",
                    "end": "2010-10-03"
                },
                {
                    "season": 2022,
                    "start": "2022-09-17",
                    "end": "2022-09-18"
                },
                {
                    "season": 2011,
                    "start": "2011-09-24",
                    "end": "2011-09-25"
                }
            ]
        },
        {
            "id": 204,
            "name": "Latvia-Estonian League",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/204.png",
            "country": {
                "id": 55,
                "name": "Europe",
                "code": " ",
                "flag": "https://media.api-sports.io/flags/ .svg"
            },
            "seasons": [
                {
                    "season": 2021,
                    "start": "2021-10-01",
                    "end": "2022-04-10"
                },
                {
                    "season": 2022,
                    "start": "2022-09-30",
                    "end": "2023-04-08"
                },
                {
                    "season": 2020,
                    "start": "2020-10-03",
                    "end": "2021-04-11"
                },
                {
                    "season": 2023,
                    "start": "2023-09-21",
                    "end": "2024-04-14"
                },
                {
                    "season": 2018,
                    "start": "2018-09-28",
                    "end": "2019-04-06"
                }
            ]
        },
        {
            "id": 367,
            "name": "Liga Unike",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/367.png",
            "country": {
                "id": 55,
                "name": "Europe",
                "code": " ",
                "flag": "https://media.api-sports.io/flags/ .svg"
            },
            "seasons": [
                {
                    "season": "2020-2021",
                    "start": "2021-04-06",
                    "end": "2021-04-14"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-11-10",
                    "end": "2023-03-29"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-10-23",
                    "end": "2022-04-21"
                },
                {
                    "season": "2023-2024",
                    "start": "2024-03-27",
                    "end": "2024-03-31"
                }
            ]
        },
        {
            "id": 420,
            "name": "Liga Unike Women",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/420.png",
            "country": {
                "id": 55,
                "name": "Europe",
                "code": " ",
                "flag": "https://media.api-sports.io/flags/ .svg"
            },
            "seasons": [
                {
                    "season": "2023-2024",
                    "start": "2024-01-23",
                    "end": "2024-04-02"
                }
            ]
        },
        {
            "id": 363,
            "name": "WABA League Women",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/363.png",
            "country": {
                "id": 55,
                "name": "Europe",
                "code": " ",
                "flag": "https://media.api-sports.io/flags/ .svg"
            },
            "seasons": [
                {
                    "season": "2015-2016",
                    "start": "2015-10-07",
                    "end": "2016-03-13"
                },
                {
                    "season": "2014-2015",
                    "start": "2014-10-21",
                    "end": "2015-03-15"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-09-20",
                    "end": "2024-03-24"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-09-29",
                    "end": "2022-03-20"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-10-11",
                    "end": "2023-03-26"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-10-04",
                    "end": "2018-03-25"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-10-11",
                    "end": "2021-03-21"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-10-03",
                    "end": "2019-03-24"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-10-05",
                    "end": "2017-03-19"
                }
            ]
        },
        {
            "id": 342,
            "name": "Small Countries European Championship",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/342.png",
            "country": {
                "id": 55,
                "name": "Europe",
                "code": " ",
                "flag": "https://media.api-sports.io/flags/ .svg"
            },
            "seasons": [
                {
                    "season": 2022,
                    "start": "2022-06-28",
                    "end": "2022-07-03"
                },
                {
                    "season": 2016,
                    "start": "2016-06-28",
                    "end": "2016-07-03"
                },
                {
                    "season": 2018,
                    "start": "2018-06-26",
                    "end": "2018-07-01"
                },
                {
                    "season": 2021,
                    "start": "2021-08-10",
                    "end": "2021-08-15"
                }
            ]
        },
        {
            "id": 343,
            "name": "Small Countries European Championship Women",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/343.png",
            "country": {
                "id": 55,
                "name": "Europe",
                "code": " ",
                "flag": "https://media.api-sports.io/flags/ .svg"
            },
            "seasons": [
                {
                    "season": 2022,
                    "start": "2022-06-28",
                    "end": "2022-07-03"
                },
                {
                    "season": 2016,
                    "start": "2016-06-28",
                    "end": "2016-07-03"
                },
                {
                    "season": 2018,
                    "start": "2018-06-26",
                    "end": "2018-07-01"
                },
                {
                    "season": 2021,
                    "start": "2021-07-20",
                    "end": "2021-07-25"
                }
            ]
        },
        {
            "id": 361,
            "name": "SuperCup Women",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/361.png",
            "country": {
                "id": 55,
                "name": "Europe",
                "code": " ",
                "flag": "https://media.api-sports.io/flags/ .svg"
            },
            "seasons": [
                {
                    "season": 2023,
                    "start": "2023-09-28",
                    "end": "2023-09-28"
                },
                {
                    "season": 2019,
                    "start": "2019-10-10",
                    "end": "2019-10-10"
                },
                {
                    "season": 2009,
                    "start": "2009-10-20",
                    "end": "2009-10-20"
                },
                {
                    "season": 2015,
                    "start": "2015-10-06",
                    "end": "2015-10-07"
                },
                {
                    "season": 2010,
                    "start": "2010-10-18",
                    "end": "2010-10-18"
                },
                {
                    "season": 2021,
                    "start": "2021-10-22",
                    "end": "2021-10-22"
                },
                {
                    "season": 2011,
                    "start": "2011-10-05",
                    "end": "2011-10-05"
                },
                {
                    "season": 2018,
                    "start": "2018-10-17",
                    "end": "2018-10-17"
                },
                {
                    "season": 2013,
                    "start": "2013-10-29",
                    "end": "2013-10-29"
                },
                {
                    "season": 2017,
                    "start": "2017-10-05",
                    "end": "2017-10-05"
                },
                {
                    "season": 2022,
                    "start": "2022-10-18",
                    "end": "2022-10-18"
                },
                {
                    "season": 2016,
                    "start": "2016-10-20",
                    "end": "2016-10-20"
                }
            ]
        },
        {
            "id": 364,
            "name": "WBBL Women",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/364.png",
            "country": {
                "id": 55,
                "name": "Europe",
                "code": " ",
                "flag": "https://media.api-sports.io/flags/ .svg"
            },
            "seasons": [
                {
                    "season": "2023-2024",
                    "start": "2023-10-08",
                    "end": "2024-03-30"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-09-30",
                    "end": "2022-04-09"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-10-08",
                    "end": "2023-04-02"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-10-03",
                    "end": "2021-04-25"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-09-27",
                    "end": "2019-04-23"
                }
            ]
        },
        {
            "id": 229,
            "name": "I Divisioona A",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/229.png",
            "country": {
                "id": 15,
                "name": "Finland",
                "code": "FI",
                "flag": "https://media.api-sports.io/flags/fi.svg"
            },
            "seasons": [
                {
                    "season": "2023-2024",
                    "start": "2023-10-06",
                    "end": "2024-04-11"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-10-15",
                    "end": "2021-04-23"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-10-07",
                    "end": "2023-04-25"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-10-07",
                    "end": "2022-04-27"
                }
            ]
        },
        {
            "id": 230,
            "name": "I Divisioona Women",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/230.png",
            "country": {
                "id": 15,
                "name": "Finland",
                "code": "FI",
                "flag": "https://media.api-sports.io/flags/fi.svg"
            },
            "seasons": [
                {
                    "season": "2023-2024",
                    "start": "2023-10-08",
                    "end": "2024-04-09"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-10-03",
                    "end": "2022-04-25"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-09-30",
                    "end": "2023-04-18"
                }
            ]
        },
        {
            "id": 37,
            "name": "Korisliiga",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/37.png",
            "country": {
                "id": 15,
                "name": "Finland",
                "code": "FI",
                "flag": "https://media.api-sports.io/flags/fi.svg"
            },
            "seasons": [
                {
                    "season": "2018-2019",
                    "start": "2018-10-07",
                    "end": "2019-05-26"
                },
                {
                    "season": "2008-2009",
                    "start": "2008-10-03",
                    "end": "2009-05-16"
                },
                {
                    "season": "2019-2020",
                    "start": "2019-09-27",
                    "end": "2020-04-07"
                },
                {
                    "season": "2009-2010",
                    "start": "2009-10-02",
                    "end": "2010-05-08"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-09-26",
                    "end": "2018-05-18"
                },
                {
                    "season": "2010-2011",
                    "start": "2010-09-24",
                    "end": "2011-05-04"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-10-05",
                    "end": "2017-05-13"
                },
                {
                    "season": "2011-2012",
                    "start": "2011-09-28",
                    "end": "2012-05-09"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-10-13",
                    "end": "2021-04-27"
                },
                {
                    "season": "2012-2013",
                    "start": "2012-10-03",
                    "end": "2013-05-17"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-09-30",
                    "end": "2023-05-16"
                },
                {
                    "season": "2013-2014",
                    "start": "2013-10-04",
                    "end": "2014-05-18"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-10-01",
                    "end": "2022-05-11"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-09-30",
                    "end": "2024-04-12"
                },
                {
                    "season": "2014-2015",
                    "start": "2014-10-01",
                    "end": "2015-05-19"
                },
                {
                    "season": "2015-2016",
                    "start": "2015-10-02",
                    "end": "2016-05-11"
                }
            ]
        },
        {
            "id": 38,
            "name": "Korisliiga W",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/38.png",
            "country": {
                "id": 15,
                "name": "Finland",
                "code": "FI",
                "flag": "https://media.api-sports.io/flags/fi.svg"
            },
            "seasons": [
                {
                    "season": "2020-2021",
                    "start": "2020-10-08",
                    "end": "2021-04-25"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-09-29",
                    "end": "2024-04-12"
                },
                {
                    "season": "2019-2020",
                    "start": "2019-09-26",
                    "end": "2020-03-21"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-10-01",
                    "end": "2017-04-27"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-09-30",
                    "end": "2023-04-21"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-09-28",
                    "end": "2018-04-27"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-10-04",
                    "end": "2019-04-21"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-10-01",
                    "end": "2022-04-27"
                }
            ]
        },
        {
            "id": 391,
            "name": "Suomen Cup",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/391.png",
            "country": {
                "id": 15,
                "name": "Finland",
                "code": "FI",
                "flag": "https://media.api-sports.io/flags/fi.svg"
            },
            "seasons": [
                {
                    "season": "2022-2023",
                    "start": "2022-12-09",
                    "end": "2023-01-14"
                },
                {
                    "season": "2023-2024",
                    "start": "2024-01-19",
                    "end": "2024-01-20"
                }
            ]
        },
        {
            "id": 392,
            "name": "Suomen Cup Women",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/392.png",
            "country": {
                "id": 15,
                "name": "Finland",
                "code": "FI",
                "flag": "https://media.api-sports.io/flags/fi.svg"
            },
            "seasons": [
                {
                    "season": "2022-2023",
                    "start": "2022-12-10",
                    "end": "2023-01-15"
                },
                {
                    "season": "2023-2024",
                    "start": "2024-01-20",
                    "end": "2024-01-21"
                }
            ]
        },
        {
            "id": 132,
            "name": "All Stars",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/132.png",
            "country": {
                "id": 4,
                "name": "France",
                "code": "FR",
                "flag": "https://media.api-sports.io/flags/fr.svg"
            },
            "seasons": [
                {
                    "season": 2019,
                    "start": "2019-12-29",
                    "end": "2019-12-29"
                },
                {
                    "season": 2011,
                    "start": "2011-12-29",
                    "end": "2011-12-29"
                },
                {
                    "season": 2018,
                    "start": "2018-12-29",
                    "end": "2018-12-29"
                },
                {
                    "season": 2013,
                    "start": "2013-12-29",
                    "end": "2013-12-29"
                },
                {
                    "season": 2017,
                    "start": "2017-12-29",
                    "end": "2017-12-29"
                },
                {
                    "season": 2014,
                    "start": "2015-01-03",
                    "end": "2015-01-03"
                },
                {
                    "season": 2016,
                    "start": "2016-12-29",
                    "end": "2016-12-29"
                },
                {
                    "season": 2012,
                    "start": "2012-12-30",
                    "end": "2012-12-30"
                },
                {
                    "season": 2015,
                    "start": "2015-12-30",
                    "end": "2015-12-30"
                },
                {
                    "season": 2022,
                    "start": "2022-12-29",
                    "end": "2022-12-29"
                },
                {
                    "season": 2021,
                    "start": "2021-12-29",
                    "end": "2021-12-29"
                },
                {
                    "season": 2023,
                    "start": "2023-12-30",
                    "end": "2023-12-30"
                }
            ]
        },
        {
            "id": 233,
            "name": "Espoirs U21",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/233.png",
            "country": {
                "id": 4,
                "name": "France",
                "code": "FR",
                "flag": "https://media.api-sports.io/flags/fr.svg"
            },
            "seasons": [
                {
                    "season": "2021-2022",
                    "start": "2021-10-01",
                    "end": "2022-05-22"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-09-16",
                    "end": "2024-05-11"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-09-23",
                    "end": "2023-05-28"
                }
            ]
        },
        {
            "id": 9,
            "name": "French Cup",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/9.png",
            "country": {
                "id": 4,
                "name": "France",
                "code": "FR",
                "flag": "https://media.api-sports.io/flags/fr.svg"
            },
            "seasons": [
                {
                    "season": 2019,
                    "start": "2019-10-08",
                    "end": "2020-03-21"
                },
                {
                    "season": 2022,
                    "start": "2022-09-20",
                    "end": "2023-04-22"
                },
                {
                    "season": 2021,
                    "start": "2021-09-15",
                    "end": "2022-04-23"
                },
                {
                    "season": 2023,
                    "start": "2023-09-17",
                    "end": "2024-04-27"
                },
                {
                    "season": 2020,
                    "start": "2020-09-21",
                    "end": "2021-04-24"
                },
                {
                    "season": 2008,
                    "start": "2009-03-17",
                    "end": "2009-05-17"
                },
                {
                    "season": 2010,
                    "start": "2011-04-12",
                    "end": "2011-05-15"
                },
                {
                    "season": 2011,
                    "start": "2012-03-13",
                    "end": "2012-05-20"
                },
                {
                    "season": 2012,
                    "start": "2013-01-14",
                    "end": "2013-05-05"
                },
                {
                    "season": 2013,
                    "start": "2013-10-16",
                    "end": "2014-05-11"
                },
                {
                    "season": 2014,
                    "start": "2014-09-09",
                    "end": "2015-05-03"
                },
                {
                    "season": 2015,
                    "start": "2015-09-08",
                    "end": "2016-05-01"
                },
                {
                    "season": 2016,
                    "start": "2016-09-20",
                    "end": "2017-04-22"
                },
                {
                    "season": 2018,
                    "start": "2018-11-06",
                    "end": "2019-05-11"
                },
                {
                    "season": 2017,
                    "start": "2017-11-07",
                    "end": "2018-04-21"
                }
            ]
        },
        {
            "id": 231,
            "name": "French Cup Women",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/231.png",
            "country": {
                "id": 4,
                "name": "France",
                "code": "FR",
                "flag": "https://media.api-sports.io/flags/fr.svg"
            },
            "seasons": [
                {
                    "season": "2020-2021",
                    "start": "2020-09-19",
                    "end": "2021-04-24"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-09-29",
                    "end": "2024-04-27"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-09-15",
                    "end": "2022-04-23"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-10-08",
                    "end": "2023-04-22"
                }
            ]
        },
        {
            "id": 11,
            "name": "Semaine Des As",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/11.png",
            "country": {
                "id": 4,
                "name": "France",
                "code": "FR",
                "flag": "https://media.api-sports.io/flags/fr.svg"
            },
            "seasons": [
                {
                    "season": 2020,
                    "start": "2020-02-14",
                    "end": "2020-02-16"
                },
                {
                    "season": 2023,
                    "start": "2023-02-17",
                    "end": "2023-02-19"
                },
                {
                    "season": 2019,
                    "start": "2019-02-15",
                    "end": "2019-02-17"
                },
                {
                    "season": 2016,
                    "start": "2016-02-19",
                    "end": "2016-02-21"
                },
                {
                    "season": 2015,
                    "start": "2015-02-20",
                    "end": "2015-02-22"
                },
                {
                    "season": 2014,
                    "start": "2014-02-14",
                    "end": "2014-02-16"
                },
                {
                    "season": 2013,
                    "start": "2013-02-15",
                    "end": "2013-02-17"
                },
                {
                    "season": 2017,
                    "start": "2017-02-17",
                    "end": "2017-02-19"
                },
                {
                    "season": 2018,
                    "start": "2018-02-16",
                    "end": "2018-02-18"
                },
                {
                    "season": 2024,
                    "start": "2024-02-16",
                    "end": "2024-02-18"
                },
                {
                    "season": 2011,
                    "start": "2011-02-10",
                    "end": "2011-02-13"
                },
                {
                    "season": 2012,
                    "start": "2012-02-16",
                    "end": "2012-02-19"
                }
            ]
        },
        {
            "id": 393,
            "name": "LFB Super Cup Women",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/393.png",
            "country": {
                "id": 4,
                "name": "France",
                "code": "FR",
                "flag": "https://media.api-sports.io/flags/fr.svg"
            },
            "seasons": [
                {
                    "season": 2022,
                    "start": "2022-10-21",
                    "end": "2022-10-21"
                },
                {
                    "season": 2023,
                    "start": "2023-09-15",
                    "end": "2023-09-15"
                }
            ]
        },
        {
            "id": 10,
            "name": "LFB W",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/10.png",
            "country": {
                "id": 4,
                "name": "France",
                "code": "FR",
                "flag": "https://media.api-sports.io/flags/fr.svg"
            },
            "seasons": [
                {
                    "season": "2015-2016",
                    "start": "2015-09-26",
                    "end": "2016-05-15"
                },
                {
                    "season": "2011-2012",
                    "start": "2011-09-24",
                    "end": "2012-05-03"
                },
                {
                    "season": "2019-2020",
                    "start": "2019-10-05",
                    "end": "2020-04-22"
                },
                {
                    "season": "2012-2013",
                    "start": "2012-09-22",
                    "end": "2013-04-27"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-10-13",
                    "end": "2019-05-23"
                },
                {
                    "season": "2013-2014",
                    "start": "2013-10-05",
                    "end": "2014-05-25"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-09-29",
                    "end": "2018-05-26"
                },
                {
                    "season": "2014-2015",
                    "start": "2014-10-18",
                    "end": "2015-04-28"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-10-01",
                    "end": "2017-05-12"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-09-23",
                    "end": "2024-05-14"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-10-03",
                    "end": "2021-05-15"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-10-29",
                    "end": "2023-05-22"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-10-01",
                    "end": "2022-06-04"
                }
            ]
        },
        {
            "id": 232,
            "name": "Ligue 2 Women",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/232.png",
            "country": {
                "id": 4,
                "name": "France",
                "code": "FR",
                "flag": "https://media.api-sports.io/flags/fr.svg"
            },
            "seasons": [
                {
                    "season": "2023-2024",
                    "start": "2023-10-07",
                    "end": "2024-04-10"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-09-25",
                    "end": "2022-05-21"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-10-15",
                    "end": "2023-05-17"
                }
            ]
        },
        {
            "id": 2,
            "name": "LNB",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/2.png",
            "country": {
                "id": 4,
                "name": "France",
                "code": "FR",
                "flag": "https://media.api-sports.io/flags/fr.svg"
            },
            "seasons": [
                {
                    "season": "2010-2011",
                    "start": "2010-10-08",
                    "end": "2011-06-11"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-10-01",
                    "end": "2022-06-25"
                },
                {
                    "season": "2014-2015",
                    "start": "2014-09-26",
                    "end": "2015-06-20"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-09-23",
                    "end": "2023-06-15"
                },
                {
                    "season": "2013-2014",
                    "start": "2013-10-04",
                    "end": "2014-06-05"
                },
                {
                    "season": "2019-2020",
                    "start": "2019-09-20",
                    "end": "2020-05-06"
                },
                {
                    "season": "2012-2013",
                    "start": "2012-10-05",
                    "end": "2013-06-08"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-09-21",
                    "end": "2019-05-27"
                },
                {
                    "season": "2011-2012",
                    "start": "2011-10-07",
                    "end": "2012-06-16"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-09-22",
                    "end": "2018-06-24"
                },
                {
                    "season": "2009-2010",
                    "start": "2009-10-02",
                    "end": "2010-06-13"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-09-23",
                    "end": "2017-06-23"
                },
                {
                    "season": "2008-2009",
                    "start": "2008-10-03",
                    "end": "2009-06-20"
                },
                {
                    "season": "2015-2016",
                    "start": "2015-10-02",
                    "end": "2016-06-14"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-09-16",
                    "end": "2024-05-11"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-09-23",
                    "end": "2021-06-26"
                }
            ]
        },
        {
            "id": 133,
            "name": "LNB Super Cup",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/133.png",
            "country": {
                "id": 4,
                "name": "France",
                "code": "FR",
                "flag": "https://media.api-sports.io/flags/fr.svg"
            },
            "seasons": [
                {
                    "season": 2013,
                    "start": "2013-09-25",
                    "end": "2013-09-25"
                },
                {
                    "season": 2014,
                    "start": "2014-09-23",
                    "end": "2014-09-23"
                },
                {
                    "season": 2011,
                    "start": "2011-10-02",
                    "end": "2011-10-02"
                },
                {
                    "season": 2015,
                    "start": "2015-09-28",
                    "end": "2015-09-28"
                },
                {
                    "season": 2012,
                    "start": "2012-09-20",
                    "end": "2012-09-20"
                },
                {
                    "season": 2016,
                    "start": "2016-09-20",
                    "end": "2016-09-20"
                },
                {
                    "season": 2017,
                    "start": "2017-09-19",
                    "end": "2017-09-19"
                }
            ]
        },
        {
            "id": 8,
            "name": "Pro B",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/8.png",
            "country": {
                "id": 4,
                "name": "France",
                "code": "FR",
                "flag": "https://media.api-sports.io/flags/fr.svg"
            },
            "seasons": [
                {
                    "season": "2014-2015",
                    "start": "2014-10-03",
                    "end": "2015-06-15"
                },
                {
                    "season": "2019-2020",
                    "start": "2019-10-11",
                    "end": "2020-05-08"
                },
                {
                    "season": "2015-2016",
                    "start": "2015-10-23",
                    "end": "2016-06-10"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-10-15",
                    "end": "2022-06-11"
                },
                {
                    "season": "2013-2014",
                    "start": "2013-09-13",
                    "end": "2014-05-31"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-10-09",
                    "end": "2021-06-20"
                },
                {
                    "season": "2012-2013",
                    "start": "2012-09-28",
                    "end": "2013-06-01"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-10-14",
                    "end": "2023-06-13"
                },
                {
                    "season": "2011-2012",
                    "start": "2011-09-30",
                    "end": "2012-06-16"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-10-12",
                    "end": "2019-05-24"
                },
                {
                    "season": "2010-2011",
                    "start": "2010-10-01",
                    "end": "2011-06-11"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-10-13",
                    "end": "2018-06-14"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-10-13",
                    "end": "2024-05-10"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-10-13",
                    "end": "2017-06-18"
                }
            ]
        },
        {
            "id": 394,
            "name": "Georgian Cup",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/394.png",
            "country": {
                "id": 16,
                "name": "Georgia",
                "code": "GE",
                "flag": "https://media.api-sports.io/flags/ge.svg"
            },
            "seasons": [
                {
                    "season": 2023,
                    "start": "2023-01-14",
                    "end": "2023-04-12"
                },
                {
                    "season": 2024,
                    "start": "2024-01-22",
                    "end": "2024-04-09"
                }
            ]
        },
        {
            "id": 39,
            "name": "Superleague",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/39.png",
            "country": {
                "id": 16,
                "name": "Georgia",
                "code": "GE",
                "flag": "https://media.api-sports.io/flags/ge.svg"
            },
            "seasons": [
                {
                    "season": "2020-2021",
                    "start": "2020-10-17",
                    "end": "2021-05-27"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-10-23",
                    "end": "2023-05-28"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-10-15",
                    "end": "2017-05-26"
                },
                {
                    "season": "2013-2014",
                    "start": "2013-10-19",
                    "end": "2014-05-25"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-10-17",
                    "end": "2022-05-28"
                },
                {
                    "season": "2014-2015",
                    "start": "2014-10-25",
                    "end": "2015-05-26"
                },
                {
                    "season": "2019-2020",
                    "start": "2019-10-13",
                    "end": "2020-04-12"
                },
                {
                    "season": "2015-2016",
                    "start": "2015-10-17",
                    "end": "2016-05-26"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-11-10",
                    "end": "2019-05-27"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-10-14",
                    "end": "2024-04-14"
                }
            ]
        },
        {
            "id": 40,
            "name": "BBL",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/40.png",
            "country": {
                "id": 17,
                "name": "Germany",
                "code": "DE",
                "flag": "https://media.api-sports.io/flags/de.svg"
            },
            "seasons": [
                {
                    "season": "2019-2020",
                    "start": "2019-09-24",
                    "end": "2020-06-28"
                },
                {
                    "season": "2011-2012",
                    "start": "2011-10-03",
                    "end": "2012-06-10"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-11-06",
                    "end": "2021-06-13"
                },
                {
                    "season": "2010-2011",
                    "start": "2010-10-01",
                    "end": "2011-06-18"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-09-28",
                    "end": "2023-06-16"
                },
                {
                    "season": "2009-2010",
                    "start": "2009-10-09",
                    "end": "2010-06-17"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-09-23",
                    "end": "2022-06-19"
                },
                {
                    "season": "2012-2013",
                    "start": "2012-10-03",
                    "end": "2013-06-16"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-09-23",
                    "end": "2017-06-11"
                },
                {
                    "season": "2008-2009",
                    "start": "2008-09-20",
                    "end": "2009-06-25"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-09-29",
                    "end": "2018-06-16"
                },
                {
                    "season": "2013-2014",
                    "start": "2013-10-02",
                    "end": "2014-06-18"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-09-28",
                    "end": "2019-05-26"
                },
                {
                    "season": "2014-2015",
                    "start": "2014-10-02",
                    "end": "2015-06-21"
                },
                {
                    "season": "2015-2016",
                    "start": "2015-10-01",
                    "end": "2016-06-12"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-09-27",
                    "end": "2024-05-12"
                }
            ]
        },
        {
            "id": 41,
            "name": "DBBL Women",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/41.png",
            "country": {
                "id": 17,
                "name": "Germany",
                "code": "DE",
                "flag": "https://media.api-sports.io/flags/de.svg"
            },
            "seasons": [
                {
                    "season": "2021-2022",
                    "start": "2021-09-25",
                    "end": "2022-04-29"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-09-30",
                    "end": "2024-04-14"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-10-24",
                    "end": "2021-04-25"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-10-14",
                    "end": "2023-04-25"
                },
                {
                    "season": "2019-2020",
                    "start": "2019-09-21",
                    "end": "2020-03-14"
                },
                {
                    "season": "2015-2016",
                    "start": "2015-09-26",
                    "end": "2016-04-27"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-09-24",
                    "end": "2017-05-03"
                },
                {
                    "season": "2010-2011",
                    "start": "2010-09-25",
                    "end": "2011-04-21"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-09-24",
                    "end": "2018-05-01"
                },
                {
                    "season": "2011-2012",
                    "start": "2011-09-24",
                    "end": "2012-05-13"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-09-28",
                    "end": "2019-05-04"
                },
                {
                    "season": "2012-2013",
                    "start": "2012-09-29",
                    "end": "2013-05-10"
                },
                {
                    "season": "2014-2015",
                    "start": "2014-09-27",
                    "end": "2015-04-29"
                },
                {
                    "season": "2013-2014",
                    "start": "2013-09-28",
                    "end": "2014-05-07"
                }
            ]
        },
        {
            "id": 134,
            "name": "German Cup",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/134.png",
            "country": {
                "id": 17,
                "name": "Germany",
                "code": "DE",
                "flag": "https://media.api-sports.io/flags/de.svg"
            },
            "seasons": [
                {
                    "season": "2022-2023",
                    "start": "2022-10-15",
                    "end": "2023-02-19"
                },
                {
                    "season": "2010-2011",
                    "start": "2011-02-09",
                    "end": "2011-04-03"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-10-17",
                    "end": "2021-05-16"
                },
                {
                    "season": "2009-2010",
                    "start": "2010-02-11",
                    "end": "2010-04-11"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-10-06",
                    "end": "2019-02-17"
                },
                {
                    "season": "2008-2009",
                    "start": "2008-11-04",
                    "end": "2009-03-01"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-01-22",
                    "end": "2017-02-19"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-09-22",
                    "end": "2024-02-18"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-10-02",
                    "end": "2022-02-20"
                },
                {
                    "season": "2011-2012",
                    "start": "2012-02-08",
                    "end": "2012-03-25"
                },
                {
                    "season": "2015-2016",
                    "start": "2016-01-23",
                    "end": "2016-02-21"
                },
                {
                    "season": "2012-2013",
                    "start": "2013-02-06",
                    "end": "2013-03-24"
                },
                {
                    "season": "2013-2014",
                    "start": "2014-02-05",
                    "end": "2014-03-30"
                },
                {
                    "season": "2014-2015",
                    "start": "2015-02-18",
                    "end": "2015-04-12"
                }
            ]
        },
        {
            "id": 42,
            "name": "Pro A",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/42.png",
            "country": {
                "id": 17,
                "name": "Germany",
                "code": "DE",
                "flag": "https://media.api-sports.io/flags/de.svg"
            },
            "seasons": [
                {
                    "season": "2019-2020",
                    "start": "2019-09-20",
                    "end": "2020-04-04"
                },
                {
                    "season": "2011-2012",
                    "start": "2011-09-24",
                    "end": "2012-05-06"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-09-30",
                    "end": "2023-06-04"
                },
                {
                    "season": "2012-2013",
                    "start": "2012-09-29",
                    "end": "2013-05-05"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-09-17",
                    "end": "2022-05-21"
                },
                {
                    "season": "2013-2014",
                    "start": "2013-09-28",
                    "end": "2014-05-04"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-10-17",
                    "end": "2021-05-09"
                },
                {
                    "season": "2014-2015",
                    "start": "2014-09-27",
                    "end": "2015-05-03"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-09-22",
                    "end": "2017-05-07"
                },
                {
                    "season": "2015-2016",
                    "start": "2015-09-25",
                    "end": "2016-05-08"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-09-22",
                    "end": "2018-05-06"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-09-29",
                    "end": "2024-04-27"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-09-21",
                    "end": "2019-05-04"
                }
            ]
        },
        {
            "id": 43,
            "name": "Pro B",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/43.png",
            "country": {
                "id": 17,
                "name": "Germany",
                "code": "DE",
                "flag": "https://media.api-sports.io/flags/de.svg"
            },
            "seasons": [
                {
                    "season": "2017-2018",
                    "start": "2017-09-23",
                    "end": "2018-05-05"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-09-18",
                    "end": "2022-05-22"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-09-30",
                    "end": "2024-04-19"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-09-30",
                    "end": "2023-06-03"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-10-16",
                    "end": "2021-05-16"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-09-22",
                    "end": "2019-05-03"
                },
                {
                    "season": "2019-2020",
                    "start": "2019-09-21",
                    "end": "2020-04-25"
                }
            ]
        },
        {
            "id": 135,
            "name": "Super Cup",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/135.png",
            "country": {
                "id": 17,
                "name": "Germany",
                "code": "DE",
                "flag": "https://media.api-sports.io/flags/de.svg"
            },
            "seasons": [
                {
                    "season": 2011,
                    "start": "2011-10-01",
                    "end": "2011-10-01"
                },
                {
                    "season": 2015,
                    "start": "2015-09-27",
                    "end": "2015-09-27"
                },
                {
                    "season": 2012,
                    "start": "2012-09-30",
                    "end": "2012-09-30"
                },
                {
                    "season": 2013,
                    "start": "2013-09-28",
                    "end": "2013-09-28"
                },
                {
                    "season": 2014,
                    "start": "2014-09-27",
                    "end": "2014-09-27"
                }
            ]
        },
        {
            "id": 45,
            "name": "Basket League",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/45.png",
            "country": {
                "id": 18,
                "name": "Greece",
                "code": "GR",
                "flag": "https://media.api-sports.io/flags/gr.svg"
            },
            "seasons": [
                {
                    "season": "2008-2009",
                    "start": "2008-10-15",
                    "end": "2009-06-03"
                },
                {
                    "season": "2009-2010",
                    "start": "2009-10-24",
                    "end": "2010-06-08"
                },
                {
                    "season": "2013-2014",
                    "start": "2013-10-12",
                    "end": "2014-06-04"
                },
                {
                    "season": "2012-2013",
                    "start": "2012-10-13",
                    "end": "2013-06-15"
                },
                {
                    "season": "2011-2012",
                    "start": "2011-10-22",
                    "end": "2012-06-02"
                },
                {
                    "season": "2010-2011",
                    "start": "2010-10-23",
                    "end": "2011-06-08"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-10-08",
                    "end": "2017-06-11"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-09-25",
                    "end": "2024-04-15"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-10-07",
                    "end": "2018-06-17"
                },
                {
                    "season": "2014-2015",
                    "start": "2014-10-12",
                    "end": "2015-06-17"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-10-06",
                    "end": "2019-05-23"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-10-08",
                    "end": "2023-06-15"
                },
                {
                    "season": "2019-2020",
                    "start": "2019-09-28",
                    "end": "2020-04-15"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-10-02",
                    "end": "2022-06-23"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-10-17",
                    "end": "2021-06-10"
                }
            ]
        },
        {
            "id": 234,
            "name": "A1 Women",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/234.png",
            "country": {
                "id": 18,
                "name": "Greece",
                "code": "GR",
                "flag": "https://media.api-sports.io/flags/gr.svg"
            },
            "seasons": [
                {
                    "season": "2020-2021",
                    "start": "2020-10-17",
                    "end": "2021-05-24"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-10-07",
                    "end": "2024-04-14"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-10-16",
                    "end": "2022-05-15"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-10-08",
                    "end": "2023-04-12"
                }
            ]
        },
        {
            "id": 44,
            "name": "A2",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/44.png",
            "country": {
                "id": 18,
                "name": "Greece",
                "code": "GR",
                "flag": "https://media.api-sports.io/flags/gr.svg"
            },
            "seasons": [
                {
                    "season": "2016-2017",
                    "start": "2016-10-08",
                    "end": "2017-05-24"
                },
                {
                    "season": "2010-2011",
                    "start": "2010-10-30",
                    "end": "2011-06-11"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-10-07",
                    "end": "2018-05-26"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-10-07",
                    "end": "2024-04-06"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-10-06",
                    "end": "2019-05-25"
                },
                {
                    "season": "2011-2012",
                    "start": "2011-10-01",
                    "end": "2012-05-19"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-10-03",
                    "end": "2021-06-30"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-10-08",
                    "end": "2023-05-28"
                },
                {
                    "season": "2019-2020",
                    "start": "2019-10-05",
                    "end": "2020-05-09"
                },
                {
                    "season": "2015-2016",
                    "start": "2015-10-03",
                    "end": "2016-06-11"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-10-16",
                    "end": "2022-06-01"
                },
                {
                    "season": "2014-2015",
                    "start": "2014-10-11",
                    "end": "2015-05-09"
                },
                {
                    "season": "2013-2014",
                    "start": "2013-10-12",
                    "end": "2014-05-10"
                },
                {
                    "season": "2012-2013",
                    "start": "2012-10-13",
                    "end": "2013-04-27"
                }
            ]
        },
        {
            "id": 236,
            "name": "A2 Women",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/236.png",
            "country": {
                "id": 18,
                "name": "Greece",
                "code": "GR",
                "flag": "https://media.api-sports.io/flags/gr.svg"
            },
            "seasons": [
                {
                    "season": "2021-2022",
                    "start": "2021-10-17",
                    "end": "2022-05-08"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-10-16",
                    "end": "2023-04-12"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-10-07",
                    "end": "2024-04-28"
                }
            ]
        },
        {
            "id": 136,
            "name": "Greek Cup",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/136.png",
            "country": {
                "id": 18,
                "name": "Greece",
                "code": "GR",
                "flag": "https://media.api-sports.io/flags/gr.svg"
            },
            "seasons": [
                {
                    "season": "2014-2015",
                    "start": "2014-10-08",
                    "end": "2015-04-05"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-09-16",
                    "end": "2021-05-09"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-10-01",
                    "end": "2023-02-19"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-09-08",
                    "end": "2022-02-20"
                },
                {
                    "season": "2008-2009",
                    "start": "2008-11-19",
                    "end": "2009-02-22"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-09-22",
                    "end": "2019-02-17"
                },
                {
                    "season": "2010-2011",
                    "start": "2010-10-13",
                    "end": "2011-05-15"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-09-20",
                    "end": "2018-02-17"
                },
                {
                    "season": "2013-2014",
                    "start": "2013-10-08",
                    "end": "2014-02-09"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-10-01",
                    "end": "2017-02-18"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-09-20",
                    "end": "2024-02-18"
                },
                {
                    "season": "2015-2016",
                    "start": "2015-10-07",
                    "end": "2016-03-06"
                },
                {
                    "season": "2012-2013",
                    "start": "2012-09-30",
                    "end": "2013-02-10"
                },
                {
                    "season": "2011-2012",
                    "start": "2011-10-11",
                    "end": "2012-03-10"
                }
            ]
        },
        {
            "id": 395,
            "name": "Greek Cup Women",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/395.png",
            "country": {
                "id": 18,
                "name": "Greece",
                "code": "GR",
                "flag": "https://media.api-sports.io/flags/gr.svg"
            },
            "seasons": [
                {
                    "season": "2022-2023",
                    "start": "2022-12-21",
                    "end": "2023-03-26"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-12-10",
                    "end": "2024-02-18"
                }
            ]
        },
        {
            "id": 235,
            "name": "Super Cup",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/235.png",
            "country": {
                "id": 18,
                "name": "Greece",
                "code": "GR",
                "flag": "https://media.api-sports.io/flags/gr.svg"
            },
            "seasons": [
                {
                    "season": 2021,
                    "start": "2021-09-25",
                    "end": "2021-09-26"
                },
                {
                    "season": 2022,
                    "start": "2022-10-01",
                    "end": "2022-10-02"
                },
                {
                    "season": 2020,
                    "start": "2020-09-23",
                    "end": "2020-09-24"
                },
                {
                    "season": 2023,
                    "start": "2023-09-29",
                    "end": "2023-09-30"
                }
            ]
        },
        {
            "id": 138,
            "name": "Hungarian Cup",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/138.png",
            "country": {
                "id": 19,
                "name": "Hungary",
                "code": "HU",
                "flag": "https://media.api-sports.io/flags/hu.svg"
            },
            "seasons": [
                {
                    "season": "2016-2017",
                    "start": "2017-02-16",
                    "end": "2017-02-18"
                },
                {
                    "season": "2022-2023",
                    "start": "2023-04-05",
                    "end": "2023-04-09"
                },
                {
                    "season": "2017-2018",
                    "start": "2018-02-16",
                    "end": "2018-02-18"
                },
                {
                    "season": "2020-2021",
                    "start": "2021-04-07",
                    "end": "2021-04-11"
                },
                {
                    "season": "2018-2019",
                    "start": "2019-02-14",
                    "end": "2019-02-16"
                },
                {
                    "season": "2021-2022",
                    "start": "2022-03-31",
                    "end": "2022-04-02"
                },
                {
                    "season": "2023-2024",
                    "start": "2024-01-24",
                    "end": "2024-04-07"
                }
            ]
        },
        {
            "id": 137,
            "name": "Hungarian Cup Women",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/137.png",
            "country": {
                "id": 19,
                "name": "Hungary",
                "code": "HU",
                "flag": "https://media.api-sports.io/flags/hu.svg"
            },
            "seasons": [
                {
                    "season": "2021-2022",
                    "start": "2022-02-18",
                    "end": "2022-02-20"
                },
                {
                    "season": "2023-2024",
                    "start": "2024-02-21",
                    "end": "2024-03-17"
                },
                {
                    "season": "2016-2017",
                    "start": "2017-03-31",
                    "end": "2017-04-02"
                },
                {
                    "season": "2022-2023",
                    "start": "2023-02-16",
                    "end": "2023-03-10"
                },
                {
                    "season": "2017-2018",
                    "start": "2018-03-23",
                    "end": "2018-03-25"
                },
                {
                    "season": "2018-2019",
                    "start": "2019-02-28",
                    "end": "2019-03-02"
                },
                {
                    "season": "2020-2021",
                    "start": "2021-02-24",
                    "end": "2021-02-28"
                }
            ]
        },
        {
            "id": 46,
            "name": "NB I A",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/46.png",
            "country": {
                "id": 19,
                "name": "Hungary",
                "code": "HU",
                "flag": "https://media.api-sports.io/flags/hu.svg"
            },
            "seasons": [
                {
                    "season": "2010-2011",
                    "start": "2010-10-09",
                    "end": "2011-05-18"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-10-06",
                    "end": "2017-06-18"
                },
                {
                    "season": "2011-2012",
                    "start": "2011-10-08",
                    "end": "2012-05-28"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-09-29",
                    "end": "2018-06-18"
                },
                {
                    "season": "2012-2013",
                    "start": "2012-10-04",
                    "end": "2013-06-02"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-09-28",
                    "end": "2019-05-24"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-09-30",
                    "end": "2023-05-28"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-10-02",
                    "end": "2021-05-26"
                },
                {
                    "season": "2014-2015",
                    "start": "2014-10-10",
                    "end": "2015-05-26"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-09-21",
                    "end": "2022-06-26"
                },
                {
                    "season": "2015-2016",
                    "start": "2015-10-02",
                    "end": "2016-06-10"
                },
                {
                    "season": "2019-2020",
                    "start": "2019-09-27",
                    "end": "2020-03-28"
                },
                {
                    "season": "2013-2014",
                    "start": "2013-10-04",
                    "end": "2014-06-07"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-09-29",
                    "end": "2024-05-18"
                }
            ]
        },
        {
            "id": 47,
            "name": "NB I A W",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/47.png",
            "country": {
                "id": 19,
                "name": "Hungary",
                "code": "HU",
                "flag": "https://media.api-sports.io/flags/hu.svg"
            },
            "seasons": [
                {
                    "season": "2021-2022",
                    "start": "2021-09-25",
                    "end": "2022-04-24"
                },
                {
                    "season": "2011-2012",
                    "start": "2011-09-21",
                    "end": "2012-04-29"
                },
                {
                    "season": "2019-2020",
                    "start": "2019-09-26",
                    "end": "2020-03-14"
                },
                {
                    "season": "2010-2011",
                    "start": "2010-09-25",
                    "end": "2011-04-22"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-10-02",
                    "end": "2021-05-04"
                },
                {
                    "season": "2009-2010",
                    "start": "2009-09-26",
                    "end": "2010-04-23"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-09-28",
                    "end": "2019-05-03"
                },
                {
                    "season": "2008-2009",
                    "start": "2008-09-30",
                    "end": "2009-04-26"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-09-29",
                    "end": "2018-05-05"
                },
                {
                    "season": "2012-2013",
                    "start": "2012-10-03",
                    "end": "2013-05-01"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-09-30",
                    "end": "2017-05-04"
                },
                {
                    "season": "2013-2014",
                    "start": "2013-10-05",
                    "end": "2014-05-02"
                },
                {
                    "season": "2014-2015",
                    "start": "2014-10-18",
                    "end": "2015-04-15"
                },
                {
                    "season": "2015-2016",
                    "start": "2015-10-01",
                    "end": "2016-04-27"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-09-24",
                    "end": "2023-04-22"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-09-30",
                    "end": "2024-04-24"
                }
            ]
        },
        {
            "id": 237,
            "name": "Icelandic Cup",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/237.png",
            "country": {
                "id": 20,
                "name": "Iceland",
                "code": "IS",
                "flag": "https://media.api-sports.io/flags/is.svg"
            },
            "seasons": [
                {
                    "season": "2021-2022",
                    "start": "2021-10-31",
                    "end": "2022-03-19"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-12-10",
                    "end": "2024-03-23"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-10-30",
                    "end": "2023-01-14"
                }
            ]
        },
        {
            "id": 48,
            "name": "Premier league",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/48.png",
            "country": {
                "id": 20,
                "name": "Iceland",
                "code": "IS",
                "flag": "https://media.api-sports.io/flags/is.svg"
            },
            "seasons": [
                {
                    "season": "2018-2019",
                    "start": "2018-10-04",
                    "end": "2019-05-04"
                },
                {
                    "season": "2015-2016",
                    "start": "2015-10-15",
                    "end": "2016-04-28"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-10-06",
                    "end": "2023-05-18"
                },
                {
                    "season": "2012-2013",
                    "start": "2012-10-07",
                    "end": "2013-04-28"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-10-06",
                    "end": "2017-04-30"
                },
                {
                    "season": "2013-2014",
                    "start": "2013-10-10",
                    "end": "2014-05-01"
                },
                {
                    "season": "2019-2020",
                    "start": "2019-10-03",
                    "end": "2020-03-19"
                },
                {
                    "season": "2014-2015",
                    "start": "2014-10-09",
                    "end": "2015-04-29"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-10-05",
                    "end": "2018-04-28"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-10-05",
                    "end": "2024-04-19"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-10-01",
                    "end": "2021-06-25"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-10-07",
                    "end": "2022-05-18"
                }
            ]
        },
        {
            "id": 49,
            "name": "Premier League W",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/49.png",
            "country": {
                "id": 20,
                "name": "Iceland",
                "code": "IS",
                "flag": "https://media.api-sports.io/flags/is.svg"
            },
            "seasons": [
                {
                    "season": "2023-2024",
                    "start": "2023-09-26",
                    "end": "2024-04-17"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-10-03",
                    "end": "2019-04-27"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-10-04",
                    "end": "2018-04-30"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-09-23",
                    "end": "2021-06-02"
                },
                {
                    "season": "2019-2020",
                    "start": "2019-10-02",
                    "end": "2020-03-28"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-10-05",
                    "end": "2017-04-26"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-10-06",
                    "end": "2022-05-01"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-09-20",
                    "end": "2023-04-28"
                }
            ]
        },
        {
            "id": 139,
            "name": "NBL",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/139.png",
            "country": {
                "id": 58,
                "name": "Indonesia",
                "code": "ID",
                "flag": "https://media.api-sports.io/flags/id.svg"
            },
            "seasons": [
                {
                    "season": "2018-2019",
                    "start": "2018-11-30",
                    "end": "2019-03-23"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-12-08",
                    "end": "2018-04-22"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-01-09",
                    "end": "2016-05-29"
                },
                {
                    "season": "2014-2015",
                    "start": "2014-12-03",
                    "end": "2015-05-10"
                },
                {
                    "season": "2012-2013",
                    "start": "2012-11-24",
                    "end": "2013-05-26"
                },
                {
                    "season": "2013-2014",
                    "start": "2013-11-16",
                    "end": "2014-06-14"
                }
            ]
        },
        {
            "id": 238,
            "name": "Super League",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/238.png",
            "country": {
                "id": 65,
                "name": "Iran",
                "code": "IR",
                "flag": "https://media.api-sports.io/flags/ir.svg"
            },
            "seasons": [
                {
                    "season": "2021-2022",
                    "start": "2021-10-16",
                    "end": "2022-05-01"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-09-29",
                    "end": "2023-05-25"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-10-25",
                    "end": "2024-04-13"
                }
            ]
        },
        {
            "id": 50,
            "name": "Super League",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/50.png",
            "country": {
                "id": 21,
                "name": "Ireland",
                "code": "IE",
                "flag": "https://media.api-sports.io/flags/ie.svg"
            },
            "seasons": [
                {
                    "season": "2021-2022",
                    "start": "2021-10-09",
                    "end": "2022-04-02"
                },
                {
                    "season": "2012-2013",
                    "start": "2012-09-28",
                    "end": "2013-03-23"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-10-24",
                    "end": "2021-03-06"
                },
                {
                    "season": "2013-2014",
                    "start": "2013-10-05",
                    "end": "2014-03-09"
                },
                {
                    "season": "2019-2020",
                    "start": "2019-09-21",
                    "end": "2020-03-14"
                },
                {
                    "season": "2014-2015",
                    "start": "2014-10-04",
                    "end": "2015-03-15"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-09-29",
                    "end": "2019-03-24"
                },
                {
                    "season": "2015-2016",
                    "start": "2015-10-03",
                    "end": "2016-03-06"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-10-01",
                    "end": "2023-04-01"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-09-30",
                    "end": "2024-04-14"
                }
            ]
        },
        {
            "id": 141,
            "name": "League Cup",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/141.png",
            "country": {
                "id": 22,
                "name": "Israel",
                "code": "IL",
                "flag": "https://media.api-sports.io/flags/il.svg"
            },
            "seasons": [
                {
                    "season": 2015,
                    "start": "2015-09-24",
                    "end": "2015-09-28"
                },
                {
                    "season": 2014,
                    "start": "2014-09-15",
                    "end": "2014-09-18"
                },
                {
                    "season": 2013,
                    "start": "2013-10-06",
                    "end": "2013-10-10"
                },
                {
                    "season": 2012,
                    "start": "2012-10-02",
                    "end": "2012-10-06"
                },
                {
                    "season": 2011,
                    "start": "2011-10-09",
                    "end": "2011-10-13"
                },
                {
                    "season": 2010,
                    "start": "2010-10-10",
                    "end": "2010-10-14"
                },
                {
                    "season": 2016,
                    "start": "2016-09-26",
                    "end": "2016-10-01"
                },
                {
                    "season": 2023,
                    "start": "2023-09-14",
                    "end": "2023-10-01"
                },
                {
                    "season": 2020,
                    "start": "2020-09-22",
                    "end": "2020-12-26"
                },
                {
                    "season": 2022,
                    "start": "2022-09-19",
                    "end": "2022-10-23"
                },
                {
                    "season": 2017,
                    "start": "2017-10-01",
                    "end": "2017-10-05"
                },
                {
                    "season": 2018,
                    "start": "2018-09-25",
                    "end": "2018-10-04"
                },
                {
                    "season": 2021,
                    "start": "2021-09-13",
                    "end": "2021-09-26"
                }
            ]
        },
        {
            "id": 140,
            "name": "Israel Cup",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/140.png",
            "country": {
                "id": 22,
                "name": "Israel",
                "code": "IL",
                "flag": "https://media.api-sports.io/flags/il.svg"
            },
            "seasons": [
                {
                    "season": "2021-2022",
                    "start": "2022-01-16",
                    "end": "2022-02-17"
                },
                {
                    "season": "2023-2024",
                    "start": "2024-03-27",
                    "end": "2024-05-09"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-11-04",
                    "end": "2021-05-27"
                },
                {
                    "season": "2011-2012",
                    "start": "2012-01-11",
                    "end": "2012-02-16"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-12-23",
                    "end": "2019-02-14"
                },
                {
                    "season": "2014-2015",
                    "start": "2014-12-24",
                    "end": "2015-02-22"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-10-18",
                    "end": "2018-02-15"
                },
                {
                    "season": "2013-2014",
                    "start": "2013-12-26",
                    "end": "2014-02-06"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-10-05",
                    "end": "2017-02-16"
                },
                {
                    "season": "2012-2013",
                    "start": "2013-02-02",
                    "end": "2013-02-07"
                },
                {
                    "season": "2015-2016",
                    "start": "2015-12-24",
                    "end": "2016-02-18"
                },
                {
                    "season": "2022-2023",
                    "start": "2023-01-14",
                    "end": "2023-02-16"
                },
                {
                    "season": "2010-2011",
                    "start": "2011-01-09",
                    "end": "2011-02-10"
                },
                {
                    "season": "2008-2009",
                    "start": "2009-01-21",
                    "end": "2009-02-19"
                }
            ]
        },
        {
            "id": 239,
            "name": "Liga Leumit",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/239.png",
            "country": {
                "id": 22,
                "name": "Israel",
                "code": "IL",
                "flag": "https://media.api-sports.io/flags/il.svg"
            },
            "seasons": [
                {
                    "season": "2023-2024",
                    "start": "2023-11-27",
                    "end": "2024-04-17"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-11-17",
                    "end": "2021-06-17"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-10-11",
                    "end": "2023-05-22"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-10-10",
                    "end": "2022-05-20"
                }
            ]
        },
        {
            "id": 51,
            "name": "Super League",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/51.png",
            "country": {
                "id": 22,
                "name": "Israel",
                "code": "IL",
                "flag": "https://media.api-sports.io/flags/il.svg"
            },
            "seasons": [
                {
                    "season": "2009-2010",
                    "start": "2009-10-24",
                    "end": "2010-05-27"
                },
                {
                    "season": "2019-2020",
                    "start": "2019-10-05",
                    "end": "2020-07-28"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-10-06",
                    "end": "2024-04-28"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-10-09",
                    "end": "2022-06-09"
                },
                {
                    "season": "2008-2009",
                    "start": "2008-10-25",
                    "end": "2009-05-21"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-10-06",
                    "end": "2019-05-28"
                },
                {
                    "season": "2010-2011",
                    "start": "2010-10-17",
                    "end": "2011-05-26"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-10-08",
                    "end": "2018-06-14"
                },
                {
                    "season": "2011-2012",
                    "start": "2011-10-16",
                    "end": "2012-05-24"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-10-08",
                    "end": "2017-06-15"
                },
                {
                    "season": "2012-2013",
                    "start": "2012-10-14",
                    "end": "2013-06-13"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-11-01",
                    "end": "2021-06-17"
                },
                {
                    "season": "2013-2014",
                    "start": "2013-10-13",
                    "end": "2014-06-11"
                },
                {
                    "season": "2014-2015",
                    "start": "2014-10-05",
                    "end": "2015-06-25"
                },
                {
                    "season": "2015-2016",
                    "start": "2015-10-10",
                    "end": "2016-06-09"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-10-07",
                    "end": "2023-06-13"
                }
            ]
        },
        {
            "id": 240,
            "name": "WBL Women",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/240.png",
            "country": {
                "id": 22,
                "name": "Israel",
                "code": "IL",
                "flag": "https://media.api-sports.io/flags/il.svg"
            },
            "seasons": [
                {
                    "season": "2021-2022",
                    "start": "2021-10-17",
                    "end": "2022-04-25"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-11-20",
                    "end": "2024-04-15"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-10-20",
                    "end": "2023-04-27"
                }
            ]
        },
        {
            "id": 144,
            "name": "A2 - Play Offs",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/144.png",
            "country": {
                "id": 23,
                "name": "Italy",
                "code": "IT",
                "flag": "https://media.api-sports.io/flags/it.svg"
            },
            "seasons": [
                {
                    "season": "2017-2018",
                    "start": "2018-04-29",
                    "end": "2018-06-16"
                },
                {
                    "season": "2016-2017",
                    "start": "2017-04-29",
                    "end": "2017-06-19"
                },
                {
                    "season": "2018-2019",
                    "start": "2019-04-27",
                    "end": "2019-06-17"
                },
                {
                    "season": "2015-2016",
                    "start": "2016-05-01",
                    "end": "2016-06-24"
                },
                {
                    "season": "2014-2015",
                    "start": "2015-04-23",
                    "end": "2015-06-10"
                }
            ]
        },
        {
            "id": 145,
            "name": "A2 - Play Out",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/145.png",
            "country": {
                "id": 23,
                "name": "Italy",
                "code": "IT",
                "flag": "https://media.api-sports.io/flags/it.svg"
            },
            "seasons": [
                {
                    "season": "2018-2019",
                    "start": "2019-04-28",
                    "end": "2019-05-22"
                },
                {
                    "season": "2017-2018",
                    "start": "2018-04-29",
                    "end": "2018-05-17"
                }
            ]
        },
        {
            "id": 54,
            "name": "A2 - West",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/54.png",
            "country": {
                "id": 23,
                "name": "Italy",
                "code": "IT",
                "flag": "https://media.api-sports.io/flags/it.svg"
            },
            "seasons": [
                {
                    "season": "2018-2019",
                    "start": "2018-10-05",
                    "end": "2019-04-20"
                },
                {
                    "season": "2019-2020",
                    "start": "2019-10-06",
                    "end": "2020-03-15"
                }
            ]
        },
        {
            "id": 55,
            "name": "A2 East",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/55.png",
            "country": {
                "id": 23,
                "name": "Italy",
                "code": "IT",
                "flag": "https://media.api-sports.io/flags/it.svg"
            },
            "seasons": [
                {
                    "season": "2019-2020",
                    "start": "2019-10-05",
                    "end": "2020-03-14"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-10-07",
                    "end": "2019-05-01"
                }
            ]
        },
        {
            "id": 241,
            "name": "Coppa Italia Women",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/241.png",
            "country": {
                "id": 23,
                "name": "Italy",
                "code": "IT",
                "flag": "https://media.api-sports.io/flags/it.svg"
            },
            "seasons": [
                {
                    "season": "2022-2023",
                    "start": "2023-03-30",
                    "end": "2023-04-01"
                },
                {
                    "season": "2020-2021",
                    "start": "2021-03-04",
                    "end": "2021-03-08"
                },
                {
                    "season": "2023-2024",
                    "start": "2024-01-04",
                    "end": "2024-02-18"
                },
                {
                    "season": "2021-2022",
                    "start": "2022-03-24",
                    "end": "2022-03-27"
                }
            ]
        },
        {
            "id": 143,
            "name": "Italian Cup",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/143.png",
            "country": {
                "id": 23,
                "name": "Italy",
                "code": "IT",
                "flag": "https://media.api-sports.io/flags/it.svg"
            },
            "seasons": [
                {
                    "season": 2013,
                    "start": "2014-02-07",
                    "end": "2014-02-09"
                },
                {
                    "season": 2021,
                    "start": "2021-02-11",
                    "end": "2021-02-14"
                },
                {
                    "season": 2024,
                    "start": "2024-02-14",
                    "end": "2024-02-18"
                },
                {
                    "season": 2015,
                    "start": "2015-02-20",
                    "end": "2015-02-22"
                },
                {
                    "season": 2023,
                    "start": "2023-02-15",
                    "end": "2023-02-19"
                },
                {
                    "season": 2016,
                    "start": "2016-02-19",
                    "end": "2016-02-21"
                },
                {
                    "season": 2009,
                    "start": "2010-02-18",
                    "end": "2010-02-21"
                },
                {
                    "season": 2017,
                    "start": "2017-02-16",
                    "end": "2017-02-19"
                },
                {
                    "season": 2010,
                    "start": "2011-02-10",
                    "end": "2011-02-13"
                },
                {
                    "season": 2018,
                    "start": "2018-02-15",
                    "end": "2018-02-18"
                },
                {
                    "season": 2011,
                    "start": "2012-02-16",
                    "end": "2012-02-19"
                },
                {
                    "season": 2019,
                    "start": "2019-02-14",
                    "end": "2019-02-17"
                },
                {
                    "season": 2012,
                    "start": "2013-02-07",
                    "end": "2013-02-10"
                },
                {
                    "season": 2022,
                    "start": "2022-02-16",
                    "end": "2022-02-20"
                }
            ]
        },
        {
            "id": 52,
            "name": "Lega A",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/52.png",
            "country": {
                "id": 23,
                "name": "Italy",
                "code": "IT",
                "flag": "https://media.api-sports.io/flags/it.svg"
            },
            "seasons": [
                {
                    "season": "2023-2024",
                    "start": "2023-09-30",
                    "end": "2024-05-05"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-10-01",
                    "end": "2023-06-23"
                },
                {
                    "season": "2008-2009",
                    "start": "2008-10-12",
                    "end": "2009-06-16"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-10-02",
                    "end": "2017-06-20"
                },
                {
                    "season": "2010-2011",
                    "start": "2010-10-16",
                    "end": "2011-06-19"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-09-30",
                    "end": "2018-06-15"
                },
                {
                    "season": "2015-2016",
                    "start": "2015-10-04",
                    "end": "2016-06-13"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-10-06",
                    "end": "2019-05-24"
                },
                {
                    "season": "2011-2012",
                    "start": "2011-10-08",
                    "end": "2012-06-17"
                },
                {
                    "season": "2019-2020",
                    "start": "2019-09-24",
                    "end": "2020-04-26"
                },
                {
                    "season": "2012-2013",
                    "start": "2012-09-26",
                    "end": "2013-06-19"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-09-25",
                    "end": "2022-06-18"
                },
                {
                    "season": "2009-2010",
                    "start": "2009-10-04",
                    "end": "2010-06-19"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-09-26",
                    "end": "2021-06-11"
                },
                {
                    "season": "2014-2015",
                    "start": "2014-10-11",
                    "end": "2015-06-26"
                },
                {
                    "season": "2013-2014",
                    "start": "2013-10-13",
                    "end": "2014-06-27"
                }
            ]
        },
        {
            "id": 142,
            "name": "Lega A - Super Cup",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/142.png",
            "country": {
                "id": 23,
                "name": "Italy",
                "code": "IT",
                "flag": "https://media.api-sports.io/flags/it.svg"
            },
            "seasons": [
                {
                    "season": 2018,
                    "start": "2018-09-29",
                    "end": "2018-09-30"
                },
                {
                    "season": 2014,
                    "start": "2014-10-04",
                    "end": "2014-10-05"
                },
                {
                    "season": 2016,
                    "start": "2016-09-24",
                    "end": "2016-09-25"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-09-28",
                    "end": "2022-09-29"
                },
                {
                    "season": 2015,
                    "start": "2015-09-26",
                    "end": "2015-09-27"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-09-23",
                    "end": "2023-09-24"
                },
                {
                    "season": 2017,
                    "start": "2017-09-23",
                    "end": "2017-09-24"
                },
                {
                    "season": 2011,
                    "start": "2011-10-01",
                    "end": "2011-10-01"
                },
                {
                    "season": 2020,
                    "start": "2020-08-27",
                    "end": "2020-09-20"
                },
                {
                    "season": 2012,
                    "start": "2012-09-22",
                    "end": "2012-09-22"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-09-03",
                    "end": "2021-09-21"
                },
                {
                    "season": 2013,
                    "start": "2013-10-08",
                    "end": "2013-10-08"
                }
            ]
        },
        {
            "id": 53,
            "name": "Serie A1 W",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/53.png",
            "country": {
                "id": 23,
                "name": "Italy",
                "code": "IT",
                "flag": "https://media.api-sports.io/flags/it.svg"
            },
            "seasons": [
                {
                    "season": "2018-2019",
                    "start": "2018-10-06",
                    "end": "2019-05-09"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-09-30",
                    "end": "2024-04-20"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-10-01",
                    "end": "2022-05-05"
                },
                {
                    "season": "2014-2015",
                    "start": "2014-10-04",
                    "end": "2015-05-04"
                },
                {
                    "season": "2019-2020",
                    "start": "2019-10-05",
                    "end": "2020-04-11"
                },
                {
                    "season": "2008-2009",
                    "start": "2008-10-11",
                    "end": "2009-05-10"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-09-30",
                    "end": "2018-05-13"
                },
                {
                    "season": "2009-2010",
                    "start": "2009-10-10",
                    "end": "2010-05-16"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-10-01",
                    "end": "2017-05-07"
                },
                {
                    "season": "2010-2011",
                    "start": "2010-10-23",
                    "end": "2011-05-11"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-10-03",
                    "end": "2021-05-16"
                },
                {
                    "season": "2011-2012",
                    "start": "2011-10-15",
                    "end": "2012-05-07"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-10-01",
                    "end": "2023-05-05"
                },
                {
                    "season": "2012-2013",
                    "start": "2012-10-13",
                    "end": "2013-05-04"
                },
                {
                    "season": "2013-2014",
                    "start": "2013-10-12",
                    "end": "2014-05-04"
                },
                {
                    "season": "2015-2016",
                    "start": "2015-10-03",
                    "end": "2016-05-15"
                }
            ]
        },
        {
            "id": 242,
            "name": "Serie A2",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/242.png",
            "country": {
                "id": 23,
                "name": "Italy",
                "code": "IT",
                "flag": "https://media.api-sports.io/flags/it.svg"
            },
            "seasons": [
                {
                    "season": "2020-2021",
                    "start": "2020-11-21",
                    "end": "2021-06-29"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-09-30",
                    "end": "2024-04-21"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-10-01",
                    "end": "2023-06-19"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-10-03",
                    "end": "2022-06-18"
                }
            ]
        },
        {
            "id": 243,
            "name": "Serie A2 Women - North",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/243.png",
            "country": {
                "id": 23,
                "name": "Italy",
                "code": "IT",
                "flag": "https://media.api-sports.io/flags/it.svg"
            },
            "seasons": [
                {
                    "season": "2022-2023",
                    "start": "2022-10-08",
                    "end": "2023-05-25"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-10-09",
                    "end": "2022-06-01"
                }
            ]
        },
        {
            "id": 244,
            "name": "Serie A2 Women - South",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/244.png",
            "country": {
                "id": 23,
                "name": "Italy",
                "code": "IT",
                "flag": "https://media.api-sports.io/flags/it.svg"
            },
            "seasons": [
                {
                    "season": "2022-2023",
                    "start": "2022-10-08",
                    "end": "2023-06-01"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-10-09",
                    "end": "2022-06-03"
                }
            ]
        },
        {
            "id": 245,
            "name": "Super Cup Women",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/245.png",
            "country": {
                "id": 23,
                "name": "Italy",
                "code": "IT",
                "flag": "https://media.api-sports.io/flags/it.svg"
            },
            "seasons": [
                {
                    "season": 2023,
                    "start": "2023-09-22",
                    "end": "2023-09-23"
                },
                {
                    "season": 2021,
                    "start": "2021-09-27",
                    "end": "2021-09-28"
                },
                {
                    "season": 2022,
                    "start": "2022-09-27",
                    "end": "2022-09-28"
                }
            ]
        },
        {
            "id": 56,
            "name": "B League",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/56.png",
            "country": {
                "id": 24,
                "name": "Japan",
                "code": "JP",
                "flag": "https://media.api-sports.io/flags/jp.svg"
            },
            "seasons": [
                {
                    "season": "2022-2023",
                    "start": "2022-09-29",
                    "end": "2023-05-28"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-10-05",
                    "end": "2024-05-06"
                },
                {
                    "season": "2019-2020",
                    "start": "2019-10-03",
                    "end": "2020-05-04"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-09-22",
                    "end": "2017-05-28"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-09-30",
                    "end": "2022-05-29"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-10-02",
                    "end": "2021-06-01"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-09-29",
                    "end": "2018-05-27"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-10-04",
                    "end": "2019-05-11"
                }
            ]
        },
        {
            "id": 407,
            "name": "B2.League",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/407.png",
            "country": {
                "id": 24,
                "name": "Japan",
                "code": "JP",
                "flag": "https://media.api-sports.io/flags/jp.svg"
            },
            "seasons": [
                {
                    "season": "2023-2024",
                    "start": "2023-10-05",
                    "end": "2024-04-21"
                }
            ]
        },
        {
            "id": 185,
            "name": "BJ League",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/185.png",
            "country": {
                "id": 24,
                "name": "Japan",
                "code": "JP",
                "flag": "https://media.api-sports.io/flags/jp.svg"
            },
            "seasons": [
                {
                    "season": "2013-2014",
                    "start": "2013-10-04",
                    "end": "2014-05-25"
                },
                {
                    "season": "2014-2015",
                    "start": "2014-10-04",
                    "end": "2015-05-24"
                },
                {
                    "season": "2015-2016",
                    "start": "2015-10-02",
                    "end": "2016-05-15"
                }
            ]
        },
        {
            "id": 184,
            "name": "JBL League",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/184.png",
            "country": {
                "id": 24,
                "name": "Japan",
                "code": "JP",
                "flag": "https://media.api-sports.io/flags/jp.svg"
            },
            "seasons": [
                {
                    "season": "2012-2013",
                    "start": "2012-10-05",
                    "end": "2013-04-22"
                },
                {
                    "season": "2011-2012",
                    "start": "2011-10-07",
                    "end": "2012-04-22"
                },
                {
                    "season": "2010-2011",
                    "start": "2010-09-17",
                    "end": "2011-03-06"
                }
            ]
        },
        {
            "id": 186,
            "name": "NBL",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/186.png",
            "country": {
                "id": 24,
                "name": "Japan",
                "code": "JP",
                "flag": "https://media.api-sports.io/flags/jp.svg"
            },
            "seasons": [
                {
                    "season": "2015-2016",
                    "start": "2015-10-09",
                    "end": "2016-06-05"
                },
                {
                    "season": "2013-2014",
                    "start": "2013-09-28",
                    "end": "2014-05-24"
                },
                {
                    "season": "2014-2015",
                    "start": "2014-10-10",
                    "end": "2015-05-30"
                }
            ]
        },
        {
            "id": 246,
            "name": "W League Women",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/246.png",
            "country": {
                "id": 24,
                "name": "Japan",
                "code": "JP",
                "flag": "https://media.api-sports.io/flags/jp.svg"
            },
            "seasons": [
                {
                    "season": "2023-2024",
                    "start": "2023-10-14",
                    "end": "2024-04-14"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-10-16",
                    "end": "2022-04-17"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-10-19",
                    "end": "2023-04-17"
                }
            ]
        },
        {
            "id": 247,
            "name": "Championship Women",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/247.png",
            "country": {
                "id": 25,
                "name": "Kazakhstan",
                "code": "KZ",
                "flag": "https://media.api-sports.io/flags/kz.svg"
            },
            "seasons": [
                {
                    "season": "2021-2022",
                    "start": "2021-10-07",
                    "end": "2022-05-29"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-10-20",
                    "end": "2021-05-06"
                }
            ]
        },
        {
            "id": 57,
            "name": "National League",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/57.png",
            "country": {
                "id": 25,
                "name": "Kazakhstan",
                "code": "KZ",
                "flag": "https://media.api-sports.io/flags/kz.svg"
            },
            "seasons": [
                {
                    "season": "2013-2014",
                    "start": "2013-10-08",
                    "end": "2014-04-26"
                },
                {
                    "season": "2014-2015",
                    "start": "2014-10-08",
                    "end": "2015-04-10"
                },
                {
                    "season": "2015-2016",
                    "start": "2015-11-11",
                    "end": "2016-05-03"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-10-14",
                    "end": "2017-04-23"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-09-29",
                    "end": "2023-05-12"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-10-26",
                    "end": "2021-05-16"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-10-18",
                    "end": "2024-04-10"
                },
                {
                    "season": "2019-2020",
                    "start": "2019-10-10",
                    "end": "2020-04-18"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-09-26",
                    "end": "2022-05-14"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-10-09",
                    "end": "2019-05-21"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-12-12",
                    "end": "2018-05-05"
                }
            ]
        },
        {
            "id": 396,
            "name": "Higher League",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/396.png",
            "country": {
                "id": 25,
                "name": "Kazakhstan",
                "code": "KZ",
                "flag": "https://media.api-sports.io/flags/kz.svg"
            },
            "seasons": [
                {
                    "season": "2022-2023",
                    "start": "2022-10-20",
                    "end": "2023-04-11"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-10-11",
                    "end": "2024-04-10"
                }
            ]
        },
        {
            "id": 397,
            "name": "National League Women",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/397.png",
            "country": {
                "id": 25,
                "name": "Kazakhstan",
                "code": "KZ",
                "flag": "https://media.api-sports.io/flags/kz.svg"
            },
            "seasons": [
                {
                    "season": "2022-2023",
                    "start": "2022-10-16",
                    "end": "2023-05-09"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-10-17",
                    "end": "2024-04-18"
                }
            ]
        },
        {
            "id": 58,
            "name": "Premier League",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/58.png",
            "country": {
                "id": 25,
                "name": "Kazakhstan",
                "code": "KZ",
                "flag": "https://media.api-sports.io/flags/kz.svg"
            },
            "seasons": [
                {
                    "season": "2020-2021",
                    "start": "2020-10-23",
                    "end": "2021-03-25"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-10-20",
                    "end": "2022-04-15"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-10-31",
                    "end": "2019-04-28"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-10-08",
                    "end": "2018-04-20"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-10-26",
                    "end": "2017-04-16"
                },
                {
                    "season": "2019-2020",
                    "start": "2019-10-13",
                    "end": "2020-04-08"
                }
            ]
        },
        {
            "id": 59,
            "name": "Superliga",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/59.png",
            "country": {
                "id": 26,
                "name": "Kosovo",
                "code": "XK",
                "flag": "https://media.api-sports.io/flags/xk.svg"
            },
            "seasons": [
                {
                    "season": "2015-2016",
                    "start": "2015-10-03",
                    "end": "2016-05-21"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-10-07",
                    "end": "2017-05-24"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-09-22",
                    "end": "2024-04-11"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-09-22",
                    "end": "2019-05-10"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-09-10",
                    "end": "2023-05-18"
                },
                {
                    "season": "2019-2020",
                    "start": "2019-09-27",
                    "end": "2020-05-09"
                },
                {
                    "season": "2013-2014",
                    "start": "2013-10-05",
                    "end": "2014-05-29"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-09-14",
                    "end": "2022-06-02"
                },
                {
                    "season": "2014-2015",
                    "start": "2014-10-05",
                    "end": "2015-05-18"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-10-28",
                    "end": "2021-05-11"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-10-04",
                    "end": "2018-05-23"
                }
            ]
        },
        {
            "id": 398,
            "name": "Superliga Women",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/398.png",
            "country": {
                "id": 26,
                "name": "Kosovo",
                "code": "XK",
                "flag": "https://media.api-sports.io/flags/xk.svg"
            },
            "seasons": [
                {
                    "season": "2023-2024",
                    "start": "2023-10-07",
                    "end": "2024-04-09"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-10-14",
                    "end": "2023-04-11"
                }
            ]
        },
        {
            "id": 408,
            "name": "Latvian Cup",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/408.png",
            "country": {
                "id": 59,
                "name": "Latvia",
                "code": "LV",
                "flag": "https://media.api-sports.io/flags/lv.svg"
            },
            "seasons": [
                {
                    "season": 2024,
                    "start": "2024-01-05",
                    "end": "2024-02-17"
                }
            ]
        },
        {
            "id": 146,
            "name": "LBL",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/146.png",
            "country": {
                "id": 59,
                "name": "Latvia",
                "code": "LV",
                "flag": "https://media.api-sports.io/flags/lv.svg"
            },
            "seasons": [
                {
                    "season": "2020-2021",
                    "start": "2021-04-13",
                    "end": "2021-05-17"
                },
                {
                    "season": "2022-2023",
                    "start": "2023-04-05",
                    "end": "2023-05-16"
                },
                {
                    "season": "2021-2022",
                    "start": "2022-04-13",
                    "end": "2022-05-19"
                },
                {
                    "season": "2023-2024",
                    "start": "2024-04-08",
                    "end": "2024-04-16"
                },
                {
                    "season": "2018-2019",
                    "start": "2019-04-09",
                    "end": "2019-05-17"
                },
                {
                    "season": "2014-2015",
                    "start": "2014-10-01",
                    "end": "2015-05-28"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-09-27",
                    "end": "2018-06-06"
                },
                {
                    "season": "2013-2014",
                    "start": "2013-10-01",
                    "end": "2014-05-17"
                },
                {
                    "season": "2015-2016",
                    "start": "2015-09-29",
                    "end": "2016-05-31"
                },
                {
                    "season": "2012-2013",
                    "start": "2012-10-03",
                    "end": "2013-05-27"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-09-28",
                    "end": "2017-05-25"
                },
                {
                    "season": "2011-2012",
                    "start": "2011-10-08",
                    "end": "2012-05-20"
                }
            ]
        },
        {
            "id": 409,
            "name": "Division 1",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/409.png",
            "country": {
                "id": 77,
                "name": "Lebanon",
                "code": "LB",
                "flag": "https://media.api-sports.io/flags/lb.svg"
            },
            "seasons": [
                {
                    "season": "2023-2024",
                    "start": "2023-10-26",
                    "end": "2024-04-15"
                }
            ]
        },
        {
            "id": 248,
            "name": "King Mindaugas Cup",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/248.png",
            "country": {
                "id": 27,
                "name": "Lithuania",
                "code": "LT",
                "flag": "https://media.api-sports.io/flags/lt.svg"
            },
            "seasons": [
                {
                    "season": "2020-2021",
                    "start": "2020-10-06",
                    "end": "2021-02-14"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-10-10",
                    "end": "2024-02-18"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-09-28",
                    "end": "2022-02-20"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-10-19",
                    "end": "2023-02-19"
                }
            ]
        },
        {
            "id": 147,
            "name": "LKF Cup",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/147.png",
            "country": {
                "id": 27,
                "name": "Lithuania",
                "code": "LT",
                "flag": "https://media.api-sports.io/flags/lt.svg"
            },
            "seasons": [
                {
                    "season": 2018,
                    "start": "2018-02-13",
                    "end": "2018-02-18"
                },
                {
                    "season": 2019,
                    "start": "2019-10-08",
                    "end": "2020-02-16"
                }
            ]
        },
        {
            "id": 60,
            "name": "LKL",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/60.png",
            "country": {
                "id": 27,
                "name": "Lithuania",
                "code": "LT",
                "flag": "https://media.api-sports.io/flags/lt.svg"
            },
            "seasons": [
                {
                    "season": "2015-2016",
                    "start": "2015-09-30",
                    "end": "2016-06-06"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-09-21",
                    "end": "2017-06-10"
                },
                {
                    "season": "2014-2015",
                    "start": "2014-09-24",
                    "end": "2015-06-10"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-09-19",
                    "end": "2018-06-18"
                },
                {
                    "season": "2013-2014",
                    "start": "2013-09-26",
                    "end": "2014-06-11"
                },
                {
                    "season": "2019-2020",
                    "start": "2019-09-21",
                    "end": "2020-05-07"
                },
                {
                    "season": "2012-2013",
                    "start": "2012-09-26",
                    "end": "2013-05-13"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-09-18",
                    "end": "2021-06-11"
                },
                {
                    "season": "2011-2012",
                    "start": "2011-10-01",
                    "end": "2012-05-13"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-09-18",
                    "end": "2022-06-07"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-09-24",
                    "end": "2023-06-10"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-09-22",
                    "end": "2019-05-24"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-09-16",
                    "end": "2024-05-09"
                }
            ]
        },
        {
            "id": 62,
            "name": "Moteru Lyga W",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/62.png",
            "country": {
                "id": 27,
                "name": "Lithuania",
                "code": "LT",
                "flag": "https://media.api-sports.io/flags/lt.svg"
            },
            "seasons": [
                {
                    "season": "2019-2020",
                    "start": "2019-10-11",
                    "end": "2020-04-03"
                },
                {
                    "season": "2022-2023",
                    "start": "2023-09-29",
                    "end": "2023-10-10"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-10-02",
                    "end": "2021-04-02"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-10-01",
                    "end": "2022-04-16"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-10-04",
                    "end": "2017-04-19"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-10-10",
                    "end": "2018-04-22"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-10-05",
                    "end": "2019-04-14"
                }
            ]
        },
        {
            "id": 61,
            "name": "NKL",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/61.png",
            "country": {
                "id": 27,
                "name": "Lithuania",
                "code": "LT",
                "flag": "https://media.api-sports.io/flags/lt.svg"
            },
            "seasons": [
                {
                    "season": "2022-2023",
                    "start": "2022-10-06",
                    "end": "2023-04-22"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-10-15",
                    "end": "2021-04-03"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-10-05",
                    "end": "2024-04-09"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-10-02",
                    "end": "2022-04-23"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-10-06",
                    "end": "2017-04-22"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-10-05",
                    "end": "2019-04-13"
                },
                {
                    "season": "2019-2020",
                    "start": "2019-10-03",
                    "end": "2020-03-21"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-10-05",
                    "end": "2018-04-14"
                }
            ]
        },
        {
            "id": 249,
            "name": "Total League",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/249.png",
            "country": {
                "id": 66,
                "name": "Luxembourg",
                "code": "LU",
                "flag": "https://media.api-sports.io/flags/lu.svg"
            },
            "seasons": [
                {
                    "season": "2023-2024",
                    "start": "2023-09-23",
                    "end": "2024-04-27"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-09-24",
                    "end": "2022-05-21"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-09-24",
                    "end": "2023-05-03"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-09-26",
                    "end": "2021-06-18"
                }
            ]
        },
        {
            "id": 250,
            "name": "Total League Women",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/250.png",
            "country": {
                "id": 66,
                "name": "Luxembourg",
                "code": "LU",
                "flag": "https://media.api-sports.io/flags/lu.svg"
            },
            "seasons": [
                {
                    "season": "2023-2024",
                    "start": "2023-09-23",
                    "end": "2024-05-05"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-09-24",
                    "end": "2023-05-21"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-09-26",
                    "end": "2021-06-05"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-09-24",
                    "end": "2022-05-08"
                }
            ]
        },
        {
            "id": 150,
            "name": "Macedonian Cup",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/150.png",
            "country": {
                "id": 32,
                "name": "Macedonia",
                "code": "MK",
                "flag": "https://media.api-sports.io/flags/mk.svg"
            },
            "seasons": [
                {
                    "season": "2022-2023",
                    "start": "2023-02-16",
                    "end": "2023-02-18"
                },
                {
                    "season": "2020-2021",
                    "start": "2021-05-14",
                    "end": "2021-05-16"
                },
                {
                    "season": "2023-2024",
                    "start": "2024-02-15",
                    "end": "2024-02-17"
                },
                {
                    "season": "2018-2019",
                    "start": "2019-04-12",
                    "end": "2019-04-14"
                },
                {
                    "season": "2017-2018",
                    "start": "2018-02-16",
                    "end": "2018-02-18"
                },
                {
                    "season": "2016-2017",
                    "start": "2017-02-17",
                    "end": "2017-02-19"
                },
                {
                    "season": "2021-2022",
                    "start": "2022-02-18",
                    "end": "2022-02-20"
                }
            ]
        },
        {
            "id": 318,
            "name": "Prva Liga",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/318.png",
            "country": {
                "id": 32,
                "name": "Macedonia",
                "code": "MK",
                "flag": "https://media.api-sports.io/flags/mk.svg"
            },
            "seasons": [
                {
                    "season": "2022-2023",
                    "start": "2022-10-06",
                    "end": "2023-06-04"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-10-02",
                    "end": "2022-06-10"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-09-27",
                    "end": "2024-05-11"
                }
            ]
        },
        {
            "id": 257,
            "name": "Prva Liga Women",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/257.png",
            "country": {
                "id": 32,
                "name": "Macedonia",
                "code": "MK",
                "flag": "https://media.api-sports.io/flags/mk.svg"
            },
            "seasons": [
                {
                    "season": "2021-2022",
                    "start": "2021-10-09",
                    "end": "2022-05-22"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-09-30",
                    "end": "2024-04-13"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-10-17",
                    "end": "2021-05-29"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-10-15",
                    "end": "2023-05-14"
                }
            ]
        },
        {
            "id": 67,
            "name": "Superleague",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/67.png",
            "country": {
                "id": 32,
                "name": "Macedonia",
                "code": "MK",
                "flag": "https://media.api-sports.io/flags/mk.svg"
            },
            "seasons": [
                {
                    "season": "2020-2021",
                    "start": "2020-10-31",
                    "end": "2021-06-06"
                },
                {
                    "season": "2013-2014",
                    "start": "2013-10-12",
                    "end": "2014-06-03"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-10-06",
                    "end": "2019-05-22"
                },
                {
                    "season": "2014-2015",
                    "start": "2014-10-10",
                    "end": "2015-06-02"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-11-19",
                    "end": "2017-05-24"
                },
                {
                    "season": "2012-2013",
                    "start": "2012-10-27",
                    "end": "2013-05-26"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-10-07",
                    "end": "2018-05-25"
                },
                {
                    "season": "2015-2016",
                    "start": "2015-10-10",
                    "end": "2016-05-27"
                },
                {
                    "season": "2019-2020",
                    "start": "2019-10-12",
                    "end": "2020-03-15"
                }
            ]
        },
        {
            "id": 251,
            "name": "CIBACOPA",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/251.png",
            "country": {
                "id": 28,
                "name": "Mexico",
                "code": "MX",
                "flag": "https://media.api-sports.io/flags/mx.svg"
            },
            "seasons": [
                {
                    "season": 2024,
                    "start": "2024-03-02",
                    "end": "2024-05-19"
                },
                {
                    "season": 2022,
                    "start": "2022-03-31",
                    "end": "2022-07-13"
                },
                {
                    "season": 2023,
                    "start": "2023-03-09",
                    "end": "2023-06-27"
                },
                {
                    "season": 2020,
                    "start": "2020-03-13",
                    "end": "2020-03-19"
                }
            ]
        },
        {
            "id": 252,
            "name": "LMBPF Women",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/252.png",
            "country": {
                "id": 28,
                "name": "Mexico",
                "code": "MX",
                "flag": "https://media.api-sports.io/flags/mx.svg"
            },
            "seasons": [
                {
                    "season": 2024,
                    "start": "2024-01-27",
                    "end": "2024-04-15"
                },
                {
                    "season": 2021,
                    "start": "2021-03-27",
                    "end": "2021-06-27"
                },
                {
                    "season": 2023,
                    "start": "2023-02-25",
                    "end": "2023-05-24"
                },
                {
                    "season": 2022,
                    "start": "2022-02-27",
                    "end": "2022-07-24"
                }
            ]
        },
        {
            "id": 63,
            "name": "LNBP",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/63.png",
            "country": {
                "id": 28,
                "name": "Mexico",
                "code": "MX",
                "flag": "https://media.api-sports.io/flags/mx.svg"
            },
            "seasons": [
                {
                    "season": "2013-2014",
                    "start": "2013-09-27",
                    "end": "2014-04-11"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-07-22",
                    "end": "2022-10-29"
                },
                {
                    "season": "2011-2012",
                    "start": "2011-08-31",
                    "end": "2012-02-14"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-10-14",
                    "end": "2017-04-04"
                },
                {
                    "season": "2014-2015",
                    "start": "2014-09-26",
                    "end": "2015-04-08"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-10-20",
                    "end": "2018-04-11"
                },
                {
                    "season": "2015-2016",
                    "start": "2015-10-22",
                    "end": "2016-04-15"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-10-12",
                    "end": "2019-04-14"
                },
                {
                    "season": "2012-2013",
                    "start": "2012-09-05",
                    "end": "2013-02-28"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-09-10",
                    "end": "2020-11-20"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-08-18",
                    "end": "2023-12-15"
                },
                {
                    "season": "2019-2020",
                    "start": "2019-09-20",
                    "end": "2020-02-19"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-09-03",
                    "end": "2021-11-23"
                }
            ]
        },
        {
            "id": 253,
            "name": "Montenegrin Cup",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/253.png",
            "country": {
                "id": 29,
                "name": "Montenegro",
                "code": "ME",
                "flag": "https://media.api-sports.io/flags/me.svg"
            },
            "seasons": [
                {
                    "season": 2024,
                    "start": "2024-02-13",
                    "end": "2024-02-15"
                },
                {
                    "season": 2021,
                    "start": "2021-02-11",
                    "end": "2021-06-03"
                },
                {
                    "season": 2023,
                    "start": "2023-02-14",
                    "end": "2023-02-16"
                },
                {
                    "season": 2022,
                    "start": "2022-01-18",
                    "end": "2022-02-17"
                }
            ]
        },
        {
            "id": 64,
            "name": "Prva A Liga",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/64.png",
            "country": {
                "id": 29,
                "name": "Montenegro",
                "code": "ME",
                "flag": "https://media.api-sports.io/flags/me.svg"
            },
            "seasons": [
                {
                    "season": "2023-2024",
                    "start": "2023-12-02",
                    "end": "2024-04-23"
                },
                {
                    "season": "2019-2020",
                    "start": "2019-10-12",
                    "end": "2020-04-25"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-10-05",
                    "end": "2023-06-02"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-10-17",
                    "end": "2021-06-14"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-10-21",
                    "end": "2022-06-08"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-10-15",
                    "end": "2017-05-03"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-10-27",
                    "end": "2019-05-19"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-10-27",
                    "end": "2018-05-31"
                }
            ]
        },
        {
            "id": 65,
            "name": "DBL",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/65.png",
            "country": {
                "id": 30,
                "name": "Netherlands",
                "code": "NL",
                "flag": "https://media.api-sports.io/flags/nl.svg"
            },
            "seasons": [
                {
                    "season": "2014-2015",
                    "start": "2014-10-04",
                    "end": "2015-05-28"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-10-03",
                    "end": "2021-05-27"
                },
                {
                    "season": "2015-2016",
                    "start": "2015-10-06",
                    "end": "2016-05-26"
                },
                {
                    "season": "2019-2020",
                    "start": "2019-09-28",
                    "end": "2020-05-02"
                },
                {
                    "season": "2022-2023",
                    "start": "2023-05-03",
                    "end": "2023-05-29"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-10-08",
                    "end": "2017-05-25"
                },
                {
                    "season": "2013-2014",
                    "start": "2013-10-05",
                    "end": "2014-06-01"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-10-07",
                    "end": "2018-05-29"
                },
                {
                    "season": "2012-2013",
                    "start": "2012-10-06",
                    "end": "2013-05-23"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-10-06",
                    "end": "2019-05-28"
                },
                {
                    "season": "2011-2012",
                    "start": "2011-10-01",
                    "end": "2012-05-27"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-09-24",
                    "end": "2022-05-29"
                },
                {
                    "season": "2010-2011",
                    "start": "2010-09-25",
                    "end": "2011-05-29"
                }
            ]
        },
        {
            "id": 254,
            "name": "DBL Cup",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/254.png",
            "country": {
                "id": 30,
                "name": "Netherlands",
                "code": "NL",
                "flag": "https://media.api-sports.io/flags/nl.svg"
            },
            "seasons": [
                {
                    "season": "2021-2022",
                    "start": "2022-01-15",
                    "end": "2022-03-20"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-11-28",
                    "end": "2024-03-24"
                },
                {
                    "season": "2020-2021",
                    "start": "2021-04-24",
                    "end": "2021-05-02"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-12-01",
                    "end": "2023-03-12"
                }
            ]
        },
        {
            "id": 149,
            "name": "NBB Cup",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/149.png",
            "country": {
                "id": 30,
                "name": "Netherlands",
                "code": "NL",
                "flag": "https://media.api-sports.io/flags/nl.svg"
            },
            "seasons": [
                {
                    "season": "2019-2020",
                    "start": "2019-12-18",
                    "end": "2020-02-22"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-12-13",
                    "end": "2019-03-31"
                }
            ]
        },
        {
            "id": 148,
            "name": "Supercup",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/148.png",
            "country": {
                "id": 30,
                "name": "Netherlands",
                "code": "NL",
                "flag": "https://media.api-sports.io/flags/nl.svg"
            },
            "seasons": [
                {
                    "season": 2023,
                    "start": "2023-09-17",
                    "end": "2023-09-17"
                },
                {
                    "season": 2018,
                    "start": "2018-10-06",
                    "end": "2018-10-06"
                },
                {
                    "season": 2022,
                    "start": "2022-09-28",
                    "end": "2022-09-28"
                },
                {
                    "season": 2019,
                    "start": "2019-09-22",
                    "end": "2019-09-22"
                }
            ]
        },
        {
            "id": 255,
            "name": "WBL Women",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/255.png",
            "country": {
                "id": 30,
                "name": "Netherlands",
                "code": "NL",
                "flag": "https://media.api-sports.io/flags/nl.svg"
            },
            "seasons": [
                {
                    "season": "2022-2023",
                    "start": "2022-09-24",
                    "end": "2023-04-29"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-09-25",
                    "end": "2022-05-11"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-09-16",
                    "end": "2024-04-16"
                }
            ]
        },
        {
            "id": 66,
            "name": "NBL",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/66.png",
            "country": {
                "id": 31,
                "name": "New Zealand",
                "code": "NZ",
                "flag": "https://media.api-sports.io/flags/nz.svg"
            },
            "seasons": [
                {
                    "season": 2021,
                    "start": "2021-04-24",
                    "end": "2021-07-23"
                },
                {
                    "season": 2023,
                    "start": "2023-04-06",
                    "end": "2023-07-23"
                },
                {
                    "season": 2022,
                    "start": "2022-04-28",
                    "end": "2022-08-13"
                },
                {
                    "season": 2014,
                    "start": "2014-04-02",
                    "end": "2014-07-05"
                },
                {
                    "season": 2019,
                    "start": "2019-04-11",
                    "end": "2019-07-21"
                },
                {
                    "season": 2013,
                    "start": "2013-04-19",
                    "end": "2013-07-14"
                },
                {
                    "season": 2020,
                    "start": "2020-06-23",
                    "end": "2020-08-01"
                },
                {
                    "season": 2012,
                    "start": "2012-03-01",
                    "end": "2012-05-27"
                },
                {
                    "season": 2018,
                    "start": "2018-04-26",
                    "end": "2018-08-05"
                },
                {
                    "season": 2011,
                    "start": "2011-04-13",
                    "end": "2011-07-17"
                },
                {
                    "season": 2017,
                    "start": "2017-03-16",
                    "end": "2017-06-17"
                },
                {
                    "season": 2010,
                    "start": "2010-03-04",
                    "end": "2010-07-01"
                },
                {
                    "season": 2016,
                    "start": "2016-03-10",
                    "end": "2016-06-04"
                },
                {
                    "season": 2015,
                    "start": "2015-04-01",
                    "end": "2015-07-05"
                },
                {
                    "season": 2024,
                    "start": "2024-03-27",
                    "end": "2024-07-14"
                }
            ]
        },
        {
            "id": 256,
            "name": "NBL Women",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/256.png",
            "country": {
                "id": 31,
                "name": "New Zealand",
                "code": "NZ",
                "flag": "https://media.api-sports.io/flags/nz.svg"
            },
            "seasons": [
                {
                    "season": 2020,
                    "start": "2020-11-19",
                    "end": "2020-12-06"
                },
                {
                    "season": 2021,
                    "start": "2021-08-12",
                    "end": "2021-08-15"
                }
            ]
        },
        {
            "id": 375,
            "name": "Tauihi Women",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/375.png",
            "country": {
                "id": 31,
                "name": "New Zealand",
                "code": "NZ",
                "flag": "https://media.api-sports.io/flags/nz.svg"
            },
            "seasons": [
                {
                    "season": 2023,
                    "start": "2023-07-12",
                    "end": "2023-09-10"
                },
                {
                    "season": 2022,
                    "start": "2022-06-29",
                    "end": "2022-08-27"
                }
            ]
        },
        {
            "id": 68,
            "name": "BLNO",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/68.png",
            "country": {
                "id": 33,
                "name": "Norway",
                "code": "NO",
                "flag": "https://media.api-sports.io/flags/no.svg"
            },
            "seasons": [
                {
                    "season": "2010-2011",
                    "start": "2010-10-01",
                    "end": "2011-04-12"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-09-22",
                    "end": "2019-04-11"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-09-23",
                    "end": "2023-04-28"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-09-22",
                    "end": "2018-04-11"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-09-22",
                    "end": "2024-04-18"
                },
                {
                    "season": "2019-2020",
                    "start": "2019-09-20",
                    "end": "2020-03-22"
                },
                {
                    "season": "2015-2016",
                    "start": "2015-10-02",
                    "end": "2016-03-13"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-09-30",
                    "end": "2017-04-02"
                },
                {
                    "season": "2014-2015",
                    "start": "2014-10-10",
                    "end": "2015-03-22"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-10-03",
                    "end": "2021-03-07"
                },
                {
                    "season": "2013-2014",
                    "start": "2013-10-04",
                    "end": "2014-04-06"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-09-24",
                    "end": "2022-05-02"
                },
                {
                    "season": "2012-2013",
                    "start": "2012-09-21",
                    "end": "2013-03-17"
                },
                {
                    "season": "2011-2012",
                    "start": "2011-09-16",
                    "end": "2012-03-25"
                }
            ]
        },
        {
            "id": 69,
            "name": "Kvinneligaen W",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/69.png",
            "country": {
                "id": 33,
                "name": "Norway",
                "code": "NO",
                "flag": "https://media.api-sports.io/flags/no.svg"
            },
            "seasons": [
                {
                    "season": "2017-2018",
                    "start": "2017-09-23",
                    "end": "2018-04-08"
                },
                {
                    "season": "2010-2011",
                    "start": "2010-10-08",
                    "end": "2011-04-03"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-10-09",
                    "end": "2022-04-03"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-10-06",
                    "end": "2024-03-27"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-10-11",
                    "end": "2021-03-21"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-10-07",
                    "end": "2023-04-16"
                },
                {
                    "season": "2019-2020",
                    "start": "2019-09-26",
                    "end": "2020-03-22"
                },
                {
                    "season": "2011-2012",
                    "start": "2011-09-28",
                    "end": "2012-03-25"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-09-22",
                    "end": "2019-04-07"
                },
                {
                    "season": "2012-2013",
                    "start": "2012-09-21",
                    "end": "2013-03-17"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-09-30",
                    "end": "2017-04-02"
                },
                {
                    "season": "2013-2014",
                    "start": "2013-10-19",
                    "end": "2014-04-06"
                },
                {
                    "season": "2014-2015",
                    "start": "2014-10-10",
                    "end": "2015-03-22"
                },
                {
                    "season": "2015-2016",
                    "start": "2015-10-02",
                    "end": "2016-03-13"
                }
            ]
        },
        {
            "id": 258,
            "name": "LNB",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/258.png",
            "country": {
                "id": 67,
                "name": "Paraguay",
                "code": "PY",
                "flag": "https://media.api-sports.io/flags/py.svg"
            },
            "seasons": [
                {
                    "season": 2022,
                    "start": "2022-04-29",
                    "end": "2022-12-08"
                },
                {
                    "season": 2023,
                    "start": "2023-04-13",
                    "end": "2023-11-13"
                },
                {
                    "season": 2021,
                    "start": "2021-08-17",
                    "end": "2021-11-09"
                }
            ]
        },
        {
            "id": 153,
            "name": "Commissioners Cup",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/153.png",
            "country": {
                "id": 60,
                "name": "Philippines",
                "code": "PH",
                "flag": "https://media.api-sports.io/flags/ph.svg"
            },
            "seasons": [
                {
                    "season": 2022,
                    "start": "2022-09-21",
                    "end": "2023-01-15"
                },
                {
                    "season": 2015,
                    "start": "2015-01-27",
                    "end": "2015-04-29"
                },
                {
                    "season": 2023,
                    "start": "2023-11-05",
                    "end": "2024-02-14"
                },
                {
                    "season": 2016,
                    "start": "2016-02-10",
                    "end": "2016-05-18"
                },
                {
                    "season": 2013,
                    "start": "2013-02-08",
                    "end": "2013-05-19"
                },
                {
                    "season": 2019,
                    "start": "2019-05-19",
                    "end": "2019-08-16"
                },
                {
                    "season": 2012,
                    "start": "2012-02-10",
                    "end": "2012-05-06"
                },
                {
                    "season": 2018,
                    "start": "2018-04-22",
                    "end": "2018-08-08"
                },
                {
                    "season": 2011,
                    "start": "2011-02-18",
                    "end": "2011-05-08"
                },
                {
                    "season": 2017,
                    "start": "2017-03-17",
                    "end": "2017-07-02"
                },
                {
                    "season": 2014,
                    "start": "2014-03-05",
                    "end": "2014-05-15"
                }
            ]
        },
        {
            "id": 187,
            "name": "Fiesta Conference",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/187.png",
            "country": {
                "id": 60,
                "name": "Philippines",
                "code": "PH",
                "flag": "https://media.api-sports.io/flags/ph.svg"
            },
            "seasons": [
                {
                    "season": 2010,
                    "start": "2010-03-21",
                    "end": "2010-08-18"
                }
            ]
        },
        {
            "id": 152,
            "name": "Governors Cup",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/152.png",
            "country": {
                "id": 60,
                "name": "Philippines",
                "code": "PH",
                "flag": "https://media.api-sports.io/flags/ph.svg"
            },
            "seasons": [
                {
                    "season": 2011,
                    "start": "2011-06-11",
                    "end": "2011-08-21"
                },
                {
                    "season": 2016,
                    "start": "2016-07-15",
                    "end": "2016-10-19"
                },
                {
                    "season": 2014,
                    "start": "2014-05-18",
                    "end": "2014-07-09"
                },
                {
                    "season": 2021,
                    "start": "2021-12-08",
                    "end": "2022-04-22"
                },
                {
                    "season": 2013,
                    "start": "2013-08-14",
                    "end": "2013-10-25"
                },
                {
                    "season": 2015,
                    "start": "2015-05-05",
                    "end": "2015-07-17"
                },
                {
                    "season": 2012,
                    "start": "2012-05-20",
                    "end": "2012-08-05"
                },
                {
                    "season": 2017,
                    "start": "2017-07-19",
                    "end": "2017-10-27"
                },
                {
                    "season": 2023,
                    "start": "2023-01-22",
                    "end": "2023-04-21"
                },
                {
                    "season": 2018,
                    "start": "2018-08-17",
                    "end": "2018-12-19"
                },
                {
                    "season": 2019,
                    "start": "2019-09-20",
                    "end": "2020-01-17"
                }
            ]
        },
        {
            "id": 151,
            "name": "Philippine Cup",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/151.png",
            "country": {
                "id": 60,
                "name": "Philippines",
                "code": "PH",
                "flag": "https://media.api-sports.io/flags/ph.svg"
            },
            "seasons": [
                {
                    "season": "2023-2024",
                    "start": "2024-02-28",
                    "end": "2024-05-05"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-11-20",
                    "end": "2017-03-05"
                },
                {
                    "season": "2011-2012",
                    "start": "2011-10-02",
                    "end": "2012-01-29"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-06-05",
                    "end": "2022-09-04"
                },
                {
                    "season": "2012-2013",
                    "start": "2012-09-30",
                    "end": "2013-01-16"
                },
                {
                    "season": "2015-2016",
                    "start": "2015-10-21",
                    "end": "2016-02-03"
                },
                {
                    "season": "2013-2014",
                    "start": "2013-11-17",
                    "end": "2014-02-26"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-12-17",
                    "end": "2018-04-06"
                },
                {
                    "season": "2010-2011",
                    "start": "2010-10-03",
                    "end": "2011-02-04"
                },
                {
                    "season": "2018-2019",
                    "start": "2019-01-13",
                    "end": "2019-05-15"
                },
                {
                    "season": "2014-2015",
                    "start": "2014-10-19",
                    "end": "2015-01-21"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-07-16",
                    "end": "2021-10-29"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-03-08",
                    "end": "2020-12-09"
                }
            ]
        },
        {
            "id": 71,
            "name": "1 Liga",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/71.png",
            "country": {
                "id": 34,
                "name": "Poland",
                "code": "PL",
                "flag": "https://media.api-sports.io/flags/pl.svg"
            },
            "seasons": [
                {
                    "season": "2022-2023",
                    "start": "2022-09-24",
                    "end": "2023-05-20"
                },
                {
                    "season": "2019-2020",
                    "start": "2019-09-27",
                    "end": "2020-03-29"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-09-22",
                    "end": "2024-04-14"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-09-23",
                    "end": "2017-05-20"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-09-23",
                    "end": "2018-05-19"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-09-29",
                    "end": "2019-05-19"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-09-26",
                    "end": "2021-05-22"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-09-24",
                    "end": "2022-05-22"
                }
            ]
        },
        {
            "id": 73,
            "name": "Energa Basket Liga W",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/73.png",
            "country": {
                "id": 34,
                "name": "Poland",
                "code": "PL",
                "flag": "https://media.api-sports.io/flags/pl.svg"
            },
            "seasons": [
                {
                    "season": "2013-2014",
                    "start": "2013-09-27",
                    "end": "2014-04-27"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-10-01",
                    "end": "2017-05-03"
                },
                {
                    "season": "2011-2012",
                    "start": "2011-10-01",
                    "end": "2012-04-28"
                },
                {
                    "season": "2012-2013",
                    "start": "2012-09-28",
                    "end": "2013-04-24"
                },
                {
                    "season": "2014-2015",
                    "start": "2014-10-03",
                    "end": "2015-04-26"
                },
                {
                    "season": "2015-2016",
                    "start": "2015-09-19",
                    "end": "2016-05-04"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-10-08",
                    "end": "2023-04-15"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-10-03",
                    "end": "2021-04-18"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-10-07",
                    "end": "2024-03-16"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-09-21",
                    "end": "2018-04-30"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-10-04",
                    "end": "2019-04-29"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-10-03",
                    "end": "2022-04-13"
                },
                {
                    "season": "2019-2020",
                    "start": "2019-10-04",
                    "end": "2020-03-14"
                }
            ]
        },
        {
            "id": 72,
            "name": "Tauron Basket Liga",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/72.png",
            "country": {
                "id": 34,
                "name": "Poland",
                "code": "PL",
                "flag": "https://media.api-sports.io/flags/pl.svg"
            },
            "seasons": [
                {
                    "season": "2018-2019",
                    "start": "2018-10-02",
                    "end": "2019-05-22"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-09-21",
                    "end": "2024-04-27"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-08-27",
                    "end": "2021-05-06"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-09-22",
                    "end": "2023-06-15"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-09-02",
                    "end": "2022-05-27"
                },
                {
                    "season": "2019-2020",
                    "start": "2019-09-26",
                    "end": "2020-04-19"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-09-30",
                    "end": "2018-06-04"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-10-08",
                    "end": "2017-06-10"
                },
                {
                    "season": "2014-2015",
                    "start": "2014-10-03",
                    "end": "2015-06-09"
                },
                {
                    "season": "2008-2009",
                    "start": "2008-09-25",
                    "end": "2009-05-20"
                },
                {
                    "season": "2009-2010",
                    "start": "2009-10-08",
                    "end": "2010-05-29"
                },
                {
                    "season": "2010-2011",
                    "start": "2010-10-06",
                    "end": "2011-05-23"
                },
                {
                    "season": "2011-2012",
                    "start": "2011-10-08",
                    "end": "2012-06-06"
                },
                {
                    "season": "2012-2013",
                    "start": "2012-09-29",
                    "end": "2013-06-02"
                },
                {
                    "season": "2013-2014",
                    "start": "2013-10-12",
                    "end": "2014-06-11"
                },
                {
                    "season": "2015-2016",
                    "start": "2015-10-08",
                    "end": "2016-06-02"
                }
            ]
        },
        {
            "id": 156,
            "name": "PBA Cup",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/156.png",
            "country": {
                "id": 34,
                "name": "Poland",
                "code": "PL",
                "flag": "https://media.api-sports.io/flags/pl.svg"
            },
            "seasons": [
                {
                    "season": 2017,
                    "start": "2017-12-29",
                    "end": "2017-12-30"
                },
                {
                    "season": 2016,
                    "start": "2016-12-28",
                    "end": "2016-12-29"
                },
                {
                    "season": 2015,
                    "start": "2015-12-28",
                    "end": "2015-12-29"
                }
            ]
        },
        {
            "id": 154,
            "name": "Polish Cup",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/154.png",
            "country": {
                "id": 34,
                "name": "Poland",
                "code": "PL",
                "flag": "https://media.api-sports.io/flags/pl.svg"
            },
            "seasons": [
                {
                    "season": 2023,
                    "start": "2023-02-16",
                    "end": "2023-02-19"
                },
                {
                    "season": 2021,
                    "start": "2021-02-11",
                    "end": "2021-02-14"
                },
                {
                    "season": 2024,
                    "start": "2024-02-15",
                    "end": "2024-02-18"
                },
                {
                    "season": 2018,
                    "start": "2018-02-15",
                    "end": "2018-02-18"
                },
                {
                    "season": 2019,
                    "start": "2019-02-14",
                    "end": "2019-02-17"
                },
                {
                    "season": 2022,
                    "start": "2022-02-17",
                    "end": "2022-02-20"
                },
                {
                    "season": 2017,
                    "start": "2017-02-16",
                    "end": "2017-02-19"
                },
                {
                    "season": 2016,
                    "start": "2016-02-18",
                    "end": "2016-02-21"
                }
            ]
        },
        {
            "id": 70,
            "name": "Polish Cup W",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/70.png",
            "country": {
                "id": 34,
                "name": "Poland",
                "code": "PL",
                "flag": "https://media.api-sports.io/flags/pl.svg"
            },
            "seasons": [
                {
                    "season": 2014,
                    "start": "2015-01-23",
                    "end": "2015-01-25"
                },
                {
                    "season": 2020,
                    "start": "2020-01-17",
                    "end": "2020-01-19"
                },
                {
                    "season": 2024,
                    "start": "2024-02-02",
                    "end": "2024-02-04"
                },
                {
                    "season": 2018,
                    "start": "2018-01-19",
                    "end": "2018-01-21"
                },
                {
                    "season": 2011,
                    "start": "2011-11-28",
                    "end": "2012-02-21"
                },
                {
                    "season": 2019,
                    "start": "2019-01-18",
                    "end": "2019-01-20"
                },
                {
                    "season": 2023,
                    "start": "2023-02-24",
                    "end": "2023-02-26"
                },
                {
                    "season": 2022,
                    "start": "2022-01-28",
                    "end": "2022-01-30"
                },
                {
                    "season": 2012,
                    "start": "2012-11-20",
                    "end": "2013-03-09"
                },
                {
                    "season": 2021,
                    "start": "2021-03-05",
                    "end": "2021-03-07"
                },
                {
                    "season": 2013,
                    "start": "2014-01-14",
                    "end": "2014-03-08"
                },
                {
                    "season": 2015,
                    "start": "2016-01-29",
                    "end": "2016-01-31"
                },
                {
                    "season": 2016,
                    "start": "2017-01-27",
                    "end": "2017-01-29"
                }
            ]
        },
        {
            "id": 155,
            "name": "Super Cup",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/155.png",
            "country": {
                "id": 34,
                "name": "Poland",
                "code": "PL",
                "flag": "https://media.api-sports.io/flags/pl.svg"
            },
            "seasons": [
                {
                    "season": 2021,
                    "start": "2021-09-01",
                    "end": "2021-09-01"
                },
                {
                    "season": 2022,
                    "start": "2022-09-21",
                    "end": "2022-09-21"
                },
                {
                    "season": 2015,
                    "start": "2015-10-07",
                    "end": "2015-10-07"
                },
                {
                    "season": 2011,
                    "start": "2011-10-03",
                    "end": "2011-10-03"
                },
                {
                    "season": 2016,
                    "start": "2016-10-02",
                    "end": "2016-10-02"
                },
                {
                    "season": 2023,
                    "start": "2023-09-20",
                    "end": "2023-09-20"
                },
                {
                    "season": 2018,
                    "start": "2018-09-29",
                    "end": "2018-09-29"
                },
                {
                    "season": 2012,
                    "start": "2012-09-26",
                    "end": "2012-09-26"
                },
                {
                    "season": 2017,
                    "start": "2017-09-27",
                    "end": "2017-09-27"
                },
                {
                    "season": 2014,
                    "start": "2014-10-01",
                    "end": "2014-10-01"
                },
                {
                    "season": 2020,
                    "start": "2020-08-26",
                    "end": "2020-08-26"
                },
                {
                    "season": 2013,
                    "start": "2013-10-09",
                    "end": "2013-10-09"
                }
            ]
        },
        {
            "id": 259,
            "name": "Super Cup Women",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/259.png",
            "country": {
                "id": 34,
                "name": "Poland",
                "code": "PL",
                "flag": "https://media.api-sports.io/flags/pl.svg"
            },
            "seasons": [
                {
                    "season": 2020,
                    "start": "2020-09-30",
                    "end": "2020-09-30"
                },
                {
                    "season": 2022,
                    "start": "2022-10-01",
                    "end": "2022-10-01"
                },
                {
                    "season": 2021,
                    "start": "2021-09-29",
                    "end": "2021-09-29"
                },
                {
                    "season": 2023,
                    "start": "2023-09-30",
                    "end": "2023-09-30"
                }
            ]
        },
        {
            "id": 260,
            "name": "LFB Women",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/260.png",
            "country": {
                "id": 35,
                "name": "Portugal",
                "code": "PT",
                "flag": "https://media.api-sports.io/flags/pt.svg"
            },
            "seasons": [
                {
                    "season": "2020-2021",
                    "start": "2020-10-03",
                    "end": "2021-05-09"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-10-01",
                    "end": "2024-04-20"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-10-02",
                    "end": "2022-05-08"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-10-01",
                    "end": "2023-05-07"
                }
            ]
        },
        {
            "id": 74,
            "name": "LPB",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/74.png",
            "country": {
                "id": 35,
                "name": "Portugal",
                "code": "PT",
                "flag": "https://media.api-sports.io/flags/pt.svg"
            },
            "seasons": [
                {
                    "season": "2017-2018",
                    "start": "2017-10-07",
                    "end": "2018-06-15"
                },
                {
                    "season": "2011-2012",
                    "start": "2011-10-15",
                    "end": "2012-05-23"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-10-12",
                    "end": "2017-06-09"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-09-23",
                    "end": "2024-04-27"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-10-02",
                    "end": "2022-06-11"
                },
                {
                    "season": "2010-2011",
                    "start": "2010-10-16",
                    "end": "2011-05-22"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-10-10",
                    "end": "2021-06-02"
                },
                {
                    "season": "2013-2014",
                    "start": "2013-10-26",
                    "end": "2014-05-23"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-10-06",
                    "end": "2019-05-31"
                },
                {
                    "season": "2012-2013",
                    "start": "2012-10-20",
                    "end": "2013-05-26"
                },
                {
                    "season": "2019-2020",
                    "start": "2019-10-05",
                    "end": "2020-04-11"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-09-24",
                    "end": "2023-06-11"
                },
                {
                    "season": "2014-2015",
                    "start": "2014-10-25",
                    "end": "2015-05-30"
                },
                {
                    "season": "2015-2016",
                    "start": "2015-10-10",
                    "end": "2016-05-28"
                }
            ]
        },
        {
            "id": 261,
            "name": "Proliga",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/261.png",
            "country": {
                "id": 35,
                "name": "Portugal",
                "code": "PT",
                "flag": "https://media.api-sports.io/flags/pt.svg"
            },
            "seasons": [
                {
                    "season": "2021-2022",
                    "start": "2021-10-09",
                    "end": "2022-04-30"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-10-15",
                    "end": "2023-05-13"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-10-17",
                    "end": "2021-06-20"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-10-14",
                    "end": "2024-04-14"
                }
            ]
        },
        {
            "id": 157,
            "name": "Super Cup",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/157.png",
            "country": {
                "id": 35,
                "name": "Portugal",
                "code": "PT",
                "flag": "https://media.api-sports.io/flags/pt.svg"
            },
            "seasons": [
                {
                    "season": 2019,
                    "start": "2019-09-29",
                    "end": "2019-09-29"
                },
                {
                    "season": 2023,
                    "start": "2023-09-16",
                    "end": "2023-09-16"
                },
                {
                    "season": 2021,
                    "start": "2021-09-25",
                    "end": "2021-09-25"
                },
                {
                    "season": 2022,
                    "start": "2022-09-17",
                    "end": "2022-09-17"
                },
                {
                    "season": 2018,
                    "start": "2018-10-05",
                    "end": "2018-10-05"
                }
            ]
        },
        {
            "id": 399,
            "name": "Super Cup Women",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/399.png",
            "country": {
                "id": 35,
                "name": "Portugal",
                "code": "PT",
                "flag": "https://media.api-sports.io/flags/pt.svg"
            },
            "seasons": [
                {
                    "season": 2022,
                    "start": "2022-09-17",
                    "end": "2022-09-17"
                },
                {
                    "season": 2023,
                    "start": "2023-09-24",
                    "end": "2023-09-24"
                }
            ]
        },
        {
            "id": 262,
            "name": "Taca da Liga",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/262.png",
            "country": {
                "id": 35,
                "name": "Portugal",
                "code": "PT",
                "flag": "https://media.api-sports.io/flags/pt.svg"
            },
            "seasons": [
                {
                    "season": 2022,
                    "start": "2022-01-22",
                    "end": "2022-01-23"
                },
                {
                    "season": 2024,
                    "start": "2023-10-13",
                    "end": "2024-05-03"
                },
                {
                    "season": 2021,
                    "start": "2021-02-06",
                    "end": "2021-02-07"
                },
                {
                    "season": 2023,
                    "start": "2023-01-14",
                    "end": "2023-01-15"
                }
            ]
        },
        {
            "id": 75,
            "name": "Taca de Portugal",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/75.png",
            "country": {
                "id": 35,
                "name": "Portugal",
                "code": "PT",
                "flag": "https://media.api-sports.io/flags/pt.svg"
            },
            "seasons": [
                {
                    "season": 2020,
                    "start": "2020-02-09",
                    "end": "2020-10-08"
                },
                {
                    "season": 2023,
                    "start": "2022-12-10",
                    "end": "2023-04-30"
                },
                {
                    "season": 2021,
                    "start": "2021-01-03",
                    "end": "2021-04-11"
                },
                {
                    "season": 2024,
                    "start": "2023-12-08",
                    "end": "2024-03-17"
                },
                {
                    "season": 2019,
                    "start": "2019-01-16",
                    "end": "2019-03-17"
                },
                {
                    "season": 2022,
                    "start": "2021-12-19",
                    "end": "2022-05-08"
                }
            ]
        },
        {
            "id": 400,
            "name": "Taca de Portugal Women",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/400.png",
            "country": {
                "id": 35,
                "name": "Portugal",
                "code": "PT",
                "flag": "https://media.api-sports.io/flags/pt.svg"
            },
            "seasons": [
                {
                    "season": 2024,
                    "start": "2024-01-14",
                    "end": "2024-03-24"
                },
                {
                    "season": 2023,
                    "start": "2023-02-18",
                    "end": "2023-03-12"
                }
            ]
        },
        {
            "id": 76,
            "name": "BSN",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/76.png",
            "country": {
                "id": 36,
                "name": "Puerto Rico",
                "code": "PR",
                "flag": "https://media.api-sports.io/flags/pr.svg"
            },
            "seasons": [
                {
                    "season": 2020,
                    "start": "2020-02-28",
                    "end": "2020-12-18"
                },
                {
                    "season": 2024,
                    "start": "2024-04-04",
                    "end": "2024-06-30"
                },
                {
                    "season": 2021,
                    "start": "2021-07-11",
                    "end": "2021-11-18"
                },
                {
                    "season": 2015,
                    "start": "2015-03-11",
                    "end": "2015-07-24"
                },
                {
                    "season": 2019,
                    "start": "2019-03-02",
                    "end": "2019-07-21"
                },
                {
                    "season": 2023,
                    "start": "2023-03-23",
                    "end": "2023-07-27"
                },
                {
                    "season": 2016,
                    "start": "2016-02-26",
                    "end": "2016-06-15"
                },
                {
                    "season": 2022,
                    "start": "2022-04-10",
                    "end": "2022-08-20"
                },
                {
                    "season": 2017,
                    "start": "2017-04-07",
                    "end": "2017-08-10"
                },
                {
                    "season": 2018,
                    "start": "2018-05-06",
                    "end": "2018-09-23"
                }
            ]
        },
        {
            "id": 77,
            "name": "QBL",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/77.png",
            "country": {
                "id": 37,
                "name": "Qatar",
                "code": "QA",
                "flag": "https://media.api-sports.io/flags/qa.svg"
            },
            "seasons": [
                {
                    "season": "2023-2024",
                    "start": "2023-10-28",
                    "end": "2024-01-23"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-12-19",
                    "end": "2019-03-09"
                },
                {
                    "season": "2022-2023",
                    "start": "2023-03-01",
                    "end": "2023-05-27"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-11-13",
                    "end": "2022-03-22"
                },
                {
                    "season": "2019-2020",
                    "start": "2019-12-07",
                    "end": "2020-03-14"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-12-05",
                    "end": "2021-01-24"
                }
            ]
        },
        {
            "id": 78,
            "name": "Divizia A",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/78.png",
            "country": {
                "id": 38,
                "name": "Romania",
                "code": "RO",
                "flag": "https://media.api-sports.io/flags/ro.svg"
            },
            "seasons": [
                {
                    "season": "2010-2011",
                    "start": "2010-10-02",
                    "end": "2011-05-28"
                },
                {
                    "season": "2019-2020",
                    "start": "2019-10-11",
                    "end": "2020-04-10"
                },
                {
                    "season": "2015-2016",
                    "start": "2015-10-02",
                    "end": "2016-06-02"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-10-05",
                    "end": "2019-05-27"
                },
                {
                    "season": "2011-2012",
                    "start": "2011-10-01",
                    "end": "2012-05-23"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-12-10",
                    "end": "2021-06-20"
                },
                {
                    "season": "2012-2013",
                    "start": "2012-10-05",
                    "end": "2013-06-03"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-09-18",
                    "end": "2017-05-26"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-09-28",
                    "end": "2023-05-28"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-09-30",
                    "end": "2022-06-02"
                },
                {
                    "season": "2013-2014",
                    "start": "2013-10-02",
                    "end": "2014-06-12"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-10-06",
                    "end": "2018-06-12"
                },
                {
                    "season": "2014-2015",
                    "start": "2014-10-04",
                    "end": "2015-05-24"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-09-22",
                    "end": "2024-04-18"
                }
            ]
        },
        {
            "id": 79,
            "name": "Liga National W",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/79.png",
            "country": {
                "id": 38,
                "name": "Romania",
                "code": "RO",
                "flag": "https://media.api-sports.io/flags/ro.svg"
            },
            "seasons": [
                {
                    "season": "2018-2019",
                    "start": "2018-10-06",
                    "end": "2019-05-21"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-10-01",
                    "end": "2023-04-21"
                },
                {
                    "season": "2019-2020",
                    "start": "2019-10-02",
                    "end": "2020-03-14"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-10-14",
                    "end": "2024-04-09"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-10-02",
                    "end": "2022-04-30"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-11-27",
                    "end": "2021-05-11"
                }
            ]
        },
        {
            "id": 158,
            "name": "Romanian Cup",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/158.png",
            "country": {
                "id": 38,
                "name": "Romania",
                "code": "RO",
                "flag": "https://media.api-sports.io/flags/ro.svg"
            },
            "seasons": [
                {
                    "season": 2022,
                    "start": "2022-10-01",
                    "end": "2023-02-15"
                },
                {
                    "season": 2019,
                    "start": "2019-03-13",
                    "end": "2019-04-18"
                },
                {
                    "season": 2023,
                    "start": "2023-09-15",
                    "end": "2024-02-18"
                },
                {
                    "season": 2021,
                    "start": "2021-12-23",
                    "end": "2022-02-17"
                },
                {
                    "season": 2020,
                    "start": "2020-11-08",
                    "end": "2021-03-09"
                }
            ]
        },
        {
            "id": 263,
            "name": "Romanian Cup Women",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/263.png",
            "country": {
                "id": 38,
                "name": "Romania",
                "code": "RO",
                "flag": "https://media.api-sports.io/flags/ro.svg"
            },
            "seasons": [
                {
                    "season": "2023-2024",
                    "start": "2023-09-23",
                    "end": "2024-03-11"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-11-02",
                    "end": "2021-02-21"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-11-30",
                    "end": "2023-02-27"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-12-28",
                    "end": "2022-02-27"
                }
            ]
        },
        {
            "id": 401,
            "name": "Super Cup",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/401.png",
            "country": {
                "id": 38,
                "name": "Romania",
                "code": "RO",
                "flag": "https://media.api-sports.io/flags/ro.svg"
            },
            "seasons": [
                {
                    "season": 2022,
                    "start": "2022-09-27",
                    "end": "2022-09-27"
                }
            ]
        },
        {
            "id": 188,
            "name": "PBL",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/188.png",
            "country": {
                "id": 39,
                "name": "Russia",
                "code": "RU",
                "flag": "https://media.api-sports.io/flags/ru.svg"
            },
            "seasons": [
                {
                    "season": "2012-2013",
                    "start": "2012-10-03",
                    "end": "2013-05-12"
                },
                {
                    "season": "2011-2012",
                    "start": "2011-10-06",
                    "end": "2012-05-19"
                }
            ]
        },
        {
            "id": 83,
            "name": "Superleague A W",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/83.png",
            "country": {
                "id": 39,
                "name": "Russia",
                "code": "RU",
                "flag": "https://media.api-sports.io/flags/ru.svg"
            },
            "seasons": [
                {
                    "season": "2015-2016",
                    "start": "2015-10-03",
                    "end": "2016-05-04"
                },
                {
                    "season": "2019-2020",
                    "start": "2019-09-29",
                    "end": "2020-03-15"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-10-01",
                    "end": "2023-04-25"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-10-01",
                    "end": "2017-05-01"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-10-04",
                    "end": "2024-04-21"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-10-06",
                    "end": "2021-04-27"
                },
                {
                    "season": "2014-2015",
                    "start": "2014-10-15",
                    "end": "2015-04-30"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-10-01",
                    "end": "2022-04-30"
                },
                {
                    "season": "2013-2014",
                    "start": "2013-10-12",
                    "end": "2014-04-29"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-09-29",
                    "end": "2018-05-02"
                },
                {
                    "season": "2012-2013",
                    "start": "2012-10-15",
                    "end": "2013-04-29"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-10-03",
                    "end": "2019-04-30"
                },
                {
                    "season": "2010-2011",
                    "start": "2010-10-15",
                    "end": "2011-05-01"
                },
                {
                    "season": "2011-2012",
                    "start": "2011-10-08",
                    "end": "2012-04-29"
                },
                {
                    "season": "2008-2009",
                    "start": "2009-03-22",
                    "end": "2009-04-28"
                },
                {
                    "season": "2009-2010",
                    "start": "2009-10-15",
                    "end": "2010-04-29"
                }
            ]
        },
        {
            "id": 159,
            "name": "Russian Cup",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/159.png",
            "country": {
                "id": 39,
                "name": "Russia",
                "code": "RU",
                "flag": "https://media.api-sports.io/flags/ru.svg"
            },
            "seasons": [
                {
                    "season": "2018-2019",
                    "start": "2018-09-27",
                    "end": "2019-02-10"
                },
                {
                    "season": "2013-2014",
                    "start": "2013-10-29",
                    "end": "2014-05-14"
                },
                {
                    "season": "2015-2016",
                    "start": "2015-10-01",
                    "end": "2016-02-22"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-09-21",
                    "end": "2024-03-17"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-09-24",
                    "end": "2022-03-20"
                },
                {
                    "season": "2014-2015",
                    "start": "2014-09-26",
                    "end": "2015-03-29"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-10-02",
                    "end": "2017-02-19"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-09-23",
                    "end": "2023-03-19"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-09-15",
                    "end": "2018-02-11"
                },
                {
                    "season": "2012-2013",
                    "start": "2013-02-26",
                    "end": "2013-04-17"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-09-25",
                    "end": "2021-03-13"
                },
                {
                    "season": "2011-2012",
                    "start": "2011-11-28",
                    "end": "2012-05-12"
                },
                {
                    "season": "2010-2011",
                    "start": "2010-12-10",
                    "end": "2011-03-16"
                },
                {
                    "season": "2008-2009",
                    "start": "2008-11-08",
                    "end": "2009-02-21"
                }
            ]
        },
        {
            "id": 80,
            "name": "Russian Cup W",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/80.png",
            "country": {
                "id": 39,
                "name": "Russia",
                "code": "RU",
                "flag": "https://media.api-sports.io/flags/ru.svg"
            },
            "seasons": [
                {
                    "season": 2021,
                    "start": "2021-09-20",
                    "end": "2021-12-25"
                },
                {
                    "season": 2023,
                    "start": "2023-09-14",
                    "end": "2024-01-28"
                },
                {
                    "season": 2020,
                    "start": "2020-09-29",
                    "end": "2020-10-03"
                },
                {
                    "season": 2018,
                    "start": "2018-09-27",
                    "end": "2018-12-23"
                },
                {
                    "season": 2019,
                    "start": "2019-09-25",
                    "end": "2019-12-22"
                },
                {
                    "season": 2017,
                    "start": "2017-09-21",
                    "end": "2017-12-10"
                },
                {
                    "season": 2016,
                    "start": "2016-09-21",
                    "end": "2016-12-24"
                },
                {
                    "season": 2015,
                    "start": "2015-09-26",
                    "end": "2015-09-27"
                },
                {
                    "season": 2014,
                    "start": "2014-10-23",
                    "end": "2015-02-01"
                },
                {
                    "season": 2022,
                    "start": "2022-09-21",
                    "end": "2022-12-25"
                },
                {
                    "season": 2013,
                    "start": "2013-10-24",
                    "end": "2014-02-02"
                },
                {
                    "season": 2012,
                    "start": "2012-10-26",
                    "end": "2013-01-13"
                }
            ]
        },
        {
            "id": 81,
            "name": "Super League",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/81.png",
            "country": {
                "id": 39,
                "name": "Russia",
                "code": "RU",
                "flag": "https://media.api-sports.io/flags/ru.svg"
            },
            "seasons": [
                {
                    "season": "2018-2019",
                    "start": "2018-10-04",
                    "end": "2019-05-01"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-10-06",
                    "end": "2024-04-25"
                },
                {
                    "season": "2019-2020",
                    "start": "2019-10-11",
                    "end": "2020-04-04"
                },
                {
                    "season": "2014-2015",
                    "start": "2014-10-04",
                    "end": "2015-05-12"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-10-08",
                    "end": "2021-05-04"
                },
                {
                    "season": "2015-2016",
                    "start": "2015-10-11",
                    "end": "2016-05-07"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-10-05",
                    "end": "2017-04-27"
                },
                {
                    "season": "2013-2014",
                    "start": "2013-10-06",
                    "end": "2014-05-09"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-09-23",
                    "end": "2018-05-16"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-10-04",
                    "end": "2023-05-14"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-10-07",
                    "end": "2022-05-03"
                }
            ]
        },
        {
            "id": 264,
            "name": "VTB Super Cup",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/264.png",
            "country": {
                "id": 39,
                "name": "Russia",
                "code": "RU",
                "flag": "https://media.api-sports.io/flags/ru.svg"
            },
            "seasons": [
                {
                    "season": 2021,
                    "start": "2021-09-18",
                    "end": "2021-09-19"
                },
                {
                    "season": 2022,
                    "start": "2022-09-22",
                    "end": "2022-09-25"
                },
                {
                    "season": 2023,
                    "start": "2023-09-21",
                    "end": "2023-09-24"
                }
            ]
        },
        {
            "id": 82,
            "name": "VTB United League Promo-Cup",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/82.png",
            "country": {
                "id": 39,
                "name": "Russia",
                "code": "RU",
                "flag": "https://media.api-sports.io/flags/ru.svg"
            },
            "seasons": [
                {
                    "season": "2022-2023",
                    "start": "2022-10-02",
                    "end": "2023-05-16"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-09-30",
                    "end": "2024-04-14"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-10-05",
                    "end": "2019-05-28"
                },
                {
                    "season": "2014-2015",
                    "start": "2014-10-03",
                    "end": "2015-06-08"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-10-05",
                    "end": "2018-06-10"
                },
                {
                    "season": "2015-2016",
                    "start": "2015-10-03",
                    "end": "2016-06-08"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-09-23",
                    "end": "2022-06-05"
                },
                {
                    "season": "2013-2014",
                    "start": "2013-10-05",
                    "end": "2014-06-13"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-09-20",
                    "end": "2021-06-10"
                },
                {
                    "season": "2012-2013",
                    "start": "2012-10-02",
                    "end": "2013-06-07"
                },
                {
                    "season": "2019-2020",
                    "start": "2019-09-25",
                    "end": "2020-04-26"
                },
                {
                    "season": "2011-2012",
                    "start": "2011-09-27",
                    "end": "2012-05-03"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-10-02",
                    "end": "2017-06-13"
                },
                {
                    "season": "2010-2011",
                    "start": "2010-10-06",
                    "end": "2011-04-23"
                },
                {
                    "season": 2008,
                    "start": "2008-12-20",
                    "end": "2008-12-22"
                }
            ]
        },
        {
            "id": 84,
            "name": "Premier League",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/84.png",
            "country": {
                "id": 40,
                "name": "Saudi Arabia",
                "code": "SA",
                "flag": "https://media.api-sports.io/flags/sa.svg"
            },
            "seasons": [
                {
                    "season": "2019-2020",
                    "start": "2019-10-04",
                    "end": "2020-03-13"
                },
                {
                    "season": "2013-2014",
                    "start": "2013-11-02",
                    "end": "2014-04-18"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-10-27",
                    "end": "2019-04-16"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-09-15",
                    "end": "2023-03-31"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-11-10",
                    "end": "2017-04-17"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-10-20",
                    "end": "2024-03-22"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-11-23",
                    "end": "2018-04-25"
                },
                {
                    "season": "2014-2015",
                    "start": "2014-11-13",
                    "end": "2015-05-16"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-12-06",
                    "end": "2021-04-17"
                },
                {
                    "season": "2015-2016",
                    "start": "2015-11-21",
                    "end": "2016-05-26"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-10-08",
                    "end": "2022-03-20"
                },
                {
                    "season": "2012-2013",
                    "start": "2012-11-15",
                    "end": "2013-01-10"
                }
            ]
        },
        {
            "id": 265,
            "name": "1. ZLS Women",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/265.png",
            "country": {
                "id": 41,
                "name": "Serbia",
                "code": "RS",
                "flag": "https://media.api-sports.io/flags/rs.svg"
            },
            "seasons": [
                {
                    "season": "2021-2022",
                    "start": "2021-10-02",
                    "end": "2022-04-21"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-10-05",
                    "end": "2023-04-22"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-09-26",
                    "end": "2021-04-12"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-09-30",
                    "end": "2024-04-13"
                }
            ]
        },
        {
            "id": 85,
            "name": "First League",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/85.png",
            "country": {
                "id": 41,
                "name": "Serbia",
                "code": "RS",
                "flag": "https://media.api-sports.io/flags/rs.svg"
            },
            "seasons": [
                {
                    "season": "2019-2020",
                    "start": "2019-10-05",
                    "end": "2020-03-15"
                },
                {
                    "season": "2011-2012",
                    "start": "2011-10-07",
                    "end": "2012-03-17"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-10-05",
                    "end": "2019-03-17"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-09-29",
                    "end": "2024-04-14"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-10-08",
                    "end": "2017-04-12"
                },
                {
                    "season": "2010-2011",
                    "start": "2010-10-09",
                    "end": "2011-03-12"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-09-25",
                    "end": "2021-04-13"
                },
                {
                    "season": "2012-2013",
                    "start": "2012-10-06",
                    "end": "2013-03-23"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-10-01",
                    "end": "2022-04-09"
                },
                {
                    "season": "2013-2014",
                    "start": "2013-10-04",
                    "end": "2014-03-29"
                },
                {
                    "season": "2014-2015",
                    "start": "2014-10-10",
                    "end": "2015-03-21"
                },
                {
                    "season": "2015-2016",
                    "start": "2015-10-02",
                    "end": "2016-03-26"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-10-01",
                    "end": "2023-04-19"
                }
            ]
        },
        {
            "id": 160,
            "name": "Korac cup",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/160.png",
            "country": {
                "id": 41,
                "name": "Serbia",
                "code": "RS",
                "flag": "https://media.api-sports.io/flags/rs.svg"
            },
            "seasons": [
                {
                    "season": 2021,
                    "start": "2021-02-11",
                    "end": "2021-02-14"
                },
                {
                    "season": 2024,
                    "start": "2024-02-14",
                    "end": "2024-02-17"
                },
                {
                    "season": 2022,
                    "start": "2022-02-17",
                    "end": "2022-02-20"
                },
                {
                    "season": 2014,
                    "start": "2014-02-06",
                    "end": "2014-02-09"
                },
                {
                    "season": 2015,
                    "start": "2015-02-19",
                    "end": "2015-02-22"
                },
                {
                    "season": 2012,
                    "start": "2012-02-16",
                    "end": "2012-02-19"
                },
                {
                    "season": 2016,
                    "start": "2016-02-18",
                    "end": "2016-02-21"
                },
                {
                    "season": 2013,
                    "start": "2013-02-07",
                    "end": "2013-02-11"
                },
                {
                    "season": 2017,
                    "start": "2017-02-16",
                    "end": "2017-02-19"
                },
                {
                    "season": 2023,
                    "start": "2023-02-15",
                    "end": "2023-02-18"
                },
                {
                    "season": 2018,
                    "start": "2018-02-15",
                    "end": "2018-02-18"
                },
                {
                    "season": 2019,
                    "start": "2019-02-14",
                    "end": "2019-02-17"
                }
            ]
        },
        {
            "id": 86,
            "name": "Super League",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/86.png",
            "country": {
                "id": 41,
                "name": "Serbia",
                "code": "RS",
                "flag": "https://media.api-sports.io/flags/rs.svg"
            },
            "seasons": [
                {
                    "season": 2012,
                    "start": "2012-03-23",
                    "end": "2012-06-15"
                },
                {
                    "season": 2021,
                    "start": "2021-05-27",
                    "end": "2021-06-13"
                },
                {
                    "season": 2011,
                    "start": "2011-03-20",
                    "end": "2011-06-08"
                },
                {
                    "season": 2019,
                    "start": "2019-04-25",
                    "end": "2019-06-17"
                },
                {
                    "season": 2010,
                    "start": "2010-04-10",
                    "end": "2010-06-18"
                },
                {
                    "season": 2022,
                    "start": "2022-05-07",
                    "end": "2022-06-19"
                },
                {
                    "season": 2013,
                    "start": "2013-03-29",
                    "end": "2013-06-12"
                },
                {
                    "season": 2018,
                    "start": "2018-04-18",
                    "end": "2018-06-11"
                },
                {
                    "season": 2014,
                    "start": "2014-04-05",
                    "end": "2014-06-21"
                },
                {
                    "season": 2017,
                    "start": "2017-04-21",
                    "end": "2017-06-16"
                },
                {
                    "season": 2015,
                    "start": "2015-03-28",
                    "end": "2015-06-18"
                },
                {
                    "season": 2016,
                    "start": "2016-05-07",
                    "end": "2016-06-12"
                },
                {
                    "season": 2023,
                    "start": "2023-04-25",
                    "end": "2023-06-11"
                }
            ]
        },
        {
            "id": 410,
            "name": "NBL",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/410.png",
            "country": {
                "id": 78,
                "name": "Singapore",
                "code": "SG",
                "flag": "https://media.api-sports.io/flags/sg.svg"
            },
            "seasons": [
                {
                    "season": 2023,
                    "start": "2023-10-27",
                    "end": "2023-11-26"
                }
            ]
        },
        {
            "id": 87,
            "name": "Extraliga",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/87.png",
            "country": {
                "id": 42,
                "name": "Slovakia",
                "code": "SK",
                "flag": "https://media.api-sports.io/flags/sk.svg"
            },
            "seasons": [
                {
                    "season": "2016-2017",
                    "start": "2016-10-08",
                    "end": "2017-05-20"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-09-21",
                    "end": "2024-04-20"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-09-30",
                    "end": "2018-05-13"
                },
                {
                    "season": "2008-2009",
                    "start": "2008-10-08",
                    "end": "2010-04-18"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-10-06",
                    "end": "2019-05-22"
                },
                {
                    "season": "2009-2010",
                    "start": "2009-09-26",
                    "end": "2010-05-19"
                },
                {
                    "season": "2019-2020",
                    "start": "2019-10-04",
                    "end": "2020-03-28"
                },
                {
                    "season": "2010-2011",
                    "start": "2010-09-25",
                    "end": "2011-05-11"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-09-30",
                    "end": "2023-05-29"
                },
                {
                    "season": "2011-2012",
                    "start": "2011-10-01",
                    "end": "2012-04-25"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-09-26",
                    "end": "2021-05-26"
                },
                {
                    "season": "2012-2013",
                    "start": "2012-09-29",
                    "end": "2013-06-01"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-10-02",
                    "end": "2022-05-08"
                },
                {
                    "season": "2013-2014",
                    "start": "2013-10-04",
                    "end": "2014-05-10"
                },
                {
                    "season": "2014-2015",
                    "start": "2014-10-04",
                    "end": "2015-05-16"
                },
                {
                    "season": "2015-2016",
                    "start": "2015-10-03",
                    "end": "2016-05-07"
                }
            ]
        },
        {
            "id": 88,
            "name": "Extraliga W",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/88.png",
            "country": {
                "id": 42,
                "name": "Slovakia",
                "code": "SK",
                "flag": "https://media.api-sports.io/flags/sk.svg"
            },
            "seasons": [
                {
                    "season": "2017-2018",
                    "start": "2017-09-30",
                    "end": "2018-04-11"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-10-01",
                    "end": "2023-05-14"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-09-27",
                    "end": "2019-04-20"
                },
                {
                    "season": "2012-2013",
                    "start": "2012-09-15",
                    "end": "2013-04-30"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-09-30",
                    "end": "2021-05-01"
                },
                {
                    "season": "2013-2014",
                    "start": "2013-09-25",
                    "end": "2014-04-27"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-10-01",
                    "end": "2017-04-26"
                },
                {
                    "season": "2015-2016",
                    "start": "2015-09-19",
                    "end": "2016-05-08"
                },
                {
                    "season": "2019-2020",
                    "start": "2019-09-28",
                    "end": "2020-03-15"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-09-30",
                    "end": "2024-04-13"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-09-29",
                    "end": "2022-05-14"
                },
                {
                    "season": "2014-2015",
                    "start": "2014-10-07",
                    "end": "2015-04-15"
                }
            ]
        },
        {
            "id": 161,
            "name": "Slovakia Cup",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/161.png",
            "country": {
                "id": 42,
                "name": "Slovakia",
                "code": "SK",
                "flag": "https://media.api-sports.io/flags/sk.svg"
            },
            "seasons": [
                {
                    "season": 2019,
                    "start": "2019-02-15",
                    "end": "2019-02-17"
                },
                {
                    "season": 2023,
                    "start": "2023-01-11",
                    "end": "2023-02-18"
                },
                {
                    "season": 2021,
                    "start": "2021-02-27",
                    "end": "2021-03-20"
                },
                {
                    "season": 2014,
                    "start": "2014-02-14",
                    "end": "2014-02-16"
                },
                {
                    "season": 2018,
                    "start": "2018-02-15",
                    "end": "2018-02-17"
                },
                {
                    "season": 2013,
                    "start": "2013-02-01",
                    "end": "2013-02-03"
                },
                {
                    "season": 2017,
                    "start": "2017-02-17",
                    "end": "2017-02-19"
                },
                {
                    "season": 2016,
                    "start": "2016-02-05",
                    "end": "2016-02-07"
                },
                {
                    "season": 2015,
                    "start": "2015-02-06",
                    "end": "2015-02-08"
                },
                {
                    "season": 2022,
                    "start": "2022-01-19",
                    "end": "2022-02-06"
                }
            ]
        },
        {
            "id": 90,
            "name": "1 SKL W",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/90.png",
            "country": {
                "id": 43,
                "name": "Slovenia",
                "code": "SI",
                "flag": "https://media.api-sports.io/flags/si.svg"
            },
            "seasons": [
                {
                    "season": "2023-2024",
                    "start": "2023-09-30",
                    "end": "2024-04-10"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-09-26",
                    "end": "2019-04-23"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-09-30",
                    "end": "2023-04-28"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-10-01",
                    "end": "2017-04-26"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-10-13",
                    "end": "2018-05-18"
                },
                {
                    "season": "2019-2020",
                    "start": "2019-09-28",
                    "end": "2020-03-28"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-10-02",
                    "end": "2022-05-10"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-09-25",
                    "end": "2021-05-04"
                }
            ]
        },
        {
            "id": 89,
            "name": "Liga UPC",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/89.png",
            "country": {
                "id": 43,
                "name": "Slovenia",
                "code": "SI",
                "flag": "https://media.api-sports.io/flags/si.svg"
            },
            "seasons": [
                {
                    "season": "2023-2024",
                    "start": "2023-09-27",
                    "end": "2024-04-29"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-09-26",
                    "end": "2021-05-30"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-09-30",
                    "end": "2023-06-10"
                },
                {
                    "season": "2019-2020",
                    "start": "2019-10-02",
                    "end": "2020-04-21"
                },
                {
                    "season": "2015-2016",
                    "start": "2015-10-17",
                    "end": "2016-06-05"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-10-03",
                    "end": "2017-05-24"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-09-28",
                    "end": "2022-05-31"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-10-13",
                    "end": "2018-05-29"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-10-11",
                    "end": "2019-05-24"
                },
                {
                    "season": "2014-2015",
                    "start": "2014-10-11",
                    "end": "2015-05-30"
                },
                {
                    "season": "2013-2014",
                    "start": "2013-10-19",
                    "end": "2014-05-31"
                },
                {
                    "season": "2012-2013",
                    "start": "2012-10-20",
                    "end": "2013-05-20"
                },
                {
                    "season": "2011-2012",
                    "start": "2011-10-15",
                    "end": "2012-05-24"
                },
                {
                    "season": "2010-2011",
                    "start": "2010-10-16",
                    "end": "2011-06-11"
                },
                {
                    "season": "2009-2010",
                    "start": "2009-10-03",
                    "end": "2010-06-09"
                },
                {
                    "season": "2008-2009",
                    "start": "2008-09-30",
                    "end": "2009-06-02"
                }
            ]
        },
        {
            "id": 163,
            "name": "Slovenian Cup",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/163.png",
            "country": {
                "id": 43,
                "name": "Slovenia",
                "code": "SI",
                "flag": "https://media.api-sports.io/flags/si.svg"
            },
            "seasons": [
                {
                    "season": "2017-2018",
                    "start": "2017-10-26",
                    "end": "2018-02-18"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-10-18",
                    "end": "2023-02-17"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-10-16",
                    "end": "2019-02-17"
                },
                {
                    "season": "2013-2014",
                    "start": "2014-02-05",
                    "end": "2014-02-08"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-10-13",
                    "end": "2021-05-23"
                },
                {
                    "season": "2014-2015",
                    "start": "2014-12-16",
                    "end": "2015-02-21"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-11-29",
                    "end": "2017-02-19"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-10-10",
                    "end": "2024-02-16"
                },
                {
                    "season": "2015-2016",
                    "start": "2015-11-09",
                    "end": "2016-02-21"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-10-13",
                    "end": "2022-02-18"
                }
            ]
        },
        {
            "id": 162,
            "name": "Supercup",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/162.png",
            "country": {
                "id": 43,
                "name": "Slovenia",
                "code": "SI",
                "flag": "https://media.api-sports.io/flags/si.svg"
            },
            "seasons": [
                {
                    "season": 2014,
                    "start": "2014-09-30",
                    "end": "2014-09-30"
                },
                {
                    "season": 2018,
                    "start": "2018-09-24",
                    "end": "2018-09-24"
                },
                {
                    "season": 2022,
                    "start": "2022-09-23",
                    "end": "2022-09-23"
                },
                {
                    "season": 2020,
                    "start": "2020-09-17",
                    "end": "2020-09-17"
                },
                {
                    "season": 2013,
                    "start": "2013-10-02",
                    "end": "2013-10-02"
                },
                {
                    "season": 2017,
                    "start": "2017-09-28",
                    "end": "2017-09-28"
                },
                {
                    "season": 2012,
                    "start": "2012-09-25",
                    "end": "2012-09-25"
                },
                {
                    "season": 2016,
                    "start": "2016-09-28",
                    "end": "2016-09-28"
                },
                {
                    "season": 2023,
                    "start": "2023-09-25",
                    "end": "2023-09-25"
                },
                {
                    "season": 2015,
                    "start": "2015-09-26",
                    "end": "2015-09-26"
                },
                {
                    "season": 2021,
                    "start": "2021-09-17",
                    "end": "2021-09-17"
                }
            ]
        },
        {
            "id": 91,
            "name": "KBL",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/91.png",
            "country": {
                "id": 44,
                "name": "South Korea",
                "code": "KR",
                "flag": "https://media.api-sports.io/flags/kr.svg"
            },
            "seasons": [
                {
                    "season": "2015-2016",
                    "start": "2015-09-12",
                    "end": "2016-03-29"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-10-14",
                    "end": "2018-04-18"
                },
                {
                    "season": "2014-2015",
                    "start": "2014-10-11",
                    "end": "2015-04-04"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-10-15",
                    "end": "2023-05-07"
                },
                {
                    "season": "2013-2014",
                    "start": "2013-10-12",
                    "end": "2014-04-10"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-10-13",
                    "end": "2019-04-21"
                },
                {
                    "season": "2011-2012",
                    "start": "2011-10-03",
                    "end": "2012-04-06"
                },
                {
                    "season": "2019-2020",
                    "start": "2019-10-05",
                    "end": "2020-03-31"
                },
                {
                    "season": "2010-2011",
                    "start": "2010-10-15",
                    "end": "2011-04-26"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-10-22",
                    "end": "2017-05-02"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-10-21",
                    "end": "2024-04-11"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-10-09",
                    "end": "2022-05-10"
                },
                {
                    "season": "2012-2013",
                    "start": "2012-10-13",
                    "end": "2013-04-17"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-10-09",
                    "end": "2021-05-09"
                }
            ]
        },
        {
            "id": 266,
            "name": "KBL Cup",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/266.png",
            "country": {
                "id": 44,
                "name": "South Korea",
                "code": "KR",
                "flag": "https://media.api-sports.io/flags/kr.svg"
            },
            "seasons": [
                {
                    "season": 2022,
                    "start": "2022-10-01",
                    "end": "2022-10-08"
                },
                {
                    "season": 2021,
                    "start": "2021-09-11",
                    "end": "2021-09-18"
                },
                {
                    "season": 2023,
                    "start": "2023-10-08",
                    "end": "2023-10-15"
                },
                {
                    "season": 2020,
                    "start": "2020-09-20",
                    "end": "2020-09-27"
                }
            ]
        },
        {
            "id": 92,
            "name": "WKBL W",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/92.png",
            "country": {
                "id": 44,
                "name": "South Korea",
                "code": "KR",
                "flag": "https://media.api-sports.io/flags/kr.svg"
            },
            "seasons": [
                {
                    "season": "2023-2024",
                    "start": "2023-11-05",
                    "end": "2024-03-30"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-11-03",
                    "end": "2019-03-25"
                },
                {
                    "season": "2011-2012",
                    "start": "2011-10-04",
                    "end": "2012-03-30"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-10-28",
                    "end": "2018-03-21"
                },
                {
                    "season": "2012-2013",
                    "start": "2012-10-12",
                    "end": "2013-03-19"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-10-29",
                    "end": "2017-03-20"
                },
                {
                    "season": "2013-2014",
                    "start": "2013-10-28",
                    "end": "2014-03-29"
                },
                {
                    "season": "2019-2020",
                    "start": "2019-10-19",
                    "end": "2020-03-19"
                },
                {
                    "season": "2014-2015",
                    "start": "2014-10-20",
                    "end": "2015-03-27"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-10-24",
                    "end": "2022-04-14"
                },
                {
                    "season": "2015-2016",
                    "start": "2015-10-31",
                    "end": "2016-03-20"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-10-10",
                    "end": "2021-03-15"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-10-30",
                    "end": "2023-03-23"
                }
            ]
        },
        {
            "id": 413,
            "name": "South American Championship",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/413.png",
            "country": {
                "id": 79,
                "name": "South-America",
                "code": null,
                "flag": null
            },
            "seasons": [
                {
                    "season": 2014,
                    "start": "2014-07-24",
                    "end": "2014-07-29"
                },
                {
                    "season": 2012,
                    "start": "2012-06-18",
                    "end": "2012-06-23"
                },
                {
                    "season": 2010,
                    "start": "2010-07-26",
                    "end": "2010-08-01"
                },
                {
                    "season": 2016,
                    "start": "2016-06-26",
                    "end": "2016-07-02"
                }
            ]
        },
        {
            "id": 417,
            "name": "South American Championship U17",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/417.png",
            "country": {
                "id": 79,
                "name": "South-America",
                "code": null,
                "flag": null
            },
            "seasons": [
                {
                    "season": 2019,
                    "start": "2019-11-25",
                    "end": "2019-11-30"
                },
                {
                    "season": 2017,
                    "start": "2017-07-15",
                    "end": "2017-07-21"
                }
            ]
        },
        {
            "id": 416,
            "name": "South American Championship U17 Women",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/416.png",
            "country": {
                "id": 79,
                "name": "South-America",
                "code": null,
                "flag": null
            },
            "seasons": [
                {
                    "season": 2019,
                    "start": "2019-11-04",
                    "end": "2019-11-10"
                },
                {
                    "season": 2017,
                    "start": "2017-06-28",
                    "end": "2017-07-02"
                }
            ]
        },
        {
            "id": 418,
            "name": "South American Championship U18",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/418.png",
            "country": {
                "id": 79,
                "name": "South-America",
                "code": null,
                "flag": null
            },
            "seasons": [
                {
                    "season": 2022,
                    "start": "2022-03-21",
                    "end": "2022-03-26"
                }
            ]
        },
        {
            "id": 415,
            "name": "South American Championship Women",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/415.png",
            "country": {
                "id": 79,
                "name": "South-America",
                "code": null,
                "flag": null
            },
            "seasons": [
                {
                    "season": 2014,
                    "start": "2014-08-14",
                    "end": "2014-08-19"
                },
                {
                    "season": 2022,
                    "start": "2022-08-01",
                    "end": "2022-08-07"
                },
                {
                    "season": 2018,
                    "start": "2018-08-30",
                    "end": "2018-09-05"
                },
                {
                    "season": 2016,
                    "start": "2016-05-20",
                    "end": "2016-05-26"
                }
            ]
        },
        {
            "id": 414,
            "name": "South American League",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/414.png",
            "country": {
                "id": 79,
                "name": "South-America",
                "code": null,
                "flag": null
            },
            "seasons": [
                {
                    "season": "2017-2018",
                    "start": "2017-10-03",
                    "end": "2017-12-15"
                },
                {
                    "season": "2019-2020",
                    "start": "2019-10-01",
                    "end": "2019-12-13"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-09-20",
                    "end": "2016-12-01"
                },
                {
                    "season": "2015-2016",
                    "start": "2015-09-29",
                    "end": "2015-12-10"
                },
                {
                    "season": "2014-2015",
                    "start": "2014-09-30",
                    "end": "2014-11-27"
                },
                {
                    "season": "2013-2014",
                    "start": "2013-10-01",
                    "end": "2013-11-29"
                },
                {
                    "season": "2012-2013",
                    "start": "2012-10-09",
                    "end": "2012-12-07"
                },
                {
                    "season": "2011-20212",
                    "start": "2011-10-06",
                    "end": "2012-02-06"
                },
                {
                    "season": "2010-2011",
                    "start": "2010-10-21",
                    "end": "2010-11-28"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-10-02",
                    "end": "2018-12-14"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-10-13",
                    "end": "2023-12-04"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-09-30",
                    "end": "2022-12-04"
                }
            ]
        },
        {
            "id": 117,
            "name": "ACB",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/117.png",
            "country": {
                "id": 45,
                "name": "Spain",
                "code": "ES",
                "flag": "https://media.api-sports.io/flags/es.svg"
            },
            "seasons": [
                {
                    "season": "2020-2021",
                    "start": "2020-09-19",
                    "end": "2021-06-15"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-09-29",
                    "end": "2018-06-19"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-09-27",
                    "end": "2019-05-26"
                },
                {
                    "season": "2015-2016",
                    "start": "2015-10-10",
                    "end": "2016-06-22"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-09-18",
                    "end": "2022-06-19"
                },
                {
                    "season": "2014-2015",
                    "start": "2014-10-04",
                    "end": "2015-06-24"
                },
                {
                    "season": "2013-2014",
                    "start": "2013-10-12",
                    "end": "2014-06-26"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-09-30",
                    "end": "2017-06-16"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-09-28",
                    "end": "2023-06-20"
                },
                {
                    "season": "2012-2013",
                    "start": "2012-09-29",
                    "end": "2013-06-19"
                },
                {
                    "season": "2011-2012",
                    "start": "2011-10-08",
                    "end": "2012-06-16"
                },
                {
                    "season": "2010-2011",
                    "start": "2010-09-30",
                    "end": "2011-06-14"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-09-23",
                    "end": "2024-05-12"
                },
                {
                    "season": "2009-2010",
                    "start": "2009-10-10",
                    "end": "2010-06-15"
                },
                {
                    "season": "2008-2009",
                    "start": "2008-10-04",
                    "end": "2009-06-18"
                }
            ]
        },
        {
            "id": 95,
            "name": "LEB - Oro",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/95.png",
            "country": {
                "id": 45,
                "name": "Spain",
                "code": "ES",
                "flag": "https://media.api-sports.io/flags/es.svg"
            },
            "seasons": [
                {
                    "season": "2022-2023",
                    "start": "2022-10-07",
                    "end": "2023-06-18"
                },
                {
                    "season": "2010-2011",
                    "start": "2010-10-01",
                    "end": "2011-06-03"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-10-08",
                    "end": "2022-06-19"
                },
                {
                    "season": "2015-2016",
                    "start": "2015-10-02",
                    "end": "2016-05-27"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-10-05",
                    "end": "2019-05-22"
                },
                {
                    "season": "2014-2015",
                    "start": "2014-10-03",
                    "end": "2015-06-02"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-09-29",
                    "end": "2018-06-12"
                },
                {
                    "season": "2013-2014",
                    "start": "2013-10-04",
                    "end": "2014-05-18"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-09-30",
                    "end": "2017-06-09"
                },
                {
                    "season": "2012-2013",
                    "start": "2012-10-05",
                    "end": "2013-06-06"
                },
                {
                    "season": "2019-2020",
                    "start": "2019-09-25",
                    "end": "2020-05-08"
                },
                {
                    "season": "2011-2012",
                    "start": "2011-09-23",
                    "end": "2012-06-09"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-10-16",
                    "end": "2021-06-20"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-10-06",
                    "end": "2024-05-10"
                }
            ]
        },
        {
            "id": 96,
            "name": "LEB - Plata",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/96.png",
            "country": {
                "id": 45,
                "name": "Spain",
                "code": "ES",
                "flag": "https://media.api-sports.io/flags/es.svg"
            },
            "seasons": [
                {
                    "season": "2020-2021",
                    "start": "2020-10-10",
                    "end": "2021-05-29"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-10-07",
                    "end": "2024-04-21"
                },
                {
                    "season": "2019-2020",
                    "start": "2019-09-21",
                    "end": "2020-05-02"
                },
                {
                    "season": "2010-2011",
                    "start": "2010-10-01",
                    "end": "2011-06-05"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-10-05",
                    "end": "2019-05-25"
                },
                {
                    "season": "2011-2012",
                    "start": "2011-10-08",
                    "end": "2012-05-25"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-09-29",
                    "end": "2018-06-05"
                },
                {
                    "season": "2012-2013",
                    "start": "2012-10-13",
                    "end": "2013-05-12"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-09-30",
                    "end": "2017-06-04"
                },
                {
                    "season": "2013-2014",
                    "start": "2013-10-05",
                    "end": "2014-05-23"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-10-09",
                    "end": "2022-05-21"
                },
                {
                    "season": "2014-2015",
                    "start": "2014-10-04",
                    "end": "2015-06-02"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-10-07",
                    "end": "2023-05-20"
                },
                {
                    "season": "2015-2016",
                    "start": "2015-10-03",
                    "end": "2016-05-13"
                }
            ]
        },
        {
            "id": 94,
            "name": "Liga Femenina W",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/94.png",
            "country": {
                "id": 45,
                "name": "Spain",
                "code": "ES",
                "flag": "https://media.api-sports.io/flags/es.svg"
            },
            "seasons": [
                {
                    "season": "2017-2018",
                    "start": "2017-09-30",
                    "end": "2018-04-29"
                },
                {
                    "season": "2008-2009",
                    "start": "2008-10-03",
                    "end": "2009-04-26"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-10-13",
                    "end": "2019-05-05"
                },
                {
                    "season": "2009-2010",
                    "start": "2009-10-10",
                    "end": "2010-04-14"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-09-28",
                    "end": "2017-05-02"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-10-05",
                    "end": "2023-05-07"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-09-19",
                    "end": "2021-05-06"
                },
                {
                    "season": "2010-2011",
                    "start": "2010-10-09",
                    "end": "2011-04-28"
                },
                {
                    "season": "2019-2020",
                    "start": "2019-09-28",
                    "end": "2020-04-04"
                },
                {
                    "season": "2011-2012",
                    "start": "2011-10-15",
                    "end": "2012-04-13"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-09-25",
                    "end": "2022-05-12"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-09-22",
                    "end": "2024-04-28"
                },
                {
                    "season": "2015-2016",
                    "start": "2015-09-25",
                    "end": "2016-04-23"
                },
                {
                    "season": "2012-2013",
                    "start": "2012-10-12",
                    "end": "2013-04-26"
                },
                {
                    "season": "2013-2014",
                    "start": "2013-10-12",
                    "end": "2014-04-26"
                },
                {
                    "season": "2014-2015",
                    "start": "2014-10-13",
                    "end": "2015-04-23"
                }
            ]
        },
        {
            "id": 119,
            "name": "Spanish Cup",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/119.png",
            "country": {
                "id": 45,
                "name": "Spain",
                "code": "ES",
                "flag": "https://media.api-sports.io/flags/es.svg"
            },
            "seasons": [
                {
                    "season": 2021,
                    "start": "2021-02-11",
                    "end": "2021-02-14"
                },
                {
                    "season": 2024,
                    "start": "2024-02-15",
                    "end": "2024-02-18"
                },
                {
                    "season": 2022,
                    "start": "2022-02-17",
                    "end": "2022-02-20"
                },
                {
                    "season": 2013,
                    "start": "2013-02-07",
                    "end": "2013-02-10"
                },
                {
                    "season": 2020,
                    "start": "2020-02-13",
                    "end": "2020-02-16"
                },
                {
                    "season": 2014,
                    "start": "2014-02-06",
                    "end": "2014-02-09"
                },
                {
                    "season": 2015,
                    "start": "2015-02-19",
                    "end": "2015-02-22"
                },
                {
                    "season": 2023,
                    "start": "2023-02-16",
                    "end": "2023-02-19"
                },
                {
                    "season": 2012,
                    "start": "2012-02-16",
                    "end": "2012-02-19"
                },
                {
                    "season": 2009,
                    "start": "2009-02-19",
                    "end": "2009-02-22"
                },
                {
                    "season": 2008,
                    "start": "2008-02-07",
                    "end": "2008-02-10"
                },
                {
                    "season": 2011,
                    "start": "2011-02-10",
                    "end": "2011-02-13"
                },
                {
                    "season": 2016,
                    "start": "2016-02-18",
                    "end": "2016-02-21"
                },
                {
                    "season": 2017,
                    "start": "2017-02-16",
                    "end": "2017-02-19"
                },
                {
                    "season": 2018,
                    "start": "2018-02-15",
                    "end": "2018-02-18"
                },
                {
                    "season": 2019,
                    "start": "2019-02-14",
                    "end": "2019-02-17"
                },
                {
                    "season": 2010,
                    "start": "2010-02-18",
                    "end": "2010-02-21"
                }
            ]
        },
        {
            "id": 165,
            "name": "Spanish Cup Women",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/165.png",
            "country": {
                "id": 45,
                "name": "Spain",
                "code": "ES",
                "flag": "https://media.api-sports.io/flags/es.svg"
            },
            "seasons": [
                {
                    "season": 2021,
                    "start": "2021-03-04",
                    "end": "2021-03-07"
                },
                {
                    "season": 2023,
                    "start": "2023-03-30",
                    "end": "2023-04-02"
                },
                {
                    "season": 2019,
                    "start": "2019-02-28",
                    "end": "2019-03-03"
                },
                {
                    "season": 2024,
                    "start": "2024-03-21",
                    "end": "2024-03-24"
                },
                {
                    "season": 2022,
                    "start": "2022-03-24",
                    "end": "2022-03-27"
                },
                {
                    "season": 2020,
                    "start": "2020-03-05",
                    "end": "2020-03-08"
                }
            ]
        },
        {
            "id": 118,
            "name": "Supercopa ACB",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/118.png",
            "country": {
                "id": 45,
                "name": "Spain",
                "code": "ES",
                "flag": "https://media.api-sports.io/flags/es.svg"
            },
            "seasons": [
                {
                    "season": 2015,
                    "start": "2015-10-02",
                    "end": "2015-10-03"
                },
                {
                    "season": 2021,
                    "start": "2021-09-11",
                    "end": "2021-09-12"
                },
                {
                    "season": 2014,
                    "start": "2014-09-26",
                    "end": "2014-09-27"
                },
                {
                    "season": 2020,
                    "start": "2020-09-12",
                    "end": "2020-09-13"
                },
                {
                    "season": 2010,
                    "start": "2010-09-24",
                    "end": "2010-09-25"
                },
                {
                    "season": 2023,
                    "start": "2023-09-16",
                    "end": "2023-09-17"
                },
                {
                    "season": 2013,
                    "start": "2013-10-04",
                    "end": "2013-10-05"
                },
                {
                    "season": 2012,
                    "start": "2012-09-22",
                    "end": "2012-09-23"
                },
                {
                    "season": 2011,
                    "start": "2011-09-30",
                    "end": "2011-10-01"
                },
                {
                    "season": 2016,
                    "start": "2016-09-23",
                    "end": "2016-09-24"
                },
                {
                    "season": 2017,
                    "start": "2017-09-22",
                    "end": "2017-09-23"
                },
                {
                    "season": 2018,
                    "start": "2018-09-21",
                    "end": "2018-09-22"
                },
                {
                    "season": 2022,
                    "start": "2022-09-24",
                    "end": "2022-09-25"
                }
            ]
        },
        {
            "id": 164,
            "name": "Supercopa Women",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/164.png",
            "country": {
                "id": 45,
                "name": "Spain",
                "code": "ES",
                "flag": "https://media.api-sports.io/flags/es.svg"
            },
            "seasons": [
                {
                    "season": 2018,
                    "start": "2018-10-10",
                    "end": "2018-10-10"
                },
                {
                    "season": 2023,
                    "start": "2023-09-30",
                    "end": "2023-10-01"
                },
                {
                    "season": 2017,
                    "start": "2017-09-28",
                    "end": "2017-09-28"
                },
                {
                    "season": 2022,
                    "start": "2022-10-08",
                    "end": "2022-10-09"
                },
                {
                    "season": 2016,
                    "start": "2016-09-22",
                    "end": "2016-09-22"
                },
                {
                    "season": 2014,
                    "start": "2014-10-11",
                    "end": "2014-10-11"
                },
                {
                    "season": 2020,
                    "start": "2020-09-12",
                    "end": "2020-09-13"
                },
                {
                    "season": 2013,
                    "start": "2013-10-08",
                    "end": "2013-10-08"
                },
                {
                    "season": 2021,
                    "start": "2021-09-18",
                    "end": "2021-09-19"
                },
                {
                    "season": 2015,
                    "start": "2015-09-23",
                    "end": "2015-09-23"
                }
            ]
        },
        {
            "id": 98,
            "name": "Basketettan W",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/98.png",
            "country": {
                "id": 46,
                "name": "Sweden",
                "code": "SE",
                "flag": "https://media.api-sports.io/flags/se.svg"
            },
            "seasons": [
                {
                    "season": "2022-2023",
                    "start": "2022-09-17",
                    "end": "2023-04-16"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-10-02",
                    "end": "2022-04-03"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-09-16",
                    "end": "2024-04-28"
                },
                {
                    "season": "2019-2020",
                    "start": "2019-09-28",
                    "end": "2020-03-18"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-10-01",
                    "end": "2021-05-09"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-09-22",
                    "end": "2019-03-31"
                }
            ]
        },
        {
            "id": 93,
            "name": "Ligan",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/93.png",
            "country": {
                "id": 46,
                "name": "Sweden",
                "code": "SE",
                "flag": "https://media.api-sports.io/flags/se.svg"
            },
            "seasons": [
                {
                    "season": "2023-2024",
                    "start": "2023-09-21",
                    "end": "2024-04-10"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-10-18",
                    "end": "2021-05-29"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-09-23",
                    "end": "2023-05-08"
                },
                {
                    "season": "2019-2020",
                    "start": "2019-09-25",
                    "end": "2020-03-20"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-09-24",
                    "end": "2022-05-09"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-09-21",
                    "end": "2019-05-12"
                },
                {
                    "season": "2015-2016",
                    "start": "2015-10-01",
                    "end": "2016-04-28"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-10-06",
                    "end": "2018-05-18"
                },
                {
                    "season": "2014-2015",
                    "start": "2014-09-30",
                    "end": "2015-04-29"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-10-06",
                    "end": "2017-05-10"
                },
                {
                    "season": "2013-2014",
                    "start": "2013-10-02",
                    "end": "2014-05-10"
                },
                {
                    "season": "2012-2013",
                    "start": "2012-10-04",
                    "end": "2013-04-30"
                },
                {
                    "season": "2011-2012",
                    "start": "2011-10-07",
                    "end": "2012-04-29"
                },
                {
                    "season": "2010-2011",
                    "start": "2010-10-08",
                    "end": "2011-05-05"
                },
                {
                    "season": "2009-2010",
                    "start": "2009-09-25",
                    "end": "2010-05-01"
                },
                {
                    "season": "2008-2009",
                    "start": "2008-10-01",
                    "end": "2009-05-05"
                }
            ]
        },
        {
            "id": 97,
            "name": "Basketligan W",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/97.png",
            "country": {
                "id": 46,
                "name": "Sweden",
                "code": "SE",
                "flag": "https://media.api-sports.io/flags/se.svg"
            },
            "seasons": [
                {
                    "season": "2023-2024",
                    "start": "2023-10-07",
                    "end": "2024-04-16"
                },
                {
                    "season": "2019-2020",
                    "start": "2019-09-25",
                    "end": "2020-03-18"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-10-08",
                    "end": "2023-04-28"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-09-24",
                    "end": "2017-04-26"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-09-23",
                    "end": "2018-04-25"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-09-29",
                    "end": "2019-05-01"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-09-24",
                    "end": "2022-04-27"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-10-01",
                    "end": "2021-04-27"
                }
            ]
        },
        {
            "id": 99,
            "name": "Superettan",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/99.png",
            "country": {
                "id": 46,
                "name": "Sweden",
                "code": "SE",
                "flag": "https://media.api-sports.io/flags/se.svg"
            },
            "seasons": [
                {
                    "season": "2020-2021",
                    "start": "2020-09-26",
                    "end": "2021-03-28"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-09-16",
                    "end": "2024-04-14"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-09-25",
                    "end": "2022-05-01"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-09-24",
                    "end": "2023-04-29"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-09-21",
                    "end": "2019-03-31"
                },
                {
                    "season": "2019-2020",
                    "start": "2019-09-28",
                    "end": "2020-03-29"
                }
            ]
        },
        {
            "id": 100,
            "name": "SB League",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/100.png",
            "country": {
                "id": 47,
                "name": "Switzerland",
                "code": "CH",
                "flag": "https://media.api-sports.io/flags/ch.svg"
            },
            "seasons": [
                {
                    "season": "2014-2015",
                    "start": "2014-10-04",
                    "end": "2015-05-23"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-10-15",
                    "end": "2017-06-13"
                },
                {
                    "season": "2008-2009",
                    "start": "2008-10-04",
                    "end": "2009-05-23"
                },
                {
                    "season": "2009-2010",
                    "start": "2009-10-03",
                    "end": "2010-05-25"
                },
                {
                    "season": "2010-2011",
                    "start": "2010-10-02",
                    "end": "2011-05-18"
                },
                {
                    "season": "2011-2012",
                    "start": "2011-10-01",
                    "end": "2012-05-18"
                },
                {
                    "season": "2012-2013",
                    "start": "2012-10-13",
                    "end": "2013-05-31"
                },
                {
                    "season": "2013-2014",
                    "start": "2013-10-05",
                    "end": "2014-05-23"
                },
                {
                    "season": "2015-2016",
                    "start": "2015-10-03",
                    "end": "2016-05-31"
                },
                {
                    "season": "2019-2020",
                    "start": "2019-09-28",
                    "end": "2020-03-18"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-10-01",
                    "end": "2023-06-13"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-10-09",
                    "end": "2022-05-28"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-09-30",
                    "end": "2024-04-09"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-10-11",
                    "end": "2021-06-01"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-09-29",
                    "end": "2019-05-25"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-09-30",
                    "end": "2018-06-09"
                }
            ]
        },
        {
            "id": 101,
            "name": "SB League W",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/101.png",
            "country": {
                "id": 47,
                "name": "Switzerland",
                "code": "CH",
                "flag": "https://media.api-sports.io/flags/ch.svg"
            },
            "seasons": [
                {
                    "season": "2023-2024",
                    "start": "2023-09-30",
                    "end": "2024-04-21"
                },
                {
                    "season": "2019-2020",
                    "start": "2019-10-05",
                    "end": "2020-04-04"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-10-15",
                    "end": "2023-04-22"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-09-29",
                    "end": "2019-05-12"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-10-09",
                    "end": "2021-04-28"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-09-30",
                    "end": "2018-05-20"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-09-24",
                    "end": "2017-05-13"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-10-09",
                    "end": "2022-05-22"
                }
            ]
        },
        {
            "id": 403,
            "name": "P. League+",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/403.png",
            "country": {
                "id": 68,
                "name": "Taiwan",
                "code": "TW",
                "flag": "https://media.api-sports.io/flags/tw.svg"
            },
            "seasons": [
                {
                    "season": "2022-2023",
                    "start": "2022-11-05",
                    "end": "2023-06-14"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-11-11",
                    "end": "2024-05-19"
                }
            ]
        },
        {
            "id": 267,
            "name": "SBL",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/267.png",
            "country": {
                "id": 68,
                "name": "Taiwan",
                "code": "TW",
                "flag": "https://media.api-sports.io/flags/tw.svg"
            },
            "seasons": [
                {
                    "season": "2021-2022",
                    "start": "2021-12-25",
                    "end": "2022-05-01"
                },
                {
                    "season": "2023-2024",
                    "start": "2024-01-19",
                    "end": "2024-04-21"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-12-04",
                    "end": "2021-05-08"
                },
                {
                    "season": "2022-2023",
                    "start": "2023-01-07",
                    "end": "2023-05-21"
                }
            ]
        },
        {
            "id": 402,
            "name": "T1 League",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/402.png",
            "country": {
                "id": 68,
                "name": "Taiwan",
                "code": "TW",
                "flag": "https://media.api-sports.io/flags/tw.svg"
            },
            "seasons": [
                {
                    "season": "2022-2023",
                    "start": "2022-10-29",
                    "end": "2023-05-21"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-10-28",
                    "end": "2024-04-28"
                }
            ]
        },
        {
            "id": 268,
            "name": "WSBL Women",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/268.png",
            "country": {
                "id": 68,
                "name": "Taiwan",
                "code": "TW",
                "flag": "https://media.api-sports.io/flags/tw.svg"
            },
            "seasons": [
                {
                    "season": 2021,
                    "start": "2021-04-20",
                    "end": "2021-05-13"
                },
                {
                    "season": 2024,
                    "start": "2024-01-19",
                    "end": "2024-04-21"
                },
                {
                    "season": 2022,
                    "start": "2022-01-17",
                    "end": "2022-05-05"
                },
                {
                    "season": 2023,
                    "start": "2023-01-07",
                    "end": "2023-05-13"
                }
            ]
        },
        {
            "id": 383,
            "name": "National League",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/383.png",
            "country": {
                "id": 74,
                "name": "Tajikistan",
                "code": "TJ",
                "flag": "https://media.api-sports.io/flags/tj.svg"
            },
            "seasons": [
                {
                    "season": 2019,
                    "start": "2019-10-13",
                    "end": "2020-05-17"
                }
            ]
        },
        {
            "id": 384,
            "name": "Northern Cup",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/384.png",
            "country": {
                "id": 74,
                "name": "Tajikistan",
                "code": "TJ",
                "flag": "https://media.api-sports.io/flags/tj.svg"
            },
            "seasons": [
                {
                    "season": 2020,
                    "start": "2020-04-09",
                    "end": "2020-04-28"
                }
            ]
        },
        {
            "id": 269,
            "name": "TBL",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/269.png",
            "country": {
                "id": 69,
                "name": "Thailand",
                "code": "TH",
                "flag": "https://media.api-sports.io/flags/th.svg"
            },
            "seasons": [
                {
                    "season": 2023,
                    "start": "2023-07-01",
                    "end": "2023-08-27"
                },
                {
                    "season": 2020,
                    "start": "2020-07-25",
                    "end": "2020-08-30"
                },
                {
                    "season": 2022,
                    "start": "2022-06-25",
                    "end": "2022-08-24"
                },
                {
                    "season": 2021,
                    "start": "2021-10-23",
                    "end": "2021-12-04"
                }
            ]
        },
        {
            "id": 170,
            "name": "Federation Cup",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/170.png",
            "country": {
                "id": 48,
                "name": "Turkey",
                "code": "TR",
                "flag": "https://media.api-sports.io/flags/tr.svg"
            },
            "seasons": [
                {
                    "season": "2022-2023",
                    "start": "2022-09-23",
                    "end": "2022-09-30"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-09-18",
                    "end": "2021-09-25"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-09-18",
                    "end": "2018-01-28"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-09-23",
                    "end": "2018-09-30"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-10-04",
                    "end": "2020-10-11"
                }
            ]
        },
        {
            "id": 271,
            "name": "Federation Cup Women",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/271.png",
            "country": {
                "id": 48,
                "name": "Turkey",
                "code": "TR",
                "flag": "https://media.api-sports.io/flags/tr.svg"
            },
            "seasons": [
                {
                    "season": "2022-2023",
                    "start": "2022-09-13",
                    "end": "2022-09-19"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-09-26",
                    "end": "2021-10-02"
                }
            ]
        },
        {
            "id": 105,
            "name": "TKBL W",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/105.png",
            "country": {
                "id": 48,
                "name": "Turkey",
                "code": "TR",
                "flag": "https://media.api-sports.io/flags/tr.svg"
            },
            "seasons": [
                {
                    "season": "2022-2023",
                    "start": "2022-10-08",
                    "end": "2023-04-25"
                },
                {
                    "season": "2019-2020",
                    "start": "2019-10-12",
                    "end": "2020-04-12"
                },
                {
                    "season": "2015-2016",
                    "start": "2015-10-17",
                    "end": "2016-05-08"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-10-03",
                    "end": "2021-05-11"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-09-13",
                    "end": "2024-04-17"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-10-16",
                    "end": "2022-05-15"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-10-22",
                    "end": "2017-05-17"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-10-13",
                    "end": "2019-05-15"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-10-07",
                    "end": "2018-05-21"
                },
                {
                    "season": "2014-2015",
                    "start": "2014-10-29",
                    "end": "2015-05-09"
                },
                {
                    "season": "2013-2014",
                    "start": "2013-10-19",
                    "end": "2014-05-05"
                },
                {
                    "season": "2012-2013",
                    "start": "2012-10-20",
                    "end": "2013-05-05"
                }
            ]
        },
        {
            "id": 167,
            "name": "Super Cup",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/167.png",
            "country": {
                "id": 48,
                "name": "Turkey",
                "code": "TR",
                "flag": "https://media.api-sports.io/flags/tr.svg"
            },
            "seasons": [
                {
                    "season": 2014,
                    "start": "2014-10-08",
                    "end": "2014-10-08"
                },
                {
                    "season": 2015,
                    "start": "2015-10-07",
                    "end": "2015-10-07"
                },
                {
                    "season": 2013,
                    "start": "2013-10-09",
                    "end": "2013-10-09"
                },
                {
                    "season": 2016,
                    "start": "2016-10-05",
                    "end": "2016-10-05"
                },
                {
                    "season": 2012,
                    "start": "2012-09-30",
                    "end": "2012-09-30"
                },
                {
                    "season": 2018,
                    "start": "2018-10-03",
                    "end": "2018-10-03"
                },
                {
                    "season": 2011,
                    "start": "2011-10-12",
                    "end": "2011-10-12"
                },
                {
                    "season": 2017,
                    "start": "2017-10-04",
                    "end": "2017-10-04"
                },
                {
                    "season": 2022,
                    "start": "2022-09-28",
                    "end": "2022-09-28"
                },
                {
                    "season": 2019,
                    "start": "2019-09-26",
                    "end": "2019-09-26"
                }
            ]
        },
        {
            "id": 169,
            "name": "Super Cup Women",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/169.png",
            "country": {
                "id": 48,
                "name": "Turkey",
                "code": "TR",
                "flag": "https://media.api-sports.io/flags/tr.svg"
            },
            "seasons": [
                {
                    "season": 2022,
                    "start": "2022-12-28",
                    "end": "2022-12-28"
                },
                {
                    "season": 2019,
                    "start": "2019-10-09",
                    "end": "2019-10-09"
                },
                {
                    "season": 2014,
                    "start": "2014-10-26",
                    "end": "2014-10-26"
                },
                {
                    "season": 2018,
                    "start": "2018-10-10",
                    "end": "2018-10-10"
                },
                {
                    "season": 2013,
                    "start": "2013-10-16",
                    "end": "2013-10-16"
                },
                {
                    "season": 2016,
                    "start": "2016-10-18",
                    "end": "2016-10-18"
                },
                {
                    "season": 2015,
                    "start": "2015-10-10",
                    "end": "2015-10-10"
                }
            ]
        },
        {
            "id": 104,
            "name": "Super Ligi",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/104.png",
            "country": {
                "id": 48,
                "name": "Turkey",
                "code": "TR",
                "flag": "https://media.api-sports.io/flags/tr.svg"
            },
            "seasons": [
                {
                    "season": "2022-2023",
                    "start": "2022-09-30",
                    "end": "2023-06-17"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-09-26",
                    "end": "2021-05-07"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-09-29",
                    "end": "2024-04-15"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-10-08",
                    "end": "2017-06-16"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-10-07",
                    "end": "2018-06-13"
                },
                {
                    "season": "2019-2020",
                    "start": "2019-09-28",
                    "end": "2020-05-03"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-10-05",
                    "end": "2019-05-26"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-09-25",
                    "end": "2022-06-13"
                }
            ]
        },
        {
            "id": 103,
            "name": "TB2L",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/103.png",
            "country": {
                "id": 48,
                "name": "Turkey",
                "code": "TR",
                "flag": "https://media.api-sports.io/flags/tr.svg"
            },
            "seasons": [
                {
                    "season": "2023-2024",
                    "start": "2023-11-03",
                    "end": "2024-04-13"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-12-04",
                    "end": "2021-04-24"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-11-11",
                    "end": "2023-05-31"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-11-05",
                    "end": "2022-04-30"
                },
                {
                    "season": "2019-2020",
                    "start": "2019-10-11",
                    "end": "2020-05-03"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-10-21",
                    "end": "2017-05-28"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-10-26",
                    "end": "2019-05-13"
                }
            ]
        },
        {
            "id": 102,
            "name": "TBL",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/102.png",
            "country": {
                "id": 48,
                "name": "Turkey",
                "code": "TR",
                "flag": "https://media.api-sports.io/flags/tr.svg"
            },
            "seasons": [
                {
                    "season": "2014-2015",
                    "start": "2014-10-10",
                    "end": "2015-06-03"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-09-15",
                    "end": "2024-04-21"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-09-30",
                    "end": "2017-06-04"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-10-07",
                    "end": "2023-06-22"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-10-12",
                    "end": "2019-05-26"
                },
                {
                    "season": "2015-2016",
                    "start": "2015-10-09",
                    "end": "2016-06-02"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-10-17",
                    "end": "2021-06-15"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-10-01",
                    "end": "2022-06-18"
                },
                {
                    "season": "2019-2020",
                    "start": "2019-10-11",
                    "end": "2020-04-26"
                }
            ]
        },
        {
            "id": 270,
            "name": "TKBL Women",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/270.png",
            "country": {
                "id": 48,
                "name": "Turkey",
                "code": "TR",
                "flag": "https://media.api-sports.io/flags/tr.svg"
            },
            "seasons": [
                {
                    "season": "2021-2022",
                    "start": "2021-10-08",
                    "end": "2022-05-07"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-09-23",
                    "end": "2023-05-22"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-09-22",
                    "end": "2024-04-14"
                }
            ]
        },
        {
            "id": 166,
            "name": "Turkish Cup",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/166.png",
            "country": {
                "id": 48,
                "name": "Turkey",
                "code": "TR",
                "flag": "https://media.api-sports.io/flags/tr.svg"
            },
            "seasons": [
                {
                    "season": "2015-2016",
                    "start": "2016-02-17",
                    "end": "2016-02-21"
                },
                {
                    "season": "2010-2011",
                    "start": "2011-02-09",
                    "end": "2011-02-13"
                },
                {
                    "season": "2021-2022",
                    "start": "2022-02-15",
                    "end": "2022-02-20"
                },
                {
                    "season": "2022-2023",
                    "start": "2023-02-14",
                    "end": "2023-02-15"
                },
                {
                    "season": "2016-2017",
                    "start": "2017-02-15",
                    "end": "2017-02-19"
                },
                {
                    "season": "2023-2024",
                    "start": "2024-02-13",
                    "end": "2024-02-18"
                },
                {
                    "season": "2017-2018",
                    "start": "2018-02-14",
                    "end": "2018-02-18"
                },
                {
                    "season": "2014-2015",
                    "start": "2014-10-02",
                    "end": "2015-02-22"
                },
                {
                    "season": "2018-2019",
                    "start": "2019-02-13",
                    "end": "2019-02-17"
                },
                {
                    "season": "2013-2014",
                    "start": "2013-10-01",
                    "end": "2014-02-09"
                },
                {
                    "season": "2019-2020",
                    "start": "2020-02-11",
                    "end": "2020-02-16"
                },
                {
                    "season": "2012-2013",
                    "start": "2012-10-02",
                    "end": "2013-02-10"
                },
                {
                    "season": "2011-2012",
                    "start": "2012-02-14",
                    "end": "2012-02-18"
                }
            ]
        },
        {
            "id": 168,
            "name": "Turkish Cup Women",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/168.png",
            "country": {
                "id": 48,
                "name": "Turkey",
                "code": "TR",
                "flag": "https://media.api-sports.io/flags/tr.svg"
            },
            "seasons": [
                {
                    "season": "2021-2022",
                    "start": "2022-03-22",
                    "end": "2022-03-26"
                },
                {
                    "season": "2014-2015",
                    "start": "2014-10-23",
                    "end": "2014-12-28"
                },
                {
                    "season": "2018-2019",
                    "start": "2019-02-27",
                    "end": "2019-03-02"
                },
                {
                    "season": "2013-2014",
                    "start": "2013-10-11",
                    "end": "2014-01-11"
                },
                {
                    "season": "2017-2018",
                    "start": "2018-02-21",
                    "end": "2018-02-25"
                },
                {
                    "season": "2023-2024",
                    "start": "2024-01-02",
                    "end": "2024-01-05"
                },
                {
                    "season": "2015-2016",
                    "start": "2015-10-08",
                    "end": "2016-03-05"
                },
                {
                    "season": "2022-2023",
                    "start": "2023-03-06",
                    "end": "2023-03-07"
                },
                {
                    "season": "2016-2017",
                    "start": "2017-03-01",
                    "end": "2017-03-04"
                },
                {
                    "season": "2019-2020",
                    "start": "2020-03-03",
                    "end": "2020-03-07"
                }
            ]
        },
        {
            "id": 385,
            "name": "NBLT",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/385.png",
            "country": {
                "id": 75,
                "name": "Turkmenistan",
                "code": "TM",
                "flag": "https://media.api-sports.io/flags/tm.svg"
            },
            "seasons": [
                {
                    "season": "2019-2020",
                    "start": "2019-11-30",
                    "end": "2020-06-28"
                }
            ]
        },
        {
            "id": 172,
            "name": "ACBU Superleague",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/172.png",
            "country": {
                "id": 49,
                "name": "Ukraine",
                "code": "UA",
                "flag": "https://media.api-sports.io/flags/ua.svg"
            },
            "seasons": [
                {
                    "season": "2015-2016",
                    "start": "2015-10-31",
                    "end": "2016-03-12"
                }
            ]
        },
        {
            "id": 106,
            "name": "Super League",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/106.png",
            "country": {
                "id": 49,
                "name": "Ukraine",
                "code": "UA",
                "flag": "https://media.api-sports.io/flags/ua.svg"
            },
            "seasons": [
                {
                    "season": "2015-2016",
                    "start": "2015-10-10",
                    "end": "2016-05-02"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-10-07",
                    "end": "2021-06-14"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-10-22",
                    "end": "2023-04-09"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-09-30",
                    "end": "2017-05-08"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-10-03",
                    "end": "2024-04-11"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-09-29",
                    "end": "2018-05-01"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-10-05",
                    "end": "2019-04-30"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-09-23",
                    "end": "2022-03-13"
                },
                {
                    "season": "2019-2020",
                    "start": "2019-09-27",
                    "end": "2020-04-17"
                },
                {
                    "season": "2012-2013",
                    "start": "2012-09-28",
                    "end": "2013-05-31"
                },
                {
                    "season": "2013-2014",
                    "start": "2013-10-09",
                    "end": "2014-05-13"
                },
                {
                    "season": "2011-2012",
                    "start": "2011-10-01",
                    "end": "2012-05-25"
                },
                {
                    "season": "2010-2011",
                    "start": "2010-09-24",
                    "end": "2011-05-31"
                },
                {
                    "season": "2014-2015",
                    "start": "2014-10-11",
                    "end": "2015-05-06"
                }
            ]
        },
        {
            "id": 272,
            "name": "Super Cup",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/272.png",
            "country": {
                "id": 49,
                "name": "Ukraine",
                "code": "UA",
                "flag": "https://media.api-sports.io/flags/ua.svg"
            },
            "seasons": [
                {
                    "season": 2021,
                    "start": "2021-09-22",
                    "end": "2022-10-01"
                }
            ]
        },
        {
            "id": 107,
            "name": "Superleague W",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/107.png",
            "country": {
                "id": 49,
                "name": "Ukraine",
                "code": "UA",
                "flag": "https://media.api-sports.io/flags/ua.svg"
            },
            "seasons": [
                {
                    "season": "2017-2018",
                    "start": "2017-09-26",
                    "end": "2018-04-17"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-10-22",
                    "end": "2023-04-14"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-10-05",
                    "end": "2019-05-06"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-10-12",
                    "end": "2024-03-31"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-10-10",
                    "end": "2021-04-13"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-09-25",
                    "end": "2022-03-12"
                },
                {
                    "season": "2019-2020",
                    "start": "2019-09-20",
                    "end": "2020-04-01"
                }
            ]
        },
        {
            "id": 171,
            "name": "Ukrainian Cup",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/171.png",
            "country": {
                "id": 49,
                "name": "Ukraine",
                "code": "UA",
                "flag": "https://media.api-sports.io/flags/ua.svg"
            },
            "seasons": [
                {
                    "season": "2014-2015",
                    "start": "2015-01-24",
                    "end": "2015-03-07"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-11-28",
                    "end": "2021-04-04"
                },
                {
                    "season": "2013-2014",
                    "start": "2014-02-08",
                    "end": "2014-02-09"
                },
                {
                    "season": "2015-2016",
                    "start": "2016-01-06",
                    "end": "2016-02-27"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-10-03",
                    "end": "2017-02-25"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-12-22",
                    "end": "2022-03-16"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-10-31",
                    "end": "2019-03-10"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-11-14",
                    "end": "2018-03-10"
                }
            ]
        },
        {
            "id": 108,
            "name": "BBL",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/108.png",
            "country": {
                "id": 50,
                "name": "United Kingdom",
                "code": "GB",
                "flag": "https://media.api-sports.io/flags/gb.svg"
            },
            "seasons": [
                {
                    "season": "2015-2016",
                    "start": "2015-09-18",
                    "end": "2016-05-08"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-09-23",
                    "end": "2023-05-14"
                },
                {
                    "season": "2010-2011",
                    "start": "2010-09-26",
                    "end": "2011-04-30"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-09-23",
                    "end": "2017-05-14"
                },
                {
                    "season": "2011-2012",
                    "start": "2011-10-14",
                    "end": "2012-05-12"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-09-29",
                    "end": "2018-05-20"
                },
                {
                    "season": "2012-2013",
                    "start": "2012-09-21",
                    "end": "2013-04-28"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-09-21",
                    "end": "2019-05-19"
                },
                {
                    "season": "2013-2014",
                    "start": "2013-09-27",
                    "end": "2014-05-11"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-10-29",
                    "end": "2022-05-15"
                },
                {
                    "season": "2014-2015",
                    "start": "2014-09-26",
                    "end": "2015-05-10"
                },
                {
                    "season": "2019-2020",
                    "start": "2019-12-06",
                    "end": "2020-04-19"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-09-14",
                    "end": "2024-04-21"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-12-03",
                    "end": "2021-05-16"
                }
            ]
        },
        {
            "id": 174,
            "name": "BBL Cup",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/174.png",
            "country": {
                "id": 50,
                "name": "United Kingdom",
                "code": "GB",
                "flag": "https://media.api-sports.io/flags/gb.svg"
            },
            "seasons": [
                {
                    "season": "2011-2012",
                    "start": "2011-10-29",
                    "end": "2012-01-15"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-10-31",
                    "end": "2021-01-24"
                },
                {
                    "season": "2010-2011",
                    "start": "2010-10-16",
                    "end": "2011-01-16"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-10-26",
                    "end": "2019-01-27"
                },
                {
                    "season": "2012-2013",
                    "start": "2012-10-07",
                    "end": "2013-01-13"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-10-13",
                    "end": "2018-01-28"
                },
                {
                    "season": "2013-2014",
                    "start": "2013-10-18",
                    "end": "2014-01-12"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-10-01",
                    "end": "2017-01-15"
                },
                {
                    "season": "2014-2015",
                    "start": "2014-10-10",
                    "end": "2015-01-11"
                },
                {
                    "season": "2015-2016",
                    "start": "2015-10-16",
                    "end": "2016-01-17"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-10-02",
                    "end": "2023-01-29"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-09-24",
                    "end": "2022-01-30"
                }
            ]
        },
        {
            "id": 173,
            "name": "BBL Trophy",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/173.png",
            "country": {
                "id": 50,
                "name": "United Kingdom",
                "code": "GB",
                "flag": "https://media.api-sports.io/flags/gb.svg"
            },
            "seasons": [
                {
                    "season": "2012-2013",
                    "start": "2012-12-28",
                    "end": "2013-03-09"
                },
                {
                    "season": "2020-2021",
                    "start": "2021-01-22",
                    "end": "2021-03-21"
                },
                {
                    "season": "2013-2014",
                    "start": "2014-01-16",
                    "end": "2014-03-30"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-12-21",
                    "end": "2019-03-10"
                },
                {
                    "season": "2023-2024",
                    "start": "2024-01-04",
                    "end": "2024-01-28"
                },
                {
                    "season": "2015-2016",
                    "start": "2016-01-07",
                    "end": "2016-02-27"
                },
                {
                    "season": "2014-2015",
                    "start": "2015-01-14",
                    "end": "2015-03-22"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-12-08",
                    "end": "2018-03-04"
                },
                {
                    "season": "2022-2023",
                    "start": "2023-01-07",
                    "end": "2023-03-26"
                },
                {
                    "season": "2021-2022",
                    "start": "2022-01-07",
                    "end": "2022-03-20"
                },
                {
                    "season": "2016-2017",
                    "start": "2017-01-06",
                    "end": "2017-03-19"
                }
            ]
        },
        {
            "id": 411,
            "name": "Betty Codona Trophy Women",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/411.png",
            "country": {
                "id": 50,
                "name": "United Kingdom",
                "code": "GB",
                "flag": "https://media.api-sports.io/flags/gb.svg"
            },
            "seasons": [
                {
                    "season": "2023-2024",
                    "start": "2024-01-06",
                    "end": "2024-01-28"
                }
            ]
        },
        {
            "id": 273,
            "name": "WBBL Cup Women",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/273.png",
            "country": {
                "id": 50,
                "name": "United Kingdom",
                "code": "GB",
                "flag": "https://media.api-sports.io/flags/gb.svg"
            },
            "seasons": [
                {
                    "season": "2020-2021",
                    "start": "2020-11-07",
                    "end": "2021-02-12"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-09-24",
                    "end": "2022-01-30"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-10-15",
                    "end": "2023-01-29"
                }
            ]
        },
        {
            "id": 109,
            "name": "WBBL W",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/109.png",
            "country": {
                "id": 50,
                "name": "United Kingdom",
                "code": "GB",
                "flag": "https://media.api-sports.io/flags/gb.svg"
            },
            "seasons": [
                {
                    "season": "2023-2024",
                    "start": "2023-10-21",
                    "end": "2024-04-28"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-10-08",
                    "end": "2017-05-14"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-12-12",
                    "end": "2021-05-16"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-09-30",
                    "end": "2018-05-20"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-09-29",
                    "end": "2019-05-19"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-10-02",
                    "end": "2022-05-15"
                },
                {
                    "season": "2019-2020",
                    "start": "2019-10-12",
                    "end": "2020-04-19"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-09-23",
                    "end": "2023-05-14"
                }
            ]
        },
        {
            "id": 110,
            "name": "Liga Uruguaya",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/110.png",
            "country": {
                "id": 63,
                "name": "Uruguay",
                "code": "UY",
                "flag": "https://media.api-sports.io/flags/uy.svg"
            },
            "seasons": [
                {
                    "season": "2012-2013",
                    "start": "2012-09-15",
                    "end": "2013-05-07"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-09-28",
                    "end": "2018-05-30"
                },
                {
                    "season": "2011-2012",
                    "start": "2011-01-14",
                    "end": "2012-04-26"
                },
                {
                    "season": "2013-2014",
                    "start": "2013-09-27",
                    "end": "2014-05-07"
                },
                {
                    "season": "2014-2015",
                    "start": "2014-09-26",
                    "end": "2015-04-29"
                },
                {
                    "season": "2015-2016",
                    "start": "2015-10-02",
                    "end": "2016-05-04"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-09-26",
                    "end": "2017-06-03"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-10-26",
                    "end": "2022-06-14"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-10-20",
                    "end": "2023-05-30"
                },
                {
                    "season": "2019-2020",
                    "start": "2019-10-09",
                    "end": "2021-02-27"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-10-25",
                    "end": "2024-04-23"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-10-06",
                    "end": "2019-05-24"
                },
                {
                    "season": "2020-2021",
                    "start": "2021-03-15",
                    "end": "2021-06-22"
                }
            ]
        },
        {
            "id": 178,
            "name": "BIG3",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/178.png",
            "country": {
                "id": 5,
                "name": "USA",
                "code": "US",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "seasons": [
                {
                    "season": 2023,
                    "start": "2023-06-25",
                    "end": "2023-08-26"
                },
                {
                    "season": 2022,
                    "start": "2022-06-18",
                    "end": "2022-08-21"
                },
                {
                    "season": 2019,
                    "start": "2019-06-23",
                    "end": "2019-09-01"
                },
                {
                    "season": 2021,
                    "start": "2021-07-10",
                    "end": "2021-09-04"
                },
                {
                    "season": 2018,
                    "start": "2018-06-22",
                    "end": "2018-08-25"
                }
            ]
        },
        {
            "id": 376,
            "name": "California Classic",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/376.png",
            "country": {
                "id": 5,
                "name": "USA",
                "code": "US",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "seasons": [
                {
                    "season": 2023,
                    "start": "2023-07-03",
                    "end": "2023-07-06"
                },
                {
                    "season": 2022,
                    "start": "2022-07-02",
                    "end": "2022-07-05"
                }
            ]
        },
        {
            "id": 15,
            "name": "CBI",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/15.png",
            "country": {
                "id": 5,
                "name": "USA",
                "code": "US",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "seasons": [
                {
                    "season": 2023,
                    "start": "2023-03-18",
                    "end": "2023-03-22"
                },
                {
                    "season": 2021,
                    "start": "2021-03-22",
                    "end": "2021-03-25"
                },
                {
                    "season": 2016,
                    "start": "2016-03-15",
                    "end": "2016-04-02"
                },
                {
                    "season": 2019,
                    "start": "2019-03-20",
                    "end": "2019-04-05"
                },
                {
                    "season": 2011,
                    "start": "2011-03-15",
                    "end": "2011-04-02"
                },
                {
                    "season": 2017,
                    "start": "2017-03-15",
                    "end": "2017-03-31"
                },
                {
                    "season": 2012,
                    "start": "2012-03-14",
                    "end": "2012-03-30"
                },
                {
                    "season": 2022,
                    "start": "2022-03-19",
                    "end": "2022-03-23"
                },
                {
                    "season": 2024,
                    "start": "2024-03-23",
                    "end": "2024-03-27"
                },
                {
                    "season": 2018,
                    "start": "2018-03-14",
                    "end": "2018-03-30"
                },
                {
                    "season": 2013,
                    "start": "2013-03-19",
                    "end": "2013-04-05"
                },
                {
                    "season": 2014,
                    "start": "2014-03-18",
                    "end": "2014-04-05"
                },
                {
                    "season": 2015,
                    "start": "2015-03-18",
                    "end": "2015-04-02"
                }
            ]
        },
        {
            "id": 16,
            "name": "CIT",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/16.png",
            "country": {
                "id": 5,
                "name": "USA",
                "code": "US",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "seasons": [
                {
                    "season": 2019,
                    "start": "2019-03-18",
                    "end": "2019-04-04"
                },
                {
                    "season": 2011,
                    "start": "2011-03-14",
                    "end": "2011-03-31"
                },
                {
                    "season": 2012,
                    "start": "2012-03-13",
                    "end": "2012-03-29"
                },
                {
                    "season": 2014,
                    "start": "2014-03-17",
                    "end": "2014-04-04"
                },
                {
                    "season": 2020,
                    "start": "2024-03-19",
                    "end": "2024-03-27"
                },
                {
                    "season": 2013,
                    "start": "2013-03-19",
                    "end": "2013-04-03"
                },
                {
                    "season": 2015,
                    "start": "2015-03-16",
                    "end": "2015-04-02"
                },
                {
                    "season": 2016,
                    "start": "2016-03-14",
                    "end": "2016-03-29"
                },
                {
                    "season": 2018,
                    "start": "2018-03-13",
                    "end": "2018-03-30"
                },
                {
                    "season": 2017,
                    "start": "2017-03-14",
                    "end": "2017-04-01"
                }
            ]
        },
        {
            "id": 175,
            "name": "IBL",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/175.png",
            "country": {
                "id": 5,
                "name": "USA",
                "code": "US",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "seasons": [
                {
                    "season": 2014,
                    "start": "2014-04-06",
                    "end": "2014-06-30"
                },
                {
                    "season": 2013,
                    "start": "2013-04-20",
                    "end": "2013-07-06"
                },
                {
                    "season": 2015,
                    "start": "2015-06-27",
                    "end": "2015-08-23"
                }
            ]
        },
        {
            "id": 12,
            "name": "NBA",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/12.png",
            "country": {
                "id": 5,
                "name": "USA",
                "code": "US",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "seasons": [
                {
                    "season": "2014-2015",
                    "start": "2014-10-04",
                    "end": "2015-06-17"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-10-03",
                    "end": "2022-06-17"
                },
                {
                    "season": "2013-2014",
                    "start": "2013-10-05",
                    "end": "2014-06-16"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-09-30",
                    "end": "2023-06-13"
                },
                {
                    "season": "2012-2013",
                    "start": "2012-10-07",
                    "end": "2013-06-21"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-12-12",
                    "end": "2021-07-21"
                },
                {
                    "season": "2011-2012",
                    "start": "2011-12-17",
                    "end": "2012-06-22"
                },
                {
                    "season": "2019-2020",
                    "start": "2019-10-04",
                    "end": "2020-10-11"
                },
                {
                    "season": "2010-2011",
                    "start": "2010-10-04",
                    "end": "2011-06-13"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-09-28",
                    "end": "2019-05-24"
                },
                {
                    "season": "2009-2010",
                    "start": "2009-10-09",
                    "end": "2010-06-18"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-10-01",
                    "end": "2018-06-09"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-10-05",
                    "end": "2024-04-14"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-10-01",
                    "end": "2017-06-13"
                },
                {
                    "season": "2008-2009",
                    "start": "2008-10-09",
                    "end": "2009-06-15"
                },
                {
                    "season": "2015-2016",
                    "start": "2015-10-03",
                    "end": "2016-06-20"
                }
            ]
        },
        {
            "id": 20,
            "name": "NBA - G League",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/20.png",
            "country": {
                "id": 5,
                "name": "USA",
                "code": "US",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "seasons": [
                {
                    "season": "2014-2015",
                    "start": "2014-11-15",
                    "end": "2015-04-26"
                },
                {
                    "season": "2016-2017",
                    "start": "2016-11-12",
                    "end": "2017-04-27"
                },
                {
                    "season": "2015-2016",
                    "start": "2015-11-13",
                    "end": "2016-04-28"
                },
                {
                    "season": "2013-2014",
                    "start": "2013-11-23",
                    "end": "2014-04-26"
                },
                {
                    "season": "2012-2013",
                    "start": "2012-11-24",
                    "end": "2013-04-28"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-12-27",
                    "end": "2022-04-18"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-11-11",
                    "end": "2024-04-12"
                },
                {
                    "season": "2017-2018",
                    "start": "2017-11-03",
                    "end": "2018-04-11"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-11-04",
                    "end": "2023-04-07"
                },
                {
                    "season": "2018-2019",
                    "start": "2018-11-02",
                    "end": "2019-04-13"
                },
                {
                    "season": "2020-2021",
                    "start": "2021-02-10",
                    "end": "2021-03-11"
                },
                {
                    "season": "2019-2020",
                    "start": "2019-11-09",
                    "end": "2020-03-29"
                }
            ]
        },
        {
            "id": 17,
            "name": "NBA - Las Vegas Summer League",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/17.png",
            "country": {
                "id": 5,
                "name": "USA",
                "code": "US",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "seasons": [
                {
                    "season": 2015,
                    "start": "2015-07-10",
                    "end": "2015-07-21"
                },
                {
                    "season": 2022,
                    "start": "2022-07-08",
                    "end": "2022-07-18"
                },
                {
                    "season": 2014,
                    "start": "2014-07-11",
                    "end": "2014-07-22"
                },
                {
                    "season": 2021,
                    "start": "2021-08-08",
                    "end": "2021-08-18"
                },
                {
                    "season": 2013,
                    "start": "2013-07-12",
                    "end": "2013-07-23"
                },
                {
                    "season": 2018,
                    "start": "2018-07-06",
                    "end": "2018-07-18"
                },
                {
                    "season": 2023,
                    "start": "2023-07-07",
                    "end": "2023-07-18"
                },
                {
                    "season": 2017,
                    "start": "2017-07-07",
                    "end": "2017-07-18"
                },
                {
                    "season": 2016,
                    "start": "2016-07-08",
                    "end": "2016-07-19"
                },
                {
                    "season": 2019,
                    "start": "2019-07-05",
                    "end": "2019-07-16"
                }
            ]
        },
        {
            "id": 21,
            "name": "NBA - Sacramento Summer League",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/21.png",
            "country": {
                "id": 5,
                "name": "USA",
                "code": "US",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "seasons": [
                {
                    "season": 2018,
                    "start": "2018-07-03",
                    "end": "2018-07-05"
                },
                {
                    "season": 2019,
                    "start": "2019-07-02",
                    "end": "2019-07-03"
                },
                {
                    "season": 2021,
                    "start": "2021-08-04",
                    "end": "2021-08-05"
                }
            ]
        },
        {
            "id": 19,
            "name": "NBA - Utah Summer League",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/19.png",
            "country": {
                "id": 5,
                "name": "USA",
                "code": "US",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "seasons": [
                {
                    "season": 2018,
                    "start": "2018-07-02",
                    "end": "2018-07-06"
                },
                {
                    "season": 2017,
                    "start": "2017-07-03",
                    "end": "2017-07-07"
                },
                {
                    "season": 2016,
                    "start": "2016-07-04",
                    "end": "2016-07-08"
                },
                {
                    "season": 2015,
                    "start": "2015-07-06",
                    "end": "2015-07-10"
                },
                {
                    "season": 2019,
                    "start": "2019-07-01",
                    "end": "2019-07-04"
                }
            ]
        },
        {
            "id": 404,
            "name": "NBA In-Season Tournament",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/404.png",
            "country": {
                "id": 5,
                "name": "USA",
                "code": "US",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "seasons": [
                {
                    "season": 2023,
                    "start": "2023-12-05",
                    "end": "2023-12-10"
                }
            ]
        },
        {
            "id": 176,
            "name": "NBA Orlando Summer League",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/176.png",
            "country": {
                "id": 5,
                "name": "USA",
                "code": "US",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "seasons": [
                {
                    "season": 2015,
                    "start": "2015-07-04",
                    "end": "2015-07-10"
                },
                {
                    "season": 2014,
                    "start": "2014-07-05",
                    "end": "2014-07-11"
                },
                {
                    "season": 2016,
                    "start": "2016-07-02",
                    "end": "2016-07-08"
                },
                {
                    "season": 2013,
                    "start": "2013-07-07",
                    "end": "2013-07-12"
                },
                {
                    "season": 2017,
                    "start": "2017-07-01",
                    "end": "2017-07-06"
                }
            ]
        },
        {
            "id": 274,
            "name": "NBA Salt Lake City Summer League",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/274.png",
            "country": {
                "id": 5,
                "name": "USA",
                "code": "US",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "seasons": [
                {
                    "season": 2023,
                    "start": "2023-07-03",
                    "end": "2023-07-07"
                },
                {
                    "season": 2021,
                    "start": "2021-08-03",
                    "end": "2021-08-07"
                },
                {
                    "season": 2022,
                    "start": "2022-07-05",
                    "end": "2022-07-08"
                }
            ]
        },
        {
            "id": 13,
            "name": "NBA W",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/13.png",
            "country": {
                "id": 5,
                "name": "USA",
                "code": "US",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "seasons": [
                {
                    "season": 2024,
                    "start": "2024-05-14",
                    "end": "2024-09-20"
                },
                {
                    "season": 2018,
                    "start": "2018-05-06",
                    "end": "2018-09-13"
                },
                {
                    "season": 2008,
                    "start": "2008-05-17",
                    "end": "2008-10-05"
                },
                {
                    "season": 2017,
                    "start": "2017-04-29",
                    "end": "2017-10-05"
                },
                {
                    "season": 2009,
                    "start": "2009-06-06",
                    "end": "2009-10-10"
                },
                {
                    "season": 2016,
                    "start": "2016-05-14",
                    "end": "2016-10-21"
                },
                {
                    "season": 2010,
                    "start": "2010-05-15",
                    "end": "2010-09-17"
                },
                {
                    "season": 2019,
                    "start": "2019-05-10",
                    "end": "2020-10-06"
                },
                {
                    "season": 2011,
                    "start": "2011-06-04",
                    "end": "2011-10-08"
                },
                {
                    "season": 2021,
                    "start": "2021-05-14",
                    "end": "2021-10-17"
                },
                {
                    "season": 2012,
                    "start": "2012-05-19",
                    "end": "2012-10-22"
                },
                {
                    "season": 2022,
                    "start": "2022-05-06",
                    "end": "2022-09-18"
                },
                {
                    "season": 2023,
                    "start": "2023-05-06",
                    "end": "2023-10-19"
                },
                {
                    "season": 2013,
                    "start": "2013-05-25",
                    "end": "2013-10-11"
                },
                {
                    "season": 2014,
                    "start": "2014-05-16",
                    "end": "2014-09-13"
                },
                {
                    "season": 2015,
                    "start": "2015-06-05",
                    "end": "2015-10-15"
                }
            ]
        },
        {
            "id": 116,
            "name": "NCAA",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/116.png",
            "country": {
                "id": 5,
                "name": "USA",
                "code": "US",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "seasons": [
                {
                    "season": "2021-2022",
                    "start": "2021-11-09",
                    "end": "2022-04-05"
                },
                {
                    "season": "2022-2023",
                    "start": "2022-11-07",
                    "end": "2023-04-04"
                },
                {
                    "season": "2019-2020",
                    "start": "2019-11-22",
                    "end": "2020-03-14"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-11-06",
                    "end": "2024-04-09"
                },
                {
                    "season": "2020-2021",
                    "start": "2020-11-25",
                    "end": "2021-04-06"
                }
            ]
        },
        {
            "id": 14,
            "name": "NIT",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/14.png",
            "country": {
                "id": 5,
                "name": "USA",
                "code": "US",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "seasons": [
                {
                    "season": 2024,
                    "start": "2024-03-19",
                    "end": "2024-04-04"
                },
                {
                    "season": 2019,
                    "start": "2019-03-19",
                    "end": "2019-04-04"
                },
                {
                    "season": 2023,
                    "start": "2023-03-14",
                    "end": "2023-03-31"
                },
                {
                    "season": 2021,
                    "start": "2021-03-17",
                    "end": "2021-03-28"
                },
                {
                    "season": 2018,
                    "start": "2018-03-13",
                    "end": "2018-03-29"
                },
                {
                    "season": 2022,
                    "start": "2022-03-15",
                    "end": "2022-03-31"
                },
                {
                    "season": 2017,
                    "start": "2017-03-14",
                    "end": "2017-03-31"
                },
                {
                    "season": 2016,
                    "start": "2016-03-15",
                    "end": "2016-03-31"
                },
                {
                    "season": 2015,
                    "start": "2015-03-17",
                    "end": "2015-04-03"
                },
                {
                    "season": 2014,
                    "start": "2014-03-18",
                    "end": "2014-04-03"
                },
                {
                    "season": 2013,
                    "start": "2013-03-19",
                    "end": "2013-04-05"
                },
                {
                    "season": 2012,
                    "start": "2012-03-13",
                    "end": "2012-03-29"
                },
                {
                    "season": 2011,
                    "start": "2011-03-15",
                    "end": "2011-03-31"
                }
            ]
        },
        {
            "id": 177,
            "name": "Vegas 16",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/177.png",
            "country": {
                "id": 5,
                "name": "USA",
                "code": "US",
                "flag": "https://media.api-sports.io/flags/us.svg"
            },
            "seasons": [
                {
                    "season": 2016,
                    "start": "2016-03-28",
                    "end": "2016-03-31"
                }
            ]
        },
        {
            "id": 191,
            "name": "LPB",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/191.png",
            "country": {
                "id": 61,
                "name": "Venezuela",
                "code": "VE",
                "flag": "https://media.api-sports.io/flags/ve.svg"
            },
            "seasons": [
                {
                    "season": 2018,
                    "start": "2018-05-11",
                    "end": "2018-08-11"
                },
                {
                    "season": 2019,
                    "start": "2019-05-09",
                    "end": "2019-07-06"
                },
                {
                    "season": 2017,
                    "start": "2017-02-24",
                    "end": "2017-07-05"
                }
            ]
        },
        {
            "id": 275,
            "name": "Superliga",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/275.png",
            "country": {
                "id": 61,
                "name": "Venezuela",
                "code": "VE",
                "flag": "https://media.api-sports.io/flags/ve.svg"
            },
            "seasons": [
                {
                    "season": 2023,
                    "start": "2023-03-18",
                    "end": "2023-07-06"
                },
                {
                    "season": 2022,
                    "start": "2022-07-08",
                    "end": "2022-10-27"
                },
                {
                    "season": 2021,
                    "start": "2021-04-01",
                    "end": "2021-06-04"
                }
            ]
        },
        {
            "id": 276,
            "name": "VBA",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/276.png",
            "country": {
                "id": 70,
                "name": "Vietnam",
                "code": "VN",
                "flag": "https://media.api-sports.io/flags/vn.svg"
            },
            "seasons": [
                {
                    "season": 2023,
                    "start": "2023-06-10",
                    "end": "2023-09-28"
                },
                {
                    "season": 2022,
                    "start": "2022-06-21",
                    "end": "2022-09-03"
                },
                {
                    "season": 2021,
                    "start": "2021-07-19",
                    "end": "2021-08-16"
                }
            ]
        },
        {
            "id": 289,
            "name": "Albert Schweitzer Tournament",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/289.png",
            "country": {
                "id": 62,
                "name": "World",
                "code": " ",
                "flag": "https://media.api-sports.io/flags/ .svg"
            },
            "seasons": [
                {
                    "season": 2016,
                    "start": "2016-03-26",
                    "end": "2016-04-02"
                },
                {
                    "season": 2014,
                    "start": "2014-04-19",
                    "end": "2014-04-26"
                },
                {
                    "season": 2018,
                    "start": "2018-03-31",
                    "end": "2018-04-07"
                }
            ]
        },
        {
            "id": 282,
            "name": "AmeriCup",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/282.png",
            "country": {
                "id": 62,
                "name": "World",
                "code": " ",
                "flag": "https://media.api-sports.io/flags/ .svg"
            },
            "seasons": [
                {
                    "season": 2011,
                    "start": "2011-08-30",
                    "end": "2011-09-12"
                },
                {
                    "season": 2013,
                    "start": "2013-08-30",
                    "end": "2013-09-12"
                },
                {
                    "season": 2015,
                    "start": "2015-08-31",
                    "end": "2015-09-13"
                },
                {
                    "season": 2023,
                    "start": "2023-02-22",
                    "end": "2025-02-24"
                },
                {
                    "season": 2017,
                    "start": "2017-08-25",
                    "end": "2017-09-04"
                },
                {
                    "season": 2022,
                    "start": "2020-02-20",
                    "end": "2022-09-11"
                }
            ]
        },
        {
            "id": 296,
            "name": "Americas Championship U16",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/296.png",
            "country": {
                "id": 62,
                "name": "World",
                "code": " ",
                "flag": "https://media.api-sports.io/flags/ .svg"
            },
            "seasons": [
                {
                    "season": 2023,
                    "start": "2023-06-05",
                    "end": "2023-06-12"
                },
                {
                    "season": 2019,
                    "start": "2019-06-03",
                    "end": "2019-06-09"
                },
                {
                    "season": 2017,
                    "start": "2017-06-14",
                    "end": "2017-06-19"
                },
                {
                    "season": 2021,
                    "start": "2021-08-23",
                    "end": "2021-08-30"
                }
            ]
        },
        {
            "id": 295,
            "name": "Americas Championship U16 Women",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/295.png",
            "country": {
                "id": 62,
                "name": "World",
                "code": " ",
                "flag": "https://media.api-sports.io/flags/ .svg"
            },
            "seasons": [
                {
                    "season": 2023,
                    "start": "2023-06-13",
                    "end": "2023-06-20"
                },
                {
                    "season": 2017,
                    "start": "2017-06-07",
                    "end": "2017-06-11"
                },
                {
                    "season": 2019,
                    "start": "2019-06-16",
                    "end": "2019-06-23"
                },
                {
                    "season": 2021,
                    "start": "2021-08-23",
                    "end": "2021-08-30"
                }
            ]
        },
        {
            "id": 377,
            "name": "Americas Championship U18",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/377.png",
            "country": {
                "id": 62,
                "name": "World",
                "code": " ",
                "flag": "https://media.api-sports.io/flags/ .svg"
            },
            "seasons": [
                {
                    "season": 2022,
                    "start": "2022-06-06",
                    "end": "2022-06-13"
                }
            ]
        },
        {
            "id": 378,
            "name": "Americas Championship U18 Women",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/378.png",
            "country": {
                "id": 62,
                "name": "World",
                "code": " ",
                "flag": "https://media.api-sports.io/flags/ .svg"
            },
            "seasons": [
                {
                    "season": 2022,
                    "start": "2022-06-13",
                    "end": "2022-06-19"
                }
            ]
        },
        {
            "id": 283,
            "name": "AmeriCup Women",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/283.png",
            "country": {
                "id": 62,
                "name": "World",
                "code": " ",
                "flag": "https://media.api-sports.io/flags/ .svg"
            },
            "seasons": [
                {
                    "season": 2011,
                    "start": "2011-09-24",
                    "end": "2011-10-02"
                },
                {
                    "season": 2013,
                    "start": "2013-09-21",
                    "end": "2013-09-29"
                },
                {
                    "season": 2015,
                    "start": "2015-08-09",
                    "end": "2015-08-17"
                },
                {
                    "season": 2023,
                    "start": "2023-07-01",
                    "end": "2023-07-10"
                },
                {
                    "season": 2019,
                    "start": "2019-09-22",
                    "end": "2019-09-30"
                },
                {
                    "season": 2017,
                    "start": "2017-08-06",
                    "end": "2017-08-14"
                },
                {
                    "season": 2021,
                    "start": "2021-06-11",
                    "end": "2021-06-20"
                }
            ]
        },
        {
            "id": 288,
            "name": "Americas League",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/288.png",
            "country": {
                "id": 62,
                "name": "World",
                "code": " ",
                "flag": "https://media.api-sports.io/flags/ .svg"
            },
            "seasons": [
                {
                    "season": 2019,
                    "start": "2019-01-18",
                    "end": "2019-04-01"
                },
                {
                    "season": 2018,
                    "start": "2018-01-20",
                    "end": "2018-03-26"
                },
                {
                    "season": 2017,
                    "start": "2017-01-21",
                    "end": "2017-03-18"
                },
                {
                    "season": 2016,
                    "start": "2016-01-15",
                    "end": "2016-03-13"
                },
                {
                    "season": 2015,
                    "start": "2015-01-16",
                    "end": "2015-03-15"
                }
            ]
        },
        {
            "id": 299,
            "name": "Champions League Americas",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/299.png",
            "country": {
                "id": 62,
                "name": "World",
                "code": " ",
                "flag": "https://media.api-sports.io/flags/ .svg"
            },
            "seasons": [
                {
                    "season": "2022-2023",
                    "start": "2022-12-09",
                    "end": "2023-04-15"
                },
                {
                    "season": "2020-2021",
                    "start": "2021-01-31",
                    "end": "2021-04-14"
                },
                {
                    "season": "2023-2024",
                    "start": "2023-12-13",
                    "end": "2024-04-14"
                },
                {
                    "season": "2021-2022",
                    "start": "2021-12-10",
                    "end": "2022-04-09"
                }
            ]
        },
        {
            "id": 297,
            "name": "Commonwealth Games",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/297.png",
            "country": {
                "id": 62,
                "name": "World",
                "code": " ",
                "flag": "https://media.api-sports.io/flags/ .svg"
            },
            "seasons": [
                {
                    "season": 2018,
                    "start": "2018-04-05",
                    "end": "2018-04-15"
                }
            ]
        },
        {
            "id": 298,
            "name": "Commonwealth Games Women",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/298.png",
            "country": {
                "id": 62,
                "name": "World",
                "code": " ",
                "flag": "https://media.api-sports.io/flags/ .svg"
            },
            "seasons": [
                {
                    "season": 2018,
                    "start": "2018-04-05",
                    "end": "2018-04-14"
                }
            ]
        },
        {
            "id": 205,
            "name": "Friendly International",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/205.png",
            "country": {
                "id": 62,
                "name": "World",
                "code": " ",
                "flag": "https://media.api-sports.io/flags/ .svg"
            },
            "seasons": [
                {
                    "season": 2023,
                    "start": "2023-06-27",
                    "end": "2023-08-22"
                },
                {
                    "season": 2021,
                    "start": "2021-06-12",
                    "end": "2021-08-05"
                },
                {
                    "season": 2024,
                    "start": "2024-02-15",
                    "end": "2024-02-20"
                },
                {
                    "season": 2022,
                    "start": "2022-06-16",
                    "end": "2022-08-20"
                },
                {
                    "season": 2020,
                    "start": "2020-02-10",
                    "end": "2020-07-30"
                },
                {
                    "season": 2018,
                    "start": "2018-06-12",
                    "end": "2018-09-09"
                }
            ]
        },
        {
            "id": 290,
            "name": "Friendly International Women",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/290.png",
            "country": {
                "id": 62,
                "name": "World",
                "code": " ",
                "flag": "https://media.api-sports.io/flags/ .svg"
            },
            "seasons": [
                {
                    "season": 2021,
                    "start": "2021-05-21",
                    "end": "2021-08-07"
                },
                {
                    "season": 2023,
                    "start": "2023-02-11",
                    "end": "2023-07-23"
                },
                {
                    "season": 2019,
                    "start": "2019-05-09",
                    "end": "2019-05-09"
                },
                {
                    "season": 2024,
                    "start": "2024-02-07",
                    "end": "2024-02-07"
                },
                {
                    "season": 2018,
                    "start": "2018-05-07",
                    "end": "2018-09-17"
                },
                {
                    "season": 2022,
                    "start": "2022-05-18",
                    "end": "2022-09-18"
                }
            ]
        },
        {
            "id": 280,
            "name": "Intercontinental Cup",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/280.png",
            "country": {
                "id": 62,
                "name": "World",
                "code": " ",
                "flag": "https://media.api-sports.io/flags/ .svg"
            },
            "seasons": [
                {
                    "season": 2024,
                    "start": "2023-09-21",
                    "end": "2023-09-24"
                },
                {
                    "season": 2019,
                    "start": "2019-02-15",
                    "end": "2019-02-17"
                },
                {
                    "season": 2013,
                    "start": "2013-10-04",
                    "end": "2013-10-06"
                },
                {
                    "season": 2021,
                    "start": "2021-02-06",
                    "end": "2021-02-06"
                },
                {
                    "season": 2023,
                    "start": "2023-02-10",
                    "end": "2023-02-12"
                },
                {
                    "season": 2022,
                    "start": "2022-02-11",
                    "end": "2022-02-13"
                },
                {
                    "season": 2014,
                    "start": "2014-09-27",
                    "end": "2014-09-28"
                },
                {
                    "season": 2016,
                    "start": "2016-09-18",
                    "end": "2016-09-18"
                },
                {
                    "season": 2017,
                    "start": "2017-09-24",
                    "end": "2017-09-24"
                },
                {
                    "season": 2015,
                    "start": "2015-09-26",
                    "end": "2015-09-27"
                }
            ]
        },
        {
            "id": 192,
            "name": "Olympic Games",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/192.png",
            "country": {
                "id": 62,
                "name": "World",
                "code": " ",
                "flag": "https://media.api-sports.io/flags/ .svg"
            },
            "seasons": [
                {
                    "season": 2020,
                    "start": "2021-06-29",
                    "end": "2021-08-07"
                },
                {
                    "season": 2024,
                    "start": "2023-08-12",
                    "end": "2024-08-03"
                },
                {
                    "season": 2012,
                    "start": "2012-07-02",
                    "end": "2012-08-12"
                },
                {
                    "season": 2016,
                    "start": "2016-07-04",
                    "end": "2016-08-21"
                }
            ]
        },
        {
            "id": 193,
            "name": "Olympic Games Women",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/193.png",
            "country": {
                "id": 62,
                "name": "World",
                "code": " ",
                "flag": "https://media.api-sports.io/flags/ .svg"
            },
            "seasons": [
                {
                    "season": 2020,
                    "start": "2020-02-06",
                    "end": "2021-08-08"
                },
                {
                    "season": 2012,
                    "start": "2012-06-25",
                    "end": "2012-08-11"
                },
                {
                    "season": 2016,
                    "start": "2016-06-13",
                    "end": "2016-08-20"
                },
                {
                    "season": 2024,
                    "start": "2023-11-09",
                    "end": "2024-08-04"
                }
            ]
        },
        {
            "id": 286,
            "name": "Pan American Games",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/286.png",
            "country": {
                "id": 62,
                "name": "World",
                "code": " ",
                "flag": "https://media.api-sports.io/flags/ .svg"
            },
            "seasons": [
                {
                    "season": 2015,
                    "start": "2015-07-21",
                    "end": "2015-07-25"
                },
                {
                    "season": 2011,
                    "start": "2011-10-26",
                    "end": "2011-10-30"
                },
                {
                    "season": 2019,
                    "start": "2019-07-31",
                    "end": "2019-08-05"
                },
                {
                    "season": 2023,
                    "start": "2023-10-31",
                    "end": "2023-11-04"
                }
            ]
        },
        {
            "id": 294,
            "name": "Pan American Games Women",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/294.png",
            "country": {
                "id": 62,
                "name": "World",
                "code": " ",
                "flag": "https://media.api-sports.io/flags/ .svg"
            },
            "seasons": [
                {
                    "season": 2019,
                    "start": "2019-08-06",
                    "end": "2019-08-11"
                },
                {
                    "season": 2023,
                    "start": "2023-10-25",
                    "end": "2023-10-29"
                },
                {
                    "season": 2015,
                    "start": "2015-07-16",
                    "end": "2015-07-21"
                }
            ]
        },
        {
            "id": 285,
            "name": "Stankovic Continental Cup",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/285.png",
            "country": {
                "id": 62,
                "name": "World",
                "code": " ",
                "flag": "https://media.api-sports.io/flags/ .svg"
            },
            "seasons": [
                {
                    "season": 2013,
                    "start": "2013-06-27",
                    "end": "2013-07-02"
                },
                {
                    "season": 2017,
                    "start": "2017-07-19",
                    "end": "2017-07-23"
                },
                {
                    "season": 2012,
                    "start": "2012-07-06",
                    "end": "2012-07-10"
                },
                {
                    "season": 2011,
                    "start": "2011-08-01",
                    "end": "2011-08-04"
                },
                {
                    "season": 2014,
                    "start": "2014-07-31",
                    "end": "2014-08-04"
                },
                {
                    "season": 2015,
                    "start": "2015-08-03",
                    "end": "2015-08-07"
                },
                {
                    "season": 2016,
                    "start": "2016-07-05",
                    "end": "2016-07-09"
                },
                {
                    "season": 2010,
                    "start": "2010-07-28",
                    "end": "2010-08-01"
                },
                {
                    "season": 2009,
                    "start": "2009-08-28",
                    "end": "2009-08-31"
                }
            ]
        },
        {
            "id": 291,
            "name": "Universiade",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/291.png",
            "country": {
                "id": 62,
                "name": "World",
                "code": " ",
                "flag": "https://media.api-sports.io/flags/ .svg"
            },
            "seasons": [
                {
                    "season": 2013,
                    "start": "2013-07-07",
                    "end": "2013-07-16"
                },
                {
                    "season": 2023,
                    "start": "2023-07-29",
                    "end": "2023-08-06"
                },
                {
                    "season": 2019,
                    "start": "2019-07-04",
                    "end": "2019-07-11"
                },
                {
                    "season": 2017,
                    "start": "2017-08-20",
                    "end": "2017-08-29"
                },
                {
                    "season": 2015,
                    "start": "2015-07-04",
                    "end": "2015-07-13"
                }
            ]
        },
        {
            "id": 292,
            "name": "Universiade Women",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/292.png",
            "country": {
                "id": 62,
                "name": "World",
                "code": " ",
                "flag": "https://media.api-sports.io/flags/ .svg"
            },
            "seasons": [
                {
                    "season": 2023,
                    "start": "2023-07-28",
                    "end": "2023-08-05"
                },
                {
                    "season": 2013,
                    "start": "2013-07-08",
                    "end": "2013-07-15"
                },
                {
                    "season": 2015,
                    "start": "2015-07-05",
                    "end": "2015-07-13"
                },
                {
                    "season": 2017,
                    "start": "2017-08-21",
                    "end": "2017-08-28"
                },
                {
                    "season": 2019,
                    "start": "2019-07-03",
                    "end": "2019-07-10"
                }
            ]
        },
        {
            "id": 421,
            "name": "WBLA Women",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/421.png",
            "country": {
                "id": 62,
                "name": "World",
                "code": " ",
                "flag": "https://media.api-sports.io/flags/ .svg"
            },
            "seasons": [
                {
                    "season": 2023,
                    "start": "2023-09-15",
                    "end": "2023-11-06"
                }
            ]
        },
        {
            "id": 287,
            "name": "World Championship U17",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/287.png",
            "country": {
                "id": 62,
                "name": "World",
                "code": " ",
                "flag": "https://media.api-sports.io/flags/ .svg"
            },
            "seasons": [
                {
                    "season": 2018,
                    "start": "2018-06-30",
                    "end": "2018-07-08"
                },
                {
                    "season": 2022,
                    "start": "2022-07-02",
                    "end": "2022-07-10"
                },
                {
                    "season": 2016,
                    "start": "2016-06-23",
                    "end": "2016-07-03"
                },
                {
                    "season": 2012,
                    "start": "2012-06-29",
                    "end": "2012-07-08"
                },
                {
                    "season": 2014,
                    "start": "2014-08-08",
                    "end": "2014-08-16"
                }
            ]
        },
        {
            "id": 293,
            "name": "World Championship U17 Women",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/293.png",
            "country": {
                "id": 62,
                "name": "World",
                "code": " ",
                "flag": "https://media.api-sports.io/flags/ .svg"
            },
            "seasons": [
                {
                    "season": 2022,
                    "start": "2022-07-09",
                    "end": "2022-07-17"
                },
                {
                    "season": 2018,
                    "start": "2018-07-21",
                    "end": "2018-07-29"
                },
                {
                    "season": 2016,
                    "start": "2016-06-22",
                    "end": "2016-07-02"
                },
                {
                    "season": 2014,
                    "start": "2014-06-28",
                    "end": "2014-07-06"
                }
            ]
        },
        {
            "id": 278,
            "name": "World Championship U19",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/278.png",
            "country": {
                "id": 62,
                "name": "World",
                "code": " ",
                "flag": "https://media.api-sports.io/flags/ .svg"
            },
            "seasons": [
                {
                    "season": 2013,
                    "start": "2013-06-27",
                    "end": "2013-07-07"
                },
                {
                    "season": 2021,
                    "start": "2021-07-03",
                    "end": "2021-07-11"
                },
                {
                    "season": 2011,
                    "start": "2011-06-30",
                    "end": "2011-07-10"
                },
                {
                    "season": 2017,
                    "start": "2017-07-01",
                    "end": "2017-07-09"
                },
                {
                    "season": 2009,
                    "start": "2009-07-01",
                    "end": "2009-07-12"
                },
                {
                    "season": 2023,
                    "start": "2023-06-24",
                    "end": "2023-07-02"
                },
                {
                    "season": 2015,
                    "start": "2015-06-27",
                    "end": "2015-07-05"
                }
            ]
        },
        {
            "id": 279,
            "name": "World Championship U19 Women",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/279.png",
            "country": {
                "id": 62,
                "name": "World",
                "code": " ",
                "flag": "https://media.api-sports.io/flags/ .svg"
            },
            "seasons": [
                {
                    "season": 2021,
                    "start": "2021-08-07",
                    "end": "2021-08-15"
                },
                {
                    "season": 2013,
                    "start": "2013-07-18",
                    "end": "2013-07-28"
                },
                {
                    "season": 2019,
                    "start": "2019-07-20",
                    "end": "2019-07-23"
                },
                {
                    "season": 2015,
                    "start": "2015-07-18",
                    "end": "2015-07-26"
                },
                {
                    "season": 2017,
                    "start": "2017-07-22",
                    "end": "2017-07-30"
                },
                {
                    "season": 2023,
                    "start": "2023-07-15",
                    "end": "2023-07-23"
                }
            ]
        },
        {
            "id": 277,
            "name": "World Championship Women",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/277.png",
            "country": {
                "id": 62,
                "name": "World",
                "code": " ",
                "flag": "https://media.api-sports.io/flags/ .svg"
            },
            "seasons": [
                {
                    "season": 2018,
                    "start": "2018-09-22",
                    "end": "2018-09-30"
                },
                {
                    "season": 2010,
                    "start": "2010-09-23",
                    "end": "2010-10-03"
                },
                {
                    "season": 2014,
                    "start": "2014-09-27",
                    "end": "2014-10-05"
                }
            ]
        },
        {
            "id": 281,
            "name": "World Cup",
            "type": "cup",
            "logo": "https://media.api-sports.io/basketball/leagues/281.png",
            "country": {
                "id": 62,
                "name": "World",
                "code": " ",
                "flag": "https://media.api-sports.io/flags/ .svg"
            },
            "seasons": [
                {
                    "season": 2019,
                    "start": "2017-08-02",
                    "end": "2019-09-15"
                },
                {
                    "season": 2014,
                    "start": "2014-08-30",
                    "end": "2014-09-14"
                },
                {
                    "season": 2023,
                    "start": "2020-02-20",
                    "end": "2023-09-10"
                },
                {
                    "season": 2010,
                    "start": "2010-08-28",
                    "end": "2010-09-12"
                }
            ]
        },
        {
            "id": 284,
            "name": "World Cup Women",
            "type": "League",
            "logo": "https://media.api-sports.io/basketball/leagues/284.png",
            "country": {
                "id": 62,
                "name": "World",
                "code": " ",
                "flag": "https://media.api-sports.io/flags/ .svg"
            },
            "seasons": [
                {
                    "season": 2022,
                    "start": "2022-09-22",
                    "end": "2022-09-27"
                }
            ]
        }
    ];

    return (
        <LeaguesContext.Provider value={{ leagues }}>
            {children}
        </LeaguesContext.Provider>
    );
};