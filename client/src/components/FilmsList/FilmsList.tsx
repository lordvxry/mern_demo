import {FC, useEffect} from 'react';
import {useFilmsStore} from '../../store/filmsStore';
import Film from './FilmItem';
import './Films.css';
import {Spinner} from '@blueprintjs/core';

const FilmsList: FC = () => {
    const films = useFilmsStore(state => state.films);
    const isLoading = useFilmsStore(state => state.isLoading);
    const fetchFilms = useFilmsStore(state => state.fetchFilms);

    useEffect(() => {
        fetchFilms();
    }, []);

    return (
        <div className="page_container">
            <h2>Films list: </h2>
            {isLoading
                ? <Spinner/>
                : (films.map(film => (
                    <Film key={film._id} film={film}/>
                )))
            }
        </div>
    );
};

export default FilmsList;