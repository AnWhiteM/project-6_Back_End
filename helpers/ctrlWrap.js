function ctrlWrap(controller) {
  const wrap = async (req, res, next) => {
    try {
      await controller(req, res, next);
    } catch (error) {
      next(error);
    }
  };
  return wrap;
};

export default ctrlWrap;
