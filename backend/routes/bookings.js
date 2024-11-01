import express from 'express';
import { createBooking, getBookingsByDate } from '../controllers/bookingController.js';

const router = express.Router();

router.post('/', createBooking);
router.get('/', getBookingsByDate);

export default router;
