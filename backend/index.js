import 'dotenv/config';
import express from 'express';
const app = express();
import cors from 'cors';
import dbConnect from './utils/db.connect.js';
import bodyParser from 'body-parser';
import path from 'path';
import errorHandler from './middlewares/errorMiddleware.js';
import loginRoutes from './routes/loginRoutes.router.js';
import signUpRoutes from './routes/signUpRoutes.router.js';
import questionRoutes from './routes/questionRoutes.router.js';


const PORT = process.env.port || 8000;
const publicPath = path.join(path.dirname(import.meta.url), 'public');

app.use(express.static(publicPath));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use(errorHandler);
dbConnect();

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use("/login", loginRoutes);
app.use("/signup", signUpRoutes);
app.get("/quiz", questionRoutes);

app.get('*', function(req, res){
    res.status(404).send('404 ERROR');
});


app.listen(PORT, () => {
    console.log('running on port: ', PORT);
})