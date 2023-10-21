import './App.css';
import NavBarContainer from './components/navContainer/navbar';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<NavBarContainer />}>
        <Route path='shop'  />
        <Route path='auth' />
      </Route>
    </Routes>
    </div>
  );
}

export default App;
