import express from 'express';
import cors from 'cors';


const app = express();
const PORT = 7000;

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello from our server!')
})
app.get('/get_user', (req,res) => {
    res.send('This is user data')
})

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})