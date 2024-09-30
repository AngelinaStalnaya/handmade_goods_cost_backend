import express from 'express';
import cors from 'cors';
import { configDotenv } from 'dotenv';
import mongoose from 'mongoose';
import router from './routers/router.js';

configDotenv();

const app = express();
const PORT = 7000 || process.env.PORT;

app.use(cors())
app.use(express.json())
app.use('/api', router);

async function startApp() {
    try {
        await mongoose.connect(process.env.DB_URL)
        app.listen(PORT, () => {
            console.log(`Server is listening on port ${PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
}

startApp()

