import React, { useState } from 'react';
import axios from 'axios';

const Calendar = () => {
  const [date, setDate] = useState('');
  const [bookings, setBookings] = useState([]);

  const fetchBookings = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/api/bookings?date=${date}`);
      setBookings(response.data);
    } catch (error) {
      alert('Failed to fetch bookings.');
    }
  };

  return (
    <div className="calendar">
      <h2>Booking Calendar</h2>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button onClick={fetchBookings}>Check Availability</button>

      <div className="booking-list">
        {bookings.map((booking) => (
          <div className="booking-item" key={booking.id}>
            <span><strong>Hall:</strong> {booking.hall_name}</span>
            <span><strong>Department:</strong> {booking.department}</span>
            <span><strong>Event Name:</strong> {booking.event_name}</span>
            <span><strong>Start:</strong> {booking.start_time}</span>
            <span><strong>End:</strong> {booking.end_time}</span>
            <span><strong>Organizer Name:</strong> {booking.event_organizer}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
