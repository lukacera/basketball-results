import { CountryType } from "./CountryType"
import { SeasonType } from "./SeasonType"
export type LeagueType = {
    id: number,
    name: string,
    type: string, // Cup, league...
    logo: string,
    country?: CountryType,
    seasons?: SeasonType[],
    season?: string | number
}