import express from "express";
import cors from "cors";
import { configDotenv } from "dotenv";
import mongoose from "mongoose";
import calculationRouter from "./routers/calculationRouter.js";
import userRouter from "./routers/userRouter.js";

configDotenv();

const app = express();

app.use(cors({
  origin: 'https://goods-cost-app.vercel.app/'
}));
app.use(express.json());
app.get('/', (req, res) => res.send('Express on Vercel'));
app.use("/api", calculationRouter);
app.use("/auth", userRouter);

async function startApp() {
  try {
    await mongoose.connect(process.env.DB_URL);
    app.listen( () => {
      console.log(`Server is listening`);
    });
  } catch (error) {
    console.log(error);
  }
}

startApp();
