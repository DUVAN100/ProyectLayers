import { modelBooking } from "../models/modelBooking.js";

export class ServiceBooking{
    constructor(){}
    async register(data){
        let room = new modelBooking(data);
        return  await room.save();
    }

    async searhAll(){
        return await modelBooking.find();
    }

    async searhId(id){
      return await modelBooking.findById(id)
    }
    
    async update(id, data){
        return await modelBooking.findByIdAndUpdate(id, data)
    }

    async delete(id){
        return await modelBooking.findOneAndDelete(id)
    }

}