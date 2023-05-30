import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Booking =  new Schema({
    idroom: {
        type: String,
        required: true
    },
    nameclient: {
        type : String,
        required : true,
    },
    lastNameclient: {
        type : String,
        required : true,
    },
    datestartbooking: {
        type : Date,
        required : true
    },
    dateendbooking: {
        type : Date,
        required : true,
    },
    numberchildrens:{
        type : Number,
        required : true
    },
    numberadults:{
        type : Number,
        required : true
    },
    totalprice:{
        type:Number,
        required:true
    }
  });
 export const modelBooking = mongoose.model('Bookings', Booking)