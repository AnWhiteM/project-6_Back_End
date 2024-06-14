import ctrlWrap from "../helpers/ctrlWrap.js";

import register from "./userControllers/register.js";
import login from "./userControllers/login.js";
import logout from "./userControllers/logout.js";
import getUserInfo from "./userControllers/getUserInfo.js";
import updUserInfo from "./userControllers/updUserInfo.js";
import changeTheme from "./userControllers/changeTheme.js";
import sendHelpMsg from "./userControllers/sendHelpMsg.js";
import changeUserAvatar from "./userControllers/changeUserAvatar.js";

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
import getAllTasks from "./tasksControllers/getAllTasks.js";
import getOneTask from "./tasksControllers/getOneTask.js";
import createTask from "./tasksControllers/createTask.js";
import updateTask from "./tasksControllers/updateTask.js";
import deleteTask from "./tasksControllers/deleteTask.js";

export default {
  // auth controllers
  register: ctrlWrap(register),
  login: ctrlWrap(login),
  logout: ctrlWrap(logout),

  // user controllers
  getUserInfo: ctrlWrap(getUserInfo),
  updUserInfo: ctrlWrap(updUserInfo),
  changeTheme: ctrlWrap(changeTheme),
  sendHelpMsg: ctrlWrap(sendHelpMsg),
  changeUserAvatar: ctrlWrap(changeUserAvatar),

  // desks controllers
  getAllDesks: ctrlWrap(getAllDesks),
  getOneDesk: ctrlWrap(getOneDesk),
  createDesk: ctrlWrap(createDesk),
  updateDesk: ctrlWrap(updateDesk),
  deleteDesk: ctrlWrap(deleteDesk),

  // columns controllers
  getAllColumns: ctrlWrap(getAllColumns),
  getOneColumn: ctrlWrap(getOneColumn),
  createColumn: ctrlWrap(createColumn),
  updateColumn: ctrlWrap(updateColumn),
  deleteColumn: ctrlWrap(deleteColumn),

  // tasks controllers
  getAllTasks: ctrlWrap(getAllTasks),
  getOneTask: ctrlWrap(getOneTask),
  createTask: ctrlWrap(createTask),
  updateTask: ctrlWrap(updateTask),
  deleteTask: ctrlWrap(deleteTask),
};
