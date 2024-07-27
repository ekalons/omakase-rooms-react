"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MichelinStarIcon = void 0;
const react_1 = __importDefault(require("react"));
const MichelinStar_svg_1 = __importDefault(require("../../assets/MichelinStar.svg"));
const MichelinStarIcon = () => {
    return (react_1.default.createElement("img", { src: MichelinStar_svg_1.default, alt: "Michelin Star", className: "MichelinStar" }));
};
exports.MichelinStarIcon = MichelinStarIcon;
