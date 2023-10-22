import './App.css';
import Homepage from './routes/home/home';
import NavBarContainer from "./components/navContainer/navbar"
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<NavBarContainer/>}>
          <Route index element={<Homepage/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
