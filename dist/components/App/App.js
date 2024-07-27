"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const ScrollToTop_1 = __importDefault(require("../ScrollToTop/ScrollToTop"));
const Home_1 = __importDefault(require("../Home/Home"));
const Rooms_1 = __importDefault(require("../Rooms/Rooms"));
const Etiquette_1 = __importDefault(require("../Etiquette/Etiquette"));
const Footer_1 = __importDefault(require("../Footer/Footer"));
function App() {
    return (react_1.default.createElement("div", { className: "App" },
        react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
            react_1.default.createElement(ScrollToTop_1.default, null,
                react_1.default.createElement(react_router_dom_1.Routes, null,
                    react_1.default.createElement(react_router_dom_1.Route, { path: "/", element: react_1.default.createElement(Home_1.default, null) }),
                    react_1.default.createElement(react_router_dom_1.Route, { path: "/rooms", element: react_1.default.createElement(Rooms_1.default, null) }),
                    react_1.default.createElement(react_router_dom_1.Route, { path: "/etiquette", element: react_1.default.createElement(Etiquette_1.default, null) })))),
        react_1.default.createElement(Footer_1.default, null)));
}
exports.default = App;
