import ctrlWrap from "../helpers/ctrlWrap.js";

import register from "./userControllers/register.js";
import login from "./userControllers/login.js";
import logout from "./userControllers/logout.js";
import getUserInfo from "./userControllers/getUserInfo.js";
import updUserInfo from "./userControllers/updUserInfo.js";
import changeTheme from "./userControllers/changeTheme.js";

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

  // user controllers
  getUserInfo: ctrlWrap(getUserInfo),
  updUserInfo: ctrlWrap(updUserInfo),
  changeTheme: ctrlWrap(changeTheme),

  // tasks controllers
  getAllDesks: ctrlWrap(getAllDesks),
  getOneDesk: ctrlWrap(getOneDesk),
  createDesk: ctrlWrap(createDesk),
  updateDesk: ctrlWrap(updateDesk),
  deleteDesk: ctrlWrap(deleteDesk),
};
