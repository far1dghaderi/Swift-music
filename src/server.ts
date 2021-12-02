import app from "./app";
import mongoose from "mongoose";

const DB_Con_String = process.env.DATABASE_CONNECTION_STRING as string;

mongoose
  .connect(DB_Con_String, {})
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Server has been started at port " + process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(
      "There was a problem with connecting to the DB, error was: " + err
    );
  });
