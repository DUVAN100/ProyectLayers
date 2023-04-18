import mongoose from 'mongoose';

export async function setConnection(){
    try {
        await mongoose.connect(process.env.DATABASE)
        console.log('Connected!');
    } catch (error) {
        console.log("Connection failed", error)
    }
    
}