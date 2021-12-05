"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const artistSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        minlength: [2, "Artist name must have more than 2 characters"],
        maxlength: [45, "Artist name could not have more than 45 characters"],
        required: [true, "Each artist must have a name"],
    },
    middlename: {
        type: String,
        minlength: [2, "Artist name must have more than 2 characters"],
        maxlength: [45, "Artist name could not have more than 45 characters"],
    },
    lastname: {
        type: String,
        minlength: [2, "Artist name must have more than 2 characters"],
        maxlength: [45, "Artist name could not have more than 45 characters"],
    },
    username: {
        type: String,
        minlength: [2, "Artist name must have more than 2 characters"],
        maxlength: [70, "Artist name could not have more than 45 characters"],
        required: [true, "Each artist must have a username"],
        unique: true,
    },
    nationalty: String,
    birthdate: Date,
    genre: [{ type: String }],
    avatar: {
        type: String,
        default: "default.png",
    },
    backgrounds: [
        {
            src: {
                type: String,
                required: [true, "each bg must have a src"],
            },
            main: {
                type: Boolean,
                default: false,
            },
        },
    ],
    songs: [
        {
            name: {
                type: String,
                minlength: [2, "Song name must have more than 2 characters"],
                maxlength: [50, "Song name could not have more than 50 characters"],
                required: [true, "Each song most have a name"],
            },
            genre: [
                { type: String, required: [true, "Each song must have an album"] },
            ],
            publishDate: {
                type: Date,
                required: [true, "Each song must a publish date"],
            },
            duration: {
                type: Number,
                required: [true, "each song must have a duration"],
            },
            artists: [
                {
                    id: {
                        type: mongoose_1.default.Schema.Types.ObjectId,
                        ref: "artists",
                        required: [true, "Each singer field must have an id "],
                    },
                },
            ],
            album: [
                {
                    id: {
                        type: mongoose_1.default.Schema.Types.ObjectId,
                        ref: "albums",
                        required: [true, "Each album field must have an id "],
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
        },
    ],
    albums: [
        {
            name: {
                type: String,
                minlength: [2, "Song name must have more than 2 characters"],
                maxlength: [50, "Song name could not have more than 50 characters"],
                required: [true, "Each song most have a name"],
            },
            genre: [
                { type: String, required: [true, "Each song must have an album"] },
            ],
            publishDate: {
                type: Date,
                required: [true, "Each song must a publish date"],
            },
            totalDuration: {
                type: Number,
                required: [true, "each song must have a duration"],
            },
            artists: [
                {
                    id: {
                        type: mongoose_1.default.Schema.Types.ObjectId,
                        ref: "albums",
                        required: [true, "Each artist field must have an id "],
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
                        ref: "songs",
                        required: [true, "Each album field must have an id "],
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
                                ref: "artists",
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
            background: [{ type: String }],
            folder: String,
        },
    ],
});
artistSchema.index({ username: 1 });
const artistModel = mongoose_1.default.model("artists", artistSchema);
exports.default = artistModel;
