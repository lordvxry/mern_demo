import {FilmFormModel} from '../../models/FilmFormModel';
import {setFilmFormData} from '../../services/filmsServices';
import {createToaster} from '@hcfy/create-toaster';

export const createFilmAction =
    async (data: FilmFormModel) => {
        const result = await setFilmFormData(data);

        const toasterPromise = createToaster({position: 'bottom-right'});

        if (result.status === 200) {
            toasterPromise.then(toast => {
                toast.show({
                    message: 'Фильм успешно добавлен!',
                    intent: 'success',
                });
            });
        } else {
            toasterPromise.then(toast => {
                toast.show({
                    message: 'Ошибка! Такой фильм уже существует!',
                    intent: 'danger',
                });
            });
        }
        return result;
    };