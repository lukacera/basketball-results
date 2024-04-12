export const checkWinner = (homeScore: number | null, awayScore: number | null): "home" | "away" | "tie" | null => {
    if (homeScore !== null && awayScore !== null) {
        if (homeScore > awayScore) return "home"
        else if (awayScore > homeScore) return "away"

        return "tie"
    }
    return null
}
