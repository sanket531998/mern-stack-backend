//1. User.findOne()  => It finds the first entry in the database that matched the query
const existingUser = await User.findOne({
  $or: [{ email }, { userName }],
});
//2. User.create()
//3. User.findById()

// when we are using our custom methods from mongoose we have to use user with small use, because this is the one we got back
// from mongoose
// but the User with capital one we have to use for all the mongoose methods

//4. findById()
// const user = await User.findById(userId);

//5. findByIdAndUpdate()
// await User.findByIdAndUpdate(
//   req?.user?._id,
//   {
//     $set: { fullName, email },
//   },
//   { new: true }
// );
