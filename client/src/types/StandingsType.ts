import { CountryType } from "./CountryType"
import { LeagueType } from "./LeagueType"
import { TeamType } from "./TeamType"

export type StandingsType = {
    position: number,
    stage: string,
    group: {
        name: string,
        points: number
    },
    team: TeamType,
    league: LeagueType,
    country: CountryType,
    games: {
        played: number,
        win: {
            total: number,
            percentage: string
        },
        lose: {
            total: number,
            percentage: string
        }
    },
    points: {
        for: number,
        against: number
    },
    form: string | null,
    description: string | null
}