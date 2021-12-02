"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const mongoose_1 = __importDefault(require("mongoose"));
const DB_Con_String = process.env.DATABASE_CONNECTION_STRING;
mongoose_1.default
    .connect(DB_Con_String, {})
    .then(() => {
    app_1.default.listen(process.env.PORT, () => {
        console.log("Server has been started at port " + process.env.PORT);
    });
})
    .catch((err) => {
    console.log("There was a problem with connecting to the DB, error was: " + err);
});
