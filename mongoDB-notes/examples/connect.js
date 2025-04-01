import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("MongoDB URI", {
      // can add options here
      // check this link to read more about options: https://mongoosejs.com/docs/connections.html#options
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.log(error);
  }
};
// mongo db connection string is usually like this
// mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority

export default connectDB;
