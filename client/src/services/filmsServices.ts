import axios from 'axios';
import {FilmFormModel} from '../models/FilmFormModel';
import {FilmModel} from '../models/FilmModel';

const URL = 'http://localhost:5000';

export const getFilms = async () => {
    return await axios.get(`${URL}/films`).then(res => res.data);
};

export const setFilmFormData = async (data: FilmFormModel) => {
    return await axios.post(`${URL}/films`, data);
};

export const updateFilmFormData = async (id: string, data: FilmFormModel) => {
    return await axios.put(`${URL}/films/${id}`, data);
};

export const deleteFilm = async (id: string) => {
    return await axios.delete(`${URL}/films/${id}`).then(res => res.data as FilmModel);
};