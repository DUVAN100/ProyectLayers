import expres from 'express';

export let routes = expres.Router();
import {ContorollerRooms} from '../Controllers/ContorollerRoom.js'
import {ContorollerBooking} from '../Controllers/ControllerBooking.js'


let contorollerRoom = new ContorollerRooms();
let contorollerBooking = new ContorollerBooking();
//routes
routes.post('/sroom', contorollerRoom.saveRoom)
routes.get('/room/:idroom', contorollerRoom.searchRoom)
routes.get('/rooms', contorollerRoom.searchRooms)
routes.put('/uroom/:idroom', contorollerRoom.updateRoom)
routes.delete('/droom/:idroom', contorollerRoom.deleteRoom)




//Bookings
routes.post('/sbooking', contorollerBooking.saveBooking)
routes.get('/booking/:idbooking', contorollerBooking.searchBooking)
routes.get('/bookings', contorollerBooking.searchBookings)
routes.put('/ubooking/:idbooking', contorollerBooking.updateBooking)
routes.delete('/dbooking/:idbooking', contorollerBooking.deleteBooking)