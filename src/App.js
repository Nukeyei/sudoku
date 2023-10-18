import { Route, Routes } from 'react-router-dom';
import './App.css';
import Menu from './components/Menu';
import MainHOC from './containers/MainHOC';
import Win from './components/Win';
import GameOver from './components/GameOver';

function App() {
  return (
    <div className="App">
      <Routes >
        <Route path='/' element={<Menu />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/win' element={<Win />} />
        <Route path='/gameover' element={<GameOver />} />
        <Route path='/main' element={<MainHOC />} />
      </Routes>
    </div>
  );
}

export default App;
