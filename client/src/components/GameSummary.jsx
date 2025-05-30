import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getGameSummary } from "../apis/game.js";

function GameSummary() {

    const [searchParams] = useSearchParams();
    const [score, setScore] = useState(0);
    const [completed, setCompleted] = useState(false);
    const [moveCount, setMoveCount] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const gameId = searchParams.get("gameId");
        if (!gameId) {
            console.error("No gameId found in URL");
        }
        const fetchGameSummary = async () => {
            try {
                const data = await getGameSummary(gameId);
                setScore(data.score);
                setCompleted(data.completed);
                setMoveCount(data.moveCount);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching game summary:", error);
            }
        };

        fetchGameSummary();
    }, [searchParams]);
    
    if(loading) {
        return <div>Loading...</div>;
    }

  return (
    <div className="game-summary">
      <h2>Game Summary</h2>
        <p><strong>Score:</strong> {score}</p>
        <p><strong>Completed:</strong> {completed ? "Yes" : "No"}</p>
        <p><strong>Move Count:</strong> {moveCount}</p>
    </div>
  );
}

export default GameSummary;