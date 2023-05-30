import { ServiceRoom } from "../servicios/ServiceRoom.js"
export class ContorollerRooms{
    constructor(){

    }

    async saveRoom(request, response){
        let data = request.body;
        try {
            let objectRoom = new ServiceRoom();
            if (data.price < 100){
                response.status(400).json({
                    "message": "failed process, price invalid"
                })
            }else if(data.numberpeoples < 1){
                response.status(400).json({
                    "message": "failed process, numbers peoples invalid"
                })
            }else{
                await objectRoom.register(data)
                response.status(200).json({
                    "message":"saved room"
                }) 
            }
        } catch (error) {
            response.status(400).json({
                "message": "failed process"+ error
            })
        }
    }
    async searchRoom(request,response){
        let idRoom = request.params.idroom;
        try {
            let objectRoom = new ServiceRoom();
            response.status(200).json({
                "message":"processed correctly",
                "romm": await objectRoom.searhId(idRoom)
            })
        } catch (error) {
            response.status(400).json({
                "message": "failed process"+ error
            })
        }
    }
    async searchRooms(request,response){
        try {
            let objectRooms = new ServiceRoom();
            response.status(200).json({
                "message":"processed correctly",
                "rooms": await objectRooms.searhAll()
            })
        } catch (error) {
            response.status(200).json({
                "message": "failed process"+ error
            })
        }
    }
    async updateRoom(request,response){
        let idRoom = request.params.idroom;
        let data = request.body;
        try {
            let objectRoom = new ServiceRoom();
            await objectRoom.update(idRoom, data)
            response.status(200).json({
            "message":"Updated room correctly"
            })   
        } catch (error) {
            response.status(400).json({
                "message": "failed process"+ error
            })
        }
    }
    async deleteRoom(request,response){
        let idRoom = request.params.idroom
        try {
            let objectRoom = new ServiceRoom();
            await objectRoom.delete(idRoom)
            response.status(200).json({
                "message":"Room  deleted correctly"
            })   
        } catch (error) {
            response.status(400).json({
                "message": "failed process"+ error
            })
        }
    }
}