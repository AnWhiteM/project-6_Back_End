import ctrlWrap from "../helpers/ctrlWrap.js";

import register from "./register.js";
import login from "./login.js";
import logout from "./logout.js";
import getAllDesks from "./tasksControllers/getAllDesks.js";
import getOneDesk from "./tasksControllers/getOneDesk.js";
import createDesk from "./tasksControllers/createDesk.js";
import updateDesk from "./tasksControllers/updateDesk.js";
import deleteDesk from "./tasksControllers/deleteDesk.js";

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
};
