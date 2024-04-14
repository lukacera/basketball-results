import React from "react";
import { GameType } from "../types/GameType";
import { getScoreClassName } from "../utils/getScoreClassName";

const SelectedGameSingleTeamScores: React.FC<{
  selectedGame: GameType,
  team: "home" | "away"
}> = ({ selectedGame, team }) => {
  const teamName = team === "home" ? selectedGame.scores.home : selectedGame.scores.away;

  return (
    <div className={`grid ${selectedGame.status.short === "AOT" ? "grid-cols-5" : "grid-cols-4"}`}>
      <span className={`text-center py-2 
      ${getScoreClassName(selectedGame.status.short, selectedGame.scores.home.quarter_1, selectedGame.scores.away.quarter_1, team, "Q1")}`}>
        {teamName.quarter_1}
      </span>
      <span className={`text-center py-2 
      ${getScoreClassName(selectedGame.status.short, selectedGame.scores.home.quarter_2, selectedGame.scores.away.quarter_2, team, "Q2")}`}>
        {teamName.quarter_2}
      </span>
      <span className={`text-center py-2 
      ${getScoreClassName(selectedGame.status.short, selectedGame.scores.home.quarter_3, selectedGame.scores.away.quarter_3, team, "Q3")}`}>
        {teamName.quarter_3}
      </span>
      <span className={`text-center py-2 
      ${getScoreClassName(selectedGame.status.short, selectedGame.scores.home.quarter_4, selectedGame.scores.away.quarter_4, team, "Q4")}`}>
        {teamName.quarter_4}
      </span>
      {selectedGame.status.short === "AOT" && (
        <span className={`text-center py-2 
        ${getScoreClassName(selectedGame.status.short, selectedGame.scores.home.over_time, selectedGame.scores.away.over_time, team, "OT")}`}>
          {teamName.over_time}
        </span>
      )}
    </div>
  );
};

export default SelectedGameSingleTeamScores;
