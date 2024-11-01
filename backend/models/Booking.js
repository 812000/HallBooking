import pool from '../config/db.js';

class Booking {
  static async createBooking({ hall_name, department, date, start_time, end_time, event_organizer, event_name, email }) {
    console.log("Entering into create Boooking Model");
    const result = await pool.query(
      `INSERT INTO bookings (hall_name, department, date, start_time, end_time, event_organizer, event_name, email) 
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`,
      [hall_name, department, date, start_time, end_time, event_organizer, event_name, email]
    );
    console.log("Exiting from create Boooking Model");
    return result.rows[0];    
  }

  static async checkAvailability(hall_name, date, start_time, end_time) {
    console.log("Entering into check availability model");
    const result = await pool.query(
      `SELECT * FROM bookings 
       WHERE hall_name = $1 AND date = $2 
       AND (start_time < $4 AND end_time > $3)`,
      [hall_name, date, start_time, end_time]
    );
    return result.rows.length === 0;
  }

  static async getBookingsByDate(date) {
    const result = await pool.query(
      `SELECT * FROM bookings WHERE date = $1`, 
      [date]
    );
    return result.rows;
  }
}

export default Booking;
