import dotenv from 'dotenv';

dotenv.config();
export default {
    PORT: process.env.PORT || 5000,
    URI: 'mongodb+srv://vladimir:55x0iGeJj9eSfftr@cluster0.cphsbs7.mongodb.net/filmsdb?retryWrites=true&w=majority',
};