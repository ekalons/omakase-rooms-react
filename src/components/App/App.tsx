import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import Home from "../Home/Home";
import Rooms from "../Rooms/Rooms";
import Etiquette from "../Etiquette/Etiquette";
import Footer from "../Footer/Footer";
import "mapbox-gl/dist/mapbox-gl.css";
import { RoomsProvider } from "../../providers/RoomsProvider";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/rooms"
              element={
                <RoomsProvider>
                  <Rooms />
                </RoomsProvider>
              }
            />
            <Route path="/etiquette" element={<Etiquette />} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
