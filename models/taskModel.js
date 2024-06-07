import { Schema, model } from "mongoose";
import handleMongooseError from "../helpers/handleMongooseError.js";

const taskSchema = new Schema({
  title: {
    type: String,
    maxlength: [64, "'Title' must contain max 64 characters"],
    required: [true, "'Title' is required"],
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "Column",
  },
  description: {
    type: String,
    required: [true, "'Description' is required"],
  },
  labelColor: {
    type: String,
    required: [true, "'Label Color' is required"],
  },
  deadline: {
    type: Date,
    required: [true, "'Label Color' is required"],
  },
  priority: {
    type: String,
    required: [true, "'Priority' is required"],
  },
});

taskSchema.post("save", handleMongooseError);

export default model("Task", taskSchema);
