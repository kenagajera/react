import './App.css';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from './pages/Home';
import Nev from './subpages/Nev';
import Name from './pages/Name';
import Timer from './pages/Timer';
import Color from './pages/Color';
import Habit from './pages/Habit';
import Footer from './subpages/Footer';

function App() {
  return (
    // <></>

    <BrowserRouter>
    <Nev/>
    <Name/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/timer" element={<Timer />} />
        <Route path="/color" element={<Color />} />
        <Route path="/habit" element={<Habit />} />
      </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
