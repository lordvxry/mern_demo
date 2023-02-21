import {FC} from 'react';
import FilmForm from '../FilmForm/FilmForm';
import {createFilmAction} from '../../store/actions/createFilmAction';

const FilmAdding: FC = () => {
    return (
        <div className="page_container">
            <h2>Adding form: </h2>
            <FilmForm submit={createFilmAction}/>
        </div>
    );
};

export default FilmAdding;