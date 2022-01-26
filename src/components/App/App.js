// General
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Style
import './App.css';

// Pages
import Home from '../Home/Home';
import Rooms from '../Rooms/Rooms';
import Etiquette from '../Etiquette/Etiquette';


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/rooms" element={<Rooms />} />
                    <Route path="/etiquette" element={<Etiquette />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App

