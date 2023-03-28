import expres from 'express';

export let routes = expres.Router();

routes.get('/rooms', function (req, res) {
    res.send('Looking a rooms');
})
routes.get('/room', function (req, res) {
    res.send('Looking a room');
})
routes.post('/sroom', function (req, res) {
    res.send('Save a room');
})
routes.get('/uroom', function (req, res) {
    res.send('Update a room');
})
routes.delete('/droom', function (req, res) {
    res.send('Delete a room');
})
//Bookings
routes.get('/bookings', function (req, res) {
res.send('Looking a bookings');
})
routes.get('/booking', function (req, res) {
    res.send('Looking a booking');
})
routes.post('/sbooking', function (req, res) {
    res.send('Save a booking');
})
routes.get('/ubooking', function (req, res) {
    res.send('Update a booking');
})
routes.delete('/dbooking', function (req, res) {
    res.send('Delete a booking');
})