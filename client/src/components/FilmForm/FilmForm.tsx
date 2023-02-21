import {FC} from 'react';
import {Button, FormGroup, InputGroup} from '@blueprintjs/core/lib/esnext';
import {Controller, useForm} from 'react-hook-form';
import './FilmForm.css';
import {FilmFormModel} from '../../models/FilmFormModel';

interface FormDataType {
    title: string;
    genre: string;
    year: string;
}

interface Props {
    formData?: FormDataType;
    submit: (data: FilmFormModel) => void;
}

const defaultValue: FormDataType = {
    title: '',
    genre: '',
    year: '',
};

const FilmForm: FC<Props> = ({formData, submit}) => {
    const form = useForm<FormDataType>({
        defaultValues: formData ?? defaultValue,
    });
    const {isDirty, dirtyFields} = form.formState;

    const addFilmHandler = form.handleSubmit((data) => {
        if (data.year) {
            submit({...data, year: +data.year});
        } else {
            submit({title: data.title, genre: data.genre});
        }

        formData ? form.reset(data) : form.reset();
    });

    const formFields: Array<keyof FormDataType> = ['title', 'genre', 'year'];

    return (
        <div className="film_form">
            {formFields.map((item) => (
                <FormGroup
                    key={item}
                    label={item[0].toUpperCase() + item.slice(1)}
                    labelInfo={item === 'title' ? '(is required)' : ''}
                >
                    <Controller
                        name={item}
                        control={form.control}
                        render={({field}) => <InputGroup
                            {...field}
                            type={item === 'year' ? 'number' : 'text'}
                            intent={dirtyFields[item] ? 'success' : 'none'}
                        />}
                    />
                </FormGroup>
            ))}
            <Button
                onClick={addFilmHandler}
                disabled={formData ? !isDirty : !(dirtyFields.title && isDirty)}
                type="submit"
                intent="success"
                text="Add"
            />
        </div>
    );
};

export default FilmForm;