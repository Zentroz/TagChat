import app from "./app.js";
import dotenv from 'dotenv'
import connectDB from "./db/connection.db.js";

dotenv.config()

connectDB().
  then(() => {
    app.on("error", (error) => {
      console.log("Error in App:", error);
    })

    app.listen(process.env.PORT || 8000, () => {
      console.log(`Listening on port: ${process.env.PORT || 8000}`);
    })
  }).
  catch((error) => {
    console.log("Failed to establish DB connection:", error);
  })