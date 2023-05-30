import { modelRoom } from "../models/modelRoom.js";

export class ServiceRoom{
    constructor(){}

    async register(data){
        let room = new modelRoom(data);
        return  await room.save();
    }

    async searhId(id){
        return await modelRoom.findById(id)
    }

    async searhAll(){
        return await modelRoom.find();
    }

    async update(id, data){
        return await modelRoom.findByIdAndUpdate(id, data)
    }

    async delete(id){
        return await modelRoom.findOneAndDelete(id)
    }

}