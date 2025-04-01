// import model
import User from "./schema";



// create documents
const CreateDoc = async () => {
  const user = new User({
    name: "Mahmoud Nasr",
    age: 19,
  });
  await user.save();
  console.log("User Created");
};
// insert many documents
const CreateManyDoc = async () => {
  const users = [
    { name: "Mahmoud Nasr", age: 19 },
    { name: "Ahmed Mohamed", age: 20 },
    { name: "Ali Ahmed", age: 21 },
  ];
  await User.insertMany(users);
  console.log("Users Created");
};



// find all documents
const FindAll = async () => {
  const users = await User.find();
  console.log(users);
};
// find one document
const FindOne = async () => {
  const user = await User.findOne({ name: "Mahmoud Nasr" });
  // or can use the following code
  // const user = await User.find({ name: "Mahmoud Nasr" });
  console.log(user);
};
// find one document by id
const FindOneById = async () => {
  const user = await User.findById("63f8c3f7d4c4b0d5a0f2e5e1");
  console.log(user);
};
// can you use limit and skip and sort
const FindLimitAndSkip = async () => {
  const users = await User.find().limit(2).skip(1).sort({ name: -1 });
  console.log(users);
};
// can you use gt and lt and gte and lte
const FindGtAndLt = async () => {
  const users = await User.find({ age: { $gt: 20, $lt: 30 } });
  console.log(users);
};
// can you use regex 
const FindRegex = async () => {
  const users = await User.find({ name: { $regex: /Mahmoud/i } });
  console.log(users);
};
// can you use or and and
const FindOrAnd = async () => {
  const users = await User.find({
    $or: [{ name: "Mahmoud Nasr" }, { age: 19 }],
  });
  // and
  // const users = await User.find({
  //   $and: [{ name: "Mahmoud Nasr" }, { age: 19 }],
  // });
  console.log(users);
};


// update one document


// update many documents


// delete one document

// delete many documents