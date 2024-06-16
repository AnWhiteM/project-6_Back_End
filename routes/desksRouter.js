import express from "express";
import { createDeskSchema, updateDeskSchema } from "../schemas/deskSchemas.js";
import mdwrs from "../middlewares/index.js";
import ctrls from "../controllers/index.js";

const deskRouter = express.Router();

deskRouter.get("/", ctrls.getAllDesks);

deskRouter.get("/:id", ctrls.getOneDesk);

deskRouter.post("/", mdwrs.validateBody(createDeskSchema), ctrls.createDesk);

deskRouter.put("/:id", mdwrs.validateBody(updateDeskSchema), ctrls.updateDesk);

deskRouter.delete("/:id", ctrls.deleteDesk);

export default deskRouter;
