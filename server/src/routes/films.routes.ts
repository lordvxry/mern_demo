import {Router} from 'express';
import * as filmCtrl from './films.controller';

const router = Router();

router.post('/films', filmCtrl.createFilm);

router.get('/films', filmCtrl.getFilms);
router.get('/films/:id', filmCtrl.getFilm);

router.delete('/films/:id', filmCtrl.deleteFilm);

router.put('/films/:id', filmCtrl.updateFilm);
export default router;
