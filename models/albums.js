"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const albumSchema = new mongoose_1.default.Schema({
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
    totalDuration: {
        hours: Number,
        minutes: Number,
        seconds: Number,
    },
    artists: [
        {
            id: {
                type: mongoose_1.default.Schema.Types.ObjectId,
                required: [true, "Each artist field must have an id "],
            },
            ref: {
                type: String,
                required: [true, "Each artist field must have an ref value"],
            },
            type: String,
            minlength: [2, "Artist name must have more than 2 characters"],
            maxlength: [45, "Artist name could not have more than 45 characters"],
            required: [true, "Each artist must have a name"],
        },
    ],
    songs: [
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
                minlength: [2, "Song name must have more than 2 characters"],
                maxlength: [50, "Song name could not have more than 50 characters"],
                required: [true, "Each song most have a name"],
            },
            duration: {
                type: Number,
                required: [true, "each song must have a duration"],
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
                        maxlength: [
                            45,
                            "Artist name could not have more than 45 characters",
                        ],
                        required: [true, "Each artist must have a name"],
                    },
                },
            ],
            lyrics: String,
            image: {
                type: String,
                required: [true, "Each song must have a image for it's cover"],
            },
        },
    ],
    image: {
        type: String,
        required: [true, "Each song must have a image for it's cover"],
    },
    background: [String],
});
const albumModel = mongoose_1.default.model("albums", albumSchema);
exports.default = albumModel;
