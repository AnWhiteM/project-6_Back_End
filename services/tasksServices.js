import Desk from "../models/deskModel.js";
import Column from "../models/columnModel.js";

// Desk Services

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

// Column Services

export const listColumns = async (ownerId) => {
  const columns = await Column.find({ owner: ownerId });
  return columns;
};

export const getColumn = async (id, ownerId) => {
  const column = await Column.findOne({ _id: id, owner: ownerId });
  return column;
};

export const addColumn = async ({ title, deskId }) => {
  console.log(title, deskId);
  const column = await Column.create({ title, owner: deskId });
  return column;
};

export const rewriteColumn = async (id, ownerId, fields) => {
  const column = await Column.findOneAndUpdate(
    { _id: id, owner: ownerId },
    fields,
    {
      new: true,
    }
  );
  return column;
};

export const removeColumn = (id, ownerId) => {
  const column = Column.findOneAndDelete({ _id: id, owner: ownerId });
  return column;
};
