import './App.css';
import { Routes, Route} from "react-router-dom";
import Search from './app_component/search.component';
import { Navbar } from './app_component/Navbar.component';
import { RealWeather } from './app_component/realweather.component';
import Dashboard from './app_component/Dashboard.component';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Search/>} />
        <Route path="/realWeather" element={<RealWeather/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </>
  );
}

export default App;
