import * as mongoose from "mongoose";

const User = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: false,
  },
  signingKey: {
    type: String,
    unique: true,
    required: true,
  },
});

export default mongoose.model("Users", User);
