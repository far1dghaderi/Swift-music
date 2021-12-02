import mongoose from "mongoose";

export interface SongInterface {
  name: string;
  genre: string[];
  publishDate: Date;
  duration: number; //in seconds,
  artists: [
    {
      id: mongoose.Schema.Types.ObjectId;
      ref: string;
    }
  ];
  album: [
    {
      id: mongoose.Schema.Types.ObjectId;
      ref: string;
      name: string;
    }
  ];
  lyrics?: string;
  image: string;
  type: string;
}
export enum SongType {
  Single = "single",
  Album = "album",
}

const songSchema = new mongoose.Schema<SongInterface>({
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
    type: Number,
    required: [true, "each song must have a duration"],
  },
  artists: [
    {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "Each singer field must have an id "],
      },
      ref: {
        type: String,
        required: [true, "Each singer field must have an ref value"],
      },
    },
  ],
  album: [
    {
      id: {
        type: mongoose.Schema.Types.ObjectId,
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

const songModel = mongoose.model("songs", songSchema);

export default songModel;
