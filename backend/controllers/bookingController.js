import Booking from '../models/Booking.js';

export const createBooking = async (req, res) => {
  console.log("Entering into create Boooking controlller");
  const { hall_name, department, date, start_time, end_time ,event_organizer, event_name, email} = req.body;
  try {
    const isAvailable = await Booking.checkAvailability(hall_name, date, start_time, end_time );
    if (!isAvailable) {
      return res.status(400).json({ message: 'Hall is already booked during this time slot.' });
    }
    const booking = await Booking.createBooking({ hall_name, department, date, start_time, end_time , event_organizer, event_name, email});
    res.status(201).json(booking);
    console.log("Exiting from create Boooking controlller");
  } catch (error) {
    console.log("Error from controller", error.message);
    res.status(500).json({ message: error.message });
  }
};

export const getBookingsByDate = async (req, res) => {
  const { date } = req.query;
  try {
    const bookings = await Booking.getBookingsByDate(date);
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
