import {FC} from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import FilmsList from './FilmsList/FilmsList';
import FilmAdding from './FilmAdding/FilmAdding';
import AppNavbar from './AppNavbar/AppNavbar';

const App: FC = () => {
    return (
        <>
            <AppNavbar/>
            <Routes>
                <Route path={'/'} element={<FilmsList/>}/>
                <Route path={'/create'} element={<FilmAdding/>}/>
            </Routes>
        </>
    );
};

export default App;