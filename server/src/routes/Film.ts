import {model, Schema} from 'mongoose';

const filmSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    genre: {
        type: String,
        trim: true,
    },
    year: {
        type: Number,
        trim: true,
    },
}, {
    versionKey: false,
    timestamps: true,
});

export default model('Film', filmSchema);