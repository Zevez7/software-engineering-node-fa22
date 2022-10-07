import { Express, Request, Response } from "express";
import * as movieDao from "./movies-dao";
import { deleteMovie } from "./movies-dao";

class MoviesController {
  findAllMovies(req: Request, res: Response) {
    movieDao.findAllMovies().then((movies) => res.send(movies));
  }

  findMovieById(req: Request, res: Response) {
    const movieId = req.params.mid;
    movieDao.findMovieById(movieId).then((movie) => {
      return res.send(movie);
    });
  }

  deleteMovie(req: Request, res: Response) {
    const movieId = req.params.mid;
    movieDao.deleteMovie(movieId).then((movie) => {
      return res.send(movie);
    });
  }

  createMovie(req: Request, res: Response) {
    const newMovie = req.body;

    movieDao.createMovie(newMovie).then((movies) => res.json(movies));
  }

  constructor(app: Express) {
    app.get("/api/movies", this.findAllMovies);
    app.get("/api/movies/:mid", this.findMovieById);
    app.delete("/api/movies/:mid", this.deleteMovie);
    app.post("/api/movies", this.createMovie);
  }
}
export default MoviesController;
