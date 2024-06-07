import ctrlWrap from "../helpers/ctrlWrap.js";

import register from "./register.js";
import login from "./login.js";
import logout from "./logout.js";
import getAllDesks from "./desksControllers/getAllDesks.js";
import getOneDesk from "./desksControllers/getOneDesk.js";
import createDesk from "./desksControllers/createDesk.js";
import updateDesk from "./desksControllers/updateDesk.js";
import deleteDesk from "./desksControllers/deleteDesk.js";
import getAllColumns from "./columnsControllers/getAllColumns.js";
import getOneColumn from "./columnsControllers/getOneColumn.js";
import createColumn from "./columnsControllers/createColumn.js";
import updateColumn from "./columnsControllers/updateColumn.js";
import deleteColumn from "./columnsControllers/deleteColumn.js";

export default {
  // auth controllers
  register: ctrlWrap(register),
  login: ctrlWrap(login),
  logout: ctrlWrap(logout),
  getAllDesks: ctrlWrap(getAllDesks),
  getOneDesk: ctrlWrap(getOneDesk),
  createDesk: ctrlWrap(createDesk),
  updateDesk: ctrlWrap(updateDesk),
  deleteDesk: ctrlWrap(deleteDesk),
  getAllColumns: ctrlWrap(getAllColumns),
  getOneColumn: ctrlWrap(getOneColumn),
  createColumn: ctrlWrap(createColumn),
  updateColumn: ctrlWrap(updateColumn),
  deleteColumn: ctrlWrap(deleteColumn),
};
