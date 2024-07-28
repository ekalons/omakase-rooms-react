import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import Home from "../Home/Home";
import Rooms from "../Rooms/Rooms";
import Etiquette from "../Etiquette/Etiquette";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/etiquette" element={<Etiquette />} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
