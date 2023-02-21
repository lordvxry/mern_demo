import {RequestHandler} from 'express';
import Film from './Film';
import {HttpStatusCodes} from '../statuses';

export const createFilm: RequestHandler = async (req, res) => {
    const filmFound = await Film.findOne({title: req.body.title});
    if (filmFound) {
        return res.status(HttpStatusCodes.NoContent).json({message: 'The film already exists'});
    }

    const film = new Film(req.body);
    const savedFilm = await film.save();
    res.json(savedFilm);
};
export const getFilms: RequestHandler = async (req, res) => {
    try {
        const films = await Film.find();
        return res.json(films);
    } catch (err) {
        res.json(err);
    }
};

export const getFilm: RequestHandler = async (req, res) => {
    const filmFound = await Film.findById(req.params.id);
    if (!filmFound) return res.status(HttpStatusCodes.NoContent).json();

    res.json(filmFound);
};

export const deleteFilm: RequestHandler = async (req, res) => {
    const filmFound = await Film.findByIdAndDelete(req.params.id);
    if (!filmFound) return res.status(HttpStatusCodes.NoContent).json();

    res.json(filmFound);
};

export const updateFilm: RequestHandler = async (req, res) => {
    const filmUpdated = await Film.findByIdAndUpdate(req.params.id, req.body, {new: true});
    if (!filmUpdated) return res.status(HttpStatusCodes.NoContent).json();

    res.json(filmUpdated);
};