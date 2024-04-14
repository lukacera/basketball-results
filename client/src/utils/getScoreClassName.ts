import { checkWinner } from "./checkWinner";

export const getScoreClassName = (
    gameStatusShort: string,
    homeScore: number | null,
    awayScore: number | null,
    team: "home" | "away",
    currentQShort: "" | "Q1" | "Q2" | "Q3" | "Q4" | "OT" | "HT" | "BT"
) => {
    if (gameStatusShort === currentQShort) {
        return "text-red-600"; // If quarter is in play, apply red color
    }

    // If currentQShort is empty string, it means that we are checking
    // total score 
    else if (currentQShort === "" &&
        !["FT", "AOT", "POST", "CANC", "SUSP", "AWD", "ABD"].includes(gameStatusShort)) {
        return "text-red-600"
    }
    else {
        if (team === "home") {
            return checkWinner(homeScore, awayScore) === "home" ?
                "font-bold" : "text-teamLostGray";
        }
        else if (team === "away") {
            return checkWinner(homeScore, awayScore) === "away" ?
                "font-bold" : "text-teamLostGray";
        }

    }
};