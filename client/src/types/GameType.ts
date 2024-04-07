import { GameStatus } from "./GameStatusType"
import { LeagueType } from "./LeagueType"
import { CountryType } from "./CountryType"
import { TeamType } from "./TeamType"
import { ScoreType } from "./ScoreType"

export type GameType = {
    id: number,
    date: string, // Date is in ISOString format
    time: string, // hh:mm
    timestamp: number,
    timezone: string,
    stage: string,
    week: string, // Round of league
    status: GameStatus,
    league: LeagueType,
    country: CountryType,
    teams: {
        home: TeamType,
        away: TeamType
    },
    scores: {
        home: ScoreType,
        away: ScoreType
    }
}
