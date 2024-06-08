export async function getUserInfo(req, res, next) {
  const { name, email, avatarURL, theme } = req.user;

  res.status(200).send({
    name,
    email,
    avatarURL,
    theme,
  });
}

export default getUserInfo;
