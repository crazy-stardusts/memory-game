import { useSearchParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from 'react';
import { startGame, makeMove } from '../apis/game.js';
import GameCard from "./GameCard";
import GameSummary from "./GameSummary.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

const gridSize = 6;

function Game() {

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const timeOutRef = useRef(null);

  const [loading, setLoading] = useState(true);
  const [board, setBoard] = useState([]);
  const [isMatched, setIsMatched] = useState({});
  const [isRevealed, setIsRevealed] = useState({});
  const [gameData, setGameData] = useState(null);
  const [score, setScore] = useState(0);
  const [theme, setTheme] = useState(null);
  const [showSummary, setShowSummary] = useState(false);



  useEffect(() => {

    const getGameCards = async (themeId) => {
        try {
            const data = await startGame(themeId);
            console.log("Game started with theme:", data);
            setTheme(data.Theme);
            setGameData(data);
            setBoard(Array(gridSize).fill(null).map(() => Array(gridSize).fill(null)));
        }
        catch (error) {
            console.error("Error starting game:", error);
            navigate('/');
        }
    }

    const themeFromURL = searchParams.get('themeId');
    console.log("Theme from URL:", themeFromURL);
    if (themeFromURL) {
      getGameCards(themeFromURL);
      setLoading(false);
    } else {
      console.error("No themeId found in URL");
      navigate('/');
    }
  }, [searchParams, navigate]);


    const isFlipped = (i, j) => {
        return isMatched[`${i}-${j}`] || isRevealed[`${i}-${j}`];
    }

    const handleMove = async (i, j) => {

        console.log("Handling move for position:", i, j);

        if(isFlipped(i, j)) {
          console.log("Move ignored due to already flipped card.");
          return;
        }
        console.log("Making move at position:", i, j);
        try {
          const data = await makeMove(gameData.id, i, j);
          console.log("Move result:", data);


          const updatedBoard = [...board];
          updatedBoard[i][j] = data?.gameCard?.Card;
          setBoard(updatedBoard);


          if(Object.keys(isRevealed).length >= 2) {
            setIsRevealed({});
            clearTimeout(timeOutRef.current);
          }


          setIsRevealed(prev => ({ ...prev, [`${i}-${j}`]: true }));


          if(data.isMatched === true) {
            setIsMatched(prev => ({ ...prev, [`${i}-${j}`]: true }));
            Object.keys(isRevealed).forEach(key => {
              if (isRevealed[key]) {
                setIsMatched(prev => ({ ...prev, [key]: true }));
              }
            });
            setIsRevealed({});
          } else if( data.isMatched === false) {
            timeOutRef.current = setTimeout(() => setIsRevealed({}), 2000);
          }

          setScore(data.score);

          if(data.completed) {
            setShowSummary(true);
          }


        } catch (error) {
            console.error("Error making move:", error);
        }

    }

    if( loading ) {
        return <div>Loading...</div>;
    }
    return (
      <div>
        <Header color={theme?.color}/>

        <div className="mt-14 mb-4">
          <div className="grid grid-cols-4 sm:grid-cols-6 gap-x-1 gap-y-4 sm:gap-x-2 sm:gap-y-2 w-72 sm:w-10/12 max-w-3xl mx-auto">
              {board.flatMap((row, i) =>
                  row.map((_, j) => (
                  <GameCard key={`${i}-${j}`} card={board[i][j]} isFlipped={isFlipped(i, j)} onClick={() => handleMove(i, j)} color={theme?.color} iconUrl={theme?.icon_url} themeName={theme?.name}/>
                ))
              )}
          </div>
        </div>

        <Footer score={score} />
        { showSummary && <GameSummary onClose={() => setShowSummary(false)} gameId={gameData?.id} color={theme?.color}/>}
      </div>
    )
}

export default Game;