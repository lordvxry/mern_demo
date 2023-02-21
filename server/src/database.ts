import mongoose from 'mongoose';
import config from './config';

(async () => {
    try {
        mongoose.set('strictQuery', false);

        const db = await mongoose.connect(config.URI);
        console.log('db is connected to:', db.connection?.name);
    } catch (err) {
        console.error(err);
    }
})();
