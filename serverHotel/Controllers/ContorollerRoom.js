export class ContorollerRooms{
    constructor(){

    }
    saveRoom(request, response){
        try {
            let data = request.body
            console.log("DATA: ",data)
            response.status(200).json({
            "message":"processed correctly"
            })
        } catch (error) {
            response.status(400).json({
                "message": "failed process"+ error
            })
        }
    }
    searchRoom(request,response){
        try {
            let idRoom = request.params.idroom
            console.log("ID: ",idRoom)
            response.status(200).json({
            "message":"processed correctly"
            })
        } catch (error) {
            response.status(400).json({
                "message": "failed process"+ error
            })
        }
    }
    searchRooms(request,response){
        try {
            response.status(200).json({
            "message":"processed correctly"
            })
        } catch (error) {
            response.status(200).json({
                "message": "failed process"+ error
            })
        }
    }
    updateRoom(request,response){
        try {
            let idRoom = request.params.idroom
            console.log("ID:", idRoom)
            response.status(200).json({
            "message":"processed correctly"
            })   
        } catch (error) {
            response.status(400).json({
                "message": "failed process"+ error
            })
        }
    }
    deleteRoom(request,response){
        try {
            let idRoom = request.params.idroom
            console.log("idRoom:", idRoom)
            response.status(200).json({
                "message":"processed correctly"
            })   
        } catch (error) {
            response.status(400).json({
                "message": "failed process"+ error
            })
        }
    }
}