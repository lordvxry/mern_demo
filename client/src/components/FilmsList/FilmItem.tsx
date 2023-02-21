import {FC, memo, useState} from 'react';
import {FilmModel} from '../../models/FilmModel';
import './Films.css';
import {Button, Classes, Dialog, DialogBody, DialogFooter} from '@blueprintjs/core';
import {useFilmsStore} from '../../store/filmsStore';
import FilmForm from '../FilmForm/FilmForm';
import {updateFilmAction} from '../../store/actions/updateFilmAction';
import {FilmFormModel} from '../../models/FilmFormModel';

interface Props {
    film: FilmModel;
}

const FilmItem: FC<Props> = memo(({film: {title, year, genre, _id}}) => {
    const deleteFilm = useFilmsStore(state => state.deleteFilm);
    const updateFilm = useFilmsStore(state => state.updateFilm);
    const [isOpen, setIsOpen] = useState(false);

    const dialogHandler = () => {
        setIsOpen(!isOpen);
    };

    const getFormData = async (data: FilmFormModel) => {
        const updatedFilm = await updateFilmAction(_id, data);
        updateFilm(updatedFilm.data);
    };

    return (
        <>
            <Dialog className={Classes.DARK} isOpen={isOpen}>
                <DialogBody>
                    <FilmForm
                        formData={{title, year: year?.toString(), genre}}
                        submit={getFormData}
                    />
                </DialogBody>
                <DialogFooter
                    actions={
                        <Button
                            onClick={dialogHandler}
                            intent="primary"
                            text="Close"
                        />
                    }/>
            </Dialog>
            <div className="film_item">
                <p><strong>Title:</strong> {title}</p>
                <p><strong>Genre:</strong> {genre}</p>
                <p><strong>Year:</strong> {year}</p>
                <div className="film_btns">
                    <Button
                        onClick={dialogHandler}
                        icon="edit"
                        text="Edit"
                    />
                    <Button
                        onClick={() => deleteFilm(_id)}
                        icon="trash"
                        intent="danger"
                        text="Delete"
                    />
                </div>
            </div>
        </>
    );
});

export default FilmItem;