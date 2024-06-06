import Desk from "../models/deskModel.js";

export const listDesks = async (ownerId) => {
  const desks = await Desk.find({ owner: ownerId });
  return desks;
};

export const getDesk = async (id, ownerId) => {
  const desk = await Desk.findOne({ _id: id, owner: ownerId });
  return desk;
};

export const addDesk = async ({ title, owner, icon, background }) => {
  const desk = await Desk.create({ title, owner, icon, background });
  return desk;
};

export const rewriteDesk = async (id, ownerId, fields) => {
  const desk = await Desk.findOneAndUpdate(
    { _id: id, owner: ownerId },
    fields,
    {
      new: true,
    }
  );
  return desk;
};

export const removeDesk = (id, ownerId) => {
  const desk = Desk.findOneAndDelete({ _id: id, owner: ownerId });
  return desk;
};
