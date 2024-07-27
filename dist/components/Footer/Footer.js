"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./Footer.css");
const Footer = () => {
    return (react_1.default.createElement("footer", null,
        react_1.default.createElement("p", null, "omakaserooms \u00A9 2022 - All rights reserved")));
};
exports.default = Footer;
