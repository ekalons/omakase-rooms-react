"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./Home.css");
const Header_1 = __importDefault(require("../Header/Header"));
const Item_1 = __importDefault(require("../Item/Item"));
const MapItem_1 = __importDefault(require("../MapItem/MapItem"));
const chef_jpeg_1 = __importDefault(require("../../assets/chef.jpeg"));
const room_jpeg_1 = __importDefault(require("../../assets/room.jpeg"));
const serving_jpeg_1 = __importDefault(require("../../assets/serving.jpeg"));
const Home = () => {
    return (react_1.default.createElement("div", { className: "Home" },
        react_1.default.createElement(Header_1.default, null),
        react_1.default.createElement("div", { className: "HomeItemsContainer" },
            react_1.default.createElement(Item_1.default, { title: "Omakase", description: '"I leave it up to you" which means you are letting the chef decide what to serve. They will plan the dishes and adjust based on your reactions', backgroundImg: serving_jpeg_1.default, backgroundColor: "#F3EEE8", photoLeft: false, first: true }),
            react_1.default.createElement(Item_1.default, { title: "Rooms", description: "Omakase restaurants are typically referred to as rooms, due to their limited size. They offer a quiet and intimate dining experience.", backgroundImg: room_jpeg_1.default, backgroundColor: "#F8F7F4", photoLeft: true, first: false }),
            react_1.default.createElement(Item_1.default, { title: "Counter", description: "Dishes are usually served in counters. It allows the chef to accurately manage food temperature as well as to observe your reactions", backgroundImg: chef_jpeg_1.default, backgroundColor: "#F3EEE8", photoLeft: false, first: false }),
            window.innerWidth > 720 && react_1.default.createElement(MapItem_1.default, { backgroundColor: "#F8F7F4" }))));
};
exports.default = Home;
