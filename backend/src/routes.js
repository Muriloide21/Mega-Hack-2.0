// const express = require('express');

// const SessionController = require('./controllers/SessionController');
// const SpotController = require('./controllers/SpotController');
// const DashboardController = require('./controllers/DashboardController');
// const BookingController = require('./controllers/BookingController');
// const ApprovalController = require('./controllers/ApprovalController');
// const RejectionController = require('./controllers/RejectionController');

// const routes = express.Router();

// //get(buscar), post(criar), put(editar), delete(apagar)

// //req.query = Acessar query params (para filtros)
// //req.params = Acessar route params (para edição e delete)
// //req.body = Acessar corpo da requisição (para criação, edição)

// routes.post('/sessions', SessionController.store);
// routes.post('/spots', upload.single('thumbnail'), SpotController.store);

// routes.get('/dashboard', DashboardController.show);

// routes.get('/spots', SpotController.index);

// routes.post('/spots/:spot_id/bookings', BookingController.store);

// routes.post('/bookings/:booking_id/approvals', ApprovalController.store);
// routes.post('/bookings/:booking_id/rejections', RejectionController.store);

// module.exports = routes;