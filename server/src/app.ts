import express, {urlencoded} from 'express';
import morgan from 'morgan';
import cors from 'cors';
import config from './config';
import filmsRoutes from './routes/films.routes';

const app = express();

app.set('port', config.PORT);

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(urlencoded({extended: false}));

app.use(filmsRoutes);

export default app;