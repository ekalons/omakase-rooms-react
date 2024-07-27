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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const axios_1 = __importDefault(require("axios"));
require("./Rooms.css");
const Header_1 = __importDefault(require("../Header/Header"));
const RoomCard_1 = __importDefault(require("../RoomCard/RoomCard"));
const Mapview_1 = __importDefault(require("../Mapview/Mapview"));
const Rooms = () => {
    const [rooms, setRooms] = (0, react_1.useState)([]);
    const [clickedRoomCard, setClickedRoomCard] = (0, react_1.useState)(null);
    const [isPriceClicked, setIsPriceClicked] = (0, react_1.useState)(true);
    const [isMichelinClicked, setIsMichelinClicked] = (0, react_1.useState)(true);
    const [isBarTableClicked, setIsBarTableClicked] = (0, react_1.useState)(true);
    const url = process.env.REACT_APP_SERVER_ACCESS_TOKEN;
    const fetchData = () => {
        axios_1.default.get(`${url}/api/rooms`).then((response) => {
            response.data.forEach((room) => (room.isClicked = false));
            setRooms(response.data);
        });
    };
    (0, react_1.useEffect)(() => {
        fetchData();
    }, []);
    const onPriceClick = () => {
        const ascendingPriceSort = (a, b) => {
            if (a.price < b.price) {
                return -1;
            }
            if (a.price > b.price) {
                return 1;
            }
            return 0;
        };
        setIsPriceClicked(!isPriceClicked);
        if (isPriceClicked === true) {
            const arrToUpdate = rooms;
            const priceSortArr = arrToUpdate === null || arrToUpdate === void 0 ? void 0 : arrToUpdate.sort(ascendingPriceSort);
            setRooms(priceSortArr);
        }
        else if (isPriceClicked === false) {
            fetchData();
        }
    };
    const onMichelinClick = () => {
        setIsMichelinClicked(!isMichelinClicked);
        if (isMichelinClicked === true) {
            const arrToUpdate = rooms;
            const michelinArr = arrToUpdate.filter(function (el) {
                return el.michelin_stars >= 1;
            });
            setRooms(michelinArr);
        }
        else {
            fetchData();
        }
    };
    const onBarTableClick = () => {
        setIsBarTableClicked(!isBarTableClicked);
        if (isBarTableClicked === true) {
            const arrToUpdate = rooms;
            const barTableArr = arrToUpdate.filter(function (el) {
                return el.serve_style !== "Bar";
            });
            setRooms(barTableArr);
        }
        else {
            fetchData();
        }
    };
    const updateRoomsState = (obj) => {
        setClickedRoomCard(obj);
    };
    return (react_1.default.createElement("div", { className: "Rooms" },
        react_1.default.createElement(Header_1.default, null),
        react_1.default.createElement("div", { className: "HeaderBackground" }),
        react_1.default.createElement("div", { className: "PageContainer" },
            react_1.default.createElement("div", { className: "RoomResultsContainer" },
                react_1.default.createElement("div", { className: "ParameterContainer" },
                    react_1.default.createElement("h2", { className: "CityName" }, "Rooms in New York City"),
                    react_1.default.createElement("div", { className: "Parameters" },
                        react_1.default.createElement("p", { onClick: onPriceClick, style: {
                                backgroundColor: isPriceClicked === false ? "rgb(228 228 231)" : "",
                            } }, "Price"),
                        react_1.default.createElement("p", { onClick: onMichelinClick, style: {
                                backgroundColor: isMichelinClicked === false ? "rgb(228 228 231)" : "",
                            } }, "Michelin stars"),
                        react_1.default.createElement("p", { onClick: onBarTableClick, style: {
                                backgroundColor: isBarTableClicked === false ? "rgb(228 228 231)" : "",
                            } }, "Bar / Table"))),
                react_1.default.createElement("div", { className: "RoomResults" }, rooms === null || rooms === void 0 ? void 0 : rooms.map(({ _id, name, details, rating, review_count, neighborhood, price, michelin_stars, serve_style, coordinates, photo, isClicked, }) => (react_1.default.createElement(RoomCard_1.default, { key: _id, name: name, details: details, rating: rating, review_count: review_count, neighborhood: neighborhood, price: price, michelin_stars: michelin_stars, serve_style: serve_style, coordinates: coordinates, photo: photo, isClicked: isClicked, allRooms: rooms, updateParent: updateRoomsState }))))),
            react_1.default.createElement("div", { className: "MapContainer" },
                react_1.default.createElement(Mapview_1.default, { searchResults: rooms, clickedElement: clickedRoomCard })))));
};
exports.default = Rooms;
