"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
require("./Header.css");
const NavBar_1 = require("../NavBar/NavBar");
const Header = () => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    return (react_1.default.createElement("div", { className: "Header" },
        react_1.default.createElement("div", { className: "HeaderLogo", onClick: () => navigate("/") },
            react_1.default.createElement("h1", null, "\u304A\u4EFB\u305B")),
        react_1.default.createElement(NavBar_1.NavBar, null)));
};
exports.default = Header;
