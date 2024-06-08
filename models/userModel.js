import { Schema, model } from "mongoose";
import handleMongooseError from "../helpers/handleMongooseError.js";
import { emailRegexp } from "../helpers/regexps.js";


const userSchema = new Schema(
  {
    name: {
      type: String,
      minlength: [4, "'Name' must contain min 8 characters"],
      maxlength: [64, "'Name' must contain max 64 characters"],
      required: [true, "'Name' is required"],
    },
    email: {
      type: String,
      math: emailRegexp,
      required: [true, "'Email' is required"],
      unique: true,
    },
    password: {
      type: String,
      minlength: [8, "'Password' must contain min 8 characters"],
      maxlength: [64, "'Password' must contain max 64 characters"],
      required: [true, "'Password' is required"],
    },
    avatarURL: {
      type: String,
      default: "",
    },
    theme: {
      type: String,
      enum: ["light", "dark", "violet"],
      default: "light",
    },
    token: {
      type: String,
      default: null,
    },
  },
  { versionKey: false, timestamps: true }
);

userSchema.post("save", handleMongooseError);

export default model("User", userSchema);
