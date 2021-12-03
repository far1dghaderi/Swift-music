"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SongType = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
var SongType;
(function (SongType) {
    SongType["Single"] = "single";
    SongType["Album"] = "album";
})(SongType = exports.SongType || (exports.SongType = {}));
const songSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        minlength: [2, "Song name must have more than 2 characters"],
        maxlength: [50, "Song name could not have more than 50 characters"],
        required: [true, "Each song most have a name"],
    },
    genre: [{ type: String, required: [true, "Each song must have an album"] }],
    publishDate: {
        type: Date,
        required: [true, "Each song must a publish date"],
    },
    duration: {
        hours: Number,
        minutes: Number,
        seconds: Number,
    },
    artists: [
        {
            id: {
                type: mongoose_1.default.Schema.Types.ObjectId,
                required: [true, "Each singer field must have an id "],
            },
            ref: {
                type: String,
                required: [true, "Each singer field must have an ref value"],
            },
            name: {
                type: String,
                minlength: [2, "Artist name must have more than 2 characters"],
                maxlength: [45, "Artist name could not have more than 45 characters"],
                required: [true, "Each artist must have a name"],
            },
        },
    ],
    album: [
        {
            id: {
                type: mongoose_1.default.Schema.Types.ObjectId,
                required: [true, "Each album field must have an id "],
            },
            ref: {
                type: String,
                required: [true, "Each album field must have an ref value"],
            },
            name: {
                type: String,
                required: [true, "Each album field must have a name"],
            },
        },
    ],
    type: {
        type: String,
        enum: {
            values: ["single", "album"],
            message: "each song's type must be either single or album ",
        },
    },
    lyrics: String,
    image: {
        type: String,
        required: [true, "Each song must have a image for it's cover"],
    },
});
const songModel = mongoose_1.default.model("songs", songSchema);
exports.default = songModel;
