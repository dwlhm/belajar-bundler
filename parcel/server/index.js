"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var path_1 = __importDefault(require("path"));
dotenv_1["default"].config();
var app = (0, express_1["default"])();
var _a = process.env.PORT, PORT = _a === void 0 ? 3000 : _a;
app.use(express_1["default"].static(path_1["default"].join(__dirname, "..", "dist")));
app.get('/', function (req, res) {
    res.sendFile(path_1["default"].join(__dirname, "..", "dist", "index.html"));
});
if (require.main == module) {
    app.listen(PORT, function () {
        console.log("Server started at http://localhost:".concat(PORT));
    });
}
exports["default"] = app;
