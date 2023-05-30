import { ServiceBooking } from "../servicios/ServiceBooking.js";
import { ServiceRoom } from "../servicios/ServiceRoom.js"

export class ContorollerBooking{
    constructor(){
    }
    async saveBooking(request,response){ 
        let data = request.body;
        let idToSearch = data.idroom
        let dateStart = new Date(data.dateendbooking)
        let dateEnd =  new Date(data.datestartbooking)
        let days = (dateStart - dateEnd) / (1000 * 60 * 60 * 24); 
        try {
            let objectRoom = new ServiceRoom();
            let objectBooking = new ServiceBooking();
            let responseConsult  = await objectRoom.searhId(idToSearch)
            
            if (responseConsult){     
                data.totalprice = days *  responseConsult.price
                if(data.datestartbooking >= data.dateendbooking){
                    response.status(400).json({
                        "message": "Process failed, review the dates."
                    })
                }else if(data.numberadults < 1 && data.numberchildrens > 5){
                    response.status(400).json({
                        "message": "Process failed, Review the fields number adults and number children."
                    })
                }else{
                    await objectBooking.register(data);         
                    response.status(200).json({
                        "message":"Saved booking",
                        "valueDay": days 
                    })
                }
            }
            else{
                response.status(400).json({
                    "message": "Process failed, The Room not exist."
                })
            }
          
        } catch (error) {
            console.log("error ", error)
             response.status(200).json({
                 "message": "failed process "+ error
            })
        }
    }

    async searchBooking(request,response){        
        let idBooking = request.params.idbooking
        try {
            let objectBooking = new ServiceBooking();
            await objectBooking.searhId(idBooking)
            response.status(200).json({
            "message":"processed correctly"  
            })   
        } catch (error) {
            response.status(200).json({
                "message": "failed process"+ error
            })
        }
    }

    async searchBookings(request,response){
        try {
            console.log("Enter methoid")
            let objectBooking = new ServiceBooking();
            response.status(200).json({
            "message":"processed correctly",
            "booking": await objectBooking.searhAll()
            })   
        } catch (error) {
            response.status(200).json({
                "message": "failed process"+ error
            })  
        }
    }

    async updateBooking(request,response){
        let idBooking = request.params.idbooking
        let data = request.body
        try {
            let objectBooking = new ServiceBooking();
            await objectBooking.update(idBooking, data);
            response.status(200).json({
            "message":"Updated Booking"
            })   
        } catch (error) {
            response.status(200).json({
                "message": "failed process"+ error
            })
        }
    }
    
    async deleteBooking(request,response){
        let idBooking = request.params.idbooking
        try {
            let objectBooking = new ServiceBooking();
            await objectBooking.delete(idBooking)
            response.status(200).json({
            "message":"Deleted booking"
            })   
        } catch (error) {
            response.status(200).json({
                "message": "failed process"+ error
            })
        }
    }

}