import express from "express";
import cors from "cors";
import { configDotenv } from "dotenv";
import mongoose from "mongoose";
import calculationRouter from "./routers/calculationRouter.js";
import userRouter from "./routers/userRouter.js";

configDotenv();

const app = express();
const PORT = 7000 || process.env.PORT;

app.use(cors());
app.use(express.json());
app.use("/api", calculationRouter);
app.use("/auth", userRouter);

async function startApp() {
  try {
    await mongoose.connect(process.env.DB_URL);
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

startApp();
