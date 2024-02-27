import GameBoard from './components/Game/GameBoard';
import Header from './components/Header/Header';

import './App.scss';

function App() {
  return (
    <div className="App flex">
      
      <Header />
      <GameBoard />
      
    </div>
  );
}

export default App;
