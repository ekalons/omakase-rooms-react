"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_map_gl_1 = __importStar(require("react-map-gl"));
require("./Mapview.css");
// Mapbox-gl transpilation fix
// import mapboxgl from "!mapbox-gl";
/* eslint import/no-webpack-loader-syntax: off */
// import 'mapbox-gl/dist/mapbox-gl.css';
// // eslint-disable-next-line import/no-webpack-loader-syntax
// mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;
// import MichelinStar from "../../assets/MichelinStar.svg";
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
const MichelinStar_1 = require("../MichelinStar/MichelinStar");
const MapView = ({ searchResults, clickedElement }) => {
    const [selectedLocation, setSelectedLocation] = (0, react_1.useState)(clickedElement);
    const [viewport, setViewport] = (0, react_1.useState)({
        latitude: 40.736,
        longitude: -73.99,
        zoom: 12.2,
        width: "50vw",
        height: window.innerHeight - 60,
    });
    (0, react_1.useEffect)(() => {
        const listener = (e) => {
            if (e.key === "Escape") {
                setSelectedLocation(null);
            }
        };
        window.addEventListener("keydown", listener);
        return () => {
            window.removeEventListener("keydown", listener);
        };
    }, []);
    const toggleIsClicked = (obj) => {
        if (obj.isClicked === true) {
            obj.isClicked = false;
        }
        else {
            obj.isClicked = true;
        }
    };
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(react_map_gl_1.default, Object.assign({ mapboxApiAccessToken: process.env.REACT_APP_MAPBOX_ACCESS_TOKEN, mapStyle: process.env.REACT_APP_MAPBOX_STYLES_TOKEN }, viewport, { onViewportChange: (newView) => setViewport(newView) }), searchResults === null || searchResults === void 0 ? void 0 : searchResults.map((result) => (react_1.default.createElement("div", { key: result.coordinates.longitude },
            react_1.default.createElement(react_map_gl_1.Marker, { longitude: result.coordinates.longitude, latitude: result.coordinates.latitude },
                react_1.default.createElement("div", { onClick: () => {
                        searchResults === null || searchResults === void 0 ? void 0 : searchResults.forEach((result) => (result.isClicked = false));
                        toggleIsClicked(result);
                        setSelectedLocation(result);
                    }, className: "MarkerMapIcon" },
                    react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faMapMarkerAlt, color: result.isClicked === true ? "gray" : "red", size: "lg" }))),
            (selectedLocation === null || selectedLocation === void 0 ? void 0 : selectedLocation.isClicked) === true ? (react_1.default.createElement(react_map_gl_1.Popup, { latitude: selectedLocation.coordinates.latitude, longitude: selectedLocation.coordinates.longitude, offsetLeft: 8, offsetTop: -3, closeButton: false, onClose: () => {
                    searchResults === null || searchResults === void 0 ? void 0 : searchResults.forEach((result) => (result.isClicked = false));
                    setSelectedLocation(null);
                } },
                react_1.default.createElement("div", null,
                    react_1.default.createElement("h2", { className: "RoomName" }, selectedLocation.name),
                    react_1.default.createElement("div", { className: "InfoRow" },
                        react_1.default.createElement("div", { className: "IconContainer StarContainer" },
                            react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faStar, color: "red", size: "sm", className: "Star" })),
                        react_1.default.createElement("p", { className: "RoomRating" }, selectedLocation.rating),
                        react_1.default.createElement("p", { className: "RoomServeStyle" }, selectedLocation.serve_style),
                        react_1.default.createElement("p", { className: "RoomPrice" }, selectedLocation.price >= 250
                            ? "$$$$"
                            : selectedLocation.price < 250 &&
                                selectedLocation.price >= 125
                                ? "$$$"
                                : "$$"),
                        selectedLocation.michelin_stars >= 1 && (react_1.default.createElement("div", { className: "MichelinStarContainer" },
                            react_1.default.createElement(MichelinStar_1.MichelinStarIcon, null),
                            selectedLocation.michelin_stars >= 2 && (react_1.default.createElement(MichelinStar_1.MichelinStarIcon, null)),
                            selectedLocation.michelin_stars === 3 && (react_1.default.createElement(MichelinStar_1.MichelinStarIcon, null))))),
                    react_1.default.createElement("div", { className: "InfoRow" },
                        react_1.default.createElement("div", { className: "IconContainer" },
                            react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faMapMarkerAlt, size: "sm", className: "LocationMarker" })),
                        react_1.default.createElement("p", { className: "RoomNeighborhood" }, selectedLocation.neighborhood))))) : null))))));
};
exports.default = MapView;
