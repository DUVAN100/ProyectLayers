import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Booking =  new Schema({
    nameClient: {
        type : String,
        required : true,
    },
    lastNameClient: {
        type : String,
        required : true,
    },
    dateStartBooking: {
        type : Date,
        required : true
    },
    dateEndBooking: {
        type : Date,
        required : true,
    },
    numberChildrens:{
        type : Number,
        required : true
    },
    numberAdults:{
        type : Number,
        required : true
    }
  });
 export const modelBooking = mongoose.model('Bookings', Booking)