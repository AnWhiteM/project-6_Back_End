import mongoose from "mongoose";

mongoose
  .connect(process.env.DB_URI)
  .then(() => console.info("Database connection successfully"))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
