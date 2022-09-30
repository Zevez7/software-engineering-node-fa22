/**
 * @file Implements an Express Node HTTP server.
 */

// "npm run dev" to start server
import express, {Request, Response} from 'express';
import * as mongoose from "mongoose";
import * as moviesDao from "./movies/movies-dao";
import MoviesController from "./movies/movies-controller";
const cors = require('cors')
const app = express();
app.use(cors());
app.use(express.json());
mongoose.connect('mongodb://localhost:27017/fsd');

const dbCallback = (movies: any) => {
    console.log('invoked when db returns data')
    console.log(movies);
}

// moviesDao
//     .findAllMovies()
//     .then(movies => console.log(movies));

function sayHello (req: Request, res: Response) {
    res.send('Hi from FSD 1!!!');
}

const sayHello2 = (req: Request, res: Response) =>
    res.send('Hi from FSD 2!!!');

const movieController = new MoviesController(app);

app.get('/', sayHello);

app.get('/hello', sayHello2);

/**
 * Start a server listening at port 4000 locally
 * but use environment variable PORT on Heroku if available.
 */
const PORT = 4001;
app.listen(process.env.PORT || PORT);
