import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Theme from './components/Theme';
import Game from './components/Game';

function App() {
  return (
    <Router>
      <Routes>
        <Route  path="/" element={<Theme />} />
        <Route path="/game" element={<Game />} /> 
      </Routes>
    </Router>
  );
}

export default App;
