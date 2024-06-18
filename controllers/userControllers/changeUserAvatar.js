import { v2 as cloudinary } from "cloudinary";
import httpError from "../../helpers/httpError.js";
import User from "../../models/userModel.js";

const changeUserAvatar = async (req, res, next) => {
  if (!req.file) throw httpError(400, "Invalid request body");

  cloudinary.uploader
    .upload_stream({ folder: "avatars" }, async (error, uploadResult) => {
      if (error || !uploadResult) {
        throw httpError(500, "Error uploading to Cloudinary");
      }

      const user = await User.findOneAndUpdate(
        { _id: req.user._id },
        { avatarURL: uploadResult.secure_url },
        { new: true }
      );

      if (!user) throw httpError(404);

      res.status(200).send({
        avatarURL: user.avatarURL,
      });
    })
    .end(req.file.buffer);
};

export default changeUserAvatar;
