import ctrlWrap from "../helpers/ctrlWrap.js";

import register from "./register.js";
import login from "./login.js";
import logout from "./logout.js";

export default {
  // auth controllers
  register: ctrlWrap(register),
  login: ctrlWrap(login),
  logout: ctrlWrap(logout),
};
