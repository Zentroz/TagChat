import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.DB_CONNECTION_URI);
    console.log("MongoDB Connected Successfully:", connection.connection.host)
  } catch (error) {
    console.log("DB ERROR:", error);
    process.exit(1);
  }
}

export default connectDB;