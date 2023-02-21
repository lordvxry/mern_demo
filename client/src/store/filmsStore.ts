import {create} from 'zustand';
import {FilmModel} from '../models/FilmModel';
import * as services from '../services/filmsServices';

interface FilmsState {
    films: FilmModel[];
    isLoading: boolean;
    fetchFilms: () => void;
    deleteFilm: (id: string) => void;
    updateFilm: (film: FilmModel) => void;
}

export const useFilmsStore = create<FilmsState>((set) => ({
    films: [],
    isLoading: true,
    fetchFilms: async () => {
        const result = await services.getFilms();
        set({films: result});
        set({isLoading: false});
    },
    deleteFilm: async (id) => {
        const deletedFilm = await services.deleteFilm(id);

        set(state => {
                const newState = state.films.filter(film => film._id !== deletedFilm._id);
                return {
                    films: newState,
                };
            },
        );
    },
    updateFilm: async (newFilm) => {
        set(state => {
                return {
                    films: state.films.map((film) => (film._id === newFilm._id ? newFilm : film)),
                };
            },
        );
    },
}));