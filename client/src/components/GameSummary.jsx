import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getGameSummary } from "../apis/game.js"; // Adjust the import path as necessary
import FireworkButton from "./FireworkButton.jsx"; // Adjust the import path as necessary

function GameSummary({ onClose, gameId, color }) {
  const [score, setScore] = useState(0);
  const [moveCount, setMoveCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const colorClass = color ? `text-[${color}]` : "text-black";

  useEffect(() => {
    const fetchGameSummary = async () => {
      try {
        const data = await getGameSummary(gameId);
        setScore(data.score);
        setMoveCount(data.moveCount);
      } catch (error) {
        console.error("Error fetching game summary:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGameSummary();
  }, [gameId]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 font-playpen">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md relative text-center space-y-4">
        {/* Close Button */}
        <button
          className="absolute top-2 right-3 text-gray-600 hover:text-black text-xl font-bold"
          onClick={onClose}
        >
          &times;
        </button>

        {/* Content */}
        {loading ? (
          <p className="text-lg font-semibold">Loading...</p>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-[#9EA4FF]">Game Summary</h2>
            <p className={colorClass}><strong>Score:</strong> {score}</p>
            <p className={colorClass}><strong>Move Count:</strong> {moveCount}</p>

            {/* Beautiful Button */}
            <div className="flex justify-center">
                <FireworkButton onClick={() => navigate("/")}/>
            </div>

          </>
        )}
      </div>
    </div>
  );
}

export default GameSummary;
