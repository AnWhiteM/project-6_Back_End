import express from "express";
import morgan from "morgan";
import cors from "cors";
import router from "./routes/index.js";
import "./db/db.js";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger.json" assert { type: "json" };

const PORT = process.env.PORT || 8080;

const app = express();

app.use(morgan("dev")); // ❗VS dev notes: to del before deploy❗
app.use(cors());
app.use(express.json());

app.use("/", router);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use((req, res) => {
  res.status(404).send("Route not found");
});

app.use((error, req, res, next) => {
  const { status = 500, message = "Server error" } = error;
  res.status(status).send({ message });
});

app.listen(PORT, () => {
  console.info(`Server is running. Use our API on port: ${PORT}`);
});
