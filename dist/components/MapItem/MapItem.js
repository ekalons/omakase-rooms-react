"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./MapItem.css");
const react_router_dom_1 = require("react-router-dom");
const MapItem = ({ backgroundColor }) => {
    let navigate = (0, react_router_dom_1.useNavigate)();
    const goToRooms = () => {
        navigate("/rooms");
    };
    return (react_1.default.createElement("div", { className: "Item", style: { backgroundColor: backgroundColor } },
        react_1.default.createElement("div", { className: "ItemContainer", style: { backgroundColor: backgroundColor } },
            react_1.default.createElement("div", { className: "MapPhotoContainer", onClick: goToRooms },
                react_1.default.createElement("img", { src: require("../../assets/navigationMap.png"), alt: "Navigation map" })))));
};
exports.default = MapItem;
