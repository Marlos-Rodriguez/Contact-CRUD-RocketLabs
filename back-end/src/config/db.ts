import mongoose from "mongoose"
require("dotenv").config();

const connectDB = async () => {
  try {
    const uri:string = String(process.env.DB_MONGO);
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log("DB Connected");
  } catch (error) {
    console.log("Error in connect in DB");
    console.log(error);
    process.exit(1); // Stop app
  }
};

export default connectDB;
