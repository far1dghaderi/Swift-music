import mongoose from "mongoose";

export interface AlbumInterface {
  name: string;
  genre: string[];
  publishDate: Date;
  totalDuration: {
    hours: number;
    minutes: number;
    seconds: number;
  }; //in seconds,
  artists: [
    {
      id: mongoose.Schema.Types.ObjectId;
    }
  ];
  songs: [
    {
      id: mongoose.Schema.Types.ObjectId;
      name: string;
      duation: number;
      image: string;
      artists: [
        {
          id: mongoose.Schema.Types.ObjectId;
          name: string;
        }
      ];
      lyrics?: string;
    }
  ];
  image: string;
  background?: string[];
}

const albumSchema = new mongoose.Schema<AlbumInterface>({
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
        type: mongoose.Schema.Types.ObjectId,
        ref: "artists",
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
        type: mongoose.Schema.Types.ObjectId,
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
            type: mongoose.Schema.Types.ObjectId,
            ref: "artists",
            required: [true, "Each singer field must have an id "],
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

const albumModel = mongoose.model("albums", albumSchema);

export default albumModel;
