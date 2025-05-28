import { useSearchParams, useNavigate } from "react-router-dom";
import { useState, useEffect, use } from 'react';
import { startGame } from '../apis/game';
import GameCard from "./GameCard";


function Game() {
  const gridSize = 6;
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [board, setBoard] = useState([]);
  const [isMatched, setIsMatched] = useState({});
  const [isReveled, setIsRevealed] = useState({});
  const [lock, setLock] = useState(true);
//   const [gameData, setGameData] = useState(null);

  useEffect(() => {

    const getGameCards = async (themeId) => {
        try {
            const data = await startGame(themeId);
            console.log("Game started with theme:", data);
            // setGameData(data);
            setBoard(Array(gridSize).fill(null).map(() => Array(gridSize).fill(null)));
            setLock(false);
        }
        catch (error) {
            console.error("Error starting game:", error);
            navigate('/');
        }
    }

    const themeFromURL = searchParams.get('themeId');
    console.log("Theme from URL:", themeFromURL);
    if (themeFromURL) {
      navigate('/game', { replace: true });
      getGameCards(themeFromURL);
      setLoading(false);
    }
  }, [searchParams, navigate]);


    const isFlipped = (i, j) => {
        return isMatched[`${i}-${j}`] || isReveled[`${i}-${j}`];
    }

    const handleMove = (i, j) => {
        if(lock || isFlipped(i, j)) {
            return;
        }
        
    }

    if( loading ) {
        return <div>Loading...</div>;
    }
    return (
        <div className="grid grid-cols-6 gap-2 max-w-xl mx-auto">
            {board.flatMap((row, i) =>
                row.map((_, j) => (
                <GameCard key={`${i}-${j}`} card={board[i][j]} isFlipped={isFlipped(i, j)} onClick={() => handleMove(i, j)}
          />
        ))
      )}
        </div>
    )
}

export default Game;