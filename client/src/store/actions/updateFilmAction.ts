import {FilmFormModel} from '../../models/FilmFormModel';
import {updateFilmFormData} from '../../services/filmsServices';
import {createToaster} from '@hcfy/create-toaster';

export const updateFilmAction =
    async (id: string, data: FilmFormModel) => {
        const result = await updateFilmFormData(id, data);
        const toasterPromise = createToaster({position: 'bottom-right'});

        if (result.status === 200) {
            toasterPromise.then(toast => {
                toast.show({
                    message: 'Информация успешно обновлена!',
                    intent: 'success',
                });
            });
        } else {
            toasterPromise.then(toast => {
                toast.show({
                    message: 'Ошибка обновления информации!',
                    intent: 'danger',
                });
            });
        }
        return result;
    };