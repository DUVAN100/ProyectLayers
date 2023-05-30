import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Room =  new Schema({
    name: {
        type : String,
        required : true,
    },
    photo: {
        type : [String],
        required : true
    },
    description: {
        type : String,
        required : true
    },
    price: {
        type : Number,
        required : true
    },
    numberpeoples: {
        type : Number,
        required : true
    },
    // reserved: {
    //     type: Boolean,
    // }
  });
  export const modelRoom = mongoose.model('rooms', Room);