import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Theme from './components/Theme';
import Game from './components/Game';
import GameSummary from './components/GameSummary';
import MemoryGame from './components/MemoryGame';

function App() {
  return (
    <Router>
      <MemoryGame />
      <main className="mt-8 container mx-auto px-4">
        <Routes>
          <Route  path="/" element={<Theme />} />
          <Route path="/game" element={<Game />} /> 
          <Route path="/summary" element={<GameSummary />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
