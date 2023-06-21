import mongoose from "mongoose";
import colors from "colors";
const Connection = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Database Connection Sucessfully".bgMagenta.white);
  } catch (error) {
    console.log("Error In Database".bgRed.white, error);
  }
};

export default Connection;
