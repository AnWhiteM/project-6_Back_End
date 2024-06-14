import httpError from "../../helpers/httpError.js";
import User from "../../models/userModel.js";
import { v2 as cloudinary } from "cloudinary";

export async function changeUserAvatar(req, res, next) {
  const uploadResult = await cloudinary.uploader
    .upload(req.body.avatarURL, {
      folder: "avatars",
    })
    .catch((error) => {
      console.log(error);
    });

  const user = await User.findOneAndUpdate(
    req.user._id,
    { avatarURL: uploadResult.url },
    { new: true }
  );

  if (!user) throw httpError(404);

  res.status(200).send({
    avatarURL: user.avatarURL,
  });
}

export default changeUserAvatar;
