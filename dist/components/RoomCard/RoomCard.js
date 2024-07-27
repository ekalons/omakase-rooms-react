"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./RoomCard.css");
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
const MichelinStar_1 = require("../MichelinStar/MichelinStar");
const RoomCard = ({ name, details, rating, review_count, neighborhood, price, michelin_stars, serve_style, coordinates, photo, isClicked, allRooms, updateParent, }) => {
    const handleUpdate = () => {
        const objArr = allRooms;
        objArr.forEach((room) => (room.isClicked = false));
        const obj = objArr.find((obj) => obj.name === name);
        if (obj.isClicked === true) {
            obj.isClicked = false;
        }
        else {
            obj.isClicked = true;
        }
        updateParent(obj);
    };
    return (react_1.default.createElement("div", { className: "RoomCard", onClick: handleUpdate },
        react_1.default.createElement("div", { className: "CardImageContainer" },
            react_1.default.createElement("img", { src: photo, alt: "Restaurant", width: "240px", height: "160px" })),
        react_1.default.createElement("div", { className: "InfoContainer" },
            react_1.default.createElement("p", { className: "RoomName" }, name),
            react_1.default.createElement("div", { className: "InfoRow" },
                react_1.default.createElement("div", { className: "IconContainer" },
                    react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faStar, color: "red", size: "sm", className: "Star" })),
                react_1.default.createElement("p", { className: "RoomRating" }, rating),
                react_1.default.createElement("p", { className: "RoomReviewCount" },
                    "(",
                    review_count,
                    ")"),
                react_1.default.createElement("p", { className: "RoomServeStyle" }, serve_style),
                react_1.default.createElement("p", { className: "RoomPrice" }, price >= 250 ? "$$$$" : price < 250 && price >= 125 ? "$$$" : "$$"),
                michelin_stars >= 1 && (react_1.default.createElement("div", { className: "MichelinStarContainer" },
                    react_1.default.createElement(MichelinStar_1.MichelinStarIcon, null),
                    michelin_stars >= 2 && react_1.default.createElement(MichelinStar_1.MichelinStarIcon, null),
                    michelin_stars === 3 && react_1.default.createElement(MichelinStar_1.MichelinStarIcon, null)))),
            react_1.default.createElement("div", { className: "InfoRow" },
                react_1.default.createElement("div", { className: "IconContainer" },
                    react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faMapMarkerAlt, size: "sm", className: "LocationMarker" })),
                react_1.default.createElement("p", { className: "RoomNeighborhood" }, neighborhood)),
            react_1.default.createElement("div", { className: "InfoRow RoomDetailsContainer" },
                react_1.default.createElement("span", null, details)))));
};
exports.default = RoomCard;
