import mongoose from "mongoose";
// test schema
// const userSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//     min: 3,
//     max: 255,
//   },
//   age: {
//     type: Number,
//     required: true,
//     min: 18
//   },
//   username: {
//     type: String,
//     required: true,
//     min: 3,
//     max: 255,
//     unique: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   password: {
//     type: String,
//     required: true,
//     min: 6,
//     max: 1024,
//   },
//   address: {
//     type: [String],
//     required: true,
//   },
//   role: {
//     type: String,
//     enum: ["user", "admin"],
//     default: "user",
//   },
//   isActive: {
//     type: Boolean,
//     default: false,
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

// create a sample schema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    age: {
      type: Number,
      min: 18,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  // timestamps option adds createdAt and updatedAt fields automatically
  { timestamps: true }
);

// create a model based on the schema
const User = mongoose.model("User", userSchema);

export default User;
