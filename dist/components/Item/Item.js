"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./Item.css");
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
const Item = ({ title, description, backgroundImg, backgroundColor, photoLeft, first, }) => {
    return (react_1.default.createElement("div", { className: "Item", style: { backgroundColor: backgroundColor } },
        react_1.default.createElement("div", { className: "ItemContainer", style: { backgroundColor: backgroundColor } },
            react_1.default.createElement("div", { className: `ItemDetails${photoLeft ? "Left" : ""}` },
                react_1.default.createElement("p", { className: "ItemTitle", style: { backgroundColor: backgroundColor } }, title),
                react_1.default.createElement("p", { className: "ItemDescription", style: { backgroundColor: backgroundColor } }, description)),
            react_1.default.createElement("div", { className: `ItemPhoto${photoLeft ? "Left" : ""}`, style: { backgroundColor: backgroundColor } },
                react_1.default.createElement("img", { src: backgroundImg, alt: "" }))),
        first === true && (react_1.default.createElement("div", { className: "FirstItem" },
            react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faAngleDown, color: "#393c41", size: "lg", className: "AngleDownIcon" })))));
};
exports.default = Item;
