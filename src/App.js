import { Route, Routes } from 'react-router-dom';
import './App.css';
import Menu from './components/Menu';
import MainHOC from './containers/MainHOC';

function App(props) {
  return (
    <div className="App">
      <Routes >
        <Route path='/' element={<Menu />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/main' element={<MainHOC matrix={props.matrix} values={props.values} errors={props.errors} dispatch={props.dispatch} />} />
      </Routes>
    </div>
  );
}

export default App;
