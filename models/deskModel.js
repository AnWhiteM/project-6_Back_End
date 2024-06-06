import { Schema, model } from "mongoose";
import handleMongooseError from "../helpers/handleMongooseError.js";

const deskSchema = new Schema({
  title: {
    type: String,
    maxlength: [64, "'Title' must contain max 64 characters"],
    required: [true, "'Title' is required"],
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  icon: {
    type: String,
  },
  background: {
    type: String,
  },
});

deskSchema.post("save", handleMongooseError);

export default model("Desk", deskSchema);
