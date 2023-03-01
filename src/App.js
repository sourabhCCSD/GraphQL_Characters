import './App.css';
import CharactersList from './pages/CharactersList';
import { Route, Routes } from 'react-router-dom';
import ParticularCharacter from './pages/ParticularCharacter';
import Search from './pages/Search';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<CharactersList />} />
        <Route exact path='/search' element={<Search /> } />
        <Route  path='/:id' element={<ParticularCharacter />} />
              </Routes>

    </div>
  );
}

export default App;
