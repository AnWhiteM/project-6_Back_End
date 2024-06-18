import express from "express";
import morgan from "morgan";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger.json" assert { type: "json" };
import { v2 as cloudinary } from "cloudinary";
import router from "./routes/index.js";
import "./db/db.js";

const PORT = process.env.PORT || 8080;

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

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
  console.info(`Server is running`);
});
