export class ContorollerBooking{
    constructor(){
        
    }
    saveBooking(request,response){
        try {
            let data = request.body
            console.log("DATA: ",data)
            response.status(200).json({
            "message":"processed correctly"
            })   
        } catch (error) {
            response.status(200).json({
                "message": "failed process"+ error
            })
        }
    }
    searchBooking(request,response){
        let idBooking = request.params.idbooking
        console.log("idBooking: ",idBooking)
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
    searchBookings(request,response){
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
    updateBooking(request,response){
        try {
            let idBooking = request.params.idbooking
            console.log("idBooking: ",idBooking)
            response.status(200).json({
            "message":"processed correctly"
            })   
        } catch (error) {
            response.status(200).json({
                "message": "failed process"+ error
            })
        }
    }
    deleteBooking(request,response){
        try {
            let idRoom = request.params.idroom
            response.status(200).json({
            "message":"processed correctly"
            })   
        } catch (error) {
            response.status(200).json({
                "message": "failed process"+ error
            })
        }
    }

}