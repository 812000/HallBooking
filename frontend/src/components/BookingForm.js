import React, { useState } from 'react';
import axios from 'axios';

const BookingForm = () => {
  const [hallName, setHallName] = useState('');
  const [department, setDepartment] = useState('');
  const [date, setDate] = useState('');
  const [eventName, setEventName] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [organizerName, setOrganizerName] = useState('');
  const [email, setemail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const bookingData = {
      hall_name: hallName,
      department: department,
      date: date,
      start_time: startTime,
      end_time: endTime,
      event_organizer: organizerName,
      event_name:eventName,
      email:email
    };

    try {
      const response = await axios.post('http://localhost:3001/api/bookings', bookingData);
      alert('Booking successful!');
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert('Failed to book the hall.');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Hall:</label>
      <input
        type="text"
        value={hallName}
        onChange={(e) => setHallName(e.target.value)}
        required
      />
      
      <label>Department:</label>
      <input
        type="text"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
        required
      />
      
      <label>Date:</label>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />

      <label>Event Name:</label>
      <input
        type="text"
        value={eventName}
        onChange={(e) => setEventName(e.target.value)}
        required
      />
      
      <label>Start Time:</label>
      <input
        type="time"
        value={startTime}
        onChange={(e) => setStartTime(e.target.value)}
        required
      />
      
      <label>End Time:</label>
      <input
        type="time"
        value={endTime}
        onChange={(e) => setEndTime(e.target.value)}
        required
      />

      <label>Organizer Name:</label>
      <input
        type="text"
        value={organizerName}
        onChange={(e) => setOrganizerName(e.target.value)}
        required
      />

      <label>Email:</label>
      <input
        type="text"
        value={email}
        onChange={(e) => setemail(e.target.value)}
        required
      />
      
      <button type="submit">Book</button>
    </form>
  );
};

export default BookingForm;
