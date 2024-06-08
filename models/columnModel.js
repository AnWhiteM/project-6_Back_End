import { Schema, model } from "mongoose";
import handleMongooseError from "../helpers/handleMongooseError.js";

const columnSchema = new Schema({
  title: {
    type: String,
    maxlength: [64, "'Title' must contain max 64 characters"],
    required: [true, "'Title' is required"],
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "Desk",
  },
});

columnSchema.post("save", handleMongooseError);

export default model("Column", columnSchema);
