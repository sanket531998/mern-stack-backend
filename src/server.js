import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";
import dotenv from "dotenv";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(
    app.on("error", (error) => {
      console.log(`ERRR: ${error}`);
      throw error;
    }),

    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port ${process.env.PORT}`);
    })
  )
  .catch((error) => {
    console.log("MongoDB connection failed ", error);
  });

// First simple approach
/*
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

    app.on("error", (error) => {
      console.log(`App is listening on port ${process.env.PORT}`);
    });


     app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port ${process.env.PORT}`);
    })
  } catch {
    console.error("ERROR: ", error);
    throw err;
  }
})();
*/
